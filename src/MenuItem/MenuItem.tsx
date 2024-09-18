import { MenuItem } from '@mui/material'

export interface MenuItemOwnProps {
  onClick: () => void
  children: React.ReactNode
}

export const CustomMenuItem: React.FC<MenuItemOwnProps> = ({ onClick, children }) => {
  return (
    <MenuItem style={{ fontFamily: 'Raleway', borderRadius: 0 }} onClick={onClick}>
      {children}
    </MenuItem>
  )
}
