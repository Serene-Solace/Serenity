import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { ClosedEyeIcon, OpenEyeIcon } from '../Icons/Icons'
import { mediaQueries } from '../mediaQueries'
import { motion, useAnimation } from 'framer-motion'

interface CustomInputProps {
  error?: string | false | undefined | boolean
  inputLabel?: string
  type: 'text' | 'password' | 'email'
  inputPlaceholder?: string
  value: string
  allfilled?: boolean
  disabled?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  handleVerifyClick?: () => void
  customBorder?: string
  customPadding?: string
  style?: React.CSSProperties
  showLabel?: boolean
  showError?: boolean
  id: string
  readOnly?: boolean
}

interface StyledWrapperProps {
  $customBorder?: string
  $customPadding?: string
  isDisabled?: boolean
  showError?: boolean
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    font-family: 'RALEWAY';
    position: relative;
    padding-bottom: 10px;

    .input-label {
      font-size: 0.875rem; //14px
      color: #283b41;
      ${mediaQueries.mobile} {
        font-size: 0.75rem; //12px
      }
    }

    .input-container {
      width: 25rem; //400px
      ${mediaQueries.tablet} {
        width: 21.875rem; // 350px
      }
      ${mediaQueries.mobile} {
        width: 18.75rem; // 300px
      }
      position: relative;
      border: 1px solid #d4d8d9;
      border-radius: 8px;
      ${({ showError }) =>
        showError &&
        css`
          border-color: red;
        `}
      transition: transform 0.3s ease;

      .input-field {
        width: 100%;
        border-radius: 8px;
        outline: none;
        font-family: 'Raleway';
        font-weight: 500;
        font-size: 0.85rem;
        line-height: 0.75rem;
        background-color: white;
        height: 2.25rem;
        border: ${({ $customBorder }) => $customBorder || 'none'};
        padding: ${({ $customPadding }) => $customPadding || '0 1rem'};
        transition: transform 0.3s ease;
        &:focus {
          border: 1px solid #283b4199;
        }
        &:disabled {
          background-color: #283b411a;
          border-color: #283b411a;
          color: #283b411a;
          cursor: not-allowed;
        }
      }
      .toggle-password {
        position: absolute;
        right: 0.5rem;
        top: 60%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }

    .error-text {
      font-family: Raleway;
      font-size: 10px;
      font-weight: 500;
      line-height: 11.74px;
      text-align: left;
      color: #f66767;
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
    }
  }
`

const CustomInput: React.FC<CustomInputProps> = ({
  error,
  inputLabel,
  type = 'text',
  inputPlaceholder,
  value,
  disabled = false,
  onChange,
  onBlur,
  customBorder,
  customPadding,
  style,
  showError,
  id,
  readOnly = false
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const controls = useAnimation()

  const setCursorToEnd = () => {
    if (inputRef.current) {
      const length = inputRef.current.value.length
      inputRef.current.setSelectionRange(length, length)
    }
  }

  const togglePasswordVisibility = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    if (value.length <= 0) return
    setShowPassword(!showPassword)
    setTimeout(setCursorToEnd, 0)
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    if (value.length <= 0) return
    if (inputRef.current) {
      inputRef.current.focus()
      setCursorToEnd()
    }
  }

  useEffect(() => {
    if (type === 'password' && value.length <= 0) {
      setShowPassword(false)
    }
  }, [value])

  useEffect(() => {
    if (showError || error) {
      controls.start({ y: -10, opacity: 1, transition: { duration: 0.3 } })
    } else {
      controls.start({ y: 0, opacity: 1, transition: { duration: 0.3 } })
    }
  }, [showError, error, controls])

  return (
    <StyledWrapper $customBorder={customBorder} $customPadding={customPadding} showError={!!error || showError}>
      <motion.div className='input-wrapper' animate={controls}>
        {inputLabel && <label className='input-label'>{inputLabel}</label>}
        <div className='input-container'>
          <input
            id={id}
            name={id}
            type={type === 'password' && showPassword ? 'text' : type}
            className='input-field'
            placeholder={inputPlaceholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            style={style}
            readOnly={readOnly}
            ref={inputRef}
          />
          {type === 'password' && (
            <div className='toggle-password' onMouseDown={handleMouseDown} onClick={togglePasswordVisibility}>
              {showPassword ? (
                <OpenEyeIcon
                  size='small'
                  style={
                    value.length <= 0
                      ? {
                          color: '#999',
                          cursor: 'not-allowed',
                          opacity: '0.6'
                        }
                      : {}
                  }
                />
              ) : (
                <ClosedEyeIcon
                  size='small'
                  style={
                    value.length <= 0
                      ? {
                          color: '#999',
                          cursor: 'not-allowed',
                          opacity: '0.6'
                        }
                      : {}
                  }
                />
              )}
            </div>
          )}
        </div>
        <span className='error-text'>{error}</span>
      </motion.div>
    </StyledWrapper>
  )
}

export default CustomInput
