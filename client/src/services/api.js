import axios from 'axios';

const api = {
  request: async ({ method, data = null, path, config }) => {
    if (path[0] !== '/') {
      throw new Error(
        'Please start the path with a `/` character. You supplied: ',
        path
      );
    }

    var payload = {
      method,
      url: 'http://localhost:5000' + path,
    };

    // //optional params
    // if (params.auth) {
    // 	payload.config['Authorization'] = params.auth;
    // }

    if (data) {
      payload.data = data;
    }

    if (config) {
      payload.config = config;
    }

    try {
      const response = await axios(payload);

      return {
        success: true,
        data: response.data,
        headers: response.headers,
      };
    } catch (error) {
      console.error(error);

      if (error.response) {
        return error.response.data;
      }

      throw error;
    }
  },
};

export default api;
