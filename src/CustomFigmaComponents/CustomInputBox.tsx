import React from 'react'
import styled, { css } from 'styled-components'

interface InputProps {
  isDisabled?: boolean
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  showError?: boolean
  errormsg?: string
}

const StyledInput = styled.input<InputProps>`
  height: 36px;
  width: 350px;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  padding: 10px;
  padding-left: 27px;
  border: 1px solid #283b4133;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s;
  color: #283b41;

  /* Placeholder styling */
  &::placeholder {
    color: #283b414d;
  }

  /* Focus state */
  &:focus {
    border: 1px solid #283b4199;
  }

  /* Disabled state */
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: #283b411a;
      border: 1px solid #283b411a;
      color: #283b411a;
      cursor: not-allowed;
    `}
  ${({ showError }) =>
    showError &&
    css`
      border: 1px solid red;
    `}
`

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 12px;
  margin-top: 4px;
`
/* Functional Component */
const Input: React.FC<InputProps> = ({ isDisabled, placeholder, value, onChange, showError, errormsg = '' }) => {
  return (
    <div>
      <StyledInput
        type='text'
        disabled={isDisabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled}
        showError={showError}
      />
      {showError && errormsg && <ErrorMessage>{errormsg}</ErrorMessage>}
    </div>
  )
}

export default Input
