#!/usr/bin/env node

const { mergeAdminUI } = require("./merge-admin-ui");
const { renameAdminTitle } = require("./rename-admin-title");

function strapiCustomizeAdmin() {
  mergeAdminUI();
  renameAdminTitle();
}

strapiCustomizeAdmin();