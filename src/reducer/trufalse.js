const initial = {
  navbarFixd: false,
  togalMenuebar: false,
};
const myreducer = (state = initial, action) => {
  switch (action.type) {
    case "ABSLUTE":
      return { ...state, navbarFixd: false };

    case "STICKY":
      return { ...state, navbarFixd: true };

    case "TOGLEoN":
      return { ...state, togalMenuebar: true };
    case "TOGLEoFF":
      return { ...state, togalMenuebar: false };

    default:
      return state;
  }
};
export { myreducer };
