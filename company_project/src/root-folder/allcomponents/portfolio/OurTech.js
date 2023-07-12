import React from 'react'
import "./OurTech.css"
import html from "../../images/html01.jpg"
import css from "../../images/css01.jpg"
import javascr from "../../images/js.jpg"
import mysql from "../../images/mysql.jpg"
import react from "../../images/react.jpg"
import aws from "../../images/aws.jpg"
import java from "../../images/java.jpg"
import mongo from "../../images/mongodb.jpg"
import node from "../../images/express.jpg"

const OurTech = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h2 className="mt-2">Technology that we Use</h2>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">

                </div>
                <div className="row g-4 portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={html} alt="" />
                            <div className="portfolio-overlay">
                                <div className="text-hov">
                                    <a className="h5 d-block text-white mt-1 mb-0 text-und" href="https://en.wikipedia.org/wiki/HTML">HTML</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100 " src={css} alt="" />
                            <div className="portfolio-overlay">
                                <div className="text-hov">
                                    <a className="h5 d-block text-white mt-1 mb-0 text-und" href="https://en.wikipedia.org/wiki/CSS">CSS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={javascr} alt="" />
                            <div className="portfolio-overlay">
                                <div className="text-hov">
                                    <a className="h5 d-block text-white mt-1 mb-0 text-und" href="https://en.wikipedia.org/wiki/JavaScript">Javascript</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={mysql} alt="" />
                            <div className="portfolio-overlay">
                                <div className="text-hov">
                                    <a className="h5 d-block text-white mt-1 mb-0 text-und" href="https://www.mysql.com/">MYSQL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={react} alt="" />
                            <div className="portfolio-overlay">
                                <div className="text-hov">
                                    <a className="h5 d-block text-white mt-1 mb-0 text-und" href="https://react.dev/">React JS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={aws} alt="" />
                            <div className="portfolio-overlay">
                                <div className="text-hov">
                                    <a className="h5 d-block text-white mt-1 mb-0 text-und" href="https://aws.amazon.com/">Amazon Web Services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={java} alt="" />
                            <div className="portfolio-overlay">
                                <div className="text-hov">
                                    <a className="h5 d-block text-white mt-1 mb-0 text-und " href="https://www.java.com/en/">JAVA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={mongo} alt="" />
                            <div className="portfolio-overlay">
                                <div className="text-hov">
                                    <a className="h5 d-block text-white mt-1 mb-0 text-und" href="https://www.mongodb.com/">Mongo DB</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src={node} alt="" />
                            <div className="portfolio-overlay">

                                <div className=" text-hov">
                                    <a className="h5 d-block text-white mt-1 mb-0 text-und" href="https://nodejs.org/en">Express JS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTech