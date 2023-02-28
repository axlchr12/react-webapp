/* eslint-disable react/prop-types */
import { CCol, CRow } from '@coreui/react'
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import TableCustom from 'src/components/custom/TableCustom'

const TaskList = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Task ID',
      },
      {
        accessorKey: 'taskNote',
        header: 'Task Note',
      },
      {
        accessorKey: 'serviceType',
        header: 'Service Type',
      },
      {
        accessorKey: 'createdDate',
        header: 'Created Date',
      },
      {
        accessorKey: 'updatedDate',
        header: 'Updated Date',
      },
      {
        accessorKey: 'id',
        header: 'Action',
        cell: (props) => (
          <Link
            to={{
              pathname: '/task-list/detail',
              search: `?id=${props.getValue()}`, // inject code value into template
            }}
            className="btn btn-primary btn-sm"
          >
            <span className="text-light">Update</span>
          </Link>
        ),
      },
    ],
    [],
  )

  const response = [
    {
      id: 1,
      taskNote: 'Do 100 likes on Instagram',
      serviceType: 'Likes',
      createdDate: '2022-12-10',
      updatedDate: '2023-02-10',
    },
    {
      id: 2,
      taskNote: 'Do 300 likes on Instagram',
      serviceType: 'Likes',
      createdDate: '2022-12-10',
      updatedDate: '2023-02-10',
    },
  ]
  return (
    <>
      <CRow>
        <h3 className="fw-bold mb-4">Task List</h3>
        <CCol>
          <TableCustom columns={columns} data={response} />
        </CCol>
      </CRow>
    </>
  )
}

export default TaskList
