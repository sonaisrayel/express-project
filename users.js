

export const getUsers = async () => {
 return  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
}







