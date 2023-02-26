// Modules
import React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { CPagination, CPaginationItem } from '@coreui/react'
import PropTypes from 'prop-types'

const TableCustom = ({
  data,
  columns,
  //   manualPagination = false,
  //   setPage,
  //   totalPages,
  //   pageSize,
  //   pageIndex,
}) => {
  //   const pagination = React.useMemo(
  //     () => ({
  //       pageIndex,
  //       pageSize,
  //     }),
  //     [pageIndex, pageSize],
  //   )

  const table = useReactTable({
    data,
    columns,
    // state: {
    //   pagination,
    // },
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    // manualPagination,
    // onPaginationChange: setPage,
    // pageCount: totalPages,
  })
  return (
    <>
      <div
        style={{
          maxWidth: '100%',
          overflowX: 'auto',
          maxHeight: '100%',
        }}
      >
        <table className="table table-responsive table-bordered">
          <thead className="table-dark">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{
                      backgroundColor: row.index % 2 === 0 ? '#FFFFFF' : '#F4F5F9',
                      border: 'none',
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CPagination
        aria-label="Page navigation example"
        align="center"
        className="mt-3"
        style={{ cursor: 'pointer' }}
      >
        <CPaginationItem
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </CPaginationItem>
        <CPaginationItem
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </CPaginationItem>
        <CPaginationItem onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </CPaginationItem>
        <CPaginationItem
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </CPaginationItem>
      </CPagination>
    </>
  )
}

TableCustom.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  manualPagination: PropTypes.bool,
  totalPages: PropTypes.number,
  setPage: PropTypes.func,
  pageSize: PropTypes.number,
  pageIndex: PropTypes.number,
}

export default TableCustom
