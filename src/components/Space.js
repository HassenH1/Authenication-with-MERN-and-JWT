import classNames from "classnames";
import React from "react";

/**
 *
 * Space component
 *
 * @example <Space md />
 * @prop {boolean} sm
 * @prop {boolean} md
 * @prop {boolean} l
 * @prop {boolean} xl
 * @prop {boolean} xxl
 * @returns
 */

function Space(props) {
  const { sm, md, l, xl, xxl } = props;
  const style = classNames({
    "mt-1": sm,
    "mt-2": md,
    "mt-3": l,
    "mt-4": xl,
    "mt-5": xxl,
  });
  return <div className={style} />;
}

export default Space;
