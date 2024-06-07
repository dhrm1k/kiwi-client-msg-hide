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
    function hideMessages() {
      var elements = document.querySelectorAll('div.kiwi-messagelist-body');
      for (var i = 0, l = elements.length; i < l; i++) {
        elements[i].style.display = "none";
      }
    }
    setTimeout(hideMessages, 1000);
  }
  
  function showMessagesScript() {
    function showMessages() {
      var elements = document.querySelectorAll('div.kiwi-messagelist-body');
      for (var i = 0, l = elements.length; i < l; i++) {
        elements[i].style.display = "block";
      }
    }
    setTimeout(showMessages, 1000);
  }
  