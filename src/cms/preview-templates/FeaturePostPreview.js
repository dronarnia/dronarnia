import React from 'react'
import PropTypes from 'prop-types'
import { FeaturePostTemplate } from '../../templates/feature-post'

const FeaturePostPreview = ({ entry, widgetFor }) => {
  // const tags = entry.getIn(['data'])
  return (
    <FeaturePostTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
    />
  )
}

FeaturePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeaturePostPreview
