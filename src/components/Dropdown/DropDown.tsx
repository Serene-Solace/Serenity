import React, { useState } from "react";
import { ArrowDropDown, SearchIcon } from "../../Icons/Icons";
import styled from "styled-components";

export interface CustomDropDownProps {
  error?: string | false | undefined | boolean;
  inputLabel?: string;
  value: string;
  options: Array<string>;
  disabled?: boolean;
  onOptionSelect?: (value: string) => void;
  onBlur?: () => void;
  customBorder?: string;
  customPadding?: string;
  style?: React.CSSProperties;
  showError?: boolean;
  id: string;
  isSearchInput?: boolean;
}

interface StyledWrapperProps {
  $customBorder?: string;
  $customPadding?: string;
  isDisabled?: boolean;
  showError?: boolean;
  open: boolean;
  isSelected: boolean;
  isSearchInput?: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: "RALEWAY";
  position: relative;
  width: 400px;

  .dropdown-label {
    font-size: 1rem;
    color: #283b41;
  }

  .dropdown-container {
    width: 100%;
    height: 36px;
    border: 1px solid rgba(40, 59, 65, 0.7);
    border-radius: 8px;
    position: relative;
    border: ${({ $customBorder }) =>
      $customBorder || "1px solid rgba(40, 59, 65, 0.7)"};
    cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
    background-color: ${({ isDisabled }) =>
      isDisabled ? "#283b411a" : "white"};
    display: flex;
    align-items: center;
  }

  .dropdown-header {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    outline: none;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 14px;
    line-height: 1rem;
    background-color: transparent;
    padding: ${({ $customPadding }) => $customPadding || "0 1rem"};
    display: flex;
    color: ${({ isSelected }) =>
      isSelected
        ? "black"
        : "rgba(40, 59, 65, 0.5)"}; /* Change text color based on selection */
  }
  .input-placeholder-container-search {
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
  }
  .dropdown-search {
    width: 100%;
    border: none;
    border-radius: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1rem;
    color: ${({ isSelected }) =>
      isSelected ? "black" : "rgba(40, 59, 65, 0.5)"};
    &:focus {
      outline: none;
    }
  }
  .input-placeholder-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 1px solid rgba(40, 59, 65, 0.7);
    border-radius: 8px;
    z-index: 10;
    margin-top: 0.2rem;
    padding: 0;
    list-style: none;
    max-height: 200px;
    overflow-y: auto;
    visibility: ${({ isDisabled }) => (isDisabled ? "hidden" : "visible")};
    display: ${({ open }) => (open ? "block" : "none")};
  }

  .dropdown-item {
    margin: 0.3rem;
    padding: 0.5rem 1rem;
    font-size: 14px;
    font-weight: 400;
    color: black;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
      background-color: #b7d0d5;
    }
  }

  .dropdown-error-text {
    font-size: 1rem;
    color: red;
    margin-top: 0.5rem;
  }
`;

const DropDown: React.FC<CustomDropDownProps> = ({
  error,
  inputLabel,
  value,
  options,
  disabled = false,
  onOptionSelect,
  customBorder,
  customPadding,
  style,
  showError,
  id,
  isSearchInput,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState<boolean>(!!value);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = isSearchInput
    ? options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const handleOptionClick = (option: string) => {
    if (onOptionSelect) {
      onOptionSelect(option);
    }
    setIsSelected(true);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <StyledWrapper
      $customBorder={customBorder}
      $customPadding={customPadding}
      showError={!!error || showError}
      isDisabled={disabled}
      open={isOpen}
      isSelected={isSelected}
      isSearchInput={isSearchInput}
    >
      {inputLabel && (
        <label className="dropdown-label" htmlFor={id}>
          {inputLabel}
        </label>
      )}
      <div
        onClick={toggleDropdown}
        className="dropdown-container"
        style={style}
      >
        {isSearchInput ? (
          <div className="input-placeholder-container-search">
            <SearchIcon
              color={isSelected ? "black" : "rgba(40, 59, 65, 0.5)"}
            />
            <input
              type="text"
              className="dropdown-search"
              placeholder={value || "Select a file"}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        ) : (
          <div className="input-placeholder-container">
            <div className="dropdown-header">{value || "Select an option"}</div>
            <ArrowDropDown />
          </div>
        )}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {error && <div className="dropdown-error-text">{error}</div>}
    </StyledWrapper>
  );
};

export default DropDown;
