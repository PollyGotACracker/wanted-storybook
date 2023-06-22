import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

/**
 * Button component
 */
export const Button = ({
  children,
  primary,
  backgroundColor,
  textColor,
  size,
  corner,
  shadow,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <DefaultButton
      $primary={primary}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $size={size}
      $corner={corner}
      $shadow={shadow}
      onClick={onClick}
      disabled={disabled}
      type="button"
      {...props}
    >
      {children}
    </DefaultButton>
  );
};

const getType = (backgroundColor, textColor, primary) => {
  if (primary) {
    return css`
      background: ${backgroundColor};
      color: ${textColor};
      border: 1px solid transparent;
      &:after {
        background: rgba(255, 255, 255, 0.8);
      }
    `;
  }
  if (!primary) {
    return css`
      background: transparent;
      border: 1px solid ${backgroundColor};
      color: ${backgroundColor};
      &:after {
        background: ${backgroundColor};
      }
    `;
  }
};

const getSize = (size) => {
  const value = {
    small: {
      minWidth: "100px",
      padding: "8px 12px",
      fontSize: "0.8rem",
    },
    medium: {
      minWidth: "150px",
      padding: "15px 40px",
      fontSize: "1rem",
    },
    large: {
      minWidth: "300px",
      padding: "20px 80px",
      fontSize: "1.1rem",
    },
    full: {
      minWidth: "100%",
      padding: "20px 80px",
      fontSize: "1.4rem",
    },
  };

  return css`
    min-width: ${value[size].minWidth};
    padding: ${value[size].padding};
    font-size: ${value[size].fontSize};
    line-height: ${value[size].fontSize};
    & * {
      font-size: ${value[size].fontSize} !important;
    }
  `;
};

const getCorner = (corner) => {
  const value = {
    none: "0px",
    small: "3px",
    medium: "8px",
    large: "15px",
    pill: "999px",
  };
  return css`
    border-radius: ${value[corner]};
  `;
};

const DefaultButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;
  gap: 5px;
  outline: 0;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  transition: all 0.2s ease;
  ${(props) =>
    props.$shadow &&
    css`
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    `}
  ${(props) =>
    getType(props.$backgroundColor, props.$textColor, props.$primary)}
  ${(props) => getSize(props.$size)}
  ${(props) => getCorner(props.$corner)}

  &:enabled:after {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    left: calc(50% - 150px / 2 - 0px);
    top: calc(50% - 150px / 2 - 0.5px);
    opacity: 0;
    border-radius: 50%;
    z-index: 1;
    transform-origin: center;
    transition: all 0.8s ease;
    transform: scale(1);
  }
  &:enabled:active:after {
    opacity: 0.6;
    transition: 0s;
    transform: scale(0);
  }
  &:enabled:hover {
    filter: hue-rotate(90deg);
  }
  &:enabled:focus-visible {
    outline: 2px solid black;
  }
  &:disabled {
    filter: grayscale(80%);
    opacity: 0.5;
    cursor: auto;
  }
`;

Button.propTypes = {
  /**
   * Button contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Button background color
   */
  backgroundColor: PropTypes.string.isRequired,
  /**
   * Button text color(for primary button)
   */
  textColor: PropTypes.string,
  /**
   * Fill the background color or create an outline
   */
  primary: PropTypes.bool,
  /**
   * Button width and height size
   */
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),
  /**
   * Button corner roundness
   */
  corner: PropTypes.oneOf(["none", "small", "medium", "large", "pill"]),
  /**
   * Make a shadow under the button
   */
  shadow: PropTypes.bool,
  /**
   * Value of button disabled attribute
   */
  disabled: PropTypes.oneOf([true, false]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  textColor: "#FFFFFF",
  size: "medium",
  corner: "none",
  shadow: false,
  disabled: false,
  onClick: undefined,
};
