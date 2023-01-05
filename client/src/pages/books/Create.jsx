import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
const Field = Form.Item;

const Create = () => {
  // const [book, setBook] = useState();
  const [authors, setAuthors] = useState([]);

  const initialValues = {
    title: '',
    author: '',
    genre: '',
    publicationDate: ''
  };

  useEffect(() => {
    axios.get('/api/authors/').then((response) => {
      setAuthors(
        response.data.map((author) => ({
          label: `${author.givenName} ${author.lastName}`,
          value: author._id
        }))
      );
    });
  }, []);

  const [redirect, setRedirect] = useState(false);

  // const handleInputChange = (event, { name, value }) => {
  //   setBook((previousValue) => ({ ...previousValue, [name]: value }));
  // };

  // const handleFormCancellation = () => {
  //   setRedirect(true);
  // };

  // const handleFormReset = () => {
  //   setBook({
  //     title: '',
  //     author: '',
  //     genre: '',
  //     publicationDate: ''
  //   });
  // };

  const onFinish = (values) => {
    const payload = { ...values, publicationDate: values?.publicationDate?.$d };
    console.log(payload);
    try {
      axios.post('/api/books', payload);
      setRedirect(true);
    } catch (error) {
      alert('An Error Occured');
    }
  };

  return (
    <>
      {redirect ? (
        <Navigate to="/books" push />
      ) : (
        <>
          <Form initialValues={initialValues} onFinish={onFinish} autoComplete="off" layout="vertical">
            <Row>
              <Col lg="8" md="12" className="p-2">
                <Field label="Title" name="title" rules={[{ required: true, message: 'Title is required!' }]}>
                  <Input />
                </Field>
              </Col>

              <Col lg="8" md="12" className="p-2">
                <Field label="Author" name="author" rules={[{ required: true, message: 'Author is required!' }]}>
                  <Select options={authors} />
                </Field>
              </Col>

              <Col lg="8" md="12" className="p-2">
                <Field label="Genre" name="genre">
                  <Input />
                </Field>
              </Col>

              <Col lg="8" md="12" className="p-2">
                <Field label="Publication Date" name="publicationDate">
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
