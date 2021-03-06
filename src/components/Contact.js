import React from 'react'

const Contact = () => {
    return (
        <div>

            <section class="page-section" id="contact">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Us</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xl-7">

                            <form id="contactForm" name="contact" method="POST" data-netlify="true">
                                <input TYPE="hidden" name="form-name" value="contact" />
                                <div class="form-floating mb-3">
                                    <input class="form-control" name="name" id="name" type="text" placeholder="Enter your name..." required data-sb-validations="required" />
                                    <label for="name">Full name</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div class="form-floating mb-3">
                                    <input class="form-control" name="email" id="email" type="email" placeholder="your email" required data-sb-validations="required,email" />
                                    <label for="email">Email address</label>
                                    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div class="form-floating mb-3">
                                    <input class="form-control" name="phone" id="phone" type="phone" required placeholder="(123) 456-7890" data-sb-validations="required" />
                                    <label for="phone">Phone number</label>
                                    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea class="form-control" name="message" id="message" type="text" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                                    <label for="message">Message</label>
                                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>

                                <div class="form-floating mb-3">
                                    <div data-netlify-recaptcha="true"></div>
                                </div>

                                <button class="btn float-left btn-primary btn-xl " id="submitButton" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
