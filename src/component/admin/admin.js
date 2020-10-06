import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Divider, Table } from 'antd';
import Search from 'antd/lib/input/Search';

import Column from 'antd/lib/table/Column';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleData, getdata } from '../../redux/action/admin';
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
        <Button onClick={() => DeleteItem(record)} shape="circle" type="button" ><DeleteOutlined /></Button>
        <Button onClick={() => OpenModalEdit(record)} className="ml-2" shape="circle" ><EditOutlined /></Button>
      </div>
    },

  ];

  useEffect(() => {
    dispatch(getdata())
  }, []);
  const data = useSelector(state => state.getdataReducer.lists);
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
    if (data) {
      handleCancel();
    }
    else {
      return;
    }
  }
  return (
    <>
      {isAuthenticated ? (
        <div className="admin">
          <h2 className="admin-title">Wellcome Admin {user.nickname}</h2>
          <div className="d-flex justify-content-between admin-header">
            <Search className="admin-header_search" placeholder="input search text" onSearch={value => console.log(value)} enterButton />
            <Button className="admin-header_newemployee" onClick={showModal} type="primary"><UserAddOutlined /> New Employee</Button>
            <ModalAddEmployee AddEmployee={AddEmployee} isModal={isModal} handleOk={handleOk} handleCancel={handleCancel} />
          </div>
          <div className="mt-4">
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
          <ModalEditData data={dataEdit} isModalEdit={isModalEdit} CanCleModalEdit={CanCleModalEdit} handleOK={handleOK} />
        </div>
      ) : ('')}
    </>
  )
}
export default Admin;
