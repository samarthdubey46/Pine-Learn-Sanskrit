const We_Go = 'https://image.shutterstock.com/image-vector/group-smiling-diverse-pupils-hugging-260nw-1779454379.jpg'
const I_Go = 'https://cdn5.vectorstock.com/i/1000x1000/28/59/man-come-back-home-after-hard-work-day-vector-27672859.jpg'
const Door = 'https://image.shutterstock.com/image-vector/open-doors-summer-landscape-flat-260nw-1723189792.jpg'
const Water = 'https://image.shutterstock.com/image-vector/minearl-water-plastic-bottle-glass-600w-1359107135.jpg'
const They_Go = 'https://image.shutterstock.com/image-vector/kids-girls-boys-traveling-by-600w-1044333961.jpg'
const She_Goes = 'https://image.shutterstock.com/image-vector/illustration-girl-going-home-school-260nw-149527100.jpg'
const TV = 'https://image.shutterstock.com/image-vector/vector-green-retro-tv-set-260nw-59895262.jpg'
const Robot = 'https://image.shutterstock.com/z/stock-vector-vector-robot-100987498.jpg'
const Phone = 'https://image.shutterstock.com/image-vector/cartoon-home-appliences-phone-isolated-600w-96629293.jpg'
const PC = 'https://image.shutterstock.com/image-vector/cartoon-computer-600w-636473438.jpg'
const Drink = 'https://image.shutterstock.com/image-vector/bottle-wine-glass-hugging-each-600w-60873991.jpg'
const Girl_Drinking_Water = 'https://image.shutterstock.com/image-vector/girl-drinking-water-vector-illustration-600w-330440330.jpg'
const Children_Playing = 'https://image.shutterstock.com/image-vector/four-cute-kids-jumping-joy-600w-1714206253.jpg'
const Parrot = 'https://image.shutterstock.com/image-vector/cartoon-cute-parrot-260nw-278591168.jpg'
const Pen = 'https://image.shutterstock.com/image-vector/funny-red-pen-cartoon-writing-600w-87285619.jpg'
const Table = 'https://image.shutterstock.com/image-vector/delicious-menu-iftar-party-on-600w-646150672.jpg'





export const Topic3 = [
    {
        id: '1',
        question: 'Match The Following',
        correct: 1,
        type: 3,
        options1: [
            { name: 'अहं गच्छामि', correct: 2 },
            { name: 'जल', correct: 1 },
            { name: 'दूरभाषणयन्त्रम्', correct: 3 },
            { name: 'सङ्गणकः', correct: 4 },
            { name: 'यन्त्रम्', correct: 5 },
            { name: 'द्वारम्', correct: 0 },
        ],
        options2: [
            "Door",
            "Water",
            "I Go",
            "Telephone",
            "Computer",
            "Robot"
        ],
    },
    {
        id: '2',
        question: 'Which Of These Mean "सङ्गणकः"',
        type: 1,
        correct: 1,
        options: [
            {
                name: 'Door',
                image: I_Go,
                isCorrect: false,
                meaning: 'I Go'
            },
            {
                name: 'Computer',
                image: PC,
                isCorrect: true,
                meaning: 'PC'
            },
            {
                name: 'Robot',
                image: Robot,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'She Goes',
                image: She_Goes,
                isCorrect: false,
                meaning: 'They Go'
            },
        ]
    },
    {
        id: '3',
        type: 2,
        question: 'Translate "सा पिबति जलम"',
        correct: 3,
        image: Girl_Drinking_Water,
        correctSeq: [0, 2, 3],
        options: [
            {
                name: 'She',
                meaning: 'I Go'
            },

            {
                name: 'Television',
                meaning: 'Television'
            },
            {
                name: 'Drinks',
                meaning: 'We Go'
            },
            {
                name: 'Water',
                meaning: 'Door'
            },
            {
                name: 'Door',
                meaning: 'Door'
            },
            {
                name: 'Them',
                meaning: 'Door'
            },
            {
                name: 'Orange',
                meaning: 'PC'
            },
        ]
    },
    {
        id: '4',
        question: 'Which Of These Mean "Childhood"',
        type: 1,
        correct: 3,
        options: [
            {
                name: 'शुकी',
                image: Parrot,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'लेखनी',
                image: Pen,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'सारिणी',
                image: Table,
                isCorrect: false,
                meaning: 'Door'
            },
            {
                name: 'बाल्यम्',
                image: Children_Playing,
                isCorrect: true,
                meaning: 'Drink'
            },
        ]
    },

]







export const Topic2 = [
    {
        id: '1',
        question: 'Which Of These Mean "Telephone"',
        correct: 1,
        type: 1,
        options: [
            {
                name: 'अहं गच्छामि',
                image: I_Go,
                isCorrect: false,
                meaning: 'I Go'
            },
            {
                name: 'दूरभाषणयन्त्रम्',
                image: Phone,
                isCorrect: true,
                meaning: 'Phone'
            },
            {
                name: 'सङ्गणकः',
                image: PC,
                isCorrect: false,
                meaning: 'PC'
            },
            {
                name: 'जल',
                image: Water,
                isCorrect: false,
                meaning: 'Water'
            },
        ]
    },
    {
        id: '2',
        question: 'Which Of These Mean "Computer"',
        type: 1,
        correct: 2,
        options: [
            {
                name: 'अहं गच्छामि',
                image: I_Go,
                isCorrect: false,
                meaning: 'I Go'
            },
            {
                name: 'यन्त्रम्',
                image: Robot,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'सङ्गणकः',
                image: PC,
                isCorrect: true,
                meaning: 'PC'
            },
            {
                name: 'तानि गच्छन्ति',
                image: They_Go,
                isCorrect: false,
                meaning: 'They Go'
            },
        ]
    },
    {
        id: '3',
        type: 2,
        question: 'Translate "She Drinks water"',
        correct: 3,
        image: Girl_Drinking_Water,
        correctSeq: [0, 2, 3],
        options: [
            {
                name: 'सा',
                meaning: 'I Go'
            },

            {
                name: 'दूरदर्शनम्',
                meaning: 'Television'
            },
            {
                name: 'पिबति',
                meaning: 'We Go'
            },
            {
                name: 'जलम',
                meaning: 'Door'
            },
            {
                name: 'वयं',
                meaning: 'Door'
            },
            {
                name: 'द्वारम्',
                meaning: 'Door'
            },
            {
                name: 'सङ्गणकः',
                meaning: 'PC'
            },
        ]
    },
    {
        id: '4',
        question: 'Which Of These Mean "Drink"',
        type: 1,
        correct: 3,
        options: [
            {
                name: 'सा गच्छति',
                image: She_Goes,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'वयं गच्छामः',
                image: We_Go,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'द्वारम्',
                image: Door,
                isCorrect: false,
                meaning: 'Door'
            },
            {
                name: 'पिबति',
                image: Drink,
                isCorrect: true,
                meaning: 'Drink'
            },
        ]
    },

]