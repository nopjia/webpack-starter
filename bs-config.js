module.exports = {
  files: ["dist", "examples"],
  server: {
    baseDir: ".",
    directory: true,
  },
  startPath: "examples/index.html",
  port: 9050,
  ui: {
    port: 9051,
  },
};
