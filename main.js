//GET REQUEST
function getTodos(){
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      params: {
        _limit : 5
      }
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

//POST REQUEST
function addTodos(){
    
  axios.post('https://jsonplaceholder.typicode.com/todos/1',
  {
    title: 'New Todo',
    completed: false
})
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

//PUT/PATCH REQUESTS
//updates are focused on an individual item
function updateTodos(){
    axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
      title: 'Updated Todo',
      completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

//DELETE Requests
//Delete request need to have an id for delete or else everything will be deleted
function removeTodos(){
    axios.delete('https://jsonplaceholder.typicode.com/todos/1',{
      title: 'Data Has Been Deleted'
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// Simultaneous DATA
function getData(){
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(
      axios.spread((todos, posts) => showOutput(posts))
    )
    .catch(err => console.error(err));
}

//Custom Headers
function customHeaders(){
console.log('Custom Headers');
}

//Transform Requests & Responses
function transformResponse(){
    console.log('Transform Response');
}

//Error Handling
function errorHandling(){
    console.log('Error Handling');
}

//Cancel Token
function cancelToken(){
    console.log('Cancel Token');
}









function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
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
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
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
document.getElementById("POST").addEventListener('click', addTodos);
document.getElementById("update").addEventListener('click', updateTodos);
document.getElementById("delete").addEventListener('click', removeTodos);
document.getElementById("sim").addEventListener('click', getData);
document.getElementById("headers").addEventListener('click', customHeaders);
document.getElementById("transform").addEventListener('click', transformResponse);
document.getElementById("error").addEventListener('click', errorHandling);
document.getElementById("cancel").addEventListener('click', cancelToken);
