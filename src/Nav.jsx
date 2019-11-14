import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <p className="Nav">
      <Link to="/">Home</Link> | <Link to="/talks">Talks</Link>
    </p>
  );
}
