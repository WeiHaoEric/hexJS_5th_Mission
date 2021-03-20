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
      { title: "套票名稱", hint: "請填寫套票名稱" },
      { title: "圖片網址", hint: "請填寫圖片網址" },
      { title: "景點地區", hint: "請選擇景點地區" },
      { title: "套票金額", hint: "請填寫套票金額" },
      { title: "套票組數", hint: "請填寫套票組數" },
      { title: "套票星級", hint: "請填寫套票星級" },
      { title: "套票描述", hint: "請填寫套票描述" },
    ],
  },

  filterArea: {
    All: "全部地區",
    TP: "台北",
    TC: "台中",
    KH: "高雄",
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

function addTicketOptions() {
  const dom = document.querySelector(".ticket-container");
  const { header, options } = material.ticketInfo;

  function createOptionList() {
    // options.title, hint
    let optList = "";
    options.forEach(({ title, hint }) => {
      optList += `
        <div class="ticket-input-container">
          <span class="ticket-title">${title}</span>
          <div class="ticket-input-block">
            <input value=${hint} class="ticket-input">
          </div>
        </div>
      `;
    });

    return optList;
  }

  let htmlMsg = "";
  // add header
  const { icon, title } = header;

  htmlMsg += `
		<div class=${"ticket-header"}>
			<span class=${"ticket-btn-new"}>${icon}</span>
			<span class=${"ticket-title"}>${title}</span>
		</div>

    <div class=${"ticket-content"}>
      ${createOptionList()}
    </div>
	`;

  dom.innerHTML += htmlMsg;
}

// === bottom part ===
const filterNum = 6;
function addFilter() {
  const dom = document.querySelector(".area-filter-container");
  // console.log(dom);
  const { filterArea: areas } = material;
  dom.innerHTML = `
  <div class="filter-ctl-container">
    <select class="area-selector">
      ${Object.values(areas).map((areaName) => `<option>${areaName}</option>`)}
    </select>
    <span>本次搜尋共${filterNum}筆資料</span>
  </div>
  `;
}

// function addTripCard() {
//   console.log("addTripCard");
// }

// === main ===
addLogo();
addTicketOptions();
addFilter();
