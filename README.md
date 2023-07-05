Installation
>Clone the repository

>Switch to the repo folder
cd pair-data

>Install dependencies
npm install


>Now head towards the browser or postman and hit URI:
http://localhost:3000/api/pairs to fetch the data.

recursive calls are being shown in console.

Attempt
Use sqlite for In-Memory database, Axios for HttpServices, NestJs/Schedule for recursive jobs.

Issue
http response not properly cloned to DTO object though not stored.