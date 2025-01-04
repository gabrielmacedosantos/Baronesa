// Função para alternar a visibilidade da janela do chat
function toggleChatWindow() {
  const chatWindow = document.getElementById('chatWindow');
  // Alterna entre visível e escondido
  if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
    chatWindow.style.display = 'flex';
  } else {
    chatWindow.style.display = 'none';
  }
}