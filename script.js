const options = {
  childList: true,
  characterData: false,
  characterDataOldValue: false,
  attributes: false,
  subtree: true,
}

const regexp = new RegExp("^https?://");

function replaceToExpandedUrl(mutationsList, observer) {
  // ポップアップから正しいURLが取得できた場合は取得したURLに置換する
  const expandedUrlTarget = document.querySelector("div[role='tooltip']")
  let expandedUrl = "";
  let expandedUrlRemovedProtocol = "";
  if (expandedUrlTarget && expandedUrlTarget.textContent.startsWith("http")) {
    expandedUrl = expandedUrlTarget.textContent;
    expandedUrlRemovedProtocol = expandedUrl.replace(regexp, "");
  } else {
    return;
  }

  const targets = document.querySelectorAll("a[role='link']");
  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    const targetUrl = target.href;
    if (targetUrl.startsWith("http")) {
      const targetUrlRemovedProtocol = targetUrl.replace(regexp, "");
      if (expandedUrlRemovedProtocol !== targetUrlRemovedProtocol && expandedUrlRemovedProtocol.endsWith(targetUrlRemovedProtocol)) {
        target.href = expandedUrl;
      }
    }
  }
}

const mutationTarget = document.querySelector("#react-root");
const expandedUrlObserver = new MutationObserver(replaceToExpandedUrl);
expandedUrlObserver.observe(mutationTarget, options);

// MutationObserverで監視すると置換できない場合があるため、仕方なくmouseoverで置換する
document.querySelector("#react-root").addEventListener("mouseover", (event) => {
  const target = event.target;
  if (target.matches("a[role='link']") && target.href.includes("/t.co/")) {
    const url = target.textContent;
    if (url.startsWith("http")) {
      target.href = url.endsWith("…") ? url.substr(0, url.length - 1) : url;
    }
  }
});
