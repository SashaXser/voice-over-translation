import path from "node:path";
import * as sass from "sass";

import browserslist from "browserslist";
import { browserslistToTargets, bundle, transform } from "lightningcss";

// as style-loader + css-loader + sass-loader, but smaller and faster (includes auto minification)
export default function (content, map) {
  const callback = this.async();
  const defaultOptions = {
    minify: true,
    sourceMap: false,
    cssModules: false,
    projectRoot: path.join(process.cwd(), "dist"),
    filename: this.resourcePath,
    targets: browserslistToTargets(browserslist("defaults, Safari >= 13")),
  };

  let code = "";
  if (/^.*\.css(?!\.module\.css)$/.test(this.resourcePath)) {
    code = bundle(defaultOptions).code;
  } else if (/^.*\.(sc|sa)ss$/.test(this.resourcePath)) {
    const { css: sassCode } = sass.compile(this.resourcePath);
    code = transform({
      code: Buffer.from(sassCode),
      ...defaultOptions,
    }).code;
  }

  callback(null, `GM_addStyle(${JSON.stringify(code.toString())})`, map);
}
