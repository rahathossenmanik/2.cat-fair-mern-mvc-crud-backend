import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
const Field = Form.Item;

const Create = () => {
  const [author, setAuthor] = useState();

  const [redirect, setRedirect] = useState(false);

  const initialValues = {
    givenName: '',
    lastName: '',
    country: '',
    birthdate: ''
  };

  const handleInputChange = (event, { name, value }) => {
    setAuthor((previousValue) => ({ ...previousValue, [name]: value }));
  };

  const handleFormSubmission = () => {
    axios
      .post('/api/authors', author)
      .then(() => {
        setRedirect(true);
      })
      .catch(() => {
        alert('An Error Occured');
      });
  };

  const handleFormCancellation = () => {
    setRedirect(true);
  };

  const handleFormReset = () => {
    setAuthor({
      givenName: '',
      lastName: '',
      country: '',
      birthdate: ''
    });
  };

  const onFinish = (values) => {
    const payload = { ...values, birthdate: values?.birthdate?.$d };
    console.log(payload);
    axios
      .post('/api/authors', payload)
      .then(() => {
        setRedirect(true);
      })
      .catch(() => {
        alert('An Error Occured');
      });
  };

  return (
    <>
      {redirect ? (
        <Navigate to="/authors" push />
      ) : (
        <>
          <Form initialValues={initialValues} onFinish={onFinish} autoComplete="off" layout="vertical">
            <Row>
              <Col lg="8" md="12" className="p-2">
                <Field
                  label="First Name"
                  name="givenName"
                  rules={[{ required: true, message: 'Please input your first name!' }]}>
                  <Input />
                </Field>
              </Col>

              <Col lg="8" md="12" className="p-2">
                <Field
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true, message: 'Please input your last name!' }]}>
                  <Input />
                </Field>
              </Col>

              <Col lg="8" md="12" className="p-2">
                <Field label="Country" name="country">
                  <Input />
                </Field>
              </Col>

              <Col lg="8" md="12" className="p-2">
                <Field label="Date of Birth" name="birthdate">
                  <DatePicker />
                </Field>
              </Col>
            </Row>

            <Row className="p-2">
              <Button type="primary" htmlType="submit" className="me-2">
                Submit
              </Button>
              <Button type="primary" ghost htmlType="button" onClick={() => {}}>
                Reset
              </Button>
            </Row>
          </Form>
        </>
      )}
    </>
  );
};

export default Create;
