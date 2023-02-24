import React from 'react'
import PropTypes from 'prop-types'

const ButtonCustom = ({ typeButton, label, classList, customFunction = null }) => {
  return (
    <>
      <button type={typeButton} className={classList} onClick={customFunction}>
        {label}
      </button>
    </>
  )
}

ButtonCustom.propTypes = {
  typeButton: PropTypes.string,
  label: PropTypes.string,
  classList: PropTypes.string,
  customFunction: PropTypes.func,
}

export default ButtonCustom
