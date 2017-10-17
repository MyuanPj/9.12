(function (window) {
    function Flicker(ele) {
        this.ele = ele;
        if (getComputedStyle(this.ele).position == "static") {
            this.ele.style.position = "relative";
        }
        this.box = document.createElement("div");
        this.box.style.position = "absolute";
        this.box.style.left = "0";
        this.box.style.top = "0";
        this.box.style.margin = "0";
        // this.timer = null;
        this.box.style.zIndex = 10000000;
        this.box.style.width = this.ele.offsetWidth + "px";
        this.box.style.height = this.ele.offsetHeight + "px";
        this.ele.appendChild(this.box);
        this.ele.onmouseover = this.flick.bind(this);
    }
    Flicker.prototype.timer = null;
    Flicker.prototype.flick = function () {
        var pos = 0;
        var speed = 0;
        var that = this;
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            speed += 0.01;
            pos += speed;
            that.box.style.background = "linear-gradient(135deg,rgba(255,255,255,0) " + (pos - 20) + "%, rgba(255,255,255,0.3) " + (pos - 10) + "%, rgba(255,255,255,0) " + pos + "%)";
            if (pos >= 120) {
                clearInterval(that.timer);
            }
        }, 1);
    }
    window.Flicker = Flicker;
})(window);
(function (window) {
    function Floor(id) {
        this.ele = document.getElementById(id);
        this.li = this.ele.getElementsByTagName("li");
        this.a = this.ele.getElementsByTagName("a");
        this.topDis = -547;
        this.bottomDis = 800;
        this.timerStart = null;
        this.timerEnd = null;
        this.timerMain = null;
        this.speed = [];
        this.dis = [];
        this.opacity = [];
        this.startOrEnd = true;
        this.startIsEnd = false;
        this.init();
    }
    Floor.prototype.init = function () {
        var that = this;
        this.ele.style.position = "fixed";
        this.ele.style.height = 38 * this.li.length + "px";
        this.ele.style.width = "80px";
        this.ele.style.border = "1px solid rgba(0,0,0,0)";
        this.ele.style.borderRadius = "5px";
        this.ele.style.top = "14%";
        this.ele.style.right = "50%";
        this.ele.style.transform = "translateX(-520px)";
        this.ele.style.padding = "6px 0";
        for (var i = 0; i < this.li.length; i++) {
            this.speed[i] = 0;
            this.dis[i] = 0;
            this.li[i].style.boxSizing = "border-box";
            this.li[i].style.position = "fixed";
            this.li[i].style.top = i * 38 + 6 + this.topDis + "px";
            this.li[i].style.left = "9px";
            this.li[i].style.backgroundColor = "rgba(255,255,255,0)";
            this.li[i].style.height = "38px";
            this.li[i].style.font = " 700 12px/37px 'Microsoft YaHei'";
            this.li[i].style.width = "60px";
            this.li[i].style.textAlign = "center";
            this.li[i].style.borderBottom = "1px solid black";
            this.a[i].style.display = "block";
            this.a[i].style.width = "68px";
            this.a[i].style.height = "38px";
            this.a[i].style.backgroundColor = "#f10180";
            this.a[i].style.borderRadius = "5px";
            this.a[i].style.color = "white";
            this.a[i].style.marginLeft = "-4px";
            this.li[i].style.opacity = 1;
            this.opacity[i] = 1;
            this.li[i].onclick = (function (i) {
                return function () {
                    var target = 1;
                    switch (i) {
                        case 0:
                            target = 1100;
                            break;
                        case 1:
                            target = 2748;
                            break;
                        case 2:
                            target = 7350;
                            break;
                        case 3:
                            target = 7780;
                            break;
                        case 4:
                            target = 8140;
                            break;
                        case 5:
                            target = 8560;
                            break;
                        case 6:
                            target = 9080;
                            break;
                        case 7:
                            target = 9400;
                            break;
                        case 8:
                            target = 9820;
                            break;
                        case 9:
                            target = 10240;
                            break;
                        case 10:
                            target = 10660;
                            break;
                        case 11:
                            target = 0;
                            break;
                    }
                    var speed = 0;
                    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
                    clearInterval(that.timerMain);
                    that.timerMain = setInterval(function () {
                        if (document.documentElement.scrollTop) {
                            speed = (target - document.documentElement.scrollTop) * 0.01;
                            // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                            if (parseInt(document.documentElement.scrollTop * speed / Math.abs(speed)) < parseInt(target * speed / Math.abs(speed))) {
                                document.documentElement.scrollTop = document.documentElement.scrollTop + speed;
                            } else {
                                clearInterval(that.timerMain);
                            }
                        } else if (document.body.scrollTop) {
                            speed = (target - document.body.scrollTop) * 0.01;
                            // speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                            if (parseInt(document.body.scrollTop * speed / Math.abs(speed)) < parseInt(target * speed / Math.abs(speed))) {
                                document.body.scrollTop = document.body.scrollTop + speed;
                            } else {
                                clearInterval(that.timerMain);
                                that.link();
                            }
                        }
                    }, 1)
                    return false;
                }
            })(i);
        }
    }
    Floor.prototype.start = function () {
        this.startOrEnd = false;
        var that = this;
        var count = 0;
        if (this.timerStart == null && this.dis[0] <= -that.topDis) {
            this.timerStart = setInterval(function () {
                count++;
                for (var i = 0; i < that.li.length; i++) {
                    if (count > (that.li.length - i * i / (that.li.length - 1)) * 20) {
                        that.dis[i] += that.speed[i];
                        that.li[i].style.top = i * 38 + 6 + that.topDis + that.dis[i] + "px";
                        that.speed[i] += (that.li.length - i + 1) * 0.3;
                        if (that.dis[i] >= -that.topDis) {
                            that.li[i].style.top = i * 38 + 6 + "px";
                            that.opacity[i] -= 0.01;
                            that.ele.style.borderColor = "rgba(0,0,0," + (1 - that.opacity[0]) + ")";
                            that.a[i].style.backgroundColor = "rgba(241,1,128," + that.opacity[i] + ")";
                            that.a[i].style.color = "black";
                            that.speed[i] = 0;
                            if (that.opacity[i] <= 0) {
                                that.a[i].style.backgroundColor = "rgba(241,1,128,0)";
                            }
                        }
                        if (that.opacity[0] <= 0) {
                            clearInterval(that.timerStart);
                            that.timerStart = null;
                            console.log("haha");
                            for (var i = 0; i < that.li.length; i++) {
                                that.opacity[i] = 1;
                            }
                            that.startIsEnd = true;
                            that.link();
                        }
                    }
                }
            }, 1);
        }
    }
    Floor.prototype.end = function () {
        this.startIsEnd = false;
        var that = this;
        var count = 0;
        var tempOpacity = 1;
        if (this.startOrEnd == false) {
            this.startOrEnd = true;
            this.timerEnd = setInterval(function () {
                count++;
                tempOpacity -= 0.01;
                that.ele.style.borderColor = "rgba(0,0,0," + tempOpacity + ")";
                for (var i = 0; i < that.li.length; i++) {
                    if (count > (that.li.length - i * i / (that.li.length - 1)) * 15) {
                        that.dis[i] += that.speed[i];
                        that.li[i].style.top = i * 38 + 6 + that.topDis + that.dis[i] + "px";
                        that.speed[i] += (that.li.length - i + 1) * 0.01;
                        that.opacity[i] -= 0.05;
                        console.log(that.opacity[0]);
                        that.li[i].style.opacity = that.opacity[i];
                        if (that.dis[i] >= that.bottomDis - that.topDis) {
                            that.li[i].style.top = i * 38 + 6 + that.topDis + "px";
                            that.a[i].style.backgroundColor = "rgba(0,0,0,0)";
                            that.li[i].style.backgroundColor = "rgba(0,0,0,0)";
                            that.a[i].style.color = "black";
                            that.speed[i] = 0;
                        }
                        if (that.dis[0] >= that.bottomDis - that.topDis) {
                            clearInterval(that.timerEnd);
                            that.timerEnd = null;
                            that.init();
                        }
                    }
                }
            }, 1);
        }
    }
    Floor.prototype.link = function () {
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < this.li.length; i++) {
            this.a[i].style.backgroundColor = "rgba(241,1,128,0)";
            this.a[i].style.color = "black";
            this.li[i].style.borderBottom = "1px solid black";
        }
        if (scrollT < 2648 && scrollT > 1100) {
            this.a[0].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[0].style.color = "white";
        } else if (scrollT < 7150) {
            this.a[1].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[1].style.color = "white";
            this.li[0].style.borderBottom = "0";
        } else if (scrollT < 7700) {
            this.a[2].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[2].style.color = "white";
            this.li[1].style.borderBottom = "0";
        } else if (scrollT < 8040) {
            this.a[3].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[3].style.color = "white";
            this.li[2].style.borderBottom = "0";
        } else if (scrollT < 8360) {
            this.a[4].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[4].style.color = "white";
            this.li[3].style.borderBottom = "0";
        } else if (scrollT < 8980) {
            this.a[5].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[5].style.color = "white";
            this.li[4].style.borderBottom = "0";
        } else if (scrollT < 9400) {
            this.a[6].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[6].style.color = "white";
            this.li[5].style.borderBottom = "0";
        } else if (scrollT < 9820) {
            this.a[7].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[7].style.color = "white";
            this.li[6].style.borderBottom = "0";
        } else if (scrollT < 10240) {
            this.a[8].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[8].style.color = "white";
            this.li[7].style.borderBottom = "0";
        } else if (scrollT < 10660) {
            this.a[9].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[9].style.color = "white";
            this.li[8].style.borderBottom = "0";
        } else if (scrollT < 12080) {
            this.a[10].style.backgroundColor = "rgba(241,1,128,1)";
            this.a[10].style.color = "white";
            this.li[9].style.borderBottom = "0";
        }
    }
    window.Floor = Floor;
})(window);
(function (window) {
    function CategoryMainAddMore(categoryMain, count) {
        this.categoryMain = categoryMain;
        this.typeBox = [];
        this.newBox = [];
        for (var i = 0; i < count; i++) {
            this.typeBox[i] = categoryMain.children[0];
            this.newBox[i] = this.typeBox[i].cloneNode(true);
            this.categoryMain.appendChild(this.newBox[i]);
            if (i % 2 == 0) {
                this.newBox[i].className = "r";
            }
            this.flicker = new Flicker(this.newBox[i]);
        }

    }
    window.CategoryMainAddMore = CategoryMainAddMore;
})(window);
(function (window) {
    function Lbt(id) {
        this.ele = document.getElementById(id);
        this.lbtn1 = document.getElementById("lbtn1");
        this.rbtn1 = document.getElementById("rbtn1");
        this.timer = null;
        this.timer2 = null;
        this.timer3 = null;
        this.timerAll = null;
        this.n = 1;
        this.left = 15;
        this.ele.onmouseover = this.mouseover.bind(this);
        this.ele.onmouseout = this.mouseout.bind(this);
        this.ele.children[0].onmouseenter = this.imgMouseover.bind(this);
        this.ele.children[0].onmouseleave = this.imgMouseout.bind(this);

        this.lbtn1.onclick = this.lbtnClick.bind(this);
        this.rbtn1.onclick = this.rbtnClick.bind(this);
        this.newBox = document.createElement("div");
        this.newBox.style.position = "absolute";
        this.newBox.style.bottom = "-5px";
        this.newBox.style.left = "15px";
        this.newBox.style.width = "195px";
        this.newBox.style.height = "5px";
        this.newBox.style.backgroundColor = "red";
        this.ele.appendChild(this.newBox);
        for (var i = 0; i < this.ele.children[1].children.length; i++) {
            this.ele.children[1].children[i].onmouseenter = this.paramMouseover.bind(this, i);
        }
        this.init();
    }

    Lbt.prototype.mouseover = function (e) {
        clearInterval(this.timerAll);
        e = e || event;
        var k = 0.3;
        var that = this;
        if (e.target.id == "lbtn1" || e.target.id == "rbtn1") {
            clearInterval(that.timer);
            this.timer = setInterval(function () {
                k += 0.02;
                e.target.style.opacity = k;
                if (e.target.style.opacity >= 0.7) {
                    e.target.style.opacity = 0.7;
                    clearInterval(that.timer);
                }
            }, 20);
        }
    }
    Lbt.prototype.mouseout = function (e) {
        e = e || event;
        var k = 0.7;
        if (e.target.id == "lbtn1" || e.target.id == "rbtn1") {
            clearInterval(this.timer);
            this.timer = setInterval(function () {
                k -= 0.02;
                e.target.style.opacity = k;
                if (e.target.style.opacity <= 0.3) {
                    e.target.style.opacity = 0.3;
                    clearInterval(this.timer);
                }
            }, 20);
        }
    }
    Lbt.prototype.imgMouseout = function (e) {
        this.init();
        clearInterval(this.timer2);
        var that = this;
        this.timer2 = setInterval(function () {
            document.getElementById("lbtn1").style.width = parseInt(getStyle(document.getElementById("lbtn1"), "width")) - 3 + "px";
            document.getElementById("rbtn1").style.width = parseInt(getStyle(document.getElementById("lbtn1"), "width")) - 3 + "px";
            if (parseInt(getStyle(document.getElementById("lbtn1"), "width")) <= 0) {
                document.getElementById("lbtn1").style.width = '0px';
                clearInterval(that.timer2);
            }
        }, 20)
    }
    Lbt.prototype.imgMouseover = function (e) {
        clearInterval(this.timerAll);
        clearInterval(this.timer2);
        var that = this;
        this.timer2 = setInterval(function () {
            document.getElementById("lbtn1").style.width = parseInt(getStyle(document.getElementById("lbtn1"), "width")) + 3 + "px";
            document.getElementById("rbtn1").style.width = parseInt(getStyle(document.getElementById("lbtn1"), "width")) + 3 + "px";
            if (parseInt(getStyle(document.getElementById("lbtn1"), "width")) >= 34) {
                document.getElementById("lbtn1").style.width = '34px';
                clearInterval(that.timer2);
            }
        }, 20)
    }
    Lbt.prototype.paramMouseover = function (index) {
        // clearInterval(this.timerAll);
        var that = this;
        var temp = 0;
        // for (var i = 0; i < that.ele.children[1].children.length; i++) {
        //     that.ele.children[0].children[i].style.zIndex = "0";
        // }
        clearInterval(that.timer3);
        clearInterval(that.timer4);
        if (getStyle(that.ele.children[0].children[index], "z-index") != that.n - 1) {
            that.ele.children[0].children[index].style.zIndex = that.n;
            that.n++;
            that.ele.children[0].children[index].style.opacity = 0;
            this.timer3 = setInterval(function () {
                temp++;
                that.ele.children[0].children[index].style.opacity = temp / 100;
                if (temp >= 100) {
                    that.ele.children[0].children[index].style.opacity = 1;
                    clearInterval(that.timer3);
                }
            }, 1);
            this.timer4 = setInterval(function () {
                if (that.left > 195 * index + 15) {
                    that.left -= 4 * (5 - index);
                    that.newBox.style.left = that.left + "px";
                    if (that.left <= 195 * index + 15) {
                        that.left = 195 * index + 15;
                        that.newBox.style.left = that.left + "px";
                        clearInterval(that.timer4);
                    }
                } else {
                    that.left += 4 * (index + 1);
                    that.newBox.style.left = that.left + "px";
                    if (that.left >= 195 * index + 15) {
                        that.left = 195 * index + 15;
                        that.newBox.style.left = that.left + "px";
                        clearInterval(that.timer4);
                    }
                }
            }, 2);
        }
    }
    Lbt.prototype.lbtnClick = function () {
        if (((this.left - 15) / 195 - 1) < 0) {
            this.ele.children[1].children[this.ele.children[1].children.length - 1].onmouseenter();
        } else {
            this.ele.children[1].children[(this.left - 15) / 195 - 1].onmouseenter();
        }
    }
    Lbt.prototype.rbtnClick = function () {
        if (((this.left - 15) / 195 - 1) > this.ele.children[1].children.length - 3) {
            this.ele.children[1].children[0].onmouseenter();
            console.log(this.left);
        } else {
            this.ele.children[1].children[(this.left - 15) / 195 + 1].onmouseenter();
        }
    }
    Lbt.prototype.init = function () {
        var that = this;
        clearInterval(this.timerAll);
        this.timerAll = setInterval(function () {
            that.rbtnClick();
        }, 2000);
    }
    window.Lbt = Lbt;
})(window);
(function (window) {
    function XinTeMai(ele) {
        this.ele = ele;
        this.child = this.ele.children;
        this.newBox1 = [];
        this.newImg1 = [];
        this.newP1 = [];
        this.newP2 = [];
        this.init();
    }
    XinTeMai.prototype.init = function () {
        for (var i = 0; i < this.child.length; i++) {
            this.newBox1[i] = document.createElement("div");
            this.newBox1[i].style.width = "320px";
            this.newBox1[i].style.height = "100px";
            this.newBox1[i].style.backgroundColor = "white";
            this.newBox1[i].style.opacity = 0.8;
            this.newBox1[i].style.marginLeft = "85px";
            this.newBox1[i].style.marginTop = "180px";
            this.newBox1[i].style.borderRadius = "5px";
            this.newBox1[i].style.textAlign = "center";

            this.newImg1[i] = document.createElement("img");
            this.newBox1[i].appendChild(this.newImg1[i]);
            this.newImg1[i].src = "./img/title20.png";
            this.newImg1[i].style.width = "100px";
            this.newImg1[i].style.height = "50px";

            this.newP1[i] = document.createElement("p");
            this.newP1[i].innerHTML = "冬季上新 为爱心跳";
            this.newP1[i].style.fontSize = "14px";
            this.newP1[i].style.fontWeight = "700";
            this.newBox1[i].appendChild(this.newP1[i]);

            this.newP2[i] = document.createElement("p");
            this.newP2[i].innerHTML = "满1799减100，满2499减200，满299...";
            this.newP2[i].style.fontSize = "12px";
            this.newBox1[i].appendChild(this.newP2[i]);

            this.child[i].appendChild(this.newBox1[i]);
            this.child[i].style.background = " rgba(255,255,255,0.5) url(./img/img50.jpg)";
            this.child[i].style.backgroundSize = "100%";
            console.log("hehe");
        }
    }
    window.XinTeMai = XinTeMai;
})(window);
(function (window) {
    function XinTeMai(ele) {
        this.ele = ele;
        this.child = this.ele.children;
        this.newBox1 = [];
        this.newImg1 = [];
        this.newP1 = [];
        this.newP2 = [];
        this.init();
    }
    XinTeMai.prototype.init = function () {
        for (var i = 0; i < this.child.length; i++) {
            this.newBox1[i] = document.createElement("div");
            this.newBox1[i].style.width = "320px";
            this.newBox1[i].style.height = "100px";
            this.newBox1[i].style.backgroundColor = "white";
            this.newBox1[i].style.opacity = 0.8;
            this.newBox1[i].style.marginLeft = "85px";
            this.newBox1[i].style.marginTop = "180px";
            this.newBox1[i].style.borderRadius = "5px";
            this.newBox1[i].style.textAlign = "center";

            this.newImg1[i] = document.createElement("img");
            this.newBox1[i].appendChild(this.newImg1[i]);
            this.newImg1[i].src = "./img/title20.png";
            this.newImg1[i].style.width = "100px";
            this.newImg1[i].style.height = "50px";

            this.newP1[i] = document.createElement("p");
            this.newP1[i].innerHTML = "冬季上新 为爱心跳";
            this.newP1[i].style.fontSize = "14px";
            this.newP1[i].style.fontWeight = "700";
            this.newBox1[i].appendChild(this.newP1[i]);

            this.newP2[i] = document.createElement("p");
            this.newP2[i].innerHTML = "满1799减100，满2499减200，满299...";
            this.newP2[i].style.fontSize = "12px";
            this.newBox1[i].appendChild(this.newP2[i]);

            this.child[i].appendChild(this.newBox1[i]);
            this.child[i].style.background = " rgba(255,255,255,0.5) url(./img/img50.jpg)";
            this.child[i].style.backgroundSize = "100%";
        }
    }
    window.XinTeMai = XinTeMai;
})(window);
(function (window) {
    function CategoryAddMore(category) {
        this.category = category;
        this.newCategory = this.category.cloneNode(true);
        this.category.parentNode.appendChild(this.newCategory);
    }
    window.CategoryAddMore = CategoryAddMore;
})(window);
(function (window) {
    function MagTop(ele) {
        this.ele = ele;
        this.newBox = document.createElement("div");
        this.newBox.style.width = this.ele.style.width;
        this.newBox.style.height = "40px";
        this.newBox.style.display = "none";
        this.ele.parentNode.insertBefore(this.newBox, this.ele);
        bind(window, "scroll", this.scroll.bind(this));
        // window.onscroll = this.scroll.bind(this);
    }
    MagTop.prototype.scroll = function (e) {
        e = e || event;
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollT > 129) {
            this.ele.style.position = "fixed";
            this.ele.style.top = 0 + "px";
            this.ele.style.zIndex = 10000;
            this.ele.style.width = "100%";
            this.newBox.style.display = "block";
        } else {
            this.ele.style.position = "";
            this.newBox.style.display = "none";
        }
    }
    window.MagTop = MagTop;
})(window);