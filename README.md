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

```bash
3d_portfolio/
  |- public/
    |-- favicon.ico
  |- src/
    |-- assets/
        |--- onboarding/
        |--- 3d/
        |--- icons/
        |--- images/
        |--- sakura.mp3
    |-- components/
        |--- index.js
    |-- constants/
        |--- index.js
    |-- hooks/
        |--- useAlert.js
    |-- models/
        |--- index.js
    |-- pages/
        |--- index.js
    |-- App.jsx
    |-- index.css
    |-- main.jsx
  |- .env.local
  |- .env.example
  |- vite.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.js
  |- .eslintrc.cjs
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in root folder.
4. Contents of `.env.local`:

```bash
# .env.local file
VITE_APP_EMAILJS_SERVICE_ID=service_xxxxxxxxxxxxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxx
VITE_APP_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_TO_EMAIL=<your-email-here>
```

5. Open terminal in root directory. Run `npm install` or `yarn install`.

6. Create new account in [EmailJS](emailjs.com "EmailJS")

7. From dashboard Choose Email Services > Add New Service and connect your mail to emailjs.

**NOTE:** Make Sure you type same email in `VITE_APP_EMAILJS_TO_EMAIL` in `.env.local`

8. Once, New service is configured, copy your **service id** to `VITE_APP_EMAILJS_SERVICE_ID`

9. Now, go to Email Templates > Create New Template to create your mail template. Once it is done, you can copy **Template ID** to `VITE_APP_EMAILJS_TEMPLATE_ID`

10. To get your **Public Key**, click on your username on navbar and go to account settings > Copy Public Key to `VITE_APP_EMAILJS_PUBLIC_KEY`

![Copy public key](/.github/images/step_emailjs.png "Copy public key")

11. Now app is fully configured :+1: and you can start using this app using `npm run dev` or `yarn run dev`. The app is created using vite.

### :books: Additional Resources

- ThreeJS Documentation: https://threejs.org/docs/
- EmailJS Documentation: https://www.emailjs.com/docs/
- Vite Documentation: https://vitejs.dev/guide/

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Modern Animations using Three JS](/.github/images/img1.png "Modern Animations using Three JS")

![Showcase your Skills](/.github/images/img2.png "Showcase your Skills")

![Showcase your Projects](/.github/images/img3.png "Showcase your Projects")

![Working Contact Form](/.github/images/img4.png "Working Contact Form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Vite JS](https://skillicons.dev/icons?i=vite "Vite JS")](https://vitejs.dev/ "Vite JS") [![JavaScript](https://skillicons.dev/icons?i=js "JavaScript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/ "JavaScript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.com/ "Netlify") [![Three JS](https://skillicons.dev/icons?i=threejs "Three JS")](https://threejs.org/ "Three JS")

## :wrench: Stats

[![Stats for this App](/.github/images/stats.svg "Stats for this App")](https://pagespeed-insights-svg.glitch.me/?url=https://3-dportfolio.netlify.app/ "Stats for this App")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in My Portfolio

- [React Three Drei](https://github.com/pmndrs/drei "React Three Drei")
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber "React Three Fiber")
- [React Vertical Timeline Component](https://stephane-monnot.github.io/react-vertical-timeline/ "React Vertical Timeline Component")
- [React Router DOM](https://reactrouter.com/ "React Router DOM")
- [Prettier](https://prettier.io "Prettier")
- [ESLint](https://eslint.org "ESLint")

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCNAz_hUVBG2ZUN8TVm0bmYw "Subscribe my Channel")

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
