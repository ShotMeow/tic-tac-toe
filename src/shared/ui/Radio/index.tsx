import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export const Radio: FC<PropsWithChildren<Props>> = ({
  isActive,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        {
          "bg-slate-300 text-slate-900": isActive,
          "bg-slate-900 text-slate-300": !isActive,
        },
        `w-full flex items-center justify-center p-2 rounded-md ${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
};
