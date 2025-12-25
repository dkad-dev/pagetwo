import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'
import express from 'express'
import { pushover } from './pushover.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.join(__dirname, 'dist')

dotenv.config({ quiet: true })

const app = express()

app.use(express.static(distPath, { maxAge: '1y', immutable: true }))

app.use((req, res) => {
	res.set('Cache-Control', 'no-cache').sendFile(path.join(distPath, 'index.html'))
})

const server = app.listen(process.env.PORT, () => {
	console.log('Express: Server is up and running')
	pushover('Express: Server is up and running')
})

async function shutdown() {
	console.log('Shutting down...')
	try {
		await new Promise((resolve) => {
			server.close(() => {
				console.log('Express server closed')
				resolve()
			})
		})
		process.exit(0)
	}
	catch {
		console.error('An error occurred while shutting down')
		pushover('An error occurred while shutting down')
	}
}

process.on('SIGTERM', () => {
	shutdown()
})

process.on('SIGINT', () => {
	shutdown()
})