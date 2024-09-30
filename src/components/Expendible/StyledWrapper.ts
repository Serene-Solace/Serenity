import styled from "styled-components";

export const CustomExpendibleStyledWrapper = styled.div`
  width: 100%;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    .titleText {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #283b41;
    }
    svg {
      cursor: pointer;
    }
  }

  .child-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3rem;

    .child {
      width: 85%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      .child-title {
        color: #283b41;
        color: #283b41;
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .child-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
`;
