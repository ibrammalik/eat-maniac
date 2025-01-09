const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      this._toggleButton(event, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      this._closeButton(event, button);
    });

    drawer.querySelectorAll('.app-bar__navigation__link')
      .forEach((element) => {
        element.addEventListener('click', (event) => {
          this._closeDrawer(event, drawer);
          this._closeButton(event, button);
        });
      });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _toggleButton(event, button) {
    event.stopPropagation();
    button.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _closeButton(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
