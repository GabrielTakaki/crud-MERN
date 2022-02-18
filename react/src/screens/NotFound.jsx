import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      You do not have the credentials to view this page.
      <br />
      <Link to="/">Log-in</Link>
      <br />
      or
      <br />
      <Link to="/register">Sign-up</Link>
    </div>
  );
}

export default NotFound;
