# 🔗 URL Shortener Service

A simple Node.js service that shortens long URLs and logs each request and response both remotely and locally.

---

## 🚀 Features

- Accepts long URLs and returns a short version
- Supports custom expiry (in hours)
- Logs all activity to a remote API and local `logs/logs.txt`

---

## 📦 Project Structure

22J41A6730/
├── BackendTestSubmission/ # Main app (Express)
├── LoggingMiddleware/ # Logger function


## 📡 API

**POST** `/shorturls`

### Request:

```json
{
  "url": "https://example.com",
  "validity": 2,
  "shortCode": "abc123" // optional
}
Response:
json
Copy
Edit
{
  "shortUrl": "http://short.url/abc123",
  "expiryTime": "2025-07-10T14:00:00.000Z"
}

**outputs**
![Screenshot 2025-07-09 113922](https://github.com/user-attachments/assets/361a9fa8-4ebd-4906-aeb3-a2e719a755ef)

🛠 Tech
Node.js, Express.js

Axios, Body-parser

File System for local logs

👤 Author
Praharsh Sai
![image](https://github.com/user-attachments/assets/de85be76-3ac9-450a-a9a8-ad739834de67)
![Screenshot 2025-07-09 113922](https://github.com/user-attachments/assets/87cfdb62-fac2-430b-bcdc-62c51b7d6170)
