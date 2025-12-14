import { Link } from 'react-router-dom'
import '../style/base/footer.css'

export default function Footer() {
	return (
		<footer>
			<Link to='/'><img className='logo' src='/icons/logo.png' alt='logo' /></Link>
		</footer>
	)
}