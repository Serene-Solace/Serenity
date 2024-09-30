import { Box, Modal, SxProps, Theme } from '@mui/material'
import React from 'react'

export interface CustomModalProps {
  children: React.ReactNode
  open: boolean
  handleClose: () => void
  styleOverridesObj?: Record<string, string | number>
}

let defaultStyle: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  minWidth: '25rem',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: '22px',
  outline: 'none',
  borderRadius: '32px',
  '@media (max-width: 433px)': {
    width: '90%',
    minWidth: 'auto',
    padding: '8px'
  },
  '@media ((min-width: 434px) and ( max-width: 638px))': {
    width: '75%',
    minWidth: 'auto',
    padding: '8px'
  },
  '@media ((min-width: 639px) and ( max-width: 768px))': {
    width: '60%',
    minWidth: 'auto',
    padding: '8px'
  }
}

 const CustomModal: React.FC<CustomModalProps> = ({ children, open, handleClose, styleOverridesObj }) => {
  const combinedStyles = styleOverridesObj ? { ...defaultStyle, ...styleOverridesObj } : defaultStyle

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={combinedStyles}>{children}</Box>
    </Modal>
  )
}

export default CustomModal
