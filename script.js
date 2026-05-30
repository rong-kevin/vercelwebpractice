const actionButton = document.getElementById('actionButton');
const message = document.getElementById('message');

actionButton.addEventListener('click', () => {
  message.textContent = '你剛剛按了按鈕！網站架構已經建立完成。';
});
