//Demonstrate fetching data from an API asynchronously using async/await in TypeScript.

//Define an asynchronous function responsible for retrieving data from a specified API endpoint. The function uses async/await to fetch data from the API and handle the response, ensuring the structure aligns with the defined interface.

//Show how the function handles the asynchronous operation, fetching data from the JSONPlaceholder API, and showcases the fetched data, while also managing errors if encountered during the process.

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  async function fetchPosts(): Promise<Post[]> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  async function main() {
    try {
      const posts = await fetchPosts();
      console.log('Fetched Posts:', posts);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  main();
  

