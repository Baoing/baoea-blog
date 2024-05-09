// Function to make a GET request
async function getRequest(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the GET request:', error);
      // You can handle errors here, like showing a message to the user
      return null;
    }
  }
  
  // Function to make a POST request
  async function postRequest(url: string, data: any): Promise<any> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('There was a problem with the POST request:', error);
      // You can handle errors here, like showing a message to the user
      return null;
    }
  }

  export {getRequest, postRequest}