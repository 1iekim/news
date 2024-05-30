class Loader {
  constructor(baseLink, options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} },
    callback = () => {
      console.log("No callback for GET response!");
    }
  ) {
    this.load("GET", endpoint, callback, options);
  }

  errorHandler(res) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl(options, endpoint) {
    const urlOptions = { ...options, ...this.options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(endpoint, callback, options = {}) {
    fetch(this.makeUrl(options, endpoint))
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.log(err));
  }
}

export default Loader;
