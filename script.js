function verificar() {
    const nota = parseFloat(document.getElementById('nota').value);
    const faltas = parseInt(document.getElementById('faltas').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(nota) || isNaN(faltas)) {
      resultado.textContent = "Por favor, insira valores válidos.";
      resultado.style.color = "black";
      return;
    }

    if (nota >= 7 && faltas <= 20) {
      resultado.textContent = "Aprovado ✅";
      resultado.style.color = "green";
    } else if (nota < 7 && faltas > 20) {
      resultado.textContent = "Reprovado por Nota e Faltas ❌";
      resultado.style.color = "red";
    } else if (nota < 7) {
      resultado.textContent = "Reprovado por Nota ❌";
      resultado.style.color = "red";
    } else {
      resultado.textContent = "Reprovado por Faltas ❌";
      resultado.style.color = "red";
    }
  }