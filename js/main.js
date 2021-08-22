// 網頁的主程式寫在這裡
// 綁定 .ad-toggle-btn 的點擊事件
$(".ad-toggle-btn").click(function () {
    console.log("[.ad-toggle-btn被點擊了]");
    // 讓.side-box 被切換class="active"
    $(".side-box").toggleClass("active");

});

// 綁定 #removeSideBoxBtn 的點擊事件
$("#removeSideBoxBtn").click(function () {
    console.log("[#removeSideBoxBtn被點擊了]");
    $(".side-box").fadeOut(500);

});

$("#goBackBtn").click(function () {
    console.log("滑到最上方");
    const duration = 300;
    $("html, body").stop().animate({
        scrollTop:0
    }, duration);
});

