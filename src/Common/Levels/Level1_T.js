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
const Parrot = 'https://image.shutterstock.com/image-vector/vector-bird-print-business-brand-260nw-1717571077.jpg'
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
        question: 'Translate "सा जलम पिबति"',
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
        correctSeq: [0, 3, 2],
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



const Armour = 'https://image.shutterstock.com/image-vector/plate-armor-icon-monochrome-style-600w-513380716.jpg'
const Eye = 'https://image.shutterstock.com/image-vector/cartoon-eyes-icon-600w-655671454.jpg'
const Discussion = 'https://image.shutterstock.com/image-vector/brainstorming-creative-team-idea-discussion-260nw-316179902.jpg'
const Peacock = 'https://image.shutterstock.com/image-vector/cartoon-green-peacock-260nw-252215146.jpg'
const Crow = 'https://image.shutterstock.com/image-illustration/3d-rendered-illustration-sitting-crow-600w-370831892.jpg'
const Tree = 'https://static.vecteezy.com/system/resources/previews/000/269/049/non_2x/funny-cartoon-tree-character-vector.jpg'

export const Topic4 = [
    {
        id: '1',
        question: 'Which Of These Mean "Peacock"',
        correct: 2,
        type: 1,
        options: [
            {
                name: 'अंसत्र',
                image: Armour,
                isCorrect: false,
                meaning: 'Armour'
            },
            {
                name: 'अक्ष ',
                image: Eye,
                isCorrect: false,
                meaning: 'Eye'
            },
            {
                name: 'मयूर',
                image: Peacock,
                isCorrect: true,
                meaning: 'Peacock'
            },
            {
                name: 'चर्चा',
                image: Discussion,
                isCorrect: false,
                meaning: 'Discussion'
            },
        ]
    },
    {
        id: '2',
        question: 'Which Of These Mean "Tree"',
        correct: 3,
        type: 1,
        options: [
            {
                name: 'चर्चा',
                image: Discussion,
                isCorrect: false,
                meaning: 'Discussion'
            },

            {
                name: 'मयूर ',
                image: Peacock,
                isCorrect: false,
                meaning: 'Eye'
            },
            {
                name: 'काक',
                image: Crow,
                isCorrect: true,
                meaning: 'Peacock'
            },
            {
                name: 'वृक्ष',
                image: Tree,
                isCorrect: false,
                meaning: 'Tree'
            },

        ]
    },
    {
        id: '3',
        question: 'Which Of These Mean "Crow"',
        type: 1,
        correct: 0,
        options: [
            {
                name: 'काक',
                image: Crow,
                isCorrect: true,
                meaning: 'Door'
            },
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
                name: 'पिबति',
                image: Drink,
                isCorrect: false,
                meaning: 'Drink'
            },
        ]
    },
    {
        id: '4',
        type: 2,
        NewWord: true,
        shouldAlert: true,
        question: [
            {
                name: 'Translate',
                new: false
            },
            {
                name: 'काकः',
                new: false
            },
            {
                name: 'कृष्णः',
                new: true,
                meaning: 'Black'
            },
        ],
        correct: 3,
        image: Crow,
        correctSeq: [2, 5, 4],
        options: [
            {
                name: 'I',
                meaning: 'I Go'
            },

            {
                name: 'Peacock',
                meaning: 'Television'
            },
            {
                name: 'Crow',
                meaning: 'We Go'
            },
            {
                name: 'Blue',
                meaning: 'Door'
            },
            {
                name: 'Black',
                meaning: 'Door'
            },
            {
                name: 'Is',
                meaning: 'Door'
            },
            {
                name: 'Gone',
                meaning: 'PC'
            },
        ]
    },


]

const Farmer = 'https://image.shutterstock.com/image-vector/cute-cartoon-style-thai-farmer-260nw-1361822519.jpg'
const Soldier = 'https://image.shutterstock.com/image-illustration/cute-cartoon-illustration-soldier-260nw-132497420.jpg'
const Filled = 'https://image.shutterstock.com/image-vector/shot-color-icon-layered-cocktail-260nw-1493444066.jpg'
const Clouds = 'https://image.shutterstock.com/image-vector/style-icon-sun-cloud-isolated-260nw-1395914459.jpg'
const Frogs = 'https://image.shutterstock.com/image-vector/cute-frog-cartoon-isolated-on-600w-1681194745.jpg'
const Wood = 'https://image.shutterstock.com/image-vector/curved-wooden-planks-isolated-on-260nw-1687572811.jpg'
const ants = 'https://image.shutterstock.com/image-vector/two-cute-cartoon-ant-carry-600w-1013660179.jpg'
const Sleep = 'https://image.shutterstock.com/image-vector/child-sleeping-sweet-dream-cartoon-260nw-410290924.jpg'
const Crops = 'https://image.shutterstock.com/image-vector/growth-ripening-corn-plants-isolated-260nw-398401936.jpg'

export const Topic5 = [
    {
        id: '1',
        question: 'Match The Following',
        correct: 1,
        type: 3,
        options1: [
            { name: 'काकः', correct: 4 },
            { name: 'वृक्ष', correct: 1 },
            { name: 'द्वारम्', correct: 3 },
            { name: 'कृष्णः', correct: 0 },
            { name: 'मयूर', correct: 2 },
            { name: 'बाल्यम्', correct: 5 },
        ],
        options2: [
            "Black",
            "Tree",
            "Peacock",
            "Door",
            "Crow",
            "Childhood"
        ],
    },
    {
        id: '2',
        question: 'Which Of These Mean "Farmer"',
        type: 1,
        correct: 2,
        options: [
            {
                name: 'द्वारम्',
                image: Door,
                isCorrect: false,
                meaning: 'I Go'
            },
            {
                name: 'वृक्ष',
                image: Tree,
                isCorrect: true,
                meaning: 'PC'
            },
            {
                name: 'कर्षक',
                image: Farmer,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'सैनिकः',
                image: Soldier,
                isCorrect: false,
                meaning: 'They Go'
            },
        ]
    },
    {
        id: '3',
        question: 'Which Of These Mean "सस्यानि"',
        type: 1,
        correct: 0,
        options: [
            {
                name: 'Crops',
                image: Crops,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'Parrot',
                image: Parrot,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'Sleep',
                image: Sleep,
                isCorrect: false,
                meaning: 'Door'
            },
            {
                name: 'Frogs',
                image: Frogs,
                isCorrect: true,
                meaning: 'Drink'
            },
        ]
    },
    {
        id: '4',
        type: 2,
        NewWord: true,
        shouldAlert: false,
        question: [
            {
                name: 'Translate',
                new: false
            },
            {
                name: 'कृषक',
                new: false
            },
            {
                name: 'छिन्नम्',
                new: true,
                meaning: 'Cuts'
            },
            {
                name: 'सस्यानि',
                new: false
            },
        ],
        correct: 3,
        image: 'https://image.shutterstock.com/image-vector/farmer-harvesting-wheat-harvester-vector-260nw-634092569.jpg',
        correctSeq: [0, 4, 6],
        options: [
            {
                name: 'Farmer',
                meaning: 'I Go'
            },

            {
                name: 'Dies',
                meaning: 'Television'
            },
            {
                name: 'Grows',
                meaning: 'We Go'
            },
            {
                name: 'Blue',
                meaning: 'Door'
            },
            {
                name: 'Cuts',
                meaning: 'Door'
            },
            {
                name: 'Heal',
                meaning: 'Door'
            },
            {
                name: 'Crops',
                meaning: 'PC'
            },
        ]
    },
    

]



