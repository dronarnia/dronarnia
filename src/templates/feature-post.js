import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
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
  description,
  featuredImage,
  helmet,
  content,
  contentComponent,
}) => {
  // Визначаємо тип зображення:
  // 1. Якщо це рядок (string) - це зовнішній URL
  // 2. Якщо це об'єкт з childImageSharp - це локальне зображення для gatsby-plugin-image
  // 3. Якщо це об'єкт з publicURL - це локальний файл без обробки
  let postImage;

  if (typeof featuredImage === 'string') {
    // Зовнішній URL
    postImage = featuredImage;
  } else if (featuredImage?.childImageSharp) {
    // Локальне зображення для gatsby-plugin-image
    postImage = getImage(featuredImage);
  } else if (featuredImage?.publicURL) {
    // Локальний файл (publicURL)
    postImage = featuredImage.publicURL;
  } else {
    // Fallback
    postImage = featuredImage;
  }

  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-2">
            <Link className="button is-light" to="/">
              <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" />
              {/* <span>Back</span> */}
            </Link>
          </div>
          <div className="column is-8">
            <FullWidthImage img={postImage} imgPosition={"50% center"} />

            <h1 className="title is-size-1 is-size-3-touch has-text-centered is-uppercase mb-6">{title}</h1>
            <h3 className="mb-6">{description}</h3>
            <PostContent content={content} />

            <section className="section">
              <div className="has-text-centered">
                <Link className="button is-warning is-large is-responsive" to="/donate">Підтримати</Link>
                <span style={{ margin: '0 10px' }}></span>
                <a className="button is-large is-responsive is-info" href="https://airtable.com/shrjr9gavatDWRilm" target="_blank" rel="noopener noreferrer" >Подати заявку</a>
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
};

FeaturePostTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  featuredImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helmet: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const FeaturePost = ({ data }) => {
  const { markdownRemark: post } = data;

  // Використовуємо featuredImageUrl якщо є, інакше featuredImage
  const featuredImage = post.frontmatter.featuredImageUrl || post.frontmatter.featuredImage;

  return (
    <Layout>
      <FeaturePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        featuredImage={featuredImage}
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
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
          publicURL
        }
        featuredImageUrl
      }
    }
  }
`;
