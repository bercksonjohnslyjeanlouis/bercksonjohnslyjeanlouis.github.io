import * as React from "react"
import Layout from "../components/Layout";
import services from "../data/fr/services.json";

const service = () => {
    return (
        <Layout>
            <div>
                <h1>service</h1>
                <ul>
                    {services.map((service, index) => {
                        return <li>
                            {service.description}
                        </li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default service

export const Head = () => <title>service</title>
