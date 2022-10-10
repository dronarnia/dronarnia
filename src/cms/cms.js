import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import DonatePagePreview from './preview-templates/DonatePagePreview'
import FeaturePostPreview from './preview-templates/FeaturePostPreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('doante', DonatePagePreview)
CMS.registerPreviewTemplate('feature', FeaturePostPreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
