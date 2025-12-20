import useEscapeKey from '../hooks/useEscapeKey'

export default function DiscographyModal({ album, onClose }) {
	useEscapeKey(onClose)

	const renderTrack = track => {
		const index = track.indexOf('•')
		if (index === -1) {
			return <div className='track' key={track}>{track}</div>
		}
		return (
			<div key={track}>
				<span className='track'>{track.slice(0, index)}</span>
				<span className='author'>{track.slice(index)}</span>
			</div>
		)
	}

	return (
		<div className='modal' role='dialog' aria-modal='true' onClick={onClose}>
			<div className='grid_container'>
				<img src={`images/discography/${album.image}.jpeg`} alt={album.title} />
				<div className='text_detail frost'>
					<div className='title'>{album.title}</div>
					<div className='release'>{album.release}</div>
					<div className='tracklist'>{album.tracklist.map(renderTrack)}</div>
				</div>
			</div>
		</div>
	)
}