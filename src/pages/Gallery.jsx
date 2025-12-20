import { useState } from 'react'
import { photos } from '../data/photos'
import GalleryModal from '../components/GalleryModal'

export default function Gallery() {
	const [activePhoto, setActivePhoto] = useState(null)
	const [count, setCount] = useState(0)

	return (
		<main>
			<div className='thumb_container'>
				{photos.map((photo, index) => {
					return (
						<button key={photo.title} type='button' aria-label={photo.title} onClick={() => setActivePhoto(photo)}>
							<img
								key={photo.title}
								alt={photo.title}
								src={index <= count ? `/images/gallery/${photo.title}.jpeg` : undefined}
								onLoad={e => {
									e.currentTarget.parentElement.classList.add('loaded')
									setCount(c => c + 1)
								}}
								width={photo.width}
								height={photo.height}
							/>
						</button>
					)
				})}
			</div>

			{activePhoto !== null && (<GalleryModal photo={activePhoto} onClose={() => setActivePhoto(null)} />)}
		</main>
	)
}