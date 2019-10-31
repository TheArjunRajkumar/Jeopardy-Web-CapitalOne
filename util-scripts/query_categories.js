const request = require('request')
const fs = require('fs')

request('http://jservice.io/api/categories?count=100', {json: true}, (err, res, body) => {
    //console.log(body);

    let new_categories = {};

    for (var p in body) {
        new_categories[body[p]['title']] = body[p]['id']
    }

    if (fs.existsSync('../categories.json')) {
        fs.readFile('../categories.json', (err, data) => {
            if (err) { console.log(err) }
            else {
                obj = {...JSON.parse(data), ...new_categories};
                json = JSON.stringify(obj);
                fs.writeFile('../categories.json', json, 'utf8', () => {});
            }
        })
    } else {
        fs.writeFile('../categories.json', JSON.stringify(new_categories), (err) => {});
    }
});
