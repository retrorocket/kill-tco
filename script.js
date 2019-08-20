document.querySelector("#react-root").addEventListener("mouseover", (event) => {
  const target = event.target;
  if (target.matches("a[role='link']") && target.title) {
    target.href = target.title;
  }
});
