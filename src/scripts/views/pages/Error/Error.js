import errorStyle from './error.style.css';
import errorHTML from './error.html';

const Error = {
  set setErrorData({
    title = 'Ooopppss Ada Error Nihh....',
    message,
    poster = './images/others/broken-robot.png',
  }) {
    this.title = title;
    this.message = message;
    this.poster = poster;

    this.render();
  },

  render() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<style>${errorStyle}</style>${errorHTML}`;

    const errorPoster = document.querySelector('.error__poster');
    const errorTitle = document.querySelector('.error__title');
    const errorMessage = document.querySelector('.error__message');

    errorPoster.src = this.poster;
    errorTitle.innerHTML = this.title;
    errorMessage.innerHTML = this.message;
  },
};

export default Error;
