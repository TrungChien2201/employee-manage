import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Table } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleData, editData, getdata, searchData } from '../../redux/action/admin';
import ModalAddEmployee from '../modal';
import ModalEditData from '../modalEdit';

export const Admin = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const dispatch = useDispatch();

  const DeleteItem = (itemData) => {
    console.log(itemData);
    dispatch(deleData(itemData.id))
  }

  const OpenModalEdit = (e) => {

    setDataEdit(e)
    setIsModalEdit(true)

  }
  const CanCleModalEdit = () => {
    setIsModalEdit(false)
  }
  const handleOK = () => {
    setIsModalEdit(false)
  }
  const columns = [
    {
      key: 1,
      title: 'Employee Code',
      dataIndex: 'employeecode',
    },
    {
      key: 2,
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 3,
      title: 'Date of birth',
      dataIndex: 'dateofbirth',
    },
    {
      key: 4,
      title: 'Day in',
      dataIndex: 'dayin',
    },
    {
      key: 5,
      title: 'Adress',
      dataIndex: 'address',
    },
    {
      key: 6,
      title: 'Unit',
      dataIndex: 'unit',
    },
    {
      key: 7,
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
      key: 8,
      title: '',
      dataIndex: 'action',
      render: (text, record, index) => <div>
        <Button className="btn-delete" onClick={() => DeleteItem(record)} shape="circle" type="button" ><DeleteOutlined /></Button>
        <Button onClick={() => OpenModalEdit(record)} className="ml-2" shape="circle" ><EditOutlined /></Button>
      </div>
    },

  ];

  useEffect(() => {
    dispatch(getdata())
  }, []);
  const data = useSelector(state => state.getdataReducer.lists);
  console.log(data);
  const showModal = () => {
    setIsModal(true)
  };

  const handleOk = e => {
    setIsModal(false)
  };

  const handleCancel = e => {
    setIsModal(false)
  };
  const AddEmployee = (dataNew) => {
    dispatch(addData(dataNew))

    handleCancel();

  }
  const EditEmployee = (data, id) => {
    console.log(data);
    dispatch(editData(data, id))
  }

  const handleSearch = (e) => {
    console.log(e);
    //  const filterData = data.filter(el=> el.employeecode === e)
    //  console.log(filterData);
    dispatch(searchData(e))
  }
  const ClearSearch =() => {
    dispatch(getdata())
  }
  return (
    <>
      {isAuthenticated ? (
        <div className="admin">
          <h2 className="admin-title">Wellcome Admin {user.nickname}</h2>
          <div className="d-flex justify-content-between admin-header">
            <div className="admin-header-left">
              <Search className="admin-header_search" placeholder="input search text" onSearch={(e) => handleSearch(e)} enterButton />
              <Button onClick={ClearSearch} className="admin-header_newemployee ml-3">Reset</Button>
            </div>
            <Button className="admin-header_newemployee" onClick={showModal} type="primary"><UserAddOutlined /> New Employee</Button>
            {isModal === true ? <ModalAddEmployee AddEmployee={AddEmployee} isModal={isModal} handleOk={handleOk} handleCancel={handleCancel} /> : ''}
          </div>
          <div className="mt-4">
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
          {isModalEdit === true ? <ModalEditData data={dataEdit} isModalEdit={isModalEdit} CanCleModalEdit={CanCleModalEdit} handleOK={handleOK} EditEmployee={EditEmployee} /> : ''}
        </div>
      ) : ('')}
    </>
  )
}
export default React.memo(Admin);
