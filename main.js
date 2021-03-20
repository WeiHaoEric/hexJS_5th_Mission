const material = {
  logo: {
    pic: "https://i.imgur.com/iRssPpJ.png",
    title: "https://i.imgur.com/vJt0znH.png",
  },
};


function addLogo(dom) {
  const { pic, title } = material.logo;

  dom.innerHTML = `
    <div class="logo-container">
        <img src="${pic}" class="logo-pic">
        <img src="${title}" class="logo-title">
    </div>
    `;
}

const domStart = document.querySelector(".dom-start");



addLogo(domStart);
console.log(domStart);
