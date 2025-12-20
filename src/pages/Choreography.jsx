import { useState } from 'react'
import { choreos } from '../data/choreos'
import YouTubeModal from '../components/YouTubeModal'

export default function Choreography() {
	const [activeChoreo, setActiveChoreo] = useState(null)
	const [count, setCount] = useState(0)

	return (
		<main>
			<div className='thumb_container'>
				{choreos.map((choreo, index) => {
					return (
						<button key={choreo.title} type='button' aria-label={choreo.title} onClick={() => setActiveChoreo(choreo)}>
							<img
								key={choreo.title}
								alt={choreo.title}
								src={index <= count ? `/images/choreography/${choreo.image}.jpg` : undefined}
								onLoad={e => {
									e.currentTarget.parentElement.classList.add('loaded')
									setCount(c => c + 1)
								}}
								width={1920}
								height={1080}
							/>
							<div>{choreo.title}</div>
						</button>
					)
				})}
			</div>

			{activeChoreo && (<YouTubeModal obj={activeChoreo} onClose={() => setActiveChoreo(null)} />)}
		</main>
	)
}