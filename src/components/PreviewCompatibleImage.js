import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import defaultLogo from "../img/dronarnia/dronarnia_logo_grey.svg";

const PreviewCompatibleImage = ({ imageInfo, imageUrl }) => {
  const imageStyle = { borderRadius: "5px", width: "100%", height: "auto" };
  const defaultImage = defaultLogo;

  // Якщо є зовнішній URL
  if (imageUrl) {
    return <img style={imageStyle} src={imageUrl} alt="" />;
  }

  // Якщо imageInfo не передано або null
  if (!imageInfo) {
    return <img style={imageStyle} src={defaultImage} alt="" />;
  }

  const {
    alt = "",
    childImageSharp,
    image,
  } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    );
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    );
    // for Netlify CMS
  } else if (image) {
    return <img style={imageStyle} src={image} alt={alt} />;
  } else {
    // Дефолтна картинка якщо нічого не знайдено
    return <img style={imageStyle} src={defaultImage} alt="" />;
  }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }),
  imageUrl: PropTypes.string,
};

export default PreviewCompatibleImage;
