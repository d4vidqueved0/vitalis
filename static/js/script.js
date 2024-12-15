document.addEventListener('DOMContentLoaded', function () {
    let btnChat = document.getElementById('btn-chat');
    let menu = document.getElementById('chat');
    let userInput = document.getElementById('user-input');
    let btnSend = document.getElementById('btn-send');
    let questionsContainer = document.getElementById('questions');

    const questions = [
        { id: 1, question: "¿Cada cuánto tiempo debo revisar la calidad del agua de mi pozo?", answer: "Se recomienda realizar una revisión de la calidad del agua del pozo al menos una vez al año. Sin embargo, si hay eventos que podrían haber afectado la calidad del agua, como lluvias fuertes, inundaciones, construcción cercana o cambios en el uso del terreno alrededor del pozo, es aconsejable hacer un análisis adicional." },
        { id: 2, question: "¿Cómo prevenir la contaminación del agua de mi pozo?", answer: " Mantén el pozo bien sellado, evita el contacto con aguas superficiales, haz mantenimiento regular y asegúrate de que no haya fuentes de contaminación cerca." },
        { id: 3, question: "¿Por qué el agua de mi pozo está de color amarillo o marrón?", answer: "El color puede deberse a hierro o sedimentos en el agua. Usa un filtro de sedimentos o un sistema de tratamiento para mejorarla" },
        { id: 4, question: "¿Es cierto que el agua de pozo puede tener bacterias que causan enfermedades?", answer: " Sí, las bacterias como la E. coli pueden estar en el agua si no se trata o si el pozo está mal protegido. Es importante realizar análisis regularmente." },
    ];

    function toggleMenu() {
        if (menu.style.height == '350px'){
            menu.style.height = '0px'
            menu.style.width = '0px'
    
        }else{
            menu.style.height = "350px"
            menu.style.width = '350px'    
        }
    }

 
    function showQuestions() {
        questionsContainer.innerHTML = '';

        questions.forEach((q) => {
            let div = document.createElement('div');
            div.textContent = `${q.id}. ${q.question}`;
            div.style.marginBottom = '10px';
            questionsContainer.appendChild(div);
        });
    }


    function addResponse(option) {
        let question = questions.find(q => q.id === parseInt(option));

        if (question) {
            let div = document.createElement('div');
            div.textContent = `${question.answer}`;
            div.style.color = 'blue';
            div.style.marginTop = '10px';
            questionsContainer.appendChild(div);

            div.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            let div = document.createElement('div');
            div.textContent = 'Por favor ingresa un número entre 1 y 4';
            div.style.color = 'red';
            div.style.marginTop = '10px';
            questionsContainer.appendChild(div);
            div.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
        
    }

    btnSend.addEventListener('click', function () {
        let option = userInput.value.trim();

        if (option) {
            addResponse(option);
            userInput.value = ''; 
        }
    });

    btnChat.addEventListener('click', toggleMenu);
    showQuestions();
});
