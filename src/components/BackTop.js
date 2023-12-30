import React from 'react';
import { Button } from 'react-bootstrap';

const BackTop = () => {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Button className="back-to-top" onClick={handleBackToTop} style={{ cursor: 'pointer' }}>
            <i className="fa fa-chevron-up" style={{ width: '100%', height: '100%' }}></i>
        </Button>
    );
};

export default BackTop;
