var everlive = require("./everlive");
var el = new everlive("9qp2g3vrzo4gm6b7");
var i = 0;

// UPLOAD Sessions
var sessionsStatic = [
      {
        title: "Getting Started with ScreenBuilder",
        start: new Date(2016, 7, 12, 11, 45),
        end: new Date(2016, 7, 12, 12, 30),
        room: "Conference Room 1"
    }, {
        title: "Getting Started with AngularJS",
        start: new Date(2016, 7, 12, 11, 45),
        end: new Date(2016, 7, 12, 12, 30),
        room: "Conference Room 2"
    }];

var dataSessions = el.data('NextSessions');
for (i = 0; i < sessionsStatic.length; i++) {
    dataSessions.create(sessionsStatic[i],
        function (data) {
            console.log("session added: " + JSON.stringify(data));
        },
        function (error) {
            console.log("error: " + error);
        });
}

// UPLOAD SPEAKERS
var speakersStatic = [
    {
        name: "Faten Healy",
        title: "Sales Engineer",
        company: "Progress",
        picture: "faten.jpg"
    }];

var data = el.data('NextSpeakers');
for (i = 0; i < speakersStatic.length; i++) {
    data.create(speakersStatic[i],
        function (data) {
            console.log("speaker added: " + JSON.stringify(data));
        },
        function (error) {
            console.log("error: " + error);
        });
}