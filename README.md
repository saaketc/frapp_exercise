# frapp_exercise
API to check whether a given task is open or not, avoiding circular dependent tasks.

API endpoint: /api/task

Request: JSON

body example: 

{

"dependencyGraph":{
	
 "tasks":[
 { "dependency":[1] }, 
 { "dependency":[3] }, 
 { "dependency":[0,3] }, 
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

Response: {open: true/false}

In case of circular dependency: {Error: 'Circular depency found in tasks.'}
