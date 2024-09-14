import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { H5 } from '../CustomFigmaComponents/CustomTypography'
import Button from '../CustomFigmaComponents/CustomBtns'

interface DashboardCardProps {
  title: string
  imgSrc: string
  linkTo: string
  buttonText: string
}

const CardWrapper = styled.div`
  width: 20rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1.5rem 1rem;
  gap: 1.7rem;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px #00000040;

  H5 {
    text-align: center;
  }
`

const DashboardCard: React.FC<DashboardCardProps> = ({ title, imgSrc, linkTo, buttonText }) => {
  return (
    <CardWrapper>
      <H5>{title}</H5>
      <img src={imgSrc} alt={title} />
      <Link to={linkTo}>
        <Button variant='primary'>{buttonText}</Button>
      </Link>
    </CardWrapper>
  )
}

export default DashboardCard
