import React, { useEffect, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Tables from "../Tables/Tables";
import "./SideBar.css";
import { Link, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children, link) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/dashboard"> Tables</Link>, "1", <PieChartOutlined />),
  getItem(<Link to="/courts">Courts</Link>, "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Hello", "9", <FileOutlined />),
];

export const SideBar = ({ component }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState([]);

  // console.log(items.key);\

  useEffect(() => {
    const selected = localStorage.getItem("selectedKey");
    if (selected) {
      setSelectedKey([selected]);
    }
  }, []);

  const handleSelectedKeys = (item) => {
    setSelectedKey([item.key]);
    localStorage.setItem("selectedKey", item.key);
  };

  console.log(selectedKey);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/authentication");
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          style={{
            marginTop: "65px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          theme="light"
          selectedKeys={selectedKey}
          onSelect={handleSelectedKeys}
          // defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            padding: "0px 10px",
            background: colorBgContainer,
          }}
        >
          <div>Hello Admin</div>
          <button
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "white",
            }}
            title="Log out"
            onClick={handleLogout}
          >
            <LogoutOutlined
              style={{ fontSize: "22px", cursor: "pointer" }}
              rotate={180}
              title="Log out"
            />
          </button>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {component}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Jewelry Store ©{new Date().getFullYear()} Created by Nguyen Ho
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SideBar;
