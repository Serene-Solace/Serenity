import React from 'react'
import { BackdropDiv, LoaderCircle } from './StyledWrapper'

interface CustomLoaderProps {
  isLoading: boolean
}

export const CustomLoader: React.FC<CustomLoaderProps> = ({ isLoading }) => {
  return (
    <BackdropDiv $open={isLoading}>
      <LoaderCircle />
    </BackdropDiv>
  )
}
