const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/* Utils */
const fs = require('fs')

app.get('/members', (req, res) => {
    const members = JSON.parse(fs.readFileSync("assets/faction/members.json"))

    res.send(members)

    res.status(404)
})

app.get('/relations', (req, res) => {
    const relations = JSON.parse(fs.readFileSync("assets/faction/relations.json"))

    res.send(relations)

    res.status(404)
})

module.exports = app