import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import FeatureRoll from "../components/FeatureRoll";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const MainPageTemplate = ({
  image,
  heading,
  subheading,
  title,
  aboutImage,
  intro,
  content,
  contentComponent
}) => {
  const heroImage = getImage(image) || image;
  const fullImage = getImage(aboutImage) || aboutImage;
  const PageContent = contentComponent || Content;

  return (
    <div>

      <FullWidthImage img={heroImage} heading={heading} subheading={subheading} />

      <section className="section">
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-12 is-10-fullhd is-offset-1-fullhd">
                <FeatureRoll />
              </div>
            </div>
          </section>
        </div>
      </section>

      <FullWidthImage img={fullImage} imgPosition={"50% center"} />

      <section className="section">
        <div class="container">
          <section className="section">
            <div className="columns">
              <div className="column is-12 is-8-fullhd is-offset-2-fullhd">
                <h1 className="title is-size-1 is-size-3-touch has-text-centered mb-6">{title}</h1>
                <PageContent className="content is-size-5 is-size-6-touch" content={content} />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="section">
        <h1 className="title is-size-1 is-size-3-touch has-text-centered mb-6">{intro.heading}</h1>
        <Features gridItems={intro.blurbs} />
      </section>

    </div>
  );
};

MainPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  aboutImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string,
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const MainPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <MainPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        aboutImage={frontmatter.aboutImage}
        intro={frontmatter.intro}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

MainPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default MainPage;

export const mainPageQuery = graphql`
  query MainPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "main-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        aboutImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(height: 80, quality: 69, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
        }
      }
    }
  }
`;
