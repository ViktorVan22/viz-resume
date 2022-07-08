import React from "react";
import { FC } from "react";

interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles: React.CSSProperties;
}

const Title: FC<IProps> = ({ text, styles }) => {
  return <div style={styles}>{text}</div>;
};

export default Title;
