

chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: hideMessagesScript
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
