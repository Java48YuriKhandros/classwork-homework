import React from 'react'

const Avatar = ({user}) => {
  return (
    <img className = 'user-avatar' src={user.avatar} alt={user.name} />
  )
}

export default Avatar