// Controller for game

class Controller {
  constructor() {
    emitter.on(G.SET_SCORE, this.setScore);
    emitter.on(G.UP_POINTS, this.upPoints);
  }
  setScore(score) {
    model.score = score;
  }
  upPoints(points) {
    var score = model.score;   // Verbose approach required to trigger model setter
    score  += points;
    model.score = score;
  }
}