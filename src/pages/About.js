import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import AboutInfoItem1 from '../components/AboutInfoItem1';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.6rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 2.5rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span> Niranjan Kangane </span>
            </p>
            <h2 className="about__heading">A self taught developer</h2>
            <div className="about__info">
              <PText>
                In High school I was a B plus to B minus student, which was a
                substandard grade point average. In moving forward I have become
                the ideal student that I always dreamed of. Looking back at what
                changed from then and now, it's truly my mindset.
                <br />
                <br />I started coding since I was in Junior College. I love it
                and now I have the opportunity to design along with the coding.
                I find it really interesting and I enjoyed the process a lot.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Modern Boys High School, Pune']}
            />
            <AboutInfoItem
              title="College"
              items={['Modern College of Arts, Commerce and Science, Pune']}
            />
            <AboutInfoItem
              title="U.G Programme"
              items={[
                'Pimpri Chinchwad College of Engineering and Research, Pune',
              ]}
            />
          </div>
        </div>
        <div className="about__info__item">
          <h1 className="about__info__heading">My Skills</h1>
          <AboutInfoItem
            title="FrontEnd"
            items={['HTML', 'CSS', 'JS', 'ReactJS']}
          />
          <AboutInfoItem title="Backend" items={['Node']} />
          <AboutInfoItem title="Programming" items={['C', 'C++', 'Java']} />
          <AboutInfoItem title="Design" items={['Figma']} />
        </div>
        <div className="about__info__item">
          <h1 className="about__info__heading">Experience</h1>
          <AboutInfoItem1
            title=" May - July 2021   "
            items={['Internship - FrontEnd Developer at HC Roots']}
          />
          <AboutInfoItem1
            title=" August - September 2021   "
            items={['Internship - ReactJS Developer at ProInsights']}
          />
          <AboutInfoItem1
            title=" September 2021 -  Running   "
            items={['FrontEnd Team - Google Developer Student Club']}
          />
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
