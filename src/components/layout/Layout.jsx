import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BiDish } from 'react-icons/bi'
import Menu from '../Menu'
import './layout.css'

function Layout() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  // function handleToggleMenu() {
  //   setToggleMenu(!toggleMenu)
  // }

  return (
    <>
      <header id="header" className="navbar">
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <Link to="/recipes/">
              <p>deliciousss</p>
            </Link>
          </div>
          <div className="navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine color="#272727" size={27} onClick={handleToggleMenu} />
          ) : (
            <AiOutlineMenu
              color="#272727"
              size={27}
              onClick={handleToggleMenu}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <a href="#header">
              <BiDish color="#f1f1f1" size={30} />
            </a>
          </div>
          <div className="navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="footer-addinf">
          <div className="footer-email">
            <AiOutlineMail color="#f1f1f1" size={25} />
            <p>deliciousss2023@gmail.com</p>
          </div>
          <p className="copyright">Copyright &copy; 2023</p>
        </div>
      </footer>
    </>
  )
}

export default Layout
