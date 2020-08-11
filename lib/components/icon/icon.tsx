import * as React from "react";
import classnames from "classnames";
import "../../utils/importIcons";
import "./style";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  spin?: boolean;
  interval?: number;
}

const iconPrefixCls: string = "belial-icon";

const Icon: React.FC<IconProps> = (props) => {
  const { name, spin, interval, className, ...restProps } = props;

  const classes = classnames(iconPrefixCls, className, {
    [`${iconPrefixCls}-spin`]: spin || Boolean(interval),
  });

  return (
    <svg
      className={classes}
      style={{
        animationDuration: `${spin ? interval || 1800 : interval}ms`,
      }}
      {...restProps}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
