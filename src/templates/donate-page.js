import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutUnderconstruction from "../components/LayoutUnderconstruction";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const DonatePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <PageContent className="content" content={content} />
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

  return (
    <LayoutUnderconstruction>
      <DonatePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </LayoutUnderconstruction>
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
