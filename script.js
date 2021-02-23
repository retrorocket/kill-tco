document.querySelector("#react-root").addEventListener("mouseover", (event) => {
  const target = event.target;
  if (target.matches("a[role='link']") && target.href.includes("/t.co/")) {
    const url = target.textContent;
    target.href = url.endsWith("…") ? url.substr(0, url.length - 1) : url;
  }
});
