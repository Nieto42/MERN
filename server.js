const express = require('express');
require('dotenv').config({path:'./config/.env'})
const app = express();

app.listen(processs.env.PORT, () => {
    console.log(`listening on port 5000'${process.env.PORT}`);
})