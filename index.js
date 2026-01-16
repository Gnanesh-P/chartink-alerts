// const http = require('http');
// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   const msg = 'Hello Node!\n'
//   res.end(msg);
// });

// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// 🔹 TELEGRAM CONFIG
const TELEGRAM_BOT_TOKEN = "8060385170:AAGYXvjYeM0m1V49ggGRvLLne6_WkPZS4qk";
const TELEGRAM_CHAT_ID = "-5227908010";

// 🔹 CHARTINK WEBHOOK
app.post("/chartink-webhook", async (req, res) => {
    try {
        console.log("Received Alert:", req.body);

        const message = `
<b>📊 Chartink Alert</b>
-----------------------
<b>Stocks:</b> ${req.body.stocks || "N/A"}
<b>Alert:</b> ${req.body.scanner_name || "N/A"}
<b>Trigger Time:</b> ${req.body.triggered_at}
`;
        const alertMessage = `
      
*Stock*: ${req.body.stocks || "N/A"}
*Alert*: ${req.body.scanner_name || "N/A"}
*Time*: ${req.body.triggered_at}
        `;

        await axios.post(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: "HTML"
            }
        );

        res.status(200).send("Alert sent to Telegram");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error sending alert");
    }
});

// 🔹 START SERVER
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
