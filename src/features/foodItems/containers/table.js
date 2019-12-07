import React from 'react'
import SyookTable from '@syook/react-tabulous'

const FoodItemTable =(props)=>{
    const columnDefs = ()=>[
        {
            headerName: 'Name',
            field: 'fooditem_name',
            type: 'String',
            cell: foodItem => foodItem.name,
            isSortable: true,
            isSearchable: true,
            isFilterable: false
          },
          {
            headerName: 'Type',
            field: 'fooditem_type',
            type: 'String',
            cell: foodItem => foodItem.type,
            isSortable: true,
            isSearchable: true,
            isFilterable: false,
          }
          
    ]
    return(
        <SyookTable
      // actionOnHover
      columnDefs={columnDefs({ ...props })}
      key={props.workOrderableFilter + props.woType + props.workOrderCount}
      data={props.currentData || []}
      mandatoryFields={['Name','Type']}
      tableScroll={true}
      tableName={'Food Items'}
    >
      {props.children}
    </SyookTable>
    )
}
export default FoodItemTable