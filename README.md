<div id="top"></div>
<div align="center">

![Website](https://img.shields.io/website?down_color=red&down_message=DOWN&label=NETLIFY&logo=netlify&logoColor=white&style=for-the-badge&up_color=brightgreen&up_message=ACTIVE&url=https%3A%2F%2Freact-novels-public.netlify.app%2F)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/Yazdun/react-novels-public?logo=github&logoColor=white&style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/Yazdun/react-novels-public?color=violet&logo=github&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Yazdun/react-novels-public?color=lightgray&logo=git&logoColor=white&style=for-the-badge)

<br />
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">REACT NOVELS PUBLIC</h3>

  <p align="center">
    Frontend for <a href="https://github.com/Yazdun/nodejs-novels">Novels API</a>
    <br />
    <a href="https://github.com/Yazdun/nodejs-novels"><strong>Explore the API »</strong></a>
    <br />
    <br />
    <a href="https://react-novels-public.netlify.app/">Live Website</a>
    ·
    <a href="https://github.com/Yazdun/react-novels-public/issues">Report Bug</a>
    ·
    <a href="https://github.com/Yazdun/react-novels-public/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This is react project built for my [Novels API](https://github.com/Yazdun/react-novels-public/issues), This website is completely responsive for all sorts of devices. Users can view, like and review their favourite novels and also mark their favourite authors with a star, This website uses [Novels API](https://github.com/Yazdun/react-novels-public/issues) and also it has separate [Admin Panel](https://github.com/Yazdun/react-novels-admin) which is also built with react.

🔗 [React Novels Admin Panel ](https://github.com/Yazdun/react-novels-admin)

🔗 [Express.JS Node.JS Novels API](https://github.com/Yazdun/react-novels-public/issues)

## Built With

- [React.js](https://reactjs.org/)
- [Sass](https://sass-lang.com/)

## Getting Started

1. Clone the repo
   ```sh
   git clone git@github.com:Yazdun/react-novels-public.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. This project is sending requests to production server in `.src/axios.js`, you can run [Novels API](https://github.com/Yazdun/react-novels-public/issues) on your local machine and then edit `axios.defaults.baseURL` in `./src/axios.js` to the following code
   ```js
   axios.defaults.baseURL = "your local host server";
   ```
4. I used [Cloudaniry](https://cloudinary.com/) to handle uploading images from `./src/components/image-uploader` component, so you must create a free Cloudinary account, then create `.env` file inside `./src` and put your cloudinary key inside `REACT_APP_CLOUDINARY_KEY`
   ```
   REACT_APP_CLOUDINARY_KEY=YOUR CLOUDINARY KEY
   ```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

❤️ Thanks for your time and attention
