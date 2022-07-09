import React, { useEffect } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import Logo from '@assets/YiFei_Liu.png';
import { shell } from 'electron';
import { ROUTER_ENTRY } from '../../common/constants/router';
import { isHttpOrHttpsUrl } from '../../common/utils/router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Root = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const appName = useSelector((state: any) => state.globalModel.appName);

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('3s后修改...');
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'appName',
          values: 'vizResume',
        },
      });
    }, 3000);
  }, []);

  useEffect(() => {
    console.log('appName = ', appName);
  }, [appName]);

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
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
