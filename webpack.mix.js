const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
const publicRoot = "dist";
require("@ayctor/laravel-mix-svg-sprite");

// Set up purgeCSS to rip all the excess that Tailwind creates
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.njk"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

mix.setPublicPath(`${publicRoot}/assets/`);

mix.options({
  processCssUrls: false,
  postCss: [
    tailwindcss("./tailwind.config.js"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []) // Only run purgeCSS in production
  ],
  autoprefixer: {
    options: {
      browsers: ["last 2 versions"]
    }
  }
});

// Run mix
mix
  .js("./src/assets/js/app.js", `app.js`)
  .svgSprite("./src/assets/svg/**/*.svg", "assets/svg/sprite.svg")
  .sass("./src/assets/scss/main.scss", "css")
  .minify(`${publicRoot}/assets/css/main.css`)
  .sourceMaps();
