const createElement = (type, className, content) => {
  const element = document.createElement(type);
  element.className = className;
  element.innerHTML = content;
  return element;
};

const renderLefCol = () => {
  const leftCol = document.getElementById("left-col");
  leftContents.forEach((item) => {
    const container = document.createElement("div");
    container.className = "left-col__content";
    if (item?.catagories) {
      container.appendChild(createElement("p", "catagories", item.catagories));
    }
    if (item?.position) {
      container.appendChild(createElement("p", "position", item.position));
    }
    if (item?.company) {
      container.appendChild(createElement("p", "company", item.company));
    }
    if (item?.time) {
      container.appendChild(
        createElement(
          "p",
          "time",
          item.jobType ? item.time + ", " + item.jobType : item.time
        )
      );
    }
    if (item.content) {
      container.appendChild(createElement("p", "content", item.content));
    }
    leftCol.appendChild(container);
  });
};

const renderRightCol = () => {
  const rightCol = document.getElementById("right-col__content");
  rightContents.forEach((item) => {
    const container = document.createElement("div");
    container.className = "right-col__content";
    container.appendChild(
      createElement("p", "right-content__tittle", item.title)
    );
    item?.contents.forEach((text) => {
      container.appendChild(createElement("p", "right-content__text", text));
    });

    rightCol.appendChild(container);
  });
};

renderRightCol();
renderLefCol();
