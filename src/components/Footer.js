import React from "react";
import {Container} from "react-bootstrap";

const Footer = ( ) => {
    return (
        <>
            <footer className="footer">
                <Container className="text-center">
                    <small className="copyright">
                       Berckson Johnsly JEAN-LOUIS
                    </small>
                    <br />
                    <small className="copyright" style={{ color: '#ffffff' }}>
                        <span>2022 - {new Date().getFullYear()}</span>
                        &nbsp;&nbsp;|&nbsp;&nbsp; &copy;&nbsp;Tous droits réservés
                    </small>
                </Container>
            </footer>
        </>
    )
}

export default Footer