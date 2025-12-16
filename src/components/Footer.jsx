import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer>
			<Link to='/'><img className='logo' src='/icons/logo_transparent.png' alt='logo' /></Link>
		</footer>
	)
}