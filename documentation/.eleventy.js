const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const svgContents = require("eleventy-plugin-svg-contents");
const mdIterator = require('markdown-it-for-inline')
const embedEverything = require("eleventy-plugin-embed-everything");
const pluginTOC = require('eleventy-plugin-nesting-toc');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function(eleventyConfig) {
  // eleventyConfig.addPlugin(pluginTOC);
  eleventyConfig.addPlugin(svgContents); 
  eleventyConfig.addPlugin(embedEverything);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  // Responsive image shortcode
  eleventyConfig.addLiquidShortcode("image", async function(src, alt, sizes = "100vw") {
    if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }
    src = './content/images/'+src
    let metadata = await Image(src, {
      widths: [400, 600, 800, 1000, 1200, 1400, 1600, 1900],
      formats: ['webp', 'jpeg', 'png'],
      urlPath: "/content/images/",
      outputDir: "./_site/content/images/"
    });

    let lowsrc = metadata.jpeg[0];

    let picture = `<picture>
      ${Object.values(metadata).map(imageFormat => {
        return `  <source type="image/${imageFormat[0].format}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
        <img
          data-src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}">
      </picture>`;

      return `${picture}`;

  });

  eleventyConfig.addLiquidShortcode("icon", function(title,url) {
    return '<img class="icon" src="'+url+'" alt="'+title+'" />';
  });

  // Tailwind pass through and watch target
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  // Alpine.js pass through
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
  });

  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configuration API: use eleventyConfig.addLayoutAlias(from, to) to add
  // layout aliases! Say you have a bunch of existing content using
  // layout: post. If you don’t want to rewrite all of those values, just map
  // post to a new file like this:
  // eleventyConfig.addLayoutAlias("post", "layouts/my_new_post_layout.njk");

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

   // Creates custom collection "pages"
   eleventyConfig.addCollection("pages", function(collection) {
    return collection.getFilteredByGlob("pages/*.md");
   });

   // Creates custom collection "results" for search
   const searchFilter = require("./filters/searchFilter");
   eleventyConfig.addFilter("search", searchFilter);
   eleventyConfig.addCollection("results", collection => {
    return [...collection.getFilteredByGlob("**/*.md")];
   });
  
   // Creates custom collection "menuItems"
   eleventyConfig.addCollection("menuItems", collection =>
    collection
      .getFilteredByTag("pg")
      .sort((a, b) => {
        return (a.data.pg_order || 0) - (b.data.pg_order || 0);
      })
  );

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("LLL dd, yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {

    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("images/")
  eleventyConfig.addPassthroughCopy("content/images/")
  eleventyConfig.addPassthroughCopy("_includes/assets/");

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let markdownItEmoji = require("markdown-it-emoji");
  let markdownItFootnote = require("markdown-it-footnote");
  let markdownItContainer = require("markdown-it-container");
  let markdownLinkifyImages = require('markdown-it-linkify-images')
  let markdownToc = require('markdown-it-table-of-contents')
  let markdownItTasks = require('markdown-it-task-lists')
  let markdownItAttrs = require("markdown-it-attrs")
  let markdownItCenterText = require("markdown-it-center-text")
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  let opts = {
    // permalink: true,
    // permalinkClass: "direct-link",
    // permalinkSymbol: "#"
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
    .use(markdownItEmoji)
    .use(markdownItFootnote)
    .use(markdownItContainer, 'callout')
    .use(markdownItContainer, 'callout-blue')
    .use(markdownItContainer, 'callout-pink')
    .use(markdownItContainer, 'callout-green')
    .use(markdownItContainer, 'warning')
    .use(markdownItTasks)
    .use(markdownItCenterText)
    .use(markdownLinkifyImages, {
      imgClass: "p-4",
    })
    .use(markdownItAttrs, {
      includeLevel: [2,3],
      listType: "ol"
    })
  );

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/rider-design-system",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
