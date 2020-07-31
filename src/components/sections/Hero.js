import React from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import {Link} from "react-router-dom";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Hero = ({
                  className,
                  topOuterDivider,
                  bottomOuterDivider,
                  topDivider,
                  bottomDivider,
                  hasBgColor,
                  invertColor,
                  ...props
              }) => {

    const outerClasses = classNames(
        'section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <h1 style={{ 'text-align':'left' }}>Find Lawyer</h1>
                <div className={innerClasses}>
                    <div className="hero-content">
                        <div className="container-xs">
                            <ul className="list-reset">
                                <li>
                                  <Link to="/">  Home  | </Link>
                                  <Link to="/about-us">  About Us  |</Link>
                                  <Link to="/law-firms">  Law Firms  |</Link>
                                  <Link to="/cases">  Success Cases  |</Link>
                                  <Link to="/member">  Member  |</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;