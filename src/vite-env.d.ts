/// <reference types="vite/client" />
/// <reference types="@react-three/fiber" />

interface ImportMetaEnv {
  readonly VITE_APP_EMAILJS_SERVICE_ID: string;
  readonly VITE_APP_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_APP_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_APP_EMAILJS_TO_EMAIL: string;
}

declare module "*.glb" {
  const src: string;
  export default src;
}
