import axios from 'axios';

const instance = axios.create({
    //API(cloud function)URL
   
     baseurl: 'https://us-central1-fir-66721.cloudfunctions.net/api',
});
export default instance;