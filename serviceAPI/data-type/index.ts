export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  name: string;
  email: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}
export interface ProductType {
  id: number;
  name: string;
  price: string;
}
export interface ProductDetailType {
  id: number;
  name: string;
  price: string;
}
