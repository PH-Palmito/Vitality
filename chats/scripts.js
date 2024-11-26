// Alternar entre os chats
document.querySelectorAll('.donors-menu ul li').forEach((donor) => {
    donor.addEventListener('click', () => {
      // Remove a classe ativa de todos os doadores
      document.querySelectorAll('.donors-menu ul li').forEach((item) => {
        item.classList.remove('active');
      });

      // Adiciona a classe ativa ao doador clicado
      donor.classList.add('active');

      // Pega o chat correspondente
      const chatId = donor.getAttribute('data-chat');

      // Esconde todos os chats
      document.querySelectorAll('.chat-window').forEach((chat) => {
        chat.classList.remove('active');
      });

      // Mostra o chat selecionado
      document.getElementById(chatId).classList.add('active');
    });
  });

  // Enviar mensagens
  document.querySelectorAll('.chat-input').forEach((inputSection) => {
    const inputField = inputSection.querySelector('input');
    const sendButton = inputSection.querySelector('button');

    // Função para adicionar mensagem
    function addMessage() {
      const messageText = inputField.value.trim();
      if (messageText === '') return; // Não enviar mensagens vazias

      const chatMessages = inputSection.parentElement.querySelector('.chat-messages');

      // Cria a mensagem no DOM
      const message = document.createElement('div');
      message.classList.add('message', 'sent');
      message.textContent = messageText;

      // Adiciona a mensagem e rola o chat para o fim
      chatMessages.appendChild(message);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Limpa o campo de input
      inputField.value = '';
    }

    // Clique no botão para enviar a mensagem
    sendButton.addEventListener('click', addMessage);

    // Pressionar Enter para enviar a mensagem
    inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        addMessage();
      }
    });
  });
