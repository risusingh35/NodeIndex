console.log("---------Chaining Promises---------");
const fetchData = () => new Promise((resolve) => {
    console.log('fetchData.....');
    setTimeout(() => resolve('Data fetched'), 1000);
  });
  
  const processData = (data) => new Promise((resolve) => {
    console.log('processData.....',data);
    setTimeout(() => resolve(data + ' and processed'), 1000);
  });
  
  fetchData()
    .then(data => processData(data))
    .then(result => console.log(result))
    .catch(error => console.error(error));
  