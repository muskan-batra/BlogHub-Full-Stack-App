import React from 'react'
import Pic from '../Pages/img/Muskan.jpeg'
const Single = () => {
  return (
    <div className='single'>
        <div className='content'>
          <img src =  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
        </div>

        <div className='user'>
          <img src = {Pic} />
        </div>

        <div className='info'>
        <span> Muskan </span>
        <p>posted 2 days ago</p>

        <div className='menu'></div>
    </div>
    </div>
  )
}

export default Single