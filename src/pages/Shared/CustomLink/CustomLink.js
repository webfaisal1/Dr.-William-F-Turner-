import React, { Fragment } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {

  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  
  return ( 
  <Fragment>
            
      <Link
        style={{ color: match ? "blue" : "black"  }}
        to={to}
        {...props}
      >
        {children}
      </Link>
  </Fragment>
  );
};

export default CustomLink;