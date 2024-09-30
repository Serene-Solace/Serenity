import React from "react";
import { CustomExpendibleStyledWrapper } from "./StyledWrapper";
import { Body } from "../Typography/Typography";
import { ArrowDropDown, ArrowDropDownRight } from "../../Icons/Icons";

export interface CustomExpendibleProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: (val: boolean) => void;
}

const Expendible: React.FC<CustomExpendibleProps> = ({
  title,
  children,
  open,
  handleOpen,
}) => {
  return (
    <CustomExpendibleStyledWrapper>
      {!open && (
        <div className="title" onClick={() => handleOpen(!open)}>
          <div className="titleToggleIcon">
            {open ? (
              <ArrowDropDown style={{ color: "#283b41" }} />
            ) : (
              <ArrowDropDownRight style={{ color: "#283b41" }} />
            )}
          </div>
          <div className="titleText">
            <Body fontWeight={600}>{title}</Body>
          </div>
        </div>
      )}
      {open && children}
    </CustomExpendibleStyledWrapper>
  );
};

export default Expendible;
