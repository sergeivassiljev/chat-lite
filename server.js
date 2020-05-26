const express = require('express');

const app = express();

const rooms = new Map();

app.get('/rooms', (req, res) => { //if get request then do this func
    rooms.set('hello');
    res.json(rooms);
});

app.listen(9999, (err) => {
    if(err){
        throw Error(err);
    }
    console.log('Server is runnig');
});

