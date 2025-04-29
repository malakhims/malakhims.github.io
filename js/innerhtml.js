
    function displayContent(contentId) {
        var divs = document.getElementsByTagName("div");
        for(var i = 0; i < divs.length; i++) {
            divs[i].style.display = "none";
        }
        document.getElementById(contentId).style.display = "block";
    }

