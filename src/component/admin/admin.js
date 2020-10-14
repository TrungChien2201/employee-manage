import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Table } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleData, editData, getdata } from '../../redux/action/admin';
import ModalAddEmployee from '../modal';
import ModalEditData from '../modalEdit';
import { Popconfirm, message } from 'antd';
import Fuse from 'fuse.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export const Admin = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const data = useSelector(state => state.getdataReducer.lists);
  const datasearch = useSelector(state => state.getdataReducer.dataSearch);
  const [dataEmployee, setDataEmployee] = useState(data);
  const [dataSearch,setDataSearch] = useState(datasearch);
  const dispatch = useDispatch();

  const DeleteItem = (itemData) => {
    dispatch(deleData(itemData.id))
  }
  function confirm(e) {
    message.success('Delete success');
    DeleteItem(e)
  }

  function cancel(e) {
    message.error('Cancle delete');
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
        <Popconfirm placement="leftTop" title="Bạn chắc chắn muốn xóa nhân viên này ?" onConfirm={() => confirm(record)} onCancel={cancel} okText="Yes" cancelText="No"><Button className="btn-delete" shape="circle" type="button" ><DeleteOutlined /></Button></Popconfirm>
        <Button onClick={() => OpenModalEdit(record)} className="ml-2" shape="circle" ><EditOutlined /></Button>
      </div>
    },

  ];

  useEffect(() => {
    if (isAuthenticated === true) {
      dispatch(getdata())
    }
    else return;
  }, [isAuthenticated,dispatch]);
  
  useEffect(()=> {
     setDataEmployee(data)
  },[data])
  
  useEffect(()=> {
    setDataSearch(datasearch)
 },[datasearch])
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
    dispatch(addData(dataNew));
    handleCancel();
    toast.success('Add employee success');
    

  }
  const EditEmployee = (data, id) => {
    dispatch(editData(data, id))
    toast.success('Edit employee success');
  }
  
  const handleOnchange = (e) => {
    if (e === '') {
      dispatch(getdata())
    }
    
  }
  const handleSearch = (e) => {
    
    const options = {
      includeScore: true,
      // equivalent to `keys: [['author', 'tags', 'value']]`
      keys: ['name']
    }
    
    const fuse = new Fuse(datasearch, options)
    
    const result = fuse.search(e);
    const listResult = [];
    listResult.push(result.map(el=>el.item));
   
    setDataEmployee(listResult[0])
  
  }
  const ClearSearch = () => {
    dispatch(getdata())
  }
  return (
    <>
      {isAuthenticated ? (
        <div className="admin">
          <h2 className="admin-title">Wellcome Admin {user.nickname}</h2>
          <div className="d-flex justify-content-between admin-header">
            <div className="admin-header-left">
              <Search className="admin-header_search" placeholder="input search text" onChange={(e) => handleOnchange(e.target.value)} onSearch={(e) => handleSearch(e)} enterButton />
              <Button onClick={ClearSearch} className="admin-header_newemployee ml-3">Reset</Button>
            </div>
            <Button className="admin-header_newemployee" onClick={showModal} type="primary"><UserAddOutlined /> New Employee</Button>
            <ToastContainer />
            {isModal === true ? <ModalAddEmployee AddEmployee={AddEmployee} isModal={isModal} handleOk={handleOk} handleCancel={handleCancel} /> : ''}
          </div>
          <div className="mt-4">
            <Table columns={columns} dataSource={dataEmployee} size="middle" />
          </div>
          {isModalEdit === true ? <ModalEditData data={dataEdit} isModalEdit={isModalEdit} CanCleModalEdit={CanCleModalEdit} handleOK={handleOK} EditEmployee={EditEmployee} /> : ''}
        </div>
      ) : ('')}
    </>
  )
}
export default React.memo(Admin);
