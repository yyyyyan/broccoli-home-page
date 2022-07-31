export function hasKey<K extends string, T extends object>(
  k: K, o: T
): o is T & Record<K, unknown> {
  return k in o;
}

export interface IResponse<T> {
  success: boolean;
  message: string;
  payload: T;
}
