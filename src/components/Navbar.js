import React from "react";

const Navbar = ( ) => {
    return (
        <>
            <nav id="the_top" x-scroll-to-header className="shadow border-1 border-black border-bottom"
                 style="background-color: #f5f5f5; margin: 0; padding: 0; border-bottom: #000000 solid 2px">
                <div className="row fixed-top"
                     style="background-color: #f5f5f5;margin: 0; padding: 0">
                    <div className="col-9 pt-4"
                         style="
			 	text-align: left;
			 	padding-left: 10px;
			 	color: black;

			">
				<span className="ms-3 ms-md-5">
				<strong x-show="$router.path!=='/'">
					<a x-link href="/" style="text-decoration: none">
					Berckson Johnsly JEAN-LOUIS
				</a>
				</strong>
					<strong x-show="$router.path==='/'">
					<a x-link href="/" style="text-decoration: none">
					Bienvenue sur mon site
				</a>
				</strong>
				</span>
                    </div>
                    <div className="col-3"
                         style="
			 	text-align: right;
			">
                        <a style="
			background-color: #f5f5f5;
			cursor: pointer;
					color: #000000;
						"
                           data-bs-toggle="offcanvas" data-bs-target="#side_menu"
                           aria-controls="side_menu">
                            <h1 className="pt-3 pe-2">
                                <i className="fas fa-bars text-black"></i>
                            </h1>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar