POST http://172.20.10.2:5000/api/auth/login
request
{
"email": "palihakoon.smp@gmail.com",
"password": "admin123"
}
response
{
"message": "Login successful.",
"success": true,
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc4NDk4OTc4MiwianRpIjoiYWIzMjgyZDYtNjhmMy00ODczLTg5YTEtNzIwMzYzMmNiNDNiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjMiLCJuYmYiOjE3ODQ5ODk3ODIsImNzcmYiOiIwOWIwNTMwYy03YjY3LTQ5NjctYjg0OS1hNmNjYjIzMDJlYTkiLCJleHAiOjE3ODQ5OTA2ODJ9.DA1Df-dvvNYVv7Jzn_SoY_ebJu2eLSDyIcIieun_8jw",
"user": {
"email": "palihakoon.smp@gmail.com",
"full_name": "Sanjaya Madusanka Palihakoon",
"id": 3
}
}

GET http://172.20.10.2:5000/api/dashboard
{
"data": {
"average_esg_score": 0.0,
"company_name": "ABC Holdings (Pvt) Ltd",
"latest_esg": null,
"total_emission": 0.0,
"total_reports": 0
},
"success": true
}
