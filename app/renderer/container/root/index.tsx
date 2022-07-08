import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import Logo from '../../../assets/YiFei_Liu.png';
import { shell } from 'electron';

const Root = () => {
  const history = useHistory();
  const onRouterToLink = (text: string) => {
    if (text !== '简历') {
      shell.openExternal('https://github.com/ViktorVan22/viz-resume');
    } else {
      history.push('/resume');
    }
  };

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {['介绍', '简历', '源码'].map((text, index) => {
            return (
              <div key={index} styleName="item" onClick={() => onRouterToLink(text)}>
                {text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
