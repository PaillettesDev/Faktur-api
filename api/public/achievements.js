const express = require('express')
const app = express()

/* Utils */
const fs = require('fs')

app.get('/allachievements', (req, res) => {
    const achievements = JSON.parse(fs.readFileSync("assets/site/achievement/allAchievement.json"))

    res.send(achievements)

    res.status(404)
})

app.get('/categoryinfo', (req, res) => {
    const categoryinfo = JSON.parse(fs.readFileSync("assets/site/achievement/categoryAchievement.json"))

    res.send(categoryinfo)

    res.status(404)
})

module.exports = app