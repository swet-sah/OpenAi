import React, {useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
const Menu = ()=>{
  return(
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#gpt">What is GPT?</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  );
}
const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links__logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links__container'>
        <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {/*This is for toggle menu*/}
      {toggleMenu
         ? <RiCloseLine color="#fff" size={27} onClick={()=>{setToggleMenu(false)}} />
         : <RiMenu3Line color='#fff' size={27} onClick={()=>{setToggleMenu(true)}} />
        }
      {toggleMenu && (
        <div className='gpt3__navbar-menu__container scale-up-center'>
          <div className='gpt3__navbar-menu__container-links'>
            <Menu/>
          </div>
          <div className='gpt3__navbar-menu__container-links-sign'>
            <p>Sign in</p>
            <button type='button'>Sign Up</button>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
{/*this is sweta*/}
export default Navbar
