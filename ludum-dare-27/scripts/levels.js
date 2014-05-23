var levels = [
  {
    width: 1000,
    height: 200,
    playerX: 50,
    playerY: 190,
    walls: [
      {x:100, y:180, width:20, height:20},
      {x:300, y:160, width:40, height:40},
      {x:500, y:180, width:100, height:10},
      {x:550, y:160, width:120, height:10},
      {x:600, y:140, width:140, height:10},
      {x:650, y:120, width:160, height:10},
      {x:700, y:100, width:180, height:10},
      {x:880, y:100, width:20, height:100},
      {x:0, y:0, width:1, height:200},
      {x:1000, y:0, width:1, height: 200}
    ],
    safeZone: {x:960, y:0, width:40, height:200},
    loadingBar: {x:0, y:0, width:0, height:200}
  },

  {
    width: 1000,
    height: 200,
    playerX: 50,
    playerY: 190,
    walls: [
      {x:240, y:0, width:40, height:160},
      {x:320, y:30, width:40, height:170},
      {x:550, y:30, width:40, height:170},
      {x:700, y:0, width:40, height:160},
      {x:810, y:30, width:40, height:170},
      {x:790, y:80, width:20, height:10},
      {x:790, y:30, width:20, height:10},
      {x:740, y:105, width:20, height:10},
      {x:740, y:55, width:20, height:10},
      {x:790, y:130, width:20, height:10},
      {x:0, y:0, width:1, height:200},
      {x:1000, y:0, width:1, height: 200}
    ],
    safeZone: {x:960, y:0, width:40, height:200},
    loadingBar: {x:0, y:0, width:0, height:200}
  },

  {
    width: 1000,
    height: 200,
    playerX: 50,
    playerY: 190,
    walls: [
      {x:100, y:180, width:100, height:20},
      {x:860, y:180, width:140, height:20},
      {x:520, y:40, width:20, height:160},
      {x:860, y:40, width:20, height:140},
      {x:700, y:0, width:20, height:100},
      {x:0, y:0, width:1, height:200},
      {x:1000, y:0, width:1, height: 200}
    ],
    dangerZones: [
      {x:200, y:190, width:660, height:10},
      {x:522, y:35, width:16, height:5},
      {x:862, y:35, width:16, height:5}
    ],
    safeZone: {x:880, y:40, width:120, height:140},
    loadingBar: {x:0, y:0, width:0, height:200}
  },

  {
    width: 1000,
    height: 200,
    playerX: 50,
    playerY: 190,
    walls: [
      {x:150, y:167, width:90, height:33},
      {x:240, y:133, width:40, height:67},
      {x:280, y:80, width:40, height:120},
      {x:280, y:0, width:40, height:65},
      {x:350, y:0, width:70, height:180},
      {x:450, y:40, width:200, height:160},
      {x:690, y:0, width:40, height:155},
      {x:750, y:140, width:40, height:60},
      {x:810, y:0, width:80, height:155},
      {x:960, y:120, width:40, height:20},
      {x:940, y:80, width:20, height:60},
      {x:0, y:0, width:1, height:200},
      {x:1000, y:0, width:1, height: 200}
    ],
    safeZone: {x:960, y:80, width:40, height:40},
    loadingBar: {x:0, y:0, width:0, height:200}
  },
  {
    width: 1000,
    height: 200,
    playerX: 50,
    playerY: 190,
    walls: [
      {x:200, y:160, width:20, height:40},
      {x:940, y:100, width:20, height:20},
      {x:960, y:60, width:20, height:60},
      {x:740, y:60, width:220, height:20},
      {x:700, y:60, width:40, height:110},
      {x:300, y:50, width:20, height:100},
      {x:0, y:0, width:1, height:200},
      {x:1000, y:0, width:1, height: 200}
    ],
    safeZone: {x:940, y:80, width:20, height:20},
    dangerZones: [
      {x:220, y:190, width:780, height:10},
      {x:500, y:90, width:20, height:100},
      {x:500, y:0, width:20, height:60}
    ],
    loadingBar: {x:0, y:0, width:0, height:200}
  }
];
var levelNum = 0;

