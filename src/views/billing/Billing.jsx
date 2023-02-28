import {
  cibMastercard,
  cibVisa,
  cilArrowCircleBottom,
  cilArrowCircleTop,
  cilAvTimer,
  cilCheckCircle,
  cilMoney,
  cilPencil,
  cilXCircle,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonCustom from 'src/components/custom/ButtonCustom'

const Billing = () => {
  const navigate = useNavigate()
  return (
    <CRow>
      <h3 className="fw-bold">Billing</h3>
      <CCol
        xs={12}
        className="d-flex justify-content-center align-items-center flex-wrap flex-md-nowrap gap-2"
      >
        <CCol xs={3}>
          <CCard>
            <CCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold">Total Payment</h5>
                  <span>12</span>
                </div>
                <CIcon icon={cilMoney} size={'xxl'} className="text-info" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={3}>
          <CCard>
            <CCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold">Total Payment Pending</h5>
                  <span>12</span>
                </div>
                <CIcon icon={cilAvTimer} size={'xxl'} className="text-warning" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={3}>
          <CCard>
            <CCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold">Total Payment Success</h5>
                  <span>12</span>
                </div>
                <CIcon icon={cilCheckCircle} size={'xxl'} className="text-success" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={3}>
          <CCard>
            <CCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold">Total Payment Failed</h5>
                  <span>12</span>
                </div>
                <CIcon icon={cilXCircle} size={'xxl'} className="text-danger" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CCol>
      <CCol xs={12} className="my-5 d-flex gap-2">
        <CCol xs={6}>
          <CCard>
            <CCardBody>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="fw-bold">Payment Method</h5>
                <ButtonCustom
                  label="Add New Card"
                  classList="btn btn-dark btn-sm text-white"
                  iconAdd={true}
                  customFunction={() => navigate('/billing/add-payment')}
                />
              </div>
              <div>
                <CCol xs={12} className="mt-4 d-flex gap-2">
                  <CCol xs={6}>
                    <CCard>
                      <CCardBody>
                        <div className="d-flex justify-content-between mt-2">
                          <div className="d-flex align-items-center gap-2">
                            <CIcon icon={cibVisa} size={'xxl'} />
                            <span>**** **** **** 7852</span>
                          </div>
                          <Link to={'/billing/edit-payment'}>
                            <CIcon icon={cilPencil} size={'xl'} />
                          </Link>
                        </div>
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol xs={6}>
                    <CCard>
                      <CCardBody>
                        <div className="d-flex justify-content-between mt-2">
                          <div className="d-flex align-items-center gap-2">
                            <CIcon icon={cibMastercard} size={'xxl'} />
                            <span>**** **** **** 7852</span>
                          </div>
                          <Link to={'/billing/edit-payment'}>
                            <CIcon icon={cilPencil} size={'xl'} />
                          </Link>
                        </div>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CCol>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard>
            <CCardBody>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="fw-bold">Transactions</h5>
                <ButtonCustom label="View All" classList="btn btn-info btn-sm text-white" />
              </div>
              <div className="mt-4">
                <h6 className="text-secondary">NEWEST</h6>
                <div className="d-flex justify-content-between my-4">
                  <CIcon icon={cilArrowCircleTop} size={'xxl'} className="text-success" />
                  <div className="me-auto mx-3">
                    <h6 className="fw-bold">Payment Success</h6>
                    <span>27 March 2020, at 12:30 PM</span>
                  </div>
                  <span className="text-success">+ Rp. 2.000.000</span>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <CIcon icon={cilArrowCircleTop} size={'xxl'} className="text-success" />
                  <div className="me-auto mx-3">
                    <h6 className="fw-bold">Payment Success</h6>
                    <span>27 March 2020, at 12:30 PM</span>
                  </div>
                  <span className="text-success">+ Rp. 2.000.000</span>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <CIcon icon={cilArrowCircleBottom} size={'xxl'} className="text-danger" />
                  <div className="me-auto mx-3">
                    <h6 className="fw-bold">Payment Failed</h6>
                    <span>27 March 2020, at 12:30 PM</span>
                  </div>
                  <span className="text-danger">- Rp. 2.000.000</span>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <CIcon icon={cilArrowCircleBottom} size={'xxl'} className="text-danger" />
                  <div className="me-auto mx-3">
                    <h6 className="fw-bold">Payment Failed</h6>
                    <span>27 March 2020, at 12:30 PM</span>
                  </div>
                  <span className="text-danger">- Rp. 2.000.000</span>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="text-secondary">YESTERDAY</h6>
                <div className="d-flex justify-content-between my-4">
                  <CIcon icon={cilArrowCircleTop} size={'xxl'} className="text-success" />
                  <div className="me-auto mx-3">
                    <h6 className="fw-bold">Payment Success</h6>
                    <span>27 March 2020, at 12:30 PM</span>
                  </div>
                  <span className="text-success">+ Rp. 2.000.000</span>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <CIcon icon={cilArrowCircleTop} size={'xxl'} className="text-success" />
                  <div className="me-auto mx-3">
                    <h6 className="fw-bold">Payment Success</h6>
                    <span>27 March 2020, at 12:30 PM</span>
                  </div>
                  <span className="text-success">+ Rp. 2.000.000</span>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <CIcon icon={cilArrowCircleBottom} size={'xxl'} className="text-danger" />
                  <div className="me-auto mx-3">
                    <h6 className="fw-bold">Payment Failed</h6>
                    <span>27 March 2020, at 12:30 PM</span>
                  </div>
                  <span className="text-danger">- Rp. 2.000.000</span>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <CIcon icon={cilArrowCircleBottom} size={'xxl'} className="text-danger" />
                  <div className="me-auto mx-3">
                    <h6 className="fw-bold">Payment Failed</h6>
                    <span>27 March 2020, at 12:30 PM</span>
                  </div>
                  <span className="text-danger">- Rp. 2.000.000</span>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CCol>
    </CRow>
  )
}

export default Billing
