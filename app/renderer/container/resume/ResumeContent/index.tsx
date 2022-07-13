import React, { useEffect, useState } from 'react';
import './index.less';
import MyScrollBox from '@common/components/MyScrollBox/index';
import * as UseTemplateList from './UseTemplate';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '../../../common/messager/index';
import { RESUME_TOOLBAR_MAPS } from '@src/common/constants/resume';
import Personal from './UseForm/Personal';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    // 挂载事件订阅
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      // 关闭时卸除事件订阅
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);

  // 接受订阅事件的传参
  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };

  const onClose = () => {
    setShowFormModal(false);
    setFormName('');
  };

  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
      {showFormModal && <> {formName === RESUME_TOOLBAR_MAPS.personal && <Personal onClose={onClose} />}</>}
    </MyScrollBox>
  );
}
export default ResumeContent;
