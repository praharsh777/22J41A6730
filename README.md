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

![Screenshot 2025-07-09 115758](https://github.com/user-attachments/assets/b630810a-7cea-4c61-a85f-8cb9d597035a)
![Screenshot 2025-07-09 113922](https://github.com/user-attachments/assets/e0e351c0-2655-41c9-8566-ea607c92f971)

🛠 Tech
Node.js, Express.js

Axios, Body-parser

File System for local logs


👤 Author
Praharsh Sai

