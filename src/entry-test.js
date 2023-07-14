import { inlineImportsFromGithub } from "lib/plugin-import-inliner"
import { wrappedFetch } from "./nested-import"

const plugin = {
  insertText: async function(app) {
    const entryPoint = {};
    const codeObject = "";
    const inlineImports = await inlineImportsFromGithub(entryPoint, codeObject, {});
    wrappedFetch("https://gitclear.com", {});
  }
}