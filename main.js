axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';




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

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }

  };
  axios.post('https://jsonplaceholder.typicode.com/todos',{

      title: 'New Todo',
      completed: false

  },
  config
  )
  .then(res => showOutput(res))
  .catch(err => console.error(err));
 
}

//Transform Requests & Responses
function transformResponse(){
    const option = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
          title: 'Transformers'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
          data.title = data.title.toUpperCase();
          return data;
        })
    };  
    axios(option).then(res=> showOutput(res));
}

//Error Handling
function errorHandling(){
    axios.get('https://jsonplaceholder.typicode.com/todoss',{
    validateStatus: function(status){
      return status < 500; //Rehject only status that is greater than 500
    }
  })
    .then(res=> showOutput(res))
    .catch(err => {
        if (error.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);

        if (error.response.status === 404){
          alert("Error: Page Not Found");
        }
        }
        else if(err.request){
          console.log(err.request);
        }
    });
}

//Cancel Token
function cancelToken(){
    const source = axios.cancelToken.source();

    axios.get('https://jsonplaceholder.typicode.com/todos',
    {
      cancelToken: source.token
    })
    .then(res=> showOutput(res))
    .catch(thrown => {
      if (axios.cancelToken(thrown)){
        console.log('Request Canceled', thrown.message);
      }
  
  });

  if (true){
      source.cancel('Request Cancelled!');
  }
}

axios.interceptors.request.use(config => {
  console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}` );

  return config;
},
  error => {
    return Promise.reject(error);
  });
 
  // AXIOS INSTANCE
  const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
  });

  axiosInstance.get('/comments');






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
