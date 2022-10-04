import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import LayoutUnderconstruction from "../components/LayoutUnderconstruction";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const UnderconstructionPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <PageContent className="content" content={content} />
          <Link className="button is-warning is-large is-responsive" to="/donate">Підтримати</Link>
        </div>
      </div>
    </section>
  );
};

UnderconstructionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const UnderconstructionPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <LayoutUnderconstruction>
      <UnderconstructionPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </LayoutUnderconstruction>
  );
};

UnderconstructionPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UnderconstructionPage;

export const underconstructionPageQuery = graphql`
  query UnderconstructionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
