import React from 'react'
import styleable from 'react-styleable'

import css from './nav.css'

const { func, bool } = React.PropTypes


function getPrevStyles(props) {
    return props.hasPrevious ? props.css.prev : props.css.prevHidden
}

function getNextStyles(props) {
    return props.hasNext ? props.css.next : props.css.nextHidden
}

function Nav(props) {
  return (
    <div className={props.css.root}>
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

export default styleable(css)(Nav)