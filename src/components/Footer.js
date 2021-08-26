import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="footer text-center">
                <div class="container ">
                    <div class="row">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Location</h4>
                            <p class="lead mb-0">

                                Fall River, NS B2T 1E6
                            </p>

                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/MOG-Floor-Maintenance-107212788268901/" target="_blank"><i class="fab fa-fw fa-facebook-f"></i></a>
                        </div>

                    </div>
                </div>
            </footer>
            <div class="copyright py-4 text-center text-white">
                <div class="container"><small>Copyright &copy; MOG Floor 2021</small></div>
            </div>
        </div>
    )
}

export default Footer
