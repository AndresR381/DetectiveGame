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

const sndCntr = document.getElementById('soundCon')
const mtCntr = document.getElementById('muteCon')

const soundBtn = document.getElementById("soundBtn")
const muteBtn = document.getElementById("muteBtn")

soundBtn.addEventListener('click', ()=> {
    audio.pause()
    sndCntr.classList.add('d-none')
    mtCntr.classList.remove('d-none')
})

muteBtn.addEventListener('click', ()=> {
    audio.play()
    mtCntr.classList.add('d-none')
    sndCntr.classList.remove('d-none')
})

var source = "audio/rain.mp3"
var audio = document.createElement("audio");

audio.load()
audio.addEventListener("load", function() {
    audio.play();
}, true);
audio.src = source;

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
        text: `\tIt was late october, a heavy downpour hammered the always bustling streets of Vitanova City. Private detective Monoghan Scott was at his desk, legs propped up as he read the latest newspaper. There was an article documenting his recent successes in the city. \n"Vitanova, the City of Second Chances: Former Failed Detective Back in Action". Monaghan wasn't one for publicity but he knew it came with the job. Publicity does however, bring business. There was a knock the detective's door. Light and feminine. Through the blurry glass he could make out tall and skinny figure. It was late, half passed eleven. Monaghan didn't have anyone scheduled for this hour and typically didn't accept walk-ins. Opening your door to anyone in this city could be costly.`,
        options: [
            {
                text: `Answer the door.`,
                nextText: 2,
            },
            {
                text: `Ignore the knock and call it a night.`,
                nextText: 50,
            },
        ],
    },
    {
        id: 2,
        text: `Monaghan goes to open the door and on the other side, as he suspected was a woman. Her long trench coat and hair were sodden from the rain. The closed umbrella she held clearly did little to protect her from the monsoon outside. Her eyes held a desperate and delirious look to them. This woman looked like she'd gone through the gutter yet somehow managed to maintain some essence of beauty and elegance. The detective couldn't deny he was somewhat intrigued in who this woman was and what she had to say.`,
        options: [
            {
                text: `Let her in.`,
                nextText: 3,
            },
            {
                text: `Close the door.`,
                nextText: 51,
            }
        ]
    },
    {
        id: 3,
        text: `Monaghan welcomed the woman in and she wordlessly helped herself to his coatrack, a trail of droplets as she went. The puzzled detective watched as sleek, pale skin revealed itself. She was wearing a dress. A fancy one at that too. What was the occasion, Monaghan asked himself. She dug into the pockets of her now hung coat and pulled out a pack of Sobranie cigarettes and a lighter. She then took a seat in front of the detective's desk, lit herself a cigarette, and took a long drag before puffing the smoke into the room. Monaghan wasn't too fond of the smell of cigarettes.`,
        options: [
            {
                text: `Monaghan takes a seat at his desk. "May I help you?"`,
                nextText: 4,
            },
            {
                text: `Monaghan takes a seat at his desk. "Sobranies? Quite posh, no?"`,
                nextText: 53,
            },
            {
                text: `"Oi, no smoking in here".`,
                nextText: 55,
            }
        ]
    },
    {
        id: 4,
        text: `She took another excrutiatingly long drag of her lit Sobranie. 'Avid smoker', the detective thought to himself. After puffing out the foul smoke that made Monaghan's nose crinkle, she finally spoke. "My mother's been murdered by someone and now they're after me". She spoke bluntly and emotionless.`,
        options: [
            {
                text: `"This sounds like a job for the police, not a P.I."`,                                                
                nextText: 5,
            },
            {
                text: `Monaghan takes out his notebook. "Tell me about your mother".`,
                nextText: 54,
            },
            {
                text: `Monaghan takes out his notebook. "Tell me about who's after you".`,
                nextText: 55,
            }
        ]
    },
    {
        id: 5,
        text: `The woman's eyes narrowed at him. "You know the police aren't worth a damn here, Scott. They're not gonna help. Especially not when it's the bloody mayor". She began to take another drag.`,
        options: [
            {
                text: `"Mayor Ryan? Are you off your rocker?"`,                                                
                nextText: 56,
            },
            {
                text: `"Mayor Ryan? Are you sure?"`,
                nextText: 6,
            }
        ]
    },
    {
        id: 6,
        text: `She puffs out smoke once more. "Very sure. I was there when he killed her". Monaghan pulled out his notebook and got up to open the windown of his office slightly. Just enough for no rain to enter and for the room to not soak up the smell of tobacco.`,
        options: [
            {
                text: `Monaghan takes a seat back at his desk. "What's your relation with Mayor Ryan"?`,                                                
                nextText: 7,
            },
            {
                text: `Monaghan leans against the window. "What's your relation with Mayor Ryan"?`,
                nextText: 57,
            }
        ]
    },
    {
        id: 7,
        text: `An apologetic look comes across her as she wordlessly stubs out the cigarette in the seemingly out of place ashtray on the detective's desk. "I'm his daughter. Product of an affair". She returned 1/4 smoked cigarette back to it's carton. Monaghan was surprised by this revelation. He took the mayor for a committed and honest man. But then again, not everything is as it seems in Vitanova.`,
        options: [
            {
                text: `"So he murdered your mother, and now he's after you. Why"?`,                                                
                nextText: 8,
            },
            {
                text: `"Tell me more about their affair".`,
                nextText: 58,
            }
        ]
    },
    {
        id: 8,
        text: `"They met years ago. Before Vitanova. Ryan was in London for business". She used the word 'business' rather loosely. "My mother was an investigative journelist who wanted to uncover his business. Despite his life and family in New York, they fell in love. And I was the product of their affair. After I was born...". She trailed off, turned her attention to the window. "He left.He didn't want anything to do with my mother once there was a child involved. Once she found out about Vitanova, she couldn't wait anymore. She wanted to him and this city rot. So she came to find whatever evidence she could to shut him down. But Ryan knows everything that goes on in this city, he caught her...and now she's dead".`,
        options: [
            {
                text: `"What do you want me to do"?`,                                                
                nextText: 9,
            },
            {
                text: `"I've heard enough".`,
                nextText: 59,
            }
        ]
    },
    {
        id: 9,
        text: `"Find whatever evidence you can and bring it me. My mother had ties to the English authorities and still a citizen of England. They'll want answers to her death. I'll provide them with whatever you find. And of course, I will pay you". Monaghan pondered the information he'd just received. Going against the Mayor would be pretty much going against the city. Such a task would be dangerous. But should he succeed, not only would he be collecting quite the reward. But he'll also putting a stop to the endless corruption within Vitanova. `,
        options: [
            {
                text: `Monaghan takes the case.`,                                                
                nextText: 10,
            },
            {
                text: `Monaghan rejects the case.`,
                nextText: 60,
            }
        ]
    },
    {
        id: 10,
        text: `End of Chapter 1`,
        options: [
            {
                text: `Restart`,                                 
                nextText: 1,
            },
            {
                text: `Continue`,
                nextText: 11,
            }
        ]
    }
]

startGame()