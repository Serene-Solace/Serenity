import React from 'react'
import { CustomExpendibleStyledWrapper } from './CustomExpendibleStyledWrapper'
import { Body } from '../CustomFigmaComponents/CustomTypography'
import { ArrowDropDown, ArrowDropDownRight } from '../Icons/Icons'

interface CustomExpendibleProps {
  title: string
  children: React.ReactNode
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomExpendible: React.FC<CustomExpendibleProps> = ({ title, children, open, setOpen }) => {
  return (
    <CustomExpendibleStyledWrapper>
      {!open && (
        <div className='title' onClick={() => setOpen((prev) => !prev)}>
          <div className='titleToggleIcon'>
            {open ? <ArrowDropDown style={{ color: '#283b41' }} /> : <ArrowDropDownRight style={{ color: '#283b41' }} />}
          </div>
          <div className='titleText'>
            <Body fontWeight={600}>{title}</Body>
          </div>
        </div>
      )}
      {open && children}
    </CustomExpendibleStyledWrapper>
  )
}

export default CustomExpendible
