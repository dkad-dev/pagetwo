import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()

	useEffect(() => {
		setIsOpen(false)
	}, [location.pathname])

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<header>
			<div className='desktop'>
				<Link to='/profile'>PROFILE</Link>
				<Link to='/discography'>DISCOGRAPHY</Link>
				<Link to='/gallery'>GALLERY</Link>
				<Link to='/choreography'>CHOREOGRAPHY</Link>
				<Link to='/video'>VIDEO</Link>
			</div>

			<div className='mobile'>
				<div className='hamburger' onClick={toggleMenu}>
					<div></div>
					<div></div>
					<div></div>
				</div>
				{isOpen && (
					<div className='menu'>
						<Link to='/profile'>PROFILE</Link>
						<Link to='/discography'>DISCOGRAPHY</Link>
						<Link to='/gallery'>GALLERY</Link>
						<Link to='/choreography'>CHOREOGRAPHY</Link>
						<Link to='/video'>VIDEO</Link>
					</div>
				)}
			</div>
		</header>
	)
}