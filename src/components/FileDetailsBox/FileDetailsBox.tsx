import React from "react";
import styled from "styled-components";
import { formatFileSize } from "../../formatters";
import { CancelIcon } from "../../Icons/Icons";
import { Body } from "../Typography/Typography";
// import NewFileIcon from '../../assets/images/newFileIcon.png'

export interface CustomFileDetailsBoxProps {
  name?: string;
  size?: number;
  onClick: () => void;
  isNew?: boolean;
}

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
`;

const FileDetailsBox: React.FC<CustomFileDetailsBoxProps> = ({
  name,
  size,
  onClick,
  isNew,
}) => {
  return (
    <StyledWrapper>
      <div className="file">
        <Body className="fileName">{name}</Body>
        {isNew && (
          <img src="../../assets/images/newFileIcon.png" alt="new file" />
        )}
        <div className="size-and-icon">
          {size && <Body className="size">{formatFileSize(size)}</Body>}
          <CancelIcon onClick={onClick} className="icon" />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default FileDetailsBox;
