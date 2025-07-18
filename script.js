// Espera o conteúdo da página carregar completamente antes de executar o script.
// É uma boa prática para evitar erros de JavaScript tentando acessar elementos
// que ainda não existem na página.
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECIONANDO OS ELEMENTOS
    const blocoDeNotas = document.getElementById('blocoDeNotas');
    const btnLimparNotas = document.getElementById('btnlimparNotas');
    const btnSalvarNotas = document.getElementById('btnSalvarNotas');

    // 2. CARREGANDO DADOS DO LOCALSTORAGE
    const notaSalva = localStorage.getItem('minhaNota');

    if (notaSalva) {
        blocoDeNotas.value = notaSalva;
    }

    // 3. EVENTO PARA LIMPAR A NOTA
    btnLimparNotas.addEventListener('click', () => {
        blocoDeNotas.value = '';
        localStorage.removeItem('minhaNota');
        console.log("Nota removida do localStorage.");
    });

    // 4. EVENTO PARA SALVAR A NOTA
    btnSalvarNotas.addEventListener('click', () => {
        localStorage.setItem('minhaNota', blocoDeNotas.value);
        console.log("Nota salva no localStorage!");
    });

});
