import { CCard, CCardBody, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'
import React from 'react'

const Dashboard = () => {
  return (
    <CRow className="d-flex justify-content-center align-items-center flex-wrap">
      <CCol xs={3}>
        <CCard>
          <CCardBody>
            <CCardTitle>Total Task</CCardTitle>
            <CCardText>12</CCardText>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={3}>
        <CCard>
          <CCardBody>
            <CCardTitle>Total Task Done</CCardTitle>
            <CCardText>12</CCardText>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
