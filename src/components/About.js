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

                        <p>About the company: created in 2011 in the province of Quebec as an incorporated one and registered too, we provided floor services to the provinces of Quebec and Ontario since then  specializing in VCT flooring as well as ceramics(scrubbing, stripping and waxing) we  dedicated our services to big superstores chains like Loblaws, Maxi, Provigo, IGA and to all small businesses needing their floors to look like brand new again. We also work on all kinds of hardwood floors(sanding, staining and finishing) We have moved to the province of Nova Scotia recently and it is our intention to keep offering our services and expertise at an affordable and competitive price
                        </p>

                        <h2 class="page-section-heading text-center text-uppercase text-white mt-5">Services</h2>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <p className="h4 font-weight-normal"> Services: The do-it yourself process is most of the time complicated and very tricky. If you do not have the right mixture of cleaning materials and equipment, you might damage your floor permanently, professionals can also identify damages , stains ,etc  and then use the right procedure to fix the problem. Most of the time the right equipment is hard to handle so let our team's experience and skills help you out!
                            We will take care of your floors so they look new again with services we offer:
                        </p>
                        <div class="col-lg-4  ms-auto mt-4"><p class="lead">
                            <li className="h4 font-weight-normal">
                                Scrubbing or stripping and waxing of:
                                VCT(Vinyl Composite Tile)
                                Linoleum
                                Ceramic
                                Services like these are commonly referred to as: strip&wax, floor polishing, floor buffing, floor waxing, floor refinishing or general floor cleaning services.
                            </li>

                        </p></div>
                        <div class="col-lg-4 me-auto mt-4"><p class=" lead">
                            <li className="h4 font-weight-normal">
                                Hardwood Floor and Engineered Hardwood Flooring
                                Sand, stain and finish
                            </li>

                        </p></div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About
