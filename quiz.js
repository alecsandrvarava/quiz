const questionsData = {
  arenda: {
    questions: [
      {
        id: 1,
        type: "test",
        title: "Выберите тип недвижимости?",
        answers: ["Апартаменты", "Квартира", "sadasd", "sadasd", "sadasd"],
      },
      {
        id: 2,
        type: "test",
        title: "Выберете расположение недвижимости?",
        answers: ["Окраина", "Промежуточные Районы"],
      },
      {
        id: 3,
        type: "scroller",
        title: " Какой у Вас бюджет?",
        minScroll: 10000,
        maxScroll: 30000,
      },
      {
        id: 4,
        type: "input",
        title: "Что для Вас самое главное при выборе недвижимости?",
      },
      {
        id: 5,
        type: "test",
        title: "Выберите тип недвижимости?",
        answers: ["Апартаменты", "Квартира", "sadasd", "sadasd", "sadasd"],
      },
      {
        id: 6,
        title: "Оставь свои контакты",
        type: "form",
      },
    ],
    titleAnswer: "Аренда Недвижимости",
  },
  "buy-sold": {
    titleAnswer: "Покупка / Продажа Недвижимости",
    typeBtn: {
      buy: {
        questions: [
          {
            id: 1,
            type: "test",
            title: "Что-то пошло не так",
            answers: [],
          },
          {
            id: 1,
            type: "test",
            title: "Выберите тип недвижимости для покупки?",
            answers: ["Апартаменты", "Квартира"],
          },
          {
            id: 2,
            type: "test",
            title: "Выберете расположение недвижимости?",
            answers: ["Окраина", "Промежуточные Районы"],
          },
          {
            id: 3,
            title: "Оставь свои контакты",
            type: "form",
          },
        ],
        titleAnswer: "Продажа Недвижимости",
      },
      sold: {
        questions: [
          {
            id: 1,
            type: "test",
            title: "Что-то пошло не так",
            answers: [],
          },
          {
            id: 1,
            type: "test",
            title: "Выберите тип недвижимости для продажи?",
            answers: ["Апартаменты", "Квартира"],
          },
          {
            id: 2,
            type: "test",
            title: "Выберете расположение недвижимости?",
            answers: ["Окраина", "Промежуточные Районы"],
          },
          {
            id: 3,
            title: "Оставь свои контакты",
            type: "form",
          },
        ],
        titleAnswer: "Покупка Недвижимости",
      },
    },
  },
  control: {
    questions: [
      {
        id: 1,
        type: "test",
        title: "Выберете расположение недвижимости?",
        answers: ["Окраина", "Промежуточные Районы"],
      },
      {
        id: 2,
        type: "input",
        title: "Что для Вас самое главное при выборе недвижимости?",
      },
      {
        id: 2,
        type: "form",
      },
    ],
    titleAnswer: "Управление недвижимостью",
  },
  investing: {
    questions: [
      {
        id: 1,
        type: "input",
        title: "Что для Вас самое главное при выборе недвижимости?",
      },
      {
        id: 2,
        type: "form",
      },
    ],
    titleAnswer: "Инвестиции в Недвижимость",
  },
};
const bgImgData = [
  {
    blackTop: "./quiz-img/black-top.png",
    blackFooter: "./quiz-img/black-footer.png",
    lineTop: "./quiz-img/line-top.png",
    lineFooter: "./quiz-img/line-footer.png",
    className: "Variant_1",
  },
  {
    blackTop: "./quiz-img/black-top-2.png",
    blackFooter: "./quiz-img/black-footer.png",
    lineTop: "./quiz-img/line-top-2.png",
    lineFooter: "./quiz-img/line-footer-2.png",
    className: "Variant_2",
  },
  {
    blackTop: "./quiz-img/black-top-2.png",
    blackFooter: "./quiz-img/black-footer-2.png",
    lineTop: "./quiz-img/line-top.png",
    lineFooter: "./quiz-img/line-footer.png",
    className: "Variant_3",
  },
  {
    blackTop: "./quiz-img/black-top-3.png",
    blackFooter: "./quiz-img/black-footer-3.png",
    lineTop: "./quiz-img/line-top-3.png",
    lineFooter: "./quiz-img/line-footer-3.png",
    className: "Variant_4",
  },
];
let answerData = []; // Данные из форм

