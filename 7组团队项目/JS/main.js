window.onload = function () {
    var oBox1 = document.getElementById("xtmbox");
    var oBox1XTM = new XinTeMai(oBox1);
    var oCtg1Main = document.getElementById("ctg1main");
    var newLbt = new Lbt("lbt1");
    var oFloor = new Floor('floor');
    bind(window,"scroll",function () {
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(oFloor.startIsEnd == true);
        // console.log(oFloor.startIsEnd);
        // console.log(scrollT);
        if (oFloor.startIsEnd == true) {
            oFloor.link();
        }
        if (scrollT > 1200) {
            oFloor.start();
        } else {
            if (oFloor.li[0].style.top != 6 + oFloor.topDis + "px") {
                oFloor.end();
            }
        }
    });
    bind(document,"mousewheel",function () {
        clearInterval(oFloor.timerMain);
    });
    var oCategory = document.getElementById("category1");
    var newFlickerCtg1 = new Flicker(oCategory.children[1].children[0]); 
    console.log(oCategory.children[1]);
    
    var newCtg3 = new CategoryAddMore(oCategory);
    newCtg3.newCategory.getElementsByTagName("h3")[0].style.background = "url(./img/title31.png)";
    newCtg3.newCategory.getElementsByTagName("h3")[0].style.backgroundSize = "100%";
    var newFlickerCtg3 = new Flicker(newCtg3.newCategory.children[1]); 
    var newCtg4 = new CategoryAddMore(oCategory);
    newCtg4.newCategory.getElementsByTagName("h3")[0].style.background = "url(./img/title32.png)";
    newCtg4.newCategory.getElementsByTagName("h3")[0].style.backgroundSize = "100%";
    var newFlickerCtg4 = new Flicker(newCtg4.newCategory.children[1]); 
    var newCtg5 = new CategoryAddMore(oCategory);
    newCtg5.newCategory.getElementsByTagName("h3")[0].style.background = "url(./img/title33.png)";
    newCtg5.newCategory.getElementsByTagName("h3")[0].style.backgroundSize = "112%";
    var newFlickerCtg5 = new Flicker(newCtg5.newCategory.children[1]); 
    var newCtg6 = new CategoryAddMore(oCategory);
    newCtg6.newCategory.getElementsByTagName("h3")[0].style.background = "url(./img/title34.png)";
    newCtg6.newCategory.getElementsByTagName("h3")[0].style.backgroundSize = "107%";
    var newFlickerCtg6 = new Flicker(newCtg6.newCategory.children[1]); 
    var newCtg7 = new CategoryAddMore(oCategory);
    newCtg7.newCategory.getElementsByTagName("h3")[0].style.background = "url(./img/title35.png)";
    newCtg7.newCategory.getElementsByTagName("h3")[0].style.backgroundSize = "100%";
    var newFlickerCtg7 = new Flicker(newCtg7.newCategory.children[1]); 
    var newCtg8 = new CategoryAddMore(oCategory);
    newCtg8.newCategory.getElementsByTagName("h3")[0].style.background = "url(./img/title36.png)";
    newCtg8.newCategory.getElementsByTagName("h3")[0].style.backgroundSize = "100%";
    var newFlickerCtg8 = new Flicker(newCtg8.newCategory.children[1]); 
    var newCtg9 = new CategoryAddMore(oCategory);
    newCtg9.newCategory.getElementsByTagName("h3")[0].style.background = "url(./img/title37.png)";
    newCtg9.newCategory.getElementsByTagName("h3")[0].style.backgroundSize = "113%";
    var newFlickerCtg9 = new Flicker(newCtg9.newCategory.children[1]); 
    var newCtg10 = new CategoryAddMore(oCategory);
    newCtg10.newCategory.getElementsByTagName("h3")[0].style.background = "url(./img/title38.png)";
    newCtg10.newCategory.getElementsByTagName("h3")[0].style.backgroundSize = "103%";
    var newFlickerCtg10 = new Flicker(newCtg10.newCategory.children[1]); 
    var newCtg2 = new CategoryAddMore(oCategory);
    newCtg2.category.children[1].id = "ctg2main";
    var oCtg2Main = document.getElementById("ctg2main");
    var newCtg2Main = new CategoryMainAddMore(oCtg2Main,30);
    var oMagTop = new MagTop(document.getElementsByTagName("nav")[0]);

    var oLbtImg = document.getElementById("lbt1").getElementsByTagName("ul")[0];
    // var oLbtImgFlicker = new Flicker(oLbtImg);
    var oXtmBox = document.getElementById("xtmbox").children;
    var oXtmBoxFlicker = [];
    console.log(oXtmBox);
    for (var i = 0; i < oXtmBox.length; i++) {
        oXtmBoxFlicker[i] = new Flicker(oXtmBox[i]);
    }   
}