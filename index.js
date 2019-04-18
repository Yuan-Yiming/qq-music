$(function () {
	// 1.顶部导航栏
	// 1.1 右侧登录按钮及设置按钮
	var login = $(".header .login li").eq(0),
		setting = $(".header .login li").eq(1);

	login.click(popupLoginPage);  // 监听登录按钮点击事件
	setting.click(popupSettingPage);


	// 2.上方工具栏按钮
	var toolbar = $(".toolbar>ul>li"),
		notSelected = $(".popup-not-selected"),
		musicCheck,
		timer;

	function popupNotSelected() {
		notSelected.show();
		// console.log(timer);
		clearTimeout(timer);
		timer = setTimeout(function () {
			notSelected.fadeOut(500);
		}, 3000);
	}
	// 2.1 监听收藏按钮点击事件
	toolbar.eq(0).click(function () {
		musicCheck = $(".list-content .checked");
		// console.log(musicCheck);
		if (musicCheck.length > 0) {
			popupLoginPage();
			console.log(musicCheck);
		} else {
			popupNotSelected();
		}
	});

	// 2.2 监听添加歌曲按钮的点击事件
	toolbar.eq(1).click(function () {
		musicCheck = $(".list-content .checked");
		// console.log(musicCheck);
		if (musicCheck.length > 0) {
		} else {
			popupNotSelected();
		}
	});
	// 2.3 监听下载歌曲按钮的点击事件
	toolbar.eq(2).click(function () {
		musicCheck = $(".list-content .checked");
		// console.log(musicCheck);
		if (musicCheck.length > 0) {
		} else {
			popupNotSelected();
		}
	});
	// 2.4 监听删除歌曲按钮的点击事件
	toolbar.eq(3).click(function () {
		musicCheck = $(".list-content .checked");
		// console.log(musicCheck);
		if (musicCheck.length > 0) {
		} else {
			popupNotSelected();
		}
	});
	// 2.5 监听添加歌曲按钮的点击事件





	// 3.个单列表

	// 1. 监听歌单上的事件
	// 1.1 监听歌曲列表check-box的点击事件
	var singleCheck = $(".list-content>.music-check"),
		headCheck = $(".list-head>.music-check"),
		allCheck = $(".music-check");

	singleCheck.click(function () {
		$(this).toggleClass("checked");
		headCheck.removeClass("checked");
	});

	headCheck.click(function () {
		if ($(this).hasClass('checked')) {
			allCheck.removeClass("checked");
		} else {
			allCheck.addClass("checked");
		}
	});

	// 歌单列表只有4中状态：normal，hover，is-playing，ready-to-play

	// 1.2 监听歌曲列表鼠标移入移出事件
	var listContent = $(".list-content");
	listContent.hover(function () {
			if (!$(this).hasClass("is-playing") && !$(this).hasClass("ready-to-play")) {
				$(this).addClass("hover");
			}
		}, function () {
			if (!$(this).hasClass("is-playing") && !$(this).hasClass("ready-to-play")) {
				$(this).removeClass("hover");
			}
		});
	

	// 1.3 监听歌单中的播放按钮/右侧歌曲信息部分
	var playBtn = $(".play-music"),
		footer = $(".footer-in"),
		songInfo = $(".music-info span");

	playBtn.click(function () {
		var bgp = $(this).css("backgroundPosition"),
			thisSong = $(this).parent(),
			otherPlayBtn = thisSong.siblings().children(".play-music"),
			// ownBtn = thisSong.children(".btn"),
			otherBtn = thisSong.siblings().children(".btn"),
			isPlaying = thisSong.hasClass("is-playing"),
			songName = thisSong.children(".music-name").text(),
			singerName = thisSong.children(".music-singer").text(),
			songTime = thisSong.children(".music-time").text();

		footer.find(".song-name>span").eq(0).text(songName);
		footer.find(".song-name>span").eq(1).text(singerName);
		footer.find(".song-time>span").eq(1).text(songTime);
		songInfo.eq(0).text(songName);
		songInfo.eq(1).text(singerName);
		songInfo.eq(2).text(songName);

		thisSong.removeClass("hover");
		thisSong.siblings().removeClass("is-playing ready-to-play");

		if (!isPlaying) {
			thisSong.addClass("is-playing");
			thisSong.removeClass("ready-to-play");
			play.addClass("playing");
		} else {
			// $(this).css("backgroundPosition", "-132px 0px");
			thisSong.removeClass("is-playing");
			thisSong.addClass("ready-to-play");
			play.removeClass("playing");
			// ownBtn.css("display", "none");
		}
	});

	
	// 2 监听底部音乐播放条的事件
	// 2.1 监听播放/暂停按钮的点击事件
	var play = footer.children(".play");
	play.click(function () {
		var playing = $(".is-playing"),
			readyToPlay = $(".ready-to-play");

		if ($(this).hasClass("playing")) {
			$(this).removeClass("playing");
			playing.removeClass("is-playing");
			playing.addClass("ready-to-play");
		} else {
			$(this).addClass("playing");
			readyToPlay.removeClass("ready-to-play");
			readyToPlay.addClass("is-playing");
		}
	});

	// 2.2 监听声音开关按钮的点击事件
	var voice = $(".voice");
	voice.click(function () {
		$(this).toggleClass("silent");
	});

	// 2.3 监听纯净模式按钮的点击事件
	var clearMode = $(".clear-mode");
	clearMode.click(function () {
		$(this).toggleClass("clear-mode-on");
	});

	// 2.4 监听播放模式按钮的点击事件
	var mode = $(".mode");

	function replaceClass($obj, c1, c2) {
		$obj.removeClass(c1);
		$obj.addClass(c2);
	}

	mode.click(function () {
		if ($(this).hasClass("mode-in-order")) {
			replaceClass($(this), "mode-in-order", "mode-random");
			$(this).attr("title", "随机播放");
		} else if ($(this).hasClass("mode-random")) {
			replaceClass($(this), "mode-random", "mode-single-cycle");
			$(this).attr("title", "单曲循环");
		} else if ($(this).hasClass("mode-single-cycle")) {
			replaceClass($(this), "mode-single-cycle", "mode-list-cycle");
			$(this).attr("title", "列表循环");
		} else {
			replaceClass($(this), "mode-list-cycle", "mode-in-order");
			$(this).attr("title", "循序播放");
		}
	});

	// 2.5 监听


	// 4.弹出界面
	// 4.1 弹出登录界面
	var mask = $(".mask"),
		popupLogin = $(".popup-login");
	// 弹出登陆界面初始化函数
	function popupLoginPage() {
		mask.css("display", "block");
		popupLogin.css("display", "block");
		QQLogin();
		qqQRcodeLogin();
	}
	// 4.1.1 弹出登录界面的顶部选择栏：QQ登录/微信登录
	var loginBar = $(".popup-login>.login-bar>a"),
		qqLoginPage = $(".qq-login"),
		wechatLoginPage = $(".wechat-login"),
		wechatQRcode = $(".wechat-QRcode");
	
	loginBar.eq(0).click(QQLogin);  // 选择QQ登录
	loginBar.eq(1).click(wechatLogin); // 选择微信登录
	loginBar.eq(2).click(closeLogin);  // 关闭登陆界面

	// QQ登录界面初始化函数
	function QQLogin() {
		loginBar.eq(0).addClass("clicked");
		loginBar.eq(1).removeClass("clicked");
		qqLoginPage.css("display", "block");
		wechatLoginPage.css("display", "none");
		wechatQRcode.css("top", "180px");
	}
	
	// 微信登录界面初始化函数
	function wechatLogin() {
		loginBar.eq(1).addClass("clicked");
		loginBar.eq(0).removeClass("clicked");
		qqLoginPage.css("display", "none");
		wechatLoginPage.css("display", "block");
		wechatQRcode.animate({
			top: "100px"
		}, 300);
	}
	
	// 关闭登录界面函数
	function closeLogin() {
		mask.css("display", "none");
		popupLogin.css("display", "none");
	}
	

	// 4.1.2 QQ登录页面
	// 自动登录check-box
	var checkBox = $(".check");
	checkBox.parent().click(function () {
		var bgp = checkBox.css("background-position");
		if (bgp == "-75px -162.5px") {
			checkBox.css("background-position", "-93px -162.5px");
		} else {
			checkBox.css("background-position", "-75px -162.5px");
		}
	});

	// QQ二维码滑动事件
	var qqQRcode = $(".qq-QRcode"),
		scan = $(".scan");

	qqQRcode.parent().mouseenter(function () {
		$(this).css("background-color", "red");
		qqQRcode.stop().animate({
			left: "25%"
		}, 300, "swing", function () {
			scan.css("display", "block");
		});
	});
	qqQRcode.parent().mouseleave(function () {
		scan.css("display", "none");
		qqQRcode.stop().animate({
			left: "37%"
		}, 200);
	});

	// QQ扫码/账号密码登录
	var inputBox = $(".account-login .input-box"),
		submit = $(".account-login .submit"),
		clearInput = $(".clear-input"),
		accountLogin = $(".account-login"),
		QRcodeLogin = $(".QRcode-login"),
		accountLoginLink = $(".account-login-link").eq(0),
		QRcodeLoginLink = $(".QRcode-login-link").eq(0),
		forgetPaawordLink = $(".forget-password");

	QRcodeLoginLink.click(qqQRcodeLogin);  // QQ扫码登录
	accountLoginLink.click(qqAccountLogin); // QQ账号密码登录
	// QQ账号密码登陆界面初始化函数
	function qqAccountLogin() {
		accountLogin.css("display","block");
		QRcodeLogin.css("display", "none");
		forgetPaawordLink.css("display", "inline-block");
		$(this).css("display", "none");
	}
	// QQ二维码登录界面初始化函数
	function qqQRcodeLogin() {
		accountLogin.css("display","none");
		QRcodeLogin.css("display", "block");
		forgetPaawordLink.css("display", "none");
		accountLoginLink.css("display", "block");
	}
	
	// 输入表单
	inputBox.focus(function () {
		$(this).addClass("focus");
		$(this).css("border-color", "#4af");
	});
	inputBox.blur(function () {
		$(this).removeClass("focus");
		$(this).css("border-color", "#ececec");
	});
	inputBox.eq(0).on("input propertychange", function (e) {
		console.log($(this).val());
		var value = $(this).val().trim();
		$(this).val(value);
		if (value == "") {
			clearInput.css("display", "none");
		} else {

			clearInput.css("display", "inline-block");
		}
	});
	submit.mousedown(function () {
		$(this).css({
			borderRadius: "3px",
			borderColor: "#4af"
		});
	});
	submit.mouseup(function () {
		$(this).css({
			borderRadius: "0",
			borderColor: "#fff"
		});
	});
	clearInput.click(function () {
		// console.log(inputBox);
		inputBox.get(0).value = "";
		$(this).css("display", "none");
	});
	// 4.1.2 微信登录页面
	// 二维码动画


	// 4.2 弹出设置界面
	// 弹出设置界面初始化函数
	var popupSetting = $(".popup-setting");
	function popupSettingPage() {
		var keepHistoryList = $(".history-playlist span"),
			closeBtn = $(".setting-bar a"),
			cancelBtn = $(".setting-btn span").eq(1),
			submitBtn = $(".setting-btn span").eq(0),
			// 先记录复选框和单选框的状态，如没按保存按钮即不会保存修改的设置
			historyPlaylistStatus = $(".history-playlist input").eq(0).prop("checked"),
			playingSettingIndex;

		for (var i = 0; i < 3; i ++) {
			if ($(".playing-setting input").eq(i).prop("checked") == true) {
				playingSettingIndex = i;
				break;
			}
		}
		// 蒙版及设置页面显示
		mask.css("display", "block");
		popupSetting.css("display", "block");

		// 4.2.1 弹出设置界面顶部栏关闭按钮
		closeBtn.click(function () {
			closeWithoutSaving(historyPlaylistStatus, playingSettingIndex);
		});
		// 4.2.2 历史播放列表单选框checkbox（css搞定）
		// 4.2.3 播放设置复选框radio（css搞定）
		// 4.2.4 取消按钮点击事件
		cancelBtn.click(function () {
			closeWithoutSaving(historyPlaylistStatus, playingSettingIndex);
		});
		// 4.2.5 确定按钮
		submitBtn.click(closeSettingPage);
	}

	// 关闭页面函数时保存设置
	function closeSettingPage() {
		mask.css("display", "none");
		popupSetting.css("display", "none");
	}
	// 取消或者关闭设置页面是不保存设置项
	function closeWithoutSaving(status, index) {
		$(".history-playlist input").eq(0).prop("checked", status);
		$(".playing-setting input").eq(index).prop("checked", true);
		closeSettingPage();
	}
});