import AsyncStorage from '@react-native-community/async-storage';

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // refresh(); // TODO
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const login = (dataToSend) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dataToSend),
  };

  return fetch(`${global.HOST}/api/token/login/`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      // save login & password
      AsyncStorage.setItem('credentials', JSON.stringify(dataToSend));
      return data;
    });
}
