import React from "react";

const Profile = () => {
    return (
        <header x-show="$router.path==='/'" className="header">
            <div className="container">
                <div className="row align-items-center pt-3">
                    <div className="col" id="top">
                        <a x-link href="/">
                            <img className="profile-image img-fluid float-start rounded-circle"
                                 src="../images/main/berckson.jpg" alt="profile image"
                                 style="width: 159px; height: 159px;"/>
                        </a>
                        <div className="profile-content">
                            <h1 className="name">Berckson Johnsly JEAN-LOUIS </h1>
                            <h2 className="desc" id="header">Technology & Management</h2>
                            <ul className="social list-inline">
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/bercksonjohnslyjeanlouis">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/newsletters/berckson-johnsly-jean-louis-7029083089146400768">
                                        <i className="fa-solid fa-square-rss"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/bercksonjohnsly">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/bercksonjohnslyjeanlouis">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://web.facebook.com/bercksonjohnslyjeanlouis98">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/">
                                        <i className="fab fa-telegram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://github.com/bercksonjohnslyjeanlouis">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item last-item">
                                    <a href="https://wa.me/50947740432?text=Hello!">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--//profile-->
                    </div>
                    <!--//col-->

                    <div className="col-12 col-md-auto" id="id">
                        <div className="dark-mode-switch d-flex">
                            <div className="form-check form-switch mx-auto mx-md-0" style="display: none">
                                <input type="checkbox" className="form-check-input me-2" id="darkSwitch"/>
                                <label className="custom-control-label" htmlFor="darkSwitch">Mode Sombre </label>
                            </div>
                        </div>
                        <!--//dark-mode-switch-->
                        <a className="btn btn-cta-primary" target="_blank">
                            <i className="fas fa-paper-plane"></i>
                            Voir mon CV
                        </a>
                        <!--			<br>-->
                        <!--			<em class="text-warning">-->
                        <!--				Le site est en cours de développement.-->
                        <!--				Certains éléments sont incorrects pour l'instant...-->
                        <!--			</em>-->
                    </div>
                    <!--//col-->


                </div>
                <!--//row-->
            </div>
            <!--//container-->
        </header>
    )
}

export default Profile