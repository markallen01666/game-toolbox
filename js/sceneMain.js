class SceneMain extends Phaser.Scene {
  constructor() {
      super('SceneMain');
  }
  preload()
  {
    // Preload resources (e.g images, sounds, etc...)
    // this.load.image("key", "path");

  }
  create() {
    // Define our objects (e.g. bullets, spaceships, etc...)
    // this.key = this.add.image(x, y, "key");
    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();

    // Add scoreBox
    this.sb = new ScoreBox({scene: this});
    this.sb.x = game.config.width / 2;
    this.sb.y = 50;
    model.score = 100;
  }
  update() {
    // Constantly running loop (e.g. to check for collisions or for things that need to be constantly updated)

  }
  customFunction() {
    // Any additional functionality we require can be added with custom functions
    
  }
}