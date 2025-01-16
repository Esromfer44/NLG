// Seleciona os elementos
const link = document.getElementById("startProcess");
const errorMessage = document.getElementById("errorMessage");
const loading = document.getElementById("loading");

// Adiciona o evento de clique no link
link.addEventListener("click", function (event) {
  event.preventDefault(); // Evita o comportamento padrão do link

  // Exibe a mensagem de erro
  errorMessage.classList.remove("hidden");

  // Mostra o carregamento após 2 segundos
  setTimeout(() => {
    errorMessage.classList.add("hidden");
    loading.classList.remove("hidden");
  }, 2000);

  // Redireciona para a página após 7 segundos
  setTimeout(() => {
    window.location.href = "instagram.html"; // Substitua pelo nome do arquivo da página
  }, 7000);
});
