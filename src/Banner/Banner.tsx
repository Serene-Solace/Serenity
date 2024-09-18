import React from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import { SxProps, Theme } from '@mui/material'
import { CloseIcon, InfoIcon } from '../Icons/Icons'

interface BannerProps {
  message: string
  severity?: 'error' | 'warning' | 'info' | 'success'
  styleOverridesObj?: Record<string, string | number>
  visible: boolean
  reset: () => void
  userStatus?: string
}

let defaultStyle: SxProps<Theme> = {
  marginBottom: '1rem',
  alignItems: 'center',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '14px',
  zIndex: '99',
  margin: '0px',
  color: '#fff',
  borderRadius: '0',
  '@media (max-width: 330px)': {
    fontSize: '10px'
  },
  '@media ((min-width: 751px) and (max-width: 920px))': {
    fontSize: '12px'
  }
}

const SeverityBgColors: Record<NonNullable<BannerProps['severity']>, string> = {
  error: '#EA4335',
  warning: '#d4b639',
  info: '#3b8992',
  success: '#61A659'
}

export const CustomBanner: React.FC<BannerProps> = ({ message, visible = false, reset, severity = 'error', styleOverridesObj, userStatus }) => {
  const navigate = useNavigate()

  const resolvedSeverity = severity ?? 'error'
  const combinedStyles = styleOverridesObj
    ? {
        ...defaultStyle,
        backgroundColor: SeverityBgColors[resolvedSeverity],
        ...styleOverridesObj
      }
    : { ...defaultStyle, backgroundColor: SeverityBgColors[resolvedSeverity] }

  return (
    visible && (
      <Alert
        onClick={() => userStatus === 'PENDING_DELETE' && navigate('/profile')}
        sx={combinedStyles}
        severity={severity}
        icon={<InfoIcon size='medium' style={{ color: '#fff', cursor: 'default' }} />}
        action={
          userStatus !== 'PENDING_DELETE' && (
            <CloseIcon
              size='small'
              onClick={() => {
                reset()
              }}
            />
          )
        }
      >
        {message}
      </Alert>
    )
  )
}
