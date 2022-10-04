import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-2  has-text-centered">
        <div className="mb-5"><PreviewCompatibleImage imageInfo={item} /></div>
        <div className="mb-5 is-size-6 is-uppercase">{item.text}</div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
