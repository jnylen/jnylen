import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Content = styled.div`
  ${tw`w-full pb-8 lg:w-1/2`};
`;

const Projects = ({ children }) => {
  return <Content>{children}</Content>;
};

Projects.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Projects;
