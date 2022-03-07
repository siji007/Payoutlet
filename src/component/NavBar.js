import React,{Fragment} from 'react'

import { Link } from 'react-router-dom'
import "../App.css"
const NavBar = () => {

    return (
        <Fragment>
            <div className="flex justify-between px-10 text-white py-4" style={{background:"rgb(24, 5, 50)"}}>
                <div>
                    <h1 className="text-3xl">Payoutlet</h1>
                </div>
                <div>
                    <button className="btn btn-outline-info rounded-full text-xl font-bold"><Link style={{textDecoration:"none",color:"white"}} to="SignIn">Sign in</Link></button>
                </div>
            </div>

        </Fragment>
    )
}
export default NavBar;







