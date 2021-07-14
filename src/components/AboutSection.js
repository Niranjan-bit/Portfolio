import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    align-items: center;
    justify-content: center;
    text-align: left;
    margin-top: 2rem;
    margin-left: 45rem;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      text-align: center;
    }
    .aboutSection__left {
      width: 100%;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__button {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="AboutSection__left">
          <SectionTitle
            subheading="             Let me introduce myself"
            heading="About Me"
          />
          <PText>
            <h4>I'm Niranjan Kangane,</h4>
            <p>I'm a 2nd Year Student at PCCOER in Pune University.</p>
            <p>Student > Developer </p>
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
