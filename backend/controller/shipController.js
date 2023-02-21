const fs = require("fs");
const filePath = 'data.json'
const data = fs.readFileSync(filePath, 'utf8');
const arrayData = JSON.parse(data)


exports.get = function(res, req){
    let id = res.query.id
    if(id){
        let result = arrayData.find(el => el.id === Number(id))
        return req.json(result)
    }
    return req.json(arrayData)
}

exports.post = function(res, req){
    
}