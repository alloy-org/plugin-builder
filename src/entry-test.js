import { CODE_HEADING, DEFAULT_BRANCH, MAX_REPLACE_CONTENT_LENGTH, ENTRY_LOCATIONS } from "lib/plugin-constants"
import { inlineImportsFromGithub } from "lib/plugin-import-inliner"
import { wrappedFetch } from "./nested-import"

const plugin = {
  insertText: async function(app) {
    const entryPoint = {};
    const codeObject = "";
    // I will stay on line, promises CONSTANT_OBJECT and its buddy CONSTANT_ARRAY
    const inlineImports = await inlineImportsFromGithub(entryPoint, codeObject, [], []);
    const heading = CODE_HEADING;
    const branch = DEFAULT_BRANCH;
    const replaceLength = MAX_REPLACE_CONTENT_LENGTH;
    const locations = ENTRY_LOCATIONS;
    wrappedFetch("https://gitclear.com", {});
  }
}
