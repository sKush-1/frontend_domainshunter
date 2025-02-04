import {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import '../App.css'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    const handleButtonToggle = () => setShowMenu(!showMenu)

  return (
    <header>
        <div className='container'>
        <div className='grid navbar-grid'>
            <div className='logo'>
                <h1>Domains Hunter</h1>
            </div>

            <nav className= {showMenu ? 'menu-mobile' : 'menu-web'}>
                <ul className='nav-links'>
                    <li><a href='https://domainshunter.in'>Home</a></li>
                    <li><a href='https://domainshunter.in/features'>Features</a></li>
                    <li><a href='https://domainshunter.in/about'>About</a></li>
                    <li><a href='https://domainshunter.in/contact'>Contact</a></li>
                    <li><a href='https://domainshunter.in/blog-list'>Blog</a></li>

                </ul>
            </nav>
            <div className='ham-menu'>
                <button onClick={handleButtonToggle} >
                    <GiHamburgerMenu />
                </button>
            </div>


        </div>
    </div>
    </header>
  )
}

export default Navbar