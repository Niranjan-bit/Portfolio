import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .serviceItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'web design',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}) {
  return (
    <ItemStyles>
      <div className="serviceItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
