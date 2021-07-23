document.querySelector("#react-root").addEventListener("mouseover", (event) => {
  const target = event.target;
  const url = target.textContent;
  if (target.matches("a[role='link']") && target.href.includes("/t.co/") && url.startsWith("http")) {
    target.href = url.endsWith("…") ? url.substr(0, url.length - 1) : url;
  }
});
