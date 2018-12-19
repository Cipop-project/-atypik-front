// const config = { apiUrl: 'localhost:8080/api' }

export default {
  registerUser (user) {
    localStorage.setItem('user', JSON.stringify(user))
    console.log('user registered !!')
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(user)
    // }
    // return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse)
  }
}
