const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require("path")

/* Utils */
const fs = require('fs')

app.get('/:files/:imageName', (req, res ) => {
    var options = {
        root: path.join("././images"),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }

      res.sendFile(req.params.files + "/" + req.params.imageName, options, function (err) {
        if (err) {
          res.send({error: true})
          console.log(err)
        }
      })
})

module.exports = app