



module.exports.getAllProducts = (req, res) => {
  // console.log(req.params);
  //console.log(req.query);
  return res.status(200).json(
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    }
  );
}