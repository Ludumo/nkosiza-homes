import React from 'react';
import Card from '../components/Card';
import Hero from '../components/Hero';

const Services: React.FC = () => (
  <>
    <Hero
      backgroundImage="https://ludumobucket.s3.eu-central-1.amazonaws.com/Trail+Huts/5.jpg"
      header="SERVICES"
      message="" showButton={false} buttonText={''}    />
    <h2 className="text-2xl pb-10 pt-12 font-bold text-center">WHAT WE OFFER</h2>
    <p className="flex justify-center text-xl pb-10 pt-12 mx-auto font-light text-center">
      We provide comprehensive construction services including management, architectural design,
      pre-construction planning, high-quality work, timely completion and excellent customer service,
      using a team of experts to tackle unique projects.
    </p>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <Card
          image="https://ludumobucket.s3.eu-central-1.amazonaws.com/Floor+Plans/blueprint.jpg"
          header="Preconstruction Planning"
          text="We thoroughly assess your site and work with experts to determine the best course of action for your unique project. Our team is dedicated to providing elite services and ensuring that your new structure is erected efficiently and effectively."
        />
        <Card
          image="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/b.jpg"
          header="Architectural Modelling"
          text="We thoroughly assess your site and work with experts to determine the best course of action for your unique project. Our team is dedicated to providing elite services and ensuring that your new structure is erected efficiently and effectively."
        />
        <Card
          image="https://ludumobucket.s3.eu-central-1.amazonaws.com/Sundry+pics/h.jpg"
          header="Construction Management"
          text="Our skilled construction team can efficiently and effectively erect your complete structure in just one day. We promise high-quality, timely construction and excellent service to ensure customer satisfaction."
        />
      </div>
    </div>
  </>
);

export default Services;
