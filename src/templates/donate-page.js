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
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h1 className="title is-size-1">{title}</h1>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </section>
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

DonatePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DonatePage;

export const aboutPageQuery = graphql`
  query DonatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
