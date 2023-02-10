import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const Body = ({user, stats}) => {
  return (
    <div className='body'>
        <Sidebar user={user} stats={stats}/>
        <Content/>
    </div>
  )
}

export default Body