import styled from 'styled-components'

export const StyledWrapper = styled.div`
  min-width: 50%;
  .file {
    height: 39.62px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 4.3px 0px 0px 0px;
    opacity: 0px;
    border: 0.54px solid #e3e3e3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .fileName {
      font-family: Mulish;
      width: 70%;
      font-size: 1rem;
      font-weight: 400;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .size-and-icon {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-family: Mulish;
      font-size: 1rem;
      font-weight: 100;
      text-align: center;
    }
  }
`
