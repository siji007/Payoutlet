import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import "../App.css"
const ValidatePayment = () => {
    return (
        <Fragment>
            <div className="row  mr-auto ml-auto">
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="min-h-screen  py-10 flex flex-col">
                        <form style={{width:""}} className="p-12 bg-white sm:w-full md:w-full mx-auto my-10 shadow-lg rounded" action="#">
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

                                <div>
                                    <div className="flex ">
                                        <div>
                                            <img id="masterCardImg" src="../img/mastercard.png"></img>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="mt-2">Mastercard ending in XX2598</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <h1 className="font-bold text-2xl mt-8">Validate Payment</h1>
                                <div>
                                    <input style={{}} className=" border text-xl w-full py-2 px-4 mt-2 " type="number" id="otp" name="otp" placeholder="Enter OTP sent to your number."/>
                                </div>
                                <div>
                                    <button id="continueBtn" className=" text-white w-full py-3 text-xl font-bold mt-4"><Link style={{textDecoration:"none",color:"white"}} to="/FailedTransaction">Pay Now</Link></button>
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
                                <h1 id="poweredText">Powered by etranzact</h1>
                            </div>
                        </form>
                    </div>

                    

                    

                </div>

                <div className="col-lg-7 sm:d-none md:d-none mt-20">

                    {/* <div id="airtimeText" className="mt-12 d-block mr-auto ml-auto">
                        <h1 className="text-center font-bold text-5xl">Super Easy  </h1>
                        <h1 className="text-center font-bold text-5xl">Airtime Top-Up</h1>
                    </div>
                    <img src="../img/transfer.jpg"></img> */}
                    <div>
                        <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            style={{}}
                            className="d-block w-100"
                            src="../img/transfer.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h1 className="text-center text-success font-bold mt-4 text-5xl">Super</h1>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                            style={{}}
                            className="d-block w-100"
                            src="../img/handphone.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h1 className="text-center text-success font-bold text-5xl">Easy</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            style={{}}
                            className="d-block w-100"
                            src="../img/success.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h1 className="text-center text-success font-bold text-5xl">Airtime Top-Up</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
export default ValidatePayment;
