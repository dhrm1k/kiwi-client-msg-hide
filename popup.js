document.getElementById('hideBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: hideMessagesScript
    });
  });
});

document.getElementById('showBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: showMessagesScript
    });
  });
});

function hideMessagesScript() {
  var elements = document.querySelectorAll('div.kiwi-messagelist-body');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}

function showMessagesScript() {
  var elements = document.querySelectorAll('div.kiwi-messagelist-body');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}
