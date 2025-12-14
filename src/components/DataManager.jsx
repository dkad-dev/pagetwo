import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function DataManager() {
	const location = useLocation()
	useEffect(() => {
		const path = location.pathname.replaceAll('/', '')
		document.documentElement.dataset.page = path || 'home'
	}, [location.pathname])
	return null
}