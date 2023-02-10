import React from 'react'
import Avatar from './Avatar'

const Userstats = ({user, stats}) => {
  return (
    <div>
        <div className='user-stats'>
            <Avatar user={user} />
           {user.name}
        </div>
        <div className='stats'>
            <div>Followers: {stats.followers}</div>
            <div>Following: {stats.following}</div>
        </div>
    </div>
  )
}

export default Userstats