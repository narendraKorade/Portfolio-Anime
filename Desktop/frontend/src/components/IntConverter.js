import { Button, Form, InputNumber } from "antd";
import React, { useState } from "react";

const IntConverter = () => {
    const [roman, setRoman] = useState()

    const onSubmit = (value) => {
        fetch("http://localhost:8000/converter", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ number: value.number })
        }).then(async (res) => {
            let response = await res.json()
            setRoman(response.data)
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <>
            <h1>Integer converter to roman</h1>
            <div className="container">
                <Form name="basic" onFinish={onSubmit}>
                    <Form.Item
                        label="Number"
                        name="number"
                        rules={[
                            {
                                required: true,
                                message: "Please input your number!",
                            },
                            {
                                type: "number",
                                min: 0,
                                max: 99,
                                message: "Only number 0 to 99 is allowed!"
                            }
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="result">
                <h4>Roman : <strong>{roman}</strong></h4>
            </div>
        </>
    );
};

export default IntConverter;
