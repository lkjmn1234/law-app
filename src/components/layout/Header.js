import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import Logo from './partials/Logo';

const propTypes = {
    navPosition: PropTypes.string,
    hideNav: PropTypes.bool,
    hideSignin: PropTypes.bool,
    bottomOuterDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool
}

const defaultProps = {
    navPosition: '',
    hideNav: false,
    hideSignin: false,
    bottomOuterDivider: false,
    bottomDivider: false
}

const Header = ({
                    className,
                    navPosition,
                    hideNav,
                    hideSignin,
                    bottomOuterDivider,
                    bottomDivider,
                    ...props
                }) => {

    const [isActive] = useState(false);

    const nav = useRef(null);

    const classes = classNames(
        'site-header',
        bottomOuterDivider && 'has-bottom-divider',
        className
    );

    return (
        <header
            {...props}
            className={classes}
        >
            <div className="container">
                <div className={
                    classNames(
                        'site-header-inner',
                        bottomDivider && 'has-bottom-divider'
                    )}>
                    <Logo/>
                    <>
                        <nav
                            ref={nav}
                            className={
                                classNames(
                                    'header-nav',
                                    isActive && 'is-active'
                                )}>
                            <div className="header-nav-inner">
                                <ul className="list-reset header-nav-right">
                                    <li><Link to="/aboutus">About us</Link></li>
                                </ul>
                                <ul className="list-reset header-nav-right">
                                    <li><Link to="/register">Sign up</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;