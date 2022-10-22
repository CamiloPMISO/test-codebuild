/*
Interface for the Register Request (can look different, based on your backend api)
*/
export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

/*
Interface for the Register Response (can look different, based on your backend api)
*/
export interface RegisterResponse {
  status: number;
  message: string;
}

/*
Interface for the Login Request (can look different, based on your backend api)
*/
export interface LoginRequest {
  email: string;
  password: string;
}

/*
Interface for the Login Response (can look different, based on your backend api)
*/
export interface LoginResponse {
  accessToken: string;
  status: number;
  message: string;
}
