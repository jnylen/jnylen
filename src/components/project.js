import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Content = styled.a`
  ${tw`flex items-center justify-between px-6 py-4 mt-4 bg-white rounded-lg shadow-lg hover:text-purple-light hover:shadow-xl hover:cursor-pointer`};
`;

const InnerContent = styled.div`
  ${tw`flex items-center w-full lg:w-auto`}
`;

const Name = styled.h4`
  ${tw`font-bold`}
`;

const Language = styled.span`
  ${tw`hidden lg:block`}
`;

const LanguageTiny = styled.span`
  ${tw`float-right lg:hidden`}
`;

const Description = styled.p`
  ${tw`pt-1 lg:pt-0`}
`;

const TextContent = styled.div`
  ${tw`items-center flex-1`}
`;

const Logo = styled.div`
  ${tw`w-10 h-10 mr-4`}

  logo {
    height: 100%;
  }
`;

const Project = ({ name, logo, description, language, website }) => {
  console.log(logo);
  return (
    <Content href={website.url} target="_blank">
      <InnerContent>
        { logo.url && <Logo>
          <img src={logo.url} />
        </Logo>}
        <TextContent>
          <LanguageTiny>{language.text}</LanguageTiny>
          <Name>{name.text}</Name>
          <Description>{description.text}</Description>
        </TextContent>
      </InnerContent>
      <Language>{language.text}</Language>
    </Content>
  );
};

Project.propTypes = {
  name: PropTypes.object,
  logo: PropTypes.object,
  description: PropTypes.object,
  language: PropTypes.object,
  website: PropTypes.object,
};

export default Project;
