import * as React from "react"
import Layout from "../components/Layout";
import projects from "../data/fr/projects.json";

const Project = () => {
    return (
        <Layout>
            <div>
                <h1>project</h1>
                <ul>
                    {projects.map((project, index) => {
                        return <li>
                            {project.title}
                        </li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default Project

export const Head = () => <title>Project</title>
