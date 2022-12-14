import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const DonatePageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="pt-6 pb-6">
        <div className="container content">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                <h1 className="title is-size-1 is-size-3-touch has-text-centered is-uppercase mb-6">{title}</h1>
                <PageContent className="content" content={content} />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

DonatePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DonatePage = ({ data }) => {
  const { markdownRemark: post } = data;
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <DonatePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

// DonatePage.propTypes = {
//   data: PropTypes.object.isRequired,
// };

DonatePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
};

export default DonatePage;

export const donatePageQuery = graphql`
  query DonatePageTemplat {
    markdownRemark(frontmatter: { templateKey: { eq: "donate-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
