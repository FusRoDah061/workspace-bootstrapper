import React from 'react';
import { Link } from 'react-router-dom';

const Start: React.FC = () => (
  <div>
    <h1>Start page</h1>
    <Link to="/workspace">Workspace</Link>
  </div>
);

export default Start;
