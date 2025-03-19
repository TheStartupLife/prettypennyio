import React from "react"; 

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
      <script
        key="recaptcha"
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      />,
    ]);
  };
  