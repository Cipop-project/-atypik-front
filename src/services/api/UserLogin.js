// const config = { apiUrl: 'localhost:8080/api' }

export default {
  authUser (user) {
    localStorage.setItem('user', JSON.stringify(user))
    console.log('user logged !!')
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(user)
    // }
    // return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse)
  }
}
