import React from 'react';
 
const EXTERNAL_DATA_URL = 'https://cms.dankennedy.me/items/blog';
const ROOT_URL = 'https://www.dankennedy.me' 
const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${`${ROOT_URL}`}</loc>
    </url>
    <url>
      <loc>${`${ROOT_URL}/about`}</loc>
    </url>
    <url>
      <loc>${`${ROOT_URL}/gallery`}</loc>
    </url>
        ${posts.data.map(({ slug }) => {
            return `
                <url>
                    <loc>${`${ROOT_URL}/blog/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
    `;
 
    class Sitemap extends React.Component {
        static async getInitialProps({ res }) {
          const request = await fetch(EXTERNAL_DATA_URL);
          const posts = await request.json();
          res.setHeader('Content-Type', 'text/xml');
          res.write(createSitemap(posts));
          res.end();
        }
      }
       
      export default Sitemap;
