const axios = require("axios");

const LOG_URL = "http://20.244.56.144/evaluation-service/logs";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmFoYXJzaHNhaTg2N0BnbWFpbC5jb20iLCJleHAiOjE3NTIwNDE3OTcsImlhdCI6MTc1MjA0MDg5NywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImQxNDMyY2UxLTQ4NTctNDE2Yi1iNGY2LTk0YTgwOWM2ZTUzZiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hZGFiYXRodWxhIHByYWhhcnNoIHNhaSIsInN1YiI6IjI5Y2I0NzZjLWMxN2UtNDYwMy04NjNkLTY2Y2M3Nzg1MWFmMiJ9LCJlbWFpbCI6InByYWhhcnNoc2FpODY3QGdtYWlsLmNvbSIsIm5hbWUiOiJtYWRhYmF0aHVsYSBwcmFoYXJzaCBzYWkiLCJyb2xsTm8iOiIyMmo0MWE2NzMwIiwiYWNjZXNzQ29kZSI6ImVlV0VyeCIsImNsaWVudElEIjoiMjljYjQ3NmMtYzE3ZS00NjAzLTg2M2QtNjZjYzc3ODUxYWYyIiwiY2xpZW50U2VjcmV0IjoiYWdta2h2ZFlIcENmWHBVUiJ9.cEDqGs22bu3vTV3ie9Oc_Hq42uRQGEB7v4S4VGOaSEw";

async function log(stack, level, pkg, message) {
  try {
    await axios.post(
      LOG_URL,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    );
    console.log(`[${level.toUpperCase()}] (${pkg}): ${message}`);
  } catch (error) {
    console.error("Logging failed:", error.response?.data || error.message);
  }
}

module.exports = log;
