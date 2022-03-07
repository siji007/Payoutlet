import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const SignIn = ()=> {
    return(
        <Fragment>
            
            <div className="w-full max-w-xs mr-auto ml-auto mt-24">
                <form className="bg-white shadow-lg  rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-bold mb-2" for="username">
                            Email     
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Username"/>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-xl font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <Link style={{textDecoration:"none"}} to="/">
                            Sign In
                            </Link>
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot password?
                        </a>
                    </div>
                    <p className="mt-4 text-center"><Link to="/SignUp" style={{textDecoration:"none",color:"blue"}}>Sign Up</Link></p>
                </form>
                
                {/* <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Payoutlet. All rights reserved.
                </p> */}
                
            </div>

        </Fragment>
    )
}
export default SignIn;

