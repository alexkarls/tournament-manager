import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const Navbar = () => {
  return (
    <>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/match'>Match</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/recent'>Score Feed</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Navbar
