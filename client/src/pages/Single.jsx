import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link className="link" to={`/write?edit=2`}>
                  <img src={Edit} alt="" />
              </Link>
            </div>
            <div className="delete">
                <img src={Delete} alt="" />
            </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit A possimus excepturi </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          <br /><br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          <br /><br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
        </p>
      </div>
     <Menu />
    </div>
  )
}

export default Single