export default {
  addToWarmup(state, payload) {
    state.Warmup.push(payload)
  },
  addToExercise(state, payload) {
    state.Exercise.push(payload)
  },
  addToCooldown(state, payload) {
    state.Cooldown.push(payload)
  },
  deleteFromWarmup(state, payload) {
    state.Warmup.splice(payload.index, 1)
  },
  deleteFromExercise(state, payload) {
    state.Exercise.splice(payload.index, 1)
  },
  deleteFromCooldown(state, payload) {
    state.Cooldown.splice(payload.index, 1)
  },
  resetExercises(state) {
    state.Exercise = [];
    state.Cooldown = [];
    state.Warmup = [];
  }
};
