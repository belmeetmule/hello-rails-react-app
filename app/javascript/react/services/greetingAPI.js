// A mock function to mimic making an async request for data
const baseURL = "http://localhost:3000/random_greeting";


 export const fetchGreeting = () => {
    const response = fetch(baseURL)
                    .then((response) => response.json());
    return response;
  }