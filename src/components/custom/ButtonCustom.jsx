import React from 'react'
import PropTypes from 'prop-types'
import { CSpinner } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

const ButtonCustom = ({
  typeButton,
  label,
  classList,
  customFunction = null,
  isLoading,
  iconAdd = null,
}) => {
  return (
    <>
      <button type={typeButton} className={classList} onClick={customFunction} disabled={isLoading}>
        {isLoading && <CSpinner component="span" size="sm" aria-hidden="true" />}
        <span className="mx-2">
          {iconAdd && <CIcon icon={cilPlus} className="text-light me-2" />}
          {label}
        </span>
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
  iconAdd: PropTypes.bool,
}

export default ButtonCustom
