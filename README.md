# Node Hello World

Simple node.js app that servers "hello world"

Great for testing simple deployments to the cloud

## Run It

`npm start`

npm install -g ngrok
ngrok http 3000

https://abcd-12-34-56.ngrok.io/chartink-webhook


curl --location --request POST 'http://localhost:3000/chartink-webhook' \
--header 'Content-Type: application/json' \
--data-raw '{
    "stocks": "SEPOWER,ASTEC,EDUCOMP,KSERASERA,IOLCP,GUJAPOLLO,EMCO",
    "trigger_prices": "3.75,541.8,2.1,0.2,329.6,166.8,1.25",
    "triggered_at": "2:34 pm",
    "scan_name": "Short term breakouts",
    "scan_url": "short-term-breakouts",
    "alert_name": "Alert for Short term breakouts",
    "webhook_url": "http://your-web-hook-url.com"
}'
8060385170:AAGYXvjYeM0m1V49ggGRvLLne6_WkPZS4qk

url = https://chartink-telegram-jy73.onrender.com/chartink-webhook

curl --location --request POST 'https://chartink-telegram-jy73.onrender.com/chartink-webhook' \
--header 'Content-Type: application/json' \
--data-raw '{
    "stocks": "SEPOWER,ASTEC,EDUCOMP,KSERASERA,IOLCP,GUJAPOLLO,EMCO",
    "trigger_prices": "3.75,541.8,2.1,0.2,329.6,166.8,1.25",
    "triggered_at": "2:34 pm",
    "scan_name": "Short term breakouts",
    "scan_url": "short-term-breakouts",
    "alert_name": "Alert for Short term breakouts",
    "webhook_url": "http://your-web-hook-url.com"
}'
