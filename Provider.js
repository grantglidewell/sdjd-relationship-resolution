import React from "react";

const Provider = ({ children }) => (
  <div>
    <head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
    </head>
    <body>{children}</body>
  </div>
);

export default Provider;
