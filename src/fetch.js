const state = {
  value: null,
};

function fetch() {
  return new Promise((resolve) => {
    resolve('Hooray');
  });
}

module.exports = {
  state,
  run: function () {
    fetch().then((data) => (state.value = data));
  },
};
