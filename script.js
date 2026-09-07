//目標日期
const Dday = new Date("2026/09/14 22:00:00");

function updateCountdown() {
  const countdown = document.getElementById("倒數");
  if (!countdown) {
    return;
  }

  const now = new Date();
  
  // 計算總共還剩多少秒
  let totalSeconds = Math.floor((Dday - now) / 1000);

  // 如果時間到了
  if (totalSeconds <= 0) {
    countdown.textContent = "順飛！平安抵達!";
    return;
  }

  // 拆解 天、時、分、秒
  const days = Math.floor(totalSeconds / 86400);                    // 1 天 = 86400 秒
  const hours = Math.floor((totalSeconds % 86400) / 3600);          // 扣除天數後剩下的小時
  const minutes = Math.floor((totalSeconds % 3600) / 60);           // 扣除小時後剩下的分鐘
  const seconds = totalSeconds % 60;                                // 扣除分鐘後剩下的秒數

  // 更新到網頁上
  countdown.textContent = 
    `倒計時：${days} 天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`;
}

// 網頁剛載入時立刻執行一次（避免白畫面等待 1 秒）
updateCountdown();

// 每 1000 毫秒（1 秒）自動更新一次
setInterval(updateCountdown, 1000);

document.getElementById("backButton").addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});