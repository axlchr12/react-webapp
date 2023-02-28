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
  CFormTextarea,
  CRow,
} from '@coreui/react'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ButtonCustom from 'src/components/custom/ButtonCustom'

const TaskDetail = () => {
  const [urlLink, setUrlLink] = useState('http://localhost:3000/task-list/detail?id=1')
  const [isloading, setIsLoading] = useState(true)
  let navigate = useNavigate()
  const [searchParams] = useSearchParams()

  return (
    <>
      <CRow className="d-flex justify-content-center align-items-center flex-wrap">
        <h3 className="fw-bold">Update Task ID: {searchParams.get('id')}</h3>
        <CCol xs={6}>
          <CCard>
            <CCardBody>
              <CCardTitle className="fw-bold">Form Update Task</CCardTitle>
              <CCardText>
                <CForm className="mt-4 mb-3">
                  <CFormLabel>URL LINK</CFormLabel>
                  <CFormInput
                    type="text"
                    placeholder="input URL link"
                    onInput={(e) => setUrlLink(e.target.value)}
                    value="http://localhost:3000/task-list/detail?id=1"
                  />
                  {urlLink.length >= 8 && (
                    <>
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
                        value={10}
                      />
                      <CFormLabel className="mt-3">NOTES</CFormLabel>
                      <CFormTextarea rows={5} value="Do 100 likes on Instagram"></CFormTextarea>
                    </>
                  )}
                </CForm>
              </CCardText>
              {urlLink.length >= 8 && (
                <div className="d-flex justify-content-end">
                  <ButtonCustom
                    label="Cancel"
                    typeButton="button"
                    customFunction={() => navigate(-1)}
                    classList="btn btn-outline-danger mx-1"
                    isloading={isloading}
                  />
                  <ButtonCustom
                    label="Update"
                    typeButton="submit"
                    classList="btn btn-outline-primary"
                    isloading={isloading}
                  />
                </div>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default TaskDetail
