import React from 'react';
import classNames from 'classnames';
import Image from '../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );
  const path = props;

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
          <Image
            src="/intelligent.JPG"
            alt="Open"
            width={200}
            height={200} />
      </h1>
    </div>
  );
}

export default Logo;