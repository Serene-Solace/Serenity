import React from 'react'
import { StyledWrapper } from './StyledWrapper'
import { formatFileSize } from '../formatters'
import { CancelIcon } from '../Icons/Icons'
import { Body } from '../FigmaComponents/CustomTypography'

interface CustomFileDetailsBoxProps {
  name?: string
  size?: number
  onClick: () => void
  isNew?: boolean
}

const CustomFileDetailsBox: React.FC<CustomFileDetailsBoxProps> = ({ name, size, onClick, isNew }) => {
  return (
    <StyledWrapper>
      <div className='file'>
        <Body className='fileName'>{name}</Body>
        {isNew && <img src='/images/newFileIcon.png' alt='new file' />}
        <div className='size-and-icon'>
          {size && <Body className='size'>{formatFileSize(size)}</Body>}
          <CancelIcon onClick={onClick} className='icon' />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default CustomFileDetailsBox
