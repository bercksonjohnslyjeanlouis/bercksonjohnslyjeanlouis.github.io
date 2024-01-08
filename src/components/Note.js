import React from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';

export default function App() {
    return (
        <>
            <MDBTypography note noteColor='primary'>
                <strong>Note primary:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
                officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi
                consequatur esse, sint perspiciatis soluta porro?
            </MDBTypography>

            <MDBTypography note noteColor='secondary'>
                <strong>Note secondary:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
                officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi
                consequatur esse, sint perspiciatis soluta porro?
            </MDBTypography>

            <MDBTypography note noteColor='success'>
                <strong>Note success:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
                officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi
                consequatur esse, sint perspiciatis soluta porro?
            </MDBTypography>

            <MDBTypography note noteColor='danger'>
                <strong>Note danger:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
                officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi
                consequatur esse, sint perspiciatis soluta porro?
            </MDBTypography>

            <MDBTypography note noteColor='warning'>
                <strong>Note warning:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
                officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi
                consequatur esse, sint perspiciatis soluta porro?
            </MDBTypography>

            <MDBTypography note noteColor='info'>
                <strong>Note info:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
                officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi
                consequatur esse, sint perspiciatis soluta porro?
            </MDBTypography>

            <MDBTypography note noteColor='light' className='mb-0'>
                <strong>Note light:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
                officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi
                consequatur esse, sint perspiciatis soluta porro?
            </MDBTypography>

            <MDBTypography note noteColor='dark' color='secondary' className='mb-0'>
                <strong>Note dark:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
                officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi
                consequatur esse, sint perspiciatis soluta porro?
            </MDBTypography>
        </>
    );
}