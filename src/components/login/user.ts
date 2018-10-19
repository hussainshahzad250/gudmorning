
export class LoginRequest {

  username?: string;
  password?: string;
  
}

export class LoginResponse {

  message?: string;
  code?: string;
  error?: boolean;
  
}