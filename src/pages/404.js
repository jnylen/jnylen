import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import tw, { styled } from "twin.macro";

const Content = styled.div`
  ${tw`p-8 mx-auto my-auto text-center bg-white rounded-lg shadow-2xl`}
`;

const H1 = styled.h1`
  ${tw`pb-4 text-4xl font-black text-purple-dark`}
`;

const P = styled.p`
  ${tw`pb-8 text-lg text-purple-dark`}
`;

const ColorizedLink = styled(Link)`
  ${tw`text-base font-bold text-purple-dark`}
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Content>
      <H1>NOT FOUND</H1>
      <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
      <ColorizedLink to="/"> &lsaquo; Go back to homepage</ColorizedLink>
    </Content>
  </Layout>
);

export default NotFoundPage;
