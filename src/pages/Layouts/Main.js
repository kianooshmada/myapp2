import React from "react";

export default ({ children }) => {
  return (
    <div>
      <header>header....</header>
      <div>{children}</div>
      <footer>footer....</footer>
    </div>
  );
};
