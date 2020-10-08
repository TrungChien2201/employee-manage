import { Divider, Modal } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import React, { useRef } from 'react';
import { FormInstance } from 'antd/lib/form';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        'date': '${label} is not validate date!',
        'number': '${label} is not a validate number!',
    },
    number: {
        'range': '${label} must be between ${min} and ${max}',
    },
};
const ModalAddEmployee = ({ isModal, handleOk, handleCancel ,AddEmployee}) => {
    const formRef = useRef(null);
 
    const onFinish = user => {
        AddEmployee(user.user);
        handleCancel()
        if (formRef.current) {
            formRef.current.resetFields()
        }
    };
    return (
        <Modal
            title="Add Employee"
            visible={isModal}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            footer= ""
        >
            <Form  {...layout}  ref={formRef} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'dateofbirth']} label="Date of birth" rules={[{required: true, type: 'date' }]}>
                    <Input type="date"/>
                </Form.Item>
                <Form.Item name={['user', 'dayin']} label="Day in" rules={[{required: true, type: 'date' }]}>
                    <Input type="date" />
                </Form.Item>
                <Form.Item name={['user', 'address']} label="Address" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'unit']} label="Unit" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'salary']} label="Salary" rules={[{required: true,type: 'number'}]}>
                    <InputNumber className="w-100" />
                </Form.Item>
                <Divider></Divider>
                <Form.Item className="mt-3 " wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        Add Employee
                    </Button>
                    <Button  onClick={handleOk} className="ml-3">
                       Cancle
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalAddEmployee;
