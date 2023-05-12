import React from 'react'
import '../index.css'

function Footer() {
    return (
        <div id='footer'>
            <div className="country">
                Kenya
            </div>
            <div className="footer">
                <div className="footer__bottom__left__top">
                    Carbon neutral since 2007
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom__right">
                        <ul>
                            <li>
                                <a href='!#'>
                                    Advertising
                                </a>
                            </li>
                            <li>
                                <a href='!#'>
                                    Business
                                </a>


                            </li>
                            <li>
                                <a href='!#'>
                                    How Search works
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__bottom__left">
                            <ul>
                                <li>
                                    <a href='!#'>
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href='!#'>
                                        Terms
                                    </a>
                                </li>
                                <li>

                                    <a href='!#'>
                                        Settings
                                    </a>
                                </li>
                            </ul>
                       
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer