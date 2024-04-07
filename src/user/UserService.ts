import pokerApi from "../services/poker-api";

export interface User {
  loginId: string,
  password: string,
  email: string,
  alias?: string,
  name: string,
  phone: string
}

export interface RegisterUserRequest {
  user: User,
  serverPasscode: string
}

export interface AuthenticatedUser {
  user: User,
  token: String
}


class UserService {

  login(loginId: string, password: string) {

    return pokerApi.post<AuthenticatedUser>("/auth/login",
      {
          loginId: loginId,
          password: password,
      }
    );
  }

  registerUser(registerUserRequest: RegisterUserRequest) {
    return pokerApi.post<AuthenticatedUser>("/auth/register", registerUserRequest);
  }

}

export default new UserService();

