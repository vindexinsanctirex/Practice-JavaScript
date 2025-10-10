// // localStorage.setItem("DiaSemana", "Sexta-Feira");
// // localStorage.setItem("Nome", "Caio");

// // let informacao = localStorage.getItem("DiaSemana");
// // console.log(informacao)



// // localStorage.removeItem("DiaSemana"); // remove um item específico

// // localStorage.Clear(); // remove todos os itens

// // sessionStorage


// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');

// btn1.addEventListener('click', function() {

//     let text = document.getElementById('text').value;
//     localStorage.setItem('Mensagem', text);

    
// })

// btn2.addEventListener('click', function() {


//     localStorage.removeItem('Mensagem');

    
// })

// btn3.addEventListener('click', function() {

//     localStorage.clear();

    
// })

// let paragrafo = document.createElement('p');
// paragrafo.textContent = localStorage.getItem('Mensagem');
// document.body.appendChild(paragrafo);

// const pessoa = {
//     nome: "Caio",
//     profissao: "Programador",
//     linguagens: ["Python", "Java", "Javascript"],
//     acao: function(){
//         console.log('Olá')
//     }
// }

// const pessoaJson = JSON.stringify(pessoa)
// localStorage.setItem('Objeto', pessoaJson)

// const pessoaToObject = JSON.parse(localStorage.getItem('Objeto'))
// console.log(pessoaToObject)

document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('theme');
    const sizeSelect = document.getElementById('size');
    const saveBtn = document.getElementById('save');
    const body = document.body;

    // Carregar preferências
    function loadPreferences() {
        const preferences = JSON.parse(localStorage.getItem('preferences')) || {
            theme: 'light',
            size: 'medium'
        };
        
        themeSelect.value = preferences.theme;
        sizeSelect.value = preferences.size;
        applyPreferences(preferences);
    }

    // Aplicar preferências
    function applyPreferences(preferences) {
        // Aplicar tema
        body.classList.remove('dark');
        if (preferences.theme === 'dark') {
            body.classList.add('dark');
        }

        // Aplicar tamanho
        body.classList.remove('small', 'medium', 'large');
        body.classList.add(preferences.size);
    }

    // Salvar preferências
    function savePreferences() {
        const preferences = {
            theme: themeSelect.value,
            size: sizeSelect.value
        };
        
        localStorage.setItem('preferences', JSON.stringify(preferences));
        applyPreferences(preferences);
    }

    // Event listeners
    saveBtn.addEventListener('click', savePreferences);

    // Carregar ao iniciar
    loadPreferences();
});

