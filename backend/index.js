const express = require('express');
const { PORT = 3001 } = process.env;
const app = express();
const { spawn } = require('child_process');

app.use(express.json());

// app.get('/api', (req, res) => {
//     res.json({ message: 'placeholder test message' });
// });

app.post('/predict', (req, res) => {
    const data = req.body;
    console.log(data);

    const args = [
        './backend/predict.py',
        data.age,
        data.sex,
        data.attacked,
        data.fighting,
        data.lonely,
        data.friends,
        data.absence,
        data.student_compassion,
        data.parent_compassion,
        data.underweight,
        data.overweight,
        data.obese
    ];

    const pyScript = spawn('python', args);

    pyScript.stdout.on('data', data => {
        const predictions = JSON.parse(data);
        console.log(predictions);
        res.json(predictions);
    });

    pyScript.stderr.on('data', err => {
        console.error(err.toString());
        res.status(500).send('Error');
    });
});


app.listen(PORT, () => {
    console.log(`Server on ${PORT}`)
});