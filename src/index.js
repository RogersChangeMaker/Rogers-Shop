import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WhatIsYourName from "./YourName";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="card-box">
      <WhatIsYourName uname="Rogers" date="12/03/1984" />
      <WhatIsYourName uname="Clinton" date="01/05/1990" />
      <WhatIsYourName uname="Adephus" date="09/09/1995" />
      <WhatIsYourName uname="Junior" date="17/06/1991" />
    </div>
  </React.StrictMode>
);
