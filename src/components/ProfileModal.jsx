export default function ProfileModal({ member, onClose }) {
	return (
		<div className='modal' onClick={onClose}>
			<div className='grid_container'>
				<img src={`images/profile/${member.name}.jpg`} alt={member.name} width={800} height={1200} />

				<div className='bio frost'>
					<div className='name'>{member.name}</div>
					<div className='birth'>{member.birth}</div>
					<div className='nation'>{member.nation}</div>
					<p className='intro'>{member.intro}</p>
				</div>

				<iframe
					src={`https://www.youtube.com/embed/${member.id}?autoplay=1`}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
			</div>
		</div>
	)
}