import React from 'react';
import './index.less';
import LiuYifei from '../assets/YiFei_Liu.png';

interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

const Title = ({ text, styles }: IProps) => {
  return (
    <div style={styles} styleName="title">
      {text}
    </div>
  );
};

export default Title;
