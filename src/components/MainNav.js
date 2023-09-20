import { useState } from 'react';
import './mainstyle.css';
import { Link } from 'react-router-dom';
import logo from '../resources/images/unnamed.png'

export default function MainNav(props) {
    const [hoveringHome, setHoveringHome] = useState(false);
    const [hoveringProfile, setHoveringProfile] = useState(false);
    const [navState, setNavState] = useState(false);


    return (
        <div className="main-conteiner">
            <div className='nav-small-screen'>
                <div className='absBurger'>
                    <button className={navState ? 'opened adjust menu' : ' menu unadjust'} onClick={() => {
                        setNavState(!navState);
                    }} aria-label="Main Menu">
                        <svg width="50" height="50" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>
                <div>LOGO</div>
            </div>
            <div className={navState ? 'main-nav-con slide-in' : 'main-nav-con'}>
                <div className='logo-con'>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                </div>
                <nav>
                    <ul>
                        <li className='list-con-main' >
                            <Link className='hover-show list-link-main' to='/'
                            >Home</Link>
                        </li>
                        <li className='list-con-main' onMouseEnter={() => {
                            setHoveringHome(true)
                        }}
                            onMouseLeave={() => {
                                setHoveringHome(false)
                            }}>
                            <Link className='hover-show list-link-main'
                            >Media</Link>
                            <ul className={hoveringHome ? 'view-sub1 view-sub-main' : 'view-sub view-sub-main'}
                            >
                                
                                <li>Multi-SlideShow</li>
                                <li>Image</li>
                                <li>Video</li>
                            </ul>
                        </li>
                        <li className='list-con-main' onMouseEnter={() => {
                            setHoveringProfile(true)
                        }}
                            onMouseLeave={() => {
                                setHoveringProfile(false)
                            }}>
                            <Link className='hover-show'
                            >Projects</Link>
                            <ul className={hoveringProfile ? 'view-sub2 view-sub-main' : 'view-sub view-sub-main'}>
                                <li>Portfolio 1</li>
                                <li>Portfolio 2</li>
                                <li>Portfolio 3</li>
                                <li>Portfolio 4</li>
                            </ul>
                        </li>
                        <li className='list-con-main'>
                            <Link className='hover-show' to='/test'
                            >About Us</Link></li>
                        <li className='list-con-main'><Link className='hover-show' to='/test'
                        >Contact</Link></li>
                    </ul>
                </nav>
                <div className='main-contact'>
                    <p className='main-contact-title'>CONTACT INFO</p>
                    <p className='main-contact-item'>
                        <span className='span-1'>Adress</span>
                        <span className='span-2'> : </span>
                        <span className='span-3'>Nairobi, Kenya</span>
                    </p>
                    <p className='main-contact-item'>
                        <span className='span-1'>Call</span>
                        <span className='span-2'> : </span>
                        <span className='span-3'>
                            <span>(+254) 792 299 863</span>
                            <span>(+254) 790 191 009</span>
                        </span>
                    </p>
                    <p className='main-contact-item'>
                        <span className='span-1'>Write</span>
                        <span className='span-2'> : </span>
                        <span className='span-3' >luttahmark69@gmail.com</span>
                    </p>
                </div>
                <div className='FootNav'>
                    <p>© APEAR 2021 / ALL RIGHTS RESERVED.</p>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}