function RandArray(array) {
  let rand = (Math.random() * array.length) | 0;
  let rValue = array[rand];
  quizHeaderBg.innerHTML = `<div class="header${rValue.className}">
	<img src="${rValue.blackTop}" alt="">
	<img src="${rValue.lineTop}" alt="">
</div>`;
  quizFooterBg.innerHTML = `<div class="footer${rValue.className}">
		<img src="${rValue.blackFooter}" alt="">
		<img src="${rValue.lineFooter}" alt="">
	</div>`;
}
RandArray(bgImgData);

function homePage() {
  Object.keys(questionsData).forEach((key) => {
    questions.insertAdjacentHTML(
      "beforeend",
      `<div class="questionsItem" id="questionsItem" data-quiz="${key}">${questionsData[key].titleAnswer}</div>`
    );
  });
}
homePage();

function renderQuiz({ id, title, type, answers, minScroll, maxScroll }) {
  titleQuestion.innerHTML = title;
  switch (type) {
    case "test":
      return `
			${answers
        .map(
          (answer) =>
            `<div class="answersItem" id="answersItem" data-type="test" data-answer="${answer}" data-id="${id}">${answer}</div>`
        )
        .join("")}`;
    case "scroller":
      return `<div class="scroller" data-type="scroller">
				<div class="scrollerValue">${minScroll}</div>
				<input class="scroller" id="scroller" type="range" name="range" min="${minScroll}" max="${maxScroll}" step="${
        (maxScroll - minScroll) / 100
      }" value="${minScroll}">
    </div>`;
    case "input":
      return `<div>
          <input id="inputItem"/>
      </div>`;
    case "form":
      return `<div class="formInput">
				<div>Имя:
					<input id="formInputName"/>
				</div>
				<div>Номер:
					<input id="formInputTel"/>
				</div>
			</div>`;
    case "null":
      return `<div class="null"></div>`;
  }
}
let flow = "";
let activeAnswer = {
  id: null,
  key: "",
  answer: "",
};

let activeId = 0;
let answersUser = [];
function newQuestion() {
  const newQuestion = [...questionsItem];
  newQuestion.forEach((questionItem) => {
    questionItem.onclick = function () {
      const keyQuiz = this.dataset.quiz;
      chooseAnswerFlow(keyQuiz);
    };
  });
}
newQuestion();

document.addEventListener("click", (e) => {
  let self = e.target;
  let questionsItems = document.querySelectorAll(".questionsItem");
  let answersItems = document.querySelectorAll(".answersItem");
  questionsItems.forEach((el) => {
    el.classList.remove("animation");
    if (self == el) {
      if (!self.closest("animation")) {
        self.classList.add("animation");
      }
    }
  });
  answersItems.forEach((el) => {
    el.classList.remove("animation");
    if (self == el) {
      if (!self.closest("animation")) {
        self.classList.add("animation");
      }
    }
  });
});

function chooseAnswerFlow(key) {
  flow = key;
}

function scoreLength(length, activeId) {
  ++activeId;
  let step = (100 / length) * activeId;
  progresValue.value = step;
}

next.onclick = function (titleAnswer) {
  const animation = document.querySelector(".animation");
  const formInputName = document.querySelector("#formInputName");
  const formInputTel = document.querySelector("#formInputTel");
  if (formInputName) {
    if (!formInputName.value == "" && !formInputTel.value == "") {
      render(flow, activeId + 1, activeAnswer.answer);
      activeId++;
      RandArray(bgImgData);
      answerData.push(activeAnswer.answer);
    }
  } else if (animation) {
    if (activeAnswer.answer) {
      render(flow, activeId + 1, activeAnswer.answer);
      activeId++;
      RandArray(bgImgData);
      answerData.push(activeAnswer.answer);
    } else {
      render(flow, activeId);
      RandArray(bgImgData);
    }
  }
};

