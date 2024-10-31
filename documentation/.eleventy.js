import { DateTime } from "luxon";
import CleanCSS from "clean-css";
import UglifyJS from "uglify-es";
import svgContents from "eleventy-plugin-svg-contents";
import embedEverything from "eleventy-plugin-embed-everything";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import Image from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItEmoji from "markdown-it-emoji";
import markdownItFootnote from "markdown-it-footnote";
import markdownItContainer from "markdown-it-container";
import markdownLinkifyImages from 'markdown-it-linkify-images';
import markdownItAttrs from "markdown-it-attrs";
import markdownItCenterText from "markdown-it-center-text";
import { statSync } from "fs";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(embedEverything);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Responsive image shortcode
  eleventyConfig.addLiquidShortcode("image", async function (src, alt, sizes = "100vw") {
    if (alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }
    src = './content/images/' + src
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

  eleventyConfig.addLiquidShortcode("icon", function (title, url) {
    return '<img class="icon" src="' + url + '" alt="' + title + '" />';
  });

  // Tailwind pass through and watch target
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  // Alpine.js pass through
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "./js/alpine.js",
  });

  // tokens pass through
  eleventyConfig.addPassthroughCopy({
    "./node_modules/rider-design-system/dist/variables.Light.css": "./variables-light.css",
    "./node_modules/rider-design-system/dist/variables.Dark.css": "./variables-dark.css",
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
  eleventyConfig.addCollection("pages", function (collection) {
    return collection.getFilteredByGlob("pages/*.md");
  });

  function readableDate(dateObj) {
    return DateTime.fromJSDate(dateObj).toFormat("LLL dd, yyyy");
  }
  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", readableDate);

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  eleventyConfig.addShortcode("createdDate", function () {
    return this.page?.inputPath ? readableDate(statSync(this.page.inputPath).birthtime) : undefined;
  });
  eleventyConfig.addShortcode("modifiedDate", function () {
    return this.page?.inputPath ? readableDate(statSync(this.page.inputPath).mtime) : undefined;
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function (code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("images/")
  eleventyConfig.addPassthroughCopy("content/images/")
  eleventyConfig.addPassthroughCopy("_includes/assets/");

  /* Markdown Plugins */

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
    .use(markdownItCenterText)
    .use(markdownLinkifyImages, {
      imgClass: "p-4",
    })
    .use(markdownItAttrs, {
      includeLevel: [2, 3],
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
