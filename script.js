// Seleciona o formulário
const form = document.querySelector(".agendamento form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede recarregar a página

    // Pegar valores
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    // Verificar se está vazio
    if (nome === "" || data === "" || hora === "") {
        alert("❌ Preencha todos os campos!");
        return;
    }

    // Mensagem de sucesso
    alert(
        "✅ Horário marcado com sucesso!\n\n" +
        "Nome: " + nome + "\n" +
        "Data: " + data + "\n" +
        "Hora: " + hora
    );

    // Limpar formulário
    form.reset();
});
