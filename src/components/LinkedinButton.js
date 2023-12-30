import React from "react";
import { Button } from 'react-bootstrap';


const LinkedinButton = () => {
    return (
        <div className="my-3 d-flex justify-content-center align-items-center text-center">
            <Button className="btn btn-cta-primary" variant="cta-primary" href="https://www.linkedin.com/in/bercksonjohnslyjeanlouis">
                CONSULTER MON PROFIL LINKEDIN
            </Button>
        </div>
    )
}

export default LinkedinButton