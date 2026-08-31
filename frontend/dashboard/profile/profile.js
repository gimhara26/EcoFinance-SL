const API = "/api/profile";

const token = localStorage.getItem("token");

// Redirect if user is not logged in
if (!token) {
  window.location.href = "../login.html";
}

document.addEventListener("DOMContentLoaded", () => {

  const updateProfileBtn =
    document.getElementById("updateProfileBtn");

  const changePasswordBtn =
    document.getElementById("changePasswordBtn");

  if (updateProfileBtn) {
    updateProfileBtn.addEventListener(
      "click",
      updateProfile
    );
  }

  if (changePasswordBtn) {
    changePasswordBtn.addEventListener(
      "click",
      changePassword
    );
  }

  loadProfile();
});


// ================================
// Load Profile
// ================================

async function loadProfile() {

  try {

    const response = await fetch(
      API,
      {
        method: "GET",

        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    // Token expired / invalid
    if (response.status === 401) {

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "../login.html";

      return;
    }

    if (!response.ok) {

      throw new Error(
        `Profile API returned ${response.status}`
      );
    }

    const user = await response.json();

    console.log("Profile:", user);

    // Get elements
    const profileName =
      document.getElementById("profileName");

    const profileRole =
      document.getElementById("profileRole");

    const avatar =
      document.getElementById("avatar");

    const fullName =
      document.getElementById("fullName");

    const username =
      document.getElementById("username");

    const email =
      document.getElementById("email");

    const role =
      document.getElementById("role");

    const language =
      document.getElementById("language");

    const theme =
      document.getElementById("theme");


    // Profile name
    if (profileName) {
      profileName.textContent =
        user.full_name || "";
    }


    // Profile role
    if (profileRole) {
      profileRole.textContent =
        user.role || "";
    }


    // Avatar
    if (avatar && user.full_name) {

      avatar.textContent =
        user.full_name
          .charAt(0)
          .toUpperCase();
    }


    // Full name
    if (fullName) {
      fullName.value =
        user.full_name || "";
    }


    // Username
    if (username) {
      username.value =
        user.username || "";
    }


    // Email
    if (email) {
      email.value =
        user.email || "";
    }


    // Role
    if (role) {
      role.value =
        user.role || "";
    }


    // Language
    if (language) {
      language.value =
        user.language || "en";
    }


    // Theme
    if (theme) {
      theme.value =
        user.theme || "light";
    }


  } catch (error) {

    console.error(
      "Failed to load profile:",
      error
    );

    showMessage(
      "Unable to load profile.",
      "danger"
    );
  }
}


// ================================
// Update Profile
// ================================

async function updateProfile() {

  const fullName =
    document.getElementById("fullName");

  const email =
    document.getElementById("email");

  const language =
    document.getElementById("language");

  const theme =
    document.getElementById("theme");


  const data = {

    full_name:
      fullName
        ? fullName.value.trim()
        : "",

    email:
      email
        ? email.value.trim()
        : "",

    language:
      language
        ? language.value
        : "en",

    theme:
      theme
        ? theme.value
        : "light"
  };


  try {

    const response = await fetch(
      API,
      {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json",

          "Authorization":
            `Bearer ${token}`
        },

        body:
          JSON.stringify(data)
      }
    );


    // Token expired / invalid
    if (response.status === 401) {

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href =
        "../login.html";

      return;
    }


    const result =
      await response.json();


    if (!response.ok) {

      throw new Error(
        result.message ||
        "Unable to update profile."
      );
    }


    // Update local user data
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {

      try {

        const user =
          JSON.parse(storedUser);

        user.full_name =
          data.full_name;

        user.email =
          data.email;

        user.language =
          data.language;

        user.theme =
          data.theme;

        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );

      } catch (error) {

        console.error(
          "Unable to update local user:",
          error
        );
      }
    }


    // Update profile display
    const profileName =
      document.getElementById(
        "profileName"
      );

    if (profileName) {

      profileName.textContent =
        data.full_name;
    }


    const avatar =
      document.getElementById("avatar");

    if (avatar && data.full_name) {

      avatar.textContent =
        data.full_name
          .charAt(0)
          .toUpperCase();
    }


    showMessage(
      result.message ||
      "Profile updated successfully.",
      "success"
    );


  } catch (error) {

    console.error(
      "Profile update failed:",
      error
    );

    showMessage(
      error.message ||
      "Server connection failed.",
      "danger"
    );
  }
}


// ================================
// Change Password
// ================================

async function changePassword() {

  const currentPassword =
    document.getElementById(
      "currentPassword"
    );

  const newPassword =
    document.getElementById(
      "newPassword"
    );

  const confirmPassword =
    document.getElementById(
      "confirmPassword"
    );


  const currentPasswordValue =
    currentPassword
      ? currentPassword.value
      : "";

  const newPasswordValue =
    newPassword
      ? newPassword.value
      : "";

  const confirmPasswordValue =
    confirmPassword
      ? confirmPassword.value
      : "";


  // Validate
  if (!currentPasswordValue) {

    showMessage(
      "Please enter your current password.",
      "danger"
    );

    return;
  }


  if (!newPasswordValue) {

    showMessage(
      "Please enter a new password.",
      "danger"
    );

    return;
  }


  if (
    newPasswordValue !==
    confirmPasswordValue
  ) {

    showMessage(
      "Passwords do not match.",
      "danger"
    );

    return;
  }


  try {

    const response =
      await fetch(
        `${API}/change-password`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            "Authorization":
              `Bearer ${token}`
          },

          body:
            JSON.stringify({
              current_password:
                currentPasswordValue,

              new_password:
                newPasswordValue
            })
        }
      );


    // Token expired
    if (response.status === 401) {

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href =
        "../login.html";

      return;
    }


    const result =
      await response.json();


    if (!response.ok) {

      throw new Error(
        result.message ||
        "Unable to change password."
      );
    }


    showMessage(
      result.message ||
      "Password changed successfully.",
      "success"
    );


    // Clear fields
    if (currentPassword) {
      currentPassword.value = "";
    }

    if (newPassword) {
      newPassword.value = "";
    }

    if (confirmPassword) {
      confirmPassword.value = "";
    }


  } catch (error) {

    console.error(
      "Password change failed:",
      error
    );

    showMessage(
      error.message ||
      "Server connection failed.",
      "danger"
    );
  }
}


// ================================
// Message
// ================================

function showMessage(message, type) {

  const messageElement =
    document.getElementById("message");

  if (!messageElement) {
    return;
  }


  messageElement.innerHTML = `
        <div class="alert alert-${type}">
            ${message}
        </div>
    `;


  // Automatically remove message
  setTimeout(() => {

    messageElement.innerHTML = "";

  }, 5000);
}