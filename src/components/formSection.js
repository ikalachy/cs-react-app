import React, { useState } from "react";
import {
  Form,
//   FormGroup,
  Input,
  Icon,
  Image,
  Text,
  Grid,
  Col,
  Row
} from "rsuite";

export default function FormSection() {
  const [image, setImage] = useState(null);
  const [formValues, setFormValues] = useState({});

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleFormValuesChange = (formValue) => {
    setFormValues(formValue);
  };

  return (
    <Grid fluid>
      <Row className="form-section">
        <Col xs={24} sm={12} md={6}>
          <Form fluid onChange={handleFormValuesChange}>
            <Form.Group>
              <Input name="name" placeholder="Name" />
            </Form.Group>
            <Form.Group>
              <Input name="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Input name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Input
                name="image"
                type="file"
                placeholder="Upload Image"
                onChange={handleImageUpload}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={24} sm={12} md={18}>
          {image ? (
            <img src={image} alt=""  />
          ) : (
            <p>Image</p>
          )}
          <div>{JSON.stringify(formValues, null, 2)}</div>
        </Col>
      </Row>
    </Grid>
  );
}
