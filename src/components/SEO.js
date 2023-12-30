import React from 'react';
import icon from '../../static/images/main/favicon.jpg';

const SEO = ({ title, description, image, url }) => {
     return (
     <>
         <title>{title+' - Berckson Johnsly JEAN-LOUIS'}></title>
         <meta name="description" content={description} />
         <meta name="image" content={image} />
         <link rel="shortcut icon" href={icon} />

         <link rel={"stylesheet" } href={"../assets/css/styles1.css"} />
         <script defer src="../assets/plugins/fontawesome/js/all.js"></script>

         {/* Open Graph */}
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={image} />
         <meta property="og:url" content={url} />
         <meta property="og:type" content={'website'} />
         <meta property="og:locale" content="en_US" />
         <meta property="og:site_name" content={'Berckson Johnsly JEAN-LOUIS'} />

         {/* Twitter Card */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:creator" content={'bercksonjohnsly'} />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         <meta name="twitter:image" content={image} />
         <meta property="twitter:domain" content="bercksonjohnslyjeanlouis.github.io" />
         <meta property="twitter:url" content={url} />

         {/* Other Meta Tags */}
         <meta name="author" content={'Berckson Johnsly JEAN-LOUIS'} />
         <link rel="canonical" href={url} />
     </>
     );
};

export default SEO;
