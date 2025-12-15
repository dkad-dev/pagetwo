import { useState } from 'react'
import { albums } from '../data/albums'
import DiscographyModal from '../components/DiscographyModal'
import '../style/page/discography.css'

export default function Discography() {
	const [activeAlbum, setActiveAlbum] = useState(null)
	const [count, setCount] = useState(0)

	return (
		<main>
			<div className='thumb_container'>
				{albums.map((album, index) => {
					return (
						<img
							key={album.title}
							alt={album.title}
							src={index <= count ? `/images/discography/${album.art}.jpeg` : undefined}
							onLoad={e => {
								e.currentTarget.classList.add('loaded')
								setCount(c => c + 1)
							}}
							width={700}
							height={700}
							onClick={() => setActiveAlbum(album)}
						/>
					)
				})}
			</div>

			{activeAlbum && (<DiscographyModal album={activeAlbum} onClose={() => setActiveAlbum(null)} />)}
		</main>
	)
}