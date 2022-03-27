/* Express */
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

/* Utils*/
const fs = require('fs')
const cors = require('cors')

/* Routes */
const Faction = require('./api/public/faction.js')
const Faq= require('./api/public/faq.js')

/* Init */
app.use(cors());
app.use(bodyParser.json())

/* API */
app.use('/faction', Faction)
app.use('/faq', Faq)

/** Init listeners */
const port = process.env.API_PORT;

app.listen(port, () => {
    console.log("server starting on port : " + port)
})