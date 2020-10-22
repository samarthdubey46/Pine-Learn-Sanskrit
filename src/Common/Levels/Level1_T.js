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


export const Topic2 = [
    {
        id: '1',
        question: 'Which Of These Mean "Telephone"',
        correct: 1,
        type:1,
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
        type:1,
        correct: 1,
        options: [
            {
                name: 'अहं गच्छामि',
                image: I_Go,
                isCorrect: false,
                meaning: 'I Go'
            },
            {
                name: 'सङ्गणकः',
                image: PC,
                isCorrect: true,
                meaning: 'PC'
            },
            {
                name: 'यन्त्रम्',
                image: Robot,
                isCorrect: false,
                meaning: 'We Go'
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
        question: 'Which Of These Mean "Drink"',
        type:1,
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
    {
        id: '4',
        type:2,
        question: 'Translate "She Drinks water"',
        correct: 3,
        image:Girl_Drinking_Water,
        correctSeq:[0,2,3] ,
        options: [
            {
                name: 'सा',
                image: She_Goes,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'दूरदर्शनम्',
                image: TV,
                isCorrect: false,
                meaning: 'Television'
            },
            {
                name: 'पिबति',
                image: Drink,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'जलम',
                image: Water,
                isCorrect: true,
                meaning: 'Door'
            },
        ]
    },
]