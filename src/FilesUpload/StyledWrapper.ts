import styled from 'styled-components'

interface StyledWrapperProps {
  flexDirection?: string
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding: 2rem;
  text-align: center;
  .upload-icon-container {
    gap: 0.5rem;
    .upload-icon {
      cursor: pointer;
    }
  }

  .details {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;

    .tagline {
      font-size: 1.05rem;
      font-weight: 700;
      color: #408a94;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .sub-heading {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 0.85rem;
      font-weight: 400;
      color: #283b41;
    }
    .error-message {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 0.85rem;
      font-weight: 400;
      color: #f66767;
    }
  }
`
