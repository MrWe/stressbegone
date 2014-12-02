window.addEventListener('load', function(e) {
    var respArray = [];
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.reddit.com/r/eyebleach/.json", true);
    var img = document.getElementById("image");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // JSON.parse does not evaluate the attacker's scripts.
            var resp = JSON.parse(xhr.responseText);
            respArray = resp.data.children;
            getRandUrl(respArray);
        };
    }

    xhr.send();

    function getRandUrl(array) {
        try {
            var randURL = array[Math.floor((Math.random() * array.length) + 1)].data.url;
            console.log(randURL + "");
        } catch (err) {
            console.log(err);
        }
        if (checkImgUrl(randURL) === true) {
        }
    }

    function checkImgUrl(url) {
        img.src = url;
        image.onerror = function() {
            getRandUrl(respArray);
            console.log("fuck");
            return false;
        };
        return true;
    }


});
