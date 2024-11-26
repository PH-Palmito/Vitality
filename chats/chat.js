document.querySelectorAll('.donors-list li').forEach((donor) => {
    donor.addEventListener('click', () => {
      const chatId = donor.getAttribute('data-chat');

      // Oculta todos os chats
      document.querySelectorAll('.chat-window').forEach((chat) => {
        chat.classList.remove('active');
      });

      // Exibe o chat correspondente
      document.getElementById(chatId).classList.add('active');
    });
  });
