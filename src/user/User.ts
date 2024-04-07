export interface User {
  loginId: string,
  password: string,
  email: string,
  alias?: string,
  name: string,
  phone: string
}

export interface AuthenticatedUser {
  user: User,
  jwt: String
}

