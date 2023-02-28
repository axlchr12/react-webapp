import {
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonCustom from 'src/components/custom/ButtonCustom'

const EditCard = () => {
  let navigate = useNavigate()

  return (
    <>
      <CRow className="d-flex justify-content-center align-items-center flex-wrap">
        <h3 className="fw-bold">Edit Card</h3>
        <CCol xs={6}>
          <CCard>
            <CCardBody>
              <CCardTitle className="fw-bold">Form Edit Card</CCardTitle>
              <CCardText>
                <CForm className="mt-4 mb-3">
                  <CRow>
                    <CCol xs={12} md={6}>
                      <CFormLabel>Please select a payment method</CFormLabel>
                      <CFormSelect
                        aria-label="Default select example"
                        options={[
                          { label: 'Visa', value: '' },
                          { label: 'Mastercard', value: '1' },
                        ]}
                      />
                    </CCol>
                    <div className="d-flex flex-wrap mt-3">
                      <CCol xs={12} md={5}>
                        <CFormLabel>Card Number</CFormLabel>
                        <CFormInput type="text" />
                      </CCol>
                      <CCol xs={3} md={2} className="mx-xs-0 mx-md-2 mt-2 mt-md-0">
                        <CFormLabel>Month</CFormLabel>
                        <CFormSelect
                          aria-label="Default select example"
                          options={[
                            { label: '---', value: '' },
                            { label: '01', value: '1' },
                            { label: '02', value: '1' },
                            { label: '03', value: '1' },
                            { label: '04', value: '1' },
                            { label: '05', value: '1' },
                            { label: '06', value: '1' },
                            { label: '07', value: '1' },
                            { label: '08', value: '1' },
                            { label: '09', value: '1' },
                            { label: '10', value: '1' },
                            { label: '11', value: '1' },
                            { label: '12', value: '1' },
                          ]}
                        />
                      </CCol>
                      <CCol xs={3} md={2} className="mx-2 mx-md-0 mt-2 mt-md-0">
                        <CFormLabel>Year</CFormLabel>
                        <CFormSelect
                          aria-label="Default select example"
                          options={[
                            { label: '--', value: '' },
                            { label: '2024', value: '1' },
                            { label: '2025', value: '1' },
                            { label: '2026', value: '1' },
                            { label: '2027', value: '1' },
                            { label: '2028', value: '1' },
                            { label: '2029', value: '1' },
                            { label: '2030', value: '1' },
                          ]}
                        />
                      </CCol>
                      <CCol xs={3} md={2} className="mx-2 mx-md-2 mt-2 mt-md-0">
                        <CFormLabel>CVV</CFormLabel>
                        <CFormInput type="text" />
                      </CCol>
                    </div>
                  </CRow>
                </CForm>
              </CCardText>

              <div className="d-flex justify-content-end">
                <ButtonCustom
                  label="Cancel"
                  typeButton="button"
                  customFunction={() => navigate(-1)}
                  classList="btn btn-outline-danger mx-1"
                />
                <ButtonCustom
                  label="Proceed"
                  typeButton="submit"
                  classList="btn btn-outline-primary"
                />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EditCard
