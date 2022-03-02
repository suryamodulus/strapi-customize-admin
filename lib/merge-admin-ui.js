const path = require("path");
const mergedirs = require("merge-dirs").default;

async function mergeAdminUI() {
  const dir = process.cwd();
  const cacheAdminSrcDir = path.resolve(dir, ".cache", "admin", "src");
  const customAdminUIDir = path.resolve(dir, "src", "admin", "ui");
  mergedirs(customAdminUIDir, cacheAdminSrcDir, "overwrite");
}

module.exports = {
  mergeAdminUI,
};