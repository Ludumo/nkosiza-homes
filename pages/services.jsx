import React from 'react'
import Card from '../components/Card'
import Hero from '../components/Hero'

const Home = () => (
  <>
    <Hero header='SERVICES' />
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-wrap -mx-4">
      <Card
        image="https://ludumobucket.s3.eu-central-1.amazonaws.com/Floor+Plans/blueprint.jpg"
        header="Preconstruction Planning"
        text="As part of our comprehensive service,we take the time to thoroughly assess
        your site and consider the best course of action with our team of experts. 
        We understand that every project is unique and requires a personalized approach. 
        That's why we take the time to thoroughly evaluate your site and work with you to determine the best way forward.
        Our team of experts is dedicated to providing elite services and ensuring that your new structure is erected in
        the most effective and efficient manner possible."
        />
        <Card
          image="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/b.jpg"
          header="Architectural Modelling"
          text=" Our team is skilled in architectural modeling and we use the latest technology
          to create detailed and accurate models based on your specific needs and requirements.
          We take the time to carefully consider the layout and design of your new structure, 
          as well as any unique features or challenges presented by your site. Once we have a 
          clear understanding of your needs and preferences, we use state-of-the-art software 
          to create a detailed model that reflects the final design of your new structure. This
          allows us to carefully plan and execute the construction process, ensuring that everything 
          is built to your specifications and meets your expectations."
          />
      <Card
        image="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/h.jpg"
        header="Construction Management"
        text="Our construction team is top-notch 
        and we are confident in their ability to efficiently and effectively erect your complete 
        structure within just one day. We stand behind our promise to deliver a high-quality, 
        fully constructed home in a timely manner. Our team is dedicated to providing excellent 
        service and ensuring that you are satisfied with the final "
        />
    </div>
  </div>
</>
)

export default Home
