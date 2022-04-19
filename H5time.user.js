 // ==UserScript==
// @name         H5time
// @version      1.0
// @description  H5播放器全屏模式下实时显示当前系统时间
// @author       AnnAngela
// @namespace    https://greasyfork.org/users/129402
// @mainpage     https://greasyfork.org/zh-CN/scripts/30367-bilibilitimer
// @supportURL   https://greasyfork.org/zh-CN/scripts/30367-bilibilitimer/feedback
// @license      GNU General Public License v3.0 or later
// @compatible   chrome 80
// @match        *://cdn.cdgouwu.com/m3u8/*
// @match        *://www.tvbmix.com/static/player/dplayer.html
// @match        *://player.xiadaex.com/*
// @match        *://php.gangju5.cc/*
// @match        *://www.btbdys.com/play/*
// @match        *://www.jinshier11.com/album/*
// @match        *://p1396.mmlllasjd.com/*
// @match        *://jx.huishij.com/yun/*
// @match        *://www.ixigua.com/*
// @match        *://*/*
// @require      https://code.jquery.com/jquery-1.12.4.min.js
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM.addStyle
// @grant        GM.setValue
// @grant        GM.getValue
// @icon         data:image/png;base64,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
// @icon64       data:image/png;base64,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
// ==/UserScript==
/* eslint-disable require-atomic-updates */
"use strict";
(() => {
    /* 防止重复加载 */
    if (unsafeWindow.BilibiliTimer) { return; }

    const multiValueKeys = ["exclude", "grant", "include", "match", "require", "resource"];
    const booleanValueKeys = ["noframes"];
    const script = {
        scriptMeta: {},
    };
    let GM4Detected = false;
    try {
        if (Object.prototype.toString.bind(GM)() === "[object Object]") {
            GM4Detected = true;
        } else {
            GM4Detected = false;
        }
    } catch (_) {
        GM4Detected = false;
    }
    script.scriptMetaStr = (GM4Detected ? GM.info : GM_info).scriptMetaStr;
    script.scriptMetaStr.split(/\n+/).forEach((str) => {
        const string = str.replace(/^\s*\/\/\s*/, "");
        const _temp = string.match(/^@([a-z\d:-]+) +(.+)$/i);
        if (!_temp) { return; }
        const key = _temp[1],
            value = _temp[2].trim();
        if (multiValueKeys.includes(key)) {
            if (script.scriptMeta[key]) {
                script.scriptMeta[key].push(value);
            } else {
                script.scriptMeta[key] = [value];
            }
        } else if (booleanValueKeys.includes(key)) {
            script.scriptMeta[key] = true;
        } else {
            script.scriptMeta[key] = value;
        }
    });
    /* eslint-disable require-await */
    script.addStyle = GM4Detected ? GM.addStyle : async (...args) => { return GM_addStyle(...args); };
    script.getValue = GM4Detected ? GM.getValue : async (...args) => { return GM_getValue(...args); };
    script.setValue = GM4Detected ? GM.setValue : async (...args) => { return GM_setValue(...args); };
    /* eslint-enable require-await */
   // script.setValue("autoHidden",false)
    unsafeWindow.console.info(GM_listValues())
    unsafeWindow.BilibiliTimerUninit = false;
    unsafeWindow.BilibiliTimer = {};
    unsafeWindow.BilibiliTimer._loop_count = 0;
    unsafeWindow.selectors = [{
            container: ".dplayer",
            controller: ".dplayer-controller",
            autoHideCheck: ".dplayer-hide-controller",
            timer: "dplayer-info-panel"
        },
        {
            container: ".prism-player",
            controller: ".prism-controlbar",
            autoHideCheck: ".dplayer-hide-controller",
            timer: "prism-info-display"
        },
        {
            container: ".yzmplayer",
            controller: ".yzmplayer-controller",
            autoHideCheck: ".yzmplayer-hide-controller",
            timer: "yzmplayer-info-panel"
        }]
    unsafeWindow.theselector = {}
  
    unsafeWindow.console.info("curpage:"+unsafeWindow.location.href)
  /*
    unsafeWindow.console.info("topurl1:"+GM_getValue("topurl1",""))
    let settime = GM_getValue("urlsettime","")
    if( settime != ""){
      let d = new Date()
      if(d.getTime()-settime>60000){
          unsafeWindow.console.info("timeout,clear url1,2")
          GM_setValue("topurl1", "");
          GM_setValue("topurl2", "");
      }
    }
    if (GM_getValue("topurl1","") == ""){
      unsafeWindow.console.info("set url1")
      GM_setValue("topurl1", unsafeWindow.location.href);
      let d = new Date()
      GM_setValue("urlsettime", d.getTime());
      unsafeWindow.console.info("topurl1:"+GM_getValue("topurl1","")+",settime:"+GM_getValue("urlsettime",""))
    }*/
    /*
    let urls = GM_getValue("urls",{})
    let d = new Date()
    urls[d.getTime()]=unsafeWindow.location.href
    GM_setValue("urls",urls)
    */
    const code = async function code() {
     //   if (unsafeWindow.BilibiliTimerUninit || !unsafeWindow.jQuery) { return false; }
        if (unsafeWindow.BilibiliTimerUninit) { return false; }
        if (!String.prototype.includes) {
            String.prototype.includes = function includes(s) {
                return this.indexOf(s) !== -1;
            };
        }
        unsafeWindow.BilibiliTimer = {};
        unsafeWindow.BilibiliTimer._loop_count = 0;
        unsafeWindow.BilibiliTimer.selector = unsafeWindow.theselector
        unsafeWindow.BilibiliTimer.date = function bilibiliPlayerDate() {
            const _date = new Date();
            ["getDate", "getFullYear", "getHours", "getMilliseconds", "getMinutes", "getMonth", "getSeconds", "getTime", "getUTCDate", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCMonth", "getUTCSeconds", "getYear"].forEach((key) => {
                _date[key] = (...a) => {
                    let result = Date.prototype[key].apply(_date, a);
                    if (key.includes("Month")) { result++; }
                    if (typeof result === "number" && `${result}`.length === 1) { return `0${result}`; }
                    return `${result}`;
                };
            });
            return _date;
        };

        unsafeWindow.BilibiliTimer.selector.fullscreen = (function () {
            let video = $("video")[0];
            if (!video) { return false}
            let videoWidth = video.clientWidth;
            let videoHeight = video.clientHeight;
            let screenWidth = window.screen.width;
            let screenHeight = window.screen.height;
            return (videoWidth == screenWidth && videoHeight == screenHeight)
        })
        unsafeWindow.BilibiliTimer.setting = await script.getValue("setting", {
            on: ["SystemTime", "Track", "BufferTime", "CurrentPageAndWatchlater", "Watchlater"],
            off: [],
        });
        $("body").attr("data-bilibiliTimerSettingOn", unsafeWindow.BilibiliTimer.setting.on.join(","));
        // unsafeWindow.BilibiliTimer.closeButtonText = unsafeWindow.BilibiliTimer.isLive("x", "[×]");
        // unsafeWindow.BilibiliTimer.smallModeButtonText = unsafeWindow.BilibiliTimer.isLive("_", "[＿]");
      //  unsafeWindow.BilibiliTimer.closeButtonText = "×";
        //unsafeWindow.BilibiliTimer.tipsButtonText = "?";
     //   unsafeWindow.BilibiliTimer.smallModeButtonText = "[＿]"
        unsafeWindow.BilibiliTimer.globallock = false;
        unsafeWindow.BilibiliTimer.widthSet = false;
        unsafeWindow.BilibiliTimer.onResizing = 0;
        if (unsafeWindow.BilibiliTimer.selector.autoHideCheck) { unsafeWindow.BilibiliTimer.mousemoveCount = 0; }
        unsafeWindow.BilibiliTimer.getControllerTop = function BilibiliTimerGetControllerTop() {
            const controller = $(unsafeWindow.BilibiliTimer.selector.controller);
            if (controller.closest(".mode-miniscreen")[0]) { return $(window).height(); }
            let _top = $(window).height() - controller.height();
       //     const fullscreenSendbar = $(unsafeWindow.BilibiliTimer.selector.fullscreenSendbar);
       //     if (fullscreenSendbar[0]) { _top -= fullscreenSendbar.outerHeight(true); }
            return _top;
        };
        $(window).on("resize.BilibiliTimer", () => {
            try {
                unsafeWindow.BilibiliTimer.onResizing = 1;
            } catch (e) { /* */ }
        });
        $(document).on({
            "mousemove.BilibiliTimer": function (e) {
                if (unsafeWindow.BilibiliTimer && unsafeWindow.BilibiliTimer.timer) {
                    if (unsafeWindow.BilibiliTimer.onMousedown) {
                        const maxTop = unsafeWindow.BilibiliTimer.getControllerTop() - unsafeWindow.BilibiliTimer.timer.outerHeight() - 10;
                        const maxLeft = $(window).width() - unsafeWindow.BilibiliTimer.timer.outerWidth() - 10;
                        unsafeWindow.console.info(maxTop,maxLeft)
                        unsafeWindow.console.info(unsafeWindow.BilibiliTimer.timer.data("baseOffset").top,unsafeWindow.BilibiliTimer.timer.data("baseOffset").left)
                        unsafeWindow.console.info(e.clientX,e.clientY)
                        unsafeWindow.BilibiliTimer.timer.css({
                            left: Math.max(Math.min(unsafeWindow.BilibiliTimer.timer.data("baseOffset").left + e.clientX, maxLeft), 10),
                            top: Math.max(Math.min(unsafeWindow.BilibiliTimer.timer.data("baseOffset").top + e.clientY, maxTop), 10),
                        });
                        unsafeWindow.getSelection().removeAllRanges();
                    }
                    if (unsafeWindow.BilibiliTimer.selector.autoHideCheck) { unsafeWindow.BilibiliTimer.mousemoveCount = 0; }
                }
            },
            "mouseup.BilibiliTimer": function () {
                if (unsafeWindow.BilibiliTimer && unsafeWindow.BilibiliTimer.timer && unsafeWindow.BilibiliTimer.onMousedown) {
                    unsafeWindow.BilibiliTimer.onMousedown = false;
                    unsafeWindow.BilibiliTimer.timer.removeClass("dragging");
                    /*script.setValue("offset", {
                        top: unsafeWindow.BilibiliTimer.timer.css("top"),
                        left: unsafeWindow.BilibiliTimer.timer.css("left"),
                    });*/
                    localStorage.setItem("offset",JSON.stringify({
                        top: unsafeWindow.BilibiliTimer.timer.css("top"),
                        left: unsafeWindow.BilibiliTimer.timer.css("left"),
                    }))
                }
            },
        });
        unsafeWindow.BilibiliTimer.template = {};
        const timer = unsafeWindow.BilibiliTimer.template.timer = $("<div/>");
        timer.attr("id", "BilibiliTimer").addClass(unsafeWindow.BilibiliTimer.selector.timer);
      /*
        const closeButton = unsafeWindow.BilibiliTimer.template.closeButton = $("<a/>");
        closeButton.text(unsafeWindow.BilibiliTimer.closeButtonText).attr({
            href: "javascript:void(0);",
            id: "BilibiliTimerCloseButton",
        });
        closeButton.addClass(unsafeWindow.BilibiliTimer.classList.closeButton);
        const restartButton = unsafeWindow.BilibiliTimer.template.restartButton = $("<a/>");
        restartButton.attr({
            href: "javascript:void(0);",
            id: "BilibiliTimerRestartButton",
            title: "如果发现浮窗出现问题，\n例如无法正常拖动，无法正常显示时间等，\n请点击该按钮重建浮窗尝试修复！",
        });
        restartButton.addClass(unsafeWindow.BilibiliTimer.classList.closeButton).addClass(unsafeWindow.BilibiliTimer.classList.restartButton);
        const smallModeButton = unsafeWindow.BilibiliTimer.template.smallModeButton = $("<a/>");
        smallModeButton.text(unsafeWindow.BilibiliTimer.smallModeButtonText).attr({
            href: "javascript:void(0);",
            id: "BilibiliTimerSmallModeButton",
            title: "点击切换显示模式",
        });
        smallModeButton.addClass(unsafeWindow.BilibiliTimer.classList.closeButton);
        */
/*
        const tipsButton = unsafeWindow.BilibiliTimer.template.tipsButton = $("<a/>");
        tipsButton.text(unsafeWindow.BilibiliTimer.tipsButtonText).attr({
            href: "javascript:void(0);",
            id: "BilibiliTimerTipsButton",
            title: "快捷键:\nalt+c: 显示或隐藏时间浮窗\nalt+a: 开启或关闭自动隐藏\nalt+t: 显示或隐藏提示按钮",
        });
        tipsButton.addClass(unsafeWindow.BilibiliTimer.classList.closeButton);
*/
      //  const panel = unsafeWindow.BilibiliTimer.template.panel = $("<div/>");
      //  panel.addClass(unsafeWindow.BilibiliTimer.classList.panel);
      //  panel.append('<div class="info-line BilibiliTimerDisplayInlineInSmallMode" id="BilibiliTimerSystemTime"><span class="info-title">系统时间：</span><span class="info-data" id="BilibiliTimerNowTime"> - </span></div>');
      //  panel.append('<div class="info-line BilibiliTimerDisplayInlineInSmallMode" id="BilibiliTimerTrack"><span class="info-title">播放进度：</span><span class="info-data"><span id="BilibiliTimerVideoTime"> - </span><span class="BilibiliTimerHideInSmallMode">（已播放<span id="BilibiliTimerVideoTimePercents"> - </span>%）</span></span></div><div class="info-line BilibiliTimerDisplayInlineInSmallMode" id="BilibiliTimerBufferTime"><span class="info-title">加载进度：</span><span class="info-data"><span class="BilibiliTimerHideInSmallMode"><span id="BilibiliTimerVideoBufferedTime"> - </span>（剩余</span>缓冲时长 <span id="BilibiliTimerVideoBufferedTimeRange"> - </span>s<span class="BilibiliTimerHideInSmallMode">，已缓冲<span id="BilibiliTimerVideoBufferedTimePercents"> - </span>%）</span></span></div>');
        unsafeWindow.BilibiliTimer.init = async function BilibiliTimerInit() {
            if (unsafeWindow.BilibiliTimerUninit) { return false; }
            if (!$(unsafeWindow.BilibiliTimer.selector.container)[0] && ++unsafeWindow.BilibiliTimer._loop_count > 150) { return unsafeWindow.BilibiliTimer.uninit(); }
            unsafeWindow.BilibiliTimer.onResizing = 0;
            unsafeWindow.BilibiliTimer.widthSet = false;
            unsafeWindow.BilibiliTimer.timer = unsafeWindow.BilibiliTimer.template.timer.clone();
         //   unsafeWindow.BilibiliTimer.closeButton = unsafeWindow.BilibiliTimer.template.closeButton.clone();
         //   unsafeWindow.BilibiliTimer.tipsButton = unsafeWindow.BilibiliTimer.template.tipsButton.clone();
         //   unsafeWindow.BilibiliTimer.restartButton = unsafeWindow.BilibiliTimer.template.restartButton.clone();
         //   unsafeWindow.BilibiliTimer.smallModeButton = unsafeWindow.BilibiliTimer.template.smallModeButton.clone();
          //  unsafeWindow.BilibiliTimer.panel = unsafeWindow.BilibiliTimer.template.panel.clone();
          //  unsafeWindow.BilibiliTimer.timer.append(unsafeWindow.BilibiliTimer.closeButton)//.append(unsafeWindow.BilibiliTimer.restartButton).append(unsafeWindow.BilibiliTimer.smallModeButton)//.append(unsafeWindow.BilibiliTimer.panel);
         //   unsafeWindow.BilibiliTimer.timer.append(unsafeWindow.BilibiliTimer.tipsButton)
            unsafeWindow.BilibiliTimer.timer.append('<div class="info-line BilibiliTimerDisplayInlineInSmallMode" id="BilibiliTimerSystemTime"><span class="info-title">系统时间：</span><span class="info-data" id="BilibiliTimerNowTime" title="快捷键:\nalt+c: 显示或隐藏时间浮窗\nalt+a: 开启或关闭自动隐藏"> - </span></div>');
        //    unsafeWindow.BilibiliTimer.timer.append('<div class="info-line BilibiliTimerDisplayInlineInSmallMode" id="BilibiliTimerTrack"><span class="info-title">播放进度：</span><span class="info-data"><span id="BilibiliTimerVideoTime"> - </span><span class="BilibiliTimerHideInSmallMode">（已播放<span id="BilibiliTimerVideoTimePercents"> - </span>%）</span></span></div><div class="info-line BilibiliTimerDisplayInlineInSmallMode" id="BilibiliTimerBufferTime"><span class="info-title">加载进度：</span><span class="info-data"><span class="BilibiliTimerHideInSmallMode"><span id="BilibiliTimerVideoBufferedTime"> - </span>（剩余</span>缓冲时长 <span id="BilibiliTimerVideoBufferedTimeRange"> - </span>s<span class="BilibiliTimerHideInSmallMode">，已缓冲<span id="BilibiliTimerVideoBufferedTimePercents"> - </span>%）</span></span></div>');

            (function loop(BilibiliTimer, $) {
                if (BilibiliTimer.isNewPlayPage && [
                    $("#arc_toolbar_report > .ops > .like").text(),
                    $("#arc_toolbar_report > .ops > .coin, #toolbar_module .coin-info span").text(),
                    $("#arc_toolbar_report > .ops > .collect").text(),
                ].includes("--")) {
                    return setTimeout(loop, 200, BilibiliTimer, $);
                }
            })(unsafeWindow.BilibiliTimer, $);
            unsafeWindow.BilibiliTimer.timer.on("mousedown", (e) => {
                const baseX = Math.max(e.clientX, 0);
                const baseY = Math.max(e.clientY, 0);
                const baseOffsetX = Math.max(parseInt(unsafeWindow.BilibiliTimer.timer.css("left")), 0);
                const baseOffsetY = Math.max(parseInt(unsafeWindow.BilibiliTimer.timer.css("top")), 0);
                unsafeWindow.BilibiliTimer.timer.data("baseOffset", {
                    left: baseOffsetX - baseX,
                    top: baseOffsetY - baseY,
                });
                unsafeWindow.BilibiliTimer.onMousedown = true;
                unsafeWindow.BilibiliTimer.timer.addClass("dragging");
            });
          /*
            unsafeWindow.BilibiliTimer.closeButton.on("click", () => {
                unsafeWindow.BilibiliTimer.globallock = true;
                unsafeWindow.BilibiliTimer.timer.dequeue().clearQueue().css({
                    opacity: "0",
                    "pointer-events": "none",
                }).delay(370).queue(() => {
                    timer.hide().dequeue();
                });
                script.setValue("visibility", false)
                return false;
            });
            unsafeWindow.BilibiliTimer.restartButton.on("click", () => {
                unsafeWindow.BilibiliTimer.restart("User order", "");
                return false;
            });
            unsafeWindow.BilibiliTimer.smallModeButton.on("click", () => {
                $("body").toggleClass("BilibiliTimerSmallMode");
                localStorage.setItem("BilibiliTimerSmallMode", $("body").is(".BilibiliTimerSmallMode") ? "true" : "false");
                return false;
            });
            if (localStorage.getItem("BilibiliTimerSmallMode") === "true") {
                $("body").addClass("BilibiliTimerSmallMode");
            }
*/
        //    $(unsafeWindow.BilibiliTimer.selector.container).keydown(function (e) {
         //       if (e.keyCode == 13)
          //      {
         //           alert("你按了键盘ENTER.");
           //     }
         //   });
         //   $(unsafeWindow.BilibiliTimer.selector.container).on("keydown",async function (e) {
            document.onkeydown =async function(e){
                if (e.altKey && e.keyCode == 67){
                    let visibility = await script.getValue("visibility", true);
                    visibility = !visibility
                    await script.setValue("visibility", visibility);
                    if(visibility){
                    //    unsafeWindow.BilibiliTimer.closeButton.css({display:"none"});
                    //    unsafeWindow.BilibiliTimer.timer.css({width:"auto"});
                        unsafeWindow.BilibiliTimer.timer.css({display:"none"});
                    }else{
                     //   unsafeWindow.BilibiliTimer.closeButton.css({display:"block"});
                     //   unsafeWindow.BilibiliTimer.timer.css({width:"50px"});+
                        unsafeWindow.BilibiliTimer.timer.css({display:"block"});
                    }
                }else if (e.altKey && e.keyCode == 65){
                    let autohide = await script.getValue("autoHidden", false);
                    await script.setValue("autoHidden", !autohide);
                }/*else if (e.altKey && e.keyCode == 84){
                    let tips = await script.getValue("tips", true);
                    tips = !tips
                    await script.setValue("tips", tips);
                    if(tips){
                        unsafeWindow.BilibiliTimer.tipsButton.css({display:"block"});
                        unsafeWindow.BilibiliTimer.timer.css({width:"50px"});
                    }else{
                        unsafeWindow.BilibiliTimer.tipsButton.css({display:"none"});
                        unsafeWindow.BilibiliTimer.timer.css({width:"auto"});
                    }
                }*/
            };
            /*
            document.onkeydown = function(e){
                if (e.keyCode == 13)
                {
                    alert("你按了键盘ENTER.");
                }
            };*/
            $("body").addClass("BilibiliTimerSmallMode");
            /*if (!await script.getValue("offset")) {
                unsafeWindow.BilibiliTimer.timer.css({
                    left: "auto",
                    right: "10px",
                    top: "10px",
                });
            } else { unsafeWindow.BilibiliTimer.timer.css(await script.getValue("offset")); }
            */
            if (!localStorage.getItem("offset")) {
                unsafeWindow.BilibiliTimer.timer.css({
                    left: "auto",
                    right: "10px",
                    top: "10px",
                });
            } else { unsafeWindow.BilibiliTimer.timer.css(JSON.parse(localStorage.getItem("offset"))); } 
            $(unsafeWindow.BilibiliTimer.selector.container).append(unsafeWindow.BilibiliTimer.timer);
            $(window).resize();
        };
        unsafeWindow.BilibiliTimer.globalWatcher = async function BilibiliTimerGlobalWatcher() {
            if (unsafeWindow.BilibiliTimerUninit) { return false; }
            const timer = unsafeWindow.BilibiliTimer.timer;
            if (!timer || !timer[0]) {
                unsafeWindow.BilibiliTimer.init();
                return;
            }
            if ($("object#player_placeholder, object#player_object")[0]) {
                unsafeWindow.BilibiliTimer.uninit();
                return;
            }
            if (!timer.closest("body")[0]) {
                unsafeWindow.BilibiliTimer.restart("Timer did not exist in document.body", timer.closest("body")[0]);
                return;
            }
            if (unsafeWindow.BilibiliTimer.selector.fullscreen()&&await script.getValue("visibility",true)) {
          //  if (await script.getValue("visibility",true)) {
                if (await script.getValue("autoHidden") && (unsafeWindow.BilibiliTimer.selector.autoHideCheck ? $(unsafeWindow.BilibiliTimer.selector.autoHideCheck)[0] : unsafeWindow.BilibiliTimer.mousemoveCount >= 3)) { unsafeWindow.BilibiliTimer.autoHidden = true; }
                else { unsafeWindow.BilibiliTimer.autoHidden = false; }
                if (!unsafeWindow.BilibiliTimer.globallock && !unsafeWindow.BilibiliTimer.autoHidden) {
                    if (!timer.is(":visible") || timer.css("opacity") !== "1") {
                        timer.dequeue().clearQueue().show().css({
                            opacity: "1",
                            "pointer-events": "auto",
                        });
                    }
                    if (unsafeWindow.BilibiliTimer.onResizing === 2) {
                        unsafeWindow.BilibiliTimer.onResizing = 0;
                       // const maxTop = unsafeWindow.BilibiliTimer.getControllerTop() - timer.outerHeight() - 10;
                      //  const maxLeft = $(window).width() - timer.outerWidth() - 10;
                        const maxTop = $(window).height() - timer.outerHeight();
                        const maxLeft = $(window).width() - timer.outerWidth();
                        timer.css({
                            left: Math.max(Math.min(parseInt(timer.css("left")), maxLeft), 10),
                            top: Math.max(Math.min(parseInt(timer.css("top")), maxTop), 10),
                        });
                        /*script.setValue("offset", {
                            top: timer.css("top"),
                            left: timer.css("left"),
                        });*/
                        localStorage.setItem("offset",JSON.stringify({
                          top: timer.css("top"),
                          left: timer.css("left"),
                      }))
                    } else if (unsafeWindow.BilibiliTimer.onResizing === 1) {
                        unsafeWindow.BilibiliTimer.onResizing = 2;
                    }
                    const date = unsafeWindow.BilibiliTimer.date();
                    timer.find("#BilibiliTimerNowTime").html(`<span class="BilibiliTimerHideInSmallMode BilibiliTimerWhiteSpacePre">${date.getFullYear()}-${date.getMonth()}-${date.getDate()} </span>${date.getHours()}:${date.getMinutes()}`);
                    if (!unsafeWindow.BilibiliTimer.widthSet) { unsafeWindow.BilibiliTimer.heightCalc(); }
                }
            } else {
                unsafeWindow.BilibiliTimer.onResizing = 0;
                unsafeWindow.BilibiliTimer.globallock = false;
                timer.dequeue().clearQueue().css("opacity", "0").delay(370).queue(() => {
                    timer.hide().dequeue();
                });
            }
            const video = $("video")[0];
            if (!video) {
                unsafeWindow.BilibiliTimer.restart("No Video", null);
                return;
            }
            if (!video.dataset.isTrusted) {
                video.dataset.isTrusted = "true";
                video.addEventListener("timeupdate", unsafeWindow.BilibiliTimer.videoPlayListener);
                video.addEventListener("progress", unsafeWindow.BilibiliTimer.videoProgressListener);
            }
            if ((timer.find("#BilibiliTimerVideoTimePercents").text() + timer.find("#BilibiliTimerVideoBufferedTimeRange").text() + timer.find("#BilibiliTimerVideoTime").text()).includes("-")) {
                unsafeWindow.BilibiliTimer.videoPlayListener({
                    target: video[0],
                });
                unsafeWindow.BilibiliTimer.videoProgressListener({
                    target: video[0],
                });
            }
        };
        unsafeWindow.BilibiliTimer.autoHideWatcher = async function BilibiliTimerAutoHideWatcher() {
            if (!await script.getValue("autoHidden")) { return; }
            if (unsafeWindow.BilibiliTimer.selector.autoHideCheck ? $(unsafeWindow.BilibiliTimer.selector.autoHideCheck)[0] : unsafeWindow.BilibiliTimer.mousemoveCount >= 3) {
                unsafeWindow.BilibiliTimer.autoHidden = true;
                unsafeWindow.BilibiliTimer.timer.dequeue().clearQueue().css("opacity", "0").delay(370).queue(() => {
                    timer.hide().dequeue();
                });
            }
            if (unsafeWindow.BilibiliTimer.selector.autoHideCheck) { unsafeWindow.BilibiliTimer.mousemoveCount++; }
        };
        unsafeWindow.BilibiliTimer.lazyWatcher = function BilibiliTimerLazyWatcher() {
            if (!unsafeWindow.BilibiliTimer || !unsafeWindow.BilibiliTimer.timer) { return; }
            unsafeWindow.BilibiliTimer.heightCalc();
        };
        unsafeWindow.BilibiliTimer.heightCalc = function BilibiliTimerWidthCalc() {
            if (!unsafeWindow.BilibiliTimer || !unsafeWindow.BilibiliTimer.timer) { return; }
            const timer = unsafeWindow.BilibiliTimer.timer;
            timer.find(".info-line").each(function () {
                if ($(this).css("height", "unset").height() === 0) { return; }
                let maxHeight = 0;
                $(this).css("height", "unset").children().each(function () {
                    const _height = $(this).height();
                    if (maxHeight < _height) { maxHeight = _height; }
                });
                $(this).height(maxHeight);
            });
            unsafeWindow.BilibiliTimer.widthSet = true;
            $(window).resize();
        };
        unsafeWindow.BilibiliTimer.timeParse = function BilibiliTimerTimeParse(_time) {
            const time = parseInt(_time);
            let sec = time % 60;
            const min = (time - sec) / 60;
            if (sec < 10) { sec = `0${sec}`; }
            return `${min}:${sec}`;
        };
        unsafeWindow.BilibiliTimer.isSetNext = false
        unsafeWindow.BilibiliTimer.videoPlayListener = function BilibiliTimerVideoPlayListener(e) {
            if (!e.target) { return; }
            const video = e.target;
            const curTime = video.currentTime || 0;
            const durTime = video.duration || 0;
            if (!curTime && !durTime) { return; }
            /*if(!unsafeWindow.BilibiliTimer.isSetNext&&video.duration==Infinity){
              unsafeWindow.BilibiliTimer.isSetNext = true
              unsafeWindow.console.info("set next live");
              GM_setValue("next", "live");
            }else */if(!unsafeWindow.BilibiliTimer.isSetNext&&curTime>durTime-10){
              unsafeWindow.console.info("curtime:"+video.currentTime)
              unsafeWindow.console.info("durtime:"+video.duration)
              unsafeWindow.BilibiliTimer.isSetNext = true
              unsafeWindow.console.info("set next true");
              GM_setValue("next", true);
            }
            if (!unsafeWindow.BilibiliTimer || !unsafeWindow.BilibiliTimer.timer) { return; }
            const timer = unsafeWindow.BilibiliTimer.timer;
            timer.find("#BilibiliTimerVideoTime").text(`${unsafeWindow.BilibiliTimer.timeParse(curTime)} / ${unsafeWindow.BilibiliTimer.timeParse(durTime)}`);
            if (timer.find("#BilibiliTimerVideoBufferedTime")[0]) {
                let end;
                try {
                    end = video.buffered.end(video.buffered.length - 1);
                } catch (_) {
                    try {
                        end = video.buffered.end(0);
                    } catch (_) {
                        return;
                    }
                }
                if (timer.find("#BilibiliTimerVideoBufferedTime").text() === " - ") { $(video).trigger("progress"); }
                timer.find("#BilibiliTimerVideoBufferedTimeRange").text((end - curTime).toFixed(0));
            }
            timer.find("#BilibiliTimerVideoTimePercents").text((curTime * 100 / durTime).toFixed(2));
        };
        unsafeWindow.BilibiliTimer.videoProgressListener = function BilibiliTimerVideoProgressListener(e) {
            if (!e.target) { return; }
            let video = e.target;
            const curTime = video.currentTime || 0;
            const durTime = video.duration || 0;
            if (!curTime && !durTime) { return; }
            if (!unsafeWindow.BilibiliTimer || !unsafeWindow.BilibiliTimer.timer) { return; }
            const timer = unsafeWindow.BilibiliTimer.timer;
            if (timer.find("#BilibiliTimerVideoBufferedTimeRange")[0]) {
                video = e.target;
                let end;
                try {
                    end = video.buffered.end(video.buffered.length - 1);
                } catch (_) {
                    try {
                        end = video.buffered.end(0);
                    } catch (_) {
                        return;
                    }
                }
                if (timer.find("#BilibiliTimerVideoBufferedTimeRange").text() === " - ") { unsafeWindow.BilibiliTimer.widthSet = false; }
                if (timer.find("#BilibiliTimerVideoTime").text() === " - ") { $(video).trigger("timeupdate"); }
                timer.find("#BilibiliTimerVideoBufferedTime").text(unsafeWindow.BilibiliTimer.timeParse(end));
                unsafeWindow.BilibiliTimer.timer.find("#BilibiliTimerVideoBufferedTimeRange").text((end - video.currentTime).toFixed(0));
                timer.find("#BilibiliTimerVideoBufferedTimePercents").text((end * 100 / video.duration).toFixed(2));
            }
            timer.find("#BilibiliTimerVideoTimePercents").text((curTime * 100 / durTime).toFixed(2));
        };
        unsafeWindow.BilibiliTimer.start = function BilibiliTimerStart() {
            if (unsafeWindow.BilibiliTimerUninit) { return false; }
            if (location.host === "bangumi.bilibili.com") { return false; }
            if (!unsafeWindow.BilibiliTimer.interval) { unsafeWindow.BilibiliTimer.interval = {}; }
            if (!unsafeWindow.BilibiliTimer.interval.globalWatcher) { unsafeWindow.BilibiliTimer.interval.globalWatcher = unsafeWindow.setInterval(unsafeWindow.BilibiliTimer.globalWatcher, 1000); }
            if (!unsafeWindow.BilibiliTimer.interval.autoHideWatcher) { unsafeWindow.BilibiliTimer.interval.autoHideWatcher = unsafeWindow.setInterval(unsafeWindow.BilibiliTimer.autoHideWatcher, 1e3); }
            if (!unsafeWindow.BilibiliTimer.interval.lazyWatcher) { unsafeWindow.BilibiliTimer.interval.lazyWatcher = unsafeWindow.setInterval(unsafeWindow.BilibiliTimer.lazyWatcher, 5e3); }
            try {
                const video = $("video");
                setTimeout(() => {
                    unsafeWindow.BilibiliTimer.videoPlayListener({
                        target: video[0],
                    });
                    unsafeWindow.BilibiliTimer.videoProgressListener({
                        target: video[0],
                    });
                }, 100);
            } catch (_) {
                return;
            }
        };
        unsafeWindow.BilibiliTimer.restart = function BilibiliTimerRestart(reason, node) {
            for (const i in unsafeWindow.BilibiliTimer.interval) {
                if (unsafeWindow.BilibiliTimer.interval[i]) { unsafeWindow.clearInterval(unsafeWindow.BilibiliTimer.interval[i]); }
            }
            if (unsafeWindow.BilibiliTimerUninit) { return false; }
            const timer = $("#BilibiliTimer");
            if (timer[0]) {
                timer.dequeue().clearQueue().css("opacity", "0").delay(370).queue(() => {
                    unsafeWindow.BilibiliTimer.rebuild(reason, node);
                    timer.hide().dequeue();
                });
            } else { unsafeWindow.BilibiliTimer.rebuild(reason, node); }
        };
        unsafeWindow.BilibiliTimer.rebuild = function BilibiliTimerRebuild(reason, node) {
            console.groupCollapsed("BilibiliTimerRebuildTrace:", reason, node);
            console.trace();
            console.groupEnd();
            unsafeWindow.BilibiliTimer = undefined;
            $("#BilibiliTimer").remove();
            if (unsafeWindow.BilibiliTimerUninit) { return false; }
            setTimeout(() => {
                code();
            }, 0);
        };
        unsafeWindow.BilibiliTimer.uninit = function BilibiliTimerUninit() {
            for (const i in unsafeWindow.BilibiliTimer.interval) {
                if (unsafeWindow.BilibiliTimer.interval[i]) { unsafeWindow.clearInterval(unsafeWindow.BilibiliTimer.interval[i]); }
            }
            $("#BilibiliTimer").remove();
            unsafeWindow.BilibiliTimer = undefined;
            unsafeWindow.BilibiliTimerUninit = true;
        };
        unsafeWindow.BilibiliTimer.start();
    };

    //unsafeWindow.console.info(css)
   const c = unsafeWindow.setInterval(async () => {
     //   if (!unsafeWindow.jQuery) { return false; }
   //     if (!unsafeWindow.document.querySelector(".yzmplayer-video-wrap, .bpx-player-video-wrap") || !unsafeWindow.document.querySelector(".yzmplayer-video-wrap, .bpx-player-video-wrap").querySelector("video")) { return; }
        for(var i=0;i<unsafeWindow.selectors.length;i++){
          /*if(unsafeWindow.BilibiliTimer._loop_count == 10) {
            unsafeWindow.console.info('document.querySelector("'+unsafeWindow.selectors[i].container+'").querySelector("video")')
          }*/
         if (unsafeWindow.document.querySelector(unsafeWindow.selectors[i].container) && unsafeWindow.document.querySelector(unsafeWindow.selectors[i].container).querySelector("video")) { 
            unsafeWindow.theselector = unsafeWindow.BilibiliTimer.selector = unsafeWindow.selectors[i];
            break; 
         }
        }
        if (Object.keys(unsafeWindow.theselector).length == 0) {
          unsafeWindow.console.info(unsafeWindow.BilibiliTimer._loop_count + ".cant find video!")
          if(++unsafeWindow.BilibiliTimer._loop_count > 10){
            unsafeWindow.clearInterval(c);
            unsafeWindow.console.info("10 times later...")
            unsafeWindow.console.info('videourl:'+await script.getValue("videourl",""))
            unsafeWindow.console.info('$("iframe").length:'+$("iframe").length)
            if($("iframe").length != 0 || unsafeWindow.location.href == await script.getValue("videourl","")){
              unsafeWindow.console.info("111111111")
              unsafeWindow.nexturl = ""
              let nextele = undefined
              if($('a:contains("下一集")').length>0){
                nextele = $('a:contains("下一集")');
              }else if($('a:contains("下集")').length>0){
                nextele = $('a:contains("下集")');
              }
              unsafeWindow.console.info(nextele)
              if(nextele){
                for(var i=0;i<nextele.length;i++){
                  if($(nextele[i]).is(":visible")){
                    unsafeWindow.console.info(nextele[i].href)
                    unsafeWindow.nexturl = nextele[i].href
                  }
                }
              }
              unsafeWindow.console.info("nexturl:"+unsafeWindow.nexturl)
              if(unsafeWindow.nexturl != ""){
                const findnext=unsafeWindow.setInterval(async () => {
                  unsafeWindow.console.info("2222222")
                  let nxt = await script.getValue("next",false)
                  if(nxt==true){
                    unsafeWindow.console.info("store next1:"+await script.getValue("next", false))
                    await script.setValue("next", false);
                    unsafeWindow.console.info("next")
                    unsafeWindow.console.info("store next2:"+await script.getValue("next", false))
                    unsafeWindow.location.href = unsafeWindow.nexturl;
                  }/*else if(nxt=="live"){
                    await script.setValue("next", false);
                    unsafeWindow.console.info("clear findnext loop");
                    unsafeWindow.clearInterval(findnext);
                  }*/
                },3000) 
              }
            }
            //unsafeWindow.clearInterval(c);
          }
          return;
        }
        unsafeWindow.console.info("in the video page...")
        unsafeWindow.console.info("curpage:"+unsafeWindow.location.href)
        await script.setValue("videourl", unsafeWindow.location.href);
        unsafeWindow.console.info("videourl:"+await script.getValue("videourl",""));
     /*
        unsafeWindow.console.info("topurl1:"+await script.getValue("topurl1",""));
        if(await script.getValue("topurl1","")!=unsafeWindow.location.href||await script.getValue("topurl1","")==unsafeWindow.location.href&&top==window){//主页面不是视频页面或主页面是视频页面但属于非框架页面
          await script.setValue("topurl2", await script.getValue("topurl1",""));
          await script.setValue("tempurl", unsafeWindow.location.href);
          unsafeWindow.console.info("topurl2:"+await script.getValue("topurl2",""));
        }*/

    //    if (!unsafeWindow.document.querySelector(unsafeWindow.BilibiliTimer.selector.container) || !unsafeWindow.document.querySelector(unsafeWindow.BilibiliTimer.selector.container).querySelector("video")) { return; }
        if (unsafeWindow.BilibiliTimerUninit || unsafeWindow.BilibiliTimer && unsafeWindow.BilibiliTimer.start) { return unsafeWindow.clearInterval(c); }
        unsafeWindow.console.info(`%c${script.scriptMeta.name}@${script.scriptMeta.version} by ${script.scriptMeta.author} is running!`, `padding: 34px 66px 34px 66px; line-height: 64px; background:url('${script.scriptMeta.icon64}') top left no-repeat; background-position-y: 4px;`);
        unsafeWindow.console.info(await script.getValue("visibility"))
        unsafeWindow.console.info(await script.getValue("autoHidden"))
        unsafeWindow.console.info(await script.getValue("offset"))
        unsafeWindow.console.info(JSON.parse(localStorage.getItem("offset")))
        unsafeWindow.console.info(await script.getValue("tips"))
     
    unsafeWindow.console.info(unsafeWindow.BilibiliTimer.selector.container)
    const css = `
        #BilibiliTimer {
            cursor: move;
            display: block;
            width: 40px;
            height: 17px;
            z-index: 68;
            background: transparent;
            color: #dfdfdf;
            font-size: 13px
            
        }

        #BilibiliTimer:not(.dragging){            
            transition: all .37s ease-in-out;
        }

        #BilibiliTimer.${unsafeWindow.BilibiliTimer.selector.timer} a {
            color: #999;
            text-decoration:none;
        }

        #BilibiliTimer.${unsafeWindow.BilibiliTimer.selector.timer} .info-line,
        #BilibiliTimer.bpx-player-info-container .bpx-player-info-panel .info-line {
            min-width: auto;
            max-width: 320px;
            padding: 1px;
            display: flex;
        }

        #BilibiliTimer.${unsafeWindow.BilibiliTimer.selector.timer} .info-line span,
        #BilibiliTimer.bpx-player-info-container .bpx-player-info-panel .info-line span {
            display: inline;
            color: #dfdfdf;
        }

        #BilibiliTimer.${unsafeWindow.BilibiliTimer.selector.timer} .info-line>span
        #BilibiliTimer.bpx-player-info-container .bpx-player-info-panel .info-line>span {
            display: inline-block;
        }

        ${unsafeWindow.BilibiliTimer.selector.autoHideCheck} #BilibiliTimer,
        .bpx-state-no-cursor #BilibiliTimer {
            opacity: .73;
            cursor: none;
        }

        #BilibiliTimer .info-title {
            width: 6em;
            margin: 0;
        }

        #BilibiliTimer .info-data {
            white-space: normal;
            vertical-align: top;
        }

        #BilibiliTimer .info-line:not(.BilibiliTimerDisplayInlineInSmallMode) .info-data {
            width: calc(100% - 6em);
        }


        .bgray-btn-wrap .BilibiliTimer-hr {
            border-style: inset;
            border-width: 1px;
            margin: 0.5em auto;
            overflow: hidden;
        }

        #arc_toolbar_report>.ops>.more>.more-ops-list {
            width: auto;
        }

        body:not([data-bilibilitimersettingon*="SystemTime"]) #BilibiliTimerSystemTime,
        body:not([data-bilibilitimersettingon*="Track"]) #BilibiliTimerTrack,
        body:not([data-bilibilitimersettingon*="BufferTime"]) #BilibiliTimerBufferTime {
            height: 0 !important;
            overflow: hidden;
            width: 0;
        }


        .BilibiliTimerSmallMode #BilibiliTimer {
            padding: 0;
        }

        .BilibiliTimerSmallMode .BilibiliTimerHideInSmallMode,
        .BilibiliTimerSmallMode .BilibiliTimerDisplayInlineInSmallMode .info-title {
            display: none !important;
        }

        .BilibiliTimerSmallMode .BilibiliTimerDisplayInlineInSmallMode {
            display: inline !important;
        }

        .BilibiliTimerSmallMode .BilibiliTimerDisplayInlineInSmallMode:first-child {
            padding-left: 1em;
        }

        .BilibiliTimerSmallMode .BilibiliTimerDisplayInlineInSmallMode+.BilibiliTimerDisplayInlineInSmallMode::before {
            content: " | ";
        }

        .BilibiliTimerWhiteSpacePre {
            white-space: pre;
        }
    `;
        script.addStyle(css);
        /*
        try{
            const div = top.document.createElement("div");
            div.id = "BilibiliTimerConfig";
            div.setAttribute("style", "position: fixed; right: 1em; bottom: 1em; background: white; border: 1px solid gray; border-radius: 0.2em; width: 4em; height: 3em; padding: 0.25em; line-height: 1; font-size: 16px; text-align: center; cursor: pointer; color: black; display: none;");
            let visibility = await script.getValue("visibility", true) !== false;
            div.innerText = visibility ? "关闭全屏时间" : "开启全屏时间";
            div.addEventListener("click", () => {
                visibility = !visibility;
                script.setValue("visibility", visibility);
                div.innerText = visibility ? "关闭全屏时间" : "开启全屏时间";
                if (visibility) {
                    unsafeWindow.BilibiliTimerUninit = false;
                    unsafeWindow.BilibiliTimer = {};
                    code();
                } else if (unsafeWindow.BilibiliTimer && unsafeWindow.BilibiliTimer.uninit) {
                    unsafeWindow.BilibiliTimer.uninit();
                }
            });
            top.document.body.append(div);
    //    unsafeWindow.$("#BilibiliTimerConfig").show();
          top.document.querySelector("#BilibiliTimerConfig").style.display = "block"
        //  if (!visibility) {return}
        }catch(err){unsafeWindow.console.info("添加开关失败:"+err.message)}
        */
        code();
    }, 3000);
})();