import { Modal } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import React, { useEffect, useState } from 'react';


const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        date: '${label} is not validate date!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const ModalEditData = ({ data, isModalEdit, handleOK, CanCleModalEdit }) => {
    const [form] = Form.useForm();
    console.log('====================================');
    console.log(form);
    console.log('====================================');
    const onFinish = user => {
        debugger;
        console.log(user.user);

    };
    const [dataEdit,setDataEdit] = useState(data);
    React.useEffect(()=>{
          setDataEdit(data);
          debugger
          form.setFieldsValue({
              user: data
          });
    },[data])
      
    
    return (
        <>
            {dataEdit ? (
                <Modal
                    title="Add Employee"
                    visible={isModalEdit}
                    onOk={handleOK}
                    onCancel={CanCleModalEdit}
                    width={1000}
                >

                    <Form form={form} value={data} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item  name={['user', 'employeecode']} label="Employee Code" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'dateofbirth']} label="Date of birth" rules={[{ type: 'date' }]}>
                            <Input type="date" />
                        </Form.Item>
                        <Form.Item name={['user', 'dayin']} label="Day in" rules={[{ type: 'date' }]}>
                            <Input type="date" />
                        </Form.Item>
                        <Form.Item name={['user', 'address']} label="Address" rules={[{ required: true }]}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item name={['user', 'unit']} label="Unit" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'salary']} label="Salary" rules={[{ type: 'number' }]}>
                            <InputNumber className="w-100" />
                        </Form.Item>
                        <Form.Item className="mt-3 " wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                            <Button type="primary" htmlType="submit">
                                Add Employee
                    </Button>
                        </Form.Item>
                    </Form>
                </Modal>)
                : ''}
        </>
    )
}

export default ModalEditData;