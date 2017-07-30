const express = require('express');
const app = express();

const devices = require('./devices');
app.get('/innovation-lab', (req, res) => {
    const random = Math.ceil((Math.random() * 9393)) % devices.length;
    const toIndex = random ? random : 1;
    const result = []
    if (toIndex % 2) {
        for(let i = 0; i <= toIndex; ++i) {
            if(result.length >= 5) {
                break;
            }
            result.push(devices[i])
        }
    } else {
        result.push(devices[toIndex])
        result.push(devices[toIndex-1]);
    }
    res.json(result);
})

app.listen(process.env.PORT || 8000);