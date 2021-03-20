const material = {
  logo: {
    pic: "https://i.imgur.com/iRssPpJ.png",
    title: "https://i.imgur.com/vJt0znH.png",
  },

  ticketInfo: {
    header: {
      icon: "+",
      title: "新增旅遊套票",
    },
    options: [
      { name: "套票名稱", hint: "請填寫套票名稱" },
      { name: "圖片網址", hint: "請填寫圖片網址" },
      { name: "景點地區", hint: "請選擇景點地區" },
      { name: "套票金額", hint: "請填寫套票金額" },
      { name: "套票組數", hint: "請填寫套票組數" },
      { name: "套票星級", hint: "請填寫套票星級" },
      { name: "套票描述", hint: "請填寫套票描述" },
    ],
  },
};

// === Function ===
function addLogo() {
  const dom = document.querySelector(".logo-container");
  const { pic, title } = material.logo;

  dom.innerHTML += `
			<img src="${pic}" class="logo-pic">
			<img src="${title}" class="logo-title">
    
    `;
}

function addOptions() {
  const dom = document.querySelector(".ticket-container");
  const { header, options } = material.ticketInfo;

  let htmlMsg = "";
  // add header
  const { icon, title } = header;
  htmlMsg += `
		<div class=${"ticket-header"}>
			<span class=${"ticket-btn-new"}>${icon}</span>
			<span class=${"ticket-title"}>${title}</span>
		</div>
	`;

  dom.innerHTML += htmlMsg;
}

// === main ===
addLogo();
addOptions();
