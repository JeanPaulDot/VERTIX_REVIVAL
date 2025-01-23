// WAIT FOR WINDOW TO LOAD:
var socket;
var devTest = false;
var userNameVar = window.location.search.substring(1);
var userName = document.getElementById("userName");
var userClanName = document.getElementById("userClanName");
var userRank = document.getElementById("userRank");
var userWorldRank = document.getElementById("userWorldRank");
var userKDR = document.getElementById("userKDR");
var userLikes = document.getElementById("userLikes");
var userScore  = document.getElementById("userScore");
var serverMessage = document.getElementById("serverMessage");
var userKills  = document.getElementById("userKills");
var userDeaths = document.getElementById("userDeaths");
if (userNameVar == undefined || userNameVar == "") {
	serverMessage.innerHTML = "No profile Found.";
} else {
	window.onload = function () {
		$.get("/getIP", function (data) {
		    if (!socket) {
				var tmpIP = devTest ? 'localhost' : data.ip;
				socket = io.connect('http://' + tmpIP + ':' + data.port, {
					reconnection: false,
					forceNew: true,
					query: 'statUser=' + userNameVar
				});
				socket.on('getStats', function (stats, worked) {
					if (worked) {
						var tmpClan = stats.clan;
						if (tmpClan == "") {
							tmpClan = "NO CLAN";
						} else {
							tmpClan = "[" + tmpClan.toUpperCase() + "]";
						}
						userName.innerHTML = stats.name;
						userClanName.innerHTML = tmpClan;
						userRank.innerHTML = stats.rank;
						userWorldRank.innerHTML = "#" + stats.world;
						userKDR.innerHTML = (Math.max(1, stats.kills) / Math.max(1, stats.deaths)).toFixed(2);
						userScore.innerHTML = abbreviateNumber(stats.score);
						userLikes.innerHTML = abbreviateNumber(stats.likes);
						userKills.innerHTML = abbreviateNumber(stats.kills);
						userDeaths.innerHTML = abbreviateNumber(stats.deaths);
						loadSocialButtons(stats);
					} else {
						serverMessage.innerHTML = stats;
					}
					socket.disconnect();
				});
				socket.on('connect_failed', function () {
					serverMessage.innerHTML = "Connection Failed. Try again later.";
			    });
			}
		});
	}	
}
function loadSocialButtons(user) {
	twttr.widgets.createShareButton(encodeURI("http://vertix.io/profile.html?" + user.name), document.getElementById("twitterContainer"), {
	    text: "Check out my stats on Vertix Online:",
	    hashtags: "vertix.io",
	    size: "large"
	});
	if (user.channel != "") {
		gapi.ytsubscribe.render(document.getElementById('youtuberReplace'), {
			'channel': user.channel,
		    'layout': 'default'
		});	
	}
}
function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor(("" + value).length / 3);
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { 
            	break; 
            }
        }
        shortNum = shortValue.toFixed(2);
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
}