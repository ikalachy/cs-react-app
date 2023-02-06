import React, { useEffect, useState } from "react";
import "rsuite/dist/rsuite.min.css";
import {
  Panel,
  Stack,
  Button,
  Input,
  InputGroup,
  Steps,
  Uploader,
  Divider
} from "rsuite";

import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";
import HeroList from "../components/List";
import { Configuration, OpenAIApi } from "openai";

const CustomInput = ({ ...props }) => (
  <InputGroup style={{ marginRight: 20 }}>
    <Input {...props} />
  </InputGroup>
);

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default function DashboardPage() {
  const [step, setStep] = useState(-1);
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  const [images, setImages] = useState([]);
  const [inputPrompt, setPrompt] = useState("");

  const handleChange = (val, e) => {
    setPrompt(val);
  };

  useEffect(() => {
    console.log("rendering", isLoadingImage, inputPrompt);
  }, [images, step, isLoadingImage]);

  const handleImageGeneration = (e) => {
    console.log("e: ", inputPrompt);

    if (inputPrompt != null && inputPrompt.length >= 0) {
      setIsLoadingImage(true);
      openai
        .createImage({ prompt: inputPrompt, size: "256x256", n: 1 })
        .then((img) => {
          let url = img?.data?.data?.[0]?.url;
          console.log("img");
          setImages([...images, { url: url, prompt: inputPrompt }]);
        })
        .finally(() => setIsLoadingImage(false));
    }
  };

  return (
    <div className="show-container">
      <Panel
        header={
          <Stack direction="column" alignItems="center">
            <h1 className="">AI Hero Generator</h1>
            <h4 className="">Powered by ...</h4>
          </Stack>
        }
      ></Panel>

      <Stack justifyContent="center" alignItems="center">
        <Steps current={step} vertical="false">
          {/* <Steps.Item
            title="Upload image"
            description={
              <Uploader
                size="md"
                multiple
                listType="picture"
                // action="//jsonplaceholder.typicode.com/posts/"
              >
                <button>
                  <CameraRetroIcon />
                </button>
              </Uploader>
            }
          /> */}
          <Steps.Item
            title="Describe your Image"
            description={
              <>
                <Stack spacing={10} alignItems="flex-end" direction="column">
                  <CustomInput
                    as="textarea"
                    rows={3}
                    style={{ width: 300 }}
                    placeholder="Describe your ideas and dreams..."
                    size="lg"
                    onChange={handleChange}
                  />
                  <Button
                    onClick={handleImageGeneration}
                    loading={isLoadingImage}
                    size="lg"
                  >
                    Magic happens here
                  </Button>
                </Stack>
              </>
            }
          />
          {/* <Steps.Item
            title="Generate"
            description={
              <Button
                onClick={handleImageGeneration}
                loading={isLoadingImage}
                size="lg"
              >
                Magic happens here
              </Button>
            }
          /> */}
        </Steps>
      </Stack>

      <Divider />
      {images.length > 0 && <HeroList images={images} count={images.length} />}
    </div>
  );
}
