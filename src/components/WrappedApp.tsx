import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from '../App'

function WrappedApp (){
    return (
        <BrowserRouter>
            <App/>

        </BrowserRouter>
    )
}


export default WrappedApp