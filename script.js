// Função principal que verifica se é possível formar um palíndromo
function canFormPalindrome(seats) {
    // Conta a frequência de cada número
    const frequency = {};
    for (const num of seats) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    // Conta quantos números têm frequência ímpar
    let oddCount = 0;
    for (const num in frequency) {
        if (frequency[num] % 2 !== 0) {
            oddCount++;
        }
    }
    
    // Um palíndromo pode ter no máximo um número com frequência ímpar (o do meio)
    return oddCount <= 1;
}

// Função para processar a entrada do usuário
function processInput() {
    const input = document.getElementById('seats-input').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (!input) {
        resultDiv.textContent = "Por favor, insira os números dos assentos.";
        return;
    }
    
    try {
        // Converte a string de entrada para um array de números
        const seats = input.split(',').map(num => {
            const parsed = parseInt(num.trim(), 10);
            if (isNaN(parsed)) throw new Error();
            return parsed;
        });
        
        // Verifica se pode formar palíndromo e exibe o resultado
        const canForm = canFormPalindrome(seats);
        resultDiv.textContent = canForm ? "true" : "false";
        resultDiv.style.color = canForm ? "#00FF00" : "#ff0044";
    } catch (e) {
        resultDiv.textContent = "Entrada inválida. Use números separados por vírgulas (ex: 1,2,3,2,1).";
        resultDiv.style.color = "#ff0044";
    }
}

// Função para resetar a aplicação
function resetApp() {
    document.getElementById('seats-input').value = "";
    document.getElementById('result').textContent = "";
    document.getElementById('result').style.color = "#00FFFF";
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('check-btn').addEventListener('click', processInput);
    document.getElementById('reset-btn').addEventListener('click', resetApp);
    
    // Permite pressionar Enter para verificar
    document.getElementById('seats-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            processInput();
        }
    });
});