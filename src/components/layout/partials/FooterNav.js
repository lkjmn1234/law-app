import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutUs">About us</Link>
        </li>
        <li>
          <Link to="/lawInfo">Law Firms</Link>
        </li>
        <li>
          <Link to="/success">Success Cases</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link to="/terms">Term of Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;