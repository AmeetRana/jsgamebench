var added=0;

function tick() {
  if (!Sprites.fullyLoaded()) {
    return;
  }
  if (!added) {
    added = 1;
    ClientCmd.install('playGame',FB.Demo.play);

    UI.addCollection('', 'gameOpts', {pos: [0, 0]});
    UI.addHTML('gameOpts', 'bkgrnd', {pos: [5, 24], uiclass: 'fblogin', markup: "Game Options"});
    UI.addButton('gameOpts', 'play', {pos: [10, 55], width: 75, height: 20, text: 'Play', command: {cmd: 'playGame', args: []}});
    UI.addButton('gameOpts', 'rewind', {pos: [95, 55], width: 75, height: 20, text: 'Rewind', command: {cmd: 'fbLoginUiCb', args: [0]}});
    UI.addButton('gameOpts', 'publish', {pos: [180, 55], width: 75, height: 20, text: 'Publish', command: {cmd: 'fbLoginUiCb', args: [0]}});
    UI.addButton('gameOpts', 'gift', {pos: [265, 55], width: 75, height: 20, text: 'Gift', command: {cmd: 'fbLoginUiCb', args: [0]}});
  }
  UI.tick();
  Render.tick();
}

function game_init(test) {
  PerfTest.pushTest(function() {
    Init.winresize();
    Gob.delAll();
    GameFrame.updateSettings(test.settings, true);
    GameFrame.setXbyY(test.viewport);
    client_user.game_active = true;
  });

}

function init() {
  Init.reset();
  client_user.game_active = true;
  game_init({viewport: 'fluid', settings: {render_mode: GameFrame.HTML_ONLY, update_existing: true, use_div_background: true, css_transitions: false, css_keyframe: false, sprite_sheets: true, int_snap: true, transform3d:true}, tfps: 30, background: 'world', sprites: 'cute', demo: true, hack: true });
  PerfTest.doAll();

  Sprites.add('bouncing_pirate', {url: '/public/apps/pvn/images/bouncing_pirate.png', frames: 1,
    framepos: [[0, 0]], width: 0, height: 0});

  Sprites.add('in_sling_pirate', {url: '/public/apps/pvn/images/in_sling_pirate.png', frames: 1,
    framepos: [[0, 0]], width: 0, height: 0});

  Sprites.add('flying_pirate', {url: '/public/apps/pvn/images/flying_pirate.png', frames: 1,
    framepos: [[0, 0]], width: 0, height: 0});

  Sprites.add('explosion', {url: '/public/apps/pvn/images/explosion.gif', frames: 1,
    framepos: [[0, 0]], width: 0, height: 0});

  Sprites.add('ninja1', {url: '/public/apps/pvn/images/ninja1.png', frames: 1,
    framepos: [[0, 0]], width: 0, height: 0});

  Sprites.add('cannon_chassis', {url: '/public/apps/pvn/images/cannon_chassis.png', frames: 1,
    framepos: [[0, 0]], width: 0, height: 0});

  Sprites.add('cannon_barrel', {url: '/public/apps/pvn/images/cannon_barrel.png', frames: 1,
    framepos: [[0, 0]], width: 0, height: 0});

  Sprites.add('board_vert', {url: '/public/apps/pvn/images/board_vert.png', frames: 1,
    framepos: [[0, 0]], width: 0, height: 0});

  Sprites.add('board_horiz', {url: '/public/apps/pvn/images/board_horiz.png', frames: 1,
    framepos: [[0, 0]], width: 0, height: 0});

  setInterval('tick();', 33);

  PerfTest.pushTest(function() {
    GameFrame.updateSettings(test.settings, true);
    GameFrame.setXbyY(test.viewport);
  });
}

