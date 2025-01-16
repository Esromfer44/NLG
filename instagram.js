// Seleciona o formulário e o campo de texto
const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");

// Adiciona um evento ao enviar o formulário
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém o valor do nome de usuário
  const username = usernameField.value.trim();

  // Verifica se o campo não está vazio
  if (username) {
    // Redireciona para a página de perguntas anônimas (substitua pelo URL correto)
    window.location.href = `perguntas-anonimas.html?username=${encodeURIComponent(username)}`;
  } else {
    alert("Por favor, insira um nome de usuário.");
  }
});
