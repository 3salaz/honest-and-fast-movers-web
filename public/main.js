var featuredVideo = document.getElementById("featuredVideo");
var featuredVideoTitle = document.getElementById("featuredVideoTitle");
var timeStampList = document.getElementById("timeStampList");

var pdf = document.getElementById("pdf");
var createList = document.createElement("LI");
var videos = [];

var tags = ["Manufaturing Week", "Guest Speakers", "Technology", "Health"];

// FIREBASE CONFIGURATION
var firebaseConfig = {
  apiKey: "AIzaSyAr_6YLjrmuD2BrQxlO8odnOZFjeARzdBM",
  authDomain: "earn-and-learn-6172e.firebaseapp.com",
  databaseURL: "https://earn-and-learn-6172e-default-rtdb.firebaseio.com",
  projectId: "earn-and-learn-6172e",
  storageBucket: "earn-and-learn-6172e.appspot.com",
  messagingSenderId: "629002563246",
  appId: "1:629002563246:web:690608ce280c51492d873f",
  measurementId: "G-DG0YFL0TB6",
};
// FUNCTIONS
function loadAllVideos() {
  $(".card").removeClass("hide");
  pdf.classList.add("hide");
}
function skipToTimeStamp(time) {
  var MintimeStamp = time.getAttribute("data-timeStamp");
  var timeStampArr = (MintimeStamp.split(':'));
  let minutesInSec = (timeStampArr[0]*60);
  var seconds = (timeStampArr[1]);
  var timeStamp = (parseInt(minutesInSec, 10) + parseInt(seconds, 10));
  console.log(timeStamp);
  featuredVideo.currentTime= timeStamp;
}
function skipToTime(time) {
  featuredVideo.currentTime = time;
}
function loadSlide() {
  $(".card").addClass("hide");
  pdf.classList.remove("hide");
}

function loadVideo(videoObject) {
  featuredVideoTitle.innerHTML = videos[videoObject][6][1];
  featuredVideo.src = videos[videoObject][16][1];
  var timeStampsName = videos[videoObject][0][1].split(",");
  var timeStamps = videos[videoObject][1][1].split(",");
  timeStampList.innerHTML = "";
  if (timeStamps[0] === "") {
    console.log("no timestamp 😢");
  } else {
    for (var i = 0; i < timeStamps.length; i++) {
      timeStamp = timeStamps[i];
      console.log(timeStamp);
      timeStampList.innerHTML += `<li data-timeStamp="${timeStamp}" onclick="skipToTimeStamp(this)" id="timeStamp${i}"><button class="timeStampBtn"><h5 class="timeStampName">${timeStampsName[i]}</h5><p>${timeStamp}</p></button></li>`;
    }
  }

  // Checking if pdf slides src is empty
  if (videos[videoObject][12][1] === "") {
    console.log("no slides 😢 ");
  } else {
    pdf.classList.remove("hide");
    pdf.src = videos[videoObject][12][1];
    $(".card").addClass("hide");
    // $("#buttons").addClass("hide");
  }
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase
  .database()
  .ref("videos")
  .on("value", function (snap) {
    snap.forEach(function (childNodes) {
      videos.push(
        Object.keys(childNodes.val()).map((key) => [
          Number(key),
          childNodes.val()[key],
        ])
      );
    });
    // console.log(videos);

    for (var i = 0; i < videos.length; i++) {
      var video = videos[i];
      var videoTitle = video[6][1];
      var videoLength = video[8][1];
      var videoTags = video[13][1];
      var videoThumbnail = video[14][1];

      $("#gallery").append(
        `<li id="card${i}" class="card" data-tags="${videoTags}" onclick="loadVideo(${i})"><img src="${videoThumbnail}"><div class="overlay"><h5>${videoTitle}</h5><p>${videoLength}</p></div></li>`
      );
    }
    var $cards = $("#gallery .card");
    var $buttons = $("#buttons");
    var tagged = {};

    $cards.each(function () {
      var card = this;
      var tags = $(this).data("tags");
      if (tags) {
        tags.split(",").forEach(function (tagName) {
          if (tagged[tagName] == null) {
            tagged[tagName] = [];
          }
          tagged[tagName].push(card);
        });
      }
    });
    $("<button />", {
      text: "Show All",
      class: "active",
      click: function () {
        $(this).addClass("active").siblings().removeClass("active");
        $cards.show();
      },
    }).appendTo($buttons);

    $.each(tagged, function (tagName) {
      $("<button/>", {
        text: tagName + " (" + tagged[tagName].length + ")",
        click: function () {
          $(this).addClass("active").siblings().removeClass("active");
          $cards.hide().filter(tagged[tagName]).show();
        },
      }).appendTo($buttons);
    });
  });
