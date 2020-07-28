const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    process.env.NODE_ENV === "production"
      ? purgecss({
          content: ["./src/*.js", "./src/**/*.js", "./src/**/**/*.js"],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        })
      : null,
    process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
    process.env.NODE_ENV === "production"
      ? cssnano({ preset: "default" })
      : null,
  ],
};

//see REFERENCES.md - purgecss + watch + cssnano
