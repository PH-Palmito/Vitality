const fileInput = document.getElementById('file');
const previewImage = document.getElementById('previewImage');
const previewContainer = document.getElementById('previewContainer');
const customFileUpload = document.querySelector('.custum-file-upload');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      previewImage.src = reader.result;
      previewContainer.style.display = 'flex'; // Exibe a moldura quando uma imagem for carregada
      previewImage.style.display = 'block'; // Exibe a imagem
      customFileUpload.style.display = 'none'; // Oculta o botão
    };
    reader.readAsDataURL(file);
  } else {
    // Se não houver imagem, ocultamos a moldura e a imagem
    previewContainer.style.display = 'none';
    previewImage.style.display = 'none';
    customFileUpload.style.display = 'flex'; // Exibe o botão novamente
  }
});
//========================pesquisa
document.querySelector('.search input').addEventListener('input', function(event) {
  const query = event.target.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(query) ? 'block' : 'none';
  });
});