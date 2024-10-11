const facts = [
    "Собаки — самые старые домашние животные, и они живут с людьми уже более 15 000 лет.",
    "У каждой собаки есть уникальный отпечаток носа, как у людей отпечатки пальцев.",
    "Собаки могут чувствовать запахи в 10 000–100 000 раз лучше, чем люди.",
    "Некоторые собаки могут бежать со скоростью до 72 км/ч!",
    "Собаки — социальные животные и нуждаются в общении и взаимодействии.",
    "Лабрадоры часто используются в спасательных операциях благодаря их обонянию и выносливости.",
    "Бульдоги известны своим спокойным и дружелюбным характером.",
    "Пудели считаются одними из самых умных пород собак.",
    "Хаски имеют двойной слой шерсти, что позволяет им выживать в холодных климатических условиях.",
    "Таксы были выведены для охоты на барсуков и других норных животных."
];

// Объект с описаниями пород
const breedDescriptions = {
    "Лабрадор": "Лабрадор — дружелюбная, умная и энергичная порода, идеально подходящая для семей и рабочих задач.",
    "Бульдог": "Бульдог известен своим спокойным и дружелюбным характером, а также характерным внешним видом.",
    "Пудель": "Пудели — одни из самых умных пород собак, обладающие высокой обучаемостью и элегантностью.",
    "Хаски": "Хаски — выносливая и активная порода с двойным слоем шерсти, прекрасно приспособленная к холодному климату.",
    "Такса": "Таксы — маленькие, но отважные собаки, выведенные для охоты на норных животных."
};

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = document.getElementById('fact');
    fact.textContent = facts[randomIndex];
    fact.classList.remove('hidden');
});

// Функция для отображения информации о породе
function showBreedInfo(breed) {
    const breedInfo = document.getElementById('breedInfo');
    const breedName = document.getElementById('breedName');
    const breedDescription = document.getElementById('breedDescription');

    breedName.textContent = breed;
    breedDescription.textContent = breedDescriptions[breed] || "Информация о породе недоступна.";
    breedInfo.classList.remove('hidden');
}

// Функция для скрытия информации о породе
function hideBreedInfo() {
    const breedInfo = document.getElementById('breedInfo');
    breedInfo.classList.add('hidden');
}

// Добавляем обработчики событий для каждого элемента списка
const breedItems = document.querySelectorAll('.breed-list li');
breedItems.forEach(item => {
    item.addEventListener('click', () => {
        const breed = item.getAttribute('data-breed');
        showBreedInfo(breed);
    });
});

// Обработчик для кнопки закрытия информации о породе
document.getElementById('closeBreedInfo').addEventListener('click', hideBreedInfo);

// Закрытие информации о породе при клике вне области
window.addEventListener('click', (event) => {
    const breedInfo = document.getElementById('breedInfo');
    if (event.target === breedInfo) {
        hideBreedInfo();
    }
});