var filenames = ['nsa_keylogger.exe', 'README.bat', 'harmless.exe', 'notatrojan.exe', 'HTTPS://65.222.202.53/~TILDE/PUB/CIA-BIN/ETC/INIT.DLL?FILE=__AUTOEXEC.BAT.MY%20OSX%20DOCUMENTS-INSTALL.EXE.RAR.INI.TAR.DOÇX.PHPHPHP.XHTML.TML.XTL.TXXT.0DAY.HACK.ERS_(1995)_BLURAY_CAM-XVID.EXE.TAR.[SCR].LISP.MSI.LNK.ZDA.GNN.WRBT.OBJ.O.H.SWF.DPKG.APP.ZIP.TAR.TAR.CO.GZ.A.OUT.EXE'];

var currentLevel = levels[levelNum];
var response, file, secondsLabel;
function startLevel(number, player) {
  $(window).unbind('keyup');
  $('#main-h1').html('Ready?');
  $('#overlay').css('display', 'none');
  $('.prompt').css('display', 'none');
  currentLevel = levels[number];
  levelNum = number;
  currentLevel.loadingBar.width = 0;
  player.x = currentLevel.playerX;
  player.y = currentLevel.playerY;
  player.safe = false;
  player.vx = 0;
  player.vy = 0;
  secondsLabel = 10;
  $('#download-wait').css('display', 'block');
  $('#finish-timer').css('display', 'none');
  $('#download-done').css('display', 'none');
  $('#finish-timer span').html(secondsLabel);
  setTimeout(function() {
    $('#finish-timer').css('display', 'block');
    $('#download-wait').css('display', 'none');
    gameRunning = true;
    $('#main-h1').html('Downloading file...');
  }, 1000);
}

var elapsedSeconds, willCollide, secondsLeft;
function updateLevel(dt, player) {
  if (areColliding(currentLevel.safeZone, player)) player.safe = true;
  else player.safe = false;
  if (areColliding(currentLevel.loadingBar, player) && !player.safe) loseGame();
  if (currentLevel.dangerZones) {
    for (i=0; i<currentLevel.dangerZones.length; i++) {
      if (areColliding(currentLevel.dangerZones[i], player)) loseGame();
    }
  }
  if (currentLevel.loadingBar.width < 1000) {
    currentLevel.loadingBar.width += dt/10;
  }
  else {
    winGame();
  }

  secondsLeft = 10-(~~(currentLevel.loadingBar.width/100));
  if (secondsLeft < secondsLabel) {
    secondsLabel = secondsLeft;
    $('#finish-timer span').html(secondsLabel);
  }

  elapsedSeconds = dt/1000;

  willCollide = false;

  player.y += player.vy*elapsedSeconds;
  player.x += player.vx*elapsedSeconds;

  player.collidingOn = {top:false, bottom:false, left:false, right:false};
  for (i=0; i<currentLevel.walls.length; i++) {
    if (handleCollision(currentLevel.walls[i], player)) willCollide = true;
  }
  if (!willCollide) {
    player.airborne = true;
  }
  else {
    player.airborne = false;
  }
  if (player.x < 0) player.x = 0;
  else if (player.x+player.width > width) player.x = width-player.width;
  if (player.y+player.height > height) {
    player.y = height-player.height;
    player.vy = 0;
    player.collidingOn.bottom = true;
    player.airborne = false;
  }
  if (player.y < 0) {
    player.y = 0;
    player.vy = 0;
    player.collidingOn.top = true;
  }
}

