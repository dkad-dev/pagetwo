import useEscapeKey from '../hooks/useEscapeKey'

export default function YouTubeModal({ obj, onClose }) {
	useEscapeKey(onClose)

	return (
		<div className='modal' role='dialog' aria-modal='true' onClick={onClose}>
			<iframe
				src={`https://www.youtube.com/embed/${obj.id}?autoplay=1`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title={obj.title}
			/>
		</div>
	)
}