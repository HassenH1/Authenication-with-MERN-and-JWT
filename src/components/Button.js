import React from "react";
import classNames from "classnames";

/**
 * Reusable Button
 *
 * @example <Button danger>Click me</Button>
 * @property {string} type
 * @property {Function} onClick
 * @property {boolean} primary
 * @property {boolean} danger
 * @property {boolean} large
 * @property {boolean} small
 * @property {boolean} medium
 * @property {boolean} fullWidth
 * @returns {React.ReactNode}
 */

function Button(props) {
  const {
    onClick,
    primary = true,
    danger = false,
    large = true,
    small,
    medium,
    fullWidth,
    type = "button",
  } = props;
  const { children } = props;
  const btnClass = classNames({
    "btn-primary": primary,
    "btn-danger": danger,
    "btn-lg": large,
    "btn-sm": small,
    "btn-md": medium,
    "w-100": fullWidth,
    btn: true,
  });
  return (
    <button onClick={onClick} type={type} className={btnClass}>
      {children}
    </button>
  );
}

export default Button;
