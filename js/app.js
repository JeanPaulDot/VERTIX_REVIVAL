  let customMapData = null;
  let isCustomMap = false;

  var playerName, playerClassIndex, playerType, healthBarWidth, playerNameInput = document.getElementById("playerNameInput"),
      classInput = document.getElementById("classSelect"),
      socket, reason, animLoopHandle, mobile = !1,
      room, currentFPS = 0,
      fillCounter = 0,
      currentLikeButton = "",
      delta = 0,
      horizontalDT = 0,
      verticalDT = 0,
      roomNum = 0,
      currentTime, oldTime = Date.now(),
      FRAME_STEP = 1E3 / 60,
      count = -1,
      clientPrediction = !0,
      inputNumber = 0,
      clientSpeed = 12,
      temp = 1,
      thisInput = [],
      keyd = 1,
      tabbed = 0,
      timeSinceLastUpdate = 0,
      timeOfLastUpdate = 0,
      port, region;
      zip.workerScriptsPath = "./js/lib/";
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && (mobile = !0, hideMenuUI(), hideUI(!0), openGooglePlay(!1));
  Number.prototype.round = function (a) {
      return +this.toFixed(a)
  };
  var previousClass = 0,
      previousHat = 0,
      previousShirt = 0,
      previousSpray = 0,
      startingGame = !1,
      changingLobby = !1,
      inMainMenu = !0,
      loggedIn = !1;


      function handleMapFile(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const mapData = JSON.parse(e.target.result);
                if(validateMapData(mapData)) {
                    customMapData = mapData;
                    isCustomMap = true;
                    startGame(true); // Start game with custom map flag
                }
            } catch(err) {
                alert('Error loading map: ' + err.message);
            }
        };
        reader.readAsText(file);
    }


    function startGame(a, isCustomMap = false) {
        startingGame || changingLobby || (startingGame = true, 
        playerName = playerNameInput.value.replace(/(<([^>]+)>)/ig, "").substring(0, 25), 
        enterGame(a, isCustomMap), 
        inMainMenu && ($("#loadingWrapper").fadeIn(0, function() {}), 
        document.getElementById("loadText").innerHTML = "LOADING CUSTOM MAP")); // Changed message
    }
    
    function enterGame(a, isCustomMap = false) {
        
        startSoundTrack(2);
        playerClassIndex = currentClassID;
        playerType = a;
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        document.getElementById("startMenuWrapper").style.display = "none";
        
        if(isCustomMap && customMapData) {
            // Bypass socket.emit and directly initialize the game
            gameMap = {
                genData: customMapData.genData,
                width: customMapData.genData.width * mapTileScale,
                height: customMapData.genData.height * mapTileScale,
                tiles: [],
                gameMode: { desc1: "Custom Map", desc2: "Custom Map" }
            };
            setupMap(gameMap);
            gameStart = true;
            updateGameLoop();
        } else {
            // Original code for normal rooms
            room || socket.emit("create");
        }
        
        // Hide UI and start game loop
        socket.emit("respawn");
        hideMenuUI();
        animateOverlay = true;
        updateGameLoop();
    }

    function validateMapData(mapData) {
        if(!mapData || !mapData.genData) return false;
        console.log("Custom map loaded locally!");
        return true;
    }

  function validNick() {
      return null !== /^\w*$/.exec(playerNameInput.value)
  }
  var createClanButton = document.getElementById("createClanButton"),
      joinClanButton = document.getElementById("joinClanButton"),
      clanNameInput = document.getElementById("clanNameInput"),
      clanKeyInput = document.getElementById("clanKeyInput"),
      clanDBMessage = document.getElementById("clanDBMessage"),
      clanStats = document.getElementById("clanStats"),
      clanSignUp = document.getElementById("clanSignUp"),
      clanHeader = document.getElementById("clanHeader"),
      clanAdminPanel = document.getElementById("clanAdminPanel"),
      clanInviteInput =
      document.getElementById("clanInviteInput"),
      inviteClanButton = document.getElementById("inviteClanButton"),
      kickClanButton = document.getElementById("kickClanButton"),
      leaveClanButton = document.getElementById("leaveClanButton"),
      clanChatInput = document.getElementById("clanChatInput"),
      setChatClanButton = document.getElementById("setChatClanButton"),
      clanInvMessage = document.getElementById("clanInvMessage"),
      clanChtMessage = document.getElementById("clanChtMessage"),
      clanChatLink = document.getElementById("clanChatLink"),
      loginWrapper = document.getElementById("loginWrapper"),
      loggedInWrapper = document.getElementById("loggedInWrapper"),
      loginButton = document.getElementById("loginButton"),
      registerButton = document.getElementById("registerButton"),
      logoutButton = document.getElementById("logoutButton"),
      loginMessage = document.getElementById("loginMessage"),
      recoverButton = document.getElementById("recoverButton"),
      userNameInput = document.getElementById("usernameInput"),
      userEmailInput = document.getElementById("emailInput"),
      userPassInput =
      document.getElementById("passwordInput"),
      loginUserNm = "",
      loginUserPs = "",
      settingsMenu = document.getElementById("settingsButton"),
      settings = document.getElementById("settings"),
      howToMenu = document.getElementById("instructionButton"),
      howTo = document.getElementById("instructions"),
      leaderboardButton = document.getElementById("leaderButton"),
      btn = document.getElementById("startButton"),
      btnMod = document.getElementById("texturePackButton"),
      modURL = document.getElementById("textureModInput"),
      lobbyInput = document.getElementById("lobbyKey"),
      lobbyPass = document.getElementById("lobbyPass"),
      lobbyMessage = document.getElementById("lobbyMessage"),
      lobbyButton = document.getElementById("joinLobbyButton"),
      createServerButton = document.getElementById("createServerButton"),
      serverCreateMessage = document.getElementById("serverCreateMessage"),
      serverKeyTxt = document.getElementById("serverKeyTxt"),
      loginTimeOut = null;

  function startLogin() {
      socket && (socket.emit("dbLogin", {
          userName: userNameInput.value,
          userPass: userPassInput.value
      }), loginUserNm = userNameInput.value, loginUserPs = userPassInput.value, loginMessage.style.display = "block", loginMessage.innerHTML = "Please Wait...")
  }
  var customMap = null;

  function getFile() {
      document.getElementById("upfile").click()
  }

  function selectedCMap(a) {
      var b = a.value.split("\\");
      document.getElementById("customMapButton").innerHTML = b[b.length - 1];
      a.files && a.files[0] && (b = new FileReader, b.onload = function (a) {
          var b = document.createElement("img");
          b.onload = function (a) {
              a = document.createElement("canvas");
              a.width = b.width;
              a.height = b.height;
              a.getContext("2d").drawImage(b, 0, 0, b.width, b.height);
              customMap = {
                  width: b.width,
                  height: b.height,
                  data: a.getContext("2d").getImageData(0, 0, b.width, b.height).data
              }
          };
          b.src = a.target.result
      }, b.readAsDataURL(a.files[0]))
  }

  function clearCustomMap() {
      customMap = null;
      document.getElementById("customMapButton").innerHTML = "Select Map"
  }
  window.onload = function () {
      mobile ? document.getElementById("loadText").innerHTML = "MOBILE VERSION COMING SOON" : (document.documentElement.style.overflow = "hidden", document.body.scroll = "no", document.getElementById("gameAreaWrapper").style.opacity = 1, drawMenuBackground(), settingsMenu.onclick = function () {
          "200px" == settings.style.maxHeight ? settings.style.maxHeight = "0px" : (settings.style.maxHeight = "200px", howTo.style.maxHeight = "0px")
      }, howToMenu.onclick = function () {
          "200px" == howTo.style.maxHeight ? howTo.style.maxHeight =
              "0px" : (howTo.style.maxHeight = "200px", settings.style.maxHeight = "0px")
      }, leaderboardButton.onclick = function () {
          window.open("./leaderboards.html", "_blank")
      }, $.get("/getIP", function (a) {
          port = a.port;
          socket || (socket = io.connect("http://" + (devTest ? "localhost" : a.ip) + ":" + a.port, {
              reconnection: !0,
              forceNew: !1
          }), setupSocket(socket));
          socket.once("connect", function () {
              var a = getCookie("logKey"),
                  d = getCookie("userName");
              a && "" != a && d && "" != d ? (socket.emit("dbLogin", {
                      lgKey: a,
                      userName: d,
                      userPass: !1
                  }), loginMessage.style.display =
                  "block", loginMessage.innerHTML = "Logging in...") : loadSavedClass();
              btn.onclick = function () {
                  startGame("player")
              };
              playerNameInput.addEventListener("keypress", function (a) {
                  13 === (a.which || a.keyCode) && startGame("player")
              });
              btnMod.onclick = function () {
                  loadModPack(modURL.value, !1)
              };
              registerButton.onclick = function () {
                  socket.emit("dbReg", {
                      userName: userNameInput.value,
                      userEmail: userEmailInput.value,
                      userPass: userPassInput.value
                  });
                  loginUserNm = userNameInput.value;
                  loginUserPs = userPassInput.value;
                  loginMessage.style.display =
                      "block";
                  loginMessage.innerHTML = "Registering..."
              };
              loginButton.onclick = function () {
                  startLogin()
              };
              logoutButton.onclick = function () {
                  loggedInWrapper.style.display = "none";
                  loginWrapper.style.display = "block";
                  loginMessage.innerHTML = "";
                  loggedIn = !1;
                  resetHatList();
                  resetShirtList();
                  d = a = "";
                  setCookie("logKey", "");
                  setCookie("userName", "");
                  socket.emit("dbLogout")
              };
              recoverButton.onclick = function () {
                  socket.emit("dbRecov", {
                      userMail: userEmailInput.value
                  });
                  loginMessage.style.display = "block";
                  loginMessage.innerHTML = "Please Wait..."
              };
              createClanButton.onclick = function () {
                  socket.emit("dbClanCreate", {
                      clanName: clanNameInput.value
                  });
                  clanDBMessage.style.display = "block";
                  clanDBMessage.innerHTML = "Please Wait..."
              };
              joinClanButton.onclick = function () {
                  socket.emit("dbClanJoin", {
                      clanKey: clanKeyInput.value
                  });
                  clanDBMessage.style.display = "block";
                  clanDBMessage.innerHTML = "Please Wait..."
              };
              inviteClanButton.onclick = function () {
                  socket.emit("dbClanInvite", {
                      userName: clanInviteInput.value
                  });
                  clanInvMessage.style.display = "block";
                  clanInvMessage.innerHTML = "Please Wait..."
              };
              kickClanButton.onclick = function () {
                  socket.emit("dbClanKick", {
                      userName: clanInviteInput.value
                  });
                  clanInvMessage.style.display = "block";
                  clanInvMessage.innerHTML = "Please Wait..."
              };
              leaveClanButton.onclick = function () {
                  socket.emit("dbClanLeave")
              };
              setChatClanButton.onclick = function () {
                  socket.emit("dbClanChatURL", {
                      chUrl: clanChatInput.value
                  });
                  clanChtMessage.style.display = "inline-block";
                  clanChtMessage.innerHTML = "Please Wait..."
              };
              createServerButton.onclick = function () {
                  for (var a = document.getElementById("serverPlayers").value,
                          b = document.getElementById("serverHealthMult").value, d = document.getElementById("serverSpeedMult").value, g = document.getElementById("serverPass").value, l = document.getElementById("clanWarEnabled").checked, m = [], k = 0; 9 > k; ++k) document.getElementById("serverMode" + k).checked && m.push(k);
                  socket.emit("cSrv", {
                      srvPlayers: a,
                      srvHealthMult: b,
                      srvSpeedMult: d,
                      srvPass: g,
                      srvMap: customMap,
                      srvClnWr: l,
                      srvModes: m
                  })
              };
              lobbyButton.onclick = function () {
                  if (!changingLobby)
                      if (lobbyInput.value.split("/")[0].trim()) {
                          lobbyMessage.style.display =
                              "block";
                          lobbyMessage.innerHTML = "Please wait...";
                          changingLobby = !0;
                          var b = io.connect("http://" + lobbyInput.value.split("/")[0] + ":" + port, {
                              reconnection: !0,
                              forceNew: !0
                          });
                          b.once("connect", function () {
                              b.emit("create", {
                                  room: lobbyInput.value.split("/")[1],
                                  servPass: lobbyPass.value,
                                  lgKey: a,
                                  userName: d
                              });
                              b.once("lobbyRes", function (a, d) {
                                  lobbyMessage.innerHTML = a.resp || a;
                                  d ? (socket.removeListener("disconnect"), socket.once("disconnect", function () {
                                          socket.close();
                                          changingLobby = !1;
                                          socket = b;
                                          setupSocket(socket)
                                      }), socket.disconnect()) :
                                      (changingLobby = !1, b.disconnect(), b.close())
                              })
                          });
                          b.on("connect_error", function (a) {
                              lobbyMessage.innerHTML = "No Server Found.";
                              changingLobby = !1;
                              b.close()
                          })
                      } else lobbyMessage.style.display = "block", lobbyMessage.innerHTML = "Please enter a valid IP"
              }
          })
      }), hideUI(!0), $(".noRightClick").bind("contextmenu", function (a) {
          return !1
      }), resize(), $("#loadingWrapper").fadeOut(200, function () {}))
  };


  
 /* function openGooglePlay(a) {
      window.open("https://web.archive.org/web/20211107033142/https://play.google.com/store/apps/details?id=tbs.vertix.io", a ? "_blank" : "_self")
  }*/
  var accStatKills = document.getElementById("accStatKills"),
      accStatDeaths = document.getElementById("accStatDeaths"),
      accStatLikes = document.getElementById("accStatLikes"),
      accStatKD = document.getElementById("accStatKD"),
      accStatRank = document.getElementById("accStatRank"),
      accStatView = document.getElementById("accStatView"),
      accStatRankProg = document.getElementById("rankProgress"),
      accStatWorldRank = document.getElementById("accStatWorldRank"),
      clanStats = document.getElementById("clanStats"),
      clanSignUp = document.getElementById("clanSignUp"),
      clanHeader = document.getElementById("clanHeader"),
      leaveClanButton = document.getElementById("leaveClanButton"),
      clanAdminPanel = document.getElementById("clanAdminPanel"),
      profileButton = document.getElementById("profileButton"),
      newUsernameInput = document.getElementById("newUsernameInput"),
      youtubeChannelInput = document.getElementById("youtubeChannelInput"),
      saveAccountData = document.getElementById("saveAccountData"),
      editProfileMessage = document.getElementById("editProfileMessage");

  function updateAccountPage(a) {
      player.account = a;
      accStatRank.innerHTML = "<b>Rank:  </b>" + a.rank;
      accStatRankProg.style.width = a.rankPercent + "%";
      accStatKills.innerHTML = "<b>Kills:  </b>" + a.kills;
      accStatDeaths.innerHTML = "<b>Deaths:  </b>" + a.deaths;
      accStatKD.innerHTML = "<b>KD:  </b>" + a.kd;
      accStatWorldRank.innerHTML = "<b>World Rank:  </b>" + a.worldRank;
      accStatLikes.innerHTML = "<b>Likes:  </b>" + a.likes;
      profileButton.onclick = function () {
          showUserStatPage(player.account.user_name)
      };
      newUsernameInput.value = player.account.user_name;
      youtubeChannelInput.value = player.account.channel;
      saveAccountData.onclick = function () {
          socket.emit("dbEditUser", {
              userName: newUsernameInput.value,
              userChannel: youtubeChannelInput.value
          });
          editProfileMessage.innerHTML = "Please Wait..."
      };
      clanAdminPanel.style.display = "none";
      leaveClanButton.style.display = "none";
      "" != a.clan ? (clanSignUp.style.display = "none", clanStats.style.display = "block", leaveClanButton.style.display = "inline-block", leaveClanButton.innerHTML = "LEAVE CLAN", clanHeader.innerHTML = "[" + a.clan + "] CLAN:",
          "1" == a.clan_owner && (clanAdminPanel.style.display = "block", leaveClanButton.innerHTML = "DELETE CLAN")) : (clanSignUp.style.display = "block", clanStats.style.display = "none", clanHeader.innerHTML = "Clans")
  }
  var clanStatRank = document.getElementById("clanStatRank"),
      clanStatFounder = document.getElementById("clanStatFounder"),
      clanStatMembers = document.getElementById("clanStatMembers"),
      clanStatKD = document.getElementById("clanStatKD");

  function updateClanPage(a) {
      clanStatRank.innerHTML = "<b>Rank:  </b>" + a.level;
      clanStatKD.innerHTML = "<b>Avg KD:  </b>" + a.kd;
      clanStatFounder.innerHTML = "<b>Founder:  </b>" + a.founder;
      clanStatMembers.innerHTML = "<b>Roster:</b>" + a.members;
      a = a.chatURL;
      "" != a && (a.match(/^https?:\/\//i) || (a = "http://" + a), clanChatLink.innerHTML = "<a target='_blank' href='" + a + "'>Clan Chat</a>")
  }

  function showUserStatPage(a) {
      window.open("/profile.html?" + a, "_blank")
  }
  var screenWidth = window.innerWidth,
      screenHeight = window.innerHeight,
      gameWidth = 0,
      gameHeight = 0,
      mouseX = 0,
      mouseY = 0,
      maxScreenWidth = 1920,
      originalScreenWidth = maxScreenWidth,
      maxScreenHeight = 1080,
      originalScreenHeight = maxScreenHeight,
      viewMult = 1,
      uiScale = 1;
  calculateUIScale();
  var gameStart = !1,
      gameOver = !1,
      gameOverFade = !1,
      disconnected = !1,
      kicked = !1,
      killTxt = "",
      continuity = !1,
      startPingTime = 0,
      textSizeMult = .55,
      bigTextSize = maxScreenHeight / 7.7 * textSizeMult,
      medTextSize = .85 * bigTextSize,
      textGap = 1.2 * bigTextSize,
      bigTextY = maxScreenHeight / 4.3,
      startX = 0,
      startY = 0,
      gameMode = null,
      playerConfig = {
          border: 6,
          textColor: "#efefef",
          textBorder: "#3a3a3a",
          textBorderSize: 3,
          defaultSize: 30
      },
      player = {
          firstReceive: !0,
          dead: !0,
          deltaX: 0,
          deltaY: 0
      },
      target = {
          f: 0,
          d: 0,
          dOffset: 0
      },
      gameObjects = [],
      bullets = [],
      gameMap = null,
      mapTileScale = 0,
      leaderboard = [],
      keys = {
          u: 0,
          d: 0,
          l: 0,
          r: 0,
          lm: 0,
          s: 0,
          rl: 0
      },
      mathABS = Math.abs,
      mathRound = Math.round,
      mathFloor = Math.floor,
      mathSQRT = Math.sqrt,
      mathPOW = Math.pow,
      mathMIN = Math.min,
      mathCOS = Math.cos,
      mathSIN = Math.sin,
      mathPI = Math.PI,
      mathMax = Math.max,
      mathATAN2 = Math.atan2,
      reenviar = !0,
      directionLock = !1,
      directions = [],
      zipFileCloser, c = document.getElementById("cvs");
  c.width = screenWidth;
  c.height = screenHeight;
  c.addEventListener("mousemove", gameInput, !1);
  c.addEventListener("mousedown", mouseDown, !1);
  c.addEventListener("drag", mouseDown, !1);
  c.addEventListener("click", focusGame, !1);
  c.addEventListener("mouseup", mouseUp, !1);
  var lastAngle = 0,
      lastDist = 0,
      targetChanged = !0;

  function focusGame(a) {
      c.focus()
  }

  function gameInput(a) {
      a.preventDefault();
      a.stopPropagation();
      var b = 0;
      void 0 != getCurrentWeapon(player) && (b = getCurrentWeapon(player).yOffset);
      mouseX = a.clientX;
      mouseY = a.clientY;
      lastAngle = target.f;
      lastDist = target.d;
      target.d = mathSQRT(mathPOW(mouseY - (screenHeight / 2 - b / 2), 2) + mathPOW(mouseX - screenWidth / 2, 2));
      target.d *= mathMIN(maxScreenWidth / screenWidth, maxScreenHeight / screenHeight);
      target.f = mathATAN2(screenHeight / 2 - b / 2 - mouseY, screenWidth / 2 - mouseX);
      target.f = target.f.round(2);
      target.d = target.d.round(2);
      target.dOffset =
          (target.d / 4).round(1);
      if (lastAngle != target.f || lastDist != target.d) targetChanged = !0;
      lastTarget = target.f
  }

  function mouseDown(a) {
      a.preventDefault();
      a.stopPropagation();
      keys.lm = 1
  }

  function mouseUp(a) {
      a.preventDefault();
      a.stopPropagation();
      keys.lm = 0
  }
  c.addEventListener ? (c.addEventListener("mousewheel", gameScroll, !1), c.addEventListener("DOMMouseScroll", gameScroll, !1)) : c.attachEvent("onmousewheel", gameScroll);
  var userScroll = 0;

  function gameScroll(a) {
      a = window.event || a;
      a.preventDefault();
      a.stopPropagation();
      userScroll = -1 * Math.max(-1, Math.min(1, a.wheelDelta || -a.detail))
  }
  var keyMap = [],
      showingScoreBoard = !1,
      keyToChange = null,
      keyChangeElement = null,
      keyCodeMap = {
          8: "backspace",
          9: "tab",
          13: "enter",
          16: "shift",
          17: "ctrl",
          18: "alt",
          19: "pausebreak",
          20: "capslock",
          27: "escape",
          32: "space",
          33: "pageup",
          34: "pagedown",
          35: "end",
          36: "home",
          37: "left",
          38: "up",
          39: "right",
          40: "down",
          43: "+",
          44: "printscreen",
          45: "insert",
          46: "delete",
          112: "f1",
          113: "f2",
          114: "f3",
          115: "f4",
          116: "f5",
          117: "f6",
          118: "f7",
          119: "f8",
          120: "f9",
          121: "f10",
          122: "f11",
          123: "f12",
          144: "numlock",
          145: "scrolllock"
      },
      keysList = null;

  function inputReset(a) {
      keysList = {
          upKey: 87,
          downKey: 83,
          leftKey: 65,
          rightKey: 68,
          reloadKey: 82,
          jumpKey: 32,
          sprayKey: 70,
          leaderboardKey: 16,
          chatToggleKey: 13,
          incWeapKey: 69,
          decWeapKey: 81
      };
      updateKeysUI();
      a && setCookie("customControls", JSON.stringify(keysList))
  }
  inputReset(!1);
  var previousKeyElementContent = null;

  function inputChange(a, b) {
      null != keyToChange && null != keyChangeElement && (keyChangeElement.innerHTML = previousKeyElementContent);
      previousKeyElementContent = a.innerHTML;
      a.innerHTML = "Press any Key";
      keyChangeElement = a;
      keyToChange = b
  }

  function getKeyName(a) {
      var b;
      b = keyCodeMap[a];
      void 0 != b && b.trim() || (b = String.fromCharCode(a));
      return b = b.charAt(0).toUpperCase() + b.slice(1)
  }

  function saveKeysToCookie() {
      setCookie("customControls", JSON.stringify(keysList))
  }
  if ("" != getCookie("customControls")) {
      try {
          keysList = JSON.parse(getCookie("customControls"))
      } catch (a) {}
      void 0 != keysList && updateKeysUI()
  }

  function updateKeysUI() {
      document.getElementById("upKeyCh").innerHTML = getKeyName(keysList.upKey);
      document.getElementById("downKeyCh").innerHTML = getKeyName(keysList.downKey);
      document.getElementById("leftKeyCh").innerHTML = getKeyName(keysList.leftKey);
      document.getElementById("rightKeyCh").innerHTML = getKeyName(keysList.rightKey);
      document.getElementById("reloadKeyCh").innerHTML = getKeyName(keysList.reloadKey);
      document.getElementById("jumpKeyCh").innerHTML = getKeyName(keysList.jumpKey);
      document.getElementById("sprayKeyCh").innerHTML =
          getKeyName(keysList.sprayKey);
      document.getElementById("leaderboardKeyCh").innerHTML = getKeyName(keysList.leaderboardKey);
      document.getElementById("chatToggleKeyCh").innerHTML = getKeyName(keysList.chatToggleKey);
      document.getElementById("incWeapKeyCh").innerHTML = getKeyName(keysList.incWeapKey);
      document.getElementById("decWeapKeyCh").innerHTML = getKeyName(keysList.decWeapKey)
  }
  window.addEventListener("keydown", keyDown, !1);

  function keyDown(a) {
      a = a || event;
      if (null != keyToChange) {
          var b = keyCodeMap[a.keyCode];
          void 0 != b && b.trim() || (b = String.fromCharCode(a.keyCode));
          b.trim() ? (keyChangeElement.innerHTML = b.charAt(0).toUpperCase() + b.slice(1), keysList[keyToChange] = a.keyCode) : keyChangeElement.innerHTML = previousKeyElementContent;
          keyChangeElement = keyToChange = null;
          saveKeysToCookie()
      } else c == document.activeElement && (a.preventDefault(), keyMap[a.keyCode] = "keydown" == a.type, 27 == a.keyCode && gameStart && showESCMenu(), keyMap[keysList.upKey] &&
          !keys.u && (keys.u = 1, keys.d = 0, keyMap[keysList.downKey] = !1), keyMap[keysList.downKey] && !keys.d && (keys.d = 1, keys.u = 0, keyMap[keysList.upKey] = !1), keyMap[keysList.leftKey] && !keys.l && (keys.l = 1, keys.r = 0, keyMap[keysList.rightKey] = !1), keyMap[keysList.rightKey] && !keys.r && (keys.r = 1, keys.l = 0, keyMap[keysList.leftKey] = !1), keyMap[keysList.jumpKey] && !keys.s && (keys.s = 1), keyMap[keysList.reloadKey] && !keys.rl && (keys.rl = 1), a.keyCode == keysList.chatToggleKey && document.getElementById("chatInput").focus(), !keyMap[keysList.leaderboardKey] ||
          !gameStart || showingScoreBoard || player.dead || gameOver || (showingScoreBoard = !0, showStatTable(getUsersList(), null, null, !0, !0, !0)))
  }
  c.addEventListener("keyup", keyUp, !1);

  function keyUp(a) {
      a = a || event;
      a.preventDefault();
      keyMap[a.keyCode] = "keydown" == a.type;
      a.keyCode == keysList.upKey && (keys.u = 0);
      a.keyCode == keysList.downKey && (keys.d = 0);
      a.keyCode == keysList.leftKey && (keys.l = 0);
      a.keyCode == keysList.rightKey && (keys.r = 0);
      a.keyCode == keysList.jumpKey && (keys.s = 0);
      a.keyCode == keysList.reloadKey && (keys.rl = 0);
      a.keyCode == keysList.incWeapKey && playerSwapWeapon(findUserByIndex(player.index), 1);
      a.keyCode == keysList.decWeapKey && playerSwapWeapon(findUserByIndex(player.index), -1);
      a.keyCode ==
          keysList.sprayKey && sendSpray();
      a.keyCode != keysList.leaderboardKey || !showingScoreBoard || player.dead || gameOver || gameOver || hideStatTable()
  }

  function ChatManager() {
      this.commands = {};
      var a = document.getElementById("chatInput");
      a.addEventListener("keypress", this.sendChat.bind(this));
      a.addEventListener("keyup", function (b) {
          a = document.getElementById("chatInput");
          b = b.which || b.keyCode;
          27 === b && (a.value = "", c.focus())
      })
  }
  var chatTypeIndex = 0,
      chatTypes = ["ALL", "TEAM"],
      currentChatType = chatTypes[0];
  ChatManager.prototype.sendChat = function (a) {
      var b = document.getElementById("chatInput");
      a = a.which || a.keyCode;
      13 === a && (a = b.value.replace(/(<([^>]+)>)/ig, ""), "" !== a && (socket.emit("cht", a.substring(0, 50), currentChatType), this.addChatLine(player.name, ("TEAM" == currentChatType ? "(TEAM) " : "") + a, !0, player.team), b.value = "", c.focus()))
  };

  function toggleTeamChat() {
      chatTypeIndex++;
      chatTypeIndex >= chatTypes.length && (chatTypeIndex = 0);
      currentChatType = chatTypes[chatTypeIndex];
      document.getElementById("chatType").innerHTML = currentChatType;
      c.focus()
  }
  var profanityList = "cunt whore shit fuck faggot nigger nigga dick vagina minge cock rape cum sex tits gay dumb penis clit pussy meatcurtain jizz prune douche wanker jerk salope pute chien enculé negro bite chatte merde putain youpin bougnoule".split(" "),
      tmpString = "";

  function checkProfanityString(a) {
      if (showProfanity)
          for (var b = 0; b < profanityList.length; ++b)
              if (-1 < a.indexOf(profanityList[b])) {
                  tmpString = "";
                  for (var d = 0; d < profanityList[b].length; ++d) tmpString += "*";
                  a = a.replace(new RegExp(profanityList[b], "g"), tmpString)
              } return a
  }
  var chatLineCounter = 0;
  ChatManager.prototype.addChatLine = function (a, b, d, e) {
      if (!mobile) {
          b = checkProfanityString(b);
          var f = document.createElement("li"),
              h = "me";
          d || "system" == e || "notif" == e ? "system" == e ? h = "system" : "notif" == e && (h = "notif") : h = player.team == e ? "blue" : "red";
          chatLineCounter++;
          f.className = h;
          e = !1;
          "system" == h || "notif" == h ? f.innerHTML = "<span>" + b + "</span>" : (e = !0, f.innerHTML = "<span>" + (d ? "YOU" : a) + ': </span><label id="chatLine' + chatLineCounter + '"></label>');
          this.appendMessage(f);
          e && ("innerText" in document.createElement("span") ?
              document.getElementById("chatLine" + chatLineCounter).innerText = b : document.getElementById("chatLine" + chatLineCounter).textContext = b)
      }
  };
  ChatManager.prototype.appendMessage = function (a) {
      if (!mobile) {
          for (var b = document.getElementById("chatbox"), d = document.getElementById("chatList"); 260 < b.clientHeight;) d.removeChild(d.childNodes[0]);
          d.appendChild(a)
      }
  };
  var chat = new ChatManager,
      tmpChatUser = null;

  function messageFromServer(a) {
      try {
          tmpChatUser = findUserByIndex(a[0]), null != tmpChatUser ? chat.addChatLine(tmpChatUser.name, a[1], tmpChatUser.index == player.index, tmpChatUser.team) : -1 == a[0] ? chat.addChatLine("", a[1], !1, "system") : chat.addChatLine("", a[1], !1, "notif")
      } catch (b) {
          console.log(b)
      }
  }
  var context = c.getContext("2d"),
      osCanvas = document.createElement("canvas"),
      graph = context,
      mapCanvas = document.getElementById("mapc"),
      mapContext = mapCanvas.getContext("2d");
  mapCanvas.width = 200;
  mapCanvas.height = 200;
  mapContext.imageSmoothingEnabled = !1;
  mapContext.webkitImageSmoothingEnabled = !1;
  mapContext.mozImageSmoothingEnabled = !1;

  function setCookie(a, b) {
      "undefined" !== typeof Storage && localStorage.setItem(a, b)
  }

  function getCookie(a) {
      return "undefined" !== typeof Storage && (a = localStorage.getItem(a), null != a) ? a : ""
  }
  "false" != getCookie("showNames") && (document.getElementById("showNames").checked || document.getElementById("showNames").click());
  var showNames = document.getElementById("showNames").checked;

  function settingShowNames(a) {
      showNames = a.checked;
      setCookie("showNames", showNames ? "true" : "false")
  }
  "false" != getCookie("showParticles") && (document.getElementById("showParticles").checked || document.getElementById("showParticles").click());
  var showParticles = document.getElementById("showParticles").checked;

  function settingShowParticles(a) {
      showParticles = a.checked;
      setCookie("showParticles", showParticles ? "true" : "false")
  }
  "true" == getCookie("showTrippy") ? document.getElementById("showTrippy").checked || document.getElementById("showTrippy").click() : document.getElementById("showTrippy").checked && document.getElementById("showTrippy").click();
  var showTrippy = document.getElementById("showTrippy").checked;

  function settingShowTrippy(a) {
      showTrippy = a.checked;
      setCookie("showTrippy", showTrippy ? "true" : "false")
  }
  "false" != getCookie("showSprays") && (document.getElementById("showSprays").checked || document.getElementById("showSprays").click());
  var showSprays = document.getElementById("showSprays").checked;

  function settingShowSprays(a) {
      showSprays = a.checked;
      setCookie("showSprays", showSprays ? "true" : "false")
  }
  "false" != getCookie("showProfanity") && document.getElementById("showProfanity").checked && document.getElementById("showProfanity").click();
  var showProfanity = document.getElementById("showProfanity").checked;

  function settingProfanity(a) {
      showProfanity = a.checked;
      setCookie("showProfanity", showProfanity ? "true" : "false")
  }
  "false" != getCookie("showFade") && (document.getElementById("showFade").checked || document.getElementById("showFade").click());
  var showUIFade = document.getElementById("showFade").checked;

  function settingShowFade(a) {
      showUIFade = a.checked;
      setCookie("showFade", showUIFade ? "true" : "false")
  }
  "false" != getCookie("showShadows") && (document.getElementById("showShadows").checked || document.getElementById("showShadows").click());
  var showShadows = document.getElementById("showShadows").checked;

  function settingShowShadows(a) {
      showShadows = a.checked;
      setCookie("showShadows", showShadows ? "true" : "false")
  }
  "false" != getCookie("showGlows") && (document.getElementById("showGlows").checked || document.getElementById("showGlows").click());
  var showGlows = document.getElementById("showGlows").checked;

  function settingShowGlows(a) {
      showGlows = a.checked;
      setCookie("showGlows", showGlows ? "true" : "false")
  }
  "false" != getCookie("showBTrails") && (document.getElementById("showBTrails").checked || document.getElementById("showBTrails").click());
  var showBTrails = document.getElementById("showBTrails").checked;

  function settingShowBTrails(a) {
      showBTrails = a.checked;
      setCookie("showBTrails", showBTrails ? "true" : "false")
  }
  "false" != getCookie("showChat") && (document.getElementById("showChat").checked || document.getElementById("showChat").click());
  var showChat = document.getElementById("showChat").checked;

  function settingShowChat(a) {
      showChat = a.checked;
      showChat ? gameStart && (document.getElementById("chatbox").style.display = "block") : document.getElementById("chatbox").style.display = "none";
      setCookie("showChat", showChat ? "true" : "false")
  }
  "false" != getCookie("hideUI") && (document.getElementById("hideUI").checked || document.getElementById("hideUI").click());
  var showUIALL = document.getElementById("hideUI").checked;

  function settingHideUI(a) {
      showUIALL = a.checked;
      setCookie("hideUI", showUIALL ? "true" : "false")
  }
  "false" != getCookie("showPINGFPS") && (document.getElementById("showPingFps").checked || document.getElementById("showPingFps").click());
  var showPINGFPS = document.getElementById("showPingFps").checked;

  function settingShowPingFps(a) {
      showPINGFPS = a.checked;
      showPINGFPS || (document.getElementById("conStatContainer").style.display = "none");
      setCookie("showPINGFPS", showPINGFPS ? "true" : "false")
  }
  "false" != getCookie("showLeader") && (document.getElementById("showLeader").checked || document.getElementById("showLeader").click());
  var showLeader = document.getElementById("showLeader").checked;

  function settingShowLeader(a) {
      showLeader = a.checked;
      showLeader ? gameStart && (document.getElementById("status").style.display = "block") : document.getElementById("status").style.display = "none";
      setCookie("showLeader", showLeader ? "true" : "false")
  }
  "true" == getCookie("selectChat") && (document.getElementById("selectChat").checked || document.getElementById("selectChat").click());
  var selectChat = document.getElementById("selectChat").checked;
  settingSelectChat(document.getElementById("selectChat"));

  function settingSelectChat(a) {
      selectChat = a.checked;
      setCookie("selectChat", selectChat ? "true" : "false");
      selectChat ? document.getElementById("chatList").style.pointerEvents = "auto" : document.getElementById("chatList").style.pointerEvents = "none"
  }
  var targetFPS = 30;
  if ("" != getCookie("targetFPS")) {
      targetFPS = getCookie("targetFPS");
      try {
          targetFPS *= 1
      } catch (a) {
          targetFPS = 30
      }
      var fpsSelect = document.getElementById("fpsSelect");
      fpsSelect.value = targetFPS
  }

  function pickedFps(a) {
      targetFPS = a.options[a.selectedIndex].value;
      try {
          targetFPS *= 1
      } catch (b) {
          targetFPS = 30
      }
      setCookie("targetFPS", targetFPS)
  }

  function changeMenuTab(a, b) {
      var d, e, f;
      e = document.getElementsByClassName("tabcontent");
      for (d = 0; d < e.length; d++) e[d].style.display = "none";
      f = document.getElementsByClassName("tablinks");
      for (d = 0; d < e.length; d++) f[d].className = f[d].className.replace(" active", "");
      document.getElementById(b).style.display = "block";
      a.currentTarget.className += " active"
  }

  function kickPlayer(a) {
      disconnected || (hideStatTable(), hideUI(!0), hideMenuUI(), document.getElementById("startMenuWrapper").style.display = "none", gameOver = disconnected = !0, void 0 == reason && (reason = a), kicked = !0, socket.close(), updateGameLoop(), stopAllSounds())
  }
  var classSelector = document.getElementById("classSelector"),
      spraySelector = document.getElementById("spraySelector"),
      hatSelector = document.getElementById("hatSelector"),
      lobbySelector = document.getElementById("lobbySelector"),
      camoSelector = document.getElementById("camoSelector"),
      shirtSelector = document.getElementById("shirtSelector"),
      lobbyCSelector = document.getElementById("lobbyCSelector"),
      charSelectorCont = document.getElementById("charSelectorCont"),
      lobbySelectorCont = document.getElementById("lobbySelectorCont");

  function showLobbySelector() {
      charSelectorCont.style.display = "none";
      lobbySelectorCont.style.display = "none";
      classSelector.style.display = "none";
      lobbyCSelector.style.display = "none";
      camoSelector.style.display = "none";
      shirtSelector.style.display = "none";
      lobbySelector.style.display = "block"
  }

  function hideLobbySelector() {
      charSelectorCont.style.display = "block";
      lobbySelectorCont.style.display = "block";
      lobbySelector.style.display = "none"
  }

  function showLobbyCSelector() {
      charSelectorCont.style.display = "none";
      lobbySelectorCont.style.display = "none";
      classSelector.style.display = "none";
      lobbySelector.style.display = "none";
      camoSelector.style.display = "none";
      shirtSelector.style.display = "none";
      lobbyCSelector.style.display = "block"
  }

  function hideLobbyCSelector() {
      charSelectorCont.style.display = "block";
      lobbySelectorCont.style.display = "block";
      lobbyCSelector.style.display = "none"
  }
  var timeOutCheck = null,
      tmpPingTimer = null,
      pingText = document.getElementById("pingText"),
      fpsText = document.getElementById("fpsText"),
      pingStart = 0;

  function receivePing() {
      var a = Date.now() - pingStart;
      pingText.innerHTML = "PING " + a
  }
  var pingInterval = null;

  function setupSocket(a) {
      a.on("pong1", receivePing);
      null != pingInterval && clearInterval(pingInterval);
      pingInterval = setInterval(function () {
          pingStart = Date.now();
          a.emit("ping1")
      }, 2E3);
      a.on("yourRoom", function (a, d) {
          room = a;
          serverKeyTxt.innerHTML = d
      });
      a.on("connect_failed", function () {
          kickPlayer("Connection failed. Please check your internet connection.")
      });
      a.on("disconnect", function (a) {
          kickPlayer("Disconnected. Your connection timed out.");
          console.log(a)
      });
      a.on("error", function (a) {
          console.log("PLEASE NOTIFY THE DEVELOPER OF THE FOLLOWING ERROR");
          console.log("ERROR: " + a)
      });
      a.on("welcome", function (b, d) {
          player.id = b.id;
          player.room = b.room;
          room = player.room;
          player.name = playerName;
          player.classIndex = playerClassIndex;
          b.name = player.name;
          b.classIndex = playerClassIndex;
          a.emit("gotit", b, d, Date.now(), !1);
          player.dead = !0;
          d && (deactiveAllAnimTexts(), gameStart = !1, hideUI(!1), document.getElementById("startMenuWrapper").style.display = "block");
          gameOver && (document.getElementById("gameStatWrapper").style.display = "none");
          gameOverFade = gameOver = !1;
          targetChanged = !0;
          mobile &&
              (hideMenuUI(), hideUI(!0), document.getElementById("startMenuWrapper").style.display = "none");
          resize()
      });
      a.on("cSrvRes", function (a, d) {
          d ? (serverKeyTxt.innerHTML = a, serverCreateMessage.innerHTML = "Success. Created server with IP: " + a) : serverCreateMessage.innerHTML = a
      });
      a.on("regRes", function (a, d) {
          d || (loginMessage.style.display = "block");
          loginMessage.innerHTML = a
      });
      a.on("logRes", function (a, d) {
          if (d) {
              loginMessage.style.display = "none";
              loginMessage.innerHTML = "";
              loginWrapper.style.display = "none";
              loggedInWrapper.style.display =
                  "block";
              document.getElementById("playerNameInput").value = a.text;
              tmpLogKey = a.logKey;
              tmpUserName = a.text;
              setCookie("logKey", a.logKey);
              setCookie("userName", a.text);
              loggedIn = !0;
              player.loggedIn = !0;
              var b = findUserByIndex(player.index);
              b && (b.loggedIn = !0)
          } else loginMessage.style.display = "block", loginMessage.innerHTML = a;
          loadSavedClass()
      });
      a.on("recovRes", function (b, d) {
          loginMessage.style.display = "block";
          loginMessage.innerHTML = b;
          if (d) {
              document.getElementById("recoverForm").style.display = "block";
              var e = document.getElementById("chngPassKey"),
                  f = document.getElementById("chngPassPass");
              document.getElementById("chngPassButton").onclick = function () {
                  loginMessage.style.display = "block";
                  loginMessage.innerHTML = "Please Wait...";
                  a.emit("dbCngPass", {
                      passKey: e.value,
                      newPass: f.value
                  });
                  a.on("cngPassRes", function (a, b) {
                      loginMessage.style.display = "block";
                      loginMessage.innerHTML = a;
                      b && (document.getElementById("recoverForm").style.display = "none")
                  })
              }
          }
      });
      a.on("dbClanCreateR", function (a, d) {
          d ? (clanSignUp.style.display = "none", clanStats.style.display = "block", clanHeader.innerHTML =
              "[" + a + "] Clan:", clanAdminPanel.style.display = "block", leaveClanButton.style.display = "inline-block", leaveClanButton.innerHTML = "DELETE CLAN") : (clanDBMessage.style.display = "block", clanDBMessage.innerHTML = a)
      });
      a.on("dbClanJoinR", function (a, d) {
          if (d) {
              clanSignUp.style.display = "none";
              clanStats.style.display = "block";
              clanHeader.innerHTML = "[" + a + "] Clan:";
              player.account.clan = a;
              var b = findUserByIndex(player.index);
              b && (b.account.clan = a);
              leaveClanButton.style.display = "inline-block";
              leaveClanButton.innerHTML = "Leave Clan"
          } else clanDBMessage.style.display =
              "block", clanDBMessage.innerHTML = a
      });
      a.on("dbClanInvR", function (a, d) {
          clanInvMessage.style.display = "block";
          clanInvMessage.innerHTML = a
      });
      a.on("dbKickInvR", function (a, d) {
          clanInvMessage.style.display = "block";
          clanInvMessage.innerHTML = a
      });
      a.on("dbClanLevR", function (a, d) {
          d && (clanSignUp.style.display = "block", clanStats.style.display = "none", clanHeader.innerHTML = "Clans", clanDBMessage.style.display = "block", clanDBMessage.innerHTML = a, leaveClanButton.style.display = "none")
      });
      a.on("dbChatR", function (a, d) {
          clanChtMessage.style.display =
              "inline-block";
          clanChtMessage.innerHTML = a.text;
          d && (a.newURL.match(/^https?:\/\//i) || (a.newURL = "http://" + a.newURL), clanChatLink.innerHTML = "<a target='_blank' href='" + a.newURL + "'>Clan Chat</a>")
      });
      a.on("dbChangeUserR", function (a, d) {
          d ? (setCookie("userName", a), player.account.user_name = a, editProfileMessage.innerHTML = "Success. Account Updated.") : editProfileMessage.innerHTML = a
      });
      a.on("dbClanStats", function (a) {
          updateClanPage(a)
      });
      a.on("updAccStat", function (a) {
          updateAccountPage(a)
      });
      a.on("gameSetup", function (a,
          d, e) {
          a = JSON.parse(a);
          if (d) {
              gameMap = a.mapData;
              gameMap.tiles = [];
              gameWidth = gameMap.width;
              gameHeight = gameMap.height;
              mapTileScale = a.tileScale;
              gameObjects = a.usersInRoom;
              for (d = 0; d < gameObjects.length; ++d) gameObjects[d].type = "player";
              gameMode = gameMap.gameMode;
              "blue" == a.you.team ? document.getElementById("gameModeText").innerHTML = gameMode.desc2 : document.getElementById("gameModeText").innerHTML = gameMode.desc1;
              currentLikeButton = "";
              var b = null;
              for (d = 0; d < gameMap.clutter.length; ++d) b = gameMap.clutter[d], b.type = "clutter",
                  gameObjects.push(b);
              setupMap(gameMap);
              cachedMiniMap = null;
              deactivateSprays();
              for (d = 0; 100 > d; ++d) bullets.push(new Projectile)
          }
          e && (gameStart = !0, showUI(), document.getElementById("cvs").focus());
          keys.lm = 0;
          maxScreenHeight = a.maxScreenHeight * a.viewMult;
          maxScreenWidth = a.maxScreenWidth * a.viewMult;
          viewMult = a.viewMult;
          a.you.type = "player";
          player = a.you;
          e = findUserByIndex(a.you.index);
          null != e ? gameObjects[gameObjects.indexOf(e)] = a.you : gameObjects.push(a.you);
          updateWeaponUI(player, !0);
          inMainMenu && ($("#loadingWrapper").fadeOut(0,
              function () {}), inMainMenu = !1);
          startingGame = !1;
          resize()
      });
      a.on("lb", updateLeaderboard);
      a.on("ts", updateTeamScores);
      a.on("rsd", receiveServerData);
      a.on("upd", updateUserValue);
      a.on("vt", updateVoteStats);
      a.on("add", addUser);
      a.on("updHt", updateHatList);
      a.on("updShrt", updateShirtList);
      a.on("updCmo", updateCamosList);
      a.on("updSprs", updateSpraysList);
      a.on("crtSpr", createSpray);
      a.on("rem", removeUser);
      a.on("cht", messageFromServer);
      a.on("kick", function (a) {
          kickPlayer(a)
      });
      a.on("1", function (a) {
          var b = findUserByIndex(a.gID),
              e = mathABS(a.amount);
          (a.dID != player.index || a.gID == player.index) && 0 >= a.amount && a.gID == player.index && 0 != e && screenShake(e / 2, a.dir);
          null != a.dID && a.dID == player.index && null != b && 0 < e && b.onScreen && (0 > a.amount ? startMovingAnimText(e + "", b.x - b.width / 2, b.y - b.height, "#d95151", e / 10) : startMovingAnimText(e + "", b.x - b.width / 2, b.y - b.height, "#5ed951", e / 10));
          null != a.bi && (e = findServerBullet(a.bi), void 0 != e && e.owner.index != player.index && (b.onScreen && 0 > a.amount && (particleCone(12, b.x, b.y - b.height / 2 - b.jumpY, e.dir + mathPI, mathPI /
              randomInt(5, 7), .5, 16, 0, !0), createLiquid(b.x, b.y, e.dir, 4)), e.active = !1));
          null != b && (b.health = a.h, b.index == player.index && (updatePlayerInfo(b), updateUiStats(b)))
      });
      a.on("2", someoneShot);
      a.on("jum", otherJump);
      a.on("ex", createExplosion);
      a.on("r", function (a) {
          var b = findUserByIndex(player.index);
          null != b && (0 == a && 1 < b.weapons[a].maxAmmo && showNotification("Ammo Full"), b.weapons[a].reloadTime = 0, b.weapons[a].ammo = b.weapons[a].maxAmmo, setCooldownAnimation(a, b.weapons[a].reloadTime, !1), updateUiStats(b))
      });
      a.on("3",
          function (a) {
              var b = findUserByIndex(a.gID),
                  e = findUserByIndex(a.dID);
              b.dead = !0;
              if (a.kB && a.gID != player.index) a.dID == player.index ? startBigAnimText("BOSS SLAIN", a.sS + " POINTS", 2E3, !0, "#ffffff", "#5151d9", !0, 1.25) : showNotification(e.name + " slayed the boss");
              else if (a.dID == player.index && a.gID != player.index) {
                  playSound("kill1", e.x, e.y);
                  var f = "";
                  b.team != e.team ? (a.sS = "+" + a.sS, f = 1 >= a.kd || void 0 == a.kd ? "Enemy Killed" : 2 == a.kd ? "Double Kill" : 3 == a.kd ? "Triple Kill" : 4 == a.kd ? "Multi Kill" : 5 == a.kd ? "Ultra Kill" : 6 == a.kd ? "No Way!" :
                      7 == a.kd ? "Stop!" : "Godlike!") : (f = "Team Kill", a.sS = "no");
                  a.ast && (f = "Kill Assist");
                  startBigAnimText(f, a.sS + " POINTS", 2E3, !0, "#ffffff", "#5151d9", !0, 1.25)
              }
              if (a.gID == player.index) {
                  hideStatTable();
                  gameStart = !1;
                  hideUI(!1);
                  player.dead = !0;
                  try {
                      googletag.pubads().refresh()
                  } catch (h) {}
                  window.setTimeout(function () {
                      gameOver || (document.getElementById("startMenuWrapper").style.display = "block", document.getElementById("linkBox").style.display = "block")
                  }, 1300);
                  playSound("death1", player.x, player.y);
                  startSoundTrack(1)
              }
          });
      a.on("4", function (a, d, e) {
          if (0 == e) null != gameMap && void 0 != a.active && (gameMap.pickups[d].active = a.active);
          else
              for (e = 0; e < gameObjects.length; ++e) "clutter" == gameObjects[e].type && gameObjects[e].indx == d && (void 0 != a.active && (gameObjects[e].active = a.active), void 0 != a.x && (gameObjects[e].x = a.x), void 0 != a.y && (gameObjects[e].y = a.y))
      });
      a.on("tprt", function (a) {
          var b = findUserByIndex(a.indx);
          void 0 != b && (b.x = a.newX, b.y = a.newY, createSmokePuff(b.x, b.y, 5, !1, 1), a.indx == player.index ? (player.x = a.newX, player.y = a.newY, startBigAnimText("ZONE ENTERED",
              "+" + a.scor + " POINTS", 2E3, !0, "#ffffff", "#5151d9", !0, 1.3)) : (createSmokePuff(a.oldX, a.oldY, 5, !1, 1), showNotification(b.name + " scored")))
      });
      a.on("5", function (a) {
          showNotification(a)
      });
      a.on("6", function (a, d, e) {
          player.dead || startBigAnimText(a, d, 2E3, !0, "#ffffff", "#5151d9", !0, e)
      });
      a.on("7", function (a, d, e, f) {
          try {
              gameOver = !0, document.getElementById("startMenuWrapper").style.display = "none", showStatTable(d, e, a, !1, f, !0), startSoundTrack(1)
          } catch (h) {
              console.log(h)
          }
          try {
              googletag.pubads().refresh()
          } catch (h) {}
      });
      a.on("8",
          function (a) {
              document.getElementById("nextGameTimer").innerHTML = a + ": UNTIL NEXT ROUND"
          })
  }

  function likePlayerStat(a) {
      socket.emit("like", a)
  }

  function updateVoteStats(a) {
      document.getElementById("votesText" + a.i).innerHTML = a.n + ": " + a.v
  }

  function showESCMenu() {}
  var buttonCount = 0;

  function showStatTable(a, b, d, e, f, h) {
      buttonCount = 0;
      if (h)
          if (hideUI(!1), e) nextGameTimer.innerHTML = "GAME STATS", document.getElementById("winningTeamText").innerHTML = "", document.getElementById("voteModeContainer").innerHTML = "";
          else if (d = player.team == d || player.id == d, f || (d ? (startBigAnimText("Victory", "Well Played!", 2500, !0, "#5151d9", "#ffffff", !1, 2), document.getElementById("winningTeamText").innerHTML = "VICTORY", document.getElementById("winningTeamText").style.color = "#5151d9") : "" != player.team && (startBigAnimText("Defeat",
              "Bad Luck!", 2500, !0, "#d95151", "#ffffff", !1, 2), document.getElementById("winningTeamText").innerHTML = "DEFEAT", document.getElementById("winningTeamText").style.color = "#d95151")), null != b) {
          document.getElementById("voteModeContainer").innerHTML = "";
          for (var g = 0; g < b.length; ++g) d = document.createElement("button"), d.className = "modeVoteButton", d.setAttribute("id", "votesText" + g), d.innerHTML = b[g].name + ": " + b[g].votes, document.getElementById("voteModeContainer").appendChild(d), d.onclick = function (a, d) {
              return function () {
                  c.focus();
                  socket.emit("modeVote", a.indx);
                  for (var e = 0; e < b.length; ++e) d == e && "modeVoteButton" == document.getElementById("votesText" + e).className ? document.getElementById("votesText" + e).className = "modeVoteButtonA" : document.getElementById("votesText" + e).className = "modeVoteButton"
              }
          }(b[g], g)
      }
      try {
          document.getElementById("gameStatBoard").innerHTML = "";
          addRowToStatTable([{
              text: "NAME",
              className: "headerL",
              color: "#fff"
          }, {
              text: "SCORE",
              className: "headerC",
              color: "#fff"
          }, {
              text: "KILLS",
              className: "headerC",
              color: "#fff"
          }, {
              text: "DEATHS",
              className: "headerC",
              color: "#fff"
          }, {
              text: "DAMAGE",
              className: "headerC",
              color: "#fff"
          }, {
              text: "zmtch" == gameMode.code ? "GOALS" : "HEALING",
              className: "headerC",
              color: "#fff"
          }, {
              text: "REWARD",
              className: "headerC",
              color: "#fff"
          }, {
              text: "",
              className: "headerC",
              color: "#fff"
          }], !0);
          for (g = 0; g < a.length; ++g) "" != a[g].team && addRowToStatTable([{
                  text: a[g].name,
                  className: "contL",
                  canClick: a[g].loggedIn,
                  color: a[g].index == player.index ? "#fff" : a[g].team != player.team ? "#d95151" : "#5151d9",
                  id: null,
                  userInfo: findUserByIndex(a[g].index)
              },
              {
                  text: a[g].score || 0,
                  className: "contC",
                  color: "#fff",
                  id: null
              }, {
                  text: a[g].kills || 0,
                  className: "contC",
                  color: "#fff",
                  id: null
              }, {
                  text: a[g].deaths || 0,
                  className: "contC",
                  color: "#fff",
                  id: null
              }, {
                  text: a[g].totalDamage || 0,
                  className: "contC",
                  color: "#fff",
                  id: null
              }, {
                  text: "zmtch" == gameMode.code ? a[g].totalGoals || 0 : a[g].totalHealing || 0,
                  className: "contC",
                  color: "#fff",
                  id: null
              }, {
                  text: null != a[g].lastItem ? a[g].lastItem.name : "No Reward",
                  className: "rewardText",
                  color: null != a[g].lastItem ? getItemRarityColor(a[g].lastItem.chance) : "#fff",
                  id: null,
                  hoverInfo: a[g].lastItem
              }, {
                  text: a[g].likes || 0,
                  className: "contC",
                  color: "#fff",
                  pos: a[g].index,
                  id: "likeStat" + a[g].index,
                  uID: a[g].id
              }
          ], !1);
          h && (f ? (overlayAlpha = overlayMaxAlpha, animateOverlay = !1, gameOverFade = !0, deactiveAllAnimTexts(), document.getElementById("gameStatWrapper").style.display = "block") : (hideStatTable(), hideUI(!1), animateOverlay = !0, window.setTimeout(function () {
              gameOverFade = !0
          }, 2500), window.setTimeout(function () {
                  document.getElementById("gameStatWrapper").style.display = "block"
              },
              4500)))
      } catch (l) {}
  }

  function hideStatTable() {
      showUI();
      overlayAlpha = 0;
      showingScoreBoard = !1;
      animateOverlay = !0;
      drawOverlay(graph, !1, !0);
      document.getElementById("gameStatWrapper").style.display = "none";
      document.getElementById("linkBox").style.display = "none"
  }

  function addRowToStatTable(a, b) {
      for (var d = document.getElementById("gameStatBoard"), e = document.createElement("tr"), f = 0; f < a.length; ++f) {
          var h = document.createElement("td");
          if (b || f != a.length - 1) {
              l = document.createTextNode(a[f].text);
              h.appendChild(l);
              h.className = a[f].className;
              h.style.color = a[f].color;
              if (void 0 != a[f].hoverInfo) {
                  var g = document.createElement("div");
                  g.className = "hoverTooltip";
                  l = "";
                  l = "hat" == a[f].hoverInfo.type ? "<image class='itemDisplayImage' src='./images/hats/" + a[f].hoverInfo.id + "/d.png'></image><div style='color:" +
                      a[f].color + "; font-size:16px; margin-top:5px;'>" + a[f].hoverInfo.name + "</div><div style='color:#ffd100; font-size:12px; margin-top:0px;'>droprate " + a[f].hoverInfo.chance + "%</div>" + (a[f].hoverInfo.duplicate ? "<div style='font-size:8px; color:#e04141; margin-top:1px;'><i>Duplicate</i></div>" : "<div style='font-size:8px; color:#d8d8d8; margin-top:1px;'><i>wearable</i></div>") + "<div style='font-size:12px; margin-top:5px;'>" + a[f].hoverInfo.desc + "</div>" + ("EatMyApples" == a[f].hoverInfo.creator ? "" : "<div style='font-size:8px; color:#d8d8d8; margin-top:5px;'><i>Artist: " +
                          a[f].hoverInfo.creator + "</i></div>") : "shirt" == a[f].hoverInfo.type ? "<image class='shirtDisplayImage' src='./images/shirts/" + a[f].hoverInfo.id + "/d.png'></image><div style='color:" + a[f].color + "; font-size:16px; margin-top:5px;'>" + a[f].hoverInfo.name + "</div><div style='color:#ffd100; font-size:12px; margin-top:0px;'>droprate " + a[f].hoverInfo.chance + "%</div>" + (a[f].hoverInfo.duplicate ? "<div style='font-size:8px; color:#e04141; margin-top:1px;'><i>Duplicate</i></div>" : "<div style='font-size:8px; color:#d8d8d8; margin-top:1px;'><i>shirt</i></div>") +
                      "<div style='font-size:12px; margin-top:5px;'>" + a[f].hoverInfo.desc + "</div>" : "<image class='camoDisplayImage' src='./images/camos/" + (a[f].hoverInfo.id + 1) + ".png'></image><div style='color:" + a[f].color + "; font-size:16px; margin-top:5px;'>" + a[f].hoverInfo.name + "</div><div style='color:#ffd100; font-size:12px; margin-top:0px;'>droprate " + a[f].hoverInfo.chance + "%</div>" + (a[f].hoverInfo.duplicate ? "<div style='font-size:8px; color:#e04141; margin-top:1px;'><i>Duplicate</i></div>" : "<div style='font-size:8px; color:#d8d8d8; margin-top:1px;'><i>weapon camo</i></div>") +
                      "<div style='font-size:12px; margin-top:5px;'>" + a[f].hoverInfo.weaponName + "</div>";
                  g.innerHTML = l;
                  h.appendChild(g)
              }
              "contL" == h.className && a[f].canClick && (h.userTarget = a[f].text, h.addEventListener("click", function (a) {
                  showUserStatPage(a.target.userTarget)
              }))
          } else {
              var g = document.createElement("button"),
                  l = document.createTextNode(" NICE");
              g.appendChild(l);
              g.setAttribute("type", "button");
              var m = a[f];
              g.tmpCont = m;
              g.onclick = function () {
                  c.focus();
                  likePlayerStat(m.pos);
                  for (var a = 0; a < buttonCount; ++a) document.getElementById("gameStatLikeButton" +
                      a).setAttribute("class", "gameStatLikeButton");
                  currentLikeButton != this.tmpCont.uID ? (currentLikeButton = this.tmpCont.uID, this.setAttribute("class", "gameStatLikeButtonA")) : currentLikeButton = ""
              };
              g.setAttribute("id", "gameStatLikeButton" + buttonCount);
              buttonCount++;
              m.uID == currentLikeButton ? g.setAttribute("class", "gameStatLikeButtonA") : g.setAttribute("class", "gameStatLikeButton");
              g.style.display = m.pos == player.index ? "none" : "block";
              e.appendChild(g);
              l = document.createElement("div");
              l.innerHTML = a[f].text;
              null !=
                  a[f].id && l.setAttribute("id", a[f].id);
              h.appendChild(l);
              h.className = a[f].className;
              h.style.color = a[f].color
          }
          e.appendChild(h)
      }
      d.appendChild(e)
  }

  function addUser(a) {
      a = JSON.parse(a);
      if (a.index != player.index) {
          a.type = "player";
          var b = findUserByIndex(a.index);
          null == b ? gameObjects.push(a) : gameObjects[gameObjects.indexOf(b)] = a
      }
  }

  function removeUser(a) {
      a != player.index && (tmpUser = findUserByIndex(a), null != tmpUser && gameObjects.splice(gameObjects.indexOf(tmpUser), 1))
  }

  function updateUiStats(a) {
      document.getElementById("scoreValue").innerHTML = a.score;
      0 < a.weapons.length && (document.getElementById("ammoValue").innerHTML = getCurrentWeapon(a).ammo);
      document.getElementById("healthValue").innerHTML = a.health;
      10 >= a.health ? document.getElementById("healthValue").style.color = "#e06363" : document.getElementById("healthValue").style.color = "#fff"
  }

  function getItemRarityColor(a) {
      return 1 >= a ? "#ff8000" : 6 >= a ? "#a335ee" : 18 >= a ? "#0070dd" : 45 >= a ? "#1eff00" : "#9d9d9d"
  }

  function updateUserValue(a) {
      var b = !1;
      tmpUser = findUserByIndex(a.i);
      null != tmpUser ? (void 0 != a.s && (tmpUser.score = a.s, b = !0), void 0 != a.sp && (tmpUser.spawnProtection = a.sp), void 0 != a.wi && a.i != player.index && playerEquipWeapon(tmpUser, a.wi), void 0 != a.l && (tmpUser.likes = a.l, b = !0), void 0 != a.dea && (tmpUser.deaths = a.dea, b = !0), void 0 != a.kil && (tmpUser.kills = a.kil, b = !0), void 0 != a.dmg && (tmpUser.totalDamage = a.dmg, b = !0), void 0 != a.hea && (tmpUser.totalHealing = a.hea, b = !0), tmpUser.index == player.index && (updatePlayerInfo(tmpUser),
          updateUiStats(tmpUser)), b && (gameOver ? void 0 != a.l && (a = document.createTextNode(tmpUser.likes), document.getElementById("likeStat" + tmpUser.index).innerHTML = "", document.getElementById("likeStat" + tmpUser.index).appendChild(a)) : showStatTable(getUsersList(), null, null, !0, !0, !1))) : fetchUserWithIndex(a.i)
  }

  function fetchUserWithIndex(a) {
      socket.emit("ftc", a)
  }

  function canPlaceFlag(a, b) {
      return b ? void 0 != a && !a.wall && !a.hardPoint : void 0 != a && !a.hardPoint
  }

  function setupMap(a) {
    a.pickups = [];
      var b = a.genData,
          d = -(2 * mapTileScale),
          e = -(2 * mapTileScale),
          f = 0,
          h = b.height,
          g; 
      a.tilePerCol = h;
      a.width = (b.width - 4) * mapTileScale;
      a.height = (b.height - 4) * mapTileScale;
      a.scoreToWin = a.gameMode.score;
      for (var l = b.data.data || b.data, m = 0; m < b.width; m++)
          for (var k = 0; k < b.height; k++) {
              var p = b.width * k + m << 2,
                  p = l[p] + " " + l[p + 1] + " " + l[p + 2],
                  n = {
                      index: f,
                      scale: mapTileScale,
                      x: 0,
                      y: 0,
                      wall: !1,
                      spriteIndex: 0,
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      topLeft: 0,
                      topRight: 0,
                      bottomLeft: 0,
                      bottomRight: 0,
                      neighbours: 0,
                      hasCollision: !1,
                      hardPoint: !1,
                      objTeam: "e",
                      edgeTile: !1
                  };
              n.x = d + mapTileScale * m;
              n.y = e + mapTileScale * k;
              0 == m && 0 == k && (p = "0 0 0");
              if ("0 0 0" == p) {
                  n.wall = !0;
                  n.hasCollision = !0;
                  g = a.tiles[f - h];
                  void 0 != g && (g.wall && (n.left = 1, n.neighbours += 1), g.right = 1, g.neighbours += 1);
                  g = a.tiles[f - h - 1];
                  void 0 != g && g.wall && (g.spriteIndex = 0);
                  g = a.tiles[f - h - 1];
                  void 0 != g && g.wall && (n.topLeft = 1, g.bottomRight = 1);
                  g = a.tiles[f - h + 1];
                  void 0 != g && (g.topRight = 1, g.wall && (n.bottomLeft = 1));
                  g = a.tiles[f - 1];
                  void 0 != g && (g.wall && (n.top = 1, n.neighbours += 1), g.bottom = 1, g.neighbours += 1);
                  if (0 >=
                      m || 0 >= k || m >= b.width - 1 || k >= b.height - 1) n.left = 1, n.right = 1, n.top = 1, n.bottom = 1, n.neighbours = 4, n.edgeTile = !0;
                  0 == n.spriteIndex && 0 == randomInt(0, 2) && (n.spriteIndex = randomInt(1, 2))
              } else g = randomInt(0, 10), n.spriteIndex = 0, 0 >= g && (n.spriteIndex = 1), n.wall = !1, g = a.tiles[f - h], void 0 != g && g.wall && (n.left = 1, n.neighbours += 1), g = a.tiles[f - 1], void 0 != g && g.wall && (n.top = 1, n.neighbours += 1), g = a.tiles[f - h - 1], void 0 != g && g.wall && (n.topLeft = 1), "0 255 0" == p ? n.spriteIndex = 2 : "255 255 0" == p && ("Hardpoint" == a.gameMode.name || "Zone War" ==
                  a.gameMode.name ? (n.hardPoint = !0, "Zone War" == a.gameMode.name && (n.objTeam = m < b.width / 2 ? "red" : "blue")) : n.spriteIndex = 1);
              a.tiles.push(n);
              f++
          }
      tmpY = tmpShad = null;
      for (b = 0; b < a.tiles.length; ++b) a.tiles[b].edgeTile ? a.tiles[b].hasCollision = !1 : !a.tiles[b].wall && a.tiles[b].hardPoint && (canPlaceFlag(a.tiles[b - h], !0) && canPlaceFlag(a.tiles[b - 1], !1) && gameObjects.push({
          type: "flag",
          team: a.tiles[b].objTeam,
          x: a.tiles[b].x + 40,
          y: a.tiles[b].y + 40,
          w: 70,
          h: 152,
          ai: randomInt(0, 2),
          ac: 0
      }), canPlaceFlag(a.tiles[b + h], !0) && canPlaceFlag(a.tiles[b -
          1], !1) && gameObjects.push({
          type: "flag",
          team: a.tiles[b].objTeam,
          x: a.tiles[b].x + mapTileScale - 30 - 40,
          y: a.tiles[b].y + 40,
          w: 70,
          h: 152,
          ai: randomInt(0, 2),
          ac: 0
      }), canPlaceFlag(a.tiles[b + h], !0) && canPlaceFlag(a.tiles[b + 1], !1) && gameObjects.push({
          type: "flag",
          team: a.tiles[b].objTeam,
          x: a.tiles[b].x + mapTileScale - 30 - 40,
          y: a.tiles[b].y + mapTileScale - 30 - 40,
          w: 70,
          h: 152,
          ai: randomInt(0, 2),
          ac: 0
      }), canPlaceFlag(a.tiles[b - h], !0) && canPlaceFlag(a.tiles[b + 1], !1) && gameObjects.push({
          type: "flag",
          team: a.tiles[b].objTeam,
          x: a.tiles[b].x +
              40,
          y: a.tiles[b].y + mapTileScale - 30 - 40,
          w: 70,
          h: 152,
          ai: randomInt(0, 2),
          ac: 0
      }))
  }
  var tmpNowTime = 0;

  function receiveServerData(a) {
      tmpNowTime = Date.now();
      timeSinceLastUpdate = tmpNowTime - timeOfLastUpdate;
      timeOfLastUpdate = tmpNowTime;
      var b;
      if (!gameOver) {
          for (var d = 0; d < gameObjects.length; ++d) "player" == gameObjects[d].type && (gameObjects[d].onScreen = !1);
          for (d = 0; d < a.length;) {
              b = a[0 + d];
              tmpUser = findUserByIndex(a[1 + d]);
              if (a[1 + d] == player.index && null != tmpUser) 2 < b && (tmpUser.x = a[2 + d]), 3 < b && (tmpUser.y = a[3 + d]), 4 < b && (tmpUser.angle = a[4 + d]), 5 < b && (tmpUser.isn = a[5 + d]), tmpUser.onScreen = !0;
              else if (null != tmpUser) {
                  2 < b && (tmpUser.xSpeed =
                      mathABS(tmpUser.x - a[2 + d]), tmpUser.x = a[2 + d]);
                  3 < b && (tmpUser.ySpeed = mathABS(tmpUser.y - a[3 + d]), tmpUser.y = a[3 + d]);
                  4 < b && (tmpUser.angle = a[4 + d]);
                  if (void 0 != getCurrentWeapon(tmpUser)) {
                      var e = 90 * mathRound(tmpUser.angle % 360 / 90);
                      0 == e || 360 == e ? getCurrentWeapon(tmpUser).front = !0 : 180 == e ? getCurrentWeapon(tmpUser).front = !1 : getCurrentWeapon(tmpUser).front = !0
                  }
                  5 < b && (tmpUser.nameYOffset = a[5 + d]);
                  tmpUser.onScreen = !0
              } else fetchUserWithIndex(a[1 + d]);
              d += b
          }
      }
      for (d = 0; d < gameObjects.length; d++)
          if (gameObjects[d].index == player.index) {
              if (gameObjects[d].dead ||
                  gameOver || 80 < thisInput.length) thisInput.length = 0;
              var f = 0;
              if (!gameObjects[d].dead) {
                  for (; f < thisInput.length;) thisInput[f].isn <= gameObjects[d].isn ? thisInput.splice(f, 1) : (a = thisInput[f].hdt, b = thisInput[f].vdt, e = mathSQRT(thisInput[f].hdt * thisInput[f].hdt + thisInput[f].vdt * thisInput[f].vdt), 0 != e && (a /= e, b /= e), gameObjects[d].oldX = gameObjects[d].x, gameObjects[d].oldY = gameObjects[d].y, gameObjects[d].x += a * gameObjects[d].speed * thisInput[f].delta, gameObjects[d].y += b * gameObjects[d].speed * thisInput[f].delta, wallCol(gameObjects[d]),
                      f++);
                  gameObjects[d].x = mathRound(gameObjects[d].x);
                  gameObjects[d].y = mathRound(gameObjects[d].y);
                  updatePlayerInfo(gameObjects[d])
              }
          }
  }

  function updatePlayerInfo(a) {
      player.x = a.x;
      player.y = a.y;
      player.dead = a.dead;
      player.score < a.score && playSound("score", player.x, player.y);
      player.score = a.score;
      player.health = a.health
  }
  var currentHat = document.getElementById("currentHat"),
      hatList = document.getElementById("hatList"),
      hatHeader = document.getElementById("hatHeader");

  function updateHatList(a, b) {
      var d = "SELECT HAT: (" + b.length + "/" + a + ")";
      hatHeader.innerHTML = d;
      for (var d = "<div class='hatSelectItem' id='hatItem-1' onclick='changeHat(-1);'>Default</div>", e = 0; e < b.length; ++e) d += "<div class='hatSelectItem' id='hatItem" + b[e].id + "' style='color:" + getItemRarityColor(b[e].chance) + ";' onclick='changeHat(" + b[e].id + ");'>" + b[e].name + " x" + (parseInt(b[e].count) + 1) + "<div class='hoverTooltip'><image class='itemDisplayImage' src='./images/hats/" + b[e].id + "/d.png'></image><div style='color:" +
          getItemRarityColor(b[e].chance) + "; font-size:16px; margin-top:5px;'>" + b[e].name + "</div><div style='color:#ffd100; font-size:12px; margin-top:0px;'>droprate " + b[e].chance + "%</div><div style='font-size:8px; color:#d8d8d8; margin-top:1px;'><i>wearable</i></div><div style='font-size:12px; margin-top:5px;'>" + b[e].desc + "</div>" + ("EatMyApples" == b[e].creator ? "" : "<div style='font-size:8px; color:#d8d8d8; margin-top:5px;'><i>Artist: " + b[e].creator + "</i></div>") + "</div></div>";
      hatList.innerHTML = d
  }

  function resetHatList() {
      hatHeader.innerHTML = "SELECT HAT";
      hatList.innerHTML = "<div class='hatSelectItem' id='hatItem-1' onclick='changeHat(-1);'>Default</div>";
      changeHat(-1)
  }

  function showHatselector() {
      charSelectorCont.style.display = "none";
      lobbySelectorCont.style.display = "none";
      camoSelector.style.display = "none";
      shirtSelector.style.display = "none";
      classSelector.style.display = "none";
      lobbySelector.style.display = "none";
      lobbyCSelector.style.display = "none";
      spraySelector.style.display = "none";
      hatSelector.style.display = "block"
  }

  function changeHat(a) {
      void 0 != socket && (socket.emit("cHat", a), setCookie("previousHat", a), currentHat.innerHTML = document.getElementById("hatItem" + a).innerHTML, currentHat.style.color = document.getElementById("hatItem" + a).style.color, charSelectorCont.style.display = "block", lobbySelectorCont.style.display = "block", classSelector.style.display = "none", camoSelector.style.display = "none", shirtSelector.style.display = "none", hatSelector.style.display = "none", lobbySelector.style.display = "none", lobbyCSelector.style.display =
          "none")
  }
  var currentShirt = document.getElementById("currentShirt"),
      shirtList = document.getElementById("shirtList"),
      shirtHeader = document.getElementById("shirtHeader");

  function updateShirtList(a, b) {
      var d = "SELECT SHIRT: (" + b.length + "/" + a + ")";
      shirtHeader.innerHTML = d;
      for (var d = "<div class='hatSelectItem' id='shirtItem-1' onclick='changeShirt(-1);'>Default</div>", e = 0; e < b.length; ++e) d += "<div class='hatSelectItem' id='shirtItem" + b[e].id + "' style='color:" + getItemRarityColor(b[e].chance) + ";' onclick='changeShirt(" + b[e].id + ");'>" + b[e].name + " x" + (parseInt(b[e].count) + 1) + "<div class='hoverTooltip'><image class='shirtDisplayImage' src='./images/shirts/" + b[e].id + "/d.png'></image><div style='color:" +
          getItemRarityColor(b[e].chance) + "; font-size:16px; margin-top:5px;'>" + b[e].name + "</div><div style='color:#ffd100; font-size:12px; margin-top:0px;'>droprate " + b[e].chance + "%</div><div style='font-size:8px; color:#d8d8d8; margin-top:1px;'><i>shirt</i></div><div style='font-size:12px; margin-top:5px;'>" + b[e].desc + "</div></div></div>";
      shirtList.innerHTML = d
  }

  function resetShirtList() {
      shirtHeader.innerHTML = "SELECT SHIRT";
      shirtList.innerHTML = "<div class='hatSelectItem' id='shirtItem-1' onclick='changeShirt(-1);'>Default</div>";
      changeShirt(-1)
  }

  function showShirtselector() {
      charSelectorCont.style.display = "none";
      lobbySelectorCont.style.display = "none";
      camoSelector.style.display = "none";
      classSelector.style.display = "none";
      lobbySelector.style.display = "none";
      lobbyCSelector.style.display = "none";
      spraySelector.style.display = "none";
      hatSelector.style.display = "none";
      shirtSelector.style.display = "block"
  }

  function changeShirt(a) {
      void 0 != socket && (socket.emit("cShirt", a), setCookie("previousShirt", a), currentShirt.innerHTML = document.getElementById("shirtItem" + a).innerHTML, currentShirt.style.color = document.getElementById("shirtItem" + a).style.color, charSelectorCont.style.display = "block", lobbySelectorCont.style.display = "block", classSelector.style.display = "none", camoSelector.style.display = "none", shirtSelector.style.display = "none", hatSelector.style.display = "none", lobbySelector.style.display = "none", lobbyCSelector.style.display =
          "none")
  }
  var currentSpray = document.getElementById("currentSpray"),
      sprayList = document.getElementById("sprayList");

  function updateSpraysList(a) {
      for (var b = "", d = 0; d < a.length; ++d) b += "<div class='hatSelectItem' id='sprayItem" + (d + 1) + "' onclick='changeSpray(" + (d + 1) + "," + a[d].id + ");'>" + a[d].name + "<div id='sprayHoverImage" + (d + 1) + "' class='hoverTooltip' style='width:90px;height:90px;'></div></div>";
      sprayList.innerHTML = b;
      if ("" != getCookie("previousSpray")) {
          previousSpray = getCookie("previousSpray");
          try {
              changeSpray(previousSpray, a[parseInt(previousSpray) - 1].id)
          } catch (e) {
              changeSpray(1, a[1].id)
          }
      } else changeSpray(1, a[1].id)
  }

  function showSprayselector() {
      charSelectorCont.style.display = "none";
      lobbySelectorCont.style.display = "none";
      classSelector.style.display = "none";
      lobbySelector.style.display = "none";
      lobbyCSelector.style.display = "none";
      camoSelector.style.display = "none";
      shirtSelector.style.display = "none";
      hatSelector.style.display = "none";
      spraySelector.style.display = "block"
  }

  function changeSpray(a, b) {
      void 0 != socket && (socket.emit("cSpray", a), setCookie("previousSpray", a), currentSpray.innerHTML = document.getElementById("sprayItem" + a).innerHTML, currentSpray.style.color = document.getElementById("sprayItem" + a).style.color, document.getElementById("sprayHoverImage" + a).innerHTML = "<image class='sprayDisplayImage' src='./images/sprays/" + b + ".png'></image>", charSelectorCont.style.display = "block", lobbySelectorCont.style.display = "block", classSelector.style.display = "none", camoSelector.style.display =
          "none", shirtSelector.style.display = "none", hatSelector.style.display = "none", spraySelector.style.display = "none", lobbySelector.style.display = "none", lobbyCSelector.style.display = "none")
  }

  function findUserByIndex(a) {
      for (var b = 0; b < gameObjects.length; ++b)
          if (gameObjects[b].index === a) return gameObjects[b];
      return null
  }
  var tmpUsers = [];

  function getUsersList() {
      for (var a = tmpUsers.length = 0; a < gameObjects.length; ++a) "player" == gameObjects[a].type && tmpUsers.push(gameObjects[a]);
      tmpUsers.sort(sortUsersByScore);
      return tmpUsers
  }

  function sortUsersByScore(a, b) {
      return b.score == a.score ? a.id < b.id ? -1 : a.id > b.id ? 1 : 0 : a.score > b.score ? -1 : a.score < b.score ? 1 : 0
  }

  function sortUsersByPosition(a, b) {
      return a.y < b.y ? -1 : a.y > b.y ? 1 : 0
  }
  var tmpPlayer = null;

  function updateLeaderboard(a) {
      try {
          for (var b = '<span class="title">LEADERBOARD</span>', d = 1, e = 0; e < a.length; ++e) tmpPlayer = findUserByIndex(a[0 + e]), null != tmpPlayer && (b += "<br />", tmpPlayer.index == player.index ? b += '<span class="me">' + d + ". " + player.name + ("" != player.account.clan ? " [" + player.account.clan + "]" : "") + "</span>" : "" != tmpPlayer.name && (b += '<span class="' + (tmpPlayer.team != player.team ? "red" : "blue") + '">' + d + ". " + tmpPlayer.name + "</span>" + ("" != tmpPlayer.account.clan ? "<span class='me'> [" + tmpPlayer.account.clan +
              "]</span>" : "")), d++);
          document.getElementById("status").innerHTML = b
      } catch (f) {}
  }

  function updateTeamScores(a, b) {
      var d = document.getElementById("redProgress"),
          e = document.getElementById("blueText"),
          f = document.getElementById("blueProgress"),
          h = document.getElementById("redProgCont");
      if (void 0 != gameMode) try {
          gameMode.teams ? (e.innerHTML = "A", h.style.display = "", "red" == player.team ? (d.setAttribute("style", "display:block;width:" + b + "%"), d.style.width = b + "%", f.setAttribute("style", "display:block;width:" + a + "%"), f.style.width = a + "%") : (d.setAttribute("style", "display:block;width:" + a + "%"), d.style.width =
              a + "%", f.setAttribute("style", "display:block;width:" + b + "%"), f.style.width = b + "%")) : (b = mathRound(player.score / a * 100), f.setAttribute("style", "display:block;width:" + b + "%"), f.style.width = b + "%", e.innerHTML = "YOU", h.style.display = "none")
      } catch (g) {
          console.log(g)
      }
  }

  function showUI() {
      showUIALL && (document.getElementById("status").style.display = "block", document.getElementById("statContainer2").style.display = "block", document.getElementById("actionBar").style.display = "block", document.getElementById("statContainer").style.display = "block", document.getElementById("score").style.display = "block", showPINGFPS && (document.getElementById("conStatContainer").style.display = "block"), showLeader || (document.getElementById("status").style.display = "none"));
      showChat && (document.getElementById("chatbox").style.display =
          "block")
  }

  function hideMenuUI() {
      document.getElementById("namesBox").style.display = "none";
      document.getElementById("linkBox").style.display = "none"
  }

  function hideUI(a) {
      document.getElementById("status").style.display = "none";
      document.getElementById("statContainer2").style.display = "none";
      document.getElementById("actionBar").style.display = "none";
      document.getElementById("conStatContainer").style.display = "none";
      document.getElementById("score").style.display = "none";
      document.getElementById("statContainer").style.display = "none";
      a && (document.getElementById("chatbox").style.display = "none")
  }
  $(window).focus(function () {
      void 0 != socket && socket.emit("5", 1);
      tabbed = 0
  });
  $(window).blur(function () {
      void 0 != socket && socket.emit("5", 0);
      tabbed = 1
  });
  var sendData = null,
      fpsUpdateUICounter = 0;

  function updateGameLoop() {
      delta = currentTime - oldTime;
      fpsUpdateUICounter--;
      0 >= fpsUpdateUICounter && (currentFPS = mathRound(1E3 / delta), fpsText.innerHTML = "FPS " + currentFPS, fpsUpdateUICounter = targetFPS);
      oldTime = currentTime;
      horizontalDT = verticalDT = 0;
      count++;
      var a = 0;
      1 == keys.u && (verticalDT = -1, temp = 0);
      1 == keys.d && (verticalDT = 1, temp = 0);
      1 == keys.r && (horizontalDT = 1, temp = 0);
      1 == keys.l ? (horizontalDT = -1, temp = 0) : keyd = 0;
      1 == keys.s && (a = 1, temp = 0);
      var b = horizontalDT,
          d = verticalDT,
          e = mathSQRT(horizontalDT * horizontalDT + verticalDT *
              verticalDT);
      0 != e && (b /= e, d /= e);
      if (clientPrediction)
          for (e = 0; e < gameObjects.length; e++)
              if ("player" == gameObjects[e].type) {
                  if (gameObjects[e].index == player.index) {
                      gameObjects[e].oldX = gameObjects[e].x;
                      gameObjects[e].oldY = gameObjects[e].y;
                      gameObjects[e].dead || gameOver || (gameObjects[e].x += b * gameObjects[e].speed * delta, gameObjects[e].y += d * gameObjects[e].speed * delta);
                      wallCol(gameObjects[e]);
                      gameObjects[e].x = mathRound(gameObjects[e].x);
                      gameObjects[e].y = mathRound(gameObjects[e].y);
                      gameObjects[e].angle = (target.f +
                          2 * mathPI) % (2 * mathPI) * (180 / mathPI) + 90;
                      if (void 0 != getCurrentWeapon(gameObjects[e])) {
                          var f = 90 * mathRound(gameObjects[e].angle % 360 / 90);
                          0 == f || 360 == f ? getCurrentWeapon(gameObjects[e]).front = !0 : 180 == f ? getCurrentWeapon(gameObjects[e]).front = !1 : getCurrentWeapon(gameObjects[e]).front = !0
                      }
                      0 < gameObjects[e].jumpCountdown && (gameObjects[e].jumpCountdown -= delta);
                      1 == keys.s && 0 >= gameObjects[e].jumpCountdown && !gameOver && playerJump(gameObjects[e])
                  }
                  0 != gameObjects[e].jumpY && (gameObjects[e].jumpDelta -= gameObjects[e].gravityStrength *
                      delta, gameObjects[e].jumpY += gameObjects[e].jumpDelta * delta, 0 < gameObjects[e].jumpY ? gameObjects[e].animIndex = 1 : (gameObjects[e].jumpY = 0, gameObjects[e].jumpDelta = 0, gameObjects[e].jumpCountdown = 250), gameObjects[e].jumpY = mathRound(gameObjects[e].jumpY));
                  gameObjects[e].index != player.index || gameOver || (sendData = {
                      hdt: horizontalDT / 2,
                      vdt: verticalDT / 2,
                      ts: currentTime,
                      isn: inputNumber,
                      s: a
                  }, inputNumber++, socket.emit("4", sendData), sendData.delta = delta, thisInput.push(sendData), 0 == userScroll || gameOver || (playerSwapWeapon(gameObjects[e],
                      userScroll), userScroll = 0), 1 != keys.rl || gameOver || playerReload(gameObjects[e], !0), 1 == keys.lm && !gameOver && 0 < player.weapons.length && (keyd = 0, currentTime - getCurrentWeapon(gameObjects[e]).lastShot >= getCurrentWeapon(gameObjects[e]).fireRate && shootBullet(gameObjects[e])));
                  gameOver ? gameObjects[e].animIndex = 0 : (f = mathABS(b) + mathABS(d), gameObjects[e].index != player.index && (f = mathABS(gameObjects[e].xSpeed) + mathABS(gameObjects[e].ySpeed)), 0 < f ? (gameObjects[e].frameCountdown -= delta / 4, 0 >= gameObjects[e].frameCountdown &&
                      (gameObjects[e].animIndex++, 0 == gameObjects[e].jumpY && gameObjects[e].onScreen && !gameObjects[e].dead && stillDustParticle(gameObjects[e].x, gameObjects[e].y, !1), 3 <= gameObjects[e].animIndex ? gameObjects[e].animIndex = 1 : 2 == gameObjects[e].animIndex && 0 >= gameObjects[e].jumpY && playSound("step1", gameObjects[e].x, gameObjects[e].y), gameObjects[e].frameCountdown = 40)) : 0 != gameObjects[e].animIndex && (gameObjects[e].animIndex = 0), 0 < gameObjects[e].jumpY && (gameObjects[e].animIndex = 1))
              } gameObjects.sort(sortUsersByPosition);
      kicked || (gameOver ? (doGame(delta), gameOverFade && showUIFade && drawOverlay(graph, !0, !1)) : player.dead && !inMainMenu ? (doGame(delta), drawOverlay(graph, !0, !1)) : gameStart ? (doGame(delta), drawOverlay(graph, !1, !0), !mobile && targetChanged && (targetChanged = !1, socket.emit("0", target.f))) : kicked || (drawMenuBackground(), drawOverlay(graph, !1, !1)));
      if (disconnected || kicked) drawOverlay(graph, !1, !1), a = kicked ? "" !== reason ? renderShadedAnimText(reason, 48 * viewMult, "#ffffff", 6, "") : renderShadedAnimText("You were kicked", 48 * viewMult,
          "#ffffff", 6, "") : renderShadedAnimText("Disconnected", 48 * viewMult, "#ffffff", 6, ""), void 0 != a && graph.drawImage(a, maxScreenWidth / 2 - a.width / 2, maxScreenHeight / 2 - a.height / 2, a.width, a.height);
      showTrippy && (context.globalAlpha = .25)
  }

  function wallCol(a) {
      if (!a.dead) {
          for (var b = null, d = a.nameYOffset = 0; d < gameMap.tiles.length; ++d) gameMap.tiles[d].wall && gameMap.tiles[d].hasCollision && (b = gameMap.tiles[d], a.x + a.width / 2 >= b.x && a.x - a.width / 2 <= b.x + b.scale && a.y >= b.y && a.y <= b.y + b.scale && (a.oldX <= b.x ? a.x = b.x - a.width / 2 - 2 : a.oldX - a.width / 2 >= b.x + b.scale && (a.x = b.x + b.scale + a.width / 2 + 2), a.oldY <= b.y ? a.y = b.y - 2 : a.oldY >= b.y + b.scale && (a.y = b.y + b.scale + 2)), !b.hardPoint && a.x > b.x && a.x < b.x + b.scale && a.y - a.jumpY - .85 * a.height > b.y - b.scale / 2 && a.y - a.jumpY - .85 * a.height <=
              b.y && (a.nameYOffset = Math.round(a.y - a.jumpY - .85 * a.height - (b.y - b.scale / 2))));
          for (d = 0; d < gameObjects.length; ++d) "clutter" == gameObjects[d].type && gameObjects[d].active && (b = gameObjects[d], b.hc && canSee(b.x - startX, b.y - startY, b.w, b.h) && a.x + a.width / 2 >= b.x && a.x - a.width / 2 <= b.x + b.w && a.y >= b.y - b.h * b.tp && a.y <= b.y && (a.oldX + player.width / 2 <= b.x ? a.x = b.x - a.width / 2 - 1 : a.oldX - a.width / 2 >= b.x + b.w && (a.x = b.x + b.w + a.width / 2 + 1), a.oldY >= b.y ? a.y = b.y + 1 : a.oldY <= b.y - b.h * b.tp && (a.y = b.y - b.h * b.tp - 1)));
          delete b
      }
  }

  function otherJump(a) {
      var b = findUserByIndex(a);
      void 0 != b && null != b && player.index != a && playerJump(b)
  }

  function playerJump(a) {
      0 >= a.jumpY && (playSound("jump1", a.x, a.y), a.jumpDelta = a.jumpStrength, a.jumpY = a.jumpDelta)
  }
  var overlayMaxAlpha = .5,
      overlayAlpha = overlayMaxAlpha,
      overlayFadeUp = .01,
      overlayFadeDown = .04,
      animateOverlay = !0;

  function drawOverlay(a, b, d) {
      animateOverlay && (b ? (overlayAlpha += overlayFadeUp, overlayAlpha >= overlayMaxAlpha && (overlayAlpha = overlayMaxAlpha)) : d ? (overlayAlpha -= overlayFadeDown, 0 >= overlayAlpha && (overlayAlpha = 0)) : overlayAlpha = overlayMaxAlpha);
      0 < overlayAlpha && (a.fillStyle = "#2e3031", a.globalAlpha = overlayAlpha, a.fillRect(0, 0, maxScreenWidth, maxScreenHeight), a.globalAlpha = 1)
  }
  var drawMiniMapFPS = 4,
      drawMiniMapCounter = 0;

  function doGame(a) {
      updateScreenShake(a);
      null != target && (startX = player.x - maxScreenWidth / 2 + -screenSkX + target.dOffset * mathCOS(target.f + mathPI), startY = player.y - 20 - maxScreenHeight / 2 + -screenSkY + target.dOffset * mathSIN(target.f + mathPI), 1 < fillCounter && socket && socket.emit("kil"));
      drawBackground();
      drawMap(0);
      drawMap(1);
      drawSprays();
      updateParticles(a, 0);
      drawGameObjects(a);
      updateBullets(a);
      updateParticles(a, 1);
      drawMap(2);
      drawPlayerNames();
      drawEdgeShader();
      drawGameLights(a);
      updateAnimTexts(a);
      updateNotifications(a);
      drawUI();
      drawMiniMapCounter--;
      0 >= drawMiniMapCounter && gameStart && (fillCounter = 0, drawMiniMapCounter = drawMiniMapFPS, drawMiniMap())
  }
  window.addEventListener("resize", resize);

  function resize() {
      screenWidth = mathRound(window.innerWidth);
      screenHeight = mathRound(window.innerHeight);
      calculateUIScale();
      var a = Math.max(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight);
      c.width = screenWidth;
      c.height = screenHeight;
      graph.setTransform(a, 0, 0, a, (screenWidth - maxScreenWidth * a) / 2, (screenHeight - maxScreenHeight * a) / 2);
      document.getElementById("startMenuWrapper").style.transform = "perspective(1px) translate(-50%, -50%) scale(" + uiScale + ")";
      document.getElementById("gameStatWrapper").style.transform =
          "perspective(1px) translate(-50%, -50%) scale(" + uiScale + ")";
      graph.imageSmoothingEnabled = !1;
      graph.webkitImageSmoothingEnabled = !1;
      graph.mozImageSmoothingEnabled = !1;
      drawMenuBackground()
  }
  resize();
  var grd = null;

  function drawEdgeShader() {
      try {
          null == grd && (grd = graph.createRadialGradient(player.x - startX, player.y - startY, 0, player.x - startX, player.y - startY, maxScreenWidth / 2), grd.addColorStop(0, "rgba(0,0,0,0.0)"), grd.addColorStop(1, "rgba(0,0,0,0.4")), graph.fillStyle = grd, graph.fillRect(0, 0, maxScreenWidth, maxScreenHeight)
      } catch (a) {}
  }
  for (var tmpObject = null, tmpBulletGlowWidth = 0, tmpBulletGlowHeight = 0, lightX = 0, lightY = 0, glowIntensity = .2, flashGlows = [], glowIndex = 0, i = 0; 30 > i; ++i) flashGlows.push(new FlashGlow);

  function FlashGlow() {
      this.initScale = this.scale = this.y = this.x = 0;
      this.active = !1;
      this.maxDuration = this.duration = 0;
      this.update = function (a) {
          this.active && 0 < this.maxDuration && (this.duration += a, this.tmpScale = 1 - this.duration / this.maxDuration, this.tmpScale = 0 > this.tmpScale ? 0 : this.tmpScale, this.scale = this.initScale * this.tmpScale, 1 > this.scale && (this.active = !1), this.duration >= this.maxDuration && (this.active = !1))
      };
      this.draw = function () {
          this.active && graph.drawImage(lightSprite, this.x - startX - this.scale / 2, this.y - startY -
              this.scale / 2, this.scale, this.scale)
      }
  }
  var tmpGlow = null;

  function createFlash(a, b, d) {
      glowIndex++;
      glowIndex >= flashGlows.length && (glowIndex = 0);
      tmpGlow = flashGlows[glowIndex];
      tmpGlow.x = a;
      tmpGlow.y = b;
      tmpGlow.scale = 0;
      tmpGlow.initScale = 220 * d;
      tmpGlow.duration = 0;
      tmpGlow.maxDuration = 180;
      tmpGlow.active = !0
  }

  function drawGameLights(a) {
      if (null != lightSprite) {
          graph.globalCompositeOperation = "lighter";
          graph.globalAlpha = .2;
          for (var b = 0; b < bullets.length; b++) tmpObject = bullets[b], showGlows && 2 != tmpObject.spriteIndex && tmpObject.active && (tmpBulletGlowWidth = tmpObject.glowWidth || mathMIN(200, 14 * tmpObject.width), tmpBulletGlowHeight = tmpObject.glowHeight || 2.5 * tmpObject.height, lightX = tmpObject.x - startX, lightY = tmpObject.y - startY, canSee(lightX, lightY, tmpBulletGlowWidth, tmpBulletGlowHeight) && (graph.save(), graph.translate(lightX,
              lightY), drawSprite(graph, lightSprite, -(tmpBulletGlowWidth / 2), -(tmpBulletGlowHeight / 2) + tmpObject.height / 2, tmpBulletGlowWidth, tmpBulletGlowHeight, tmpObject.dir - mathPI / 2, !1, 0, 0, 0), graph.restore()));
          if (showGlows)
              for (graph.globalAlpha = .2, b = 0; b < flashGlows.length; ++b) tmpObject = flashGlows[b], tmpObject.update(a), tmpObject.draw();
          graph.globalCompositeOperation = "source-over"
      }
  }
  var mapScale = mapCanvas.width,
      pingScale = mapScale / 80;
  mapContext.lineWidth = pingScale / 2;
  var pingFade = .085,
      pingGrow = .4,
      cachedMiniMap = null;

  function getCachedMiniMap() {
      fillCounter++;
      if (null == cachedMiniMap && void 0 != gameMap && 0 < gameMap.tiles.length) {
          var a = document.createElement("canvas"),
              b = a.getContext("2d");
          a.width = mapScale;
          a.height = mapScale;
          b.fillStyle = "#fff";
          for (var d = 0; d < gameMap.tiles.length; ++d) gameMap.tiles[d].wall && b.fillRect(gameMap.tiles[d].x / gameWidth * mapScale, gameMap.tiles[d].y / gameHeight * mapScale, 1.08 * mapTileScale / gameWidth * mapScale, 1.08 * mapTileScale / gameWidth * mapScale);
          var b = document.createElement("canvas"),
              e = b.getContext("2d");
          b.width = mapScale;
          b.height = mapScale;
          e.globalAlpha = .1;
          e.drawImage(a, 0, 0);
          e.globalAlpha = 1;
          for (d = 0; d < gameMap.tiles.length; ++d) gameMap.tiles[d].hardPoint && (e.fillStyle = gameMap.tiles[d].objTeam == player.team ? "#5151d9" : "#d95151", e.fillRect(gameMap.tiles[d].x / gameWidth * mapScale, gameMap.tiles[d].y / gameHeight * mapScale, 1.08 * mapTileScale / gameWidth * mapScale, 1.08 * mapTileScale / gameWidth * mapScale));
          cachedMiniMap = b
      }
      return cachedMiniMap
  }

  function drawMiniMap() {
      mapCanvas.width = mapCanvas.width;
      var a = getCachedMiniMap();
      null != a && mapContext.drawImage(a, 0, 0, mapScale, mapScale);
      mapContext.globalAlpha = 1;
      for (a = 0; a < gameObjects.length; ++a) "player" == gameObjects[a].type && gameObjects[a].onScreen && (gameObjects[a].index == player.index || gameObjects[a].team == player.team || gameObjects[a].isBoss) && (mapContext.fillStyle = gameObjects[a].index == player.index ? "#fff" : gameObjects[a].isBoss ? "#db4fcd" : "#5151d9", mapContext.beginPath(), mapContext.arc(gameObjects[a].x /
          gameWidth * mapScale, gameObjects[a].y / gameHeight * mapScale, pingScale, 0, 2 * mathPI, !0), mapContext.closePath(), mapContext.fill());
      if (null != gameMap)
          for (mapContext.globalAlpha = 1, a = 0; a < gameMap.pickups.length; ++a) gameMap.pickups[a].active && ("lootcrate" == gameMap.pickups[a].type ? mapContext.fillStyle = "#ffd100" : "healthpack" == gameMap.pickups[a].type && (mapContext.fillStyle = "#5ed951"), mapContext.beginPath(), mapContext.arc(gameMap.pickups[a].x / gameWidth * mapScale, gameMap.pickups[a].y / gameHeight * mapScale, pingScale, 0,
              2 * mathPI, !0), mapContext.closePath(), mapContext.fill())
  }

  function calculateUIScale() {
      uiScale = (screenHeight + screenWidth) / (originalScreenWidth + originalScreenHeight) * 1.25
  }

  function drawMenuBackground() {}

  function IsImageOk(a) {
      return a.complete && 0 !== a.naturalWidth ? !0 : !1
  }

  function drawUI() {}
  var screenSkX = 0,
      screenShackeScale = 0,
      screenSkY = 0,
      screenSkRed = .5,
      screenSkDir = 0;

  function screenShake(a, b) {
      screenShackeScale < a && (screenShackeScale = a, screenSkDir = b)
  }

  function updateScreenShake(a) {
      0 < screenShackeScale && (screenSkX = screenShackeScale * mathCOS(screenSkDir), screenSkY = screenShackeScale * mathSIN(screenSkDir), screenShackeScale *= screenSkRed, .1 >= screenShackeScale && (screenShackeScale = 0))
  }
  var userSprays = [],
      tmpSpray = tmpPlayer = null,
      cachedSprays = [];

  function createSpray(a, b, d) {
      tmpPlayer = findUserByIndex(a);
      if (null != tmpPlayer) {
          tmpSpray = null;
          for (var e = 0; e < userSprays.length; ++e)
              if (userSprays[e].owner == a) {
                  tmpSpray = userSprays[e];
                  break
              } if (null == tmpSpray) {
              var f = new Image;
              f.owner = a;
              f.active = !1;
              f.xPos = 0;
              f.yPos = 0;
              f.onload = function () {
                  cacheSpray(f)
              };
              userSprays.push(f);
              tmpSpray = f
          }
          tmpSpray.active = !0;
          tmpSpray.scale = tmpPlayer.spray.info.scale;
          tmpSpray.alpha = tmpPlayer.spray.info.alpha;
          tmpSpray.resolution = tmpPlayer.spray.info.resolution;
          tmpSpray.xPos = b - tmpSpray.scale /
              2;
          tmpSpray.yPos = d - tmpSpray.scale / 2;
          tmpSpray.src != tmpPlayer.spray.src && (tmpSpray.src = tmpPlayer.spray.src)
      }
  }

  function sendSpray() {
      socket.emit("crtSpr")
  }

  function deactivateSprays() {
      for (var a = 0; a < userSprays.length; ++a) userSprays[a].active = !1
  }
  var tmpIndex = 0;

  function cacheSpray(a) {
      tmpIndex = "" + a.src;
      tmpSpray = cachedSprays[tmpIndex];
      if (void 0 == tmpSpray && 0 != a.width) {
          var b = document.createElement("canvas"),
              d = b.getContext("2d");
          b.width = a.resolution;
          b.height = a.resolution;
          d.drawImage(a, 0, 0, a.resolution, a.resolution);
          var d = document.createElement("canvas"),
              e = d.getContext("2d");
          d.width = a.scale;
          d.height = a.scale;
          e.imageSmoothingEnabled = !1;
          e.webkitImageSmoothingEnabled = !1;
          e.mozImageSmoothingEnabled = !1;
          e.globalAlpha = a.alpha;
          e.drawImage(b, 0, 0, a.scale, a.scale);
          tmpSpray =
              d;
          cachedSprays[tmpIndex] = tmpSpray
      }
  }

  function drawSprays() {
      if (showSprays)
          for (var a = 0; a < userSprays.length; ++a) userSprays[a].active && (tmpSpray = cachedSprays["" + userSprays[a].src], void 0 != tmpSpray && graph.drawImage(tmpSpray, userSprays[a].xPos - startX, userSprays[a].yPos - startY))
  }
  var tmpList = [],
      soundList = [{
              loc: "weapons/smg",
              id: "shot0",
              sound: null,
              loop: !1
          }, {
              loc: "weapons/revolver",
              id: "shot1",
              sound: null,
              loop: !1
          }, {
              loc: "weapons/sniper",
              id: "shot2",
              sound: null,
              loop: !1
          }, {
              loc: "weapons/toygun",
              id: "shot3",
              sound: null,
              loop: !1
          }, {
              loc: "weapons/shotgun",
              id: "shot4",
              sound: null,
              loop: !1
          }, {
              loc: "weapons/grenades",
              id: "shot5",
              sound: null,
              loop: !1
          }, {
              loc: "weapons/rockets",
              id: "shot6",
              sound: null,
              loop: !1
          }, {
              loc: "weapons/pistol",
              id: "shot7",
              sound: null,
              loop: !1
          }, {
              loc: "weapons/minigun",
              id: "shot8",
              sound: null,
              loop: !1
          },
          {
              loc: "weapons/flamethrower",
              id: "shot9",
              sound: null,
              loop: !1
          }, {
              loc: "characters/footstep1",
              id: "step1",
              sound: null,
              loop: !1
          }, {
              loc: "characters/jump1",
              id: "jump1",
              sound: null,
              loop: !1
          }, {
              loc: "characters/death1",
              id: "death1",
              sound: null,
              loop: !1
          }, {
              loc: "characters/kill1",
              id: "kill1",
              sound: null,
              loop: !1
          }, {
              loc: "special/explosion",
              id: "explosion",
              sound: null,
              loop: !1
          }, {
              loc: "special/score",
              id: "score",
              sound: null,
              loop: !1
          }, {
              loc: "tracks/track1",
              id: "track1",
              sound: null,
              loop: !0,
              onload: function () {
                  tmpList.track1.sound.play();
                  !player.dead ||
                      startingGame ? tmpList.track1.sound.mute() : currentTrack = 1
              }
          }, {
              loc: "tracks/track2",
              id: "track2",
              sound: null,
              loop: !0,
              onload: function () {
                  tmpList.track2.sound.play();
                  player.dead || !gameStart || gameOver ? tmpList.track2.sound.mute() : currentTrack = 2
              }
          }
      ],
      tmpSound = null,
      tmpFormat = null,
      doSounds = !1;

  function loadSounds(a) {
      if (!doSounds) return !1;
      tmpList = [];
      for (var b = 0; b < soundList.length; ++b) tmpSound = localStorage.getItem(a + soundList[b].loc + "data"), tmpFormat = localStorage.getItem(a + soundList[b].loc + "format"), loadSound(tmpSound, soundList[b], tmpFormat)
  }

  function loadSound(a, b, d) {
      void 0 != tmpList[b.id] && null != tmpList[b.id].sound && tmpList[b.id].sound.stop();
      tmpList[b.id] = b;
      tmpList[b.id].sound = new Howl({
          urls: [a],
          format: [d],
          loop: b.loop,
          onload: b.onload || function () {}
      })
  }
  var currentTrack = 0;

  function startSoundTrack(a) {
      if (!doSounds || void 0 == tmpList.track1 || void 0 == tmpList.track2) return !1;
      try {
          1 == a ? (currentTrack != a && (currentTrack = a, tmpList.track1.sound.fade(0, 1, 1E3)), tmpList.track2.sound.mute()) : (currentTrack != a && (currentTrack = a, tmpList.track2.sound.fade(0, 1, 1E3)), tmpList.track1.sound.mute())
      } catch (b) {
          console.log(b)
      }
  }
  var maxHearDist = 1500,
      tmpDist = 0;

  function playSound(a, b, d) {
      if (!kicked && doSounds) try {
          tmpDist = getDistance(player.x, player.y, b, d), tmpDist <= maxHearDist && (tmpSound = tmpList[a], void 0 != tmpSound && (tmpSound = tmpSound.sound, tmpSound.volume(mathRound(10 * (1 - tmpDist / maxHearDist)) / 10), tmpSound.play()))
      } catch (e) {
          console.log(e)
      }
  }

  function stopAllSounds() {
      if (!doSounds) return !1;
      for (var a = 0; a < soundList.length; ++a) tmpList[soundList[a].id].sound.stop()
  }
  var spritesLoaded = !1,
      spriteIndex = 0,
      tmpPicture = null;

  function getSprite(a) {
      var b = new Image;
      b.index = spriteIndex;
      b.flipped = !1;
      b.isLoaded = !1;
      b.onload = function () {
          b.isLoaded = !0;
          b.onload = null
      };
      b.onerror = function () {
          b.isLoaded = !1;
          console.log("File not Found: " + a + ".png")
      };
      try {
          tmpPicture = localStorage.getItem(a + ".png"), b.src = tmpPicture
      } catch (d) {
          console.log(d)
      }
      spriteIndex++;
      return b
  }

  function flipSprite(a, b) {
      try {
          var d = document.createElement("canvas"),
              e = d.getContext("2d");
          d.width = a.width;
          d.height = a.height;
          e.imageSmoothingEnabled = !1;
          e.webkitImageSmoothingEnabled = !1;
          e.mozImageSmoothingEnabled = !1;
          b ? (e.scale(-1, 1), e.drawImage(a, -d.width, 0, d.width, d.height)) : (e.scale(1, -1), e.drawImage(a, 0, -d.height, d.width, d.height));
          d.index = a.index;
          d.flipped = !0;
          d.isLoaded = !0;
          return d
      } catch (f) {}
      return !1
  }

  function Projectile() {
      this.speed = this.width = this.height = this.jumpY = this.yOffset = this.dir = this.cEndY = this.cEndX = this.startY = this.y = this.startX = this.x = 0;
      this.active = !1;
      this.weaponIndex = this.spriteIndex = this.pierceCount = 0;
      this.glowHeight = this.glowWidth = null;
      this.speed = this.trailWidth = this.trailMaxLength = this.trailAlpha = 0;
      this.owner = null;
      this.dmg = 0;
      this.lastHit = "";
      this.serverIndex = null;
      this.skipMove = !0;
      this.startTime = 0;
      this.maxLifeTime = null;
      this.explodeOnDeath = !1;
      this.updateAccuracy = 3;
      this.bounce = !1;
      var a = 0,
          b = 0,
          d = 0,
          e = 0;
      this.update = function (f) {
          if (this.active) {
              e = currentTime - this.startTime;
              this.skipMove && (e = 0, this.startTime = currentTime);
              for (var g = 0; g < this.updateAccuracy; ++g) {
                  var h = this.speed * f;
                  if (this.active) {
                      a = h * mathCOS(this.dir) / this.updateAccuracy;
                      b = h * mathSIN(this.dir) / this.updateAccuracy;
                      this.active && !this.skipMove && 0 < this.speed && (this.x += a, this.y += b, getDistance(this.startX, this.startY, this.x, this.y) >= this.trailMaxLength && (this.startX += a, this.startY += b));
                      this.cEndX = this.x + (h + this.height) * mathCOS(this.dir) /
                          this.updateAccuracy;
                      this.cEndY = this.y + (h + this.height) * mathSIN(this.dir) / this.updateAccuracy;
                      for (h = 0; h < gameObjects.length; ++h) k = gameObjects[h], this.active && "clutter" == k.type && k.active && k.hc && this.canSeeObject(k, k.h) && k.h * k.tp >= this.yOffset && this.lineInRect(k.x, k.y - k.h, k.w, k.h - this.yOffset, !0) && (this.bounce ? this.bounceDir(this.cEndY <= k.y - k.h || this.cEndY >= k.y - this.yOffset) : (this.active = !1, this.hitSomething(!1, 2)));
                      if (this.active)
                          for (var k, h = 0; h < gameMap.tiles.length; ++h) this.active && (k = gameMap.tiles[h],
                              k.wall && k.hasCollision && this.canSeeObject(k, k.scale) && (k.bottom ? this.lineInRect(k.x, k.y, k.scale, k.scale, !0) && (this.active = !1) : this.lineInRect(k.x, k.y, k.scale, k.scale - this.owner.height - this.jumpY, !0) && (this.active = !1), this.active || (this.bounce ? this.bounceDir(!(this.cEndX <= k.x || this.cEndX >= k.x + k.scale)) : this.hitSomething(!(this.cEndX <= k.x || this.cEndX >= k.x + k.scale), 2))));
                      if (this.active && this.owner.index == player.index)
                          for (h = 0; h < gameObjects.length && (k = gameObjects[h], !(k.index != this.owner.index && 0 > this.lastHit.indexOf("," +
                                  k.index + ",") && k.team != this.owner.team && "player" == k.type && k.onScreen) || k.dead || (this.lineInRect(k.x - k.width / 2, k.y - k.height - k.jumpY, k.width, k.height, 1 >= this.pierceCount) && 0 >= k.spawnProtection && (this.explodeOnDeath ? this.active = !1 : 0 < this.dmg && (this.lastHit += k.index + ",", 2 != this.spriteIndex && (particleCone(12, k.x, k.y - k.height / 2 - k.jumpY, this.dir + mathPI, mathPI / randomInt(5, 7), .5, 16, 0, !0), createLiquid(k.x, k.y, this.dir, 4)), 0 < this.pierceCount && this.pierceCount--, 0 >= this.pierceCount && (this.active = !1))), this.active)); ++h);
                      null != this.maxLifeTime && e >= this.maxLifeTime && (this.active = !1)
                  }
              }
              1 == this.spriteIndex && (d -= f, 0 >= d && (stillDustParticle(this.x, this.y, !0), d = 20))
          } else !this.active && 0 < this.trailAlpha && (this.trailAlpha -= .001 * f, 0 >= this.trailAlpha && (this.trailAlpha = 0));
          this.skipMove = !1
      };
      this.activate = function () {
          this.skipMove = !0;
          this.lastHit = ",";
          this.active = !0;
          playSound("shot" + this.weaponIndex, this.x, this.y)
      };
      var f = 0,
          h = 0;
      this.canSeeObject = function (a, b) {
          f = mathABS(this.cEndX - a.x);
          h = mathABS(this.cEndY - a.y);
          return f <= 2 * (b + this.height) &&
              h <= 2 * (b + this.height)
      };
      this.deactivate = function () {
          this.active = !1
      };
      this.hitSomething = function (a, b) {
          2 != this.spriteIndex && particleCone(10, this.cEndX, this.cEndY, this.dir + mathPI, mathPI / randomInt(5, 7), .5, 16, b, a)
      };
      this.bounceDir = function (a) {
          this.dir = a ? 2 * mathPI - this.dir : mathPI - this.dir;
          this.active = !0;
          this.speed *= .65;
          this.x = this.cEndX;
          this.y = this.cEndY
      };
      this.lineInRect = function (a, b, d, e, f) {
          var g = this.x,
              h = this.y,
              k = g,
              l = this.cEndX;
          k > l && (k = this.cEndX, l = g);
          l > a + d && (l = a + d);
          k < a && (k = a);
          if (k > l) return !1;
          var m = h,
              p = this.cEndY,
              q = this.cEndX - g;
          1E-7 < mathABS(q) && (p = (this.cEndY - h) / q, g = h - p * g, m = p * k + g, p = p * l + g);
          m > p && (k = p, p = m, m = k);
          p > b + e && (p = b + e);
          m < b && (m = b);
          if (m > p) return !1;
          f && this.adjustOnCollision(a, b, d, e);
          return !0
      };
      this.dotInRect = function (a, b, d, e, f, h) {
          return a >= d && a <= d + f && b >= e && b <= e + h
      };
      this.adjustOnCollision = function (a, b, d, e) {
          for (var f = 100, h = this.cEndX, g = this.cEndY; 0 < f;) f--, this.dotInRect(h, g, a, b, d, e) ? f = 0 : (h += 2 * mathCOS(this.dir + mathPI), g += 2 * mathSIN(this.dir + mathPI));
          for (f = 100; 0 < f;) f--, this.dotInRect(h, g, a, b, d, e) ? (h += 2 * mathCOS(this.dir +
              mathPI), g += 2 * mathSIN(this.dir + mathPI)) : f = 0;
          this.cEndX = h;
          this.cEndY = g;
          this.x = this.cEndX;
          this.y = this.cEndY
      }
  }
  var bulletIndex = 0;

  function getNextBullet() {
      bulletIndex++;
      bulletIndex >= bullets.length && (bulletIndex = 0);
      return bullets[bulletIndex]
  }

  function getCurrentWeapon(a) {
      return void 0 != a.weapons && void 0 != a.weapons[a.currentWeapon] ? a.weapons[a.currentWeapon] : null
  }

  function playerSwapWeapon(a, b) {
      null == a || a.dead || (a.currentWeapon += b, 0 > a.currentWeapon && (a.currentWeapon = a.weapons.length - 1), a.currentWeapon >= a.weapons.length && (a.currentWeapon = 0), playerEquipWeapon(a, a.currentWeapon), updateWeaponUI(a, !1), socket.emit("sw", a.currentWeapon))
  }

  function playerEquipWeapon(a, b) {
      a.currentWeapon = b
  }
  var actionBar = document.getElementById("actionBar"),
      tmpDiv = null;

  function updateWeaponUI(a, b) {
      if (void 0 == weaponSpriteSheet[0] || void 0 == a.weapons) return !1;
      b && (actionBar.innerHTML = "");
      if ("" == actionBar.innerHTML)
          for (var d = 0; d < a.weapons.length; ++d) {
              var e = document.createElement("div");
              e.id = "actionContainer" + d;
              e.className = d == a.currentWeapon ? "actionContainerActive" : "actionContainer";
              tmpDiv = weaponSpriteSheet[a.weapons[d].weaponIndex].icon;
              if (void 0 != tmpDiv) {
                  tmpDiv.className = "actionItem";
                  var f = document.createElement("div");
                  f.id = "actionCooldown" + d;
                  f.className = "actionCooldown";
                  e.appendChild(f);
                  e.appendChild(tmpDiv);
                  actionBar.appendChild(e)
              }
          } else
              for (d = 0; d < a.weapons.length; ++d) tmpDiv = document.getElementById("actionContainer" + d), tmpDiv.className = d == a.currentWeapon ? "actionContainerActive" : "actionContainer";
      updateUiStats(a)
  }

  function setCooldownAnimation(a, b, d) {
      tmpDiv = document.getElementById("actionCooldown" + a);
      d ? (tmpDiv.style.height = "100%", $("#actionCooldown" + a).animate({
          height: "0%"
      }, b)) : tmpDiv.style.height = "0%"
  }

  function shootNextBullet(a, b) {
      var d = getNextBullet();
      if (void 0 != d) {
          d.serverIndex = a.si;
          d.x = a.x - 1;
          d.startX = a.x;
          d.y = a.y;
          d.startY = a.y;
          d.dir = a.d;
          d.speed = getCurrentWeapon(b).bSpeed;
          d.updateAccuracy = getCurrentWeapon(b).cAcc;
          d.width = getCurrentWeapon(b).bWidth;
          d.height = getCurrentWeapon(b).bHeight;
          var e = getCurrentWeapon(b).bRandScale;
          null != e && (e = randomFloat(e[0], e[1]), d.width *= e, d.height *= e, d.speed *= 1 + getCurrentWeapon(b).spread[getCurrentWeapon(b).spreadIndex]);
          d.trailWidth = .7 * d.width;
          d.trailMaxLength = mathRound(5 *
              d.height);
          d.trailAlpha = getCurrentWeapon(b).bTrail;
          d.weaponIndex = getCurrentWeapon(b).weaponIndex;
          d.spriteIndex = getCurrentWeapon(b).bSprite;
          d.yOffset = getCurrentWeapon(b).yOffset;
          d.jumpY = b.jumpY;
          d.owner = b;
          d.dmg = getCurrentWeapon(b).dmg;
          d.bounce = getCurrentWeapon(b).bounce;
          d.startTime = currentTime;
          d.maxLifeTime = getCurrentWeapon(b).maxLife;
          b.index == player.index && getCurrentWeapon(b).distBased && (d.maxLifeTime = target.d / d.speed);
          d.glowWidth = getCurrentWeapon(b).glowWidth;
          d.glowHeight = getCurrentWeapon(b).glowHeight;
          d.explodeOnDeath = getCurrentWeapon(b).explodeOnDeath;
          d.pierceCount = getCurrentWeapon(b).pierce;
          d.activate()
      }
      delete d
  }

  function shootBullet(a) {
      if (!a.dead && void 0 != getCurrentWeapon(a) && 0 == a.spawnProtection && 0 <= getCurrentWeapon(a).weaponIndex && 0 >= getCurrentWeapon(a).reloadTime && 0 < getCurrentWeapon(a).ammo) {
          screenShake(getCurrentWeapon(a).shake, target.f);
          for (var b = 0; b < getCurrentWeapon(a).bulletsPerShot; ++b) {
              getCurrentWeapon(a).spreadIndex++;
              getCurrentWeapon(a).spreadIndex >= getCurrentWeapon(a).spread.length && (getCurrentWeapon(a).spreadIndex = 0);
              var d = getCurrentWeapon(a).spread[getCurrentWeapon(a).spreadIndex],
                  d = (target.f +
                      mathPI + d).round(2),
                  e = getCurrentWeapon(a).holdDist + getCurrentWeapon(a).bDist,
                  f = mathRound(a.x + e * mathCOS(d)),
                  e = mathRound(a.y - getCurrentWeapon(a).yOffset - a.jumpY + e * mathSIN(d));
              shootNextBullet({
                  x: f,
                  y: e,
                  d: d,
                  si: -1
              }, a)
          }
          socket.emit("1", a.x, a.y, a.jumpY, target.f, target.d, currentTime);
          getCurrentWeapon(a).lastShot = currentTime;
          getCurrentWeapon(a).ammo--;
          0 >= getCurrentWeapon(a).ammo && playerReload(a, !0);
          updateUiStats(a)
      }
  }

  function playerReload(a, b) {
      0 >= getCurrentWeapon(a).reloadTime && getCurrentWeapon(a).ammo != getCurrentWeapon(a).maxAmmo && (getCurrentWeapon(a).reloadTime = getCurrentWeapon(a).reloadSpeed, getCurrentWeapon(a).spreadIndex = 0, showNotification("Reloading"), b && socket.emit("r"), setCooldownAnimation(a.currentWeapon, getCurrentWeapon(a).reloadTime, !0))
  }

  function findServerBullet(a) {
      for (var b = 0; b < bullets.length; ++b)
          if (bullets[b].serverIndex == a) return bullets[b]
  }

  function someoneShot(a) {
      a.i != player.index && (tmpPlayer = findUserByIndex(a.i), null != tmpPlayer && shootNextBullet(a, tmpPlayer))
  }
  var trailGrad = null;

  function updateBullets(a) {
      var b, d;
      graph.globalAlpha = 1;
      for (var e, f, h = null, g = 0; g < bullets.length; g++) h = bullets[g], h.update(a), h.active && (b = h.x - startX, d = h.y - startY, canSee(b, d, h.height, h.height) && (graph.save(), graph.translate(b, d), 2 == h.spriteIndex ? (graph.globalCompositeOperation = "lighter", graph.globalAlpha = .3, drawSprite(graph, bulletSprites[h.spriteIndex], -(h.glowWidth / 2), -(h.glowHeight / 2) + h.height / 2, h.glowWidth, h.glowHeight, h.dir - mathPI / 2, !1, 0, 0, 0)) : drawSprite(graph, bulletSprites[h.spriteIndex], -(h.width /
          2), 0, h.width, h.height + 8, h.dir - mathPI / 2, !1, 0, 0, 0), graph.restore())), showBTrails && 0 < h.trailAlpha && (graph.save(), b = mathRound(h.startX - startX), d = mathRound(h.startY - startY), e = mathRound(h.x - startX), f = mathRound(h.y - startY), trailGrad = graph.createLinearGradient(b, d, e, f), trailGrad.addColorStop(0, "rgba(255, 255, 255, 0)"), trailGrad.addColorStop(1, "rgba(255, 255, 255, " + h.trailAlpha + ")"), graph.strokeStyle = trailGrad, graph.lineWidth = h.trailWidth, graph.beginPath(), graph.moveTo(b, d), graph.lineTo(e, f), graph.closePath(),
          graph.stroke(), graph.restore());
      delete h
  }
  var weaponNames = "smg revolver sniper toygun shotgun grenades rockets pistol minigun flamethrower".split(" "),
      characterClasses = [{
          classN: "Triggerman",
          weaponIndexes: [0, 5],
          pWeapon: "Machine Gun",
          sWeapon: "Grenade Launcher",
          folderName: "triggerman",
          hasDown: !1
      }, {
          classN: "Detective",
          weaponIndexes: [1, 5],
          pWeapon: "Desert Eagle",
          sWeapon: "Grenade Launcher",
          folderName: "detective",
          hasDown: !1
      }, {
          classN: "Hunter",
          weaponIndexes: [2, 7],
          pWeapon: "Sniper",
          sWeapon: "Machine Pistol",
          folderName: "hunter",
          hasDown: !0
      }, {
          classN: "Run 'N Gun",
          weaponIndexes: [3],
          pWeapon: "Toy Blaster",
          sWeapon: "None",
          folderName: "billy",
          hasDown: !1
      }, {
          classN: "Vince",
          weaponIndexes: [4, 5],
          pWeapon: "Shotgun",
          sWeapon: "Grenade Launcher",
          folderName: "vinc",
          hasDown: !0
      }, {
          classN: "Rocketeer",
          name: "General Weiss",
          weaponIndexes: [6],
          pWeapon: "Rocket Launcher",
          sWeapon: "None",
          folderName: "rocketeer",
          hasDown: !1
      }, {
          classN: "Spray N' Pray",
          weaponIndexes: [8],
          pWeapon: "Minigun",
          sWeapon: "None",
          folderName: "mbob",
          hasDown: !0
      }, {
          classN: "Arsonist",
          weaponIndexes: [9],
          pWeapon: "Flamethrower",
          sWeapon: "None",
          folderName: "pyro",
          hasDown: !0
      }, {
          classN: "Duck",
          weaponIndexes: [9],
          pWeapon: "Jump",
          sWeapon: "None",
          folderName: "boss2",
          hasDown: !0
      }, {
          classN: "Nademan",
          weaponIndexes: [5],
          pWeapon: "Nade Launcher",
          sWeapon: "None",
          folderName: "demo",
          hasDown: !1
      }],
      specialClasses = [{
          pWeapon: "???",
          sWeapon: "???",
          folderName: "boss1",
          hasDown: !1
      }, {
          pWeapon: "???",
          sWeapon: "???",
          folderName: "boss2",
          hasDown: !1
      }],
      currentClassID = 0,
      currentClass = document.getElementById("currentClass"),
      classList = document.getElementById("classList"),
      characterWepnDisplay =
      document.getElementById("charWpn"),
      characterWepnDisplay2 = document.getElementById("charWpn2");

  function createClassList() {
      for (var a = "", b = 0; b < characterClasses.length; ++b) a += "<div class='hatSelectItem' id='classItem" + b + "' onclick='pickedCharacter(" + b + ");'>" + characterClasses[b].classN + "</div>";
      classList.innerHTML = a
  }
  createClassList();

  function showClassselector() {
      charSelectorCont.style.display = "none";
      lobbySelectorCont.style.display = "none";
      classSelector.style.display = "block"
  }

  function loadSavedClass() {
      "" != getCookie("previousClass") ? (previousClass = getCookie("previousClass"), pickedCharacter(previousClass)) : pickedCharacter(0)
  }

  function pickedCharacter(a) {
      currentClassID = a;
      currentClass.innerHTML = document.getElementById("classItem" + a).innerHTML;
      currentClass.style.color = document.getElementById("classItem" + a).style.color;
      characterWepnDisplay.innerHTML = "<b>Primary:</b><div class='hatSelectItem' style='display:inline-block'>" + characterClasses[a].pWeapon + "</div>";
      characterWepnDisplay2.innerHTML = "<b>Secondary:</b><div class='hatSelectItem' style='display:inline-block'>" + characterClasses[a].sWeapon + "</div>";
      setCookie("previousClass",
          a);
      if (loggedIn) {
          for (var b = 0; b < characterClasses[a].weaponIndexes.length; ++b) {
              var d = getCookie("wpnSkn" + characterClasses[a].weaponIndexes[b]);
              "" != d && changeCamo(characterClasses[a].weaponIndexes[b], parseInt(d), !1)
          }
          "" != getCookie("previousHat") && (previousHat = getCookie("previousHat"), changeHat(previousHat));
          "" != getCookie("previousShirt") && (previousShirt = getCookie("previousShirt"), changeShirt(previousShirt))
      }
      charSelectorCont.style.display = "block";
      lobbySelectorCont.style.display = "block";
      classSelector.style.display =
          "none";
      lobbySelector.style.display = "none";
      lobbyCSelector.style.display = "none";
      hatSelector.style.display = "none";
      spraySelector.style.display = "none";
      camoSelector.style.display = "none";
      shirtSelector.style.display = "none"
  }
  var camoDataList = null,
      maxCamos = 0,
      camoList = document.getElementById("camoList");

  function showWeaponSelector(a) {
      charSelectorCont.style.display = "none";
      lobbySelectorCont.style.display = "none";
      classSelector.style.display = "none";
      camoSelector.style.display = "block";
      a = characterClasses[currentClassID].weaponIndexes[a];
      var b = "<div class='hatSelectItem' onclick='changeCamo(" + a + ",0,true);'>Default</div>";
      if (loggedIn && null != camoDataList && void 0 != camoDataList[a]) {
          for (var d, e = 0; e < camoDataList[a].length; ++e) d = camoDataList[a][e], b += "<div class='hatSelectItem' style='color:" + getItemRarityColor(d.chance) +
              "' onclick='changeCamo(" + a + "," + d.id + ",true);'>" + d.name + " x" + (parseInt(d.count) + 1) + "</div>";
          document.getElementById("camoHeaderAmount").innerHTML = "SELECT CAMO (" + (camoDataList[a].length + 1) + "/" + (maxCamos + 1) + ")"
      } else document.getElementById("camoHeaderAmount").innerHTML = "SELECT CAMO";
      camoList.innerHTML = b
  }

  function getCamoURL(a) {
      return "./images/camos/" + (a + 1) + ".png"
  }

  function changeCamo(a, b, d) {
      void 0 != socket && (socket.emit("cCamo", {
          weaponID: a,
          camoID: b
      }), d && (setCookie("wpnSkn" + a, b), charSelectorCont.style.display = "block", lobbySelectorCont.style.display = "block", camoSelector.style.display = "none", shirtSelector.style.display = "none", classSelector.style.display = "none", hatSelector.style.display = "none", lobbySelector.style.display = "none", lobbyCSelector.style.display = "none"))
  }

  function updateCamosList(a, b) {
      camoDataList = b;
      maxCamos = a
  }
  var animLength = 3,
      tmpSprite = null,
      tmpIndex = 0,
      classSpriteSheets = [];

  function loadPlayerSprites(a) {
      classSpriteSheets = [];
      loadPlayerSpriteArray(a, characterClasses);
      loadPlayerSpriteArray(a, specialClasses);
      resize()
  }

  function loadPlayerSpriteArray(a, b) {
      for (var d = 0; d < b.length; ++d) {
          var e = [],
              f = [],
              h = [],
              g = [];
          e.push(getSprite(a + "characters/" + b[d].folderName + "/up"));
          f.push(getSprite(a + "characters/" + b[d].folderName + "/down"));
          h.push(getSprite(a + "characters/" + b[d].folderName + "/left"));
          g.push(getSprite(a + "characters/" + b[d].folderName + "/left"));
          for (var l = 0; l < animLength; ++l) tmpIndex = l, e.push(getSprite(a + "characters/" + b[d].folderName + "/up" + (tmpIndex + 1))), tmpSprite = b[d].hasDown ? getSprite(a + "characters/" + b[d].folderName + "/down" +
              (tmpIndex + 1)) : getSprite(a + "characters/" + b[d].folderName + "/up" + (tmpIndex + 1)), f.push(tmpSprite), 2 <= tmpIndex && (tmpIndex = 0), h.push(getSprite(a + "characters/" + b[d].folderName + "/left" + (tmpIndex + 1))), g.push(getSprite(a + "characters/" + b[d].folderName + "/left" + (tmpIndex + 1)));
          var l = getSprite(a + "characters/" + b[d].folderName + "/arm"),
              m = getSprite(a + "characters/" + b[d].folderName + "/hd"),
              k = getSprite(a + "characters/" + b[d].folderName + "/hu"),
              p = getSprite(a + "characters/" + b[d].folderName + "/hl"),
              n = getSprite(a + "characters/" +
                  b[d].folderName + "/hl");
          classSpriteSheets.push({
              upSprites: e,
              downSprites: f,
              leftSprites: h,
              rightSprites: g,
              arm: l,
              hD: m,
              hU: k,
              hL: p,
              hR: n
          })
      }
  }
  var flagSprites = [],
      clutterSprites = [],
      cachedWalls = [],
      floorSprites = [],
      cachedFloors = [],
      sideWalkSprite = null,
      lightSprite = null,
      ambientSprites = [],
      wallSpritesSeg = [],
      particleSprites = [],
      weaponSpriteSheet = [],
      bulletSprites = [],
      cachedShadows = [],
      cachedWeaponSprites = [],
      wallSprite = null,
      darkFillerSprite = null,
      healthPackSprite = null,
      lootCrateSprite = null,
      weaponWidth = 27,
      weaponHeight = 54;

  function loadDefaultSprites(a) {
      cachedShadows = [];
      flagSprites = [];
      clutterSprites = [];
      cachedWalls = [];
      cachedFloors = [];
      floorSprites = [];
      ambientSprites = [];
      wallSpritesSeg = [];
      particleSprites = [];
      bulletSprites = [];
      cachedWeaponSprites = [];
      flagSprites.push(getSprite(a + "flags/flagb1"));
      flagSprites.push(getSprite(a + "flags/flagb2"));
      flagSprites.push(getSprite(a + "flags/flagb3"));
      flagSprites.push(getSprite(a + "flags/flagr1"));
      flagSprites.push(getSprite(a + "flags/flagr2"));
      flagSprites.push(getSprite(a + "flags/flagr3"));
      clutterSprites.push(getSprite(a +
          "clutter/crate1"));
      clutterSprites.push(getSprite(a + "clutter/barrel1"));
      clutterSprites.push(getSprite(a + "clutter/barrel2"));
      clutterSprites.push(getSprite(a + "clutter/bottle1"));
      clutterSprites.push(getSprite(a + "clutter/spike1"));
      wallSprite = getSprite(a + "wall1");
      ambientSprites.push(getSprite(a + "ambient1"));
      darkFillerSprite = getSprite(a + "darkfiller");
      lightSprite = getSprite(a + "lighting");
      floorSprites.push(getSprite(a + "ground1"));
      floorSprites.push(getSprite(a + "ground2"));
      floorSprites.push(getSprite(a + "ground3"));
      sideWalkSprite = getSprite(a + "sidewalk1");
      wallSpritesSeg.push(getSprite(a + "wallSegment1"));
      wallSpritesSeg.push(getSprite(a + "wallSegment2"));
      wallSpritesSeg.push(getSprite(a + "wallSegment3"));
      particleSprites.push(getSprite(a + "particles/blood/blood"));
      particleSprites.push(getSprite(a + "particles/oil/oil"));
      particleSprites.push(getSprite(a + "particles/wall"));
      particleSprites.push(getSprite(a + "particles/hole"));
      particleSprites.push(getSprite(a + "particles/blood/splatter1"));
      particleSprites.push(getSprite(a +
          "particles/blood/splatter2"));
      particleSprites.push(getSprite(a + "particles/explosion"));
      healthPackSprite = getSprite(a + "healthpack");
      lootCrateSprite = getSprite(a + "lootCrate1");
      weaponSpriteSheet = [];
      for (var b = 0; b < weaponNames.length; ++b) {
          var d, e, f, h, g;
          d = getSprite(a + "weapons/" + weaponNames[b] + "/up");
          e = getSprite(a + "weapons/" + weaponNames[b] + "/up");
          f = getSprite(a + "weapons/" + weaponNames[b] + "/left");
          h = getSprite(a + "weapons/" + weaponNames[b] + "/left");
          g = getSprite(a + "weapons/" + weaponNames[b] + "/icon");
          weaponSpriteSheet.push({
              upSprite: d,
              downSprite: e,
              leftSprite: f,
              rightSprite: h,
              icon: g
          })
      }
      bulletSprites.push(getSprite(a + "weapons/bullet"));
      bulletSprites.push(getSprite(a + "weapons/grenade"));
      bulletSprites.push(getSprite(a + "weapons/flame"));
      resize()
  }
  var mainTitleText = document.getElementById("mainTitleText");

  function updateMenuInfo(a) {
      mainTitleText.innerHTML = a
  }

  function isURL(a) {
      return 0 < a.indexOf(".")
  }
  var linkedMod = location.hash.replace("#", "");
  loadModPack(linkedMod, "" == linkedMod);
  var loadingTexturePack = !1,
      modInfo = document.getElementById("modInfo");

  function setModInfoText(a) {
      void 0 != modInfo && (modInfo.innerHTML = a)
  }
  var fileFormat = "";

  function loadModPack(a, b) {
      try {
          if (!loadingTexturePack) {
              var d = function () {
                      this.numFiles;
                      this.progress;
                      this.reader;
                      this.init = function (a, b) {
                          this.numFiles = b;
                          this.progress = 0;
                          this.reader = a
                      };
                      this.close = function () {
                          this.reader ? (this.progress++, this.numFiles === this.progress && (spriteIndex = 0, loadPlayerSprites("sprites/"), loadDefaultSprites("sprites/"), loadSounds("sounds/"), this.reader.close(), this.reader = void 0, loadingTexturePack = !1)) : console.log("reader not valid")
                      }
                  },
                  e = function (a) {
                      this.typeName = a;
                      var b = this;
                      this.process =
                          function (a) {
                              try {
                                  if (-1 < b.typeName.indexOf("modinfo")) setModInfoText(a);
                                  else if (-1 < b.typeName.indexOf("cssmod")) {
                                      var d = document.createElement("style");
                                      d.type = "text/css";
                                      d.innerHTML = a;
                                      document.getElementsByTagName("head")[0].appendChild(d)
                                  } else if (-1 < b.typeName.indexOf("gameinfo")) {
                                      var e = a.replace(/(\r\n|\n|\r)/gm, ""),
                                          f = JSON.parse(e);
                                      updateMenuInfo(f.name)
                                  } else if (-1 < b.typeName.indexOf("charinfo")) {
                                      var h = a.replace(/(\r\n|\n|\r)/gm, "").split("|");
                                      characterClasses = [];
                                      for (a = 0; a < h.length; ++a) characterClasses.push(JSON.parse(h[a]));
                                      createClassList();
                                      pickedCharacter(currentClassID)
                                  }
                              } catch (t) {
                                  console.log("Script Read Error: " + t)
                              }
                              zipFileCloser.close()
                          }
                  },
                  f = function (a, b) {
                      this.filename = a;
                      this.soundAsDataURL = this.tmpLocation = "";
                      this.format = b;
                      var d = this;
                      this.process = function (a) {
                          if (this.soundAsDataURL = URL.createObjectURL(a)) {
                              try {
                                  this.tmpLocation = d.filename, localStorage.setItem(this.tmpLocation + "data", this.soundAsDataURL), localStorage.setItem(this.tmpLocation + "format", d.format)
                              } catch (r) {
                                  console.log("Storage failed: " + r)
                              }
                              zipFileCloser.close()
                          } else console.log("failed to generate url: " +
                              d.filename)
                      }
                  },
                  h = function (a) {
                      this.filename = a;
                      this.imgAsDataURL = this.tmpLocation = "";
                      var b = this;
                      this.process = function (a) {
                          if (this.imgAsDataURL = URL.createObjectURL(a)) {
                              try {
                                  this.tmpLocation = b.filename, localStorage.setItem(this.tmpLocation, this.imgAsDataURL)
                              } catch (n) {
                                  console.log("Storage failed: " + n)
                              }
                              zipFileCloser.close()
                          } else console.log("failed to generate url: " + b.filename)
                      }
                  },
                  g = "";
              if (b) doSounds = !1, g = "./res.zip";
              else {
                  if ("" == a) return setModInfoText("Please enter a mod Key/URL"), !1;
                  loadingTexturePack =
                      doSounds = !0;
                  isURL(a) ? (g = a, g.match(/^https?:\/\//i) || (g = "http://" + g)) : g = "https://www.dropbox.com/scl/fi/" + a + "/vertixmod.zip"
              }
              b || setModInfoText("Loading...");
              zipFileCloser || (zipFileCloser = new d);
              var l = "";
              zip.createReader(new zip.HttpReader(g), function (a) {
                  a.getEntries(function (b) {
                      if (b.length) {
                          zipFileCloser.init(a, b.length);
                          for (var d = 0; d < b.length; d++) {
                              var g = b[d];
                              g.directory ? zipFileCloser.close() : (g.filename = g.filename.replace("vertixmod/", ""), fileFormat = g.filename.split(".")[g.filename.split(".").length -
                                  1], l = g.filename.split("/")[0], "scripts" == l ? g.getData(new zip.TextWriter, (new e(g.filename)).process, function (a, b) {}) : "sprites" == l ? g.getData(new zip.BlobWriter("image/png"), (new h(g.filename)).process, function (a, b) {}) : "sounds" == l ? g.getData(new zip.BlobWriter("audio/" + fileFormat), (new f(g.filename.replace("." + fileFormat, ""), fileFormat)).process, function (a, b) {}) : (loadingTexturePack = !1, setModInfoText("Mod could not be loaded")))
                          }
                      }
                  })
              }, function (a) {
                  loadingTexturePack = !1;
                  console.log(a);
                  setModInfoText("Mod could not be loaded")
              })
          }
      } catch (m) {
          console.log(m),
              loadingTexturePack = !1, setModInfoText("Mod could not be loaded")
      }
  }

  function getPlayerSprite(a, b, d) {
      tmpSpriteCollection = classSpriteSheets[a];
      if (void 0 == tmpSpriteCollection) return null;
      90 == b ? tmpSprite = tmpSpriteCollection.leftSprites[d] : 180 == b ? tmpSprite = tmpSpriteCollection.upSprites[d] : 270 == b ? (!tmpSpriteCollection.rightSprites[d].flipped && tmpSpriteCollection.rightSprites[d].isLoaded && (tmpSpriteCollection.rightSprites[d] = flipSprite(tmpSpriteCollection.rightSprites[d], !0)), tmpSprite = tmpSpriteCollection.rightSprites[d]) : tmpSprite = tmpSpriteCollection.downSprites[d];
      return tmpSprite
  }
  var cachedHats = [],
      tmpAcc = null;

  function getHatSprite(a, b) {
      tmpAcc = a.account;
      if (void 0 != tmpAcc)
          if (null != tmpAcc.hat)
              if (tmpSprite = cachedHats[tmpAcc.hat.id], void 0 == tmpSprite) {
                  var d = {
                      lS: null,
                      uS: null,
                      rS: null,
                      dS: null,
                      imgToLoad: 0
                  };
                  tmpAcc.hat.left && (d.imgToLoad++, d.lS = new Image, d.lS.index = spriteIndex, spriteIndex++, d.lS.src = "./images/hats/" + tmpAcc.hat.id + "/l.png", d.lS.onload = function () {
                          d.imgToLoad--;
                          d.lS.isLoaded = !0;
                          d.lS.onload = null
                      }, d.imgToLoad++, d.rS = new Image, d.rS.index = spriteIndex, spriteIndex++, d.rS.src = "./images/hats/" + tmpAcc.hat.id +
                      "/l.png", d.rS.onload = function () {
                          d.rS = flipSprite(d.rS, !0);
                          d.imgToLoad--;
                          d.rS.isLoaded = !0;
                          d.rS.onload = null
                      });
                  tmpAcc.hat.up && (d.imgToLoad++, d.uS = new Image, d.uS.index = spriteIndex, spriteIndex++, d.uS.src = "./images/hats/" + tmpAcc.hat.id + "/u.png", d.uS.onload = function () {
                      d.imgToLoad--;
                      d.uS.isLoaded = !0;
                      d.uS.onload = null
                  });
                  d.imgToLoad++;
                  d.dS = new Image;
                  d.dS.index = spriteIndex;
                  spriteIndex++;
                  d.dS.src = "./images/hats/" + tmpAcc.hat.id + "/d.png";
                  d.dS.onload = function () {
                      d.imgToLoad--;
                      d.dS.isLoaded = !0;
                      d.dS.onload = null
                  };
                  cachedHats[tmpAcc.hat.id] = d
              } else {
                  if (0 >= tmpSprite.imgToLoad) return tmpAcc.hat.left && 90 == b ? tmpSprite.lS : tmpAcc.hat.up && 180 == b ? tmpSprite.uS : tmpAcc.hat.left && 270 == b ? tmpSprite.rS : tmpSprite.dS
              }
      else {
          tmpSpriteCollection = classSpriteSheets[a.classIndex];
          if (void 0 == tmpSpriteCollection) return null;
          90 == b ? tmpSprite = tmpSpriteCollection.hL : 180 == b ? tmpSprite = tmpSpriteCollection.hU : 270 == b ? (!tmpSpriteCollection.hR.flipped && tmpSpriteCollection.hR.isLoaded && (tmpSpriteCollection.hR = flipSprite(tmpSpriteCollection.hR, !0)),
              tmpSprite = tmpSpriteCollection.hR) : tmpSprite = tmpSpriteCollection.hD;
          return tmpSprite
      }
      return null
  }
  var cachedShirts = [];

  function getShirtSprite(a, b) {
      tmpAcc = a.account;
      if (void 0 != tmpAcc && null != tmpAcc.shirt && 8 != a.classIndex)
          if (tmpSprite = cachedShirts[tmpAcc.shirt.id], void 0 == tmpSprite) {
              var d = {
                  lS: null,
                  uS: null,
                  rS: null,
                  dS: null,
                  imgToLoad: 0
              };
              tmpAcc.shirt.left && (d.imgToLoad++, d.lS = new Image, d.lS.index = spriteIndex, spriteIndex++, d.lS.src = "./images/shirts/" + tmpAcc.shirt.id + "/l.png", d.lS.onload = function () {
                      d.imgToLoad--;
                      d.lS.isLoaded = !0;
                      d.lS.onload = null
                  }, d.imgToLoad++, d.rS = new Image, d.rS.index = spriteIndex, spriteIndex++, d.rS.src =
                  "./images/shirts/" + tmpAcc.shirt.id + "/l.png", d.rS.onload = function () {
                      d.rS = flipSprite(d.rS, !0);
                      d.imgToLoad--;
                      d.rS.isLoaded = !0;
                      d.rS.onload = null
                  });
              tmpAcc.shirt.up && (d.imgToLoad++, d.uS = new Image, d.uS.index = spriteIndex, spriteIndex++, d.uS.src = "./images/shirts/" + tmpAcc.shirt.id + "/u.png", d.uS.onload = function () {
                  d.imgToLoad--;
                  d.uS.isLoaded = !0;
                  d.uS.onload = null
              });
              d.imgToLoad++;
              d.dS = new Image;
              d.dS.index = spriteIndex;
              spriteIndex++;
              d.dS.src = "./images/shirts/" + tmpAcc.shirt.id + "/d.png";
              d.dS.onload = function () {
                  d.imgToLoad--;
                  d.dS.isLoaded = !0;
                  d.dS.onload = null
              };
              cachedShirts[tmpAcc.shirt.id] = d
          } else if (0 >= tmpSprite.imgToLoad) return tmpAcc.shirt.left && 90 == b ? tmpSprite.lS : tmpAcc.shirt.up && 180 == b ? tmpSprite.uS : tmpAcc.shirt.left && 270 == b ? tmpSprite.rS : tmpSprite.dS;
      return null
  }
  tmpSprite = null;
  tmpIndex = "";

  function getWeaponSprite(a, b, d) {
      tmpIndex = a + "" + b + "" + d;
      tmpSprite = cachedWeaponSprites[tmpIndex];
      if (void 0 == tmpSprite) {
          var e = null,
              e = weaponSpriteSheet[a];
          void 0 != e && null != e && (90 == d ? e = e.leftSprite : 180 == d ? e = e.upSprite : 270 == d ? (!e.rightSprite.flipped && e.rightSprite.isLoaded && (e.rightSprite = flipSprite(e.rightSprite, !0)), e = e.rightSprite) : e = e.downSprite, d = document.createElement("canvas"), a = d.getContext("2d"), a.imageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.mozImageSmoothingEnabled = !1, d.width = e.width,
              d.height = e.height, a.drawImage(e, 0, 0, d.width, d.height), tmpSprite = d, cachedWeaponSprites[tmpIndex] = tmpSprite, 0 <= b && (d = new Image, d.wpnImg = tmpSprite, d.flip = e.flipped, d.tmpInx = tmpIndex, d.onload = function () {
                  var a = document.createElement("canvas"),
                      b = a.getContext("2d");
                  b.imageSmoothingEnabled = !1;
                  b.webkitImageSmoothingEnabled = !1;
                  b.mozImageSmoothingEnabled = !1;
                  a.width = this.width;
                  a.height = this.height;
                  this.onload = null;
                  b.drawImage(this.wpnImg, 0, 0, this.width, this.height);
                  b.globalCompositeOperation = "source-atop";
                  b.globalAlpha =
                      .75;
                  b.drawImage(this.flip ? flipSprite(this, !0) : this, 0, 0, this.width, this.height);
                  cachedWeaponSprites[this.tmpInx] = a
              }, d.src = getCamoURL(b)))
      }
      return tmpSprite
  }
  var playerCanvas = document.createElement("canvas"),
      playerContext = playerCanvas.getContext("2d"),
      initPlayerCanv = !1;

  function drawGameObjects(a) {
      initPlayerCanv || (playerCanvas.width = mathRound(300), playerCanvas.height = mathRound(500), playerContext.imageSmoothingEnabled = !1, playerContext.webkitImageSmoothingEnabled = !1, playerContext.mozImageSmoothingEnabled = !1, initPlayerCanv = !0);
      for (var b = null, d = null, e = null, f = null, h, g, l = 0; l < gameObjects.length; l++)
          if (b = gameObjects[l], "player" == b.type) {
              if (!b.dead && (b.index == player.index || b.onScreen)) {
                  void 0 == b.jumpY && (b.jumpY = 0);
                  playerContext.clearRect(0, 0, playerCanvas.width, playerCanvas.height);
                  playerContext.save();
                  playerContext.globalAlpha = .9;
                  playerContext.translate(playerCanvas.width / 2, playerCanvas.height / 2);
                  var m = mathPI / 180 * b.angle,
                      k = 90 * mathRound(b.angle % 360 / 90);
                  h = b.x - startX;
                  g = b.y - b.jumpY - startY;
                  1 == b.animIndex && (g -= 3);
                  0 < b.weapons.length && (e = getWeaponSprite(getCurrentWeapon(b).weaponIndex, getCurrentWeapon(b).camo, k), f = classSpriteSheets[b.classIndex], void 0 != f && (f = f.arm), getCurrentWeapon(b).front || void 0 == e || (playerContext.save(), playerContext.translate(0, -getCurrentWeapon(b).yOffset),
                      playerContext.rotate(m), playerContext.translate(0, getCurrentWeapon(b).holdDist), drawSprite(playerContext, e, -(getCurrentWeapon(b).width / 2), 0, getCurrentWeapon(b).width, getCurrentWeapon(b).length, 0, !1, 0, 0, 0), playerContext.translate(0, -getCurrentWeapon(b).holdDist + 6), void 0 != f && null != f && (playerContext.translate(3, -10), drawSprite(playerContext, f, 0, 0, 8, 32, 0, !1, 0, 0, 0), playerContext.translate(-16, -8), drawSprite(playerContext, f, 0, 0, 8, 32, 0, !1, 0, 0, 0), playerContext.restore())));
                  playerContext.globalAlpha = 1;
                  d =
                      getPlayerSprite(b.classIndex, k, b.animIndex + 1);
                  null != d && drawSprite(playerContext, d, -(b.width / 2), -(.318 * b.height), b.width, .318 * b.height, 0, !0, 1.5 * b.jumpY, .5, 0);
                  d = getPlayerSprite(b.classIndex, k, 0);
                  null != d && drawSprite(playerContext, d, -(b.width / 2), -b.height, b.width, b.height * (1 - .318), 0, !0, 1.5 * b.jumpY + .477 * b.height, .5, 0);
                  d = getShirtSprite(b, k);
                  null != d && (playerContext.globalAlpha = .9, drawSprite(playerContext, d, -(b.width / 2), -b.height, b.width, b.height * (1 - .318), 0, !0, 1.5 * b.jumpY + .477 * b.height, .5, 0), playerContext.globalAlpha =
                      1);
                  var p = .833 * b.width,
                      d = getHatSprite(b, k);
                  null != d && drawSprite(playerContext, d, -(p / 2), -(b.height + .095 * p), p, p, 0, !1, 0, .5, 0);
                  0 < b.weapons.length && (playerContext.globalAlpha = .9, getCurrentWeapon(b).front && void 0 != e && (playerContext.save(), playerContext.translate(0, -getCurrentWeapon(b).yOffset), playerContext.rotate(m), playerContext.translate(0, getCurrentWeapon(b).holdDist), drawSprite(playerContext, e, -(getCurrentWeapon(b).width / 2), 0, getCurrentWeapon(b).width, getCurrentWeapon(b).length, 0, !1, 0, 0, 0), playerContext.translate(0,
                      -getCurrentWeapon(b).holdDist + 10), void 0 != f && null != f && (270 == k ? (playerContext.restore(), playerContext.save(), playerContext.translate(-4, -getCurrentWeapon(b).yOffset + 8), playerContext.rotate(m), drawSprite(playerContext, f, 0, 0, 8, 32, 0, !1, 0, 0, 0)) : 90 == k ? (playerContext.restore(), playerContext.save(), playerContext.translate(0, -getCurrentWeapon(b).yOffset), playerContext.rotate(m), drawSprite(playerContext, f, 0, 0, 8, 32, 0, !1, 0, 0, 0)) : (playerContext.translate(10, -13), playerContext.rotate(.7), drawSprite(playerContext,
                      f, 0, 0, 8, 32, 0, !1, 0, 0, 0), playerContext.rotate(-.7), playerContext.translate(-28, -1), playerContext.rotate(-.25), drawSprite(playerContext, f, 0, 0, 8, 32, 0, !1, 0, 0, 0), playerContext.rotate(.25)), playerContext.restore())));
                  0 < b.spawnProtection && (playerContext.globalCompositeOperation = "source-atop", playerContext.fillStyle = b.team != player.team ? "rgba(255,179,179,0.5)" : "rgba(179,231,255,0.5)", playerContext.fillRect(-playerCanvas.width / 2, -playerCanvas.height / 2, playerCanvas.width, playerCanvas.height), playerContext.globalCompositeOperation =
                      "source-over");
                  void 0 != b.hitFlash && 0 < b.hitFlash && (playerContext.globalCompositeOperation = "source-atop", playerContext.fillStyle = "rgba(255, 255, 255, " + b.hitFlash + ")", playerContext.fillRect(-playerCanvas.width / 2, -playerCanvas.height / 2, playerCanvas.width, playerCanvas.height), playerContext.globalCompositeOperation = "source-over", b.hitFlash -= .01 * a, 0 > b.hitFlash && (b.hitFlash = 0));
                  drawSprite(graph, playerCanvas, h - playerCanvas.width / 2, g - playerCanvas.height / 2, playerCanvas.width, playerCanvas.height, 0, !1, 0, 0, 0);
                  playerContext.restore()
              }
          } else "flag" == b.type ? (b.ac--, 0 >= b.ac && (b.ac = 5, b.ai++, 2 < b.ai && (b.ai = 0)), drawSprite(graph, flagSprites[b.ai + (b.team == player.team ? 0 : 3)], b.x - b.w / 2 - startX, b.y - b.h - startY, b.w, b.h, 0, !0, 0, .5, 0)) : "clutter" == b.type && b.active && canSee(b.x - startX, b.y - startY, b.w, b.h) && drawSprite(graph, clutterSprites[b.i], b.x - startX, b.y - b.h - startY, b.w, b.h, 0, b.s, 0, .5, 0);
      graph.globalAlpha = 1;
      delete b;
      delete d;
      delete e;
      delete f
  }

  function drawPlayerNames() {
      var a = null,
          b, d, e, f, h = null,
          g;
      graph.lineWidth = playerConfig.textBorderSize;
      graph.fillStyle = playerConfig.textColor;
      graph.miterLimit = 1;
      graph.lineJoin = "round";
      graph.globalAlpha = 1;
      for (var l = 0; l < gameObjects.length; l++) tmpObject = gameObjects[l], "player" != tmpObject.type || tmpObject.dead || tmpObject.index != player.index && !tmpObject.onScreen || (d = tmpObject.height / 3.2, e = mathMIN(200, tmpObject.maxHealth / 100 * 100), shapeX = tmpObject.x - startX, shapeY = tmpObject.y - tmpObject.jumpY - tmpObject.nameYOffset -
          startY, void 0 != tmpObject.account && null != tmpObject.account.hat && (shapeY -= tmpObject.account.hat.nameY), b = tmpObject.name, f = tmpObject.loggedIn ? tmpObject.account.rank : "", h = graph.measureText(b), g = tmpObject.team != player.team ? "#d95151" : "#5151d9", showNames && (a = renderShadedAnimText(b, d * textSizeMult, "#ffffff", 5, ""), void 0 != a && graph.drawImage(a, shapeX - a.width / 2, shapeY - 1.4 * tmpObject.height - a.height / 2, a.width, a.height), "" != f && (b = renderShadedAnimText(f, 1.6 * d * textSizeMult, "#ffffff", 6, ""), void 0 != b && graph.drawImage(b,
              shapeX - a.width / 2 - b.width - 5 * textSizeMult, shapeY - 1.4 * tmpObject.height - (b.height - a.height / 2), b.width, b.height)), "" != tmpObject.account.clan && (b = renderShadedAnimText(" [" + tmpObject.account.clan + "]", d * textSizeMult, g, 5, ""), void 0 != b && graph.drawImage(b, shapeX + a.width / 2, shapeY - 1.4 * tmpObject.height - a.height / 2, b.width, a.height))), graph.fillStyle = g, graph.fillRect(shapeX - e / 2 * (tmpObject.health / tmpObject.maxHealth), shapeY - 1.16 * tmpObject.height, tmpObject.health / tmpObject.maxHealth * e, 10));
      delete h;
      delete a
  }

  function drawBackground() {
      drawSprite(graph, darkFillerSprite, 0, 0, maxScreenWidth, maxScreenHeight, 0, !1, 0, 0, 0)
  }

  function getCachedWall(a) {
      var b = a.left + "" + a.right + "" + a.top + "" + a.bottom + "" + a.topLeft + "" + a.topRight + "" + a.bottomLeft + "" + a.bottomRight + "" + a.edgeTile + "" + a.hasCollision,
          d = cachedWalls[b];
      if (void 0 == d && void 0 != wallSprite && wallSprite.isLoaded) {
          var d = document.createElement("canvas"),
              e = d.getContext("2d");
          e.imageSmoothingEnabled = !1;
          e.webkitImageSmoothingEnabled = !1;
          e.mozImageSmoothingEnabled = !1;
          d.width = a.scale;
          d.height = a.scale;
          e.drawImage(wallSprite, 0, 0, a.scale, a.scale);
          drawSprite(e, darkFillerSprite, 12, 12, a.scale -
              24, a.scale - 24, 0, !1, 0, 0, 0);
          1 == a.left && drawSprite(e, darkFillerSprite, 0, 12, 12, a.scale - 24, 0, !1, 0, 0, 0);
          1 == a.right && drawSprite(e, darkFillerSprite, a.scale - 12, 12, 12, a.scale - 24, 0, !1, 0, 0, 0);
          1 == a.top && drawSprite(e, darkFillerSprite, 12, 0, a.scale - 24, 12, 0, !1, 0, 0, 0);
          1 == a.bottom && drawSprite(e, darkFillerSprite, 12, a.scale - 12, a.scale - 24, 12, 0, !1, 0, 0, 0);
          (!a.hasCollision || 1 == a.topLeft && 1 == a.top && 1 == a.left) && drawSprite(e, darkFillerSprite, 0, 0, 12, 12, 0, !1, 0, 0, 0);
          (!a.hasCollision || 1 == a.topRight && 1 == a.top && 1 == a.right) && drawSprite(e,
              darkFillerSprite, a.scale - 12, 0, 12, 12, 0, !1, 0, 0, 0);
          (!a.hasCollision || 1 == a.bottomLeft && 1 == a.bottom && 1 == a.left) && drawSprite(e, darkFillerSprite, 0, a.scale - 12, 12, 12, 0, !1, 0, 0, 0);
          (!a.hasCollision || 1 == a.bottomRight && 1 == a.bottom && 1 == a.right) && drawSprite(e, darkFillerSprite, a.scale - 12, a.scale - 12, 12, 12, 0, !1, 0, 0, 0);
          cachedWalls[b] = d
      }
      return d
  }
  var tilesPerFloorTile = 8;

  function getCachedFloor(a) {
      var b = a.spriteIndex + "" + a.left + "" + a.right + "" + a.top + "" + a.bottom + "" + a.topLeft + "" + a.topRight,
          d = cachedFloors[b];
      if (void 0 == d && null != sideWalkSprite && sideWalkSprite.isLoaded) {
          var d = document.createElement("canvas"),
              e = d.getContext("2d");
          e.imageSmoothingEnabled = !1;
          e.webkitImageSmoothingEnabled = !1;
          e.mozImageSmoothingEnabled = !1;
          d.width = a.scale;
          d.height = a.scale * (a.bottom ? .51 : 1);
          e.drawImage(floorSprites[a.spriteIndex], 0, 0, a.scale, a.scale);
          var f = a.scale / tilesPerFloorTile;
          1 == a.topLeft &&
              renderSideWalks(e, 1, f, 0, 0, 0, 0, 0);
          1 == a.topRight && renderSideWalks(e, 1, f, mathPI, a.scale - f, 0, 0, 0);
          1 == a.left && (1 == a.top ? (renderSideWalks(e, 2, f, null, 0, 0, 0, f), renderSideWalks(e, tilesPerFloorTile - 2, f, 0, 0, 2 * f, 0, f)) : renderSideWalks(e, tilesPerFloorTile, f, 0, 0, 0, 0, f));
          1 == a.right && (1 == a.top ? (renderSideWalks(e, 2, f, null, a.scale - f, 2, 0, f), renderSideWalks(e, tilesPerFloorTile - 2, f, mathPI, a.scale - f, 2 * f, 0, f)) : renderSideWalks(e, tilesPerFloorTile, f, mathPI, a.scale - f, 0, 0, f));
          1 == a.top && renderSideWalks(e, tilesPerFloorTile, f,
              mathPI / 2, 0, 0, f, 0);
          1 == a.bottom && renderSideWalks(e, tilesPerFloorTile, f, 0, 0, a.scale - f, f, 0);
          cachedFloors[b] = d
      }
      return d
  }

  function renderSideWalks(a, b, d, e, f, h, g, l) {
      for (var m = 0; m < b; ++m) a.drawImage(sideWalkSprite, f, h, d, d), null != e && (a.save(), a.translate(f + d / 2, h + d / 2), a.rotate(e), a.drawImage(ambientSprites[0], -(d / 2), -(d / 2), d, d), a.restore()), f += g, h += l
  }
  var tmpTlSprite = null;

  function drawMap(a) {
      var b;
      if (null != gameMap) {
          for (var d = 0; d < gameMap.tiles.length; ++d) b = gameMap.tiles[d], 0 == a ? !b.wall && canSee(b.x - startX, b.y - startY, mapTileScale, mapTileScale) && (tmpTlSprite = getCachedFloor(b), void 0 != tmpTlSprite && drawSprite(graph, tmpTlSprite, b.x - startX, b.y - startY, tmpTlSprite.width, tmpTlSprite.height, 0, !1, 0, 0, 0)) : 1 == a ? b.wall && !b.bottom && canSee(b.x - startX, b.y - startY + .5 * mapTileScale, mapTileScale, .75 * mapTileScale) && drawSprite(graph, wallSpritesSeg[b.spriteIndex], b.x - startX, b.y + mathRound(mapTileScale /
              2) - startY, mapTileScale, mapTileScale / 2, 0, !0, -(b.scale / 2), .5, b.scale) : 2 == a && b.wall && canSee(b.x - startX, b.y - startY - .5 * mapTileScale, mapTileScale, mapTileScale) && (tmpTlSprite = getCachedWall(b), void 0 != tmpTlSprite && drawSprite(graph, tmpTlSprite, b.x - startX, mathRound(b.y - mapTileScale / 2 - startY), mapTileScale, mapTileScale, 0, !1, 0, 0, 0));
          if (0 == a)
              for (d = 0; d < gameMap.pickups.length; ++d) b = gameMap.pickups[d], b.active && canSee(b.x - startX, b.y - startY, 0, 0) && ("healthpack" == b.type ? drawSprite(graph, healthPackSprite, b.x - b.scale /
                  2 - startX, b.y - b.scale / 2 - startY, b.scale, b.scale, 0, !0, 0, .5, 0) : drawSprite(graph, lootCrateSprite, b.x - b.scale / 2 - startX, b.y - b.scale / 2 - startY, b.scale, b.scale, 0, !0, 0, .5, 0))
      }
  }
  var tmpShadow = null;

  function drawSprite(a, b, d, e, f, h, g, l, m, k, p) {
      null != b && void 0 != b && 0 < b.width && (d = mathFloor(d), e = mathFloor(e), f = mathFloor(f), h = mathFloor(h), m = mathFloor(m), a.rotate(g), a.drawImage(b, d, e, f, h), l && showShadows && (a.globalAlpha = 1, a.translate(0, m), tmpShadow = getCachedShadow(b, f, h + p, k), null != tmpShadow && void 0 != tmpShadow && a.drawImage(tmpShadow, d, e + h), a.rotate(-g), a.translate(0, -m)))
  }
  var shadowIntensity = .16;

  function getCachedShadow(a, b, d, e) {
      var f = cachedShadows[a.index];
      if (void 0 == f && 0 != b && void 0 != a && a.isLoaded) {
          var f = document.createElement("canvas"),
              h = f.getContext("2d");
          h.imageSmoothingEnabled = !1;
          h.webkitImageSmoothingEnabled = !1;
          h.mozImageSmoothingEnabled = !1;
          f.width = b;
          f.height = d;
          h.globalAlpha = .5 == e ? shadowIntensity : .75 * shadowIntensity;
          h.scale(1, -e);
          h.transform(1, 0, 0, 1, 0, 0);
          h.drawImage(a, 0, -d, b, d);
          b = h.getImageData(0, 0, f.width, f.height);
          d = b.data;
          e = 0;
          for (var g = d.length; e < g; e += 4) d[e] = 0, d[e + 1] = 0, d[e + 2] = 0,
              d[e + 3] = d[e + 3];
          h.putImageData(b, 0, 0);
          cachedShadows[a.index] = f
      }
      return f
  }

  function canSee(a, b, d, e) {
      return 0 < a + d && 0 < b + e && a < maxScreenWidth && b < maxScreenHeight
  }
  for (var notificationsSize = 80 * textSizeMult, notificationsGap = 1.6 * notificationsSize, notifications = [], i = 0; 3 > i; ++i) notifications.push(new AnimText);
  var notificationIndex = 0;

  function showNotification(a) {
      a = a.toUpperCase();
      notificationIndex++;
      notificationIndex >= notifications.length && (notificationIndex = 0);
      notifications[notificationIndex].text = a;
      notifications[notificationIndex].alpha = 1;
      notifications[notificationIndex].x = maxScreenWidth / 2;
      notifications[notificationIndex].fadeSpeed = .003;
      notifications[notificationIndex].fadeDelay = 800;
      notifications[notificationIndex].fontSize = notificationsSize * viewMult;
      notifications[notificationIndex].scale = 1;
      notifications[notificationIndex].scaleSpeed =
          .005;
      notifications[notificationIndex].minScale = 1;
      notifications[notificationIndex].maxScale = 1.5;
      notifications[notificationIndex].cachedImage = renderShadedAnimText(a, notificationsSize * viewMult, "#ffffff", 7, "Italic ");
      notifications[notificationIndex].active = !0;
      positionNotifications()
  }
  var activeNotifications = 0;

  function positionNotifications() {
      for (var a = activeNotifications = 0; a < notifications.length; ++a) notifications[a].active && activeNotifications++;
      if (0 < activeNotifications) {
          notifications.sort(sortByAlpha);
          for (var b = 0, d = maxScreenHeight - notifications.length * notificationsGap * viewMult - 100, a = 0; a < notifications.length; ++a) notifications[a].active && (notifications[a].y = d + notificationsGap * viewMult * b, b++)
      }
  }

  function sortByAlpha(a, b) {
      return a.alpha < b.alpha ? 1 : b.alpha < a.alpha ? -1 : 0
  }

  function updateNotifications(a) {
      graph.fillStyle = "#fff";
      for (var b = 0; b < notifications.length; ++b) notifications[b].active && (notifications[b].update(a), notifications[b].draw());
      graph.globalAlpha = 1
  }
  for (var animTexts = [], i = 0; 20 > i; i++) animTexts.push(new AnimText);
  var shadowOffset = 6,
      tmpDrawText = null;

  function AnimText() {
      this.text = "";
      this.scaleSpeed = this.minScale = this.maxScale = this.fontSize = this.scale = this.ySpeed = this.xSpeed = this.y = this.x = 0;
      this.active = !1;
      this.alpha = 1;
      this.fadeSpeed = 0;
      this.useStart = !1;
      this.moveDelay = this.fadeDelay = 0;
      this.removable = !1;
      this.textType = "";
      this.color = "#fff";
      this.cachedImage = null;
      this.update = function (a) {
          this.active && (this.scale += this.scaleSpeed * a, 0 < this.scaleSpeed ? this.scale >= this.maxScale && (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale < this.minScale && (this.scale =
              this.minScale, this.scaleSpeed = 0), 0 < this.moveDelay ? this.moveDelay -= a : (this.x += this.xSpeed * a, this.y += this.ySpeed * a), 0 < this.fadeDelay ? this.fadeDelay -= a : (this.alpha -= this.fadeSpeed * a, 0 >= this.alpha && (this.alpha = 0, this.active = !1)))
      };
      this.draw = function () {
          this.active && (graph.globalAlpha = this.alpha, this.useStart ? void 0 != this.cachedImage && graph.drawImage(this.cachedImage, this.x - startX - this.cachedImage.width / 2 * this.scale, this.y - startY - this.cachedImage.height / 2 * this.scale, this.cachedImage.width * this.scale, this.cachedImage.height *
              this.scale) : void 0 != this.cachedImage && graph.drawImage(this.cachedImage, this.x - this.cachedImage.width / 2 * this.scale, this.y - this.cachedImage.height / 2 * this.scale, this.cachedImage.width * this.scale, this.cachedImage.height * this.scale))
      }
  }

  function updateAnimTexts(a) {
      graph.lineJoin = "round";
      graph.textAlign = "center";
      graph.textBaseline = "middle";
      for (var b = 0; b < animTexts.length; b++) animTexts[b].update(a), animTexts[b].active && animTexts[b].draw();
      graph.globalAlpha = 1
  }

  function getReadyAnimText() {
      for (var a = 0; a < animTexts.length; ++a)
          if (!animTexts[a].active) return animTexts[a];
      return null
  }

  function startAnimText(a, b, d, e, f, h, g, l, m, k, p, n, r, u, v, t, w) {
      var q = getReadyAnimText();
      null != q && (q.text = a.toUpperCase(), q.x = b, q.y = d, q.xSpeed = e, q.ySpeed = f, q.fadeSpeed = h, q.fontSize = g * viewMult, q.scale = 1, q.maxScale = 1.6, q.minScale = 1, q.alpha = 1, q.scaleSpeed = l, q.useStart = m, q.fadeDelay = k, q.removable = p, q.moveDelay = n, q.alpha = u, q.color = v, q.textType = t, q.cachedImage = renderShadedAnimText(q.text, q.fontSize, q.color, w, r), q.active = !0)
  }

  function startBigAnimText(a, b, d, e, f, h, g, l) {
      deactiveAnimTexts("big") && (0 < a.length && startAnimText(a, maxScreenWidth / 2, bigTextY, 0, -.1, .0025, bigTextSize * l, e ? .005 : 0, !1, d, g, d, "Italic ", 1, f, "big", 8), 0 < b.length && startAnimText(b, maxScreenWidth / 2, bigTextY + textGap * viewMult * l, 0, -.04, .0025, medTextSize / 2 * l, e ? .003 : 0, !1, d, g, d, "Italic ", 1, h, "big", 8))
  }

  function startMovingAnimText(a, b, d, e, f) {
      b += randomInt(-25, 25);
      d += randomInt(-20, 5);
      startAnimText(a, b, d, 0, -.15, .0025, maxScreenHeight / 26 + f, .005, !0, 350, !1, 0, "", 1, e, "moving", 5)
  }

  function deactiveAnimTexts(a) {
      for (var b = 0; b < animTexts.length; ++b)
          if (animTexts[b].active)
              if (animTexts[b].removable) animTexts[b].active = !1;
              else if (animTexts[b].textType == a) return !1;
      return !0
  }

  function deactiveAllAnimTexts() {
      for (var a = 0; a < animTexts.length; ++a) animTexts[a].active = !1
  }
  var cachedTextRenders = [],
      cachedText = tmpIndex = null;

  function renderShadedAnimText(a, b, d, e, f) {
      tmpIndex = a + "" + b + "" + d + "" + f;
      cachedText = cachedTextRenders[tmpIndex];
      if (void 0 == cachedText) {
          var h = document.createElement("canvas"),
              g = h.getContext("2d");
          g.imageSmoothingEnabled = !1;
          g.webkitImageSmoothingEnabled = !1;
          g.mozImageSmoothingEnabled = !1;
          g.textAlign = "center";
          g.font = f + b + "px mainFont";
          h.width = 1.08 * g.measureText(a).width;
          h.height = 1.8 * b + e;
          g.fillStyle = shadeColor(d, -18);
          g.font = f + b + "px mainFont";
          g.textBaseline = "middle";
          g.textAlign = "center";
          for (var l = 1; l < e; ++l) g.fillText(a,
              h.width / 2, h.height / 2 + l);
          g.fillStyle = d;
          g.font = f + b + "px mainFont";
          g.textBaseline = "middle";
          g.textAlign = "center";
          g.fillText(a, h.width / 2, h.height / 2);
          cachedText = h;
          cachedTextRenders[tmpIndex] = cachedText
      }
      return cachedText
  }
  for (var cachedParticles = [], particleIndex = 0, i = 0; 700 > i; ++i) cachedParticles.push(new Particle);

  function updateParticles(a, b) {
      for (var d = 0; d < cachedParticles.length; ++d)(showParticles || cachedParticles[d].forceShow) && cachedParticles[d].active && canSee(cachedParticles[d].x - startX, cachedParticles[d].y - startY, cachedParticles[d].scale, cachedParticles[d].scale) ? b == cachedParticles[d].layer && (cachedParticles[d].update(a), cachedParticles[d].draw()) : cachedParticles[d].active = !1;
      graph.globalAlpha = 1
  }

  function Particle() {
      this.rotation = this.initScale = this.scale = this.dir = this.initSpeed = this.speed = this.y = this.x = 0;
      this.active = !1;
      this.layer = this.spriteIndex = 0;
      this.alpha = 1;
      this.fadeSpeed = 0;
      this.forceShow = this.checkCollisions = !1;
      this.tmpScale = this.maxDuration = this.duration = 0;
      this.update = function (a) {
          this.active && (0 < this.maxDuration && (this.duration += a, this.tmpScale = 1 - this.duration / this.maxDuration, this.tmpScale = 0 > this.tmpScale ? 0 : this.tmpScale, this.scale = this.initScale * this.tmpScale, 1 > this.scale && (this.active = !1), this.speed = this.initSpeed * this.tmpScale, .01 >= this.speed ? this.speed = 0 : (this.x += this.speed * a * mathCOS(this.dir), this.y += this.speed * a * mathSIN(this.dir)), this.duration >= this.maxDuration && (this.active = !1)), 0 < this.alpha && (this.alpha -= this.fadeSpeed * a), 0 >= this.alpha && (this.alpha = 0, this.active = !1), this.checkCollisions && this.checkInWall())
      };
      this.draw = function () {
          this.active && null != particleSprites[this.spriteIndex] && IsImageOk(particleSprites[this.spriteIndex]) && (graph.globalAlpha = this.alpha, 0 != this.rotation ?
              (graph.save(), graph.translate(this.x - startX, this.y - startY), graph.rotate(this.rotation), graph.drawImage(particleSprites[this.spriteIndex], -(this.scale / 2), -(this.scale / 2), this.scale, this.scale), graph.restore()) : graph.drawImage(particleSprites[this.spriteIndex], this.x - startX - this.scale / 2, this.y - startY - this.scale / 2, this.scale, this.scale))
      };
      this.checkInWall = function () {
          for (var a = 0; a < gameMap.tiles.length; ++a) gameMap.tiles[a].wall && gameMap.tiles[a].hasCollision && (tmpTl = gameMap.tiles[a], this.x >= tmpTl.x && this.x <=
              tmpTl.x + tmpTl.scale && this.y > tmpTl.y && this.y < tmpTl.y + tmpTl.scale - player.height && (this.active = !1))
      }
  }

  function getReadyParticle() {
      particleIndex++;
      particleIndex >= cachedParticles.length && (particleIndex = 0);
      return cachedParticles[particleIndex]
  }
  var tmpParticle = null;

  function particleCone(a, b, d, e, f, h, g, l, m) {
      if (showParticles)
          for (var k = 0; k < a; ++k) tmpParticle = getReadyParticle(), tmpParticle.forceShow = !1, tmpParticle.checkCollisions = !1, tmpParticle.x = b, tmpParticle.y = d, tmpParticle.rotation = 0, tmpParticle.alpha = 1, tmpParticle.speed = 0, tmpParticle.fadeSpeed = 0, tmpParticle.initSpeed = 0, tmpParticle.initScale = randomFloat(3, 9), tmpParticle.spriteIndex = 0, tmpParticle.maxDuration = -1, tmpParticle.duration = 0, 0 == k && 2 == l && m ? (tmpParticle.spriteIndex = 3, tmpParticle.layer = 0) : (tmpParticle.dir =
              e + randomFloat(-f, f), tmpParticle.initScale = g * randomFloat(1.5, 1.8), tmpParticle.initSpeed = h * randomFloat(.3, 1.3), tmpParticle.maxDuration = 360 * randomFloat(.8, 1.1), tmpParticle.spriteIndex = l, tmpParticle.layer = randomInt(0, 1)), tmpParticle.scale = tmpParticle.initScale, tmpParticle.active = !0
  }
  var liquidSpread = 35;

  function createLiquid(a, b, d, e) {
      tmpParticle = getReadyParticle();
      tmpParticle.x = a + randomFloat(-liquidSpread, liquidSpread);
      tmpParticle.y = b + randomFloat(-liquidSpread, liquidSpread);
      tmpParticle.initSpeed = 0;
      tmpParticle.maxDuration = -1;
      tmpParticle.duration = 0;
      tmpParticle.initScale = randomFloat(60, 150);
      tmpParticle.scale = tmpParticle.initScale;
      tmpParticle.rotation = randomInt(0, 5);
      tmpParticle.alpha = randomFloat(.3, .5);
      tmpParticle.fadeSpeed = 2E-5;
      tmpParticle.checkCollisions = !1;
      tmpParticle.spriteIndex = randomInt(e, e + 1);
      tmpParticle.layer = 0;
      tmpParticle.forceShow = !1;
      tmpParticle.active = !0
  }
  var tmpDist = 0,
      maxShakeDist = 2E3,
      maxExplosionDuration = 400,
      maxShake = 9,
      tmpShake = 0,
      tmpDir = 0;

  function createExplosion(a, b, d) {
      tmpDist = getDistance(a, b, player.x, player.y);
      tmpDist <= maxShakeDist && (tmpDir = getAngle(a, player.x, b, player.y), screenShake(d * maxShake * (1 - tmpDist / maxShakeDist), tmpDir));
      playSound("explosion", a, b);
      createSmokePuff(a, b, d, !0, 1)
  }

  function createSmokePuff(a, b, d, e, f) {
      createFlash(a, b, d);
      for (var h = 0; 30 > h; ++h) {
          tmpParticle = getReadyParticle();
          tmpParticle.dir = mathRound(randomFloat(-mathPI, mathPI) / (mathPI / 3)) * (mathPI / 3);
          tmpParticle.forceShow = !0;
          tmpParticle.spriteIndex = 2;
          tmpParticle.checkCollisions = !0;
          tmpParticle.alpha = 1;
          tmpParticle.fadeSpeed = 0;
          tmpParticle.initSpeed = 0;
          tmpParticle.maxDuration = -1;
          tmpParticle.duration = 0;
          tmpParticle.layer = 1;
          tmpParticle.rotation = 0;
          if (0 == h && e) tmpParticle.x = a, tmpParticle.y = b, tmpParticle.initScale = randomFloat(50,
              60) * d, tmpParticle.rotation = randomInt(0, 5), tmpParticle.speed = 0, tmpParticle.fadeSpeed = 2E-4, tmpParticle.checkCollisions = !1, tmpParticle.spriteIndex = 6, tmpParticle.layer = 0;
          else if (10 >= h) tmpDist = h * d, tmpParticle.x = a + tmpDist * mathCOS(tmpParticle.dir), tmpParticle.y = b + tmpDist * mathSIN(tmpParticle.dir), tmpParticle.initScale = randomFloat(30, 33) * d, tmpParticle.initSpeed = 3 / tmpParticle.initScale * d * f, tmpParticle.maxDuration = .8 * maxExplosionDuration;
          else {
              tmpDist = randomFloat(0, 10) * d;
              tmpParticle.x = a + tmpDist * mathCOS(tmpParticle.dir);
              tmpParticle.y = b + tmpDist * mathSIN(tmpParticle.dir);
              var g = randomFloat(.7, 1.4);
              tmpParticle.initScale = 11 * d * g;
              tmpParticle.initSpeed = 12 / tmpParticle.initScale * d / g * f;
              tmpParticle.maxDuration = maxExplosionDuration * g
          }
          tmpParticle.scale = tmpParticle.initScale;
          tmpParticle.active = !0
      }
  }

  function stillDustParticle(a, b, d) {
      tmpParticle = getReadyParticle();
      tmpParticle.x = a + randomInt(-10, 10);
      tmpParticle.y = b;
      tmpParticle.initScale = randomFloat(18, 25);
      tmpParticle.initSpeed = .05;
      tmpParticle.maxDuration = 600;
      tmpParticle.duration = 0;
      tmpParticle.dir = randomFloat(0, 2 * mathPI);
      tmpParticle.rotation = 0;
      tmpParticle.spriteIndex = 2;
      tmpParticle.layer = d ? 1 : 0;
      tmpParticle.alpha = 1;
      tmpParticle.fadeSpeed = 0;
      tmpParticle.checkCollisions = !1;
      tmpParticle.forceShow = d;
      tmpParticle.active = !0
  }
  var anglDif = 0,
      PI2 = 2 * mathPI;

  function getAngleDifference(a, b) {
      anglDif = mathABS(b - a) % PI2;
      return anglDif > mathPI ? PI2 - anglDif : anglDif
  }

  function jsonByteCount(a) {
      return byteCount(JSON.stringify(a))
  }

  function byteCount(a) {
      return encodeURI(a).split(/%..|./).length - 1
  }

  function getDistance(a, b, d, e) {
      return mathSQRT(mathPOW(d - a, 2) + mathPOW(e - b, 2))
  }

  function getAngle(a, b, d, e) {
      return mathATAN2(e - b, d - a)
  }

  function shadeColor(a, b) {
      var d = parseInt(a.substring(1, 3), 16),
          e = parseInt(a.substring(3, 5), 16),
          f = parseInt(a.substring(5, 7), 16),
          d = parseInt(d * (100 + b) / 100),
          e = parseInt(e * (100 + b) / 100),
          f = parseInt(f * (100 + b) / 100),
          d = 255 > d ? d : 255,
          e = 255 > e ? e : 255,
          f = 255 > f ? f : 255,
          d = 1 == d.toString(16).length ? "0" + d.toString(16) : d.toString(16),
          e = 1 == e.toString(16).length ? "0" + e.toString(16) : e.toString(16),
          f = 1 == f.toString(16).length ? "0" + f.toString(16) : f.toString(16);
      return "#" + d + e + f
  }

  function randomFloat(a, b, d) {
      return a + Math.random() * (b - a)
  }

  function randomInt(a, b, d) {
      return mathFloor(Math.random() * (b - a + 1)) + a
  }

  function linearInterpolate(a, b, d) {
      var e = a - b;
      return e * e > d * d ? b + d : a
  }
  var then = Date.now();
  window.requestAnimFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
          window.setTimeout(a, 1E3 / targetFPS)
      }
  }();

  function callUpdate() {
      requestAnimFrame(callUpdate);
      currentTime = Date.now();
      elapsed = currentTime - then;
      elapsed > 1E3 / targetFPS && (then = currentTime - elapsed % (1E3 / targetFPS), updateGameLoop())
  }
  callUpdate();

  document.getElementById('mapFileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const mapData = JSON.parse(e.target.result);
            if(validateMapData(mapData)) {
                customMapData = mapData;
                startGame(0, true); // Start with custom map flag
            } else {
                alert('Invalid map format');
            }
        } catch(err) {
            alert('Error loading map: ' + err.message);
        }
    };
    reader.readAsText(file);
});
