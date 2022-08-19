import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-3">

        <div className="has-text-centered">
          <div
            style={{
              width: "100%",
              display: "inline-block",
              marginBottom: ".75rem",
            }}
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <p class="title is-6">{item.text}</p>
        </div>
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
