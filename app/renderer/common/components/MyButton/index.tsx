import classnames from 'classnames';
import React from 'react';
import { FC } from 'react';
import './index.less';

export interface ButtonProps {
  size?: 'middle' | 'big' | 'small';
  width?: number;
  style?: React.CSSProperties;
  /**
   * @description 子组件
   */
  children?: React.ReactNode | any;
  /**
   * @description 禁止
   */
  disabled?: boolean;
  /**
   * @description 样式名
   */
  className?: string;
  onClick?: Function;
  /**
   * @description 是否显示边框
   */
  border?: boolean;
}

const MyButton = ({
  size = 'small',
  style,
  width,
  children,
  disabled,
  className,
  onClick,
  border = true,
}: ButtonProps) => {
  return (
    <div
      style={{
        ...style,
        width: width,
      }}
      className={className}
      styleName={classnames('es-button', {
        [`es-button-${size}`]: true,
        'es-button-disabled': disabled,
        'es-button-border': border,
      })}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </div>
  );
};

export default MyButton;
