import React from "react";
import classnames from "classnames";
import { tuple } from "../../utils/type";
import Icon from "../icon";
import './style'

const ButtonTypes = tuple("default", "primary", "dashed", "danger", "link");
export type ButtonType = typeof ButtonTypes[number];

const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type SizeType = "small" | "middle" | "large";

export type Shape = "circle";

export interface BaseButtonProps {
  type?: ButtonType;
  size?: SizeType;
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  shape?: Shape;
}

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  // onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "type" /** | 'onClick' */
  >;

export type ButtonProps = Partial<NativeButtonProps>;

const buttonPrefixCls: string = "belial-btn";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    type = "default",
    children,
    size,
    htmlType,
    disabled,
    icon,
    loading,
    shape,
    ...restProps
  } = props;

  const classes: string = classnames(buttonPrefixCls, className, {
    [`${buttonPrefixCls}-${type}`]: type,
    [`${buttonPrefixCls}-${size}`]: size,
    [`${buttonPrefixCls}-ripple`]: !disabled,
    [`${buttonPrefixCls}-disabled`]: disabled || loading,
    [`${buttonPrefixCls}-loading`]: loading,
    [`${buttonPrefixCls}-${shape}`]: shape,
    [`${buttonPrefixCls}-between`]: (icon || loading) && children,
  });

  return (
    <button
      disabled={disabled}
      type={htmlType}
      className={classes}
      {...restProps}
    >
      {icon && <Icon name={icon} />}
      {loading && (
        <Icon
          name="loading"
          spin={true}
          fill="#1890ff"
          interval={1200}
          className={`${buttonPrefixCls}-loading`}
        />
      )}
      { children }
    </button>
  );
};

export default Button;
