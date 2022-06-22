export interface ICurrentUser {
  id: string;
  username: string;
  posts: string[];
}

export interface ILoginFormValues {
  username: string;
  password: string;
}

export interface IDBUser extends ICurrentUser {
  password: string;
}

export enum ResponseStatusEnum {
  LOADING = 'loading',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
}

export interface IAuthState {
  user: ICurrentUser | null;
  isLoading: boolean;
  error: string | null;
  status: ResponseStatusEnum | null;
}
