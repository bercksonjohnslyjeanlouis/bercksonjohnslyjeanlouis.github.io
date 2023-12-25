import * as React from "react"
import Layout from "../components/Layout";
import events from "../data/fr/events.json";

const Event = () => {
    return (
        <Layout>
            <div>
                <h1>Event</h1>
                <ul>
                    {events.map((event, index) => {
                        return <li>
                            {event.description}
                        </li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default Event

export const Head = () => <title>Event</title>
