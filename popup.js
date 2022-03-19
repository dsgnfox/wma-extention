const buttons = document.querySelectorAll('.action-button');

const buttonHandler = async (button) => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const { callbackName } = button.dataset;

    chrome.tabs.sendMessage(tab.id, { callbackName });
};

buttons.forEach((button) => {
    button.addEventListener('click',  () => {
        buttonHandler(button);
    });
});