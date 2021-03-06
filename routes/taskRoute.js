
// Assuming if a task is dependent on multiple tasks (1: [2, 3]) then all need to be completed to do that particular task (which is task no. 1 here).

const router = require('express').Router();
const { isOpen, isCircularDependency } = require('../services/taskRouteServices');

router.get('/', (req, res) => { 
    const requestBody = req.body;

    // checks for circular dependency of tasks
    if (isCircularDependency(requestBody))
        return res.status(400).send({ Error: 'Circular dependency found in tasks. Please check tasks again.' });
    
    // checks task is open or not
    if (isOpen(requestBody))
        return res.status(200).send({ open: true });
    
    return res.status(200).send({ open: false });
});



module.exports = router;