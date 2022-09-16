import express from 'express'
import posts from '../src/posts/index.json' assert { type: "json" };

const app = express()

app.get('/api/news', (req, res) => {
    return res.json(posts)
})

app.listen(3333)