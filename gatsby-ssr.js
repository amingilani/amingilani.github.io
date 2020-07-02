/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
export const onRenderBody = (
 { setHeadComponents, setPostBodyComponents },
 pluginOptions
) => {
 setHeadComponents([
   <script
      key="mailchimp"
      id="mcjs"
      dangerouslySetInnerHTML={{
        __html: `
        !function(c,h,i,m,p){var m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/9f8b3faec654f3522dfef4059/245eec5628f6ecc631381696f.js");
      `,
      }}
   />,
 ])
}
