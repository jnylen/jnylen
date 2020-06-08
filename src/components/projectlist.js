import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import Project from "./project.js";

const Content = styled.div`
  ${tw`pt-8 font-light`};
`;

const Header = styled.div`
  ${tw`pt-4 pb-8 text-xl text-center text-white`}
`;

const List = styled.div`
  ${tw`px-8 font-light text-purple-dark`}
`;

const Labels = {
  opensource_projects: "Opensource Projects",
};

const capitalize = function(string) {
  string = string.replace(/_/g, " ");

  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ProjectList = ({ title, items }) => {
  return (
    <Content>
      <Header>{Labels[title] || capitalize(title)}</Header>

      <List>
        {items.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </List>
    </Content>
  );
};

ProjectList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default ProjectList;
