const quizData = [
    {
        phase: 0,
        phaseTitle: "Балалык",
        questions: [
            { q: "Манас баатырдын атасы ким?", options: ["Жакып", "Бакай", "Кошой", "Ногой"], correct: 0, fact: "Жакып бай баласыздыктан зарыгып жүрүп, Манасты көргөндө чоң той берген." },
            { q: "Манас төрөлгөндө азан чакырып ат койгон ким?",
              options: ["Бакай", "Айкожо", "Олуя чал", "Жакып"], correct: 2, fact: "Уламыш боюнча, балага Манас деген атты кайыптан пайда болгон ак сакалдуу карыя койгон." },
            { q: "Манастын энесинин аты ким?", options: ["Каныкей", "Арууке", "Чыйырды", "Бакдөөлөт"], correct: 2, fact: "Чыйырды эне Манасты төрөөрдө жолборстун жүрөгүнө жеррик болгон деп айтылат." },
            { q: "Манас бала кезинде кимдин колунда мал кайтарып өскөн?", options: ["Ошпур", "Жакып", "Кошой", "Эсенкан"], correct: 0, fact: "Жакып баласынын тентектигин басуу үчүн аны койчу Ошпурга кой кайтарууга жиберген." },
            { q: "Манас төрөлгөн жер кайсы?", options: ["Талас", "Алтай", "Самарканд", "Бухара"], correct: 1, fact: "Эпосто кыргыздар Алтайга сүрүлгөн кезде Манас ошол жерде жарык дүйнөгө келген." }
        ]
    },
    {
        phase: 1,
        phaseTitle: "Биримдик",
        questions: [
            { q: "Манастын эң ишенимдүү досу жана шериги?", options: ["Чубак", "Алмамбет", "Сыргак", "Ыраман"], correct: 1, fact: "Алмамбет — өз элинен кетип, акыйкаттык издеп кыргыздарга кошулган баатыр." },
            { q: "Манастын акылман кеңешчиси ким?", options: ["Бакай", "Кошой", "Ажыбай", "Төштүк"], correct: 0, fact: "Бакай — кыргыз элинин акылмандыгынын жана биримдигинин символу." },
            { q: "Манастын жубайы Каныкейдин өз аты?", options: ["Айчүрөк", "Санирабига", "Карачач", "Бурулча"], correct: 1, fact: "Ал Бухара шаарынын башкаруучусу Темиркандын кызы болгон." },
            { q: "Манастын канча чоросу болгон?", options: ["12", "40", "100", "7"], correct: 1, fact: "Кырк чоро — бул Манастын айланасына баш кошкон тандалган жоокерлер." },
            { q: "Манасты кимдер хан көтөрүшкөн?", options: ["Алтайдагы кыргыздар", "Кытайлар", "Таластыктар", "Жалгыз Жакып"], correct: 0, fact: "Анын баатырдыгына ыраазы болгон Алтайдагы кыргыздар жана башка уруулар аны хан шайлашкан." }
        ]
    },
    {
        phase: 2,
        phaseTitle: "Чоң Казат",
        questions: [
            { q: "Манастын тулпары кандай аталган?", options: ["Тайбуурул", "Аккула", "Чалкуйрук", "Гулсарат"], correct: 1, fact: "Аккула согуш талаасында Манастын ишенимдүү шериги болгон." },
            { q: "Манастын согушта колдонгон негизги куралы?", options: ["Ачалбарс", "Найыза", "Адамкары", "Зулпукор"], correct: 0, fact: "Ачалбарс — Манастын касиеттүү кылычынын аты." },
            { q: "Манастын башкы душманы ким?", options: ["Алооке", "Коңурбай", "Жолой", "Эсенкан"], correct: 1, fact: "Коңурбай — эпостогу терс каармандардын эң күчтүүсү жана айлакери." },
            { q: "Манастын ок өтпөс сооту?", options: ["Аколпок", "Көккүбө", "Олпок", "Күрөөкө"], correct: 0, fact: "Аколпокту Каныкей жети жыл бою атайын даярдап тиккен." },
            { q: "Чоң Казаттын максаты эмне болгон?", options: ["Жер басып алуу", "Элди азат кылуу", "Байлык табуу", "Саякаттоо"], correct: 1, fact: "Бул жортуул кыргыз жерин душмандардан бошотуу үчүн жасалган." }
        ]
    },
    {
        phase: 3,
        phaseName: "Насаат",
        questions: [
            { q: "Манастын күмбөзү кайсы жерде?", options: ["Бишкек", "Ош", "Талас", "Нарын"], correct: 2, fact: "Күмбөз Талас жергесиндеги Кароол-Чокунун этегинде жайгашкан." },
            { q: "Манастын керээзиндеги эң башкы осуят?", options: ["Бай болуу", "Биримдик", "Күчтүү болуу", "Көп окуу"], correct: 1, fact: "«Бөлүнбө, кыргыз, бөлүнбө!» — бул эпостун эң башкы идеясы." },
            { q: "Манастан кийин эпос ким жөнүндө уланат?", options: ["Кошой", "Бакай", "Семетей", "Сейтек"], correct: 2, fact: "Трилогиянын экинчи бөлүмү Манастын уулу Семетейге арналган." },
            { q: "Манас таануу илими эмнени изилдейт?", options: ["Жылдыздарды", "Эпосту жана тарыхты", "Жерди", "Тилди"], correct: 1, fact: "Бул эпостун тарыхын, философиясын жана маанисин изилдөөчү тармак." },
            { q: "Манас эпосу Гиннестин рекорддор китебине эмнеси менен кирген?", options: ["Эскилиги", "Көлөмү", "Тили", "Сүрөттөрү"], correct: 1, fact: "Ал дүйнөдөгү эң чоң көлөмдүү эпос болуп эсептелет." }
        ]
    }
];

