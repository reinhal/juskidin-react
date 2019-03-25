import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 31140139079ab3b50d50f0954070a6425908bcf6fed43c17c663a57814511e62'
  }
});