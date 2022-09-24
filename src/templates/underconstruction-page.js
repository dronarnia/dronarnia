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
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <PageContent className="content" content={content} />

          <Link className="button is-warning is-large" to="/donate">
            Підтримати
          </Link>
        </div>
      </div>
    </section>
  );
};

UnderconstructionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
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
        bgImage={post.frontmatter.bgImage}
      />
    </LayoutUnderconstruction>
  );
};

UnderconstructionPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UnderconstructionPage;

export const aboutPageQuery = graphql`
  query UnderconstructionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        bgImage
      }
    }
  }
`;
