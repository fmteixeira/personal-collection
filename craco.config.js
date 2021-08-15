module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  // webpack: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src/types"),
  // "@types": path.resolve(__dirname, "src/types"),
  //   },
  // },
};
