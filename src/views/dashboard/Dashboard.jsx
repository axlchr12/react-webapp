import { cilCheckCircle, cilNotes } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React from 'react'

const Dashboard = () => {
  return (
    <CRow className="d-flex justify-content-center align-items-center flex-wrap gap-2">
      <h3 className="fw-bold">Dashboard</h3>
      <CCol xs={3}>
        <CCard>
          <CCardBody>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold">Total Task</h5>
                <span>12</span>
              </div>
              <CIcon icon={cilNotes} size={'xxl'} className="text-info" />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={3}>
        <CCard>
          <CCardBody>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold">Total Task Done</h5>
                <span>12</span>
              </div>
              <CIcon icon={cilCheckCircle} size={'xxl'} className="text-success" />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
