const material = {
  logo: {
    pic: "https://i.imgur.com/iRssPpJ.png",
    title: "https://i.imgur.com/vJt0znH.png",
  },
};

function addLogo(dom) {
  const { pic, title } = material.logo;

  dom.innerHTML = `
    <img src="${pic}">
    <img src="${title}">
    `;
}

const domStart = document.querySelector(".dom-start");
addLogo(domStart);
console.log(domStart);
