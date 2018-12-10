export default {
  login: (state, payLoad) => {
    state.me = payLoad;
  },
  logout: state => {
    state.me = undefined;
  },
  toggleMenu: state => {
    state.layout.menu.expanded = !state.layout.menu.expanded;
  }
};
