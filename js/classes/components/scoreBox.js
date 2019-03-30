// Score box component for game

class ScoreBox extends Phaser.GameObjects.Container
{
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;
    // Score box contents
    this.text1 = this.scene.add.text(0, 0, "SCORE: 0");
    this.text1.setOrigin(0.5, 0.5);
    this.add(this.text1);

    // Add to scene
    this.scene.add.existing(this);

    // Handle score updates
    emitter.on(G.SCORE_UPDATED, this.scoreUpdated, this);
  }
  scoreUpdated() {
    this.text1.setText("SCORE: " + model.score);
  }
}