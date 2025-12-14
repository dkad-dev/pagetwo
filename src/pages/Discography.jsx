import { useState } from 'react'
import { albums } from '../data/albums'
// import ProfileModal from '../components/ProfileModal'
import '../style/page/discography.css'

export default function Profile() {
  // const [activeMember, setActiveMember] = useState(null)
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className='thumb_container'>
        {albums.map((album, index) => {
          return (
            <img
              key={album.title}
              alt={album.title}
              src={index <= count ? `/images/discography/${album.art}.jpeg` : undefined}
              onLoad={e => {
                e.currentTarget.classList.add('loaded')
                setCount(c => c + 1)
              }}
              width={700}
              height={700}
              // onClick={() => setActiveMember(member)}
            />
          )
        })}
      </div>

      {/* {activeMember && (<ProfileModal member={activeMember} onClose={() => setActiveMember(null)} />)} */}
    </main>
  )
}