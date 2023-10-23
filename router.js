const {     Router  } = require('express');

const router = Router();

router.post('/login',(req,rep)=>{
 rep.json({ message : req.body.name +  " " + req.body.pwd})
 console.log(req.body)
});


module.exports = router