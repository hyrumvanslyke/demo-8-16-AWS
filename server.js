const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))// TELLS AWS TO USE CURRENT DIRECTORY NAME SO WE CAN TELL IT WHAT FILES TO SERVE

app.get('/api/cat', (req, res) =>{
    res.status(200).send('Best regards from Flavio the cat.')
})

app.listen(4000, () => console.log('Server is gettin lit on 4000'))