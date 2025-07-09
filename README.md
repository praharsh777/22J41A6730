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

{
  "shortUrl": "http://short.url/abc123",
  "expiryTime": "2025-07-10T14:00:00.000Z"
}

**outputs**
![image alt](https://github.com/praharsh777/22J41A6730/blob/338fded7b5f7e87e83e7450a7e633ba9accbdb46/output1.png?raw=true)

<img width="840" height="687" alt="Image" src="https://github.com/user-attachments/assets/baa80861-5344-49cd-aaaa-a6159caf5fe5" />


🛠 Tech!

Node.js, Express.js

Axios, Body-parser

File System for local logs


👤 Author
Praharsh Sai

