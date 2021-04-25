import React,{Fragment} from 'react'
import "../App.css"

const Report = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="min-h-screen  py-10 flex flex-col">
                        <form className="p-12 bg-white mx-auto my-10 shadow-lg rounded" action="#">
                            <div className="space-y-6 mb-2 ">
                                
                                <h1 style={{fontWeight:"bold"}} className=" text-3xl">File A Report</h1>
                                <h1 className="text-xl text-muted">We like to improve our services for you.File your <br/> complaint here</h1>
                                <div>
                                    <input className=" border text-2xl w-full py-2 px-4 mt-2" type="number" id="otp" name="otp" placeholder="Enter Your Email Address"/>
                                </div>
                                <div>
                                    <textarea className="text-2xl mt-4 p-4" id="compaintBox" cols="33" rows="12" placeholder="Tell us what's on your mind"></textarea>
                                </div>
                                <div>
                                    <button id="tryAgainBtn" className=" text-white w-full py-3 text-xl font-bold mt-4">Submit</button>
                                </div>

                                
                                <h1 style={{position:"absolute",top:"1047px"}} id="poweredText">Powered by etranzact</h1>
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
export default Report;