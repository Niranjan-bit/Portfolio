import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 5rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What I can do for your" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="I do UI/UX design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I can develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<BsCodeSlash />}
            title="Programming"
            desc="I'm proficient in programming languages like Java,JavaScript. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
