import * as React from "react"
import Layout from "../components/Layout";
import testimonials from "../data/fr/testimonials.json";

const Testimonial = () => {
  return (
      <Layout>
        <div>
          <h1>Témoignages</h1>
          <ul>
            {testimonials.map((testimonial, index) => {
              return <li>
                {testimonial.comment}
              </li>
            })}
          </ul>
        </div>
      </Layout>
  )
}

export default Testimonial

export const Head = () => <title>Témoignages</title>
