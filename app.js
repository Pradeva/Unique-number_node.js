const express = require('express');
const app = express();

const takenNumbers =[];

app.get('/api/get', (req, res) => {
    const inputNumber = parseInt(req.query.number);

    if (isNaN(inputNumber) || inputNumber < 0) {
        return res.status(400).json({ error: 'Invalid input'});
    }

    let outputNumber = inputNumber;

    while (takenNumbers.includes(outputNumber)) {
        outputNumber++;
    }

    takenNumbers.push(outputNumber);
    console.log(takenNumbers);

    return res.status(200).json({ output: outputNumber });
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});