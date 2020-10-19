export default {
  addToWarmup(state, payload) {
    state.Warmup.push(payload)
  },
  addToMain(state, payload) {
    state.Main.push(payload)
  },
  addToCooldown(state, payload) {
    state.Cooldown.push(payload)
  },
  deleteFromWarmup(state, payload) {
    state.Warmup.splice(payload.index,1)
  },
  deleteFromMain(state, payload) {
    state.Main.splice(payload.index,1)
  },
  deleteFromCooldown(state, payload) {
    state.Cooldown.splice(payload.index,1)
  }
};
