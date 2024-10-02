import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import styled from "styled-components";

const CustomToolTip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#283B41",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    padding: "2px 10px",
    borderRadius: "4px",
    background: "#283B41",
    color: "#FFF",
    fontFamily: "Raleway",
    fontSize: "13px",
    fontWeight: 400,
    zIndex: 999999999,
  },
}));

export default CustomToolTip;
