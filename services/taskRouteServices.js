// function to check if task is open or not
const isOpen = (requestBody) => {
    const { dependencyGraph, currentState, task } = requestBody;
    const { tasks } = dependencyGraph;
    const { tasks: taskStatuses } = currentState;
    let openArr = [];
    // to check dependency
    if (tasks[task].dependency.length === 0)
        return true;
    for (let d of tasks[task].dependency) {
        if (taskStatuses[d].status === 'completed')
            openArr.push(true);

        else openArr.push(false);

    }
    if (openArr.indexOf(false) === -1)
        return true;
    return false;
}



// function to check circular dependency
const isCircularDependency = (requestBody) => {
    const { tasks } = requestBody.dependencyGraph;
    const visited = [];
    const stack = [];
    let taskObj = {};
    for (let i in tasks) {
        taskObj[i] = tasks[i].dependency;
    }
    for (let i in visited) {
        visited[i] = false;
        stack[i] = false;
    }
    for (let index in tasks) {
        if (!visited[index]) {
            if (circularCheckService(index, visited, stack, taskObj))
                return true;
        }


    }
    return false;

}

function circularCheckService(index, stack, visited, taskObj) {
    visited[index] = true;
    stack[index] = true;

    for (dep of taskObj[index]) {
        if (!visited[dep]) {
            if (circularCheckService(dep, stack, visited, taskObj))
                return true;
        }

        else if (stack[dep])
            return true;
    }
    stack[dep] = false;
    return false;
}

module.exports = {
    isOpen,
    isCircularDependency
}