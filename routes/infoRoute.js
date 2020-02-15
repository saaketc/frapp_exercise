const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send(`
    <html>
    <body>
    <h1>Welcome to frapp task api.</h1>
    <h3>Check whether a task is open or not and also avoid circular dependent tasks. </h3>
    <h4>Request body (JSON) example: </h4>
    <p>
    {
"dependencyGraph":{
 "tasks":[
 { "dependency":[2] }, 
 { "dependency":[0] },
 { "dependency":[1,3] }, 
 { "dependency":[0] }
 ]
},
"currentState":{
"tasks":[
{"status":"pending"},
{"status":"pending"},
{"status":"completed"},
{"status":"pending"}
]
},
"task": 1
} 
</p>
<h4>Response:</h4>
<p>{open: true/false}</p>
<p>In case of circular dependency: {Error: 'Circular dependency found in tasks. Please check tasks again.'}</p>

 <p>API endpoint <a href="https://frapp-exercise.herokuapp.com/api/task">https://frapp-exercise.herokuapp.com/api/task</a></p>
 </body>
 </html>
 `)

});

module.exports = router;