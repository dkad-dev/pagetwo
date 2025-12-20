import { useState } from 'react'
import { members } from '../data/members'
import ProfileModal from '../components/ProfileModal'

export default function Profile() {
	const [activeMember, setActiveMember] = useState(null)
	const [count, setCount] = useState(0)

	return (
		<main>
			<div className='thumb_container'>
				{members.map((member, index) => {
					return (
						<button key={member.name} type='button' aria-label={member.name} onClick={() => setActiveMember(member)}>
							<img
								key={member.name}
								alt={member.name}
								src={index <= count ? `/images/profile/${member.name}.jpg` : undefined}
								onLoad={e => {
									e.currentTarget.parentElement.classList.add('loaded')
									setCount(c => c + 1)
								}}
								width={800}
								height={1200}
							/>
						</button>
					)
				})}
			</div>

			{activeMember && (<ProfileModal member={activeMember} onClose={() => setActiveMember(null)} />)}
		</main>
	)
}