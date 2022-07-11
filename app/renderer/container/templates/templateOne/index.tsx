/**
 * @description 模板1
 * @author ViktorVan
 */
import React from 'react';
import './index.less';
import Avatar from './components/Avatar/index';
import BaseInfo from './components/BaseInfo/index';
import Contact from './components/Contact/index';
import Job from './components/Job/index';
import Certificate from './components/Certificate/index';
import Synopsis from './components/Synopsis/index';
import Skill from './components/Skill/index';
import Post from './components/Post/index';
import Project from './components/Project/index';
import Work from './components/Work/index';

const TemplateOne = () => {
  return (
    <div styleName="a4-box">
      <div styleName="flex container" id="visPdf">
        {/* 左侧 */}
        <div styleName="left">
          <div styleName="avatar">
            <Avatar />
          </div>
          <div styleName="fillColor"></div>
          <div styleName="baseData">
            <BaseInfo />
            <Contact />
            <Job />
            <Certificate />
          </div>
        </div>
        {/* 内容 */}
        <div styleName="center">
          <Synopsis />
          <div styleName="listData">
            <Skill />
            <Post />
            <Project />
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
