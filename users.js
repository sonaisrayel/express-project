

export const getUsers = async () => {
 return  fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(response => response.json())
}







