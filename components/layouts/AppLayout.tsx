import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        {/* <Link href="/">Main</Link> */}
        {/* <Link href="/profile">Profile</Link> */}
        {/* <Link href="/signup">SignUp</Link> */}
        <Link href="/">
          <a>Main</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/signup">
          <a>SignUp</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
