// http://www.superflashbros.net/as3sfxr/
function soundEffects_init() {
  soundEffects = new ArcadeAudio();

  soundEffects.add('shoot', 5,
    [
      [3,,0.356,0.6423,0.3992,0.1037,,,,,,,,,,,,,1,,,,,0.5],
      [3,,0.2855,0.4094,0.4416,0.0917,,-0.2012,,,,,,,,,0.4577,-0.1185,1,,,,,0.5],
      [3,,0.2768,0.6636,0.4863,0.0721,,,,,,,,,,,,,1,,,,,0.5]
    ]
  );

  soundEffects.add('hit-object', 5,
    [
      [3,,0.1426,0.3949,0.4827,0.1746,,-0.0503,,,,,,,,,,,1,,,,,0.38],
      [3,,0.2189,0.7895,0.1358,0.1205,,-0.2385,,,,,,,,,0.2261,-0.144,1,,,,,0.38],
      [3,,0.1728,0.4996,0.2668,0.0808,,0.1381,,,,,,,,,0.4345,-0.0425,1,,,,,0.38],
      [3,,0.3191,0.5696,0.3516,0.775,,-0.3272,,,,0.6291,0.7188,,,0.6283,,,1,,,,,0.38]
    ]
  );

  soundEffects.add('hit-monster', 5,
    [
      [3,0.0943,0.0682,0.0338,0.7676,0.5,,0.0001,-0.0676,0.0794,0.2326,-0.861,0.474,-0.0235,-0.5411,0.0969,0.0005,-0.0003,0.8762,-0.6923,0.4782,,0.3177,0.5],
      [3,,0.01,,0.2457,0.6007,,-0.3863,,,,,,,,,,,1,,,,,0.5],
      [3,,0.096,,0.1501,0.3326,,-0.3845,,,,,,,,,,,1,,,,,0.5]
    ]
  );

  soundEffects.add('monster-hit', 5,
    [
      [3,,0.356,0.76,0.47,0.1,,0.24,,0.85,0.66,,,,,,0.0291,-0.1671,1,,,,,0.79]
    ]
  );

  soundEffects.add('monster-die', 2,
    [
      //[3,,0.363,0.2436,0.2058,0.079,,0.0624,,,,0.8,0.74,,,,,,1,,,,,0.72]
      [3,0.0669,0.32,0.64,0.39,0.62,,0.0001,0.26,-0.926,0.1831,-0.36,0.5,,,,-0.0348,-0.48,0.3483,-0.012,0.66,0.0464,0.56,0.5]
    ]
  );

  soundEffects.add('start', 1,
    [
      [2,0.4045,0.2127,0.6091,0.5411,0.552,,-0.7327,0.0561,0.0021,,-0.5946,,0.2111,-0.9549,0.8694,0.0593,-0.6822,0.9964,-0.3453,0.4295,0.4381,,0.97]
    ]
  );

  soundEffects.add('player-die', 1,
    [
      [3,,0.1099,0.3199,1,0.23,,0.4,-0.34,,,-0.4799,0.9499,,0.0281,0.2099,-0.1199,-0.1599,0.9952,0.1272,0.37,,0.0736,0.86]
    ]
  );

  soundEffects.add('player-win', 1,
    [
      [0,,0.01,,1,0.23,,0.1599,-0.0399,0.8,0.5,-0.0199,,0.3899,-0.0199,,,,0.91,-0.0599,0.18,0.1099,,0.5699]
    ]
  );

  soundEffects.add('reload', 3,
    [
      [3,,0.34,0.69,0.28,0.48,,-0.62,-0.3,0.1,0.37,-0.4599,,,-0.64,,-0.3,-0.06,0.51,-0.3399,,0.08,-0.0799,0.32]
      
    ]
  );

  soundEffects.add('door', 1,
    [
      [3,0.4157,0.851,0.3543,0.29,0.5032,,0.0259,-0.3342,0.8084,0.2972,-0.147,,,0.4734,0.4164,0.5399,0.0022,0.9257,-0.2222,,0.017,-0.0001,0.3],
      [3,0.0386,0.0281,0.0039,0.8938,0.024,,0.1441,-0.0659,,0.8734,-0.6233,0.7783,0.7026,0.5994,0.0096,-0.2871,0.1236,0.9566,0.1268,-0.0891,0.0298,0.1737,0.3]

      
    ]
  );

  //3,0.585,0.725,0.0013,0.498,0.1578,,0.0002,-0.0007,0.2882,0.0483,0.9061,0.3514,-0.6828,0.6864,,0.0333,-0.1491,0.892,-0.8958,-0.6338,0.1121,-0.1526,0.3
}






