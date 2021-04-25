import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const PocketMoni = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="min-h-screen  py-10 flex flex-col">
                        <form className="p-12 bg-white mx-auto my-10 shadow-lg rounded" action="#">
                            <div className="space-y-6 mb-2 ">
                                <div className="">
                                    <div className="flex">
                                        <div className="">
                                            <img id="mtn" src="../img/mtn.jpeg"></img>
                                        </div>

                                        <div>
                                            <p className="mt-2 ml-2">MTN</p>
                                        </div>
                                        <div className="ml-auto">
                                            <p>#100</p>
                                        </div>
                                    </div>
                                </div>

                                <h1 className="font-bold text-4xl">Pay With</h1>
                    
                                <div id="payWithDiv" className="flex justify-around">
                                    <div>
                                        <button className="text-xl text-black" id="cardButton"><Link to="/Card">Card</Link></button>
                                    </div>
                                    <div>
                                        <button style={{backgroundColor:"rgb(24, 5, 50)"}} className="text-xl " id="pocketMoniBtn">Pocketmoni</button>
                                    </div>
                                </div>
                                <div>
                                    <input style={{width:"400px"}} className="border text-2xl w-full py-2 px-4 mt-2" type="number" id="mobileNumber" name="mobileNumber" placeholder="Enter Your PocketMoni Number"/>
                                </div>
                                <div>
                                    <input className="border text-2xl w-full py-2 px-4 mt-2" type="number" id="amount" name="amount" placeholder="Enter your Four-Digit PIN"/>
                                </div>

                                <div>
                                    <button id="continueBtn" className=" text-white w-full py-3 text-xl font-bold mt-4"><Link to="/ValidatePayment">Pay Now</Link></button>
                                </div>

                                <div id="paymentLogoDiv" className="flex justify-around">
                                    <div>
                                        <img className="mt-3" style={{width:"70px"}} src="../img/mastercard.png"></img>
                                        
                                    </div>
                                    <div>
                                        <img style={{width:"70px"}} src="../img/visa.png"></img>
                                    </div>
                                    <div>
                                        <img className="mt-4" style={{width:"70px"}} src="../img/verve.png"></img>
                                    </div>
                                </div>
                                <h1 style={{position:"absoute",marginTop:"140px"}} id="poweredText">Powered by etranzact</h1>

                            </div>
                        </form>
                    </div>

                    

                </div>

                <div className="col-lg-7 sm:d-none md:d-none">
                    <div id="airtimeText" className="mt-12 d-block mr-auto ml-auto">
                        <h1 className="text-center font-bold text-5xl">Super Easy  </h1>
                        <h1 className="text-center font-bold text-5xl">Airtime Top-Up</h1>
                    </div>
                    
                    <img src="../img/transfer.jpg"></img>
                </div>
            </div>
        </Fragment>
    )
}
export default PocketMoni;