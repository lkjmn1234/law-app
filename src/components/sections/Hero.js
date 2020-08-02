import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link } from "react-router-dom";
import Image from '../elements/Image';

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

    return (
        <section
            {...props}
            className={outerClasses}
            style={{ backgroundColor: '#bababe' }}
        >
            <div className="container-sm">
                <Link to="/" >
                    <Image
                        src='/Ginni_Logo_v1.png'
                        alt="Open"
                        width={200}
                        height={200} />
                </Link>
            </div>
            <div className="container">
                <div style={{ padding: '1%' }}>
                    <div className="hero-content">
                        <div className="container-xs">
                            <ul className="list-reset">
                                <li>
                                    <Link to="/">  Home    | </Link>
                                    <Link to="/aboutUs">  About Us    |</Link>
                                    <Link to="/lawInfo">  Law Firms    |</Link>
                                    <Link to="/success">  Success Cases    |</Link>
                                    <Link to="/members">  Members  </Link>
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