import React from 'react'

const Contact = () => {
    return (
        <div>
            <section class="page-section" id="contact">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xl-7">

                            <form name="contact" method="POST" data-netlify="true">
                                <p>
                                    <label>Your Name: <input type="text" name="name" /></label>
                                </p>
                                <p>
                                    <label>Your Email: <input type="email" name="email" /></label>
                                </p>
                                <p>
                                    <label>Your Role: <select name="role[]" multiple>
                                        <option value="leader">Leader</option>
                                        <option value="follower">Follower</option>
                                    </select></label>
                                </p>
                                <p>
                                    <label>Message: <textarea name="message"></textarea></label>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
