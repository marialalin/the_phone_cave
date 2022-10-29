const phones = require("../data/phones.json")

module.exports.list = (req, res, next) => {
  res.json(phones)
  console.log(phones)
    
};

module.exports.detail = (req, res, next ) => {
  
  const filteredPhone = phones.filter((phone) => phone.id === req.params.id)
  res.json(filteredPhone)
  console.log(filteredPhone)
}