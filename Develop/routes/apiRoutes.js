const fs = require('fs');


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });
//adds note
    app.post("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", 'utf8', (err, data) => {
            if (err) throw err;
            let newData = JSON.parse(data);
            let body = JSON.stringify(req.body);
            body = JSON.parse(body);
            uniqID = Math.floor(Math.random() * 10000);
            console.log(uniqID);
            newData.push({ ...body, "id": uniqID });
            newData = JSON.stringify(newData);
            fs.writeFile('./db/db.json', newData, (err, data) => {
                res.sendStatus(200);
            });
        });
    });

    //removes note
    app.delete("/api/notes/:id", function (req, res) {
        let id = req.params.id
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) throw err;
            let newData = JSON.parse(data).filter(each => each.id != id);
            newData = JSON.stringify(newData);
            fs.writeFile('./db/db.json', newData, (err, data) => {
                res.send(newData);
            });
        });
    });
};