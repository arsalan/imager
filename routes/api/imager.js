const fs = require("node:fs");
const axios = require("axios");
const FormData = require("form-data");

const express = require('express');
const router = express.Router();



// Define a route
router.get('/', async (req, res) => {
    const MYAPIKEY = process.env.MYAPIKEY;
    console.log('API Key: ' + MYAPIKEY);

    const formData = {
        prompt: "A group of elementary school students laughing while studying Computer Science in a summer camp",
        output_format: "jpeg"
    };

    const response = await axios.postForm(
        `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
        axios.toFormData(formData, new FormData()),
        {
            validateStatus: undefined,
            responseType: "arraybuffer",
            headers: {
                Authorization: `Bearer ${MYAPIKEY}`,
                Accept: "image/*"
            },
        },
    );

    const {
        v1: uuidv1,
        v4: uuidv4,
    } = require('uuid');

    if (response.status === 200) {
        res.set('Content-Disposition', `attachment; filename="${uuidv4()}.jpg"`);
        res.send(response.data);
        fs.writeFileSync("./school.jpeg", Buffer.from(response.data));
    } else {
        throw new Error(`${response.status}: ${response.data.toString()}`);
    }
    // res.send('<h1>this is imager route</h1>');// this gets executed when user visit http://localhost:3000/imager
});

router.get('/101', (req, res) => {
    res.send('this is imager 101 route');// this gets executed when user visit http://localhost:3000/imager/101
});

router.get('/102', (req, res) => {
    res.send('this is imager 102 route');// this gets executed when user visit http://localhost:3000/imager/102
});

// export the router module so that server.js file can use it
module.exports = router;