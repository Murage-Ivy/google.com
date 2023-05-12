import React from 'react'
import '../index.css'
import Search from './Search'
import Feeling from './Feeling'


function Google() {
    return (
        <div id='google'>

            <div className='image'>
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" alt='google logo' />
            </div>

            <Search />

            <Feeling />
        </div>

    )
}

export default Google