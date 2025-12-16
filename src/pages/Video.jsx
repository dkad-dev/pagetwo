import { useState } from 'react'
import { videos } from '../data/videos'
import YouTubeModal from '../components/YouTubeModal'

export default function Video() {
	const [activeVideo, setActiveVideo] = useState(null)
	const [count, setCount] = useState(0)

	return (
		<main>
			<div className='thumb_container'>
				{videos.map((video, index) => {
					return (
						<div>
							<img
								key={video.title}
								alt={video.title}
								src={index <= count ? `/images/video/${video.image}.jpg` : undefined}
								onLoad={e => {
									e.currentTarget.parentElement.classList.add('loaded')
									setCount(c => c + 1)
								}}
								width={1920}
								height={1080}
								onClick={() => setActiveVideo(video)}
							/>
							<div>{video.title}</div>
						</div>
					)
				})}
			</div>

			{activeVideo && (<YouTubeModal obj={activeVideo} onClose={() => setActiveVideo(null)} />)}
		</main>
	)
}