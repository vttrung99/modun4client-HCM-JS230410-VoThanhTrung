export default function Footer() {
    return (
        <div>
            {/* <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Flowbite™
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Licensing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer> */}
            <>
                {/* Footer */}
                <footer className="text-center text-lg-start bg-light text-muted" >
                    {/* Section: Social media */}
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        {/* Left */}
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        {/* Left */}
                        {/* Right */}
                        <div>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-google" />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href="" className="me-4 text-reset">
                                <i className="fab fa-github" />
                            </a>
                        </div>
                        {/* Right */}
                    </section>
                    {/* Section: Social media */}
                    {/* Section: Links  */}
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            {/* Grid row */}
                            <div className="row mt-3">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* Content */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3" />
                                        Tên công Ty
                                    </h6>
                                    <p>
                                        Để nông dân biết code
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Angular
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            React
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Vue
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Laravel
                                        </a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Pricing
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Settings
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Help
                                        </a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p>
                                        <i className="fas fa-home me-3" /> New York, NY 10012, US
                                    </p>
                                    <p>
                                        <i className="fas fa-envelope me-3" />
                                        info@example.com
                                    </p>
                                    <p>
                                        <i className="fas fa-phone me-3" /> + 01 234 567 88
                                    </p>
                                    <p>
                                        <i className="fas fa-print me-3" /> + 01 234 567 89
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div
                        className="text-center p-4"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    >
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                            MDBootstrap.com
                        </a>
                    </div>
                </footer>
            </>
        </div>


    )
}
