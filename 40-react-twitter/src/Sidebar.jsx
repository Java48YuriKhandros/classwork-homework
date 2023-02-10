import React from 'react'
import Userstats from './Userstats'

const Sidebar = ({user, stats}) => {
  return (
    <div className='sidebar'>
        <Userstats user={user} stats={stats}/>
    </div>
  )
}

export default Sidebar