import styled, { css } from "styled-components";
import { mediaQueries } from "../../mediaQueries";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "secondary2" | "danger";
  size?: "default" | "large";
  onClick?: () => void;
  isDisabled?: boolean;
  children: React.ReactNode;
}

const Button = styled.button<ButtonProps>`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  height: 36px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  transition: transform 0.2s;
  margin: 0;
  color: #ffffff;
  padding-left: 24px;
  padding-right: 24px;
  border: none;
  border-radius: 20px;
  width: auto;
  min-width: 8.75rem;

  /* Large size styles with responsive width */
  ${({ size }) =>
    size === "large" &&
    css`
      width: 25rem;
      border-radius: 8px;

      ${mediaQueries.tablet} {
        width: 21.875rem;
      }

      ${mediaQueries.mobile} {
        width: 18.75rem;
      }
    `}

  /* Primary variant styles */
  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: #283b41;
    `}

  /* Secondary variant styles */
  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: #ffffff;
      border: 1px solid #283b41;
      color: #283b41;
    `}

  /* Secondary2 variant styles */
  ${({ variant }) =>
    variant === "secondary2" &&
    css`
      background-color: #1c7384;
    `}

  /* danger variant styles */
  ${({ variant }) =>
    variant === "danger" &&
    css`
      background-color: #f66767;
    `}

  /* Hover effect */
  &:hover {
    ${({ size, isDisabled }) =>
      !isDisabled &&
      css`
        transform: scale(1.05);
        box-shadow: 0px 4px 4px 0px #283b4140;

        ${mediaQueries.tablet} {
          width: ${size === "large" ? "22rem" : "8.875rem"};
        }

        ${mediaQueries.mobile} {
          width: ${size === "large" ? "18.875rem" : "8.875rem"};
        }
      `}

    ${({ isDisabled }) =>
      isDisabled &&
      css`
        height: 36px;
        box-shadow: none;
      `}
  }

  /* Disabled state styles */
  ${({ isDisabled, variant }) =>
    isDisabled &&
    css`
      background-color: ${variant === "danger"
        ? "rgba(246, 103, 103, 0.30)"
        : "#283b414d"};
      cursor: not-allowed;
      color: #ffffff;
    `}
`;

export default Button;
