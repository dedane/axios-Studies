//GET REQUEST
function getTodos() {
    console.log('GET Request');
}

//POST REQUEST
function addTodos() {
    console.log('POST Requests');
}

//PUT/PATCH REQUESTS
function updateTodos() {
    console.log('PUT/PATCH Request');
}

//DELETE Requests
function removeTodos() {
    console.log('DELETE Requests');
}

// Simultaneous DATA
function getData() {
    console.log('Simultaneous Requests');
}

//Custom Headers
function customHeaders() {
console.log('Custom Headers');
}

//Transform Requests & Responses
function transformResponse() {
    console.log('Transform Response');
}

//Error Handling
function errorHandling() {
    console.log('Error Handling');
}

//Cancel Token
function cancelToken() {
    console.log('Cancel Token');
}

function showOutput(res) {
    document.getElementById('res').innerHTML = `
    
    <div class="card card-body mb-4">
        <h5>Status: $(res.Status)</h5>
    </div>
    
    <div class="card mt-3">
        <div class="card-header">
            Headers
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            Data
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.Data, null, 2)}</pre>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            Config
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
    </div>
`;

    
    
    
}

//Event Listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodos);
document.getElementById('update').addEventListener('click', updateTodos);
document.getElementById('delete').addEventListener('click', removeTodos);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
