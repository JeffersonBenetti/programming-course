import axios from 'axios';

function server() {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/movie_id/videos',
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDgxY2QyYjc2YjRjOWFjMDk1ZDcwZDVkN2RhODE4NCIsIm5iZiI6MTcyMjM1NDA2Ni44MzAwMDAyLCJzdWIiOiI2NmE5MDk5Mjc5Y2U2MzVlZDM0YmMwYjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._B1DVOPJS4_4Gjh11OozOXotO3G0silFLY8DHhnbukw'
        }
      };
      
      axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
}

export default server
