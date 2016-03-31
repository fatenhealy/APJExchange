"use strict";
var http = require("http");
var imageSource = require("image-source");
var imageCache = require("ui/image-cache");
var officeRnDApi = "https://www.officernd.com/api/v1/";
var cache = new imageCache.Cache();
exports.defaultNotFoundImageSource = imageSource.fromFile("~/images/no-map.png");
cache.maxRequests = 5;
function getImage(uri, done) {
    var source = cache.get(uri);
    if (source) {
        done(source);
    }
    else {
        cache.push({
            key: uri,
            url: uri,
            completed: function (result, key) {
                if (key === uri) {
                    done(result);
                }
            }
        });
    }
}
function getRoomImage(info, update) {
    var getRoomImageUri;
    if (info.url) {
        getRoomImageUri = info.url;
    }
    else {
        getRoomImageUri = officeRnDApi + "rooms/" + info.roomId + "/export-uri?theme=" + info.theme;
    }
    console.log("Loading: " + getRoomImageUri);
    http.getJSON(getRoomImageUri)
        .then(function (res) {
        var uri = "https:" + res.uri;
        // TODO: Read room name from the endpoint
        console.log("Loading image: " + uri);
        getImage(uri, function (image) {
            console.log("Image downloaded");
            update(image);
        });
    }, function (err) {
        console.log("ERROR: " + err);
        update(exports.defaultNotFoundImageSource);
    });
}
exports.getRoomImage = getRoomImage;
//# sourceMappingURL=officeRnDApi.js.map