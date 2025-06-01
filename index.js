const express = require('express');
const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes'));


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    }
);