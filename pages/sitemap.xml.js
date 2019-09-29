import { Component } from "react";
// import sanity from "../lib/sanity";

// import { links } from "../components/Navigation";

const links = [{ id: "/en" }];

export default class Sitemap extends Component {
  static async getInitialProps(props) {
    console.log(props);
    let res = props.res;
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    const SITE_ROOT = "https://acueducto.studio";

    const routes = [
      {
        url: "",
        changefreq: "daily",
        priority: 1
      }
    ];

    links.map(({ id }) =>
      routes.push({
        url: `${id}`,
        changefreq: "daily",
        priority: 1
      })
    );

    // const Posts = getPosts()

    // for (let i = 0; i < Posts.length; i += 1) {
    //   const item = Posts[i];
    //   routes.push({
    //     url: `posts/${item.slug.current}`,
    //     changefreq: "daily",
    //     priority: 1,
    //   });
    // }

    routes.map(({ url, changefreq, priority }) => {
      xml += "<url>";
      xml += `<loc>${SITE_ROOT}/${url}</loc>`;
      xml += `<changefreq>${changefreq}</changefreq>`;
      xml += `<priority>${priority}</priority>`;
      xml += "</url>";
    });

    xml += "</urlset>";

    res.setHeader("Content-Type", "text/xml");
    res.write(xml);
    res.end();
  }
}
