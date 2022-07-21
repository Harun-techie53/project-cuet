export const getAuthToken = () => {
  const authToken = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null;

  return authToken;
}

export const getRegisteredConfig = () => {
    const authToken = getAuthToken();
    const config = {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }

    return config;
}

export const getApplicationConfig = () => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  return config;
}