prev.onclick = function () {
  const questionsItems = document.querySelectorAll(".questionsItem");
  if (!activeId == 0) {
    --activeId;
    render(flow, activeId);
    RandArray(bgImgData);
    answerData.pop();
  } else if (questionsItems.length == 0) {
    questions.innerHTML = "";
    homePage();
    newQuestion();
    progresValue.value = 10;
    activeAnswer.answer = "";
    RandArray(bgImgData);
    answerData.pop();
  }
};

const buySoldData = {
  id: 1,
  type: "test",
  title: "Выберите тип?",
  answers: ["Покупка", "Продажа"],
};

function render(key, activeId, answer = false) {
  const questionsItem = document.querySelector("#questionsItem");
  let activeRender = null;
  let progress = null;
  questions.innerHTML = "";
  if (key === "buy-sold") {
    if (activeId > 0) {
      const typeValue = answer === "Покупка" ? "buy" : "sold";
      activeRender =
        questionsData["buy-sold"].typeBtn[typeValue].questions[activeId];
      progress = questionsData["buy-sold"].typeBtn[typeValue].questions.length;
    } else {
      activeRender = buySoldData;
      progress = questionsData["buy-sold"].typeBtn["buy"].questions.length;
    }
  } else {
    progress = questionsData[key].questions.length;
    activeRender = questionsData[key].questions[activeId];
  }
  if (questionsItem) {
    answerData.push(questionsData[key].titleAnswer);
  }
  if (progress == activeId) {
    prev.classList.add("hidden");
    let test = {
      id: 1,
      type: "null",
      title: "Thanks", //Текст на последней карточке
    };
    questions.insertAdjacentHTML("beforeend", renderQuiz(test));
  } else {
    questions.insertAdjacentHTML(
      "beforeend",
      renderQuiz(activeRender),
      scoreLength(progress, activeId)
    );
  }
  renderHandleForAnswers();
}

function renderHandleForAnswers() {
  const answersItems = document.querySelectorAll("#answersItem");
  const scroller = document.querySelector("#scroller");
  const inputItem = document.querySelector("#inputItem");
  const formInputTel = document.querySelector("#formInputTel");
  const formInputName = document.querySelector("#formInputName");
  if (answersItems) {
    const newAnswersItem = [...answersItems];
    newAnswersItem.forEach((answer) => {
      answer.onclick = function () {
        activeAnswer.id = this.dataset.id;
        activeAnswer.answer = this.dataset.answer;
        activeAnswer.key = flow;
      };
    });
    if (scroller) {
      scroller.oninput = function (e) {
        const scrollerValue = document.querySelector(".scrollerValue");
        activeAnswer.answer = e.target.value;
        scroller.classList.add("animation");
        scrollerValue.innerHTML = scroller.value;
        if (window.innerWidth > 1200) {
          let value = (this.max - this.min) / 1000;
          scrollerValue.style.left = (this.value - this.min) / value + "px";
        } else if (window.innerWidth < 1200 && window.innerWidth > 1023) {
          let value = (this.max - this.min) / 830;
          scrollerValue.style.left = (this.value - this.min) / value + "px";
        } else if (window.innerWidth > 767 && window.innerWidth < 1024) {
          let value = (this.max - this.min) / 530;
          scrollerValue.style.left = (this.value - this.min) / value + "px";
        } else if (window.innerWidth < 766) {
          let value = (this.max - this.min) / 210;
          scrollerValue.style.left = (this.value - this.min) / value + "px";
        }
      };
    } else if (inputItem) {
      inputItem.onchange = function (e) {
        activeAnswer.answer = e.target.value;
        if (activeAnswer.answer.length > 3) {
          inputItem.classList.add("animation");
        } else {
          inputItem.classList.remove("animation");
        }
      };
    } else if (formInputTel) {
      let value = [];
      formInputTel.onchange = function (e) {
        value.push(e.target.value);
        activeAnswer.answer = value;
      };
      formInputName.onchange = function (e) {
        value.push(e.target.value);
        activeAnswer.answer = value;
      };
    }
  }
}
