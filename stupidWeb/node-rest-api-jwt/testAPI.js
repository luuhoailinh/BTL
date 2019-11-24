const axios = require('axios');

axios.post('http://localhost:3000/users/authenticate', {email : "thinh123@abc.com", password : "123456"}).then(res =>{
    console.log(res.data);
})