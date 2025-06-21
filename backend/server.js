import express from 'express';

const app = express();

app.get("/api/notes", (req, res) => {
    res.send('you got this notes');
})
app.listen(5001, () => {
    console.log('Server started on')
})