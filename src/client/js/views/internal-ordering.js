"use strict";

import React from "react";

import InternalOrderingOld from "../img/internal-ordering-old.png";
import InternalOrderingNew from "../img/internal-ordering-new.png";

const InternalOrdering = () => {
  return (
    <section className="internal-ordering-container" id="internal-ordering">
      <h2>Internal Ordering</h2>
      <div className="internal-ordering-images">
        Old Interface:
        <img src={InternalOrderingOld} className="" alt="" />
        New Interface:
        <img src={InternalOrderingNew} className="" alt="" />
      </div>
      <label>Key Improvements:</label>
      <ul>
        <li>Applied the company's existing branding to create a consistent experience.</li>
        <li>Reorganised the interface into clearer sections with improved visual hierarchy.</li>
        <li>Structured the ordering process into clear stages.</li>
        <li>Added a live preview so users could verify orders before adding them to the basket.</li>
        <li>Improved responsiveness to support different screen sizes.</li>
        <li>Introduced validation and confirmation steps to reduce ordering errors.</li>
        <li>Collaborated with stakeholders by seeking feedback throughout development.</li>
      </ul>
    </section>
  );
};

export default InternalOrdering;
