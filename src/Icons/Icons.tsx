import React from 'react'

interface IconProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
  style?: React.CSSProperties
  className?: string
  onClick?: React.MouseEventHandler<HTMLSpanElement>
}

const defaultStyles = (size?: 'small' | 'medium' | 'large', color?: string, style?: React.CSSProperties): React.CSSProperties => {
  let fontSize: string

  switch (size) {
    case 'small':
      fontSize = '16px'
      break
    case 'medium':
      fontSize = '18px'
      break
    case 'large':
      fontSize = '30px'
      break
    default:
      fontSize = '24px'
  }

  return {
    fontSize,
    color: color || '#283B41',
    cursor: 'pointer',
    fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 40",
    ...style
  }
}

export const DescriptionIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    description
  </span>
)

export const AttachFileIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    attach_file
  </span>
)

export const ChatBubbleIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    chat_bubble
  </span>
)

export const RocketLaunchIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    rocket_launch
  </span>
)

export const CloseIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    close
  </span>
)

export const CancelIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    cancel
  </span>
)

export const PersonIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    person
  </span>
)

export const ArrowDownIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    keyboard_arrow_down
  </span>
)

export const ArrowUpIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    keyboard_arrow_up
  </span>
)

export const ArrowRightIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    chevron_right
  </span>
)

export const ArrowLeftIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    chevron_left
  </span>
)

export const MenuIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    menu
  </span>
)

export const OpenIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    open_in_new
  </span>
)

export const DownloadIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    download
  </span>
)

export const SearchIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => {
  const searchIconStyle: React.CSSProperties = {
    width: '30px',
    ...defaultStyles(size, color, style)
  }

  return (
    <span className={`material-symbols-rounded ${className ? className : ''}`} style={searchIconStyle} onClick={onClick}>
      search
    </span>
  )
}

export const ReplayIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    replay
  </span>
)

export const SendIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    send
  </span>
)

export const ArrowDropDown: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    arrow_drop_down
  </span>
)

export const SmsIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    sms
  </span>
)

export const InfoIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    info
  </span>
)

export const ArrowBackIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    arrow_back_ios
  </span>
)

export const ArrowForwardIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    arrow_forward_ios
  </span>
)

export const AddIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    add
  </span>
)

export const ZoomInIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    zoom_in
  </span>
)

export const ZoomOutIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    zoom_out
  </span>
)

export const VerticalDotsIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    more_vert
  </span>
)

export const EditIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    edit
  </span>
)

export const ArrowDropDownRight: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    arrow_right
  </span>
)

export const DeleteIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    delete
  </span>
)
export const DotsHorizIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    more_horiz
  </span>
)
export const BackArrowIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    arrow_back
  </span>
)
export const TabIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    tab_group
  </span>
)
export const SearchBoxIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    feature_search
  </span>
)
export const SettingsIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    settings
  </span>
)

export const OutputIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    output
  </span>
)
export const VerifyIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    check_circle
  </span>
)
export const InProgressIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    pace
  </span>
)
export const RestartIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    restart_alt
  </span>
)
export const HomeIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    home
  </span>
)
export const AboutUsIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    contacts_product
  </span>
)
export const PricingIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    sell
  </span>
)
export const ContactUsIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    perm_phone_msg
  </span>
)
export const LoginIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    login
  </span>
)
// Add more icons as needed
