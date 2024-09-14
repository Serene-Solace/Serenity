import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

export const StyledToastContainer = styled(ToastContainer)`
  font-family: Raleway;
  &&&.Toastify__toast-container {
    font-family: Raleway;
    width: 30rem;
    padding: 0;
    margin: 0 30px 60px 0;
  }
  .Toastify__toast {
    font-family: Raleway;
    display: flex;
    align-items: center;
    padding: 14px 15px;
    margin: 0;
    border-radius: 0;
    min-height: 0px;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  }
  .Toastify__toast-body {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
    padding-left: 0.75rem;
  }
  .Toastify__toast-body > div:last-child {
    margin: 0;
    font-size: 14px;
    color: #000000;
  }
  .Toastify__toast-icon {
    margin-right: 0.2rem;
  }
  .Toastify__toast-icon > span {
    width: 100%;
    height: 100%;
  }
  .Toastify__progress-bar {
    top: 0;
    left: 0;
    bottom: unset;
  }
`
