/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_GOOGLE_API_URL: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<object, object, unknown>;
  export default component;
}
