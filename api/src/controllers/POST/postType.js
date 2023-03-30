const { Type } = require("../../db");

const postType = async(type)=> await Type.create({name: type});

module.exports = postType;