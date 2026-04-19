const SD={
  head: {src:'./assets/HC_GAME/Characters/head chomp5.png',w:896,h:128,frames:7,frameW:128},
  headMask: {src:'./assets/HC_GAME/Characters/head/head mask.png',w:128,h:128,frames:1,frameW:128},
  digest: {src:'./assets/HC_GAME/Characters/head chomp digest.png',w:512,h:64,frames:8,frameW:64},
  digestion: {src:'./assets/images/digestion.png?v=1',w:1024,h:128,frames:8,frameW:128},
  frontLeg: {src:'./assets/images/leg-front-leg.png',w:768,h:128,frames:6,frameW:128},
  backLeg: {src:'./assets/images/leg-back-leg.png',w:768,h:128,frames:6,frameW:128},
  bodyFront: {src:'./assets/images/body_front_half.png',w:128,h:128,frames:1,frameW:128},
  body: {src:'./assets/images/body_02-copy.png',w:128,h:128,frames:1,frameW:128},
  curve: {src:'./assets/images/curve.png',w:128,h:128,frames:1,frameW:128},
  bodyBack: {src:'./assets/images/body_back_half.png',w:128,h:128,frames:1,frameW:128},
  tail: {src:'./assets/images/tail_sprite_02.png?v=1',w:2048,h:128,frames:16,frameW:128},
  sandwich: {src:'./assets/images/sanwich copy.png?v=2',w:1600,h:100,frames:16,frameW:100},
  eat: {src:'./assets/images/eat_sprite2.png',w:800,h:100,frames:8,frameW:100},
  appleIdle: {src:'./assets/HC_GAME/Characters/objects/apple_idle.png',w:336,h:42,frames:8,frameW:42},
  appleChomp: {src:'./assets/HC_GAME/Characters/objects/apple_chomp.png',w:336,h:42,frames:8,frameW:42},
  pizzaIdle: {src:'./assets/HC_GAME/Characters/objects/pizza_idle.png',w:712,h:89,frames:8,frameW:89},
  pizzaChomp: {src:'./assets/HC_GAME/Characters/objects/pizza_chomp.png',w:712,h:89,frames:8,frameW:89},
  bananaIdle: {src:'./assets/HC_GAME/Characters/objects/banana_idle.png',w:584,h:73,frames:8,frameW:73},
  bananaChomp: {src:'./assets/HC_GAME/Characters/objects/banana_chomp.png',w:584,h:73,frames:8,frameW:73},
  sockIdle: {src:'./assets/HC_GAME/Characters/objects/sock_idle.png',w:672,h:84,frames:8,frameW:84},
  sockChomp: {src:'./assets/HC_GAME/Characters/objects/sock_chomp.png',w:672,h:84,frames:8,frameW:84},
  discoChomp: {src:'./assets/HC_GAME/Characters/objects/disco_chomp.png',w:588,h:49,frames:12,frameW:49},
  hurt: {src:'./assets/images/hurt_sprite_02.png',w:1024,h:128,frames:8,frameW:128},
  hurtAlt: {src:'./assets/HC_GAME/Characters/hit on the head.png',w:1408,h:128,frames:11,frameW:128},
  portal: {src:'./assets/images/Dimensional_Portal.png',w:96,h:64,frames:6,frameW:32,frameH:32},
  portalBurst: {src:'./assets/images/vfx-d.png?v=1',w:1360,h:80,frames:17,frameW:80,frameH:80},
  portalBackH: {src:'./assets/images/portal_back_horizontal.png?v=1',w:128,h:128,frames:1,frameW:128},
  portalFrontH: {src:'./assets/images/portal_front_horizontal.png?v=1',w:128,h:128,frames:1,frameW:128},
  portalFrontHLt: {src:'./assets/images/portal_front_lt_horizontal.png',w:128,h:128,frames:1,frameW:128},
  portalFrontHRt: {src:'./assets/images/portal_front_rt_horizontal.png',w:128,h:128,frames:1,frameW:128},
  portalBackV: {src:'./assets/images/portal_back_vertical.png?v=1',w:128,h:128,frames:1,frameW:128},
  portalFrontV: {src:'./assets/images/portal_front_vertical.png?v=1',w:128,h:128,frames:1,frameW:128},
};

const NOMINAL_CELL=128;
let CELL=NOMINAL_CELL;
const START_GRID={cols:12,rows:9};
const WARP_GRID={cols:16,rows:12};
let cols=START_GRID.cols, rows=START_GRID.rows;
const BASE_SPEED=170, MIN_SPEED=80, SPEED_DEC=10, WIN_SCORE=50;
const HEAD_FPS=24, DIGEST_FPS=12, DIGESTION_FPS=16, LEGS_FPS=10, TAIL_FPS=24, SANDWICH_FPS=20, EAT_FPS=40;
const LEG_STEP_HOLD=2;
const LEG_ANIM_FPS=18;
const HURT_FPS=12;
const ITEM_IDLE_FPS=10;
const ITEM_CHOMP_FPS=42;
const DISCO_FPS=10;
const TAIL_Y_OFFSET=0, TAIL_INSET=0;
const HEAD_SEQUENCE=[0,0,1,1,2,2,3,3,4,4,5,5];
const HEAD_NOSE_TRIM=0;
const HEAD_MASK_TRIM_FRONT=1;
const HEAD_MASK_TRIM_BACK=0;
const HEAD_MASK_ATTACH_BACKSHIFT=0;
const NECK_BACK_LEG_OFFSET=-36;
const NECK_FRONT_LEG_OFFSET=-10;
const NECK_FRONT_LEG_Y_OFFSET=0;
const LEG_GHOST_DELAY_MS=55;
const LEG_GHOST_ALPHA=0.30;
const DISCO_DURATION_MS=10000;
const DISCO_PICKUP_LIFETIME_MS=3500;
const DISCO_SPEED_MULT=1.5;
const DISCO_SCORE_MULT=2;
const DISCO_UNLOCK_SCORE=150;
const DISCO_FIRST_SPAWN_CHANCE=1;
const DISCO_REPEAT_SPAWN_CHANCE=0.08;
const WARP_LENGTH_THRESHOLD=12;
const BANANA_SPEED_DELTA=-35;
const SPEED_EFFECT_MS=3000;
const SOCK_STUN_MS=500;
const SOCK_LIFETIME_MS=8000;
const ITEM_STAGGER_MS=420;
const WARP_LIFETIME_MS=4000;
const FOOD_HEAD_BUFFER=2;
const SOCK_HEAD_BUFFER=3;
const ITEM_EDGE_MARGIN=1;
const FOOD_EDGE_SPAWN_CHANCE=0.1;
const SCORE_STORAGE_KEY='hc_best';
const LEADERBOARD_STORAGE_KEY='hc_top_chompers';
const SHARE_CARD_IMAGES={
  standard:'./assets/HC_GAME/UI/share.png',
  top:'./assets/HC_GAME/UI/share_top.png',
};
const BOARD_HUD_HEIGHT=CELL;
const DEFAULT_LEADERBOARD_ENTRIES=[
  {name:'CELIA LEE',score:480},
  {name:'CHLOE FOGLIA',score:480},
  {name:'RUBIN PFEFFER',score:480},
  {name:'ANDREA MORRISON',score:480},
  {name:'AMY THRALL FLYNN',score:480},
  {name:'BOB SHEA',score:480},
  {name:'YOO JAE SUK',score:480},
  {name:'MR. T',score:480},
  {name:'DOLLY PARTON',score:480},
  {name:'HBD CHARLIE!',score:480},
];
const FOOD_TYPES={
  sandwich:{points:10,idleKey:'sandwich',chompKey:'eat',idleFps:SANDWICH_FPS,chompFps:EAT_FPS,drawScale:1.512,scoreLabel:'Sandwich'},
  banana:{points:20,idleKey:'bananaIdle',chompKey:'bananaChomp',idleFps:ITEM_IDLE_FPS,chompFps:56,drawScale:1.1132,drawScaleY:0.9,offsetY:-10,speedDelta:BANANA_SPEED_DELTA,scoreLabel:'Banana'},
  apple:{points:10,idleKey:'appleIdle',chompKey:'appleChomp',idleFps:ITEM_IDLE_FPS,chompFps:64,drawScale:0.9196,scoreLabel:'Apple'},
  pizza:{points:30,idleKey:'pizzaIdle',chompKey:'pizzaChomp',idleFps:ITEM_IDLE_FPS,chompFps:ITEM_CHOMP_FPS,drawScale:0.972,scoreLabel:'Pizza'},
};
const FOOD_SPAWN_TABLE=[
  {type:'sandwich',weight:50},
  {type:'banana',weight:20},
  {type:'apple',weight:20},
  {type:'pizza',weight:10},
];
const SOCK_DEF={idleKey:'sockIdle',chompKey:'sockChomp',idleFps:ITEM_IDLE_FPS,chompFps:ITEM_CHOMP_FPS,drawScale:1.28,drawScaleY:0.8,offsetY:-12};
const DISCO_DEF={idleKey:'disco',chompKey:'discoChomp',idleFps:DISCO_FPS,chompFps:24,drawScale:1.857288};
const HEAD_ANCHOR={
  '1,0': {overlap:8, backshift:5, lead:15, cross:0},
  '-1,0': {overlap:8, backshift:5, lead:15, cross:0},
  '0,-1': {overlap:14, backshift:10, lead:24, cross:2},
  '0,1': {overlap:16, backshift:12, lead:22, cross:-2},
};
const HURT_HEAD_ANCHOR={
  '1,0': {lead:24, cross:0},
  '-1,0': {lead:24, cross:0},
  '0,-1': {lead:22, cross:-2},
  '0,1': {lead:20, cross:-4},
};
const HURT_HEAD_OFFSET={
  '1,0': {x:46,y:-11},
  '-1,0': {x:45,y:-11},
  '0,-1': {x:30,y:-12},
  '0,1': {x:43,y:-10},
};

const gameWrap=document.getElementById('game-wrap');
const cabinetStage=document.getElementById('cabinet-stage');
const canvasWrap=document.getElementById('canvas-wrap');
const screenContent=document.getElementById('screen-content');
const overlay=document.getElementById('overlay');
const startScreenLayer=document.getElementById('start-screen-layer');
const boardHud=document.getElementById('board-hud');
const gameoverExclusion=document.getElementById('gameover-exclusion');
const canvas=document.getElementById('gc');
const ctx=canvas.getContext('2d');
const fxCanvas=document.getElementById('fx');
const fx=fxCanvas.getContext('2d');
const crtOverlayCanvas=document.getElementById('crt-overlay');
const crtOverlayCtx=crtOverlayCanvas.getContext('2d');
const crtToggle=document.getElementById('crt-toggle');
const pauseToggle=document.getElementById('pause-toggle');
let crtFlickerOpacity=0.985;
let crtFlickerCountdown=10;
let lastCRTDrawAt=-Infinity;
let crtScanlineCache=null;
let crtPhosphorCache=null;
let crtCacheW=0,crtCacheH=0,crtCacheSpacing=0;
function buildCRTCaches(w,h,spacing){
  if(crtCacheW===w&&crtCacheH===h&&crtCacheSpacing===spacing) return;
  crtCacheW=w; crtCacheH=h; crtCacheSpacing=spacing;
  crtScanlineCache=document.createElement('canvas');
  crtScanlineCache.width=w; crtScanlineCache.height=h;
  const sc=crtScanlineCache.getContext('2d');
  sc.fillStyle='#000';
  for(let y=0;y<h;y+=spacing) sc.fillRect(0,y,w,2);
  crtPhosphorCache=document.createElement('canvas');
  crtPhosphorCache.width=w; crtPhosphorCache.height=h;
  const pc=crtPhosphorCache.getContext('2d');
  for(let x=0;x<w;x+=spacing){
    pc.fillStyle='#f00'; pc.fillRect(x,0,2.34,h);
    pc.fillStyle='#0f0'; pc.fillRect(x+2.34,0,2.33,h);
    pc.fillStyle='#00f'; pc.fillRect(x+4.67,0,2.33,h);
  }
}
const CRT_BLOOM_ALPHA=0.05;
const CRT_BLOOM_SCALE=1;
const CRT_BLOOM_PASSES=[
  {x:-1,y:0,a:1},
  {x:1,y:0,a:1},
  {x:0,y:-1,a:0.9},
  {x:0,y:1,a:0.9},
  {x:-2,y:0,a:0.32},
  {x:2,y:0,a:0.32},
  {x:0,y:-2,a:0.26},
  {x:0,y:2,a:0.26},
];
const CRT_BLOOM_PASSES_GAMEPLAY=[];
const CRT_FRAME_MS_GAMEPLAY=1000/24;
const MAX_TURN_QUEUE=2;
const GAMEPLAY_OVERSCAN_BLEND=0.5;
const itemShadowImg=new Image();
itemShadowImg.src='./assets/HC_GAME/Characters/objects/shadow sprite.png';
const discoImg=new Image();
discoImg.src='./assets/HC_GAME/Characters/objects/disco.png';
const prewarpMapImg=new Image();
prewarpMapImg.src='./assets/HC_GAME/map/prewarp_test.png';
const postwarpMapImg=new Image();
postwarpMapImg.src='./assets/HC_GAME/map/postwarp_test_02.png';
// Cache cover-fit crop rects so they aren't recalculated every frame
const mapCropCache=new Map();
const mapRenderCanvas=document.createElement('canvas');
const mapRenderCtx=mapRenderCanvas.getContext('2d');
let mapRenderCacheKey='';
function getMapCrop(img,dw,dh){
  const k=img.src+'|'+dw+'|'+dh;
  if(!mapCropCache.has(k)){
    const iw=img.naturalWidth,ih=img.naturalHeight;
    const scale=Math.max(dw/iw,dh/ih);
    const sw=dw/scale,sh=dh/scale;
    mapCropCache.set(k,{sx:(iw-sw)/2,sy:(ih-sh)/2,sw,sh});
  }
  return mapCropCache.get(k);
}
function invalidateMapRenderCache(){
  mapRenderCacheKey='';
}
function drawCachedMapBackground(){
  const dw=boardWidth(), dh=boardHeight();
  const activeMapImg=currentBoardLayout.mapImg;
  if(!(activeMapImg && activeMapImg.complete && activeMapImg.naturalWidth && activeMapImg.naturalHeight)){
    ctx.fillStyle=C.bg;
    ctx.fillRect(0,0,dw,dh);
    return;
  }
  const cacheKey=`${activeMapImg.src}|${dw}|${dh}`;
  if(mapRenderCacheKey!==cacheKey || mapRenderCanvas.width!==dw || mapRenderCanvas.height!==dh){
    mapRenderCanvas.width=dw;
    mapRenderCanvas.height=dh;
    mapRenderCtx.imageSmoothingEnabled=false;
    const {sx,sy,sw,sh}=getMapCrop(activeMapImg,dw,dh);
    mapRenderCtx.clearRect(0,0,dw,dh);
    mapRenderCtx.drawImage(activeMapImg,sx,sy,sw,sh,0,0,dw,dh);
    mapRenderCacheKey=cacheKey;
  }
  ctx.drawImage(mapRenderCanvas,0,0);
}
const DISCO_FRAMES=8;
const DISCO_FRAME_W=49;
const ITEM_SHADOW_FRAME_W=100;
const ITEM_SHADOW_FRAMES=5;
const ITEM_SHADOW_GLOBAL_SCALE=1.44;
const ITEM_SHADOW_GLOBAL_Y_OFFSET=-40;
const cabinetDent=document.getElementById('cabinet-dent');
const musicToggle=document.getElementById('music-toggle');
const musicToggleImg=document.getElementById('music-toggle-img');
const buttonSoundArt=document.getElementById('button-sound-art');
const buttonPauseArt=document.getElementById('button-pause-art');
const buttonSelectArt=document.getElementById('button-select-art');
const buttonStartArt=document.getElementById('button-start-art');
const buttonPreorderArt=document.getElementById('button-preorder-art');
const buttonSoundHit=document.getElementById('button-sound-hit');
const buttonPauseHit=document.getElementById('button-pause-hit');
const buttonPreorderHit=document.getElementById('button-preorder-hit');
const buttonSelectHit=document.getElementById('button-select-hit');
const buttonStartHit=document.getElementById('button-start-hit');
const gameoverMain=document.getElementById('gameover-main');
const leaderboardScreen=document.getElementById('leaderboard-screen');
const leaderboardBtn=document.getElementById('leaderboard-btn');
const leaderboardBtnImg=document.getElementById('leaderboard-btn-img');
const playAgainBtn=document.getElementById('playagain-btn');
const playAgainBtnImg=document.getElementById('playagain-btn-img');
const leaderboardPlayAgainBtn=document.getElementById('leaderboard-playagain-btn');
const leaderboardPlayAgainBtnImg=document.getElementById('leaderboard-playagain-btn-img');
const leaderboardPreorderBtn=document.getElementById('leaderboard-preorder-btn');
const leaderboardPreorderBtnImg=document.getElementById('leaderboard-preorder-btn-img');
const leaderboardEntriesEl=document.getElementById('leaderboard-entries');
const leaderboardEntryOverlay=document.getElementById('leaderboard-entry-overlay');
const nameEntryModal=document.getElementById('name-entry-modal');
const emailEntryModal=document.getElementById('email-entry-modal');
const leaderboardNameInput=document.getElementById('leaderboard-name-input');
const leaderboardEmailInput=document.getElementById('leaderboard-email-input');
const leaderboardEmailLaterBtn=document.getElementById('leaderboard-email-later-btn');
const sharePreviewModal=document.getElementById('share-preview-modal');
const sharePreviewImage=document.getElementById('share-preview-image');
const sharePreviewScore=document.getElementById('share-preview-score');
const sharePreviewDownloadBtn=document.getElementById('share-preview-download-btn');
const sharePreviewCopyBtn=document.getElementById('share-preview-copy-btn');
const sharePreviewCloseBtn=document.getElementById('share-preview-close-btn');
const testTop10FlowBtn=document.getElementById('test-top10-flow-btn');
const wormMessage=document.getElementById('worm-message');
const wormTalkLights=document.getElementById('worm-talk-lights');
const caterpillarIdleStrip=document.getElementById('caterpillar-idle-strip');
const caterpillarTalkStrip=document.getElementById('caterpillar-talk-strip');
ctx.imageSmoothingEnabled=false;
fx.imageSmoothingEnabled=false;

