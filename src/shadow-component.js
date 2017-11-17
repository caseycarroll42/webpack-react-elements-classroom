import React from 'react'
import ShadowDOM from 'react-shadow'
import ShadowStyles from './css/shadow-style.css'

export default props => {
    return (
        <ShadowDOM include={['./shadow-style.css']}>
            <div>
                <h1>I'm in a shadow with an encapsulated stylesheet!</h1>
            </div>
        </ShadowDOM>
    )
}