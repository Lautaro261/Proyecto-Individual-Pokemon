const { Router } = require('express')
const handlerGetType = require('../handlers/handlerGetType');


const typeRouter = Router();

typeRouter.get("/", handlerGetType);


module.exports = typeRouter;