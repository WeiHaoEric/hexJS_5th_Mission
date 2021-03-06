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

let tripData = null;

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
let filterNum = "?";
let filterTarget = "All";

function addFilter() {
  const dom = document.querySelector(".area-filter-container");
  // console.log(dom);
  const { filterArea: areas } = material;
  dom.innerHTML = `
  <div class="filter-ctl-container">
    <div class = "filter-area">
      <select class="area-selector">
        ${Object.values(areas).map(
          (areaName) => `<option>${areaName}</option>`
        )}
      </select>
      <span>本次搜尋共${filterNum}筆資料</span>
    </div>

    <div class = "chart-container">
      <div class="donut-chart"></div>
    </div>
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

function insertChart() {
  const parseArea = () => {
    const tmp = {};
    tripData.forEach(({ area }) => {
      if (tmp[area] === undefined) tmp[area] = 1;
      else tmp[area] += 1;
    });

    const result = Object.keys(tmp).map((area) => [area, tmp[area]]);

    return result;
  };

  const colResult = parseArea();
  console.log(colResult);

  var chart = c3.generate({
    bindto: ".donut-chart",
    data: {
      columns: colResult,
      type: "donut",
      colors: {
        "台北": "#26C0C7",
        "台中": "#5151D3",
        "高雄": "#E68618",
      },
    },

    donut: {
      title: "套票地區比重",
    },
  });
}

function renderData() {
  addLogo();
  addTicketOptions();
  addFilter();
  insertChart();
  addTripCardList();
}

// === main ===
axios
  .get(
    // "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json" // 第六週 API
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json" // 第七週 API
  )
  .then(({ data }) => {
    tripData = data;
    renderData();
  });
