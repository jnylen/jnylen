import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Content = styled.div`
  ${tw`flex flex-col min-h-screen lg:flex-row`};
`;

const Layout = ({ children }) => {
  return <Content>{children}</Content>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
