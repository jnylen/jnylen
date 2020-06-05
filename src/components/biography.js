import React from "react";
import PropTypes from "prop-types";

import tw, { styled } from "twin.macro";

const Content = styled.div`
  ${tw`flex flex-col min-h-screen bg-white border-t-4 shadow-2xl lg:w-1/2 border-purple-light lg:border-0`};
`;

const InnerContainer = styled.div`
  ${tw`flex items-center w-full px-12 my-auto`};
`;

const InnerContent = styled.div`
  ${tw`my-auto text-lg font-light text-purple-dark lg:text-xl`};
`;

const Notice = styled.div`
  ${tw`w-full py-4 font-bold text-center text-purple-dark bg-blue-light`}
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
