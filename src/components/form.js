import React from "react";
import { Form, Input, ButtonToolbar, Button, Uploader } from "rsuite";
import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const UserInputForm = () => {
  const handleSubmit = (e) => {
    console.log("UserInput submit");
  };

  return (
    <Form layout="horizontal" fluid onSubmit={handleSubmit}>
      <Form.Group>
        <Form.ControlLabel>
          <p>Title would be here</p>
        </Form.ControlLabel>
      </Form.Group>

      <Form.Group controlId="name-6">
        <Form.ControlLabel>
          <p>Hero name</p>
        </Form.ControlLabel>
        <Form.Control size="lg" name="name" />
        <Form.HelpText>Required</Form.HelpText>
      </Form.Group>
      {/* <Form.Group controlId="email-6">
      <Form.ControlLabel>Email</Form.ControlLabel>v
      <Form.Control size="lg" name="email" type="email" />
      <Form.HelpText tooltip>Required</Form.HelpText>
    </Form.Group> */}

      <Form.Group controlId="heroimage-6">
        <Form.ControlLabel>
          <h5>
            <mark>Hero image: </mark>
          </h5>
        </Form.ControlLabel>
        <Uploader
          size="lg"
          multiple
          listType="picture"
          // action="//jsonplaceholder.typicode.com/posts/"
        >
          <button>
            <CameraRetroIcon />
          </button>
        </Uploader>
      </Form.Group>

      <Form.Group controlId="textarea-6">
        <Form.ControlLabel>
          <h5>Your super story</h5>
        </Form.ControlLabel>
        <Form.Control size="lg" name="textarea" rows={5} accepter={Textarea} />
      </Form.Group>
      <Form.Group>
        <ButtonToolbar>
          <Button fluid size="lg" appearance="primary" type="submit">
            Magic here
          </Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
};

export default UserInputForm;
