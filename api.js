// import fs from "node:fs";
// import axios from "axios";
// import FormData from "form-data";

// const formData = {
//     prompt: "A large school building displaying an emblem that contains a crescent moon",
//     output_format: "jpeg"
// };

// const response = await axios.postForm(
//     `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
//     axios.toFormData(formData, new FormData()),
//     {
//         validateStatus: undefined,
//         responseType: "arraybuffer",
//         headers: {
//             Authorization: `Bearer ${MYAPIKEY}`,
//             Accept: "image/*"
//         },
//     },
// );

// if (response.status === 200) {
//     fs.writeFileSync("./school.jpeg", Buffer.from(response.data));
// } else {
//     throw new Error(`${response.status}: ${response.data.toString()}`);
// }