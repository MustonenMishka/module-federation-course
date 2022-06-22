/// <reference types="react" />

declare module 'uiKit/Header' {
  interface IHeaderProps {
    userName: string;
  }

  export const Header: React.FC<IHeaderProps>;
}

declare module 'postsPage/PostsPage' {
  export const PostsPage: React.FC;
}

declare module 'profilePage/ProfilePage' {
  export const ProfilePage: React.FC;
}

declare module 'authService/store' {
  import { ILoginFormValues } from './types';

  export const signUp: (formValues: ILoginFormValues) => Promise<void>;
  export const signIn: (formValues: ILoginFormValues) => Promise<void>;
}
