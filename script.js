function info() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');
    let semana = new Array ('Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom');
    let agora = new Date;
    let saida = document.getElementById('resultado');
    let dia = agora.getDate();
    let mes = agora.getMonth();
    let ano = agora.getFullYear();
    let sem = agora.getDay();  
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let seg = agora.getSeconds();

    saida.innerHTML = `<p>Dia: ${dia};</p>`;
    saida.innerHTML += `<p>Mês: ${meses[mes]};</p>`;
    saida.innerHTML += `<p>Ano: ${ano};</p>`;
    saida.innerHTML += `<p>Dia da semana: ${semana[sem]};</p>`;
    saida.innerHTML += `<p>Hora: ${hora};</p>`;
    saida.innerHTML += `<p>Minuto: ${min};</p>`;
    saida.innerHTML += `<p>Segundo: ${seg};</p>`;

}