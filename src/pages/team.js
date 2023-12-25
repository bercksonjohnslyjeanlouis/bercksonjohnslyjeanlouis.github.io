import * as React from "react"
import Layout from "../components/Layout";
import team from "../data/fr/team.json";

const Team = () => {
    return (
        <Layout>
            <div>
                <h1>Collaborateurs</h1>
                <ul>
                    {team.map((person, index) => {
                        return <li>
                            {person.profile}
                        </li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default Team

export const Head = () => <title>Collaborateurs</title>
