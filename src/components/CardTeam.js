import React from "react";
import {
    MDBAnimation,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
    return (
        <MDBContainer
            fluid
            className="bg-image"
            style={{
                backgroundImage:
                    "url(https://mdbootstrap.com/img/Photos/new-templates/glassmorphism-article/img5.jpg)",
                height: "700px",
            }}
        >
            <div className="mask d-flex align-items-center h-100">
                <MDBContainer>
                    <MDBRow className="justify-content-center text-center">
                        <MDBCol md="4" className="mb-4 mb-md-0">
                            <MDBCard
                                className="py-5 text-white"
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, .2)",
                                    borderRadius: "3em",
                                    backdropFilter: "blur(15px)",
                                    border: "2px solid rgba(255, 255, 255, .1)",
                                    backgroundClip: "padding-box",
                                    boxShadow: "10px 10px 10px rgba(46, 54, 68, 0.03)",
                                }}
                            >
                                <MDBCardBody>
                                    <MDBAnimation
                                        reset={true}
                                        tag="img"
                                        start="onLoad"
                                        animation="slide-in-left"
                                        duration={1000}
                                        delay={200}
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                                        className="rounded-circle shadow-2-strong mb-5"
                                        style={{ width: "100px" }}
                                    />
                                    <MDBAnimation
                                        reset={true}
                                        tag="h5"
                                        start="onLoad"
                                        animation="slide-in-left"
                                        duration={1000}
                                        delay={300}
                                        className="mb-4"
                                    >
                                        Veronica Smith
                                    </MDBAnimation>
                                    <MDBAnimation
                                        reset={true}
                                        tag="p"
                                        start="onLoad"
                                        animation="slide-in-left"
                                        duration={1000}
                                        delay={400}
                                        className="mb-4"
                                    >
                                        Backend Developer
                                    </MDBAnimation>
                                    <MDBTypography listUnStyled className="mb-0">
                                        <a href="#!" className="px-1">
                                            <MDBAnimation
                                                reset={true}
                                                tag="i"
                                                start="onLoad"
                                                animation="slide-in-left"
                                                duration={1000}
                                                delay={500}
                                                className="fab fa-github text-white"
                                            ></MDBAnimation>
                                        </a>
                                        <a href="#!" className="px-1">
                                            <MDBAnimation
                                                reset={true}
                                                tag="i"
                                                start="onLoad"
                                                animation="slide-in-left"
                                                duration={1000}
                                                delay={600}
                                                className="fab fa-twitter text-white"
                                            ></MDBAnimation>
                                        </a>
                                        <a href="#!" className="px-1">
                                            <MDBAnimation
                                                reset={true}
                                                tag="i"
                                                start="onLoad"
                                                animation="slide-in-left"
                                                duration={1000}
                                                delay={700}
                                                className="fab fa-linkedin-in text-white"
                                            ></MDBAnimation>
                                        </a>
                                    </MDBTypography>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4" className="mb-4 mb-md-0">
                            <MDBCard
                                className="py-5 text-white"
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, .2)",
                                    borderRadius: "3em",
                                    backdropFilter: "blur(15px)",
                                    border: "2px solid rgba(255, 255, 255, .1)",
                                    backgroundClip: "padding-box",
                                    boxShadow: "10px 10px 10px rgba(46, 54, 68, 0.03)",
                                }}
                            >
                                <MDBCardBody>
                                    <MDBAnimation
                                        reset={true}
                                        tag="img"
                                        start="onLoad"
                                        animation="slide-in-left"
                                        duration={1000}
                                        delay={200}
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                                        className="rounded-circle shadow-2-strong mb-5"
                                        style={{ width: "100px" }}
                                    />
                                    <MDBAnimation
                                        reset={true}
                                        tag="h5"
                                        start="onLoad"
                                        animation="slide-in-left"
                                        duration={1000}
                                        delay={300}
                                        className="mb-4"
                                    >
                                        Tom Johnson
                                    </MDBAnimation>
                                    <MDBAnimation
                                        reset={true}
                                        tag="p"
                                        start="onLoad"
                                        animation="slide-in-left"
                                        duration={1000}
                                        delay={400}
                                        className="mb-4"
                                    >
                                        Digital Marketing Analyst
                                    </MDBAnimation>
                                    <MDBTypography listUnStyled className="mb-0">
                                        <a href="#!" className="px-1">
                                            <MDBAnimation
                                                reset={true}
                                                tag="i"
                                                start="onLoad"
                                                animation="slide-in-left"
                                                duration={1000}
                                                delay={500}
                                                className="fab fa-facebook-f text-white"
                                            ></MDBAnimation>
                                        </a>
                                        <a href="#!" className="px-1">
                                            <MDBAnimation
                                                reset={true}
                                                tag="i"
                                                start="onLoad"
                                                animation="slide-in-left"
                                                duration={1000}
                                                delay={600}
                                                className="fab fa-twitter text-white"
                                            ></MDBAnimation>
                                        </a>
                                        <a href="#!" className="px-1">
                                            <MDBAnimation
                                                reset={true}
                                                tag="i"
                                                start="onLoad"
                                                animation="slide-in-left"
                                                duration={1000}
                                                delay={700}
                                                className="fab fa-linkedin-in text-white"
                                            ></MDBAnimation>
                                        </a>
                                    </MDBTypography>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4" className="mb-4 mb-md-0">
                            <MDBCard
                                className="py-5 text-white"
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, .2)",
                                    borderRadius: "3em",
                                    backdropFilter: "blur(15px)",
                                    border: "2px solid rgba(255, 255, 255, .1)",
                                    backgroundClip: "padding-box",
                                    boxShadow: "10px 10px 10px rgba(46, 54, 68, 0.03)",
                                }}
                            >
                                <MDBCardBody>
                                    <MDBAnimation
                                        reset={true}
                                        tag="img"
                                        start="onLoad"
                                        animation="slide-in-left"
                                        duration={1000}
                                        delay={200}
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                        className="rounded-circle shadow-2-strong mb-5"
                                        style={{ width: "100px" }}
                                    />
                                    <MDBAnimation
                                        reset={true}
                                        tag="h5"
                                        start="onLoad"
                                        animation="slide-in-left"
                                        duration={1000}
                                        delay={300}
                                        className="mb-4"
                                    >
                                        Emma Lovelace
                                    </MDBAnimation>
                                    <MDBAnimation
                                        reset={true}
                                        tag="p"
                                        start="onLoad"
                                        animation="slide-in-left"
                                        duration={1000}
                                        delay={400}
                                        className="mb-4"
                                    >
                                        Web Designer
                                    </MDBAnimation>
                                    <MDBTypography listUnStyled className="mb-0">
                                        <a href="#!" className="px-1">
                                            <MDBAnimation
                                                reset={true}
                                                tag="i"
                                                start="onLoad"
                                                animation="slide-in-left"
                                                duration={1000}
                                                delay={500}
                                                className="fab fa-dribbble text-white"
                                            ></MDBAnimation>
                                        </a>
                                        <a href="#!" className="px-1">
                                            <MDBAnimation
                                                reset={true}
                                                tag="i"
                                                start="onLoad"
                                                animation="slide-in-left"
                                                duration={1000}
                                                delay={700}
                                                className="fab fa-linkedin-in text-white"
                                            ></MDBAnimation>
                                        </a>
                                        <a href="#!" className="px-1">
                                            <MDBAnimation
                                                reset={true}
                                                tag="i"
                                                start="onLoad"
                                                animation="slide-in-left"
                                                duration={1000}
                                                delay={600}
                                                className="fab fab fa-instagram text-white"
                                            ></MDBAnimation>
                                        </a>
                                    </MDBTypography>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
                rel="stylesheet"
            />
        </MDBContainer>
    );
}