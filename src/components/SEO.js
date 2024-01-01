import React from 'react';

const SEO = ({ title, description, url }) => {
     return (
     <>
         <title>{title+' - Berckson Johnsly JEAN-LOUIS'}</title>
         <meta name="description" content={description} />
         <meta name="image" content={'../../images/main/berckson.jpg'} />
         <link rel="shortcut icon" href={'../../images/main/favicon.jpg'} />

         <link rel={"stylesheet" } href={"../assets/css/styles1.css"} />
         <script defer src="../assets/plugins/fontawesome/js/all.js"></script>

         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={'../../images/main/berckson.jpg'} />
         <meta property="og:url" content={url} />
         <meta property="og:type" content={'website'} />
         <meta property="og:locale" content="en_US" />
         <meta property="og:site_name" content={'Berckson Johnsly JEAN-LOUIS'} />

         {/* Twitter Card */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:creator" content={'bercksonjohnsly'} />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         <meta name="twitter:image" content={'../../images/main/berckson.jpg'} />
         <meta property="twitter:domain" content="bercksonjohnslyjeanlouis.github.io" />
         <meta property="twitter:url" content={url} />


         {/* Other Meta Tags */}
         <meta name="author" content={'Berckson Johnsly JEAN-LOUIS'} />
         <link rel="canonical" href={url} />

         <script type='text/javascript'
                 src='https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>
         </script>
     </>
     );
};

export default SEO;
