import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

import Biography from "../components/biography";
import Projects from "../components/projects";
import ProjectList from "../components/projectlist";
import tw, { styled } from "twin.macro";

const H1 = styled.div`
  ${tw`text-4xl font-bold`};
`;

const H4 = styled.div`
  ${tw`text-2xl font-light`};
`;

const Border = styled.div`
  ${tw`w-2/4 mt-6 border-t-2 border-purple-dark lg:w-1/4`}
`;

const Text = styled.div`
  p {
    ${tw`pt-8`}

    strong {
      ${tw`font-bold`}
    }

    a {
      ${tw`font-bold hover:text-purple-light`}
    }
  }
`;

const Index = ({ data: { allPrismicHomepage } }) => (
  <Layout>
    <SEO />
    <Biography>
      <H1>{allPrismicHomepage.nodes[0].data.header.text}</H1>
      <H4>{allPrismicHomepage.nodes[0].data.subheader.text}</H4>
      <Border />
      <Text
        dangerouslySetInnerHTML={{
          __html: allPrismicHomepage.nodes[0].data.text.html,
        }}
      />
    </Biography>

    <Projects>
      <ProjectList
        title="Projects"
        items={
          (console.log(allPrismicHomepage.edges[0].node.data),
          allPrismicHomepage.edges[0].node.data.body[0].items)
        }
      />
      <ProjectList
        title="Opensource Projects"
        items={allPrismicHomepage.edges[0].node.data.body[1].items}
      />
    </Projects>
  </Layout>
);

export default Index;
export const pageQuery = graphql`
  {
    allPrismicHomepage {
      nodes {
        data {
          notice {
            html
          }
          header {
            text
          }
          subheader {
            text
          }
          text {
            html
          }
        }
      }
      edges {
        node {
          id
          data {
            body {
              __typename
              ... on PrismicHomepageBodyProjects {
                id
                slice_type
                slice_label
                items {
                  description {
                    text
                  }
                  language {
                    text
                  }
                  logo {
                    url
                  }
                  name {
                    text
                  }
                  website {
                    url
                  }
                }
              }
              ... on PrismicHomepageBodyProjects1 {
                id
                items {
                  website {
                    url
                  }
                  name {
                    text
                  }
                  logo {
                    url
                  }
                  language {
                    text
                  }
                  description {
                    text
                  }
                }
                slice_label
                slice_type
              }
            }
          }
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query IndexQuery {
//     prismicHomepage {
//       data {
//         header {
//           text
//         }
//         subheader {
//           text
//         }
//         text {
//           html
//         }
//       }
//     }
//   }
// `;
