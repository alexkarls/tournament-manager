const express = require('express')
const cors = require('cors')

// Loads the .env file which is used to pass host, user and password to the environment (process.env)
require('dotenv').config()

const app = express()

// Fix CORS restrictions (if any)
app.use(cors())

app.use(express.json({ extended: false }))

/**
 * Note to teacher:
 * The routes contains the queries
 * Requests to /api/team is sent to the file ./routes/team.js
 */
app.use('/api/team', require('./routes/team'))
app.use('/api/player', require('./routes/player'))
app.use('/api/match', require('./routes/match'))
app.use('/api/score', require('./routes/score'))
app.use('/api/result', require('./routes/results'))

app.get('/api', (req, res) => {
  res.send({ hello: 'world' })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
