const express = require('express');
const app = new express();

app.get('/', (req, res) {
	res.send('Hello, world');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT);