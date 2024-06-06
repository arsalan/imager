import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";

const formData = {
    prompt: "A Muslim girl in a Muslim scarf sitting on a carpeted floor reading a book",
    output_format: "jpeg",
    mode: "image-to-image"
};

const response = await axios.postForm(
    `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
    axios.toFormData(formData, new FormData()),
    {
        validateStatus: undefined,
        responseType: "arraybuffer",
        headers: {
            Authorization: `Bearer sk-YRBQ2COfDr2kZoS1bi6qt9umDR4rURkoMwUS0viSN6u55WHR`,
            Accept: "image/*"
        },
    },
);

if (response.status === 200) {
    fs.writeFileSync("./lighthouse.jpeg", Buffer.from(response.data));
} else {
    throw new Error(`${response.status}: ${response.data.toString()}`);
}