const musicAudio=new Audio('./assets/HC_GAME/muzak/Crocogo.mp3');
const chillMusicAudio=new Audio('./assets/HC_GAME/muzak/Chilliest_intro.mp3');
const menuClickAudio=new Audio('./assets/HC_GAME/muzak/HAP_8BIT_SFX_MUSIC_PACK_V2/SFX/Menu/Menu_Select2.wav');
const startAudio=new Audio('./assets/HC_GAME/muzak/HAP_8BIT_SFX_MUSIC_PACK_V2/SFX/Menu/Menu_Start.wav');
const warpAudio=new Audio('./assets/HC_GAME/muzak/HAP_8BIT_SFX_MUSIC_PACK_V2/SFX/Actions/Booster.wav');
const warpWheeAudio=new Audio('./assets/HC_GAME/muzak/HAP_8BIT_SFX_MUSIC_PACK_V2/SFX/Actions/Grow01.wav');
const deathAudio=new Audio('./assets/HC_GAME/muzak/HAP_8BIT_SFX_MUSIC_PACK_V2/SFX/Firepower/Vaporise.wav');
const deathErrorAudio=new Audio('./assets/HC_GAME/muzak/HAP_8BIT_SFX_MUSIC_PACK_V2/SFX/Menu/UI_error2.wav');
const sockHitAudio=new Audio('./assets/HC_GAME/muzak/HAP_8BIT_SFX_MUSIC_PACK_V2/SFX/Win_Lose/Life_Lose.wav');
const sockHitAlertAudio=new Audio('./assets/HC_GAME/muzak/HAP_8BIT_SFX_MUSIC_PACK_V2/SFX/Speech/Human_Die02.wav');
const discoPickupAudio=new Audio('./assets/HC_GAME/muzak/HAP_8BIT_SFX_MUSIC_PACK_V2/SFX/Win_Lose/High_Score.wav');
const EAT_AUDIO_SRC='./assets/audio/eatingsfx.mp3';
const eatAudioPool=[0,1,2].map(()=>new Audio(EAT_AUDIO_SRC));
const wormVowelSources=[
  './assets/audio/speech-vowels/Animal_Vowel_1.wav',
  './assets/audio/speech-vowels/Animal_Vowel_2.wav',
  './assets/audio/speech-vowels/Animal_Vowel_3.wav',
  './assets/audio/speech-vowels/Animal_Vowel_4.wav',
];
const wormVoicePool=wormVowelSources.map(src=>{
  const audio=new Audio(src);
  audio.preload='auto';
  audio.volume=0.55;
  return audio;
});
const WORM_INITIAL_MESSAGES=[
  'PSST... HIT THAT\nBUTTON!',
];
const WORM_INITIAL_REPEAT_COUNT=3;
const WORM_TUTORIAL_MESSAGES=[
  'THAT CROCODILE\nLOOKS HUNGRY!',
  'PRESS START OR\nENTER TO PLAY',
  'ARROW KEYS OR WASD TO MOVE',
];
const WORM_GAMEPLAY_MESSAGES=[
  "DON'T BITE YOUR OWN BUTT!",
  "DON'T FORGET\nTO FLOSS!",
  'CHEW SLOWLY!',
];
const WORM_INFO_MESSAGES={
  banana:'BANANAS SPEED YOU UP!',
  sock:'WATCH OUT! SOCKS STINK!',
  warp:'WARP OPENS A BIGGER SWAMP!',
  disco:'DISCO DOUBLES YOUR BITES!',
  discoTime:'DISCO TIME! DOUBLE POINTS!',
};
const WORM_DEATH_MESSAGES=[
  'ANOTHER BITE AT GLORY?',
  'KEEP YOUR SNOUT UP!',
  'THE SWAMP WINS THIS ROUND.',
  'ALMOST HAD IT.',
  'RUN IT BACK.',
  'THE SOCKS\nARE LAUGHING.',
  'YOU CALL THAT\nA CHOMP?',
  'THIS WILL NOT BE IN THE BOOK.',
];
const WORM_DEATH_FINAL_MESSAGE='STILL HUNGRY?\nPRESS START';
const WORM_TALK_LIGHTS=[
  './assets/HC_GAME/UI/light_01.png',
  './assets/HC_GAME/UI/light_02.png',
  './assets/HC_GAME/UI/light_03.png',
  './assets/HC_GAME/UI/light_04.png',
  './assets/HC_GAME/UI/light_05.png',
];
WORM_TALK_LIGHTS.forEach(src=>{
  const img=new Image();
  img.src=src;
});
const MUSIC_VOLUME_GAMEPLAY=0.3;
const MUSIC_STOP_FX_MS=520;
const CHILL_MUSIC_VOLUME=0.22;
const CHILL_MUSIC_FADE_MS=900;
const CHILL_MUSIC_DELAY_MS=420;
musicAudio.loop=true;
musicAudio.preload='auto';
musicAudio.volume=MUSIC_VOLUME_GAMEPLAY;
chillMusicAudio.loop=true;
chillMusicAudio.preload='auto';
chillMusicAudio.volume=0;
menuClickAudio.preload='auto';
menuClickAudio.volume=0.2;
startAudio.preload='auto';
startAudio.volume=0.23;
warpAudio.preload='auto';
warpAudio.volume=0.3;
warpWheeAudio.preload='auto';
warpWheeAudio.volume=0.28;
deathAudio.preload='auto';
deathAudio.volume=0.32;
deathErrorAudio.preload='auto';
deathErrorAudio.volume=0.42;
sockHitAudio.preload='auto';
sockHitAudio.volume=0.4;
sockHitAudio.preservesPitch=false;
sockHitAlertAudio.preload='auto';
sockHitAlertAudio.volume=0.34;
discoPickupAudio.preload='auto';
discoPickupAudio.volume=0.42;
eatAudioPool.forEach(audio=>{
  audio.preload='auto';
  audio.volume=0.72;
  audio.preservesPitch=false;
});
let musicMode='play';
let musicPressed=false;
let leaderboardPressed=false;
let playAgainPressed=false;
let leaderboardPlayAgainPressed=false;
let leaderboardPreorderPressed=false;
let wormMessageLoopId=0;
let wormMainSequenceStarted=false;
let audioEnabled=true;
let caterpillarTalking=false;
let musicStopFx=null;
let chillMusicFade=null;
let cabinetDentState=null;
let leaderboardEntries=[];
let leaderboardPromptedThisGame=false;
let pendingLeaderboardEntryId=null;
let leaderboardModalMode=null;
let suppressStartKeyUntil=0;
let lastRunWasTopChomper=false;
let pendingShareCardFile=null;
let pendingShareText='';
let pendingSharePreviewUrl='';
let gamePaused=false;
const BOARD_LAYOUTS={
  pre:{
    cols:START_GRID.cols,
    rows:START_GRID.rows,
    width:1824,
    height:1392,
    inset:48,
    mapImg:prewarpMapImg,
  },
  post:{
    cols:WARP_GRID.cols,
    rows:WARP_GRID.rows,
    width:2400,
    height:1920,
    inset:48,
    mapImg:postwarpMapImg,
  },
};
let currentBoardLayout=BOARD_LAYOUTS.pre;
let cellSpanX=NOMINAL_CELL;
let cellSpanY=NOMINAL_CELL;
let playfieldOffsetX=0;
let playfieldOffsetY=0;
let gameplayDisplayRect={x:0,y:0,w:0,h:0};

const MUSIC_BUTTONS={
  play:{up:'./assets/images/buttons/PlayUp.png',down:'./assets/images/buttons/PlayDown.png'},
  sound:{up:'./assets/images/buttons/SoundUp.png',down:'./assets/images/buttons/SoundDown.png'},
  mute:{up:'./assets/images/buttons/MuteUP.png',down:'./assets/images/buttons/MuteDown.png'},
};
const BUTTON_UI_ART={
  start:{off:'./assets/HC_GAME/UI/buttons_StartOff.png',on:'./assets/HC_GAME/UI/buttons_StartOn.png'},
  select:{off:'./assets/HC_GAME/UI/buttons_SelectOff.png',on:'./assets/HC_GAME/UI/buttons_SelectOn.png'},
  pause:{off:'./assets/HC_GAME/UI/buttons_PauseOff.png',on:'./assets/HC_GAME/UI/buttons_PauseOn.png'},
  sound:{off:'./assets/HC_GAME/UI/buttons_SoundOff.png',on:'./assets/HC_GAME/UI/buttons_SoundOn.png'},
  preorder:{off:'./assets/HC_GAME/UI/preorder_off.png',on:'./assets/HC_GAME/UI/preorder_on.png'},
};
const PREORDER_URL='https://www.simonandschuster.com/books/Horizontal-Crocodile/Scott-Rothman/9781665988674';
const CRT_MULTIPLIER=0.3;
const GAMEOVER_BUTTONS={
  leaderboard:{
    up:'./assets/HC_GAME/UI/leaderboard_up.png',
    down:'./assets/HC_GAME/UI/leaderboard_down.png',
  },
  playAgain:{
    up:'./assets/HC_GAME/UI/PlayAgain_UP.png',
    down:'./assets/HC_GAME/UI/PlayAgain_Down.png',
  },
  leaderboardPlayAgain:{
    up:'./assets/HC_GAME/UI/PlayAgain_UP.png',
    down:'./assets/HC_GAME/UI/PlayAgain_Down.png',
  },
  preorder:{
    up:'./assets/HC_GAME/UI/preorder_up.png',
    down:'./assets/HC_GAME/UI/preorder_down.png',
  },
};

function updateMusicButton(){
  if(!musicToggleImg) return;
  const state=MUSIC_BUTTONS[musicMode];
  musicToggleImg.src=musicPressed ? state.down : state.up;
  if(buttonSoundArt){
    buttonSoundArt.src=musicMode==='sound' ? BUTTON_UI_ART.sound.on : BUTTON_UI_ART.sound.off;
  }
}

function updatePauseButton(){
  if(pauseToggle) pauseToggle.textContent=gamePaused ? 'RESUME' : 'PAUSE';
  if(buttonPauseArt){
    buttonPauseArt.src=gamePaused ? BUTTON_UI_ART.pause.on : BUTTON_UI_ART.pause.off;
  }
}

function updateGameoverButtons(){
  if(leaderboardBtnImg){
    leaderboardBtnImg.src=leaderboardPressed ? GAMEOVER_BUTTONS.leaderboard.down : GAMEOVER_BUTTONS.leaderboard.up;
  }
  if(playAgainBtnImg){
    playAgainBtnImg.src=playAgainPressed ? GAMEOVER_BUTTONS.playAgain.down : GAMEOVER_BUTTONS.playAgain.up;
  }
  if(leaderboardPlayAgainBtnImg){
    leaderboardPlayAgainBtnImg.src=leaderboardPlayAgainPressed ? GAMEOVER_BUTTONS.leaderboardPlayAgain.down : GAMEOVER_BUTTONS.leaderboardPlayAgain.up;
  }
  if(leaderboardPreorderBtnImg){
    leaderboardPreorderBtnImg.src=leaderboardPreorderPressed ? GAMEOVER_BUTTONS.preorder.down : GAMEOVER_BUTTONS.preorder.up;
  }
}

function showLeaderboardView(show){
  if(gameoverMain) gameoverMain.style.display=show?'none':'block';
  if(leaderboardScreen) leaderboardScreen.style.display=show?'flex':'none';
  document.body.classList.toggle('leaderboard-view-active',!!show);
  if(!show && isLeaderboardEntryModalOpen()) closeLeaderboardEntryModal();
  if(cabinetDent){
    cabinetDent.style.display='none';
  }
}

function showGameoverButtonPress(kind,onActivate){
  if(kind==='leaderboard'){
    leaderboardPressed=true;
  }else if(kind==='playAgain'){
    playAgainPressed=true;
  }else if(kind==='leaderboardPlayAgain'){
    leaderboardPlayAgainPressed=true;
  }
  updateGameoverButtons();
  window.setTimeout(()=>{
    if(kind==='leaderboard'){
      leaderboardPressed=false;
    }else if(kind==='playAgain'){
      playAgainPressed=false;
    }else if(kind==='leaderboardPlayAgain'){
      leaderboardPlayAgainPressed=false;
    }
    updateGameoverButtons();
    if(typeof onActivate==='function') onActivate();
  },120);
}

function ordinalRank(n){
  if(n===1) return '1ST';
  if(n===2) return '2ND';
  if(n===3) return '3RD';
  return `${n}TH`;
}

function normalizeLeaderboardEntries(entries){
  return (entries||[])
    .map(entry=>({
      name:String(entry?.name||'???').trim().toUpperCase().slice(0,16)||'???',
      score:Math.max(0,Number(entry?.score)||0),
      id:String(entry?.id||''),
      email:String(entry?.email||'').trim(),
    }))
    .sort((a,b)=>b.score-a.score)
    .slice(0,10);
}

function loadLeaderboardEntries(){
  try{
    const raw=window.localStorage.getItem(LEADERBOARD_STORAGE_KEY);
    if(!raw) return normalizeLeaderboardEntries(DEFAULT_LEADERBOARD_ENTRIES);
    const parsed=JSON.parse(raw);
    const normalized=normalizeLeaderboardEntries(parsed);
    return normalized.length ? normalized : normalizeLeaderboardEntries(DEFAULT_LEADERBOARD_ENTRIES);
  }catch{
    return normalizeLeaderboardEntries(DEFAULT_LEADERBOARD_ENTRIES);
  }
}

function saveLeaderboardEntries(){
  try{
    window.localStorage.setItem(LEADERBOARD_STORAGE_KEY,JSON.stringify(leaderboardEntries));
  }catch{}
}

