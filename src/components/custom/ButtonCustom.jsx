import React from 'react'
import PropTypes from 'prop-types'
import { CSpinner } from '@coreui/react'

const ButtonCustom = ({ typeButton, label, classList, customFunction = null, isLoading }) => {
  return (
    <>
      <button type={typeButton} className={classList} onClick={customFunction} disabled={isLoading}>
        {isLoading && <CSpinner component="span" size="sm" aria-hidden="true" />}
        <span className="mx-2">{label}</span>
      </button>
    </>
  )
}

ButtonCustom.propTypes = {
  typeButton: PropTypes.string,
  label: PropTypes.string,
  classList: PropTypes.string,
  customFunction: PropTypes.func,
  isLoading: PropTypes.bool,
}

export default ButtonCustom
