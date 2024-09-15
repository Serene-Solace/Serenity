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
    color: color || 'inherit',
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

export const DoneIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    done
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

export const ContentCopyIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    content_copy
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

export const MinimizeIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    minimize
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

export const UploadImageIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    add_photo_alternate
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

export const AddCommentIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    add_comment
  </span>
)

export const SubtractIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    remove
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
export const UploadFileIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    cloud_upload
  </span>
)
export const WorkspacesIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    dock_to_right
  </span>
)
export const DocumentsIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    article
  </span>
)
export const WarningIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    warning
  </span>
)
export const ErrorIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    error
  </span>
)
export const DocIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    article
  </span>
)
export const RebaseIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    rebase
  </span>
)

export const PreviousIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    history
  </span>
)

export const ChatIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    mark_unread_chat_alt
  </span>
)
export const OpenEyeIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    visibility
  </span>
)
export const ClosedEyeIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    visibility_off
  </span>
)
export const PreviewIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    float_landscape_2
  </span>
)

export const AccountCircleIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    account_circle
  </span>
)

export const KeyVerticalIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    key_vertical
  </span>
)

export const ShoppingModeIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    shoppingmode
  </span>
)

export const DataUsageIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    data_usage
  </span>
)
export const DownloadDoneIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    download_done
  </span>
)
export const UpwardArrowIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    arrow_upward
  </span>
)
export const CaptureIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    center_focus_weak
  </span>
)
export const PhotoLibraryIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    photo_library
  </span>
)
export const LinkIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    link
  </span>
)
export const RefreshIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    autorenew
  </span>
)
export const VolumeUpIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    volume_up
  </span>
)
export const TickIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    check
  </span>
)

// export const ChatFillIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
//   <span className={`material-symbols-outlined ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
//     add_comment
//   </span>
// )

export const MicIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    mic
  </span>
)
export const StopIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    stop_circle
  </span>
)
export const ToggleOnIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    toggle_on
  </span>
)
export const ToggleOffIcon: React.FC<IconProps> = ({ size, color, style, className, onClick }) => (
  <span className={`material-symbols-rounded ${className ? className : ''}`} style={defaultStyles(size, color, style)} onClick={onClick}>
    toggle_off
  </span>
)
// Add more icons as needed
