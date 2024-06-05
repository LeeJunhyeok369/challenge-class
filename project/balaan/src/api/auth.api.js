class AuthAPI {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  async signUp(user) {
    const path = "/auth/sign-up";
    const data = { email: user.email, password: user.password };

    const response = await this.#axios.post(path, data);
    const result = response.data.result;
    return result;
  }

  async logIn(user) {
    const path = "/auth/log-in";
    const data = { email: user.email, password: user.password };

    const response = await this.#axios.post(path, data);
    const result = response.data.result;
    return result;
  }
  async logOut() {
    const path = "/auth/log-out";

    const response = await this.#axios.delete(path);
    const result = response.data.result;
    return result;
  }

  async refreshToken() {
    const path = "/auth/refresh-token";
    const response = await this.#axios.get(path);
    const result = response.data.result;
    return result;
  }
}

export default AuthAPI;
