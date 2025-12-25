export const pushover = data => {
	try {
		const message = JSON.stringify(data)
		fetch('https://api.pushover.net/1/messages.json', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				token: process.env.PUSHOVER_APP_TOKEN,
				user: process.env.PUSHOVER_USER_KEY,
				message: message
			})
		})
	}
	catch (err) {
		console.error(err)
	}
}