const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/* Utils */
const fs = require('fs')

app.get('/qr', (req, res) => {
    const question_response = JSON.parse(fs.readFileSync("assets/site/faq/question_response.json"))

    res.send(question_response)

    res.status(404)
})

app.post('/addquestion', (req, res) =>{
    var request_question = JSON.parse(fs.readFileSync("assets/site/faq/request_add_question.json"))

    let request = {
        discord_tag: req.body.discord_tag,
        email: req.body.email,
        question: req.body.question,
        date: new Date()
    }

    request_question.push(request)

    fs.writeFileSync('assets/site/faq/request_add_question.json', JSON.stringify(request_question, null, 4))

    res.send(request)
})

module.exports = app