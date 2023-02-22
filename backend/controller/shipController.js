const fs = require("fs");
const filePath = 'data.json'
const data = fs.readFileSync(filePath, 'utf8');
const arrayData = JSON.parse(data)


exports.get = function (res, req) {
    let id = res.query.id;
    let page = res.query.page || 1;
    let limit = res.query.limit || 15;

    //Detalle de una embarcacion
    if (id) {
        let result = arrayData.find(el => el.id === Number(id))
        return req.json(result)
    }

    //Paginacion
    let end = page * limit
    let init =( page - 1 )* limit ;

    let result = arrayData.slice(init , end)
    return req.json(result)
}

exports.new = function (res, req) {
    let lengthArray = arrayData.length
    let newID = arrayData[lengthArray - 1].id + 1
    let body = res.body;
    let tmpArrayData = arrayData
    body.id = newID;
    tmpArrayData.push(body)

    fs.writeFile(filePath, JSON.stringify(tmpArrayData), function (err) {
        if (err) {
            req.status(500).json({ message: 'Error al insertar datos' })
        }
    })

    return req.json({ message: 'Dato creado con éxito' })
}

exports.update = function (res, req) {
    let body = res.body;
    let id = body.id;

    let index = arrayData.map(e => e.id).indexOf(id);
    arrayData.splice(index, 1);

    arrayData.splice(index, 0, body)

    fs.writeFile(filePath, JSON.stringify(arrayData), function (err) {
        if (err) {
            req.status(500).json({ message: 'Error al insertar datos' })
        }
    })

    return req.json({ message: 'Dato actualizado con éxito' })

}

exports.delete = function (res, req) {
    let body = res.body;
    let id = body.id;

    let index = arrayData.map(e => e.id).indexOf(id);
    arrayData.splice(index, 1);

    fs.writeFile(filePath, JSON.stringify(arrayData), function (err) {
        if (err) {
            req.status(500).json({ message: 'Error al insertar datos' })
        }
    })

    return req.json({ message: 'Dato eliminado con éxito' })

}