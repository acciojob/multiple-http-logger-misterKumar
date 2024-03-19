const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Don't change the above line
// Write your code here
async function makeRequests() {
  for (let i = 0; i < urls.length; i++) {

    try {
      const response = await fetch(urls[i]);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log( { body: data.body, id: data.id, title: data.title, userId: data.userId });
    } catch (error) {
      console.error(error);
    }
    console.log('\n');
  }
}

// Call the function to make requests
makeRequests();

