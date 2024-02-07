// Changing display/start and restart buttons

const section1 = document.getElementById('section1')
const section2 = document.getElementById('section2')

const btn1 = document.getElementById('strtBtn')
const btn2 = document.getElementById('rstrtBtn')
const rbd = document.getElementById('rstrtDiv')

btn1.addEventListener('click', ()=> {
    section1.classList.add('d-none')
    section2.classList.remove('d-none')
    rbd.classList.remove('d-none')
})

btn2.addEventListener('click', ()=> {
    section2.classList.add('d-none')
    rbd.classList.add('d-none')
    section1.classList.remove('d-none')
})

rbd.addEventListener('click', ()=> {
    startGame()
})

// Audio

var source = "audio/rain.mp3"
var audio = document.createElement("audio");

audio.autoplay = true;

audio.load()
audio.addEventListener("load", function() {
    audio.play();
}, true);
audio.src = source;

btn1.addEventListener('click', ()=> {
    audio.pause();
})

btn2.addEventListener('click', ()=> {
    audio.play();
})

// Gameplay 

const gameBackground = document.getElementById('gameBackground')
const textElement = document.getElementById('text')
const options = document.getElementById('optionBtns')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (options.firstChild) {
        options.removeChild(options.firstChild)
    }

    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener("click", () => selectOption(option))
            options.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: `It was late october, a heavy downpour hammered the always bustling streets of Vitanova City. Private detective Monoghan Scott was at his desk, legs propped up as he read the latest newspaper. There was an article documenting his recent successes in the city. "Vitanova, the City of Second Chances: Former Failed Detective Back in Action". Monaghan wasn't one for publicity but he knew it came with the job. Publicity does however, bring business. There was a knock the detective's door. Light and feminine. Through the blurry glass he could make out tall and skinny figure. It was late, half passed eleven. Monaghan was getting ready to call it a night.`,
        options: [
            {
                text: `Monaghan answers the door.`,
                nextText: 2,
            },
            {
                text: `Monaghan ignores the knock and calls it a night.`,
                nextText: 4,
            },
        ],
    },
    {
        id: 2,
        text: ``,
        options: [
            {
                text: ``,
                nextText: 3
            },
            {
                text: ``,
            }
        ]
    }
]

startGame()