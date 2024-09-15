import React from 'react'
import styled, { css } from 'styled-components'
interface CustomDropDownInputProps {
  error?: string | false | undefined | boolean
  inputLabel?: string
  type: 'text' | 'password' | 'email'
  inputPlaceholder?: string
  value: string
  allfilled?: boolean
  disabled?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  handleVerifyClick?: () => void
  customBorder?: string
  customPadding?: string
  style?: React.CSSProperties
  showLabel?: boolean
  showError?: boolean
  id: string
  readOnly?: boolean
  onClick?: () => void
}

interface StyledWrapperProps {
  $customBorder?: string
  $customPadding?: string
  isDisabled?: boolean
  showError?: boolean
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: 'RALEWAY';
  width: 100%;

  .input-label {
    font-size: 0.875rem; //14px
    color: #283b41;
    @media (max-width: 750px) {
      font-size: 0.75rem; //12px
    }
  }

  .input-container {
    width: 100%;
    border: 1px solid #d4d8d9;
    border-radius: 8px;
    ${({ showError }) =>
      showError &&
      css`
        border-color: red;
      `}

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
  }

  .error-text {
    font-size: 0.75rem;
    color: red;
  }
`

const CustomDropDownInput: React.FC<CustomDropDownInputProps> = ({
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
  readOnly = false,
  onClick
}) => {
  return (
    <StyledWrapper $customBorder={customBorder} $customPadding={customPadding} showError={!!error || showError}>
      {inputLabel && <label className='input-label'>{inputLabel}</label>}
      <div onClick={onClick} className='input-container'>
        <input
          id={id}
          name={id}
          type={type}
          className='input-field'
          placeholder={inputPlaceholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          style={style}
          readOnly={readOnly}
        />
      </div>
      {error && <span className='error-text'>{error}</span>}
    </StyledWrapper>
  )
}

export default CustomDropDownInput
