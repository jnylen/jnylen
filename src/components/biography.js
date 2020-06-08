import React from "react";
import PropTypes from "prop-types";

import tw, { styled } from "twin.macro";

const Content = styled.div`
  ${tw`flex flex-col min-h-screen bg-white border-t-4 shadow-2xl lg:w-1/2 border-purple-light lg:border-0`};
`;

const InnerContainer = styled.div`
  ${tw`flex items-center w-full px-4 py-10 my-auto md:px-12`};
`;

const InnerContent = styled.div`
  ${tw`my-auto text-lg font-light text-purple-dark md:text-xl`};
`;

const Notice = styled.div`
  ${tw`w-full py-4 font-black leading-loose text-center text-purple-dark bg-blue-light`}
`;

const Biography = ({ notice, children }) => {
  return (
    <Content>
      {notice !== undefined && <Notice>{notice}</Notice>}
      <InnerContainer>
        <InnerContent>{children}</InnerContent>
      </InnerContainer>
    </Content>
  );
};

Biography.propTypes = {
  notice: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Biography;
