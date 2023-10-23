const {     Router  } = require('express');

const router = Router();

router.post('/login',(req,rep)=>{
 rep.json({ message : 'Success Login'})
 console.log(req.body)
});


module.exports = router