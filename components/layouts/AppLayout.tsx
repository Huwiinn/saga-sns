import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import styled from "styled-components";

const AppLayout = ({ children }: any) => {
  // const items = [
  //   { label: "item 1", key: "item-1" }, // remember to pass the key prop
  //   { label: "item 2", key: "item-2" }, // which is required
  //   {
  //     label: "sub menu",
  //     key: "submenu",
  //     children: [{ label: "item 3", key: "submenu-item-1" }],
  //   },
  // ];

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Main</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>SignUp</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* 24 === 100% 기준임. 24를 넘어가게 되면 레이아웃이 아래로 무너지고, 아니라면 그대로 유지된다. */}
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://velog.io/@hui0725/posts"
            target="_blank"
            rel="noreferrer noopener">
            흰의 기술 블로그
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
