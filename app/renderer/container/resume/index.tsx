import React from 'react';
import './index.less';
import fileAction from '../../common/utils/file';
import { getAppPath } from '../../common/utils/appPath';
import MyButton from '../../common/components/MyButton/index';
import MyInput from '../../common/components/MyInput/index';
import MyModal, { Confirm } from '../../common/components/MyModal/index';

const Resume = () => {
  getAppPath().then((rootPath: string) => {
    console.log('应用程序的目录路径为: ', rootPath);
    console.log('文件读取，内容数据为: ');
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });

  return (
    <div>
      <MyButton size="middle" onClick={() => console.log('点击按钮')}>
        导出PDF
      </MyButton>
      <hr />
      <MyInput
        value={'username'}
        placeholder="请输入姓名"
        allowClear={true}
        onChange={(e) => console.log(e.target.value)}
      />
      {/* 多行输入框 */}
      <MyInput
        value={'hobby'}
        placeholder="你有什么爱好？"
        allowClear={true}
        onChange={(e) => console.log(e.target.value)}
        type="textarea"
        rows={5}
        maxLength={200}
        allowCount={true}
      />
      {/* <MyModal.Confirm
        title="确定要打印简历吗？"
        description="请确保信息的正确，目前仅支持单页打印哦~"
        config={{
          cancelBtn: {
            isShow: true,
            callback: () => {},
          },
          submitBtn: {
            isShow: true,
            callback: () => {
              console.log('submitted');
            },
          },
        }}
      /> */}
    </div>
  );
};

export default Resume;
