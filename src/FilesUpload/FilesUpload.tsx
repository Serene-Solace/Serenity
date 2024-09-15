import React, { forwardRef, useRef, useState } from 'react'
import { StyledWrapper } from './StyledWrapper'
import Toast from '../Toast/Toast'

interface CustomFilesUploadProps {
  isDisabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  color?: string
  img?: any
  flexDirection?: string
  imgUploader?: boolean
}

const MAX_FILE_SIZE_MB = 5
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024

const CustomFilesUpload = forwardRef<HTMLInputElement, CustomFilesUploadProps>(
  ({ onChange, color, img, isDisabled = false, flexDirection = 'column', imgUploader = false }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const imgUrl = img || '/images/upload_icon.svg'
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const handleLabelClick = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
      if (isDisabled) {
        event.preventDefault()
        Toast('Cannot upload more than 10 files', 'warn')
      } else {
        inputRef.current?.click()
      }
    }
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files
      if (files) {
        for (const file of files) {
          if (imgUploader) {
            if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
              setErrorMessage('Only JPG and JPEG images are allowed.')
              return
            }
            if (file.size > MAX_FILE_SIZE_BYTES) {
              setErrorMessage(`Image file size exceeds ${MAX_FILE_SIZE_MB}MB limit.`)
              return
            }
          }
        }
        setErrorMessage(null)
        onChange(event)
      }
    }

    return (
      <StyledWrapper flexDirection={flexDirection}>
        <div className='upload-icon-container'>
          <input
            disabled={isDisabled}
            multiple
            type='file'
            id='actual-btn'
            accept={imgUploader ? '.jpg,.jpeg' : '.pdf,.txt,.docx,.jpg,.jpeg,.png'}
            onChange={handleFileChange}
            hidden
            ref={ref || inputRef}
          />
          <label className='upload-icon' onClick={handleLabelClick} style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}>
            <img
              style={{
                maxWidth: '7em',
                minWidth: '3em',
                height: 'auto',
                objectFit: 'cover'
              }}
              src={imgUrl}
              alt='upload-icon'
            />
          </label>
        </div>
        <div className='details' style={{ fontSize: '16px', color: '#333' }}>
          <span className='tagline' style={{ display: 'block', marginBottom: '10px' }}>
            Drag & drop files or{' '}
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleLabelClick}>
              Browse
            </span>
          </span>
          <span className='sub-heading'>
            Supported formats: {imgUploader ? '.JPG, .JPEG (Size Limit : 5 MB)' : '.pdf , .txt, .docx , .jpg , .png'}
          </span>
          {errorMessage && (
            <span className='error-message' style={{ color: 'red', marginTop: '10px' }}>
              {errorMessage}
            </span>
          )}
        </div>
      </StyledWrapper>
    )
  }
)

export default CustomFilesUpload
