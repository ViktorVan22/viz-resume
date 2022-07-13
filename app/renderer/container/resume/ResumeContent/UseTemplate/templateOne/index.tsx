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
import { useSelector } from 'react-redux';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';
import useState from 'react';

const TemplateOne = () => {
  // 获取简历信息数据
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  // 获取工具条模块keys
  const resumeToolbarKeys: string[] = useSelector((state: any) => state.templateModel.resumeToolbarKeys);

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
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate />}
          </div>
        </div>
        {/* 内容 */}
        <div styleName="center">
          {(resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.evaluation) || base?.username) && <Synopsis />}
          <div styleName="listData">
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
