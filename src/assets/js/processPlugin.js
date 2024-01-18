export function animateItem(item, callback) {
  item.classList.add("an_go");
  let n = Number(
    item.querySelector(".process_bg").getAttribute("data-percent")
  );
  let p = 0;
  let pp = setInterval(() => {
    p++;
    item.querySelector(".process_bg").style.setProperty("--percent", p);

    if (p >= n) {
      clearInterval(pp);
      callback();
    }
  }, 60);
}

export function animateItems(index = 0) {
  

  const items = document.querySelectorAll("#process_line .item");

  items.forEach((item)=>{
    item.style.setProperty("--line", "0%");
  })

  if (index < items.length) {
    animateItem(items[index], () => {
      let l = (100 / items.length) * (index*2);
      animateItems(index + 1);
      document.querySelector("#process_line").style.setProperty("--line", l + "%");
    });
  }

}

