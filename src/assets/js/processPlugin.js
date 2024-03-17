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
  }, 20);
}

export function animateItems(index = 0) {

  const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


  const items = document.querySelectorAll("#process_line .item");


  if (index < items.length) {

    let firstItem = document.querySelectorAll('#process_line .item')[index];
    let offsetLeft = firstItem.offsetLeft + (firstItem.clientWidth / 2);
    document.querySelector("#process_line").style.setProperty("--line", offsetLeft + "px");

    setTimeout(() => {
      animateItem(items[index], () => {
        animateItems(index + 1);
      });
    }, 400)

  } else {
    document.querySelector("#process_line").style.setProperty("--line", "100%");
  }

}
