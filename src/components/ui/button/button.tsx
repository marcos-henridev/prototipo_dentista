import type { ComponentPropsWithoutRef } from "react";

type ButtonProps =
  | (ComponentPropsWithoutRef<"button"> & { href?: never })
  | (ComponentPropsWithoutRef<"a"> & { href: string });

export default function Button(props: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkProps } = props;
    return <a href={href} {...linkProps} />;
  }

  const { type = "button", ...buttonProps } = props;
  return <button type={type} {...buttonProps} />;
}
