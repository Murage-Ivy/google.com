import React from 'react'
import Button from './Button'

function Feeling() {
    const contents = [' Google Search', 'I\'m Feeling Lucky']
    const contentList = contents.map((content, index) => <Button key={index} content={content} />)
    return (
        <div className='feeling'>
            {contentList}
        </div>
    )
}

export default Feeling