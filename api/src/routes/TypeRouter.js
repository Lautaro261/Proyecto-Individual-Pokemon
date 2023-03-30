const { Router } = require('express')
const handlerGetType = require('../controllers/handlers/handlerGetType');


const typeRouter = Router();

typeRouter.get("/", handlerGetType);


module.exports = typeRouter;