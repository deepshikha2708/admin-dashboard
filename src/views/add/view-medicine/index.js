import React, {useState} from 'react';

import {
  CCard,
  CCardBody,
  CCardHeader,

  CButton,
  CCollapse,
  CBadge,
  CDataTable,
} from '@coreui/react'



const Index = props => {
    const usersData = [
        {MedicineId: 0052, MedicineName:'paracetamol',  ProductionDate: '2021/06/01', Location: 'Mumbai',     status: 'Order Placed'},
        {MedicineId: 1098, MedicineName:'dapagliflozin',ProductionDate: '2021/05/25', Location: 'Delhi',      status: 'Order Dispatched'},
        {MedicineId: 2567, MedicineName:'vortioxetine', ProductionDate: '2021/05/15', Location: 'Nagpur',     status: 'Order Dispatched'},
        {MedicineId: 3365, MedicineName:'ranitidine',   ProductionDate: '2021/04/30', Location: 'Bengaluru',  status: 'Order Received'},
        {MedicineId: 4142, MedicineName:'ursodiol',     ProductionDate: '2021/06/10', Location: 'Ahmedabad',  status: 'Order Placed'},
        {MedicineId: 0056, MedicineName:'paracetamol',  ProductionDate: '2021/06/01', Location: 'Mumbai',     status: 'Order Placed'},
        {MedicineId: 3347, MedicineName:'ranitidine',   ProductionDate: '2021/04/28', Location: 'Bengaluru',  status: 'Order Received'},
        {MedicineId: 7986, MedicineName:'zalcitabine' , ProductionDate: '2021/05/13', Location: 'Guwahati',   status: 'Order Dispatched'},
        {MedicineId: 8435, MedicineName:'ketoprofen' ,  ProductionDate: '2021/06/17', Location: 'Kolkata',    status: 'Order Placed'},
        {MedicineId: 9285, MedicineName:'abatacept'  ,  ProductionDate: '2021/04/26', Location: 'Hyderabad',  status: 'Order Canceled'},
        {MedicineId: 1075, MedicineName:'simethicone' , ProductionDate: '2021/06/21', Location: 'New Delhi',  status: 'Order Placed'},
        {MedicineId: 8165, MedicineName:'tamoxifen' ,   ProductionDate: '2021/04/27', Location: 'Jaipur',     status: 'Order Received'},
        {MedicineId: 6211, MedicineName:'maraviroc',    ProductionDate: '2021/07/01', Location: 'Jamshedpur', status: 'Order Placed'},
        {MedicineId: 7372, MedicineName:'famotidine' ,  ProductionDate: '2021/07/08', Location: 'Panaji',     status: 'Order Placed'},
        {MedicineId: 2578, MedicineName:'vortioxetine', ProductionDate: '2021/05/15', Location: 'Nagpur',     status: 'Order Dispatched'},
        {MedicineId: 0023, MedicineName:'paracetamol',  ProductionDate: '2021/06/01', Location: 'Mumbai',     status: 'Order Placed'},
        {MedicineId: 1665, MedicineName:'nateglinide',  ProductionDate: '2021/04/29', Location: 'Ahmedabad',  status: 'Order Canceled'},
        {MedicineId: 0369, MedicineName:'maraviroc',    ProductionDate: '2021/07/01', Location: 'Jamshedpur', status: 'Order Placed'},
        {MedicineId: 1818, MedicineName:'hydroxyzine',  ProductionDate: '2021/04/23', Location: 'Bhopal',     status: 'Order Received'},
        {MedicineId: 9998, MedicineName:'venlafaxine',  ProductionDate: '2021/06/30', Location: 'Chennai',    status: 'Order Placed'},
        {MedicineId: 4569, MedicineName:'perphenazine', ProductionDate: '2021/05/21', Location: 'Lucknow',    status: 'Order Dispatched'},
        {MedicineId: 9999, MedicineName:'venlafaxine',  ProductionDate: '2021/06/30', Location: 'Chennai',    status: 'Order Placed'},
        {MedicineId: 1812, MedicineName:'hydroxyzine',  ProductionDate: '2021/04/23', Location: 'Bhopal',     status: 'Order Received'},
        {MedicineId: 1816, MedicineName:'hydroxyzine',  ProductionDate: '2021/04/23', Location: 'Bhopal',     status: 'Order Received'},
        {MedicineId: 0066, MedicineName:'paracetamol',  ProductionDate: '2021/06/01', Location: 'Mumbai',     status: 'Order Placed'}
      ]
    
      const [details, setDetails] = useState([])
      const [items, setItems] = useState(usersData)
    
      const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
          newDetails.splice(position, 1)
        } else {
          newDetails = [...details, index]
        }
        setDetails(newDetails)
      }
    
    
      const fields = [
        { key: 'name', _style: { width: '40%'} },
        'registered',
        { key: 'role', _style: { width: '20%'} },
        { key: 'status', _style: { width: '20%'} },
        {
          key: 'show_details',
          label: '',
          _style: { width: '1%' },
          sorter: false,
          filter: false
        }
      ]
    
      const getBadge = (status)=>{
        switch (status) {
          case 'Active': return 'success'
          case 'Inactive': return 'secondary'
          case 'Pending': return 'warning'
          case 'Banned': return 'danger'
          default: return 'primary'
        }
      }
    
      return (
        <CCard>
        <CCardHeader>Table</CCardHeader>
        <CCardBody>
        <CDataTable
          items={usersData}
          fields={fields}
          columnFilter
          tableFilter
          footer
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots = {{
            'status':
              (item)=>(
                <td>
                  <CBadge color={getBadge(item.status)}>
                    {item.status}
                  </CBadge>
                </td>
              ),
            'show_details':
              (item, index)=>{
                return (
                  <td className="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={()=>{toggleDetails(index)}}
                    >
                      {details.includes(index) ? 'Hide' : 'Show'}
                    </CButton>
                  </td>
                  )
              },
            'details':
                (item, index)=>{
                  return (
                  <CCollapse show={details.includes(index)}>
                    <CCardBody>
                      <h4>
                        {item.username}
                      </h4>
                      <p className="text-muted">User since: {item.registered}</p>
                      <CButton size="sm" color="info">
                        User Settings
                      </CButton>
                      <CButton size="sm" color="danger" className="ml-1">
                        Delete
                      </CButton>
                    </CCardBody>
                  </CCollapse>
                )
              }
          }}
        />
        </CCardBody>
        </CCard>
        
      )
      
      
}


export default Index


