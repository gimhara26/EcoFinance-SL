const API = "http://localhost:5000/api/profile";

const token = localStorage.getItem("token");

document.addEventListener("DOMContentLoaded", () => {
  loadProfile();

  document
    .getElementById("updateProfileBtn")
    .addEventListener("click", updateProfile);

  document
    .getElementById("changePasswordBtn")
    .addEventListener("click", changePassword);
});

async function loadProfile() {
  const response = await fetch(API, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) return;

  const user = await response.json();

  profileName.textContent = user.full_name;
  profileRole.textContent = user.role;

  avatar.textContent = user.full_name.charAt(0).toUpperCase();

  fullName.value = user.full_name;
  username.value = user.username;
  email.value = user.email;
  role.value = user.role;

  language.value = user.language || "en";
  theme.value = user.theme || "light";
}

async function updateProfile() {
  const response = await fetch(API, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",

      Authorization: "Bearer " + token,
    },

    body: JSON.stringify({
      full_name: fullName.value,
      email: email.value,
      language: language.value,
      theme: theme.value,
    }),
  });

  if (response.ok) {
    alert("Profile updated successfully.");
  } else {
    alert("Unable to update profile.");
  }
}

async function changePassword() {
  if (newPassword.value !== confirmPassword.value) {
    alert("Passwords do not match.");

    return;
  }

  const response = await fetch(API + "/change-password", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: "Bearer " + token,
    },

    body: JSON.stringify({
      current_password: currentPassword.value,
      new_password: newPassword.value,
    }),
  });

  if (response.ok) {
    alert("Password changed successfully.");

    currentPassword.value = "";
    newPassword.value = "";
    confirmPassword.value = "";
  } else {
    alert("Current password is incorrect.");
  }
}
