import React from "react";
import Icon from "../../../lib/components/icon/index";
import CodeShow from "../../components/CodeCard";
import "./index.scss";

const IconDoc: React.FC = () => {
  return (
    <div className="example-icon">
      <CodeShow
        title="基本用法"
        code={`
          <Icon name="wechat"/>
          <Icon name="github"/>
          <Icon name="alipay"/>
          <Icon name="qq"/>
        `}
      >
        <Icon name="wechat" />
        <Icon name="github" />
        <Icon name="alipay" />
        <Icon name="qq" />
      </CodeShow>
      <CodeShow
        title="旋转"
        code={`
          <Icon name="wechat" spin/>
          <Icon name="github" spin/>
          <Icon name="alipay" spin/>
          <Icon name="qq" spin interval={9999}/>
        `}
        style={{marginTop: '20px'}}
      >
        <Icon name="wechat" spin/>
        <Icon name="github" spin/>
        <Icon name="alipay" spin/>
        <Icon name="qq" spin interval={9999}/>
      </CodeShow>
    </div>
  );
};

export default IconDoc;
