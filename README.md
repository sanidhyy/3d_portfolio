<a name="readme-top"></a>

# Amazing 3D Portfolio in React using Three.js

![Amazing 3D Portfolio in React using Three.js](/.github/images/img_main.png "Amazing 3D Portfolio in React using Three.js")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/3d_portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/3d_portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/3d_portfolio/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/3d_portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/3d_portfolio/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/3d_portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/3d_portfolio/commits "Github commits")
[![Netlify Status](https://api.netlify.com/api/v1/badges/7a5537f4-c52f-4f51-b503-9dd5a54853f9/deploy-status)](https://3-dportfolio.netlify.app/ "Netlify Status")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/3d_portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/3d_portfolio/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/3d_portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/3d_portfolio/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of 3D Portfolio.

<!--- FOLDER_STRUCTURE_START --->
```bash
3d_portfolio/
  |- dev-dist/
    |-- registerSW.js
    |-- sw.js
    |-- workbox-16108a29.js
  |- netlify/
    |-- functions/
  |- public/
  |- src/
    |-- assets/
    |-- components/
      |--- Alert.tsx
      |--- Cta.tsx
      |--- HomeInfo.tsx
      |--- index.ts
      |--- Loader.tsx
      |--- Navbar.tsx
      |--- PageTitle.tsx
    |-- constants/
      |--- index.ts
    |-- hooks/
      |--- useAlert.ts
    |-- lib/
      |--- contact.ts
    |-- models/
      |--- Bird.tsx
      |--- Fox.tsx
      |--- index.ts
      |--- Island.tsx
      |--- Plane.tsx
      |--- Sky.tsx
    |-- pages/
      |--- About.tsx
      |--- Contact.tsx
      |--- Home.tsx
      |--- index.ts
      |--- Projects.tsx
    |-- App.tsx
    |-- index.css
    |-- main.tsx
    |-- vite-env.d.ts
  |- .env.example
  |- .env/.env.local
  |- .gitignore
  |- eslint.config.js
  |- index.html
  |- netlify.toml
  |- package.json
  |- pnpm-lock.yaml
  |- pnpm-workspace.yaml
  |- tsconfig.app.json
  |- tsconfig.json
  |- tsconfig.node.json
  |- vite.config.ts
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# resend
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
RESEND_FROM_EMAIL="Your Name <me@example.com>"
CONTACT_TO_EMAIL="contact@example.com"
CONTACT_SITE_URL="https://example.com"
RESEND_TEMPLATE_CONTACT_USER="contact-thank-you"
RESEND_TEMPLATE_CONTACT_ADMIN="contact-admin"

# google recaptcha v3
VITE_RECAPTCHA_SITE_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_SECRET_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_MIN_SCORE="0.5"
```

5. Create an account at [Resend](https://resend.com "Resend") and [add + verify a sending domain](https://resend.com/domains "Resend domains").

6. Create an API key at [Resend API Keys](https://resend.com/api-keys "Resend API keys") with **Sending access**. Copy it to `RESEND_API_KEY`.

7. Set `RESEND_FROM_EMAIL` to an address on that verified domain. Set `CONTACT_TO_EMAIL` to the inbox that should receive new contact notifications. Set `CONTACT_SITE_URL` to your site's public URL (no trailing slash).

8. In [Resend Templates](https://resend.com/templates "Resend templates"), create **two** templates and **Publish** each.

   **Template 1 — thank you to the user**
   - Name: `contact-thank-you`
   - Variables: `USER_NAME`, `USER_MESSAGE`, `SITE_URL`

   **Template 2 — new message to admin**
   - Name: `contact-admin`
   - Variables: `USER_NAME`, `USER_EMAIL`, `USER_MESSAGE`, `SITE_URL`

   Copy each template's alias into `RESEND_TEMPLATE_CONTACT_USER` and `RESEND_TEMPLATE_CONTACT_ADMIN`.

9. Create a [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin/create "Google reCAPTCHA") project. Choose **Score based (v3)**, add your production domain(s) **and** `localhost`, then copy the **Site key** to `VITE_RECAPTCHA_SITE_KEY` and the **Secret key** to `RECAPTCHA_SECRET_KEY`.

10. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `pnpm install --legacy-peer-deps`.

11. Now the app is fully configured 👍 and you can start it with `npm run dev` or `pnpm dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

### :raising_hand: Need Help?

If you run into issues during installation or setup:

- **GitHub Discussions** — [Open a Q&A discussion](https://github.com/sanidhyy/3d_portfolio/discussions/new?category=q-a) for setup and troubleshooting help.
- **Email** — [sanidhyyy@gmail.com](mailto:sanidhyyy@gmail.com)
- **Discord** — `@sanidhyy`

## :camera: Screenshots:

![Modern Animations using Three JS](/.github/images/img1.png "Modern Animations using Three JS")

![Showcase your Skills](/.github/images/img2.png "Showcase your Skills")

![Showcase your Projects](/.github/images/img3.png "Showcase your Projects")

![Working Contact Form](/.github/images/img4.png "Working Contact Form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![TypeScript](https://skillicons.dev/icons?i=ts "TypeScript")](https://www.typescriptlang.org/ "TypeScript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.com/ "Netlify") [![Three JS](https://skillicons.dev/icons?i=threejs "Three JS")](https://threejs.org/ "Three JS")

## :wrench: Stats

[![Stats for this App](/.github/images/stats.svg "Stats for this App")](https://pagespeed.web.dev/analysis?url=https://3-dportfolio.netlify.app/ "Stats for this App")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in My Portfolio

<!--- DEPENDENCIES_START --->
- [@eslint/js](https://www.npmjs.com/package/@eslint/js): ^10.0.1
- [@netlify/functions](https://www.npmjs.com/package/@netlify/functions): ^6.0.0
- [@netlify/vite-plugin](https://www.npmjs.com/package/@netlify/vite-plugin): ^3.0.0
- [@react-spring/three](https://www.npmjs.com/package/@react-spring/three): ^10.1.2
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei): ^10.7.8
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber): ^9.7.0
- [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite): ^4.3.3
- [@types/node](https://www.npmjs.com/package/@types/node): ^26.2.0
- [@types/react](https://www.npmjs.com/package/@types/react): ^19.2.18
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^19.2.5
- [@types/react-vertical-timeline-component](https://www.npmjs.com/package/@types/react-vertical-timeline-component): ^3.3.6
- [@types/three](https://www.npmjs.com/package/@types/three): ^0.185.4
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): ^6.1.1
- [eslint](https://www.npmjs.com/package/eslint): ^10.9.1
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ^7.1.1
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ^0.5.5
- [globals](https://www.npmjs.com/package/globals): ^17.11.0
- [react](https://www.npmjs.com/package/react): ^19.2.8
- [react-dom](https://www.npmjs.com/package/react-dom): ^19.2.8
- [react-google-recaptcha-v3](https://www.npmjs.com/package/react-google-recaptcha-v3): ^1.11.0
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): ^7.18.2
- [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component): ^4.0.0
- [resend](https://www.npmjs.com/package/resend): ^6.24.0
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^4.3.3
- [three](https://www.npmjs.com/package/three): ^0.185.1
- [typescript](https://www.npmjs.com/package/typescript): ^6.0.3
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint): ^8.68.0
- [vite](https://www.npmjs.com/package/vite): ^8.2.2
- [vite-plugin-pwa](https://www.npmjs.com/package/vite-plugin-pwa): ^1.3.0
- [workbox-window](https://www.npmjs.com/package/workbox-window): ^7.0.0

<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/3d_portfolio&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/3d_portfolio&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/3d_portfolio&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/3d_portfolio&type=Timeline" />
  </picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
