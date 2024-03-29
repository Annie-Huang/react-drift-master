import classnames from 'classnames'
import React from 'react'

const { func, bool } = React.PropTypes

function getPrevStyles(props) {
    return classnames('dft__nav__btn dft__nav__btn--prev', {
        'dft__nav__btn--hidden': !props.hasPrevious
    })
}

function getNextStyles(props) {
    return classnames('dft__nav__btn dft__nav__btn--next', {
        'dft__nav__btn--hidden': !props.hasNext
    })

}

function Nav(props) {
  return (
    <div className="dft__nav">
      <button className={getPrevStyles(props)} onClick={props.onPrevious}>&#10094;</button>
      <button className={getNextStyles(props)} onClick={props.onNext}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default Nav
