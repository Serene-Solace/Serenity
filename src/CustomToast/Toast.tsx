import { toast } from 'react-toastify'
import { CancelIcon, CloseIcon, InfoIcon, VerifyIcon, WarningIcon } from '../Icons/Icons'

const Toast = (message = 'Default Message Here', toastType = 'default', _position = 'bottom-right') => {
  switch (toastType) {
    case 'success':
      toast.success(
        <div>
          <p>{message}</p>
        </div>,
        {
          position: 'bottom-right',
          icon: <VerifyIcon color='#7AC773' />,
          closeButton: ({ closeToast }) => <CloseIcon onClick={closeToast} />
        }
      )
      break
    case 'error':
      toast.error(
        <div>
          <p>{message}</p>
        </div>,
        {
          position: 'bottom-right',
          icon: <CancelIcon color='#EB7A7A' />,
          closeButton: ({ closeToast }) => <CloseIcon onClick={closeToast} />
        }
      )
      break
    case 'info':
      toast.info(
        <div>
          <p>{message}</p>
        </div>,
        {
          position: 'bottom-right',
          icon: <InfoIcon color='#4CCFF9' />,
          closeButton: ({ closeToast }) => <CloseIcon onClick={closeToast} />
        }
      )
      break
    case 'warn':
      toast.warn(
        <div>
          <p>{message}</p>
        </div>,
        {
          position: 'bottom-right',
          icon: <WarningIcon color='#F4A735' />,
          closeButton: ({ closeToast }) => <CloseIcon onClick={closeToast} />
        }
      )
      break
    case 'default':
      toast(
        <div>
          <p>{message}</p>
        </div>,
        {
          position: 'bottom-right',
          icon: <VerifyIcon />,
          closeButton: ({ closeToast }) => <CloseIcon onClick={closeToast} />
        }
      )
  }
}

export default Toast
