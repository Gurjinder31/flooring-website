import React from 'react'

const About = () => {
    return (
        <div>
            <section class="page-section bg-primary text-white mb-0" id="about">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-white">About us</h2>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row h4 font-weight-normal ">

                        <p>We provide floor services in the province of Nova Scotia
                            specializing in VCT (Vinyl Composite Tiles), ceramics and all types
                            of hardwood flooring.The company was created in 2011 in Montreal, Quebec. We have relocated to Nova
                            Scotia and it is our intention to keep offering our services and
                            expertise at an affordable and competitive prices.
                            We have provided services to large corporate chains like Loblaws,
                            Maxi, Provigo, IGA and as well as small independent businesses
                            wanting their floors to be pristine and always looking like new.
                        </p>

                        <h2 class="page-section-heading text-center text-uppercase text-white mt-5">Services</h2>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        {/* <div className="container mx-auto">
                            <div className="row mx-auto">
                                <div className="col-sm-4">
                                    <h2>1. VCT (Vinyl Composite Tile) Linoleum Ceramic Services</h2>
                                    <li className="h4 font-weight-normal">
                                        Scrubbing, stripping, waxing, polishing, and general floor
                                        maintenance services.
                                    </li>
                                </div>


                                <div className="col-sm-4">
                                    <h2>2. Hardwood, and Engineered Hardwood Flooring</h2>
                                    <li className="h4 font-weight-normal">
                                        Buffing and finishing
                                        Sanding, staining, and finishing
                                    </li>
                                </div>
                            </div>
                        </div> */}



                        <p className="h4 font-weight-bold">1. VCT (Vinyl Composite Tile), Linoleum and Ceramics.
                        </p>
                        <div class="col-lg-4 mx-auto "><p class="lead">
                            <li className="h4 font-weight-normal">
                                Scrubbing, stripping, waxing and polishing.
                            </li>

                        </p></div>
                        <p className="h4 font-weight-bold">2. Hardwood, and Engineered Hardwood Flooring.
                        </p>
                        <div class="col-lg-4 mx-auto"><p class=" lead">
                            <li className="h4 font-weight-normal">
                                Buffing and /or sanding, staining and finishing.
                            </li>

                        </p></div>
                        <p className="h4 mt-4 font-weight-normal"> These processes can be complicated and challenging. It requires
                            expertise and the right materials and equipment for it to be done
                            properly to avoid irreversible floor damage. As skilled professionals
                            we can readily identify areas of concerns and use the right
                            procedure and equipment to resolve the issue(s).
                        </p>
                    </div>

                </div>
            </section>
        </div >
    )
}

export default About
