import useEscapeKey from '../hooks/useEscapeKey'

export default function GalleryModal({ photo, onClose }) {
	useEscapeKey(onClose)

	return (
		<div className='modal' onClick={onClose}>
			<img src={`/images/gallery/${photo.title}.jpeg`} alt={photo.title} />
		</div>
	)
}