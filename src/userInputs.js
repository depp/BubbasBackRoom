function userInputs_init() {
  document.addEventListener('keydown', function(evt) {
    userInputs_handleKeyDown(evt);
  }, false);
  
  document.addEventListener('keyup', function(evt) {
    userInputs_handleKeyUp(evt);
  }, false);

  document.addEventListener('mousemove', function(evt) {
    userInputs_handleMouseMove(evt);
  }, false);

  document.addEventListener('mousedown', function(evt) {
    userInputs_handleMouseDown(evt);
  }, false);

  document.addEventListener('pointerlockchange', function(evt) {
    if (!userInputs_isPointerLocked() && gameState === GAME_STATE_PLAYING) {
      game_pause();
    }
  }, false);
};

function userInputs_handleKeyDown(evt) {

  let keycode = ((evt.which) || (evt.keyCode));

  switch (keycode) {
    // enter key
    case 13:
      if (gameState === GAME_STATE_STORY) {
        game_storyNext();
      }
      else if (gameState === GAME_STATE_PAUSED) {
        game_resume();
      }
      else if (gameState === GAME_STATE_DIED || gameState === GAME_STATE_WIN) {
        game_restart()
      }
      break;
    case 65:
      // a key (strafe left)
      if (gameState === GAME_STATE_PLAYING) {
        player.sideMovement = -1;
      }
      break;
    case 87:
      // w key (move forward)
      if (gameState === GAME_STATE_PLAYING) {
        player.straightMovement = 1;
      }
      break;
    case 68:
      // d key (strafe right)
      if (gameState === GAME_STATE_PLAYING) {
        player.sideMovement = 1;
      }
      break;
    case 83: 
      // s key (move backwards)
      if (gameState === GAME_STATE_PLAYING) {
        player.straightMovement = -1;
      }
      break;
    case 32:
      player_jump();
      break;
    case 82:
      // r key (reload)
      player_reload();
      break;
  }
};

function userInputs_handleKeyUp(evt) {
  if (gameState === GAME_STATE_PLAYING) {
    let keycode = ((evt.which) || (evt.keyCode));

    switch (keycode) {
      case 65:
        // a key
        player.sideMovement = 0;
        break;
      case 87:
        // w key
        player.straightMovement = 0;
        
        break;
      case 68:
        // d key
        player.sideMovement = 0;
        break;
      case 83:
        // s key
        player.straightMovement = 0;
        break;
    }
  }
};

function userInputs_handleMouseMove(evt) {
  if (gameState === GAME_STATE_PLAYING) {
    if (userInputs_isPointerLocked()) {
      // pitch (up and down)
      player.pitch += evt.movementY * MATH_PI * 0.001 * -1;
      if (player.pitch > MATH_PI/2) {
        player.pitch = MATH_PI/2;
      }
      if (player.pitch < -1 * MATH_PI/2) {
        player.pitch = -1 * MATH_PI/2;
      }

      // yaw (side to side)
      player.yaw += evt.movementX * MATH_PI * 0.001 * -1;
    }
  }
}

function userInputs_handleMouseDown(evt) {
  if (gameState === GAME_STATE_PLAYING) {
    player_fire();
  }
}

function userInputs_isPointerLocked() {
  return document.pointerLockElement === sceneCanvas;
}