let currentPhase = 0;
let currentQuestionInPhase = 0;
let score = 0;
let lives = 5; // Увеличено до 5
const maxLives = 5;
const totalQuestions = 20;

function updateUI() {
    const data = quizData[currentPhase];
    const qData = data.questions[currentQuestionInPhase];
    
    const qTextEl = document.getElementById('q-text');
    qTextEl.style.opacity = 0;
    
    setTimeout(() => {
        document.getElementById('phase-name').innerText = `Этап: ${data.phaseTitle || data.phaseName}`;
        document.getElementById('q-counter').innerText = `Суроо ${currentQuestionInPhase + 1} / 5`;
        qTextEl.innerText = qData.q;
        qTextEl.style.opacity = 1;
        
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = '';
        
        qData.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span>${opt}</span> <i class="fas fa-chevron-right"></i>`;
            btn.onclick = (e) => checkAnswer(i, e);
            optionsDiv.appendChild(btn);
        });

        document.getElementById('fact-box').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
    }, 200);

    document.getElementById('current-score').innerText = score;
    updateHearts();
    updateMap();
}

function updateHearts() {
    const display = document.getElementById('hearts-display');
    display.innerText = "❤️".repeat(Math.max(0, lives)) + "🖤".repeat(Math.max(0, maxLives - lives));
}

function updateMap() {
    document.querySelectorAll('.map-point').forEach((p, idx) => {
        p.classList.remove('active', 'completed');
        if(idx === currentPhase) p.classList.add('active');
        if(idx < currentPhase) p.classList.add('completed');
    });
}

function checkAnswer(idx, event) {
    const qData = quizData[currentPhase].questions[currentQuestionInPhase];
    const buttons = document.querySelectorAll('.option-btn');
    const card = document.getElementById('main-card');
    
    buttons.forEach(b => b.disabled = true);
    
    if(idx === qData.correct) {
        buttons[idx].classList.add('correct');
        score++;
        createParticles(event.clientX, event.clientY);
    } else {
        buttons[idx].classList.add('wrong');
        buttons[qData.correct].classList.add('correct');
        lives--;
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
        
        if(lives <= 0) {
            updateHearts();
            setTimeout(showGameOver, 1000);
            return;
        }
    }

    document.getElementById('fact-text').innerText = qData.fact;
    document.getElementById('fact-box').style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('current-score').innerText = score;
    updateHearts();
}

function createParticles(x, y) {
    for(let i=0; i<10; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 8 + 4;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        
        document.body.appendChild(p);
        
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 50 + 20;
        
        p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px) scale(0)`, opacity: 0 }
        ], { duration: 800, easing: 'ease-out' }).onfinish = () => p.remove();
    }
}

document.getElementById('next-btn').onclick = () => {
    currentQuestionInPhase++;
    
    if(currentQuestionInPhase >= 5) {
        currentQuestionInPhase = 0;
        currentPhase++;
    }

    if(currentPhase < quizData.length) {
        updateUI();
    } else {
        showResults();
    }
};

function showGameOver() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('game-over-screen').style.display = 'block';
}

function showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    const screen = document.getElementById('result-screen');
    screen.style.display = 'block';
    
    document.getElementById('final-score').innerText = `${score} / ${totalQuestions}`;
    
    let rank = "";
    let desc = "";

    if(score === 20) {
        rank = "УЛУУ МАНАСЧЫ";
        desc = "Сиз эпосту эң сонун билесиз! Сиз чыныгы билимдин туу чокусуна жеттиңиз.";
    } else if(score >= 15) {
        rank = "БАТЫР ЧОРО";
        desc = "Сиздин билимиңиз абдан терең. Манастын осуяттарын жакшы түшүнөсуз.";
    } else if(score >= 10) {
        rank = "ИЗДЕНҮҮЧҮ";
        desc = "Жакшы жыйынтык, бирок эпостун дагы көп сырлары бар. Дагы окуп көрүңүз.";
    } else {
        rank = "ЖОЛООЧУ";
        desc = "Сапар жаңы башталды. Эпосту кайрадан окуп чыгууну сунуштайбыз.";
    }

    document.getElementById('rank-name').innerText = rank;
    document.getElementById('rank-desc').innerText = desc;
}

updateUI();