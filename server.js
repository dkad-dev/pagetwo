import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const distPath = path.join(__dirname, 'dist')

app.use(express.static(distPath, { maxAge: '1y', immutable: true }))

app.use((req, res) => {
	res.set('Cache-Control', 'no-cache').sendFile(path.join(distPath, 'index.html'))
})

app.listen(process.env.PORT, () => {
	console.log('Express: Server is up and running')
})