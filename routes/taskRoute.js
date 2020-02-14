const router = require('express').Router();
const { isOpen, isCircularDependency } = require('../services/taskRouteServices');

router.get('/', (req, res) => { 
    const requestBody = req.body;
    if (isCircularDependency(requestBody))
        return res.status(400).send({ Error: 'Cyclic dependency found in tasks.' });
    
    if (isOpen(requestBody))
        return res.status(200).send({ open: true });
    
    return res.status(400).send({ open: false });
});



module.exports = router;