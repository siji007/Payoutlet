import React,{Fragment} from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

const FailedTransac = () => {
    return (
        <Fragment>
            <div className="row mr-auto ml-auto">
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="min-h-screen  py-10 flex flex-col">
                        <form className="p-12 bg-white mx-auto my-10 shadow-lg rounded" action="#">
                            <div className="space-y-6 mb-2 ">
                                
                                <h1 style={{fontWeight:"bold"}} className="text-center text-4xl">Oops! There was a <br/>problem</h1>
                                
                                
                                <img className="-mt-10" style={{width:"400px"}} src="../img/cancel.jpg"></img>
                                
                                <div>
                                    <button id="tryAgainBtn" className=" text-white w-full py-3 text-xl font-bold mt-4">Try Again</button>
                                </div>

                                <div>
                                    <button id="complaintBtn" className="w-full py-3 text-xl font-bold mt-4"><Link style={{textDecoration:"none",color:"rgb(24, 5, 50)"}} to="/Report">File a Complaint</Link></button>
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
                                <h1 style={{position:"absolute",top:"1047px"}} id="poweredText">Powered by etranzact</h1>
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
export default FailedTransac;