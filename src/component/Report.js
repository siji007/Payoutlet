import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import "../App.css"

const Report = () => {
    return (
        <Fragment>
            <div className="row mr-auto ml-auto">
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="min-h-screen py-10 flex flex-col ">
                        <form id="reportForm" className="p-12 bg-white mx-auto my-10 shadow-lg rounded" action="#">
                            <div className="space-y-6 mb-2 ">
                                
                                <h1 style={{fontWeight:"bold"}} className=" text-3xl">File A Report</h1>
                                <h1 className="text-xl text-muted">We like to improve our services for you.File your <br/> complaint here</h1>
                                <div>
                                    <input className="leading-tight border text-2xl w-full py-2 px-4 mt-2" type="email" id="email" name="email" placeholder="Enter Your Email Address"/>
                                </div>
                                <div>
                                    <textarea className="text-2xl mt-4 p-4" id="compaintBox" cols="33" rows="12" placeholder="Tell us what's on your mind"></textarea>
                                </div>
                                <div>
                                    <button id="tryAgainBtn" className=" text-white w-full py-3 text-xl font-bold mt-4"> <Link style={{textDecoration:"none",color:"white"}}>Submit</Link></button>
                                </div>

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
                            style={{height:"200px;"}}
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
                            style={{height:"200px;"}}
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
                            style={{height:"200px;"}}
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
export default Report;