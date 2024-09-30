import React from 'react'
import styled from 'styled-components'
import Popover from '@mui/material/Popover'
import { SxProps, Theme } from '@mui/system'

interface PopoverItem {
  text: string
  onClick?: () => void
}

export interface CustomPopoverProps {
  open: boolean
  anchorEl: HTMLElement | null
  onClose: () => void
  items: PopoverItem[]
  sx?: SxProps<Theme> // Optional prop for custom styles
}

const StyledFileActions = styled.div`
  width: 13rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.3rem 0.8rem;
  font-family: Raleway;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  .popover-item {
    padding: 0.3rem 0;
    cursor: pointer;
  }
`

 const CustomPopover: React.FC<CustomPopoverProps> = ({ open, anchorEl, onClose, items, sx }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      onClose={onClose}
      sx={{ marginTop: '5px', marginLeft: '15px', zIndex: 10000, ...sx }}
    >
      <StyledFileActions>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div onClick={item.onClick} className='popover-item'>
              {item.text}
            </div>
            {index < items.length - 1 && <hr style={{ margin: '0' }} />}
          </React.Fragment>
        ))}
      </StyledFileActions>
    </Popover>
  )
}

export default CustomPopover;
