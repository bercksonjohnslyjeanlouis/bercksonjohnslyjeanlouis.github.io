import * as React from "react"
import Layout from "../components/Layout";
import posts from "../data/fr/posts.json"

const Blog = () => {
    return (
        <Layout>
            <div>
                <h1>BLOG</h1>
                    <ul>

                        {posts.map((post, index) => {
                            return <li>
                                <p>
                                    {post.title}
                                </p>
                            </li>
                        })}

                    </ul>
            </div>
        </Layout>
    )
}

export default Blog

export const Head = () => <title>BLOG</title>
