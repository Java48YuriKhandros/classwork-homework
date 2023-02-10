import React from 'react'
import Avatar from './Avatar'

const Nav = ({user}) => {
  return (
    <div className='nav'>
        <Avatar size='small' user = {user}/>
    </div>
  )
}

export default Nav