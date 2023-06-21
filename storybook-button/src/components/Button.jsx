import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  corner,
  icon,
  size,
  color,
  disabled,
  onClick,
  label,
  ...props
}) => {
  return (
    <DefaultButton
      $primary={primary}
      $corner={corner}
      $icon={icon}
      $size={size}
      $color={color}
      onClick={onClick}
      disabled={disabled}
      type="button"
      {...props}
    >
      {label}
    </DefaultButton>
  );
};

const getType = (color, primary) => {
  // hover 색상 변경할 것
  if (primary) {
    return css`
      background: ${color};
      color: white;
      border: 1px solid transparent;

      &:hover:enabled {
        background: #3066cd;
      }
      &:focus-visible {
        outline: 3px solid #414dc4;
      }
    `;
  }
  if (!primary) {
    return css`
      background: transparent;
      border: 1px solid ${color};
      color: ${color};

      &:hover:enabled {
        border-color: #3066cd;
      }
      &:focus-visible {
        outline: 3px solid #414dc4;
      }
    `;
  }
};

const getSize = (size) => {
  // padding 으로 변경할 것
  if (size === "small") {
    return css`
      min-width: 100px;
      padding: 8px 12px;
      font-size: 0.8rem;
      line-height: 0.7rem;
    `;
  }
  if (size === "medium") {
    return css`
      min-width: 150px;
      padding: 15px 40px;
      font-size: 1rem;
      line-height: 0.9rem;
    `;
  }
  if (size === "large") {
    return css`
      min-width: 300px;
      padding: 20px 80px;
      font-size: 1.1rem;
      line-height: 1rem;
    `;
  }
  if (size === "full") {
    return css`
      min-width: 100%;
      padding: 20px 80px;
      font-size: 1.1rem;
      line-height: 1rem;
    `;
  }
};

const getCorner = (corner) => {
  const value = {
    none: "0px",
    small: "3px",
    large: "8px",
    circle: "50%",
    pill: "999px",
  };
  return css`
    border-radius: ${value[corner]};
  `;
};

// const getIconSize = (label, icon) => {
//   const isLabel = !label | (label === "");
//   const isIcon = icon | (icon !== "");
//   if (isLabel && isIcon) {
//     return css`
//       aspect-ratio: 1 / 1;
//       border-radius: 50%;
//     `;
//   }
// };

const DefaultButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;
  gap: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: 0;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  ${(props) => getType(props.$color, props.$primary)}
  ${(props) => getSize(props.$size)}
  ${(props) => getCorner(props.$corner)}

  &:after {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    left: calc(50% - 150px / 2 - 0px);
    top: calc(50% - 150px / 2 - 0.5px);
    background: rgba(255, 255, 255, 0.8);
    opacity: 0;
    border-radius: 50%;
    z-index: 1;
    transform-origin: center;
    transition: all 0.8s ease;
    transform: scale(1);
  }

  &:active:enabled:after {
    opacity: 0.6;
    transition: 0s;
    transform: scale(0);
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
  label: PropTypes.string,
  /**
   * Button background or text color
   */
  color: PropTypes.string.isRequired,
  /**
   * Fill the background color or Create an outline
   */
  primary: PropTypes.bool,
  /**
   * Button width and height size
   */
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),
  /**
   * Button corner roundness
   */
  corner: PropTypes.oneOf(["none", "small", "large", "circle", "pill"]),
  /**
   * Google Material Design Icons
   */
  icon: PropTypes.string,
  /**
   * Button disabled attribute
   */
  disabled: PropTypes.oneOf([true, false]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "Button",
  primary: true,
  size: "medium",
  corner: "none",
  icon: "",
  disabled: false,
  onClick: undefined,
};
