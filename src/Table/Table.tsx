import React from 'react'
import { StyledWrapper } from './StyledWrapper'
import { DataGrid, GridCallbackDetails, GridLocaleText, GridPaginationModel, GridRowId } from '@mui/x-data-grid'

interface ColumnProps {
  field: string
  headerName: string
  width: number
  sortable: boolean
  renderCell: (params: any) => any
  flex: number
}

interface CustomTableProps {
  rows?: any
  columns: ColumnProps[]
  autoHeight?: boolean
  selectedRows?: GridRowId[]
  handlePaginationModelChange?: (model: GridPaginationModel, details: GridCallbackDetails<any>) => void
  handleSelectionModelChange?: (newSelection: any) => void
  localeText?: Partial<GridLocaleText>
  checkboxSelection?: boolean
}

export const CustomTable: React.FC<CustomTableProps> = ({
  rows,
  columns,
  autoHeight,
  selectedRows,
  handlePaginationModelChange,
  handleSelectionModelChange,
  localeText,
  checkboxSelection
}) => {
  return (
    <StyledWrapper>
      <DataGrid
        className='dataGrid'
        rows={rows}
        columns={columns}
        autoHeight={autoHeight}
        localeText={localeText && localeText}
        sx={{
          '& .MuiDataGrid-columnHeaderDraggableContainer': {
            marginBottom: '1rem'
          },
          '& .MuiDataGrid-cell--textLeft': {
            fontFamily: 'Raleway'
          },
          '& .MuiTablePagination-selectLabel,.MuiInputBase-input, .MuiTablePagination-displayedRows, .MuiDataGrid-selectedRowCount': {
            fontFamily: 'Raleway'
          },
          '& .MuiDataGrid-checkboxInput': {
            color: '#B0BAC9'
          },
          '& .MuiCheckbox-indeterminate': {
            color: 'red'
          },
          '& .MuiCheckbox-colorPrimary.Mui-checked': {
            color: '#283B41'
          },
          '& .MuiDataGrid-footerContainer  ': {
            marginRight: '-1rem'
          },
          '& .MuiTablePagination-actions': {
            display: 'none'
          },
          '& .MuiTablePagination-displayedRows': {
            display: 'none'
          },
          '& .MuiDataGrid-withBorderColor': {
            marginTop: '0.5rem',
            border: 'none'
          },
          '& .MuiSelect-select': {
            border: '1px solid #b0bac9'
          }
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[5, 10, 15]}
        disableRowSelectionOnClick
        checkboxSelection={checkboxSelection}
        rowSelectionModel={selectedRows}
        onPaginationModelChange={handlePaginationModelChange}
        onRowSelectionModelChange={handleSelectionModelChange}
      />
    </StyledWrapper>
  )
}
