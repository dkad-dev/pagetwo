import { useState } from 'react'
import { albums } from '../data/albums'
import DiscographyModal from '../components/DiscographyModal'

export default function Discography() {
	const [activeAlbum, setActiveAlbum] = useState(null)
	const [count, setCount] = useState(0)

	return (
		<main>
			<div className='thumb_container'>
				{albums.map((album, index) => {
					return (
						<button key={album.title} type='button' aria-label={album.title} onClick={() => setActiveAlbum(album)}>
							<img
								key={album.title}
								alt={album.title}
								src={index <= count ? `/images/discography/${album.image}.jpeg` : undefined}
								onLoad={e => {
									e.currentTarget.parentElement.classList.add('loaded')
									setCount(c => c + 1)
								}}
								width={700}
								height={700}
							/>
						</button>
					)
				})}
			</div>

			{activeAlbum && (<DiscographyModal album={activeAlbum} onClose={() => setActiveAlbum(null)} />)}
		</main>
	)
}