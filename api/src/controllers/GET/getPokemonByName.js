const getPokemonsByName = (req, res)=>{
    const nameQuery =  req.query.name;
    console.log(req.query)
    res.status(201).json(nameQuery)
}

module.exports= getPokemonsByName