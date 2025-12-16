export default function YouTubeModal({ obj, onClose }) {
	return (
		<div className="modal" onClick={onClose}>
			<iframe
				src={`https://www.youtube.com/embed/${obj.id}?autoplay=1`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title={obj.title}
			/>
		</div>
	)
}