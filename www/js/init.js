const apiUrl = 'https://api.unsplash.com/photos/random';
const params = {
  client_id: 'jstPdXNyNQf_TMqJBymDqwmEw4r-GWTrGLP85KQEqHs',
  orientation: 'landscape',
  widths: 1920
};

const queryParams = new URLSearchParams();

for (const key in params) {
  queryParams.append(key, params[key]);
}

const requestUrl = `${apiUrl}?${queryParams.toString()}`;

fetch(requestUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code: ' + response.status);
    }
  })
  .then(data => {
    const imageUrl = data.urls.full;
    document.querySelector('.presentation').style.backgroundImage = `url(${imageUrl})`;
  })
  .catch(error => {
    console.error('An error occurred:', error.message);
  });