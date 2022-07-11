import React from 'react';
import './index.less';
import fileAction from '../../common/utils/file';
import { getAppPath } from '../../common/utils/appPath';
import ResumeAction from './ResumeAction/index';
import ResumeContent from './ResumeContent/index';
import ResumeToolbar from './ResumeToolbar/index';

const Resume = () => {
  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeAction />
      </div>
      <div styleName="content">
        <ResumeContent />
      </div>
      <div styleName="toolbar">
        <ResumeToolbar />
      </div>
    </div>
  );
};

export default Resume;
