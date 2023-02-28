import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonCustom from 'src/components/custom/ButtonCustom'

const Register = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard>
              <CCardBody>
                <CCardTitle className="fw-bold">Register</CCardTitle>
                <CCardText>
                  <CForm className="mt-4 mb-3">
                    <CAccordion className="mt-4" activeItemKey={1}>
                      <CAccordionItem itemKey={1}>
                        <CAccordionHeader>URL Link</CAccordionHeader>
                        <CAccordionBody>
                          <CFormLabel>URL LINK</CFormLabel>
                          <CFormInput type="text" placeholder="input URL link" />
                          <CFormLabel className="mt-3">SERVICE TYPE</CFormLabel>
                          <CFormSelect
                            aria-label="Default select example"
                            options={[
                              { label: '---', value: '' },
                              { label: 'Likes', value: '1' },
                            ]}
                          />
                          <CFormLabel className="mt-3">TOTAL LIKES</CFormLabel>
                          <CFormInput
                            type="number"
                            placeholder="input total likes"
                            pattern="[0-9]{1,5}"
                          />
                          <CFormLabel className="mt-3">NOTES</CFormLabel>
                          <CFormTextarea rows={5}></CFormTextarea>
                        </CAccordionBody>
                      </CAccordionItem>
                      <CAccordionItem itemKey={2}>
                        <CAccordionHeader>Payment Method</CAccordionHeader>
                        <CAccordionBody>
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
                        </CAccordionBody>
                      </CAccordionItem>
                      <CAccordionItem itemKey={3}>
                        <CAccordionHeader>Account</CAccordionHeader>
                        <CAccordionBody>
                          <CFormLabel>Email</CFormLabel>
                          <CFormInput type="email" placeholder="input email" />
                          <CFormLabel className="mt-3">Password</CFormLabel>
                          <CFormInput type="password" placeholder="input password" />
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                  </CForm>
                </CCardText>
                <div className="d-flex justify-content-end">
                  <ButtonCustom
                    label="Cancel"
                    typeButton="button"
                    classList="btn btn-outline-danger mx-2"
                    customFunction={() => navigate('/login')}
                  />
                  <ButtonCustom
                    label="Register"
                    typeButton="submit"
                    classList="btn btn-outline-primary"
                  />
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
