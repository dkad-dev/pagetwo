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
            <img
              key={member.name}
              alt={member.name}
              src={index <= count ? `/images/profile/${member.name}.jpg` : undefined}
              onLoad={e => {
                e.currentTarget.classList.add('loaded')
                setCount(c => c + 1)
              }}
              width={800}
              height={1200}
              onClick={() => setActiveMember(member)}
            />
          )
        })}
      </div>

      {activeMember && (<ProfileModal member={activeMember} onClose={() => setActiveMember(null)} />)}
    </main>
  )
}