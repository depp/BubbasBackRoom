

function textures_createRandom(colors) {
  for (let x=0; x<16; x++) {
    for (let y=0; y<16; y++) {
      textureContext.save();
      textureContext.fillStyle = '#' + u_getRandomElement(colors);
      textureContext.fillRect(x, y, 2, 2);
      textureContext.restore();
    }
  }

  return textureCanvas.toDataURL();
}

function textures_createTile(colors) {
  textures_createRandom(colors);

  // tile outline
  textureContext.fillStyle = '#' + colors[0];
  textureContext.fillRect(0, 0, 16, 1);
  textureContext.fillRect(0, 0, 1, 15);

  textureContext.fillStyle = '#' + colors[colors.length-1];
  textureContext.fillRect(0, 15, 16, 1);
  textureContext.fillRect(15, 1, 1, 16);

  return textureCanvas.toDataURL();
}

function textures_init(callback) {
  textures = {
    'dirt': {
      encoding: textures_createRandom([
        '3d3527', 
        '4a493b', 
        '534e3e', 
        '524534', 
        '46433b', 
        '443e2b', 
        '271c10'
      ])
    },
    'mossy-stone': {
      encoding: textures_createTile([
        '464339',
        '282e26',
        '303e1a',
        '444b31',
        '393c2c',
        '33352f',
        '333435',
        '2c2e23',
        '3d3f36',
        '3d3a30',
        '514938',
        '6a6554',
        '2c2e20'
      ])
    },
    'burned-stone': {
      encoding: textures_createRandom([
        '434343', 
        '2f2f2f', 
        '232323', 
        '131313', 
        '272727', 
        '1b1b1b', 
        '0b0b0b'
      ])
    },
    'blood-stone': {
      encoding: textures_createRandom([
        'f6a675', 
        '170503', 
        'a41800', 
        'ac300e', 
        'dbbaa7', 
        '7d1e18', 
        '621a0e'
      ])
    },
    'stone': {
      encoding: textures_createTile([
        '6c6a69',
        '6a5a4b',
        '665f5f',
        '3b3534',
        '645444',
        '292322'  
      ])
    },
    'rotting-wood': {
      encoding: textures_createTile([
        '4f4131',
        '2c2822',
        '353636',
        '4a443a',
        '2d2d2c',
        '4a3c26',
        '31271f',
        '120c09'  
      ])
    },
    'foam': {
      encoding: textures_createRandom([
        'c3c3c3',
        'bbbbbb',
        'bfbfbf',
        'c0c0c0',
        'b1b1b1'
      ])
    },
    'health': {
      encoding: textures_createRandom([
        '9d170e',
        'c81818'
      ])
    }
  };

  let loadedImages = 0;
  let numImages = 0;
  for (let key in textures) {
    (function() {
      numImages++;
      let texture = textures[key];
      let glTexture = texture.glTexture = sceneContext.createTexture();
      let image = texture.image = new Image();
      image.onload = function() {
        scene_initTexture(glTexture, image);
        if (++loadedImages >= numImages) {
          callback();
        }
      };
      
      image.src = texture.encoding;
    })();
  }
};

