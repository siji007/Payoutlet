import React,{Fragment} from 'react'
import "../App.css"

const BuyAirtime = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="min-h-screen  py-10 flex flex-col">
                        <form className="p-12 bg-white mx-auto my-10 shadow-lg rounded" action="#">
                            <div className="space-y-6 mb-2 ">
                                <div>
                                    <h1 className="text-4xl font-bold">Buy Airtime</h1>
                                    <p className="text-2xl mt-3 text-muted">Buy airtime in a jiffy with Payoutlet.net.Just<br/> enter your details below.</p>
                                </div>

                                <p className="text-2xl mt-12 text-muted">Select Network Operator</p>
                            
                                <div id="airtimeDiv" className="flex justify-around">
                                    <div id="imgDiv">
                                        <img id="mtn" src="../img/mtn.jpeg"></img>
                                    </div>

                                    <div id="imgDiv">
                                        <img id="airtel" src="../img/airtel.png"></img>
                                    </div>

                                    <div id="imgDiv">
                                        <img id="eti" src="../img/eti.jpeg"></img>
                                    </div>

                                    <div id="imgDiv">
                                        <img id="glo" src="../img/glo.jpeg"></img>
                                    </div>
                                </div>
                            
                                <div>
                                    <input className="border text-2xl w-full py-2 px-4 mt-2" type="number" id="mobileNumber" name="mobileNumber" placeholder="Enter Your Mobile Number"/>
                                </div>
                                <div>
                                    <input className="border text-2xl w-full py-2 px-4 mt-2" type="number" id="amount" name="amount" placeholder="Enter Amount"/>
                                </div>

                                <div>
                                    <button id="continueBtn" className=" text-white w-full py-3 text-xl  mt-4">Continue</button>
                                </div>
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
export default BuyAirtime;