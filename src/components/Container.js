import classNames from "classnames";
import React from "react";

/**
 *
 * Reusable Conatiner
 *
 * @example <Container>...</Container>
 * @property {boolean} container
 * @property {boolean} fluid
 * @property {boolean} verticalPadding
 * @returns {React.ReactNode}
 */

function Container(props) {
  const { container = true, fluid, verticalPadding } = props;
  const { children } = props;
  const containerClass = classNames({
    container: container,
    "container-fluid": fluid,
    "py-5": verticalPadding,
  });
  return <div className={containerClass}>{children}</div>;
}

export default Container;
