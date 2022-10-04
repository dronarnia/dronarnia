import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const FeaturePostTemplate = ({
  title,
  subtitle,
  description,
  featuredImage,
  tags,
  helmet,
  content,
  contentComponent,
}) => {
  const postImage = getImage(featuredImage) || featuredImage;
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-2">
            <Link className="button is-light" to="/main">
              <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" />
            </Link>
          </div>
          <div className="column is-8">
            <FullWidthImage img={postImage} imgPosition={"50% center"} />

            <h1 className="title is-size-1">{title}</h1>
            <h3 className="mb-6">{subtitle}</h3>
            <p>{description}</p>
            <PostContent content={content} />
            <section className="section">
              <div className="has-text-centered">
                <Link className="button is-warning is-large is-responsive" to="/donate">Підтримати</Link>
              </div>
            </section>

            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Теги</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

          </div>
        </div>
      </div>
    </section>
  );
};

FeaturePostTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  featuredImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
};

const FeaturePost = ({ data }) => {
  const { markdownRemark: post } = data;
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FeaturePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        featuredImage={post.frontmatter.featuredImage}
      />
    </Layout>
  );
};

FeaturePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      // frontmatter: PropTypes.object,
    }),
  }),
};

export default FeaturePost;

export const featurePostQuery = graphql`
  query FeaturePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        description
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