function escapeHtml(value){
  return String(value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function renderLeaderboard(){
  if(!leaderboardEntriesEl) return;
  leaderboardEntriesEl.innerHTML=
    `<div class="leaderboard-header">`+
      `<div>RANK</div>`+
      `<div>SCORE</div>`+
      `<div>NAME</div>`+
    `</div>`+
    leaderboardEntries.map((entry,index)=>(
    `<div class="leaderboard-entry rank-${index+1}">`+
      `<div class="leaderboard-rank">${ordinalRank(index+1)}</div>`+
      `<div class="leaderboard-score">${entry.score} PTS</div>`+
      `<div class="leaderboard-name">${escapeHtml(entry.name)}</div>`+
    `</div>`
  )).join('');
}

function isLeaderboardEntryModalOpen(){
  return !!leaderboardModalMode || !!sharePreviewModal?.classList.contains('active');
}

function isLeaderboardViewActive(){
  return document.body.classList.contains('leaderboard-view-active');
}

function suppressStartFromCurrentKeypress(){
  suppressStartKeyUntil=Date.now()+350;
}

function focusEntryInput(input){
  if(!input) return;
  window.setTimeout(()=>{
    try{
      input.focus({preventScroll:true});
      input.setSelectionRange(input.value.length,input.value.length);
    }catch{
      input.focus();
    }
  },80);
}

function updateEmailInputFontSize(){
  if(!leaderboardEmailInput) return;
  const length=leaderboardEmailInput.value.length || leaderboardEmailInput.placeholder.length;
  const size=Math.max(22,60-Math.max(0,length-18)*1.55);
  leaderboardEmailInput.style.fontSize=`${size}px`;
}

function showLeaderboardEntryModal(mode){
  leaderboardModalMode=mode;
  if(leaderboardEntryOverlay){
    leaderboardEntryOverlay.classList.add('active','dimmed');
    leaderboardEntryOverlay.setAttribute('aria-hidden','false');
  }
  if(nameEntryModal) nameEntryModal.classList.toggle('active',mode==='name');
  if(emailEntryModal) emailEntryModal.classList.toggle('active',mode==='email');
  if(mode==='name'){
    if(leaderboardNameInput) leaderboardNameInput.value='';
    focusEntryInput(leaderboardNameInput);
  }else if(mode==='email'){
    if(leaderboardEmailInput) leaderboardEmailInput.value='';
    updateEmailInputFontSize();
    focusEntryInput(leaderboardEmailInput);
  }
}

function closeLeaderboardEntryModal(){
  leaderboardModalMode=null;
  pendingLeaderboardEntryId=null;
  if(nameEntryModal) nameEntryModal.classList.remove('active');
  if(emailEntryModal) emailEntryModal.classList.remove('active');
  if(sharePreviewModal) sharePreviewModal.classList.remove('active');
  if(pendingSharePreviewUrl){
    URL.revokeObjectURL(pendingSharePreviewUrl);
    pendingSharePreviewUrl='';
  }
  pendingShareCardFile=null;
  pendingShareText='';
  if(sharePreviewImage) sharePreviewImage.removeAttribute('src');
  if(sharePreviewScore) sharePreviewScore.textContent='';
  if(leaderboardEntryOverlay){
    leaderboardEntryOverlay.classList.remove('dimmed');
    window.setTimeout(()=>{
      if(leaderboardModalMode) return;
      leaderboardEntryOverlay.classList.remove('active');
      leaderboardEntryOverlay.setAttribute('aria-hidden','true');
    },180);
  }
}

function cleanLeaderboardName(value){
  return String(value||'')
    .trim()
    .replace(/\s+/g,' ')
    .toUpperCase()
    .slice(0,16) || 'YOUR NAME';
}

function submitLeaderboardName(){
  if(leaderboardModalMode!=='name') return false;
  suppressStartFromCurrentKeypress();
  const cleaned=cleanLeaderboardName(leaderboardNameInput?.value);
  if(pendingLeaderboardEntryId){
    leaderboardEntries=normalizeLeaderboardEntries(leaderboardEntries.map(entry=>(
      entry.id===pendingLeaderboardEntryId ? {...entry,name:cleaned} : entry
    )));
    saveLeaderboardEntries();
    renderLeaderboard();
  }
  showLeaderboardEntryModal('email');
  return true;
}

function submitLeaderboardEmail(skip=false){
  if(leaderboardModalMode!=='email') return false;
  suppressStartFromCurrentKeypress();
  const cleaned=String(leaderboardEmailInput?.value||'').trim();
  if(!skip && !cleaned){
    focusEntryInput(leaderboardEmailInput);
    return true;
  }
  if(!skip && cleaned && pendingLeaderboardEntryId){
    leaderboardEntries=normalizeLeaderboardEntries(leaderboardEntries.map(entry=>(
      entry.id===pendingLeaderboardEntryId ? {...entry,email:cleaned} : entry
    )));
    saveLeaderboardEntries();
  }
  closeLeaderboardEntryModal();
  return true;
}

function maybeRecordLeaderboardScore(){
  if(leaderboardPromptedThisGame) return;
  if(!Number.isFinite(score)) return;
  const cutoff=leaderboardEntries.length<10 ? -Infinity : leaderboardEntries[leaderboardEntries.length-1].score;
  if(leaderboardEntries.length>=10 && score<=cutoff) return;
  leaderboardPromptedThisGame=true;
  lastRunWasTopChomper=true;
  pendingLeaderboardEntryId=`score-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  leaderboardEntries=normalizeLeaderboardEntries([...leaderboardEntries,{id:pendingLeaderboardEntryId,name:'CAT R. PEELER',score}]);
  saveLeaderboardEntries();
  renderLeaderboard();
  showLeaderboardView(true);
  showLeaderboardEntryModal('name');
}

function testTop10Flow(){
  playMenuClick();
  if(gameRunning){
    gameRunning=false;
    if(animId) cancelAnimationFrame(animId);
  }
  score=Math.max(best||0,leaderboardEntries[0]?.score||0,610)+10;
  lastRunScore=score;
  lastRunWasTopChomper=false;
  best=Math.max(best||0,score);
  leaderboardPromptedThisGame=false;
  maybeRecordLeaderboardScore();
  updateHUD();
}

function getShareScore(){
  if(typeof lastRunScore==='number' && Number.isFinite(lastRunScore) && lastRunScore>0) return lastRunScore;
  if(typeof score==='number' && Number.isFinite(score) && score>0) return score;
  if(typeof best==='number' && Number.isFinite(best) && best>0) return best;
  return leaderboardEntries[0]?.score || 0;
}

function flashShareButtonLabel(label){
  if(!leaderboardPreorderBtn) return;
  const original=leaderboardPreorderBtn.textContent;
  leaderboardPreorderBtn.textContent=label;
  window.setTimeout(()=>{
    if(leaderboardPreorderBtn) leaderboardPreorderBtn.textContent=original;
  },1200);
}

function loadShareCardImage(src){
  return new Promise((resolve,reject)=>{
    const img=new Image();
    img.onload=()=>resolve(img);
    img.onerror=reject;
    img.src=src;
  });
}

function getShareCardSrc(){
  return lastRunWasTopChomper ? SHARE_CARD_IMAGES.top : SHARE_CARD_IMAGES.standard;
}

function shouldUseNativeShareFirst(){
  return window.matchMedia?.('(pointer: coarse)').matches || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function canvasToPngBlob(canvas){
  return new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
}

function blobToDataUrl(blob){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(reader.result);
    reader.onerror=reject;
    reader.readAsDataURL(blob);
  });
}

async function createShareCardFile(sharedScore){
  if(document.fonts?.ready){
    try{ await document.fonts.ready; }catch{}
  }
  const cardSrc=getShareCardSrc();
  const img=await loadShareCardImage(cardSrc);
  const canvas=document.createElement('canvas');
  canvas.width=img.naturalWidth||1500;
  canvas.height=img.naturalHeight||1500;
  const shareCtx=canvas.getContext('2d');
  shareCtx.imageSmoothingEnabled=false;
  shareCtx.drawImage(img,0,0,canvas.width,canvas.height);
  shareCtx.save();
  shareCtx.fillStyle='#a4ff08';
  shareCtx.textAlign='center';
  shareCtx.textBaseline='middle';
  shareCtx.font='220px "Press Start 2P", monospace';
  shareCtx.fillText(String(sharedScore),canvas.width/2,1186);
  shareCtx.restore();
  const blob=await canvasToPngBlob(canvas);
  if(!blob) return null;
  return new File([blob],'horizontal-crocodile-score.png',{type:'image/png'});
}

async function createShareCardSvgBlob(sharedScore){
  const cardSrc=getShareCardSrc();
  let imageHref=new URL(cardSrc,document.baseURI).href;
  try{
    const response=await fetch(cardSrc);
    const blob=await response.blob();
    imageHref=await blobToDataUrl(blob);
  }catch{}
  const svg=
    `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="1500" viewBox="0 0 1500 1500">`+
    `<image href="${imageHref}" width="1500" height="1500" preserveAspectRatio="none"/>`+
    `<text x="750" y="1186" text-anchor="middle" dominant-baseline="middle" `+
    `fill="#a4ff08" font-family="'Press Start 2P', monospace" font-size="120">${escapeHtml(sharedScore)}</text>`+
    `</svg>`;
  return new Blob([svg],{type:'image/svg+xml'});
}

function downloadShareCardFile(file){
  if(!file) return false;
  const url=URL.createObjectURL(file);
  const link=document.createElement('a');
  link.href=url;
  link.download=file.name||'horizontal-crocodile-score.png';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(()=>URL.revokeObjectURL(url),1000);
  return true;
}

function downloadShareCardBlob(blob,name){
  if(!blob) return false;
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url;
  link.download=name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(()=>URL.revokeObjectURL(url),1000);
  return true;
}

function showSharePreview(file,text){
  if(!sharePreviewModal || !sharePreviewImage || !leaderboardEntryOverlay) return false;
  pendingShareCardFile=file||null;
  pendingShareText=text;
  const sharedScore=getShareScore();
  if(pendingSharePreviewUrl) URL.revokeObjectURL(pendingSharePreviewUrl);
  pendingSharePreviewUrl=file ? URL.createObjectURL(file) : '';
  sharePreviewImage.onerror=()=>{
    sharePreviewImage.onerror=null;
    sharePreviewImage.src=getShareCardSrc();
  };
  sharePreviewImage.src=pendingSharePreviewUrl || getShareCardSrc();
  if(sharePreviewScore) sharePreviewScore.textContent=file ? '' : String(sharedScore);
  if(sharePreviewDownloadBtn) sharePreviewDownloadBtn.disabled=false;
  if(nameEntryModal) nameEntryModal.classList.remove('active');
  if(emailEntryModal) emailEntryModal.classList.remove('active');
  leaderboardModalMode=null;
  sharePreviewModal.classList.add('active');
  leaderboardEntryOverlay.classList.add('active','dimmed');
  leaderboardEntryOverlay.setAttribute('aria-hidden','false');
  return true;
}

async function shareLeaderboardScore(){
  const sharedScore=getShareScore();
  const text=`I scored ${sharedScore} in Horizontal Crocodile. Can you out-chomp me?\nhorizontalcrocodile.com`;
  const shareData={
    title:'Horizontal Crocodile',
    text,
  };
  let shareCardFile=null;
  try{
    shareCardFile=await createShareCardFile(sharedScore);
  }catch{
    shareCardFile=null;
  }
  const nativeShareFirst=shouldUseNativeShareFirst();
  if(!nativeShareFirst && showSharePreview(shareCardFile,text)) return;
  if(nativeShareFirst && navigator.share){
    try{
      if(shareCardFile && navigator.canShare?.({files:[shareCardFile]})){
        await navigator.share({...shareData,files:[shareCardFile]});
        return;
      }else{
        await navigator.share(shareData);
        return;
      }
    }catch(err){
      if(err && err.name==='AbortError') return;
    }
  }
  if(showSharePreview(shareCardFile,text)) return;
  try{
    await navigator.clipboard.writeText(text);
    flashShareButtonLabel('COPIED!');
  }catch{
    flashShareButtonLabel('SHARE READY');
  }
}

leaderboardEntries=loadLeaderboardEntries();
renderLeaderboard();

function setAudioEnabled(enabled){
  audioEnabled=enabled;
  musicAudio.muted=!enabled;
  chillMusicAudio.muted=!enabled;
  menuClickAudio.muted=!enabled;
  startAudio.muted=!enabled;
  warpAudio.muted=!enabled;
  warpWheeAudio.muted=!enabled;
  deathAudio.muted=!enabled;
  deathErrorAudio.muted=!enabled;
  sockHitAudio.muted=!enabled;
  sockHitAlertAudio.muted=!enabled;
  discoPickupAudio.muted=!enabled;
  eatAudioPool.forEach(audio=>{audio.muted=!enabled;});
  wormVoicePool.forEach(audio=>{audio.muted=!enabled;});
}

async function activateMusic(){
  if(!audioEnabled) return;
  musicAudio.muted=false;
  try{
    await musicAudio.play();
  }catch(_err){
    // If the file is missing or autoplay is blocked, keep the UI responsive.
  }
}

function setMusicVolume(volume){
  musicAudio.volume=Math.max(0,Math.min(1,volume));
}

function setChillMusicVolume(volume){
  chillMusicAudio.volume=Math.max(0,Math.min(1,volume));
}

function resetMusicPlaybackState(){
  musicStopFx=null;
  musicAudio.playbackRate=1;
  musicAudio.preservesPitch=false;
  setMusicVolume(MUSIC_VOLUME_GAMEPLAY);
}

async function restartMusicForGameplay(){
  chillMusicFade=null;
  chillMusicAudio.pause();
  chillMusicAudio.currentTime=0;
  setChillMusicVolume(0);
  resetMusicPlaybackState();
  musicAudio.currentTime=0;
  if(!audioEnabled || musicMode==='mute') return;
  musicAudio.muted=false;
  try{
    await musicAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable music playback.
  }
}

function startMusicStopFx(now=performance.now()){
  if(!audioEnabled || musicMode==='mute') return;
  musicStopFx={
    start:now,
    baseVolume:musicAudio.volume,
    baseRate:musicAudio.playbackRate||1,
  };
}

function updateMusicStopFx(now){
  if(!musicStopFx) return;
  const p=Math.max(0,Math.min(1,(now-musicStopFx.start)/MUSIC_STOP_FX_MS));
  const eased=1-Math.pow(1-p,2.2);
  musicAudio.preservesPitch=false;
  musicAudio.playbackRate=Math.max(0.08,musicStopFx.baseRate*(1-eased*0.92));
  setMusicVolume(musicStopFx.baseVolume*(1-eased*0.7));
  if(p>=1){
    musicAudio.pause();
    musicStopFx=null;
  }
}

async function startChillMusicFadeIn(now=performance.now()){
  chillMusicFade={
    start:now+CHILL_MUSIC_DELAY_MS,
    duration:CHILL_MUSIC_FADE_MS,
  };
  chillMusicAudio.currentTime=0;
  chillMusicAudio.playbackRate=1;
  chillMusicAudio.preservesPitch=false;
  setChillMusicVolume(0);
  if(!audioEnabled || musicMode==='mute') return;
  chillMusicAudio.muted=false;
  try{
    await chillMusicAudio.play();
  }catch(_err){
    chillMusicFade=null;
  }
}

function updateChillMusicFade(now){
  if(!chillMusicFade) return;
  if(now<chillMusicFade.start) return;
  const p=Math.max(0,Math.min(1,(now-chillMusicFade.start)/chillMusicFade.duration));
  setChillMusicVolume(CHILL_MUSIC_VOLUME*p);
  if(p>=1){
    chillMusicFade=null;
  }
}

function playMenuClick(){
  if(!audioEnabled) return;
  try{
    menuClickAudio.currentTime=0;
    void menuClickAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable SFX playback.
  }
}

function playStartSound(){
  if(!audioEnabled) return;
  try{
    startAudio.currentTime=0;
    void startAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable SFX playback.
  }
}

function playWarpSound(){
  if(!audioEnabled) return;
  try{
    warpAudio.currentTime=0;
    void warpAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable SFX playback.
  }
}

function playWarpWheeSound(){
  if(!audioEnabled) return;
  try{
    warpWheeAudio.currentTime=0;
    void warpWheeAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable SFX playback.
  }
}

function playDeathSound(){
  if(!audioEnabled) return;
  try{
    deathAudio.currentTime=0;
    void deathAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable SFX playback.
  }
  try{
    deathErrorAudio.currentTime=0;
    void deathErrorAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable SFX playback.
  }
}

function playEatSound(){
  if(!audioEnabled) return;
  const pattern=[
    {delay:0, rate:1.58, volume:0.72},
    {delay:78, rate:1.92, volume:0.6},
    {delay:156, rate:1.42, volume:0.5},
  ];
  pattern.forEach((hit,index)=>{
    const audio=eatAudioPool[index % eatAudioPool.length];
    window.setTimeout(()=>{
      try{
        audio.pause();
        audio.currentTime=0;
        audio.preservesPitch=false;
        audio.playbackRate=hit.rate;
        audio.volume=hit.volume;
        void audio.play();
      }catch(_err){
        // Ignore blocked or unavailable SFX playback.
      }
    },hit.delay);
  });
}

function playSockHitSound(){
  if(!audioEnabled) return;
  try{
    sockHitAudio.currentTime=0.09;
    sockHitAudio.playbackRate=1.28;
    void sockHitAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable SFX playback.
  }
  try{
    sockHitAlertAudio.currentTime=0;
    void sockHitAlertAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable SFX playback.
  }
}

function playDiscoPickupSound(){
  if(!audioEnabled) return;
  try{
    discoPickupAudio.currentTime=0;
    void discoPickupAudio.play();
  }catch(_err){
    // Ignore blocked or unavailable SFX playback.
  }
}

function triggerGameStart(){
  if(gameRunning) return;
  if(musicMode==='play'){
    musicMode='sound';
    setAudioEnabled(true);
    activateMusic();
    updateMusicButton();
  }
  playStartSound();
  wormMessageLoopId++;
  setCaterpillarTalking(false);
  if(wormMessage) wormMessage.textContent='';
  wormVoicePool.forEach(audio=>{
    try{
      audio.pause();
      audio.currentTime=0;
    }catch(_err){
      // Ignore blocked or unavailable speech playback cleanup.
    }
  });
  startGame();
  startGameplayWormSequence();
}

function shouldStartFromKeyEvent(e){
  return e.key==='Enter' || e.key===' ' || e.code==='Space';
}

function playWormBlip(){
  if(!audioEnabled) return;
  if(!wormVoicePool.length) return;
  const audio=wormVoicePool[Math.floor(Math.random()*wormVoicePool.length)];
  try{
    audio.currentTime=0;
    void audio.play();
  }catch(_err){
    // Ignore blocked or unavailable speech playback.
  }
}

function startWormTalkLights(){
  if(!wormTalkLights) return;
  let lastIndex=-1;
  const scheduleNext=()=>{
    const wait=950+Math.random()*2200;
    window.setTimeout(()=>{
      let nextIndex=Math.floor(Math.random()*WORM_TALK_LIGHTS.length);
      if(nextIndex===lastIndex) nextIndex=(nextIndex+1)%WORM_TALK_LIGHTS.length;
      lastIndex=nextIndex;
      wormTalkLights.src=WORM_TALK_LIGHTS[nextIndex];
      wormTalkLights.style.opacity='1';
      const hold=120+Math.random()*240;
      window.setTimeout(()=>{
        wormTalkLights.style.opacity='0';
        scheduleNext();
      },hold);
    },wait);
  };
  scheduleNext();
}

function setCaterpillarTalking(isTalking){
  caterpillarTalking=isTalking;
  if(caterpillarIdleStrip) caterpillarIdleStrip.style.display=isTalking?'none':'block';
  if(caterpillarTalkStrip) caterpillarTalkStrip.style.display=isTalking?'block':'none';
}

function startMainWormSequence(){
  if(wormMainSequenceStarted) return;
  wormMainSequenceStarted=true;
  startWormTypewriter(WORM_TUTORIAL_MESSAGES);
}

function startGameplayWormSequence(){
  if(!gameRunning) return;
  const gameplayLine=WORM_GAMEPLAY_MESSAGES[Math.floor(Math.random()*WORM_GAMEPLAY_MESSAGES.length)];
  startWormTypewriter([gameplayLine],{
    maxCycles:1,
  });
}

function showGameplayWormCallout(message,{resume=false,delay=1500}={}){
  if(!wormMessage) return;
  startWormTypewriter([message],{
    maxCycles:1,
    onComplete:()=>{
      if(!resume||!gameRunning) return;
      window.setTimeout(()=>{
        if(gameRunning) startGameplayWormSequence();
      },delay);
    },
  });
}

function showWormInfoOnce(key){
  if(!gameRunning||wormInfoSeen[key]||!WORM_INFO_MESSAGES[key]) return;
  wormInfoSeen[key]=true;
  showGameplayWormCallout(WORM_INFO_MESSAGES[key],{resume:false,delay:1700});
}

function showDeathWormLine(){
  const line=WORM_DEATH_MESSAGES[Math.floor(Math.random()*WORM_DEATH_MESSAGES.length)];
  startWormTypewriter([line,WORM_DEATH_FINAL_MESSAGE],{
    maxCycles:1,
    holdFinal:true,
  });
}

function startWormTypewriter(messages,options={}){
  if(!wormMessage) return;
  const {maxCycles=Infinity,onComplete=null,holdFinal=false}=options;
  const loopId=++wormMessageLoopId;
  let messageIndex=0;
  let blipCount=0;
  let completedCycles=0;

  const typeMessage=()=>{
    if(loopId!==wormMessageLoopId) return;
    const message=messages[messageIndex];
    wormMessage.textContent='';
    wormMessage.style.opacity='1';
    wormMessage.style.transform='translateY(0)';
    wormMessage.style.transition='none';
    setCaterpillarTalking(true);

    let charIndex=0;
    const tick=()=>{
      if(loopId!==wormMessageLoopId) return;
      if(charIndex>=message.length){
        setCaterpillarTalking(false);
        const nextIndex=(messageIndex+1)%messages.length;
        const isFinalMessage=nextIndex===0 && completedCycles+1>=maxCycles;
        if(holdFinal&&isFinalMessage){
          if(typeof onComplete==='function') onComplete();
          return;
        }
        window.setTimeout(()=>{
          if(loopId!==wormMessageLoopId) return;
          wormMessage.style.transition='transform 400ms linear, opacity 400ms linear';
          wormMessage.style.transform='translateY(-10px)';
          wormMessage.style.opacity='0';
          window.setTimeout(()=>{
            if(loopId!==wormMessageLoopId) return;
            if(nextIndex===0){
              completedCycles++;
              if(completedCycles>=maxCycles){
                if(typeof onComplete==='function') onComplete();
                return;
              }
            }
            messageIndex=nextIndex;
            typeMessage();
          },400);
        },1500);
        return;
      }
      const char=message[charIndex];
      wormMessage.textContent+=char;
      if(/[A-Z0-9]/.test(char)){
        blipCount++;
        if(blipCount%3===0) playWormBlip();
      }
      charIndex++;
      const delay=char===' ' ? 55 : char==='.' ? 110 : 42;
      window.setTimeout(tick,delay);
    };

    tick();
  };

  typeMessage();
}

function toggleMusicMode(){
  startMainWormSequence();
  if(musicMode==='play'){
    musicMode='sound';
    setAudioEnabled(true);
    activateMusic();
  }else if(musicMode==='sound'){
    musicMode='mute';
    setAudioEnabled(false);
  }else{
    musicMode='sound';
    setAudioEnabled(true);
    activateMusic();
  }
  updateMusicButton();
}


function togglePause(forceState=null){
  if(!gameRunning) return;
  const nextState=typeof forceState==='boolean' ? forceState : !gamePaused;
  if(nextState===gamePaused) return;
  gamePaused=nextState;
  if(!gamePaused){
    lastTickTime=performance.now();
  }
  updatePauseButton();
  playMenuClick();
}

if(musicToggle){
  musicToggle.addEventListener('pointerdown',()=>{
    musicPressed=true;
    updateMusicButton();
  });
  const releaseMusicButton=()=>{
    musicPressed=false;
    updateMusicButton();
  };
  musicToggle.addEventListener('pointerup',releaseMusicButton);
  musicToggle.addEventListener('pointerleave',releaseMusicButton);
  musicToggle.addEventListener('pointercancel',releaseMusicButton);
  musicToggle.addEventListener('click',toggleMusicMode);
}
if(pauseToggle){
  pauseToggle.addEventListener('click',()=>togglePause());
}
const warpDebugBtn=document.getElementById('warp-debug-btn');
if(warpDebugBtn){
  warpDebugBtn.addEventListener('click',()=>{
    if(!gameRunning||gridWarped) return;
    expandGrid();
    postWarpHoldUntil=animTime+800;
    placeFood();
  });
}
if(buttonSoundHit){
  buttonSoundHit.addEventListener('click',()=>{
    playMenuClick();
    toggleMusicMode();
  });
}
if(buttonPauseHit){
  buttonPauseHit.addEventListener('click',()=>togglePause());
}
if(buttonPreorderHit){
  let suppressPreorderClick=false;
  const setPreorderPressed=(pressed)=>{
    if(buttonPreorderArt) buttonPreorderArt.src=pressed ? BUTTON_UI_ART.preorder.on : BUTTON_UI_ART.preorder.off;
  };
  const openPreorderLink=()=>{
    playMenuClick();
    window.open(PREORDER_URL,'_blank','noopener,noreferrer');
  };
  buttonPreorderHit.addEventListener('pointerdown',()=>setPreorderPressed(true));
  buttonPreorderHit.addEventListener('pointerup',()=>{
    setPreorderPressed(false);
    suppressPreorderClick=true;
    openPreorderLink();
    window.setTimeout(()=>{suppressPreorderClick=false;},0);
  });
  buttonPreorderHit.addEventListener('pointerleave',()=>setPreorderPressed(false));
  buttonPreorderHit.addEventListener('pointercancel',()=>setPreorderPressed(false));
  buttonPreorderHit.addEventListener('click',()=>{
    if(suppressPreorderClick) return;
    openPreorderLink();
  });
}
if(buttonSelectHit){
  const setSelectPressed=(pressed)=>{
    if(buttonSelectArt) buttonSelectArt.src=BUTTON_UI_ART.select.on;
  };
  buttonSelectHit.addEventListener('pointerdown',()=>setSelectPressed(true));
  buttonSelectHit.addEventListener('pointerup',()=>setSelectPressed(false));
  buttonSelectHit.addEventListener('pointerleave',()=>setSelectPressed(false));
  buttonSelectHit.addEventListener('pointercancel',()=>setSelectPressed(false));
  buttonSelectHit.addEventListener('click',()=>{
    if(!gameRunning||gridWarped) return;
    playMenuClick();
    expandGrid();
    postWarpHoldUntil=animTime+800;
    placeFood();
  });
}
if(buttonStartHit){
  let suppressStartClick=false;
  const setStartPressed=(pressed)=>{
    if(buttonStartArt) buttonStartArt.src=pressed ? BUTTON_UI_ART.start.on : BUTTON_UI_ART.start.off;
  };
  const activateStartButton=()=>{
    if(isLeaderboardEntryModalOpen()){
      playMenuClick();
      if(leaderboardModalMode==='name') submitLeaderboardName();
      else if(leaderboardModalMode==='email') submitLeaderboardEmail(false);
      return;
    }
    if(gameRunning) return;
    playMenuClick();
    triggerGameStart();
  };
  buttonStartHit.addEventListener('pointerdown',()=>setStartPressed(true));
  buttonStartHit.addEventListener('pointerup',()=>{
    setStartPressed(false);
    suppressStartClick=true;
    activateStartButton();
    window.setTimeout(()=>{suppressStartClick=false;},0);
  });
  buttonStartHit.addEventListener('pointerleave',()=>setStartPressed(false));
  buttonStartHit.addEventListener('pointercancel',()=>setStartPressed(false));
  buttonStartHit.addEventListener('click',()=>{
    if(suppressStartClick) return;
    activateStartButton();
  });
}
if(leaderboardBtn){
  leaderboardBtn.addEventListener('pointerdown',()=>{
    leaderboardPressed=true;
    updateGameoverButtons();
  });
  const releaseLeaderboardButton=()=>{
    leaderboardPressed=false;
    updateGameoverButtons();
  };
  leaderboardBtn.addEventListener('pointerup',releaseLeaderboardButton);
  leaderboardBtn.addEventListener('pointerleave',releaseLeaderboardButton);
  leaderboardBtn.addEventListener('pointercancel',releaseLeaderboardButton);
  leaderboardBtn.addEventListener('click',()=>{
    playMenuClick();
    showGameoverButtonPress('leaderboard',()=>showLeaderboardView(true));
  });
}
if(playAgainBtn){
  playAgainBtn.addEventListener('pointerdown',()=>{
    playAgainPressed=true;
    updateGameoverButtons();
  });
  const releasePlayAgainButton=()=>{
    playAgainPressed=false;
    updateGameoverButtons();
  };
  playAgainBtn.addEventListener('pointerup',releasePlayAgainButton);
  playAgainBtn.addEventListener('pointerleave',releasePlayAgainButton);
  playAgainBtn.addEventListener('pointercancel',releasePlayAgainButton);
  playAgainBtn.addEventListener('click',()=>{
    showGameoverButtonPress('playAgain',()=>triggerGameStart());
  });
}
if(leaderboardPlayAgainBtn){
  leaderboardPlayAgainBtn.addEventListener('pointerdown',()=>{
    leaderboardPlayAgainPressed=true;
    updateGameoverButtons();
  });
  const releaseLeaderboardPlayAgainButton=()=>{
    leaderboardPlayAgainPressed=false;
    updateGameoverButtons();
  };
  leaderboardPlayAgainBtn.addEventListener('pointerup',releaseLeaderboardPlayAgainButton);
  leaderboardPlayAgainBtn.addEventListener('pointerleave',releaseLeaderboardPlayAgainButton);
  leaderboardPlayAgainBtn.addEventListener('pointercancel',releaseLeaderboardPlayAgainButton);
  leaderboardPlayAgainBtn.addEventListener('click',()=>{
    showGameoverButtonPress('leaderboardPlayAgain',()=>triggerGameStart());
  });
}
if(leaderboardPreorderBtn){
  leaderboardPreorderBtn.addEventListener('pointerdown',()=>{
    leaderboardPreorderPressed=true;
    updateGameoverButtons();
  });
  const releaseLeaderboardPreorderButton=()=>{
    leaderboardPreorderPressed=false;
    updateGameoverButtons();
  };
  leaderboardPreorderBtn.addEventListener('pointerup',releaseLeaderboardPreorderButton);
  leaderboardPreorderBtn.addEventListener('pointerleave',releaseLeaderboardPreorderButton);
  leaderboardPreorderBtn.addEventListener('pointercancel',releaseLeaderboardPreorderButton);
  leaderboardPreorderBtn.addEventListener('click',()=>{
    playMenuClick();
    leaderboardPreorderPressed=false;
    updateGameoverButtons();
    shareLeaderboardScore();
  });
}
if(nameEntryModal){
  nameEntryModal.addEventListener('submit',e=>{
    e.preventDefault();
    playMenuClick();
    submitLeaderboardName();
  });
}
if(emailEntryModal){
  emailEntryModal.addEventListener('submit',e=>{
    e.preventDefault();
    playMenuClick();
    submitLeaderboardEmail(false);
  });
}
if(leaderboardEmailInput){
  leaderboardEmailInput.addEventListener('input',updateEmailInputFontSize);
}
if(leaderboardNameInput){
  leaderboardNameInput.addEventListener('input',()=>{
    const start=leaderboardNameInput.selectionStart;
    const end=leaderboardNameInput.selectionEnd;
    leaderboardNameInput.value=leaderboardNameInput.value.toUpperCase();
    try{ leaderboardNameInput.setSelectionRange(start,end); }catch{}
  });
}
if(leaderboardEmailLaterBtn){
  leaderboardEmailLaterBtn.addEventListener('click',()=>{
    playMenuClick();
    submitLeaderboardEmail(true);
  });
}
if(sharePreviewDownloadBtn){
  sharePreviewDownloadBtn.addEventListener('click',async()=>{
    playMenuClick();
    if(pendingShareCardFile && downloadShareCardFile(pendingShareCardFile)){
      flashShareButtonLabel('SAVED!');
      return;
    }
    if(window.location.protocol==='file:'){
      flashShareButtonLabel('OPEN LOCALHOST');
      return;
    }
    try{
      const fallbackBlob=await createShareCardSvgBlob(getShareScore());
      if(downloadShareCardBlob(fallbackBlob,'horizontal-crocodile-score.svg')){
        flashShareButtonLabel('SAVED!');
        return;
      }
    }catch{}
    flashShareButtonLabel('SAVE FAILED');
  });
}
if(sharePreviewCopyBtn){
  sharePreviewCopyBtn.addEventListener('click',async()=>{
    playMenuClick();
    try{
      await navigator.clipboard.writeText(pendingShareText);
      flashShareButtonLabel('COPIED!');
    }catch{
      flashShareButtonLabel('COPY FAILED');
    }
  });
}
if(sharePreviewCloseBtn){
  sharePreviewCloseBtn.addEventListener('click',()=>{
    playMenuClick();
    closeLeaderboardEntryModal();
  });
}
if(testTop10FlowBtn){
  testTop10FlowBtn.addEventListener('click',testTop10Flow);
}
updateMusicButton();
updatePauseButton();
updateGameoverButtons();
showLeaderboardView(false);
startWormTalkLights();
startWormTypewriter(WORM_INITIAL_MESSAGES,{
  maxCycles:WORM_INITIAL_REPEAT_COUNT,
  onComplete:()=>startMainWormSequence(),
});

function layoutCabinetStage(){
  // Handheld is the only active layout. The old desktop cabinet skin is removed,
  // but the stage still uses its coordinate system to position the screen opening.
  const css=getComputedStyle(document.documentElement);
  const openLeft=parseFloat(css.getPropertyValue('--opening-left'));
  const openTop=parseFloat(css.getPropertyValue('--opening-top'));
  const openW=parseFloat(css.getPropertyValue('--opening-width'));
  const openH=parseFloat(css.getPropertyValue('--opening-height'));
  const vpW=gameWrap.clientWidth;
  const vpH=gameWrap.clientHeight;
  const scale=Math.min(vpW/openW, vpH/openH);
  const tx=(vpW-openW*scale)/2 - openLeft*scale;
  const ty=(vpH-openH*scale)/2 - openTop*scale;
  cabinetStage.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;
  updateGameplayDisplayLayout();
}
function scheduleLayout(callback=layoutCabinetStage){
  if(layoutRaf) return;
  layoutRaf=requestAnimationFrame(()=>{
    layoutRaf=0;
    callback();
  });
}
// Handheld mode — always on
{
  document.body.classList.add('mobile-mode');

  const mobileHandheld=document.getElementById('mobile-handheld');

  // Position game-wrap over the handheld screen opening using JS after layout
  function positionGameWrapForMobile(){
    if(!mobileHandheld||!gameWrap) return;
    const r=mobileHandheld.getBoundingClientRect();
    if(!r.width||!r.height) return;
    gameWrap.style.position='fixed';
    gameWrap.style.left  =(r.left + 575/2556*r.width)+'px';
    gameWrap.style.top   =(r.top  +  62/1179*r.height)+'px';
    gameWrap.style.width =(1406/2556*r.width)+'px';
    gameWrap.style.height=(1093/1179*r.height)+'px';
    layoutCabinetStage();
  }
  requestAnimationFrame(positionGameWrapForMobile);
  window.addEventListener('resize',()=>scheduleLayout(positionGameWrapForMobile));

  // D-pad controls — direct calls, no iframe needed
  function haptic(){ if(navigator.vibrate) navigator.vibrate(18); }
  const dpadDirs={
    'dpad-up':   {dir:{x:0,y:-1},  overlay:'dpad-overlay-up'},
    'dpad-down': {dir:{x:0,y:1},   overlay:'dpad-overlay-down'},
    'dpad-left': {dir:{x:-1,y:0},  overlay:'dpad-overlay-left'},
    'dpad-right':{dir:{x:1,y:0},   overlay:'dpad-overlay-right'},
  };
  Object.entries(dpadDirs).forEach(([id,{dir,overlay}])=>{
    const btn=document.getElementById(id);
    const ovr=document.getElementById(overlay);
    if(!btn) return;
    btn.addEventListener('pointerdown',e=>{
      e.preventDefault();
      if(isLeaderboardEntryModalOpen()) return;
      if(ovr) ovr.classList.add('active');
      haptic();
      if(!gameRunning){ triggerGameStart(); return; }
      queueTurn(dir);
    });
    const release=()=>{ if(ovr) ovr.classList.remove('active'); };
    btn.addEventListener('pointerup', release);
    btn.addEventListener('pointercancel', release);
    btn.addEventListener('pointerleave', release);
  });

  const keyOverlayMap={
    ArrowUp:'dpad-overlay-up',   w:'dpad-overlay-up',   W:'dpad-overlay-up',
    ArrowDown:'dpad-overlay-down', s:'dpad-overlay-down', S:'dpad-overlay-down',
    ArrowLeft:'dpad-overlay-left', a:'dpad-overlay-left', A:'dpad-overlay-left',
    ArrowRight:'dpad-overlay-right', d:'dpad-overlay-right', D:'dpad-overlay-right',
  };
  window.addEventListener('keydown',e=>{
    const ovr=document.getElementById(keyOverlayMap[e.key]);
    if(ovr) ovr.classList.add('active');
  });
  window.addEventListener('keyup',e=>{
    const ovr=document.getElementById(keyOverlayMap[e.key]);
    if(ovr) ovr.classList.remove('active');
  });

}

window.addEventListener('resize',()=>scheduleLayout(layoutCabinetStage));
layoutCabinetStage();
function updateGameplayDisplayLayout(){
  if(!screenContent) return;
  const contentW=screenContent.clientWidth;
  const contentH=screenContent.clientHeight;
  if(!contentW || !contentH) return;
  const boardW=boardWidth();
  const boardH=boardHeight();
  if(!boardW || !boardH) return;
  const fitScale=Math.min(contentW/boardW,contentH/boardH);
  const fillScale=Math.max(contentW/boardW,contentH/boardH);
  const blend=GAMEPLAY_OVERSCAN_BLEND;
  const scale=fitScale + (fillScale-fitScale)*blend;
  const displayW=Math.round(boardW*scale);
  const displayH=Math.round(boardH*scale);
  const displayX=Math.round((contentW-displayW)/2);
  const displayY=Math.round((contentH-displayH)/2);
  gameplayDisplayRect={x:displayX,y:displayY,w:displayW,h:displayH};
  for(const el of [canvas,fxCanvas,crtOverlayCanvas,gameoverExclusion]){
    if(!el) continue;
    el.style.left=`${displayX}px`;
    el.style.top=`${displayY}px`;
    el.style.width=`${displayW}px`;
    el.style.height=`${displayH}px`;
  }
}
function setBoardLayout(layout){
  currentBoardLayout=layout;
  cols=layout.cols;
  rows=layout.rows;
  const usableWidth=layout.width-layout.inset*2;
  const usableHeight=layout.height-layout.inset*2;
  CELL=Math.floor(Math.min(usableWidth/cols,usableHeight/rows));
  cellSpanX=CELL;
  cellSpanY=CELL;
  playfieldOffsetX=layout.inset + (usableWidth-cols*CELL)/2;
  playfieldOffsetY=layout.inset + (usableHeight-rows*CELL)/2;
  resizeBoardCanvas();
  invalidateMapRenderCache();
  updateGameplayDisplayLayout();
  lastCRTDrawAt=-Infinity;
}
function boardWidth(){return currentBoardLayout.width;}
function boardHeight(){return currentBoardLayout.height;}
function cellToPx(x){return playfieldOffsetX + x*cellSpanX;}
function cellToPy(y){return playfieldOffsetY + y*cellSpanY;}
function resizeBoardCanvas(){
  canvas.width=boardWidth();
  canvas.height=boardHeight();
  ctx.imageSmoothingEnabled=false;
  fxCanvas.width=boardWidth();
  fxCanvas.height=boardHeight();
  fx.imageSmoothingEnabled=false;
  crtOverlayCanvas.width=boardWidth();
  crtOverlayCanvas.height=boardHeight();
  crtOverlayCtx.imageSmoothingEnabled=false;
}
function updateBoardSize(){
  resizeBoardCanvas();
}
setBoardLayout(currentBoardLayout);

function drawCRTOverlay(){
  const w=crtOverlayCanvas.width;
  const h=crtOverlayCanvas.height;
  if(w===0 || h===0) return;
  const crtMultiplier=CRT_MULTIPLIER;
  const gameoverCRTActive=!!(gameoverExclusion && gameoverExclusion.style.display==='block');
  if(gameRunning && !gamePaused && !gameoverCRTActive){
    crtOverlayCtx.clearRect(0,0,w,h);
    lastCRTDrawAt=animTime;
    return;
  }
  if(!gameoverCRTActive && animTime-lastCRTDrawAt<CRT_FRAME_MS_GAMEPLAY){
    return;
  }
  lastCRTDrawAt=animTime;
  crtOverlayCtx.clearRect(0,0,w,h);
  const flickerMin=gameoverCRTActive ? 0.92 : 0.97;
  const flickerSpan=gameoverCRTActive ? 0.08 : 0.03;
  const scanlineAlpha=(gameoverCRTActive ? 0.23 : 0.06)*crtMultiplier;
  const phosphorAlpha=(gameoverCRTActive ? 0.3 : 0.06)*crtMultiplier;
  const bloomPasses=gameoverCRTActive ? CRT_BLOOM_PASSES : CRT_BLOOM_PASSES_GAMEPLAY;

  crtFlickerCountdown--;
  if(crtFlickerCountdown<=0){
    crtFlickerOpacity=flickerMin+Math.random()*flickerSpan;
    crtFlickerCountdown=(gameoverCRTActive ? 4 : 8)+Math.floor(Math.random()*(gameoverCRTActive ? 4 : 5));
  }

  crtOverlayCtx.save();
  crtOverlayCtx.globalCompositeOperation='lighter';
  if(gameoverCRTActive) crtOverlayCtx.filter='brightness(1.55) contrast(1.42) saturate(1.18)';
  const bloomAlpha=(gameoverCRTActive ? CRT_BLOOM_ALPHA*1.28 : CRT_BLOOM_ALPHA)*crtMultiplier;
  const bloomScale=CRT_BLOOM_SCALE;
  const bloomW=w*bloomScale;
  const bloomH=h*bloomScale;
  const bloomBaseX=(w-bloomW)/2;
  const bloomBaseY=(h-bloomH)/2;
  if(bloomPasses.length){
    for(const pass of bloomPasses){
      crtOverlayCtx.globalAlpha=bloomAlpha*pass.a;
      crtOverlayCtx.drawImage(canvas,bloomBaseX+pass.x,bloomBaseY+pass.y,bloomW,bloomH);
      crtOverlayCtx.drawImage(fxCanvas,bloomBaseX+pass.x,bloomBaseY+pass.y,bloomW,bloomH);
    }
  }
  crtOverlayCtx.globalAlpha=(gameoverCRTActive ? 0.045 : 0.03)*crtMultiplier;
  if(gameoverCRTActive) crtOverlayCtx.filter='brightness(1.8) contrast(1.55) saturate(1.25)';
  crtOverlayCtx.drawImage(canvas,0,0,w,h);
  crtOverlayCtx.drawImage(fxCanvas,0,0,w,h);
  crtOverlayCtx.restore();

  const spacing=gameoverCRTActive?7:9;
  buildCRTCaches(w,h,spacing);
  const flickerMult=crtFlickerOpacity*(0.82+crtMultiplier*0.18);
  crtOverlayCtx.save();
  crtOverlayCtx.globalAlpha=flickerMult*scanlineAlpha;
  crtOverlayCtx.drawImage(crtScanlineCache,0,0);
  crtOverlayCtx.globalAlpha=flickerMult*phosphorAlpha;
  crtOverlayCtx.drawImage(crtPhosphorCache,0,0);
  crtOverlayCtx.restore();
}

const IMGS={};
let loaded=0;
const totalImgs=Object.keys(SD).length;
function onLoad(){loaded++;if(loaded===totalImgs)draw();}
Object.entries(SD).forEach(([k,v])=>{
  const img=new Image();
  img.onload=onLoad;
  img.src=v.src ? v.src : 'data:image/png;base64,'+v.b64;
  IMGS[k]=img;
});

function drawFrame(key,fi,dx,dy,dw,dh){
  const s=SD[key];
  ctx.drawImage(IMGS[key],(fi%s.frames)*s.frameW,0,s.frameW,s.h,dx,dy,dw,dh);
}

const CORNER_MAP={
  '1,0,0,1':   {a:Math.PI/2,   fH:false},
  '0,1,1,0':   {a:Math.PI,     fH:true},
  '1,0,0,-1':  {a:Math.PI/2,   fH:true},
  '0,-1,1,0':  {a:0,           fH:false},
  '-1,0,0,1':  {a:3*Math.PI/2, fH:true},
  '0,1,-1,0':  {a:Math.PI/2,   fH:true},
  '-1,0,0,-1': {a:3*Math.PI/2, fH:false},
  '0,-1,-1,0': {a:0,           fH:true},
};

const C={
  bg:'#7E8F4A',
  bread:'#E8A830',breadD:'#A06818',tomato:'#C84040',lettuce:'#4A8A28',onion:'#C0A0D0',cheese:'#E0B840',
  croc:'#5C8A43',crocDark:'#3E612C',crocBelly:'#9FCB71',crocEye:'#1E2417',crocTooth:'#F6F3E8'
};

// Game state
let snake, dir, nextDir, food, score, best=0;
let lastRunScore=0;
let gameRunning=false, animId, sandwichesEaten=0, speedRampCount=0, currentSpeed=BASE_SPEED;
let lastIdleDrawAt=-Infinity;
let idleLoopTimer=0;
let layoutRaf=0;
let uiSpriteRaf=0;
let frameCount=0;
let animTime=0;
let renderDirs=[];
let headDir={x:1,y:0};
let attemptedCrashDir={x:1,y:0};
let crashHeadOffset={x:0,y:0};
let hideHeadBridge=false;
let hurtHeadLoop=false;
let hurtHeadSpriteKey='hurt';
let hurtHeadArrowOffset={x:0,y:0};
let eatAnim=null;

function requestGameLoop(){
  if(animId || document.hidden) return;
  animId=requestAnimationFrame(loop);
}
function requestIdleGameLoop(){
  if(animId || idleLoopTimer || document.hidden) return;
  idleLoopTimer=window.setTimeout(()=>{
    idleLoopTimer=0;
    requestGameLoop();
  },1000/30);
}
let digestHeadAnim=null;
let digestionBodyAnim=null;
let turnQueue=[];
let warpPickup=null;
let gridWarped=false;
let warpTransition=null;
let exitPortalAnim=null;
let postWarpHoldUntil=0;
let sockHazard=null;
let discoPickup=null;
let discoSpawnCount=0;
let pendingSockSpawnAt=0;
let pendingDiscoSpawnAt=0;
let speedEffectUntil=0;
let speedEffectDelta=0;
let discoUntil=0;
let stunUntil=0;
let eatFreezeUntil=0;
let scorePopups=[];
let spriteTypes=[]; // pre-computed per segment: 'head','frontlegs','backlegs','corner','body','tail'
let cornerKeys=[]; // pre-computed corner transform keys
let wormInfoSeen={};

// Smooth movement state
// Each segment has a current pixel position (px,py) and a target pixel position (tx,ty)
// We lerp between them each animation frame
let segPositions=[]; // [{px,py,tx,ty}]
let lastTickTime=0;
let tickProgress=0; // 0..1 interpolation between last tick and next tick

function loadBestScore(){
  try{
    const raw=window.localStorage.getItem(SCORE_STORAGE_KEY);
    const parsed=raw===null ? 0 : Number.parseInt(raw,10);
    return Number.isFinite(parsed) ? parsed : 0;
  }catch{
    return 0;
  }
}

function saveBestScore(){
  try{
    window.localStorage.setItem(SCORE_STORAGE_KEY,String(best));
  }catch{}
}

function maybeUpdateBestScore(){
  if(score>best){
    best=score;
    saveBestScore();
  }
}

function formatHudScore(value){
  return String(Math.max(0,value)).padStart(4,' ');
}

function baseSpeed(){
  return Math.max(MIN_SPEED, BASE_SPEED-speedRampCount*SPEED_DEC);
}

function recalcSpeed(now=animTime){
  currentSpeed=baseSpeed();
  if(now<speedEffectUntil){
    currentSpeed=Math.max(MIN_SPEED,currentSpeed+speedEffectDelta);
  }
  if(now<discoUntil){
    currentSpeed=Math.max(MIN_SPEED,Math.round(currentSpeed/DISCO_SPEED_MULT));
  }
}

function clearTemporaryEffects(){
  speedEffectUntil=0;
  speedEffectDelta=0;
  discoUntil=0;
  stunUntil=0;
  recalcSpeed(animTime);
}

function distanceToHead(x,y){
  if(!snake||!snake.length) return Infinity;
  return Math.abs(x-snake[0].x)+Math.abs(y-snake[0].y);
}

function isImmediateTravelCell(x,y){
  if(!snake||!snake.length) return false;
  return x===snake[0].x+dir.x && y===snake[0].y+dir.y;
}

function isNearExistingItem(x,y,{includeFood=true,includeSock=true,includeWarp=true,includeDisco=true}={}){
  const nearby=(item)=>item&&Math.abs(item.x-x)<=1&&Math.abs(item.y-y)<=1;
  if(includeFood&&nearby(food)) return true;
  if(includeSock&&nearby(sockHazard)) return true;
  if(includeWarp&&nearby(warpPickup)) return true;
  if(includeDisco&&nearby(discoPickup)) return true;
  return false;
}

function isOccupiedCell(x,y,{includeFood=true,includeSock=true,includeWarp=true,includeDisco=true}={}){
  if(snake&&snake.some(s=>s.x===x&&s.y===y)) return true;
  if(includeFood&&food&&food.x===x&&food.y===y) return true;
  if(includeSock&&sockHazard&&sockHazard.x===x&&sockHazard.y===y) return true;
  if(includeWarp&&warpPickup&&warpPickup.x===x&&warpPickup.y===y) return true;
  if(includeDisco&&discoPickup&&discoPickup.x===x&&discoPickup.y===y) return true;
  return false;
}

function randomWeightedFoodType(){
  const total=FOOD_SPAWN_TABLE.reduce((sum,entry)=>sum+entry.weight,0);
  let roll=Math.random()*total;
  for(const entry of FOOD_SPAWN_TABLE){
    roll-=entry.weight;
    if(roll<=0) return entry.type;
  }
  return FOOD_SPAWN_TABLE[FOOD_SPAWN_TABLE.length-1].type;
}

function findSpawnCell({headBuffer=FOOD_HEAD_BUFFER,avoidImmediateTravel=false,marginX=0,marginY=0,includeFood=true,includeSock=true,includeWarp=true,includeDisco=true,avoidNearbyItems=false}={}){
  for(let attempts=0;attempts<600;attempts++){
    const minX=marginX;
    const maxX=cols-1-marginX;
    const minY=marginY;
    const maxY=rows-1-marginY;
    if(minX>maxX||minY>maxY) break;
    const x=minX+Math.floor(Math.random()*(maxX-minX+1));
    const y=minY+Math.floor(Math.random()*(maxY-minY+1));
    if(isOccupiedCell(x,y,{includeFood,includeSock,includeWarp,includeDisco})) continue;
    if(avoidNearbyItems&&isNearExistingItem(x,y,{includeFood,includeSock,includeWarp,includeDisco})) continue;
    if(distanceToHead(x,y)<=headBuffer) continue;
    if(avoidImmediateTravel&&isImmediateTravelCell(x,y)) continue;
    return {x,y};
  }
  return null;
}

function spawnWarpPickup(){
  const portalMarginX=Math.max(2,Math.floor(cols*0.2));
  const portalMarginY=Math.max(2,Math.floor(rows*0.2));
  const cell=findSpawnCell({
    headBuffer:FOOD_HEAD_BUFFER,
    marginX:portalMarginX,
    marginY:Math.max(1,portalMarginY),
    includeFood:false,
    includeSock:true,
    includeWarp:false,
    avoidNearbyItems:true,
  });
  if(!cell) return false;
  warpPickup={...cell,expiresAt:animTime+WARP_LIFETIME_MS};
  food=null;
  discoPickup=null;
  pendingDiscoSpawnAt=0;
  pendingSockSpawnAt=0;
  showWormInfoOnce('warp');
  return true;
}

function spawnSockNow(){
  if(sockHazard||sandwichesEaten<3||warpPickup) return false;
  if(Math.random()>0.3) return;
  const cell=findSpawnCell({
    headBuffer:SOCK_HEAD_BUFFER,
    avoidImmediateTravel:true,
    marginX:ITEM_EDGE_MARGIN,
    marginY:Math.max(1,ITEM_EDGE_MARGIN),
    includeFood:true,
    includeSock:false,
    includeWarp:true,
    avoidNearbyItems:true,
  });
  if(!cell) return false;
  sockHazard={...cell,expiresAt:animTime+SOCK_LIFETIME_MS};
  showWormInfoOnce('sock');
  return true;
}

function maybeQueueSockSpawn(){
  if(sockHazard||pendingSockSpawnAt||sandwichesEaten<3||warpPickup) return;
  pendingSockSpawnAt=animTime+ITEM_STAGGER_MS;
}

function maybeQueueDiscoSpawn(){
  if(!gridWarped) return;
  if(score<DISCO_UNLOCK_SCORE) return;
  if(discoPickup||pendingDiscoSpawnAt||warpPickup||animTime<discoUntil) return;
  const discoChance=discoSpawnCount===0 ? DISCO_FIRST_SPAWN_CHANCE : DISCO_REPEAT_SPAWN_CHANCE;
  if(Math.random()>discoChance) return;
  pendingDiscoSpawnAt=animTime+(discoSpawnCount===0 ? 120 : ITEM_STAGGER_MS+180);
}

function spawnDiscoNow(){
  if(!gridWarped||score<DISCO_UNLOCK_SCORE) return false;
  if(discoPickup||warpPickup||animTime<discoUntil) return false;
  const allowEdgeSpawn=Math.random()<FOOD_EDGE_SPAWN_CHANCE;
  const cell=findSpawnCell({
    headBuffer:FOOD_HEAD_BUFFER,
    marginX:allowEdgeSpawn ? 0 : ITEM_EDGE_MARGIN,
    marginY:1,
    includeFood:true,
    includeSock:true,
    includeWarp:true,
    includeDisco:false,
    avoidNearbyItems:true,
  });
  if(!cell) return false;
  discoPickup={...cell,expiresAt:animTime+DISCO_PICKUP_LIFETIME_MS};
  discoSpawnCount++;
  showWormInfoOnce('disco');
  return true;
}

function foodPointsForType(foodType){
  const def=FOOD_TYPES[foodType];
  if(!def) return 0;
  const mult=animTime<discoUntil ? DISCO_SCORE_MULT : 1;
  return def.points*mult;
}

function applyFoodEffect(foodType){
  const def=FOOD_TYPES[foodType];
  if(!def) return;
  score+=foodPointsForType(foodType);
  if(foodType==='sandwich'){
    sandwichesEaten++;
    speedRampCount++;
  }else if(foodType==='apple'){
    speedRampCount++;
  }
  if(def.speedDelta){
    speedEffectDelta=def.speedDelta;
    speedEffectUntil=animTime+SPEED_EFFECT_MS;
  }
  maybeUpdateBestScore();
  recalcSpeed(animTime);
}

function addScorePopup(x,y,value,{label=null,delay=0,duration=750}={}){
  const hueSteps=[30,75,120,165,210,255,300,345];
  scorePopups.push({
    x,
    y,
    value,
    label,
    start:animTime+delay,
    duration,
    hueTarget:hueSteps[Math.floor(Math.random()*hueSteps.length)],
  });
}

function pointOnBoardToStageLocal(boardX,boardY){
  if(!screenContent || !cabinetStage) return null;
  const stageRect=cabinetStage.getBoundingClientRect();
  const contentRect=screenContent.getBoundingClientRect();
  const stageScale=stageRect.width/parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--skin-w'));
  if(!stageScale || !contentRect.width || !contentRect.height) return null;
  const viewportX=contentRect.left + (boardX/boardWidth())*contentRect.width;
  const viewportY=contentRect.top + (boardY/boardHeight())*contentRect.height;
  return {
    x:(viewportX-stageRect.left)/stageScale,
    y:(viewportY-stageRect.top)/stageScale,
    boardToStage:(contentRect.width/boardWidth())/stageScale,
  };
}

function applyCabinetDent(){
  if(cabinetDent) cabinetDent.style.display='none';
}

function clearCabinetDent(){
  cabinetDentState=null;
  if(cabinetDent) cabinetDent.style.display='none';
}

function updateCabinetDentForWallHit(collisionDir){
  return;
}

function startGame(){
  restartMusicForGameplay();
  leaderboardPressed=false;
  playAgainPressed=false;
  leaderboardPlayAgainPressed=false;
  updateGameoverButtons();
  showLeaderboardView(false);
  gamePaused=false;
  updatePauseButton();
  setBoardLayout(BOARD_LAYOUTS.pre);
  snake=[{x:6,y:4},{x:5,y:4},{x:4,y:4},{x:3,y:4}];
  dir={x:1,y:0}; nextDir={x:1,y:0};
  best=loadBestScore();
  score=0; sandwichesEaten=0; speedRampCount=0; currentSpeed=BASE_SPEED; frameCount=0; animTime=0;
  attemptedCrashDir={x:1,y:0};
  crashHeadOffset={x:0,y:0};
  hideHeadBridge=false;
  hurtHeadLoop=false;
  hurtHeadSpriteKey='hurt';
  hurtHeadArrowOffset={x:0,y:0};
  eatAnim=null;
  scorePopups=[];
  wormInfoSeen={};
  digestHeadAnim=null;
  digestionBodyAnim=null;
  exitPortalAnim=null;
  postWarpHoldUntil=0;
  sockHazard=null;
  discoPickup=null;
  discoSpawnCount=0;
  pendingSockSpawnAt=0;
  pendingDiscoSpawnAt=0;
  speedEffectUntil=0;
  speedEffectDelta=0;
  discoUntil=0;
  stunUntil=0;
  warpPickup=null;
  gridWarped=false;
  warpTransition=null;
  eatFreezeUntil=0;
  turnQueue=[];
  leaderboardPromptedThisGame=false;
  clearCabinetDent();
  recalcSpeed(animTime);
  // Initialize smooth positions — all segments start at their grid positions
  segPositions=snake.map(s=>({px:cellToPx(s.x),py:cellToPy(s.y),tx:cellToPx(s.x),ty:cellToPy(s.y)}));
  placeFood(); updateHUD();
  const startScreenLayer=document.getElementById('start-screen-layer');
  const overlay=document.getElementById('overlay');
  const gameoverScreen=document.getElementById('gameover-screen');
  if(startScreenLayer) startScreenLayer.style.display='none';
  if(boardHud) boardHud.style.display='block';
  if(gameoverExclusion){
    gameoverExclusion.style.display='none';
    gameoverExclusion.style.opacity='0';
  }
  if(overlay) overlay.style.display='none';
  if(gameoverScreen) gameoverScreen.style.display='none';
  gameRunning=true;
  if(animId)cancelAnimationFrame(animId);
  headDir={...dir};
  renderDirs=snake.map((_,i)=>segDir(i));
  spriteTypes=snake.map((_,i)=>{
    if(i===0) return 'head';
    if(i===snake.length-1) return 'tail';
    const prev=snake[i-1],next=snake[i+1];
    if(prev&&next){
      const inD={x:snake[i].x-next.x,y:snake[i].y-next.y};
      const outD={x:prev.x-snake[i].x,y:prev.y-snake[i].y};
      if(inD.x!==outD.x||inD.y!==outD.y) return 'corner';
    }
    if(i===1) return 'frontlegs';
    if(i===snake.length-2 && snake.length>2) return 'backlegs';
    return 'body';
  });
  cornerKeys=snake.map(()=>null);
  lastTickTime=0; tickProgress=0;
  if(animId) cancelAnimationFrame(animId);
  animId=0;
  requestGameLoop();
}

function placeFood(){
  if(warpPickup) return;
  if(!gridWarped && snake && snake.length>=WARP_LENGTH_THRESHOLD && spawnWarpPickup()){
    return;
  }
  const allowEdgeSpawn=Math.random()<FOOD_EDGE_SPAWN_CHANCE;
  const cell=findSpawnCell({
    headBuffer:FOOD_HEAD_BUFFER,
    marginX:allowEdgeSpawn ? 0 : ITEM_EDGE_MARGIN,
    marginY:1,
    includeFood:false,
    includeSock:true,
    includeWarp:true,
    avoidNearbyItems:true,
  });
  if(!cell){
    food=null;
    return;
  }
  food={...cell,type:randomWeightedFoodType()};
  if(food.type==='banana') showWormInfoOnce('banana');
  maybeQueueSockSpawn();
  maybeQueueDiscoSpawn();
}

function expandGrid(){
  if(gridWarped) return;
  const oldCols=cols, oldRows=rows;
  setBoardLayout(BOARD_LAYOUTS.post);
  const dx=Math.floor((cols-oldCols)/2);
  const dy=Math.floor((rows-oldRows)/2);
  const len=snake.length;
  const shiftedHead={x:snake[0].x+dx,y:snake[0].y+dy};
  let landingHead={...shiftedHead};
  if(dir.x<0){
    landingHead.x=Math.max(0,cols-len);
  }else if(dir.x>0){
    landingHead.x=Math.min(cols-1,len-1);
  }else if(dir.y<0){
    landingHead.y=Math.max(0,rows-len);
  }else if(dir.y>0){
    landingHead.y=Math.min(rows-1,len-1);
  }
  snake=snake.map((_,i)=>({
    x:landingHead.x-dir.x*i,
    y:landingHead.y-dir.y*i,
  }));
  food=null;
  sockHazard=null;
  pendingSockSpawnAt=0;
  warpPickup=null;
  gridWarped=true;
  segPositions=snake.map(seg=>({
    px:cellToPx(seg.x),
    py:cellToPy(seg.y),
    tx:cellToPx(seg.x),
    ty:cellToPy(seg.y),
  }));
  crashHeadOffset={x:0,y:0};
  headDir={...dir};
  let exitX=snake[0].x, exitY=snake[0].y;
  if(dir.x<0) exitX=cols-1;
  else if(dir.x>0) exitX=0;
  else if(dir.y<0) exitY=rows-1;
  else if(dir.y>0) exitY=0;
  exitPortalAnim={
    start:animTime,
    duration:1050,
    x:exitX,
    y:exitY,
    dir:{x:-dir.x,y:-dir.y},
    emergeShift:CELL*(snake.length+4.5),
    wheeSoundPlayed:false,
  };
  postWarpHoldUntil=animTime+exitPortalAnim.duration;
  renderDirs=snake.map((_,i)=>segDir(i));
  spriteTypes=snake.map((_,i)=>{
    if(i===0) return 'head';
    if(i===snake.length-1) return 'tail';
    const prev=snake[i-1],next=snake[i+1];
    if(prev&&next){
      const inD={x:snake[i].x-next.x,y:snake[i].y-next.y};
      const outD={x:prev.x-snake[i].x,y:prev.y-snake[i].y};
      if(inD.x!==outD.x||inD.y!==outD.y) return 'corner';
    }
    if(i===1) return 'frontlegs';
    if(i===snake.length-2 && snake.length>2) return 'backlegs';
    return 'body';
  });
  cornerKeys=snake.map((_,i)=>{
    if(spriteTypes[i]!=='corner') return null;
    const prev=snake[i-1],next=snake[i+1];
    const inD={x:snake[i].x-next.x,y:snake[i].y-next.y};
    const outD={x:prev.x-snake[i].x,y:prev.y-snake[i].y};
    return inD.x+','+inD.y+','+outD.x+','+outD.y;
  });
  tickProgress=0;
  lastTickTime=animTime;
  placeFood();
  updateHUD();
}

function beginWarpTransition(headCell){
  playWarpSound();
  const hitPx=cellToPx(headCell.x)+CELL/2;
  const hitPy=cellToPy(headCell.y)+CELL/2;
  const bw=boardWidth();
  const bh=boardHeight();
  warpTransition={
    start:animTime,
    duration:760,
    applied:false,
    x:headCell.x,
    y:headCell.y,
    hitPx,
    hitPy,
    leftReach:hitPx,
    rightReach:bw-hitPx,
    topReach:hitPy,
    bottomReach:bh-hitPy,
  };
}

// Main loop — runs at 60fps
// Ticks happen every currentSpeed ms
// Between ticks we interpolate segment positions
function loop(ts){
  animId=0;
  if(document.hidden) return;
  animTime=ts;
  updateMusicStopFx(ts);
  updateChillMusicFade(ts);
  recalcSpeed(ts);

  if(!gameRunning){
    if(ts-lastIdleDrawAt>=1000/30){
      lastIdleDrawAt=ts;
      draw(tickProgress);
    }
    requestIdleGameLoop();
    return;
  }

  if(gamePaused){
    if(ts-lastIdleDrawAt>=1000/30){
      lastIdleDrawAt=ts;
      draw(tickProgress);
    }
    requestIdleGameLoop();
    return;
  }
  requestGameLoop();

  if(warpPickup && ts>=warpPickup.expiresAt){
    warpPickup=null;
    placeFood();
  }
  if(sockHazard && ts>=sockHazard.expiresAt){
    sockHazard=null;
  }
  if(discoPickup && ts>=discoPickup.expiresAt){
    discoPickup=null;
  }
  if(pendingSockSpawnAt && ts>=pendingSockSpawnAt){
    pendingSockSpawnAt=0;
    spawnSockNow();
  }
  if(pendingDiscoSpawnAt && ts>=pendingDiscoSpawnAt){
    pendingDiscoSpawnAt=0;
    spawnDiscoNow();
  }

  if(warpTransition){
    const elapsed=animTime-warpTransition.start;
    if(!warpTransition.applied && elapsed>=warpTransition.duration*0.45){
      expandGrid();
      warpTransition.applied=true;
    }
    if(elapsed>=warpTransition.duration){
      warpTransition=null;
    }
    draw(tickProgress);
    return;
  }

  if(lastTickTime===0) lastTickTime=ts;
  if(postWarpHoldUntil && ts<postWarpHoldUntil){
    tickProgress=0;
    draw(tickProgress);
    return;
  }
  if(postWarpHoldUntil && ts>=postWarpHoldUntil){
    lastTickTime=ts;
    postWarpHoldUntil=0;
    speedEffectDelta=30;
    speedEffectUntil=ts+1000;
    recalcSpeed(ts);
  }
  if(eatFreezeUntil && ts<eatFreezeUntil){
    tickProgress=1;
    draw(tickProgress);
    return;
  }
  if(eatFreezeUntil && ts>=eatFreezeUntil) eatFreezeUntil=0;
  if(stunUntil && ts<stunUntil){
    tickProgress=0;
    draw(tickProgress);
    return;
  }
  if(stunUntil && ts>=stunUntil){
    stunUntil=0;
    hurtHeadLoop=false;
    hideHeadBridge=false;
    hurtHeadSpriteKey='hurt';
    hurtHeadArrowOffset={x:0,y:0};
    crashHeadOffset={x:0,y:0};
    lastTickTime=ts;
  }
  let elapsed=ts-lastTickTime;
  let steps=0;
  while(elapsed>=currentSpeed && steps<4){
    lastTickTime+=currentSpeed;
    elapsed-=currentSpeed;
    dir=turnQueue.shift()||nextDir;
    nextDir=dir;
    const advanced=tick();
    if(advanced){
      frameCount++;
      headDir={...dir}; // snapshot direction for head rendering
    }
    steps++;
  }
  tickProgress=Math.min(elapsed/currentSpeed, 1);

  draw(tickProgress);
}

function tick(){
  let h={x:snake[0].x+dir.x, y:snake[0].y+dir.y};
  if(h.x<0||h.x>=cols||h.y<0||h.y>=rows){
    let rescued=false;
    while(turnQueue.length>0){
      const tryDir=turnQueue.shift();
      nextDir=tryDir;
      const tryH={x:snake[0].x+tryDir.x,y:snake[0].y+tryDir.y};
      if(tryH.x>=0&&tryH.x<cols&&tryH.y>=0&&tryH.y<rows){
        dir=tryDir;
        h=tryH;
        rescued=true;
        break;
      }
    }
    if(!rescued){
      endGame(dir,'wall');
      return false;
    }
  }
  if(snake.some((s,i)=>i<snake.length-1&&s.x===h.x&&s.y===h.y)){
    endGame(dir,'self');
    return false;
  }

  crashHeadOffset={x:0,y:0};
  hideHeadBridge=false;
  hurtHeadLoop=false;

  const invalidWarpEntry = !!warpPickup && h.x===warpPickup.x&&h.y===warpPickup.y && dir.y!==0;
  if(invalidWarpEntry){
    warpPickup=null;
    placeFood();
  }
  const hitSock = !!sockHazard && h.x===sockHazard.x&&h.y===sockHazard.y;
  const hitDisco = !!discoPickup && h.x===discoPickup.x&&h.y===discoPickup.y;
  const ateWarp = !!warpPickup && h.x===warpPickup.x&&h.y===warpPickup.y;
  const ate = !!food && h.x===food.x&&h.y===food.y;

  // Save old positions as starting points for interpolation
  const oldSnake=snake.map(s=>({...s}));

  snake.unshift(h);
  if(hitSock){
    const eatenSock=sockHazard;
    sockHazard=null;
    playSockHitSound();
    eatAnim={x:eatenSock.x,y:eatenSock.y,start:animTime,type:'sock'};
    score-=20;
    addScorePopup(eatenSock.x,eatenSock.y,-20);
    crashHeadOffset={x:dir.x*CELL*0.08,y:dir.y*CELL*0.08};
    hideHeadBridge=true;
    hurtHeadLoop=true;
    hurtHeadSpriteKey='hurt';
    hurtHeadArrowOffset={x:0,y:0};
    stunUntil=animTime+SOCK_STUN_MS;
    snake.pop();
    segPositions.unshift({px:cellToPx(oldSnake[0].x),py:cellToPy(oldSnake[0].y),tx:cellToPx(h.x),ty:cellToPy(h.y)});
    for(let i=1;i<snake.length;i++){
      segPositions[i]={px:cellToPx(oldSnake[i-1].x),py:cellToPy(oldSnake[i-1].y),tx:cellToPx(snake[i].x),ty:cellToPy(snake[i].y)};
    }
    segPositions.length=snake.length;
    if(score>best)best=score;
    updateHUD();
  } else if(hitDisco){
    const eatenDisco=discoPickup;
    discoPickup=null;
    playDiscoPickupSound();
    eatAnim={x:eatenDisco.x,y:eatenDisco.y,start:animTime,type:'disco'};
    discoUntil=animTime+DISCO_DURATION_MS;
    showWormInfoOnce('discoTime');
    addScorePopup(eatenDisco.x,eatenDisco.y,0,{label:'+DISCO TIME!!',duration:1100});
    recalcSpeed(animTime);
    snake.pop();
    segPositions.unshift({px:cellToPx(oldSnake[0].x),py:cellToPy(oldSnake[0].y),tx:cellToPx(h.x),ty:cellToPy(h.y)});
    for(let i=1;i<snake.length;i++){
      segPositions[i]={px:cellToPx(oldSnake[i-1].x),py:cellToPy(oldSnake[i-1].y),tx:cellToPx(snake[i].x),ty:cellToPy(snake[i].y)};
    }
    segPositions.length=snake.length;
  } else if(ateWarp){
    snake.pop();
    segPositions.unshift({px:cellToPx(oldSnake[0].x),py:cellToPy(oldSnake[0].y),tx:cellToPx(h.x),ty:cellToPy(h.y)});
    for(let i=1;i<snake.length;i++){
      const source=oldSnake[i-1];
      segPositions[i]={px:cellToPx(source.x),py:cellToPy(source.y),tx:cellToPx(snake[i].x),ty:cellToPy(snake[i].y)};
    }
    segPositions.length=snake.length;
    beginWarpTransition(h);
  } else if(ate){
    const eatenFood=food;
    playEatSound();
    eatFreezeUntil=animTime+55;
    eatAnim={x:eatenFood.x,y:eatenFood.y,start:animTime,type:eatenFood.type};
    digestHeadAnim={start:animTime};
    food=null;
    addScorePopup(
      eatenFood.x,
      eatenFood.y,
      foodPointsForType(eatenFood.type),
      eatenFood.type==='banana' ? {duration:560} : {}
    );
    if(eatenFood.type==='banana'){
      addScorePopup(eatenFood.x,eatenFood.y,0,{label:'+SPEED BOOST',delay:320,duration:820});
    }
    applyFoodEffect(eatenFood.type);
    if(score>best)best=score;
    updateHUD(); placeFood();
    segPositions.unshift({px:cellToPx(oldSnake[0].x),py:cellToPy(oldSnake[0].y),tx:cellToPx(h.x),ty:cellToPy(h.y)});
    for(let i=1;i<snake.length-1;i++){
      segPositions[i]={px:cellToPx(oldSnake[i-1].x),py:cellToPy(oldSnake[i-1].y),tx:cellToPx(snake[i].x),ty:cellToPy(snake[i].y)};
    }
    const tl=snake.length-1;
    segPositions[tl]={px:cellToPx(oldSnake[tl-1].x),py:cellToPy(oldSnake[tl-1].y),tx:cellToPx(snake[tl].x),ty:cellToPy(snake[tl].y)};
  } else {
    snake.pop();
    // Update interpolation targets — each segment moves to where the one ahead of it was
    segPositions.unshift({px:cellToPx(oldSnake[0].x),py:cellToPy(oldSnake[0].y),tx:cellToPx(h.x),ty:cellToPy(h.y)});
    for(let i=1;i<snake.length;i++){
      segPositions[i]={px:cellToPx(oldSnake[i-1].x),py:cellToPy(oldSnake[i-1].y),tx:cellToPx(snake[i].x),ty:cellToPy(snake[i].y)};
    }
    segPositions.length=snake.length;
  }
  // Pre-compute everything for rendering — locked to grid, no flicker
  headDir={...dir};
  renderDirs=snake.map((_,i)=>segDir(i));
  spriteTypes=snake.map((_,i)=>{
    if(i===0) return 'head';
    if(i===snake.length-1) return 'tail';
    const prev=snake[i-1],next=snake[i+1];
    if(prev&&next){
      const inD={x:snake[i].x-next.x,y:snake[i].y-next.y};
      const outD={x:prev.x-snake[i].x,y:prev.y-snake[i].y};
      if(inD.x!==outD.x||inD.y!==outD.y) return 'corner';
    }
    return 'body';
  });
  cornerKeys=snake.map((_,i)=>{
    if(spriteTypes[i]!=='corner') return null;
    const prev=snake[i-1],next=snake[i+1];
    const inD={x:snake[i].x-next.x,y:snake[i].y-next.y};
    const outD={x:prev.x-snake[i].x,y:prev.y-snake[i].y};
    return inD.x+','+inD.y+','+outD.x+','+outD.y;
  });
  return true;
}

function lerp(a,b,t){return a+(b-a)*t;}

// Easing — ease in-out for smooth feel
function ease(t){return t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2;}

function isOpposite(a,b){
  return a.x===-b.x&&a.y===-b.y;
}

function sameDir(a,b){
  return a.x===b.x&&a.y===b.y;
}

function queueTurn(newDir){
  if(!gameRunning) return;
  attemptedCrashDir={...newDir};
  const basis=turnQueue.length?turnQueue[turnQueue.length-1]:dir;
  if(isOpposite(newDir,basis) || sameDir(newDir,basis)) return;
  if(turnQueue.length>=MAX_TURN_QUEUE) return;
  turnQueue.push(newDir);
  nextDir=turnQueue[0];
}

function updateHUD(){
  const scoreVal=document.getElementById('score-val');
  const bestVal=document.getElementById('best-val');
  const gameoverBestVal=document.getElementById('gameover-best-value');
  const lenVal=document.getElementById('len-val');
  const speedVal=document.getElementById('speed-val');
  if(scoreVal) scoreVal.textContent=score;
  if(bestVal) bestVal.textContent=best;
  if(gameoverBestVal) gameoverBestVal.textContent=formatHudScore(best);
  if(lenVal) lenVal.textContent=snake?snake.length:1;
  if(speedVal) speedVal.textContent=speedRampCount+1;
}

function endGame(collisionDir=null,collisionType=null){
  gamePaused=false;
  updatePauseButton();
  startMusicStopFx(animTime||performance.now());
  startChillMusicFadeIn(animTime||performance.now());
  playDeathSound();
  leaderboardPressed=false;
  playAgainPressed=false;
  leaderboardPlayAgainPressed=false;
  leaderboardPreorderPressed=false;
  updateGameoverButtons();
  showLeaderboardView(false);
  if(collisionDir){
    const isStraightUpWallHit=collisionType==='wall' && sameDir(collisionDir,headDir) && collisionDir.x===0 && collisionDir.y===-1;
    crashHeadOffset={
      x:collisionDir.x*CELL*0.08,
      y:collisionDir.y*CELL*(isStraightUpWallHit ? 0.18 : 0.08),
    };
    hideHeadBridge=true;
    hurtHeadLoop=true;
    const isTurnIntoWall=collisionType==='wall' && !sameDir(collisionDir,headDir);
    const isPreWarpSelfHit=collisionType==='self' && !gridWarped;
    hurtHeadSpriteKey=(isTurnIntoWall || isPreWarpSelfHit) && hasSprite('hurtAlt') ? 'hurtAlt' : 'hurt';
    const isUpRightTurnHit=isTurnIntoWall && headDir.x===0 && headDir.y===-1 && attemptedCrashDir.x===1 && attemptedCrashDir.y===0;
    const isLeftWallTurnHit=isTurnIntoWall && collisionDir.x===-1 && headDir.y!==0 && attemptedCrashDir.x===-1 && attemptedCrashDir.y===0;
    const isRightWallTurnHit=isTurnIntoWall && collisionDir.x===1 && headDir.y!==0 && attemptedCrashDir.x===1 && attemptedCrashDir.y===0;
    const isUpLeftWallTurnHit=isLeftWallTurnHit && headDir.y===-1;
    const isDownRightWallTurnHit=isRightWallTurnHit && headDir.y===1;
    const isBottomRowDownTurnHit=isTurnIntoWall && headDir.y===0 && attemptedCrashDir.x===0 && attemptedCrashDir.y===1 && snake[0].y===rows-1;
    hurtHeadArrowOffset=isTurnIntoWall
      ? (isBottomRowDownTurnHit ? {x:0,y:-3}
        : isUpRightTurnHit ? {x:2,y:0}
        : isUpLeftWallTurnHit ? {x:18,y:0}
        : isDownRightWallTurnHit ? {x:-18,y:0}
        : isLeftWallTurnHit ? {x:0,y:0}
        : isRightWallTurnHit ? {x:-3,y:0}
        : {x:attemptedCrashDir.x*-18,y:attemptedCrashDir.y*-18})
      : {x:0,y:0};
    if(collisionType==='wall') updateCabinetDentForWallHit(collisionDir);
  }
  gameRunning=false;
  lastRunScore=score;
  lastRunWasTopChomper=false;
  showDeathWormLine();
  const overlay=document.getElementById('overlay');
  const startScreen=document.getElementById('start-screen');
  const gameoverScreen=document.getElementById('gameover-screen');
  const goTitle=document.getElementById('go-title');
  const goMsg=document.getElementById('go-msg');
  const winnerSection=document.getElementById('winner-section');
  if(overlay) overlay.style.display='flex';
  if(boardHud) boardHud.style.display='block';
  if(startScreen) startScreen.style.display='none';
  if(gameoverScreen) gameoverScreen.style.display='flex';
  if(goTitle) goTitle.textContent=score>=WIN_SCORE?'Amazing!':'Game over!';
  if(goMsg){
    goMsg.textContent=score>=WIN_SCORE
      ?'You scored '+score+' points — you unlocked something special!'
      :'You scored '+score+' points. Reach 50 to unlock a surprise from Brian!';
  }
  if(winnerSection) winnerSection.style.display=score>=WIN_SCORE?'block':'none';
  if(gameoverExclusion){
    gameoverExclusion.style.display='block';
    gameoverExclusion.style.opacity='1';
  }
  maybeUpdateBestScore();
  maybeRecordLeaderboardScore();
  updateHUD();
}

function submitWinner(){
  const nameEl=document.getElementById('w-name');
  const addressEl=document.getElementById('w-address');
  const winnerForm=document.getElementById('winner-form');
  const confirmMsg=document.getElementById('confirm-msg');
  if(!nameEl || !addressEl || !winnerForm || !confirmMsg) return;
  const n=nameEl.value.trim();
  const a=addressEl.value.trim();
  if(!n||!a){alert('Please enter your name and address!');return;}
  winnerForm.style.display='none';
  confirmMsg.style.display='block';
}

function hasSprite(key){
  return !!(SD[key]&&IMGS[key]&&IMGS[key].complete);
}

function drawAt(key,fi,px,py,angle,flipH=false){
  const s=SD[key];
  if(!s||!hasSprite(key)) return false;
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);
  if(flipH)ctx.scale(-1,1);
  ctx.drawImage(IMGS[key],(fi%s.frames)*s.frameW,0,s.frameW,s.h,-CELL/2,-CELL/2,CELL,CELL);
  ctx.restore();
  return true;
}

function drawAtOffset(key,fi,px,py,angle,flipH=false,ox=0,oy=0){
  const s=SD[key];
  if(!s||!hasSprite(key)) return false;
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);
  if(flipH)ctx.scale(-1,1);
  ctx.drawImage(IMGS[key],(fi%s.frames)*s.frameW,0,s.frameW,s.h,-CELL/2+ox,-CELL/2+oy,CELL,CELL);
  ctx.restore();
  return true;
}

function drawHalfAt(key,px,py,angle,flipH=false,side='front'){
  const s=SD[key];
  if(!s||!hasSprite(key)) return false;
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  const dw=CELL/2;
  const overlap=10;
  const dx=side==='front' ? -overlap : -dw;
  const drawW=dw+overlap;
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);
  if(flipH)ctx.scale(-1,1);
  ctx.drawImage(IMGS[key],0,0,s.frameW,s.h,dx,-CELL/2,drawW,CELL);
  ctx.restore();
  return true;
}

function drawVectorSegment(kind,px,py,angle,flipH=false,legPhase=0){
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  const swingFrame=(Math.floor(frameCount/LEG_STEP_HOLD)+legPhase)%8;
  const swing=Math.sin((swingFrame/8)*Math.PI*2)*4;
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);
  if(flipH)ctx.scale(-1,1);

  if(kind==='tail'){
    ctx.fillStyle=C.crocDark;
    ctx.beginPath();
    ctx.moveTo(-CELL*0.28,0);
    ctx.quadraticCurveTo(0,-CELL*0.18,CELL*0.24,-CELL*0.07);
    ctx.lineTo(CELL*0.24,CELL*0.07);
    ctx.quadraticCurveTo(0,CELL*0.18,-CELL*0.28,0);
    ctx.fill();
  } else if(kind==='corner'){
    ctx.strokeStyle=C.croc;
    ctx.lineWidth=CELL*0.28;
    ctx.lineCap='round';
    ctx.beginPath();
    ctx.moveTo(-CELL*0.18,0);
    ctx.quadraticCurveTo(0,0,0,CELL*0.18);
    ctx.stroke();
    ctx.strokeStyle=C.crocDark;
    ctx.lineWidth=CELL*0.12;
    ctx.beginPath();
    ctx.moveTo(-CELL*0.14,0);
    ctx.quadraticCurveTo(0,0,0,CELL*0.14);
    ctx.stroke();
  } else {
    ctx.fillStyle=C.croc;
    ctx.beginPath();
    ctx.roundRect(-CELL*0.33,-CELL*0.16,CELL*0.66,CELL*0.32,12);
    ctx.fill();
    ctx.fillStyle=C.crocBelly;
    ctx.beginPath();
    ctx.roundRect(-CELL*0.22,-CELL*0.09,CELL*0.44,CELL*0.18,10);
    ctx.fill();
    ctx.fillStyle=C.crocDark;
    for(let x=-0.18;x<=0.18;x+=0.12){
      ctx.beginPath();
      ctx.moveTo(x*CELL,-CELL*0.16);
      ctx.lineTo((x+0.04)*CELL,-CELL*0.24);
      ctx.lineTo((x+0.08)*CELL,-CELL*0.16);
      ctx.fill();
    }
  }

  if(kind==='frontlegs'||kind==='backlegs'){
    ctx.strokeStyle=C.crocDark;
    ctx.lineWidth=4;
    ctx.lineCap='round';
    ctx.beginPath();
    ctx.moveTo(-CELL*0.12,-CELL*0.06);
    ctx.lineTo(-CELL*0.22,-CELL*0.18-swing*0.35);
    ctx.moveTo(-CELL*0.12,CELL*0.06);
    ctx.lineTo(-CELL*0.22,CELL*0.18+swing*0.35);
    ctx.moveTo(CELL*0.12,-CELL*0.06);
    ctx.lineTo(CELL*0.22,-CELL*0.18+swing*0.35);
    ctx.moveTo(CELL*0.12,CELL*0.06);
    ctx.lineTo(CELL*0.22,CELL*0.18-swing*0.35);
    ctx.stroke();
  }

  ctx.restore();
}

function drawLegPair(frame,px,py,angle,flipH=false){
  const drewBack=drawAtOffset('backLeg',frame,px,py,angle,flipH,10,0);
  const drewFront=drawAt('frontLeg',frame,px,py,angle,flipH);
  return drewBack||drewFront;
}

function drawBackLegUnderlay(frame,px,py,angle,flipH=false,offsetX=10){
  return drawAtOffset('backLeg',frame,px,py,angle,flipH,offsetX,0);
}

function drawLegGhost(key,px,py,angle,flipH,ox,oy=0){
  const s=SD[key];
  if(!s||!hasSprite(key)) return;
  const ghostFrame=Math.floor((animTime-LEG_GHOST_DELAY_MS)/1000*LEG_ANIM_FPS)%s.frames;
  ctx.globalAlpha=LEG_GHOST_ALPHA;
  drawAtOffset(key,ghostFrame,px,py,angle,flipH,ox,oy);
  ctx.globalAlpha=1.0;
}

function spriteFrameIndex(key,fps,offset=0){
  const s=SD[key];
  if(!s||!s.frames) return 0;
  return (Math.floor(animTime/1000*fps)+offset)%s.frames;
}

function stepFrameIndex(totalFrames,hold=1,offset=0){
  if(!totalFrames) return 0;
  return (Math.floor(frameCount/hold)+offset)%totalFrames;
}

function sequenceFrame(sequence,fps,offset=0){
  if(!sequence||!sequence.length) return 0;
  return sequence[(Math.floor(animTime/1000*fps)+offset)%sequence.length];
}

function drawHeadBridge(px,py,angle,flipH=false){
  const key=hasSprite('bodyFront') ? 'bodyFront' : hasSprite('body') ? 'body' : null;
  if(!key) return;
  const s=SD[key];
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  const srcW=Math.round(s.frameW*0.32);
  const srcX=s.frameW-srcW;
  const drawW=Math.round(CELL*0.34);
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);
  if(flipH)ctx.scale(-1,1);
  // A textured neck bridge from the connector art hides tiny motion gaps.
  ctx.drawImage(
    IMGS[key],
    srcX,0,srcW,s.h,
    -CELL*0.64,-CELL/2,drawW,CELL
  );
  ctx.restore();
}

function drawHeadMaskBackdrop(px,py,angle,flipH=false,dirVec={x:1,y:0},variant='normal'){
  if(!hasSprite('headMask')) return false;
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  const headScale=CELL/NOMINAL_CELL;
  let drawX=-CELL/2;
  let drawY=-CELL/2;
  let drawW=CELL;
  let drawH=CELL;
  headMaskCtx.clearRect(0,0,headMaskCanvas.width,headMaskCanvas.height);
  headMaskCtx.save();
  headMaskCtx.translate(cx,cy);
  headMaskCtx.rotate(angle);
  if(flipH)headMaskCtx.scale(-1,1);
  if(variant==='hurt'){
    const extraOffset=hurtHeadSpriteKey==='hurtAlt' ? hurtHeadArrowOffset : {x:0,y:0};
    const anchor=HURT_HEAD_ANCHOR[dirVec.x+','+dirVec.y]||HURT_HEAD_ANCHOR['1,0'];
    const hurtOffset=HURT_HEAD_OFFSET[dirVec.x+','+dirVec.y]||{x:0,y:0};
    const cos=Math.cos(angle), sin=Math.sin(angle);
    const localWorldX=(extraOffset.x*headScale)*cos + (extraOffset.y*headScale)*sin;
    const localWorldY=-(extraOffset.x*headScale)*sin + (extraOffset.y*headScale)*cos;
    const localOffsetX=flipH ? -localWorldX : localWorldX;
    const localOffsetY=localWorldY;
    headMaskCtx.translate(
      anchor.lead*headScale + hurtOffset.x*headScale + localOffsetX,
      anchor.cross*headScale + hurtOffset.y*headScale + localOffsetY
    );
  }else{
    const anchor=HEAD_ANCHOR[dirVec.x+','+dirVec.y]||HEAD_ANCHOR['1,0'];
    headMaskCtx.translate((anchor.lead-anchor.backshift)*headScale,anchor.cross*headScale);
    drawX=-CELL/2-anchor.overlap*headScale;
  }
  headMaskCtx.translate(-HEAD_MASK_ATTACH_BACKSHIFT*headScale,0);
  const frontTrim=flipH ? HEAD_MASK_TRIM_BACK : HEAD_MASK_TRIM_FRONT;
  const backTrim=flipH ? HEAD_MASK_TRIM_FRONT : HEAD_MASK_TRIM_BACK;
  const maskSrcX=backTrim;
  const maskSrcW=SD.headMask.frameW-frontTrim-backTrim;
  const maskDestInsetLeft=Math.ceil(CELL*(backTrim/SD.headMask.frameW));
  const maskDestInsetRight=Math.ceil(CELL*(frontTrim/SD.headMask.frameW));
  drawX+=maskDestInsetLeft;
  drawW-=maskDestInsetLeft+maskDestInsetRight;
  headMaskCtx.drawImage(
    IMGS.headMask,
    maskSrcX,0,maskSrcW,SD.headMask.h,
    drawX,drawY,drawW,drawH
  );
  headMaskCtx.restore();
  headMaskCtx.globalCompositeOperation='source-in';
  const activeMapImg=currentBoardLayout.mapImg;
  const pad=CELL*2;
  const clipX=Math.max(0,Math.floor(cx-pad));
  const clipY=Math.max(0,Math.floor(cy-pad));
  const clipW=Math.min(headMaskCanvas.width-clipX,Math.ceil(pad*2));
  const clipH=Math.min(headMaskCanvas.height-clipY,Math.ceil(pad*2));
  if(activeMapImg && activeMapImg.complete && activeMapImg.naturalWidth && activeMapImg.naturalHeight){
    headMaskCtx.drawImage(activeMapImg,clipX,clipY,clipW,clipH,clipX,clipY,clipW,clipH);
  }else{
    headMaskCtx.fillStyle=C.bg;
    headMaskCtx.fillRect(clipX,clipY,clipW,clipH);
  }
  headMaskCtx.globalCompositeOperation='source-over';
  ctx.drawImage(headMaskCanvas,0,0);
  return true;
}

function shouldDrawHeadMaskBackdrop(){
  return false; // disabled — seam handled by baked matte in head sprite
  // const neckType=spriteTypes[1];
  // return neckType==='frontlegs' || neckType==='body' || neckType==='corner';
}

function shouldDrawHeadBridge(){
  const neckType=spriteTypes[1];
  return neckType==='frontlegs' || neckType==='body' || neckType==='corner';
}

function drawHurtHead(px,py,angle,flipH=false,dirVec={x:1,y:0}){
  const hurtKey=(hurtHeadSpriteKey==='hurtAlt'&&hasSprite('hurtAlt')) ? 'hurtAlt' : 'hurt';
  if(!hasSprite(hurtKey)) return false;
  const s=SD[hurtKey];
  const fi=spriteFrameIndex(hurtKey,HURT_FPS);
  const extraOffset=hurtKey==='hurtAlt' ? hurtHeadArrowOffset : {x:0,y:0};
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  const anchor=HURT_HEAD_ANCHOR[dirVec.x+','+dirVec.y]||HURT_HEAD_ANCHOR['1,0'];
  const hurtOffset=HURT_HEAD_OFFSET[dirVec.x+','+dirVec.y]||{x:0,y:0};
  const headScale=CELL/NOMINAL_CELL;
  const cos=Math.cos(angle), sin=Math.sin(angle);
  const localWorldX=(extraOffset.x*headScale)*cos + (extraOffset.y*headScale)*sin;
  const localWorldY=-(extraOffset.x*headScale)*sin + (extraOffset.y*headScale)*cos;
  const localOffsetX=flipH ? -localWorldX : localWorldX;
  const localOffsetY=localWorldY;
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);
  if(flipH)ctx.scale(-1,1);
  ctx.translate(
    anchor.lead*headScale + hurtOffset.x*headScale + localOffsetX,
    anchor.cross*headScale + hurtOffset.y*headScale + localOffsetY
  );
  ctx.drawImage(IMGS[hurtKey],fi*s.frameW,0,s.frameW,s.h,-CELL/2,-CELL/2,CELL,CELL);
  ctx.restore();
  return true;
}

function drawNormalHead(px,py,angle,flipH=false,dirVec={x:1,y:0}){
  if(!hasSprite('head')) return false;
  const s=SD.head;
  const fi=sequenceFrame(HEAD_SEQUENCE,HEAD_FPS);
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  const anchor=HEAD_ANCHOR[dirVec.x+','+dirVec.y]||HEAD_ANCHOR['1,0'];
  const headScale=CELL/NOMINAL_CELL;
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);
  if(flipH)ctx.scale(-1,1);
  ctx.translate((anchor.lead-anchor.backshift)*headScale,anchor.cross*headScale);
  ctx.drawImage(
    IMGS.head,
    fi*s.frameW, 0, s.frameW-HEAD_NOSE_TRIM, s.h,
    -CELL/2-anchor.overlap*headScale, -CELL/2, CELL, CELL
  );
  ctx.restore();
  return true;
}

function drawDigestHead(px,py,angle,flipH=false,dirVec={x:1,y:0}){
  if(!digestHeadAnim||!hasSprite('digest')) return false;
  const s=SD.digest;
  const elapsed=animTime-digestHeadAnim.start;
  const fi=Math.floor(elapsed/1000*DIGEST_FPS);
  if(fi>=s.frames){
    digestHeadAnim=null;
    return false;
  }
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  const anchor=HEAD_ANCHOR[dirVec.x+','+dirVec.y]||HEAD_ANCHOR['1,0'];
  const headScale=CELL/NOMINAL_CELL;
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);
  if(flipH)ctx.scale(-1,1);
  ctx.translate((anchor.lead-anchor.backshift)*headScale,anchor.cross*headScale);
  ctx.drawImage(
    IMGS.digest,
    fi*s.frameW, 0, s.frameW, s.h,
    -CELL/2-anchor.overlap*headScale, -CELL/2, CELL, CELL
  );
  ctx.restore();
  return true;
}

function drawHead(px,py,angle,flipH=false,dirVec={x:1,y:0}){
  const useMaskBackdrop=shouldDrawHeadMaskBackdrop();
  if(hurtHeadLoop){
    if(useMaskBackdrop) drawHeadMaskBackdrop(px,py,angle,flipH,dirVec,'hurt');
    if(drawHurtHead(px,py,angle,flipH,dirVec)) return;
  }
  if(digestHeadAnim){
    if(useMaskBackdrop) drawHeadMaskBackdrop(px,py,angle,flipH,dirVec,'digest');
    if(drawDigestHead(px,py,angle,flipH,dirVec)) return;
  }
  if(useMaskBackdrop) drawHeadMaskBackdrop(px,py,angle,flipH,dirVec,'normal');
  if(drawNormalHead(px,py,angle,flipH,dirVec)) return;
  const cx=Math.round(px+CELL/2), cy=Math.round(py+CELL/2);
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);
  if(flipH)ctx.scale(-1,1);
  ctx.fillStyle=C.croc;
  ctx.beginPath();
  ctx.moveTo(-CELL*0.3,-CELL*0.2);
  ctx.lineTo(CELL*0.2,-CELL*0.16);
  ctx.quadraticCurveTo(CELL*0.34,0,CELL*0.2,CELL*0.16);
  ctx.lineTo(-CELL*0.3,CELL*0.2);
  ctx.quadraticCurveTo(-CELL*0.18,0,-CELL*0.3,-CELL*0.2);
  ctx.fill();
  ctx.fillStyle=C.crocBelly;
  ctx.beginPath();
  ctx.moveTo(-CELL*0.12,-CELL*0.08);
  ctx.lineTo(CELL*0.22,-CELL*0.06);
  ctx.quadraticCurveTo(CELL*0.28,0,CELL*0.22,CELL*0.06);
  ctx.lineTo(-CELL*0.12,CELL*0.08);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle=C.crocEye;
  ctx.beginPath();
  ctx.arc(-CELL*0.12,-CELL*0.08,3,0,Math.PI*2);
  ctx.arc(-CELL*0.12,CELL*0.08,3,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle=C.crocTooth;
  for(let i=0;i<3;i++){
    const x=CELL*(0.06+i*0.07);
    ctx.beginPath();
    ctx.moveTo(x,-CELL*0.03);
    ctx.lineTo(x+CELL*0.03,0);
    ctx.lineTo(x,CELL*0.03);
    ctx.fill();
  }
  ctx.restore();
}

function segDir(i){
  if(i===0)return dir;
  return{x:snake[i-1].x-snake[i].x, y:snake[i-1].y-snake[i].y};
}

function draw(t){
  if(!snake||snake.length===0)return;
  const et=ease(t);
  digestionBodyAnim=null;
  fx.clearRect(0,0,fxCanvas.width,fxCanvas.height);
  const discoActive=animTime<discoUntil;
  let discoHue=0;
  if(discoActive){
    discoHue=(animTime%5200)/5200*360;
    ctx.save();
    ctx.filter=`hue-rotate(${discoHue}deg) saturate(1.14) brightness(1.08)`;
  }

  drawCachedMapBackground();

  if(food)drawFood(food);
  if(sockHazard)drawSock(sockHazard);
  if(discoPickup)drawDiscoPickup(discoPickup);
  if(warpPickup)drawWarpPickup(warpPickup.x,warpPickup.y);
  drawExitPortal('back');

  const hideCrocForWarpReveal=!!warpTransition;

  if(!hideCrocForWarpReveal){
    if(exitPortalAnim){
      // Clip croc to the emerged side of the portal so tail segments
      // still inside the warp hole don't bleed into the map border.
      const ppx=cellToPx(exitPortalAnim.x);
      const ppy=cellToPy(exitPortalAnim.y);
      const bw=boardWidth(), bh=boardHeight();
      ctx.save();
      ctx.beginPath();
      if(headDir.x>0)       ctx.rect(ppx,        0, bw-ppx,    bh);
      else if(headDir.x<0)  ctx.rect(0,           0, ppx+CELL,  bh);
      else if(headDir.y>0)  ctx.rect(0,         ppy, bw,        bh-ppy);
      else                  ctx.rect(0,           0, bw,        ppy+CELL);
      ctx.clip();
      drawCroc(et,true);
      ctx.restore();
    } else {
      drawCroc(et,true);
    }
  }

  drawExitPortal('front');
  if(discoActive){
    ctx.restore();
  }

  // Eat burst should sit over the croc, not under it.
  drawEatAnim();
  drawWarpTransition();
  drawWarpWheeText();
  drawScorePopups();
  if(exitPortalAnim && animTime-exitPortalAnim.start>=exitPortalAnim.duration){
    exitPortalAnim=null;
  }
  drawCRTOverlay();
}

function drawExitPortal(layer='back'){
  if(!exitPortalAnim) return;
  const elapsed=animTime-exitPortalAnim.start;
  if(elapsed>=exitPortalAnim.duration){
    return;
  }
  const t=Math.max(0,Math.min(1,elapsed/exitPortalAnim.duration));
  const travel={x:-exitPortalAnim.dir.x,y:-exitPortalAnim.dir.y};
  const horizontal=travel.x!==0;
  const key=horizontal
    ? (
        layer==='back'
          ? 'portalBackH'
          : (travel.x>0 ? 'portalFrontHLt' : 'portalFrontHRt')
      )
    : (layer==='back'?'portalBackV':'portalFrontV');
  if(!hasSprite(key)) return;
  const px=cellToPx(exitPortalAnim.x);
  const py=cellToPy(exitPortalAnim.y);
  const dx=Math.round(px);
  const dy=Math.round(py);
  const flipH=horizontal && travel.x<0 && !(layer==='front' && horizontal);
  const angle=horizontal ? 0 : (travel.y<0 ? -Math.PI/2 : Math.PI/2);
  const burstHoldMs=220;
  const frontFadeMs=140;
  ctx.save();
  if(layer==='back'){
    ctx.globalAlpha=0.9;
    drawAt(key,0,dx,dy,angle,flipH);
  }else{
    const frontAlpha=Math.max(0,Math.min(1,(elapsed-burstHoldMs)/frontFadeMs));
    if(frontAlpha>0){
      ctx.globalAlpha=frontAlpha;
      drawAt(key,0,dx,dy,angle,flipH);
    }
  }
  if(layer==='front' && hasSprite('portalBurst')){
    const burstDuration=420;
    const burstT=Math.min(1, elapsed/burstDuration);
    const burstFrame=Math.min(SD.portalBurst.frames-1,Math.floor(burstT*SD.portalBurst.frames));
    const burstSize=CELL*(1.875+burstT*5.25);
    ctx.globalAlpha=1;
    ctx.drawImage(
      IMGS.portalBurst,
      burstFrame*SD.portalBurst.frameW,0,SD.portalBurst.frameW,SD.portalBurst.frameH,
      Math.round(dx+(CELL-burstSize)/2),
      Math.round(dy+(CELL-burstSize)/2),
      burstSize,
      burstSize
    );
  }
  ctx.restore();
}

function drawCroc(et,allowDigestion){
  if(!snake||snake.length===0)return;
  const exitSettle=exitPortalAnim
    ? Math.max(0,1-(animTime-exitPortalAnim.start)/exitPortalAnim.duration)
    : 0;
  const exitShiftMag=exitPortalAnim ? (exitPortalAnim.emergeShift||CELL*2) : 0;
  const exitShiftX=exitPortalAnim ? -headDir.x*exitShiftMag*exitSettle : 0;
  const exitShiftY=exitPortalAnim ? -headDir.y*exitShiftMag*exitSettle : 0;

  // Back leg stays under the whole croc, including tail.
  for(let i=snake.length-1;i>=1;i--){
    if(!segPositions[i])continue;
    const sp=segPositions[i];
    const segT = frameCount===0 ? et : i===1 ? Math.min(1,0.42+et*0.58) : et;
    let px=lerp(sp.px,sp.tx,segT)+exitShiftX;
    let py=lerp(sp.py,sp.ty,segT)+exitShiftY;
    const d=(renderDirs[i])||segDir(i);
    const forceCrashCorner=i===1 && spriteTypes[i]==='corner' && hurtHeadLoop && (headDir.x!==d.x || headDir.y!==d.y) && snake[i+1];
    const crashCornerKey=forceCrashCorner
      ? (snake[i].x-snake[i+1].x)+','+(snake[i].y-snake[i+1].y)+','+headDir.x+','+headDir.y
      : null;
    const legFrames=SD.frontLeg?.frames||SD.backLeg?.frames||6;
    const frontLegFrame=Math.floor(animTime/1000*LEG_ANIM_FPS)%legFrames;
    const rearPairFrame=(frontLegFrame+2)%legFrames;
    const goLeft=d.x===-1&&d.y===0;
    const isHoriz=d.y===0;
    const bodyAngle=isHoriz?0:(d.y<0?-Math.PI/2:Math.PI/2);
    const stype=forceCrashCorner ? 'corner' : (spriteTypes[i]||'body');
    const frontLegHurtShift=(hurtHeadLoop&&i===1&&d.y===0)?50:0;
    const backLegOffset=i===1 ? NECK_BACK_LEG_OFFSET+frontLegHurtShift : -20+(i===1?frontLegHurtShift:0);

    if(i===1){
      // Draw neck back leg here in underlay so it goes under the head naturally.
      // Use bodyAngle/goLeft (not corner tr.a) so offset stays along body axis.
      drawLegGhost('backLeg',px,py,bodyAngle,goLeft,NECK_BACK_LEG_OFFSET+frontLegHurtShift);
      drawBackLegUnderlay(frontLegFrame,px,py,bodyAngle,goLeft,NECK_BACK_LEG_OFFSET+frontLegHurtShift);
    } else if(stype==='frontlegs'){
      drawLegGhost('backLeg',px,py,bodyAngle,goLeft,backLegOffset);
      drawBackLegUnderlay(frontLegFrame,px,py,bodyAngle,goLeft,backLegOffset);
    } else if(stype==='backlegs'){
      drawLegGhost('backLeg',px,py,bodyAngle,goLeft,-20);
      drawBackLegUnderlay(rearPairFrame,px,py,bodyAngle,goLeft,-20);
    } else if(stype==='corner' && i===snake.length-2){
      const key=cornerKeys[i];
      const tr=(key&&CORNER_MAP[key])||{a:0,fH:false};
      drawLegGhost('backLeg',px,py,tr.a,tr.fH,-20);
      drawBackLegUnderlay(rearPairFrame,px,py,tr.a,tr.fH,-20);
    } else if(stype==='body' && i===snake.length-2){
      drawLegGhost('backLeg',px,py,bodyAngle,goLeft,-20);
      drawBackLegUnderlay(rearPairFrame,px,py,bodyAngle,goLeft,-20);
    }
  }

  // Draw segments back to front, head drawn last so it's always on top
  const drawOrder=[...Array(snake.length).keys()].slice(1).reverse();
  drawOrder.push(0);
  for(const i of drawOrder){
    if(!segPositions[i])continue;
    const sp=segPositions[i];
    // Keep the neck segment closer to the head so the board doesn't flash through.
    const segT = frameCount===0
      ? et
      : i===0 ? Math.min(1, 0.35 + et*0.65) : i===1 ? Math.min(1, 0.42 + et*0.58) : et;
    let px=lerp(sp.px,sp.tx,segT)+exitShiftX;
    let py=lerp(sp.py,sp.ty,segT)+exitShiftY;

    const d=(renderDirs[i])||segDir(i);
    const forceCrashCorner=i===1 && spriteTypes[i]==='corner' && hurtHeadLoop && (headDir.x!==d.x || headDir.y!==d.y) && snake[i+1];
    const crashCornerKey=forceCrashCorner
      ? (snake[i].x-snake[i+1].x)+','+(snake[i].y-snake[i+1].y)+','+headDir.x+','+headDir.y
      : null;
    const tailFrame=spriteFrameIndex('tail',TAIL_FPS);
    const legFrames=SD.frontLeg?.frames||SD.backLeg?.frames||6;
    const frontLegFrame=Math.floor(animTime/1000*LEG_ANIM_FPS)%legFrames;
    const rearPairFrame=(frontLegFrame+2)%legFrames;
    const goLeft=d.x===-1&&d.y===0;
    const isHoriz=d.y===0;
    const bodyAngle=isHoriz?0:(d.y<0?-Math.PI/2:Math.PI/2);
    const frontLegHurtShift=(hurtHeadLoop&&i===1&&d.y===0)?50:0;
    const frontLegOffset=i===1 ? NECK_FRONT_LEG_OFFSET+frontLegHurtShift : frontLegHurtShift;
    const stype=forceCrashCorner ? 'corner' : (spriteTypes[i]||'body');

    if(stype==='head'){
      // Always use current game direction for head — never lags
      const hd=headDir;
      let ha=0,hf=false;
      if(hd.x===1){ha=0;hf=false;}
      else if(hd.x===-1){ha=0;hf=true;}
      else if(hd.y===-1){ha=-Math.PI/2;}
      else{ha=Math.PI/2;}
      const verticalHeadDrop=0;
      if(!hideHeadBridge && shouldDrawHeadBridge()) drawHeadBridge(px,py,ha,hf);
      drawHead(px+crashHeadOffset.x,py+crashHeadOffset.y+verticalHeadDrop,ha,hf,hd);

    } else if(stype==='tail'){
      const prev=snake[i-1];
      if(!prev)continue;
      const td={x:snake[i].x-prev.x,y:snake[i].y-prev.y};
      let ta=0,tf2=false;
      if(td.x===1){ta=0;tf2=true;}
      else if(td.x===-1){ta=0;tf2=false;}
      else if(td.y===-1){ta=Math.PI/2;tf2=false;}
      else{ta=-Math.PI/2;tf2=false;}
      const tailPx=px-td.x*TAIL_INSET;
      const tailPy=py-td.y*TAIL_INSET+TAIL_Y_OFFSET;
      if(!drawAt('tail',tailFrame,tailPx,tailPy,ta,tf2)) drawVectorSegment('tail',tailPx,tailPy,ta,tf2);

    } else if(stype==='frontlegs'){
      if(!drawAt('bodyFront',0,px,py,bodyAngle,goLeft) && !drawAt('body',0,px,py,bodyAngle,goLeft)) {
        drawVectorSegment('body',px,py,bodyAngle,goLeft);
      }
      if(i!==1){
        if(!drawAtOffset('frontLeg',frontLegFrame,px,py,bodyAngle,goLeft,frontLegOffset,NECK_FRONT_LEG_Y_OFFSET)) drawVectorSegment('frontlegs',px,py,bodyAngle,goLeft,0);
      }

    } else if(stype==='backlegs'){
      if(!drawAt('bodyBack',0,px,py,bodyAngle,goLeft) && !drawAt('body',0,px,py,bodyAngle,goLeft)) {
        drawVectorSegment('body',px,py,bodyAngle,goLeft);
      }
      if(!drawAt('frontLeg',rearPairFrame,px,py,bodyAngle,goLeft)) drawVectorSegment('frontlegs',px,py,bodyAngle,goLeft,0);

    } else if(stype==='corner'){
      const key=crashCornerKey||cornerKeys[i];
      const tr=(key&&CORNER_MAP[key])||{a:0,fH:false};
      if(!drawAt('curve',0,px,py,tr.a,tr.fH)) drawVectorSegment('corner',px,py,tr.a,tr.fH);
      // Legs on curve if at front or back leg position
      if(i===1||i===snake.length-2){
        const hurtShift=i===1?frontLegOffset:0;
        if(i!==1){
          if(!drawAtOffset('frontLeg',i===1?frontLegFrame:rearPairFrame,px,py,tr.a,tr.fH,hurtShift,i===1?NECK_FRONT_LEG_Y_OFFSET:0)) drawVectorSegment('frontlegs',px,py,tr.a,tr.fH,0);
        }
      }

    } else {
      if(!drawAt('body',0,px,py,bodyAngle,goLeft)) drawVectorSegment('body',px,py,bodyAngle,goLeft);
      // Legs overlay on straight body at front and back leg positions
      if(i===1||i===snake.length-2){
        const hurtShift=i===1?frontLegOffset:0;
        if(i!==1){
          if(!drawAtOffset('frontLeg',i===1?frontLegFrame:rearPairFrame,px,py,bodyAngle,goLeft,hurtShift,i===1?NECK_FRONT_LEG_Y_OFFSET:0)) drawVectorSegment('frontlegs',px,py,bodyAngle,goLeft,0);
        }
      }
    }
  }

  if(snake.length>1 && segPositions[1]){
    const i=1;
    const sp=segPositions[i];
    const segT = frameCount===0 ? et : Math.min(1, 0.42 + et*0.58);
    const px=lerp(sp.px,sp.tx,segT)+exitShiftX;
    const py=lerp(sp.py,sp.ty,segT)+exitShiftY;
    const d=(renderDirs[i])||segDir(i);
    const forceCrashCorner=i===1 && spriteTypes[i]==='corner' && hurtHeadLoop && (headDir.x!==d.x || headDir.y!==d.y) && snake[i+1];
    const crashCornerKey=forceCrashCorner
      ? (snake[i].x-snake[i+1].x)+','+(snake[i].y-snake[i+1].y)+','+headDir.x+','+headDir.y
      : null;
    const legFrames=SD.frontLeg?.frames||SD.backLeg?.frames||6;
    const frontLegFrame=Math.floor(animTime/1000*LEG_ANIM_FPS)%legFrames;
    const goLeft=d.x===-1&&d.y===0;
    const isHoriz=d.y===0;
    const bodyAngle=isHoriz?0:(d.y<0?-Math.PI/2:Math.PI/2);
    const frontLegHurtShift=(hurtHeadLoop&&i===1&&d.y===0)?50:0;
    const frontLegOffset=NECK_FRONT_LEG_OFFSET+frontLegHurtShift;
    const backLegOffsetPost=NECK_BACK_LEG_OFFSET+frontLegHurtShift;
    const behindLegFrame=frontLegFrame;
    const stype=forceCrashCorner ? 'corner' : (spriteTypes[i]||'body');

    if(stype==='frontlegs'){
      drawLegGhost('frontLeg',px,py,bodyAngle,goLeft,frontLegOffset,NECK_FRONT_LEG_Y_OFFSET);
      if(!drawAtOffset('frontLeg',frontLegFrame,px,py,bodyAngle,goLeft,frontLegOffset,NECK_FRONT_LEG_Y_OFFSET)) drawVectorSegment('frontlegs',px,py,bodyAngle,goLeft,0);
    } else if(stype==='corner'){
      drawLegGhost('frontLeg',px,py,bodyAngle,goLeft,frontLegOffset,NECK_FRONT_LEG_Y_OFFSET);
      if(!drawAtOffset('frontLeg',frontLegFrame,px,py,bodyAngle,goLeft,frontLegOffset,NECK_FRONT_LEG_Y_OFFSET)) drawVectorSegment('frontlegs',px,py,bodyAngle,goLeft,0);
    } else if(stype==='body'){
      drawLegGhost('frontLeg',px,py,bodyAngle,goLeft,frontLegOffset,NECK_FRONT_LEG_Y_OFFSET);
      if(!drawAtOffset('frontLeg',frontLegFrame,px,py,bodyAngle,goLeft,frontLegOffset,NECK_FRONT_LEG_Y_OFFSET)) drawVectorSegment('frontlegs',px,py,bodyAngle,goLeft,0);
    }
  }

}

function getBoardItemDrawRect(gx,gy,key,drawScale=1,scaleY=1,offsetY=0){
  const s=SD[key];
  if(!s||!hasSprite(key)) return null;
  const x=cellToPx(gx), y=cellToPy(gy);
  const dw=CELL*drawScale;
  const dh=dw*(s.h/s.frameW)*scaleY;
  const dx=Math.round(x+(CELL-dw)/2);
  const dy=Math.round(y+(CELL-dh)/2+offsetY);
  return {dx,dy,dw,dh,s};
}

function drawAnimatedBoardItem(gx,gy,key,fps,drawScale=1,scaleY=1,offsetY=0){
  const rect=getBoardItemDrawRect(gx,gy,key,drawScale,scaleY,offsetY);
  if(!rect) return false;
  const fi=spriteFrameIndex(key,fps);
  const {dx,dy,dw,dh,s}=rect;
  ctx.drawImage(IMGS[key],fi*s.frameW,0,s.frameW,s.h,dx,dy,dw,dh);
  return true;
}

function drawBoardItemShadow(gx,gy,key,fps,scale=1,offsetX=0,offsetY=0){
  if(!itemShadowImg.complete || !itemShadowImg.naturalWidth || !itemShadowImg.naturalHeight) return;
  const rect=getBoardItemDrawRect(gx,gy,key,scale);
  if(!rect) return;
  const {dx,dy,dw,dh}=rect;
  const shadowW=CELL*Math.max(0.56,scale*0.84)*ITEM_SHADOW_GLOBAL_SCALE;
  const shadowH=shadowW*(itemShadowImg.naturalHeight/ITEM_SHADOW_FRAME_W);
  const shadowX=Math.round(dx+(dw-shadowW)/2+offsetX);
  const shadowY=Math.round(dy+dh-shadowH*0.5+ITEM_SHADOW_GLOBAL_Y_OFFSET+offsetY);
  const shadowFrame=(Math.floor(animTime/1000*fps)%ITEM_SHADOW_FRAMES)*ITEM_SHADOW_FRAME_W;
  ctx.drawImage(
    itemShadowImg,
    shadowFrame,0,ITEM_SHADOW_FRAME_W,itemShadowImg.naturalHeight,
    shadowX,shadowY,shadowW,shadowH
  );
}

function drawItemShadowForType(itemType,gx,gy,fps,scale=1){
  const shadowYAdjustByType={
    banana:-14,
    apple:2,
    pizza:15,
  };
  const shadowScaleByType={
    banana:1.0648,
    apple:1.0648,
  };
  const yAdjust=shadowYAdjustByType[itemType]||0;
  const shadowScale=shadowScaleByType[itemType]||1;
  const key=(FOOD_TYPES[itemType]||SOCK_DEF).idleKey;
  drawBoardItemShadow(gx,gy,key,fps,scale*shadowScale,0,yAdjust);
}

function drawFood(item){
  const def=FOOD_TYPES[item.type]||FOOD_TYPES.sandwich;
  const scaleY=def.drawScaleY||1;
  const offsetY=def.offsetY||0;
  if(item.type!=='sandwich') drawItemShadowForType(item.type,item.x,item.y,def.idleFps,def.drawScale);
  drawAnimatedBoardItem(item.x,item.y,def.idleKey,def.idleFps,def.drawScale,scaleY,offsetY);
}

function drawSock(item){
  drawBoardItemShadow(item.x,item.y,SOCK_DEF.idleKey,SOCK_DEF.idleFps,SOCK_DEF.drawScale,0,-23);
  drawAnimatedBoardItem(item.x,item.y,SOCK_DEF.idleKey,SOCK_DEF.idleFps,SOCK_DEF.drawScale,SOCK_DEF.drawScaleY||1,SOCK_DEF.offsetY||0);
}

function drawDiscoPickup(item){
  if(!discoImg.complete || !discoImg.naturalWidth || !discoImg.naturalHeight) return;
  const x=cellToPx(item.x), y=cellToPy(item.y);
  const size=CELL*1.544814;
  const dx=Math.round(x+(CELL-size)/2);
  const dy=Math.round(y+(CELL-size)/2+6);
  const discoFrame=(Math.floor(animTime/1000*DISCO_FPS)%DISCO_FRAMES)*DISCO_FRAME_W;
  drawBoardItemShadow(item.x,item.y,'pizzaIdle',ITEM_IDLE_FPS,1.02,0,8);
  ctx.drawImage(
    discoImg,
    discoFrame,0,DISCO_FRAME_W,discoImg.naturalHeight,
    dx,dy,size,size
  );
}

function drawWarpPickup(gx,gy){
  const x=cellToPx(gx), y=cellToPy(gy);
  if(hasSprite('portal')){
    const fi=spriteFrameIndex('portal',12);
    const colsInSheet=Math.max(1,Math.floor(SD.portal.w/SD.portal.frameW));
    const sx=(fi%colsInSheet)*SD.portal.frameW;
    const sy=Math.floor(fi/colsInSheet)*SD.portal.frameH;
    const dw=CELL*1.2;
    const dh=dw;
    const dx=Math.round(x+(CELL-dw)/2);
    const dy=Math.round(y+(CELL-dh)/2);
    ctx.save();
    ctx.globalAlpha=0.96;
    ctx.drawImage(IMGS.portal,sx,sy,SD.portal.frameW,SD.portal.frameH,dx,dy,dw,dh);
    ctx.restore();
    return;
  }
  const cx=Math.round(x+CELL/2), cy=Math.round(y+CELL/2);
  ctx.save();
  ctx.translate(cx,cy);
  ctx.globalAlpha=0.92;
  ctx.strokeStyle='rgba(255,228,126,0.95)';
  ctx.lineWidth=8;
  ctx.beginPath();
  ctx.arc(0,0,CELL*0.18,0,Math.PI*2);
  ctx.stroke();
  ctx.restore();
}

function drawWarpTransition(){
  if(!warpTransition||!hasSprite('portal')) return;
  const elapsed=animTime-warpTransition.start;
  const p=Math.min(1,elapsed/warpTransition.duration);
  const frame=spriteFrameIndex('portal',14);
  const colsInSheet=Math.max(1,Math.floor(SD.portal.w/SD.portal.frameW));
  const sx=(frame%colsInSheet)*SD.portal.frameW;
  const sy=Math.floor(frame/colsInSheet)*SD.portal.frameH;
  const cx=Math.round(warpTransition.hitPx);
  const cy=Math.round(warpTransition.hitPy);
  const portalSize=CELL*1.2;
  const swapPulse=Math.max(0,1-Math.abs(p-0.5)/0.18);
  fx.save();
  fx.fillStyle=`rgba(12,6,28,${Math.sin(p*Math.PI)*0.28 + swapPulse*0.5})`;
  fx.fillRect(0,0,fxCanvas.width,fxCanvas.height);
  if(p<=0.24){
    fx.globalAlpha=Math.max(0,0.12+Math.sin(p*Math.PI)*0.72-(p>0.55?(p-0.55)*1.4:0));
    fx.drawImage(
      IMGS.portal,
      sx,sy,SD.portal.frameW,SD.portal.frameH,
      Math.round(cx-portalSize/2),
      Math.round(cy-portalSize/2),
      portalSize,
      portalSize
    );
  }
  fx.restore();
}

function drawWarpWheeText(){
  if(!exitPortalAnim||!snake||!snake.length) return;
  const elapsed=animTime-exitPortalAnim.start;
  if(elapsed<0||elapsed>=exitPortalAnim.duration) return;
  const p=Math.max(0,Math.min(1,elapsed/exitPortalAnim.duration));
  const exitSettle=Math.max(0,1-p);
  const exitShiftMag=exitPortalAnim.emergeShift||CELL*2;
  const headX=cellToPx(snake[0].x)+CELL/2-headDir.x*exitShiftMag*exitSettle;
  const headY=cellToPy(snake[0].y)+CELL/2-headDir.y*exitShiftMag*exitSettle;

  const fullExtraEs=30;
  const buildCutoff=0.66;
  const holdCutoff=0.82;
  const fadeStart=0.76;
  let label='W';
  if(!exitPortalAnim.wheeSoundPlayed && p>=0.18){
    playWarpWheeSound();
    exitPortalAnim.wheeSoundPlayed=true;
  }
  if(p<0.1){
    label='W';
  }else if(p<0.18){
    label='WH';
  }else if(p<0.26){
    label='WHE';
  }else if(p<buildCutoff){
    const buildT=(p-0.26)/(buildCutoff-0.26);
    const extraEs=3+Math.floor(buildT*fullExtraEs);
    label=`WH${'E'.repeat(extraEs)}!`;
  }else if(p<holdCutoff){
    label=`WH${'E'.repeat(fullExtraEs)}!`;
  }else{
    const fadeT=(p-fadeStart)/(1-fadeStart);
    const remainingEs=Math.max(1,Math.ceil((1-fadeT)*fullExtraEs));
    if(headDir.x>0){
      label=`WH${'E'.repeat(remainingEs)}!`;
    }else if(headDir.x<0){
      label=`W${'H'.repeat(fadeT>=0.92?0:1)}${'E'.repeat(remainingEs)}!`;
    }else if(headDir.y<0){
      label=`WH${'E'.repeat(remainingEs)}!`;
    }else{
      label=`WH${'E'.repeat(remainingEs)}!`;
    }
  }

  let textX=headX;
  let textY=headY;
  const warpLetterColors=['#ff4fd8','#f6ff00','#65f4ff','#ffad1f','#7dff72','#ffffff'];
  fx.save();
  fx.font='32px "Press Start 2P", monospace';
  fx.textBaseline='middle';
  fx.globalAlpha=1;
  textY-=CELL*0.88;
  const letters=[...label];
  const widths=letters.map(letter=>fx.measureText(letter).width);
  const totalWidth=widths.reduce((sum,width)=>sum+width,0);
  let drawX=textX;
  if(headDir.x>0){
    drawX=textX+CELL*0.46-totalWidth;
  }else if(headDir.x<0){
    drawX=textX-CELL*0.46;
  }else{
    drawX=textX-totalWidth/2;
  }
  fx.textAlign='left';
  letters.forEach((letter,index)=>{
    fx.fillStyle=warpLetterColors[index%warpLetterColors.length];
    fx.fillText(letter,Math.round(drawX),Math.round(textY));
    drawX+=widths[index];
  });
  fx.restore();
}

function drawEatAnim(){
  if(!eatAnim) return;
  const isSock=eatAnim.type==='sock';
  const isDisco=eatAnim.type==='disco';
  const def=isSock ? SOCK_DEF : isDisco ? DISCO_DEF : (FOOD_TYPES[eatAnim.type]||FOOD_TYPES.sandwich);
  const key=def.chompKey;
  if(!hasSprite(key)) return;
  const elapsed=animTime-eatAnim.start;
  const frameTrim=isDisco ? 4 : 0;
  const fi=Math.floor(elapsed/1000*def.chompFps)+frameTrim;
  if(fi>=SD[key].frames){
    eatAnim=null;
    return;
  }
  const x=cellToPx(eatAnim.x),y=cellToPy(eatAnim.y);
  const s=SD[key];
  const dw=CELL*(def.drawScale||1);
  const dh=dw*(s.h/s.frameW)*(def.drawScaleY||1);
  const dx=Math.round(x+(CELL-dw)/2);
  const dy=Math.round(y+(CELL-dh)/2+(def.offsetY||0));
  ctx.drawImage(IMGS[key],fi*s.frameW,0,s.frameW,s.h,dx,dy,dw,dh);
}

function drawScorePopups(){
  if(!scorePopups.length) return;
  const active=[];
  fx.save();
  fx.textAlign='center';
  fx.textBaseline='middle';
  for(const popup of scorePopups){
    const elapsed=animTime-popup.start;
    if(elapsed<0){
      active.push(popup);
      continue;
    }
    if(elapsed>=popup.duration) continue;
    const p=Math.max(0,Math.min(1,elapsed/popup.duration));
    const riseT=1-Math.pow(1-p,3);
    const rise=60*riseT;
    const px=cellToPx(popup.x)+CELL/2;
    const py=cellToPy(popup.y)+CELL/2-rise;
    fx.font=popup.label ? '22px "Press Start 2P", monospace' : '32px "Press Start 2P", monospace';
    fx.globalAlpha=1;
    fx.fillStyle='#f6ff00';
    fx.filter=`hue-rotate(${Math.round(popup.hueTarget*p)}deg)`;
    fx.shadowColor='transparent';
    fx.shadowBlur=0;
    const label=popup.label ?? (popup.value>0 ? `+${popup.value}` : `${popup.value}`);
    fx.fillText(label,Math.round(px),Math.round(py));
    fx.filter='none';
    active.push(popup);
  }
  fx.restore();
  scorePopups=active;
}



window.addEventListener('keydown',e=>{
  if(isLeaderboardEntryModalOpen()){
    if(shouldStartFromKeyEvent(e) && e.target!==leaderboardNameInput && e.target!==leaderboardEmailInput){
      e.preventDefault();
      if(leaderboardModalMode==='name') submitLeaderboardName();
      else if(leaderboardModalMode==='email') submitLeaderboardEmail(false);
    }
    return;
  }
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' ','r','R'].includes(e.key)||e.code==='Space'){
    e.preventDefault();
  }
  if(!gameRunning){
    if(shouldStartFromKeyEvent(e)){
      if(isLeaderboardViewActive()){
        e.preventDefault();
        return;
      }
      if(Date.now()<suppressStartKeyUntil){
        e.preventDefault();
        return;
      }
      triggerGameStart();
    }
    return;
  }
  if(e.key==='r' || e.key==='R'){
    togglePause();
    return;
  }
  const dpadKey=
    (e.key==='ArrowUp'   ||e.key==='w')?'ArrowUp':
    (e.key==='ArrowDown' ||e.key==='s')?'ArrowDown':
    (e.key==='ArrowLeft' ||e.key==='a')?'ArrowLeft':
    (e.key==='ArrowRight'||e.key==='d')?'ArrowRight':null;
  if(dpadKey){
    queueTurn(dpadKey==='ArrowUp'?{x:0,y:-1}:dpadKey==='ArrowDown'?{x:0,y:1}:dpadKey==='ArrowLeft'?{x:-1,y:0}:{x:1,y:0});
  }
});

window.addEventListener('keyup',e=>{
  if(isLeaderboardEntryModalOpen()) return;
  if(!gameRunning && shouldStartFromKeyEvent(e)){
    e.preventDefault();
    if(isLeaderboardViewActive()) return;
    if(Date.now()<suppressStartKeyUntil) return;
    triggerGameStart();
  }
  const dpadKey=
    (e.key==='ArrowUp'   ||e.key==='w')?'ArrowUp':
    (e.key==='ArrowDown' ||e.key==='s')?'ArrowDown':
    (e.key==='ArrowLeft' ||e.key==='a')?'ArrowLeft':
    (e.key==='ArrowRight'||e.key==='d')?'ArrowRight':null;
});

let touchStart=null;
function canTriggerIntroStart(){
  return !isLeaderboardEntryModalOpen() && !!startScreenLayer && startScreenLayer.style.display!=='none';
}
screenContent.addEventListener('pointerdown',()=>{
  if(!gameRunning && canTriggerIntroStart()) triggerGameStart();
});
if(startScreenLayer){
  startScreenLayer.addEventListener('pointerdown',()=>{
    if(!gameRunning && canTriggerIntroStart()) triggerGameStart();
  });
  startScreenLayer.addEventListener('click',()=>{
    if(!gameRunning && canTriggerIntroStart()) triggerGameStart();
  });
}
canvas.addEventListener('touchstart',e=>{touchStart=e.touches[0];e.preventDefault();},{passive:false});
canvas.addEventListener('touchend',e=>{
  if(!touchStart||!gameRunning)return;
  const dx=e.changedTouches[0].clientX-touchStart.clientX;
  const dy=e.changedTouches[0].clientY-touchStart.clientY;
  if(Math.abs(dx)>Math.abs(dy)){
    if(dx>20)queueTurn({x:1,y:0});
    else if(dx<-20)queueTurn({x:-1,y:0});
  } else {
    if(dy>20)queueTurn({x:0,y:1});
    else if(dy<-20)queueTurn({x:0,y:-1});
  }
  e.preventDefault();
},{passive:false});

const leaderboardCrocoStrip=document.getElementById('leaderboard-croco-strip');
const crocStartStrip=document.getElementById('croc-start-strip');
const uiSpriteAnimations=[];

function isElementActive(el){
  return !!(el && !document.hidden && getComputedStyle(el).display!=='none' && el.offsetParent!==null);
}

function registerUISpriteAnimation(config){
  if(!config.element) return;
  uiSpriteAnimations.push({
    frame:0,
    hold:0,
    lastTime:performance.now(),
    ...config,
  });
}

function updateUISpriteAnimation(anim,steps){
  for(let i=0;i<steps;i++){
    if(anim.holdFrames && anim.frame===0 && anim.hold<anim.holdFrames){
      anim.hold++;
      continue;
    }
    anim.hold=0;
    anim.frame=(anim.frame+1)%anim.frames;
  }
  const framePct=100/anim.frames;
  anim.element.style.transform=`translateX(${-anim.frame*framePct}%)`;
}

function stepUISpriteAnimations(now){
  uiSpriteRaf=0;
  if(document.hidden) return;
  for(const anim of uiSpriteAnimations){
    if(!anim.isActive()){
      anim.lastTime=now;
      continue;
    }
    const frameDuration=1000/anim.fps;
    const elapsed=now-anim.lastTime;
    if(elapsed<frameDuration) continue;
    const steps=Math.floor(elapsed/frameDuration);
    anim.lastTime+=steps*frameDuration;
    updateUISpriteAnimation(anim,steps);
  }
  uiSpriteRaf=requestAnimationFrame(stepUISpriteAnimations);
}

registerUISpriteAnimation({
  element:caterpillarIdleStrip,
  frames:8,
  fps:8,
  isActive:()=>isElementActive(caterpillarIdleStrip),
});
registerUISpriteAnimation({
  element:caterpillarTalkStrip,
  frames:8,
  fps:12,
  isActive:()=>isElementActive(caterpillarTalkStrip),
});
[
  {element:document.querySelector('#leaderboard-bird-1 .leaderboard-bird-strip'),frames:10,fps:8},
  {element:document.querySelector('#leaderboard-bird-2 .leaderboard-bird-strip'),frames:6,fps:7},
  {element:document.querySelector('#leaderboard-bird-3 .leaderboard-bird-strip'),frames:6,fps:9},
  {element:document.querySelector('#leaderboard-bird-4 .leaderboard-bird-strip'),frames:6,fps:6},
].forEach(anim=>registerUISpriteAnimation({
  ...anim,
  isActive:()=>leaderboardScreen && leaderboardScreen.style.display!=='none',
}));
registerUISpriteAnimation({
  element:leaderboardCrocoStrip,
  frames:8,
  fps:6,
  isActive:()=>leaderboardScreen && leaderboardScreen.style.display!=='none',
});
registerUISpriteAnimation({
  element:crocStartStrip,
  frames:6,
  fps:5,
  holdFrames:3,
  isActive:()=>startScreenLayer && startScreenLayer.style.display!=='none',
});
uiSpriteRaf=requestAnimationFrame(stepUISpriteAnimations);

document.addEventListener('visibilitychange',()=>{
  if(document.hidden){
    if(animId){
      cancelAnimationFrame(animId);
      animId=0;
    }
    if(idleLoopTimer){
      clearTimeout(idleLoopTimer);
      idleLoopTimer=0;
    }
    if(uiSpriteRaf){
      cancelAnimationFrame(uiSpriteRaf);
      uiSpriteRaf=0;
    }
    return;
  }
  lastIdleDrawAt=-Infinity;
  lastTickTime=performance.now();
  if(gameRunning || snake) requestGameLoop();
  if(!uiSpriteRaf) uiSpriteRaf=requestAnimationFrame(stepUISpriteAnimations);
  scheduleLayout();
});

// draw(0); // removed — overlay shows until game starts
