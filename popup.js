var respArray = [];

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.reddit.com/r/eyebleach/.json", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
        respArray = resp.data.children;

        for (var i = 0; i < respArray.length; i++) {
            try {
                console.log(respArray[i].data.url);
                var img = document.createElement("img");
                img.src = respArray[i].data.url;

                var ul = document.getElementById("imgList");
                var li = document.createElement("li");
                li.appendChild(img);
                ul.appendChild(li);


            } catch (err) {
                console.log(err);
            }
        };
    }
}
xhr.send();

var test = document.getElementById("p");
test.innerHTML = "Hei";