function renderLevel(ctx, player) {
  ctx.clearRect(0, 0, width*viewportModifier, height*viewportModifier);
  ctx.fillStyle = 'black';

  for(i=0; i<currentLevel.walls.length; i++) {
    ctx.rect(currentLevel.walls[i].x*viewportModifier, currentLevel.walls[i].y*viewportModifier, currentLevel.walls[i].width*viewportModifier, currentLevel.walls[i].height*viewportModifier);
  }
  ctx.fill();

  ctx.fillStyle = 'red';
  ctx.fillRect(player.x*viewportModifier, player.y*viewportModifier, player.width*viewportModifier, player.height*viewportModifier);

  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  if (currentLevel.dangerZones) {
    for(i=0; i<currentLevel.dangerZones.length; i++) {
      ctx.fillRect(currentLevel.dangerZones[i].x*viewportModifier, currentLevel.dangerZones[i].y*viewportModifier, currentLevel.dangerZones[i].width*viewportModifier, currentLevel.dangerZones[i].height*viewportModifier);
    }
  }

  ctx.fillStyle = 'rgba(0,255,0,0.5)';
  ctx.fillRect(currentLevel.safeZone.x*viewportModifier, currentLevel.safeZone.y*viewportModifier, currentLevel.safeZone.width*viewportModifier, currentLevel.safeZone.height*viewportModifier);

  var grd = ctx.createLinearGradient(0, 0, currentLevel.loadingBar.width*viewportModifier, currentLevel.loadingBar.height*viewportModifier);
  // light blue
  grd.addColorStop(0, 'lightgreen');   
  // dark blue
  grd.addColorStop(1, 'darkgreen');
  ctx.fillStyle = grd;
  ctx.fillRect(currentLevel.loadingBar.x*viewportModifier, currentLevel.loadingBar.y*viewportModifier, currentLevel.loadingBar.width*viewportModifier, currentLevel.loadingBar.height*viewportModifier);
  
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, height*viewportModifier);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, height*viewportModifier);
  ctx.lineTo(width*viewportModifier, height*viewportModifier);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(width*viewportModifier, height*viewportModifier);
  ctx.lineTo(width*viewportModifier, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(width*viewportModifier, 0);
  ctx.lineTo(0, 0);
  ctx.stroke();
}

var willCollide, minXOffset, minYOffset, xOffset, yOffset, xDiff, yDiff;
function handleCollision(staticObj, dynamicObj) {
  var willCollide = {l:false, r:false, t:false, b:false};

  minXOffset = staticObj.width/2 + dynamicObj.width/2;
  minYOffset = staticObj.height/2 + dynamicObj.height/2;

  xOffset = (staticObj.x+staticObj.width/2) - (dynamicObj.x+dynamicObj.width/2);
  yOffset = (staticObj.y+staticObj.height/2) - (dynamicObj.y+dynamicObj.height/2);

  xDiff = minXOffset-Math.abs(xOffset);
  yDiff = minYOffset-Math.abs(yOffset);

  if (xDiff >= 0 && yDiff >=0) { // collision
    if (yDiff < xDiff) { // collision on top or bottom
      if (yOffset > 0) { // collision on top
        dynamicObj.y = staticObj.y-dynamicObj.height;
        if (dynamicObj.vy > 0) dynamicObj.vy = 0;
        dynamicObj.airborne = false;
        dynamicObj.collidingOn.bottom = true;
        willCollide.t = true;
      }
      else { // collision on bottom
        dynamicObj.y = staticObj.y+staticObj.height;
        if(dynamicObj.vy < 0) dynamicObj.vy = 0;
        dynamicObj.collidingOn.top = true;
        willCollide.b = true;
      }
    }
    else { // collision on left or right
      if (xOffset > 0) { // collision on left
        dynamicObj.x = staticObj.x-dynamicObj.width;
        if (dynamicObj.vx > 0) dynamicObj.vx = 0;
        dynamicObj.collidingOn.right = true;
        willCollide.l = true;
      }
      else { // collision on right
        dynamicObj.x = staticObj.x+staticObj.width;
        if (dynamicObj.vx < 0) dynamicObj.vx = 0;
        dynamicObj.collidingOn.left = true;
        willCollide.r = true;
      }
    }
    return true;
  }
  return false;
}

function areColliding(staticObj, dynamicObj) {
  minXOffset = staticObj.width/2 + dynamicObj.width/2;
  minYOffset = staticObj.height/2 + dynamicObj.height/2;

  xOffset = (staticObj.x+staticObj.width/2) - (dynamicObj.x+dynamicObj.width/2);
  yOffset = (staticObj.y+staticObj.height/2) - (dynamicObj.y+dynamicObj.height/2);

  xDiff = minXOffset-Math.abs(xOffset);
  yDiff = minYOffset-Math.abs(yOffset);

  if (xDiff >= 0 && yDiff >=0) {
    return true;
  }
  return false;
}

function winGame() {
  $('#finish-timer').css('display', 'none');
  $('#download-done').css('display', 'block');
  setTimeout(function() {
    $('#overlay').css('display', 'block');
    $('#success').css('display', 'block');
  }, 500);
  gameRunning = false;
}
function loseGame() {
  setTimeout(function() {
    $('#overlay').css('display', 'block');
    $('#fail').css('display', 'block');
    $(window).on('keyup', function(e) {
      if (!gameRunning && e.keyCode===32)
      startLevel(levelNum, player);
    });
  }, 500);
  gameRunning = false;
}