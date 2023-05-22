export interface ResponseError {
  message: string;
}
export interface ResponseSuccess<T> {
  data: T;
  total: number;
}
