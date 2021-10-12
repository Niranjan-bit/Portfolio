import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.jpg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 200px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .left {
    flex: 4;
  }
  .right {
    flex: 5;
  }
  .hero__heading {
    font-size: 2.5rem;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 450px;
    width: 100%;
    height: 450px;
    margin: 0 auto;
  }
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 400px;
    width: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .hero__heading {
      font-size: 1.4rem;
      text-align: center;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="top-section">
            <div className="left">
              <div className="hero__img">
                <img src={HeroImg} alt="" />
              </div>
            </div>
            <div className="right">
              <h1 className="hero__heading">
                <span>Hello, This is</span>
                <span className="hero__name">Niranjan</span>
              </h1>
              <div className="hero__info">
                <PText>
                  I am a freelance developer and a web designer. I love coding
                  and creating new web experiences.
                </PText>
              </div>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
