//#region Images
const We_Go = 'https://image.shutterstock.com/image-vector/group-smiling-diverse-pupils-hugging-260nw-1779454379.jpg'
const I_Go = 'https://cdn5.vectorstock.com/i/1000x1000/28/59/man-come-back-home-after-hard-work-day-vector-27672859.jpg'
const Door = 'https://image.shutterstock.com/image-vector/open-doors-summer-landscape-flat-260nw-1723189792.jpg'
const They_Go = 'https://image.shutterstock.com/image-vector/kids-girls-boys-traveling-by-600w-1044333961.jpg'
const She_Goes = 'https://image.shutterstock.com/image-vector/illustration-girl-going-home-school-260nw-149527100.jpg'
const TV = 'https://image.shutterstock.com/image-vector/vector-green-retro-tv-set-260nw-59895262.jpg'
const Robot = 'https://image.shutterstock.com/z/stock-vector-vector-robot-100987498.jpg'
const Farmer = 'https://image.shutterstock.com/image-vector/cute-cartoon-style-thai-farmer-260nw-1361822519.jpg'
const Soldier = 'https://image.shutterstock.com/image-illustration/cute-cartoon-illustration-soldier-260nw-132497420.jpg'
const Filled = 'https://image.shutterstock.com/image-vector/shot-color-icon-layered-cocktail-260nw-1493444066.jpg'
const Clouds = 'https://image.shutterstock.com/image-vector/style-icon-sun-cloud-isolated-260nw-1395914459.jpg'
const Frogs = 'https://image.shutterstock.com/image-vector/cute-frog-cartoon-isolated-on-600w-1681194745.jpg'
const Wood = 'https://image.shutterstock.com/image-vector/curved-wooden-planks-isolated-on-260nw-1687572811.jpg'
const ants = 'https://image.shutterstock.com/image-vector/happy-ant-cartoon-260nw-238321471.jpg'
const Sleep = 'https://image.shutterstock.com/image-vector/child-sleeping-sweet-dream-cartoon-260nw-410290924.jpg'
const Crops = 'https://image.shutterstock.com/image-vector/growth-ripening-corn-plants-isolated-260nw-398401936.jpg'
const Armour = 'https://image.shutterstock.com/image-vector/plate-armor-icon-monochrome-style-600w-513380716.jpg'
const Eye = 'https://image.shutterstock.com/image-vector/cartoon-eyes-icon-600w-655671454.jpg'
const Discussion = 'https://image.shutterstock.com/image-vector/brainstorming-creative-team-idea-discussion-260nw-316179902.jpg'
const Peacock = 'https://image.shutterstock.com/image-vector/cartoon-green-peacock-260nw-252215146.jpg'
const Crow = 'https://image.shutterstock.com/image-illustration/3d-rendered-illustration-sitting-crow-600w-370831892.jpg'
const Tree = 'https://static.vecteezy.com/system/resources/previews/000/269/049/non_2x/funny-cartoon-tree-character-vector.jpg'
const Water = 'https://image.shutterstock.com/image-vector/minearl-water-plastic-bottle-glass-600w-1359107135.jpg'
const Phone = 'https://image.shutterstock.com/image-vector/cartoon-home-appliences-phone-isolated-600w-96629293.jpg'
const PC = 'https://image.shutterstock.com/image-vector/cartoon-computer-600w-636473438.jpg'
const Drink = 'https://image.shutterstock.com/image-vector/bottle-wine-glass-hugging-each-600w-60873991.jpg'
const Girl_Drinking_Water = 'https://image.shutterstock.com/image-vector/girl-drinking-water-vector-illustration-600w-330440330.jpg'
const Children_Playing = 'https://image.shutterstock.com/image-vector/four-cute-kids-jumping-joy-600w-1714206253.jpg'
const Parrot = 'https://image.shutterstock.com/image-vector/vector-bird-print-business-brand-260nw-1717571077.jpg'
const Pen = 'https://image.shutterstock.com/image-vector/funny-red-pen-cartoon-writing-600w-87285619.jpg'
const Table = 'https://image.shutterstock.com/image-vector/delicious-menu-iftar-party-on-600w-646150672.jpg'
const Rain = 'https://image.shutterstock.com/image-vector/illustration-happy-cloud-mascot-raindrops-600w-142893124.jpg'
const Elephant = 'https://image.shutterstock.com/image-vector/cute-baby-elephant-cartoon-sitting-260nw-361763480.jpg'
const Deer = 'https://image.shutterstock.com/image-vector/mouse-deer-cartoon-illustration-600w-428538709.jpg'
const Terrace = 'https://image.shutterstock.com/image-vector/woman-cartoon-character-sitting-on-600w-1737812945.jpg'
const Garden = 'https://image.shutterstock.com/image-vector/spring-landscape-vector-illustration-flowers-600w-1672183048.jpg'
const King = 'https://image.shutterstock.com/image-vector/cartoon-king-holding-golden-scepter-260nw-278583047.jpg'
const Root = 'https://image.shutterstock.com/image-vector/root-tree-black-silhouette-vector-600w-1402208414.jpg'
const Poet = 'https://image.shutterstock.com/image-vector/cartoon-william-shakespeare-holding-feather-260nw-300242102.jpg'
const Sorry = 'https://image.shutterstock.com/image-vector/im-sorry-funny-dog-character-600w-500892328.jpg'
//#endregion





