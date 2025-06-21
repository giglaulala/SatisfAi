/// <reference types="vite/client" />

declare module "*.png" {
  const value: string;
  export default value;
}

declare module '*.PNG' {
    const value: any;
    export default value;
}
