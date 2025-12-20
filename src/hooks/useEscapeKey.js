import { useEffect } from 'react'

export default function useEscapeKey(onEscape) {
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				onEscape()
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [onEscape])
}