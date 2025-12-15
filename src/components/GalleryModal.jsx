import { useEffect, useState } from 'react'
import { photos } from '../data/photos'

export default function GalleryModal({ idx, onClose }) {
	const [index, setIndex] = useState(idx)

	useEffect(() => {
		setIndex(idx)
	}, [idx])

	const prev = e => {
		e.stopPropagation()
		setIndex(i => (i === 0 ? photos.length - 1 : i - 1))
	}

	const next = e => {
		e.stopPropagation()
		setIndex(i => (i === photos.length - 1 ? 0 : i + 1))
	}

	return (
		<div className='modal' onClick={onClose}>
			<div className='prev frost' onClick={prev}>❮</div>
			<img src={`/images/gallery/${photos[index].title}.jpeg`} alt={photos[index].title} />
			<div className='next frost' onClick={next}>❯</div>
		</div>
	)
}