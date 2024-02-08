import { CSSProperties, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface AnimatedLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  children,
  href,
  className,
  ...linkProps
}) => {
  return (
    <Link href={href} className={`menu__link ${className} `} {...linkProps}>
      {children}
    </Link>
  );
};

export default AnimatedLink;
