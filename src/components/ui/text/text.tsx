import type { ComponentPropsWithoutRef } from "react";

type TextProps = ComponentPropsWithoutRef<"h1">;

export default function Text(props: TextProps) {
  return <h1 {...props} />;
}
