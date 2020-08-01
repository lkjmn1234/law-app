import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import TapContainer from "./partials/TapContainer";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const HomeSearch = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <div className="container" style={{marginTop:'20px'}}>
        <div className={innerClasses}>
          <TapContainer className="center-content"></TapContainer>
        </div>
      </div>
    </section>
  );
}

HomeSearch.propTypes = propTypes;
HomeSearch.defaultProps = defaultProps;

export default HomeSearch;