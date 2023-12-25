import * as React from "react"
import Layout from "../components/Layout";
import photos from "../data/fr/photos.json";

const Photo = () => {
    return (
        <Layout>
            <div>
                <h1>photo</h1>
                <ul>
                    {photos.map((photo, index) => {
                        return <li>
                            {photo.description}
                        </li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default Photo

export const Head = () => <title>photo</title>
