import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  cell?: boolean;
  primary?: boolean;
  secondary?: boolean;
  big?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  cell,
  big,
  primary,
  secondary,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        {
          "bg-slate-700 border-slate-800 text-slate-400": cell,
          "border-b-8 rounded-2xl": big,
          "bg-yellow-600 border-yellow-700 text-slate-800": primary,
          "bg-slate-400 border-slate-500 text-slate-800": secondary,
        },
        `flex items-center justify-center rounded-lg border-b-4 font-semibold uppercase gap-2 active:border-b-0 shadow-2xl ${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
};
