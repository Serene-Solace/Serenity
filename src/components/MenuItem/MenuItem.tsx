import React from 'react'
import { MenuItem } from '@mui/material'

export interface MenuItemOwnProps {
  onClick: () => void
  children: React.ReactNode
}

 const CustomMenuItem: React.FC<MenuItemOwnProps> = ({ onClick, children }) => {
  return (
    <MenuItem style={{ fontFamily: 'Raleway', borderRadius: 0 }} onClick={onClick}>
      {children}
    </MenuItem>
  )
}

export default CustomMenuItem;
