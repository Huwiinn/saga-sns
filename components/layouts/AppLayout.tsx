import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Menu } from "antd";
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
          <Input.Search />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>SignUp</a>
          </Link>
        </Menu.Item>
      </Menu>

      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
