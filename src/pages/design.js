import * as React from "react"
import Layout from "../components/Layout";
import designs from "../data/fr/designs.json";

const Design = () => {
    return (
        <Layout>
            <div>
                <h1>Design</h1>
                <ul>
                    {designs.map((design, index) => {
                        return <li>
                            {design.name}
                        </li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default Design

export const Head = () => <title>Design</title>
