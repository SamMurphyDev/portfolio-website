import React from 'react';

export const AboutMeSection: React.FC = () => {
  return (
    <section className="about" id="about">
      <h1>About Me</h1>
      <div className="row">
        {/* <div className="col-4"></div> */}
        <div className="col-8 ml-auto mr-auto">
          <h2>Who am I?</h2>
          <h3>
            I'm Sam Murphy, a Full Stack Software Developer and a Natural Leader
          </h3>
          <p>
            Software improves the world we live in. Being a passion driven
            indivdual that strives to create meaningful software with real world
            impacts.
          </p>
          <p>
            I've worked with many businesses and government departments creating
            platforms to deliver their products, delivering digital
            transformation project and developing top of class applications.
          </p>
          <ul>
            <li>Websites</li>
            <li>Customer relationship management portals</li>
            <li>Fully managed AWS backends</li>
            <li>Application Programming Interfaces</li>
            <li>Database Design</li>
            <li>
              Serverless deployments - Infrastructure as Code (IaS), Platform as
              a Service (PaaS), Functions as a Service (FaaS)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
