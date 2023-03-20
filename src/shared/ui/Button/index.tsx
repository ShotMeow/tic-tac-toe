import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  cell?: boolean;
  yellow?: boolean;
  cyan?: boolean;
  secondary?: boolean;
  big?: boolean;
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  cell,
  big,
  yellow,
  cyan,
  secondary,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={classNames(
        {
          "bg-slate-700 border-slate-800 text-slate-400": cell,
          "border-b-8 rounded-2xl": big,
          "bg-yellow-500 border-yellow-600 text-slate-800": yellow,
          "bg-cyan-600 border-cyan-700 text-slate-800": cyan,
          "bg-slate-300 border-slate-400 text-slate-800": secondary,
          "border-b-0": disabled,
        },
        `flex items-center justify-center rounded-lg border-b-4 font-bold uppercase gap-2 [&:not(&:disabled)]:active:border-b-0 shadow-2xl ${className}`
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
