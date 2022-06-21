/// <reference types="react" />

interface IHeaderProps {
  userName: string;
}

declare module 'uiKit/Header' {
  export const Header: React.FC<IHeaderProps>
}
