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
    All: ["台北", "台中", "高雄"],
    TP: "台北",
    TC: "台中",
    KH: "高雄",
  },
};

let tripData = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];

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
let filterNum = 6;
let filterTarget = "All";

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

function addTripCardList() {
  const dom = document.querySelector(".card-container");

  // create Trip Card
  function TripCard({
    id,
    name,
    imgUrl,
    area,
    description: tripDesc,
    group,
    price,
    rate,
  }) {
    return `
    <div class="a-card-container col-4">
      <div class="card-top container">
        <span class="card-area-name col-3">${area}</span>
        <img class="card-trip-img col-12" src=${imgUrl} >
      </div>
      
      <div class="card-middle container">
        <div class="row">
          <span class="card-rate">${8.6}</span>
          <h4 class="card-trip-name col-12">${name}</h4>
          <p class="card-trip-desc col-12">${tripDesc}</p>
        </div>
      </div>

      <div class="container">
        <div class="row card-bottom">
            <div class="card-icon col-1">!</div>
            <div class="card-remain col-5">剩下最後${group}組</div>
            <div class="card-price-info col-5 ">
              <div class="row">
                <div class="card-dollar col-3">TWD</div>
                <div class="card-price col-8">$${price}</div>
              </div>
            </div>  
          </div>
      </div>
      
    </div>
   `;
  }

  // card list
  let cardList = "";
  tripData.forEach((trip) => {
    console.log(TripCard(trip));
    cardList += TripCard(trip);
  });
  console.log(cardList);
  dom.innerHTML = `
  <div class="card-list-container row">
    ${cardList}
  </div>
  `;
}

// === main ===
addLogo();
addTicketOptions();
addFilter();
addTripCardList();

{
  /* <div class="a-card">
<div class="card-top">
  <div class="card-area-name-block">
    <div class="card-area-name">${area}</div>
  </div>
  <div class="card-trip-img">
    <img src=${imgUrl} width="70%" height="70%">
  </div>
</div>
<div class="card-bottom">
  <div class="card-trip-name">
    ${name}
  </div>
  <div class="card-trip-desc">${tripDesc}</div>
</div>
</div> */
}
