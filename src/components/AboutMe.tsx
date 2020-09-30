import React from 'react';

export const AboutMeSection: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        {/* <div className="col-4"></div> */}
        <div className="col-8 ml-auto mr-auto">
          <h1>What I do</h1>
          <h2 className="pt-3 pb-3">
            Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.
            <footer className="blockquote-footer">
              Martin Fowler in{' '}
              <cite title="Refactoring: Improving the Design of Existing Code">
                Refactoring: Improving the Design of Existing Code
              </cite>
            </footer>
          </h2>
          <p>
            I'm full stack developer from Canberra, Australia who loves explore
            the partnership of software and humans.
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
