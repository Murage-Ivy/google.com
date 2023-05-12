import React from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import '../index.css'

function Header() {
    return (
        <div className="header-container">


            <div className='header'>
                <div className="header-to-left">
                    <div className="header-left">
                        <ul>
                            <li>
                                Gmail
                            </li>
                            <li>
                                Images
                            </li>
                        </ul>
                    </div>

                    <div className="header-right">
                        <div className="options">
                            <BsFillGrid3X3GapFill className='option' />
                        </div>
                        <div className='email'>
                            <a href='!#'>
                                I
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header