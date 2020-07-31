import React from 'react';
import classNames from 'classnames';
import Tap from '../../elements/Tap';
const TapContainer = ({
                           className,
                           data,
                           children,
                           tag,
                           ...props
                       }) => {

    const classes = classNames(
        'section-header',
        className
    );
    return (
        <>
            <div
                {...props}
                className={classes}
            >
                <div className="container-xs">
                    <Tap></Tap>
                </div>
            </div>
        </>
    );
}
export default TapContainer;