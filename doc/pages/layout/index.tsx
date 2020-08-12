import Layout from "../../../lib/components/layout/index";
import React from "react";
import "./layoutDoc.scss";

const { Header, Content, Footer, Aside } = Layout;

export default function () {
  return (
    <div>
      <div className="demo1">
        <Layout className="layout">
          <Aside className="aside">Aside</Aside>
          <Layout>
            <Header className="header">Header</Header>
            <Content className="content">Content</Content>
            <Footer className="footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>

      <div className="demo1">
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </div>
  );
}
