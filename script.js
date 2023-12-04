document.addEventListener("DOMContentLoaded", function () {
  fetch("dataset.json")
    .then((response) => response.json())
    .then((data) => countSchoolIds(data))
    .catch((error) => console.error("Erro ao carregar dados:", error));
});

function countSchoolIds(data) {
  const idCounts = {};

  data.escolas.forEach((escola) => {
    const id = escola.id_escola;

    // Incrementa o contador para o ID atual
    idCounts[id] = (idCounts[id] || 0) + 1;
  });

  // Exibe os resultados
  displayIdCounts(idCounts);
}

function displayIdCounts(idCounts) {
  const appElement = document.getElementById("app");
  appElement.innerHTML = "";

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("bg-white", "rounded", "p-4", "mb-4", "shadow-md");

  resultDiv.innerHTML =
    "<h2 class='text-2xl font-bold mb-2'>Contagem de IDs de Escola</h2>";

  // Itera sobre os resultados e os exibe
  for (const id in idCounts) {
    const count = idCounts[id];
    const paragraph = document.createElement("p");
    paragraph.innerText = `ID: ${id}, Quantidade: ${count}`;
    resultDiv.appendChild(paragraph);
  }

  appElement.appendChild(resultDiv);
}