const Dict = {
    'Farmer': 'कर्षक',
    'Filled': 'पूर्ण',
    'Tree': 'वृक्ष',
    'Clouds': 'मेघ',
    'Discussion': 'चर्चा',
    'Rain': 'वृष्टिः',
    "Drink": 'पिबति',
    "Ants": 'पिपीलिका',
    "Crops": 'सस्यानि',
    "Door": "द्वारम्",
    "Armour": 'अंसत्र'
}


// 'k',p,







export const Topic1_2 = [
    {
        id: '1',
        question: 'Which Of These Mean "Filled"',
        type: 1,
        correct: 1,
        options: [
            {
                name: 'कर्षक',
                image: Farmer,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'पूर्ण',
                image: Filled,
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
                name: 'मेघ',
                image: Clouds,
                isCorrect: false,
                meaning: 'They Go'
            },
        ]
    },
    {
        id: '2',
        question: 'Which Of These Mean "Ant"',
        type: 1,
        correct: 3,
        options: [
            {
                name: 'चर्चा',
                image: Discussion,
                isCorrect: false,
                meaning: 'I Go'
            },
            {
                name: 'वृष्टिः',
                image: Rain,
                isCorrect: true,
                meaning: 'PC'
            },
            {
                name: 'पिबति',
                image: Drink,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'पिपीलिका',
                image: ants,
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
        question: 'Which Of These Mean "Elephant"',
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
                name: 'अंसत्र',
                image: Armour,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'इभ',
                image: Elephant,
                isCorrect: false,
                meaning: 'Door'
            },
            {
                name: 'सैनिकः',
                image: Soldier,
                isCorrect: true,
                meaning: 'Drink'
            },
        ]
    },
]

export const Topic2_2 = [
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
        id: '3',
        type: 2,
        question: 'Translate काकः कृष्णः',
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
export const Topic3_2 = [
    {
        id: '1',
        question: 'Which Of These Mean "Deer"',
        type: 1,
        correct: 1,
        options: [
            {
                name: 'तानि गच्छन्ति',
                image: They_Go,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'मृग',
                image: Deer,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'आलिन्द',
                image: Terrace,
                isCorrect: false,
                meaning: 'Door'
            },
            {
                name: 'सैनिकः',
                image: Soldier,
                isCorrect: true,
                meaning: 'Drink'
            },
        ]
    },
    {
        id: '2',
        question: 'Which Of These Mean "King"',
        type: 1,
        correct: 2,
        options: [
            {
                name: 'तरुमूल',
                image: Root,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'कवि',
                image: Poet,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'नृप',
                image: King,
                isCorrect: false,
                meaning: 'Door'
            },
            {
                name: 'लेखनी',
                image: Pen,
                isCorrect: false,
                meaning: 'We Go'
            },
        ]
    },
    {
        id: '4',
        question: 'Which Of These Mean "Gardern"',
        type: 1,
        correct: 1,
        options: [
            {
                name: 'शुकी',
                image: Parrot,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'उद्यान',
                image: Garden,
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

