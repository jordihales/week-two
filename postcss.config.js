module.exports = {
  plugins: {
    tailwindcss: {},
    "vue-cli-plugin-tailwind/purgecss": {
      whitelist: ["foo", "bar"]
    },
    autoprefixer: {}
  }
};
