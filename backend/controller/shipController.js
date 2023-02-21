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

exports.new = function(res, req){
    let lengthArray = arrayData.length
    let newID = arrayData[lengthArray -1].id + 1
    let body = res.body;
    let tmpArrayData = arrayData
    body.id = newID;
    tmpArrayData.push(body)

    fs.writeFile(filePath, JSON.stringify(tmpArrayData), function(err){
        if(err){
            req.status(500).json({message:'Error al insertar datos'})
        }
    })

    return req.json({message: 'dato creado con éxito'})
}