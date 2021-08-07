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

export const Topic1_3 = [
    {
        id: '1',
        question: 'Match The Following',
        correct: 1,
        type: 3,
        options1: [
            { name: 'पूर्ण', correct: 5 },
            { name: 'पिपीलिका', correct: 3 },
            { name: 'सस्यानि', correct: 0 },
            { name: 'इभ', correct: 2 },
            { name: 'मृग', correct: 1 },
            { name: 'नृप', correct: 4 },
        ],
        options2: [
            "Crops",
            "Deer",
            "Elephant",
            "Ant",
            "King",
            "Filled"
        ],
    },
    {
        id: '2',
        question: 'Which Of These Mean "नृप"',
        type: 1,
        correct: 1,
        options: [
            {
                name: 'Poet',
                image: Poet,
                isCorrect: false,
                meaning: 'I Go'
            },
            {
                name: 'King',
                image: King,
                isCorrect: true,
                meaning: 'PC'
            },
            {
                name: 'Pen',
                image: Pen,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'Soldier',
                image: Soldier,
                isCorrect: false,
                meaning: 'They Go'
            },
        ]
    },
    {
        id: '3',
        question: 'Which Of These Mean "लेखनी"',
        type: 1,
        correct: 2,
        options: [
            {
                name: 'She Goes',
                image: She_Goes,
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
                name: 'Pen',
                image: Pen,
                isCorrect: true,
                meaning: 'Drink'
            },
            {
                name: 'Sleep',
                image: Sleep,
                isCorrect: false,
                meaning: 'Door'
            },

        ]
    },
    // नृप: उद्यान विहार

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
                name: 'नृप:',
                new: false
            },
            {
                name: 'उद्यान',
            },
            {
                name: 'विहार',
                new: true,
                meaning: 'Walks'
            },
        ],
        correct: 3,
        image: 'https://i.ibb.co/W0hgwJ2/king.jpg',
        correctSeq: [2, 4, 3, 6, 0],
        options: [
            {
                name: 'Garden',
                meaning: 'I Go'
            },

            {
                name: 'My',
                meaning: 'Television'
            },
            {
                name: 'King',
                meaning: 'We Go'
            },
            {
                name: 'In',
                meaning: 'Door'
            },
            {
                name: 'Walks',
                meaning: 'Door'
            },
            {
                name: 'Does ',
                meaning: 'Door'
            },
            {
                name: 'The',
                meaning: 'PC'
            },
        ]
    },
]
const Sit = 'https://image.shutterstock.com/image-vector/middleaged-male-doctor-wearing-white-600w-785864968.jpg'
export const Topic2_3 = [
    {
        id: '1',
        question: 'Which Of These Mean "मृग"',
        type: 1,
        correct: 0,
        options: [
            {
                name: 'Deer',
                image: Deer,
                isCorrect: false,
                meaning: 'I Go'
            },
            {
                name: 'Sorry',
                image: Sorry,
                isCorrect: true,
                meaning: 'PC'
            },
            {
                name: 'Play',
                image: Children_Playing,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'Girl',
                image: She_Goes,
                isCorrect: false,
                meaning: 'They Go'
            },
        ]
    },
    {
        id: '2',
        question: 'Which Of These Mean "उद्यान"',
        type: 1,
        correct: 2,
        options: [
            {
                name: 'Armour',
                image: Armour,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'Eye',
                image: Eye,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'Gardern',
                image: Garden,
                isCorrect: true,
                meaning: 'Drink'
            },
            {
                name: 'Discussion',
                image: Discussion,
                isCorrect: false,
                meaning: 'Door'
            },

        ]
    },
    // नृप: उद्यान विहार
    // उपविशामि
    {
        id: '3',
        question: 'Which Of These Mean "तत् गच्छति"',
        type: 1,
        correct: 0,
        options: [
            {
                name: 'It Goes',
                image: Robot,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'Television',
                image: TV,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'Telephone',
                image: Phone,
                isCorrect: true,
                meaning: 'Drink'
            },
            {
                name: 'Rain',
                image: Rain,
                isCorrect: false,
                meaning: 'Door'
            },

        ]
    },
    {
        id: '4',
        question: 'Which Of These Mean "Sit"',
        type: 1,
        correct: 1,
        options: [
            {
                name: 'क्रीडति',
                image: Children_Playing,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'उपविशामि',
                image: Sit,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'वयं गच्छामः',
                image: We_Go,
                isCorrect: true,
                meaning: 'Drink'
            },
            {
                name: 'क्षम्यताम्',
                image: Sorry,
                isCorrect: false,
                meaning: 'Door'
            },

        ]
    },
]
const play = 'https://image.shutterstock.com/image-vector/vector-illustration-happy-children-playing-600w-1099688924.jpg'
const Speaking = 'https://image.shutterstock.com/image-vector/cartoon-businessman-giving-speech-microphone-600w-335044091.jpg'
const Jump = 'https://image.shutterstock.com/image-vector/happy-cartoon-boy-jumping-on-260nw-1704065212.jpg'
export const Topic3_3 = [
    {
        id: '1',
        question: 'Which Of These Mean "क्रीडति"',
        type: 1,
        correct: 0,
        options: [
            {
                name: 'Play',
                image: play,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'Jump',
                image: Jump,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'Work',
                image: I_Go,
                isCorrect: true,
                meaning: 'Drink'
            },
            {
                name: 'Sleep',
                image: Sleep,
                isCorrect: false,
                meaning: 'Door'
            },

        ]
    },
    // नृप: उद्यान विहार
    {
        id: '2',
        type: 2,
        // NewWord: true,
        shouldAlert: false,
        question: 'Translate Seeta plays',
        correct: 3,
        image: 'https://image.shutterstock.com/image-vector/illustration-young-woman-playing-football-260nw-196641419.jpg',
        correctSeq: [3, 1],
        options: [
            {
                name: 'द्वारम्',
                meaning: 'I Go'
            },

            {
                name: 'क्रीडति',
                meaning: 'Television'
            },
            {
                name: 'द्वारम्',
                meaning: 'We Go'
            },
            {
                name: 'सीता',
                meaning: 'Door'
            },
            {
                name: 'वयं',
                meaning: 'Door'
            },
            {
                name: 'क्रीडामि ',
                meaning: 'Door'
            },
            {
                name: 'अहं',
                meaning: 'PC'
            },
        ]
    },
    {
        id: '3',
        type: 2,
        // NewWord: true,
        shouldAlert: false,
        question: 'Translate You Play',
        correct: 3,
        // Two Children Playing
        image: 'https://image.shutterstock.com/image-vector/happy-boy-girl-jumping-on-600w-775439596.jpg',
        correctSeq: [5, 2],
        options: [
            {
                name: 'द्वारम्',
                meaning: 'I Go'
            },

            {
                name: 'गच्छति',
                meaning: 'Television'
            },
            {
                name: 'क्रीडसि',
                meaning: 'We Go'
            },
            {
                name: 'तानि',
                meaning: 'Door'
            },
            {
                name: 'वृक्ष',
                meaning: 'Door'
            },
            {
                name: 'त्वं ',
                meaning: 'Door'
            },
            {
                name: 'दूरदर्शनम्',
                meaning: 'PC'
            },
        ]
    },
    {
        id: '4',
        type: 2,
        // NewWord: true,
        shouldAlert: false,
        question: 'Translate I Play',
        correct: 3,
        // Two Children Playing
        image: 'https://image.shutterstock.com/image-vector/happy-boy-girl-jumping-on-600w-775439596.jpg',
        correctSeq: [0, 1],
        options: [
            {
                name: 'अहं',
                meaning: 'I Go'
            },

            {
                name: 'क्रीडामि',
                meaning: 'Television'
            },
            {
                name: 'अलेक्षः',
                meaning: 'We Go'
            },
            {
                name: 'वदति',
                meaning: 'Door'
            },
            {
                name: 'क्रीडति',
                meaning: 'Door'
            },
            {
                name: 'वदामि ',
                meaning: 'Door'
            },
            {
                name: 'पिपीलिका',
                meaning: 'PC'
            },
        ]
    },
]
export const Topic4_3 = [
    {
        id: '1',
        question: 'Which Of These Mean "Speak"',
        type: 1,
        correct: 3,
        options: [
            {
                name: 'क्षम्यताम्',
                image: Sorry,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'मेघ',
                image: Clouds,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'वृष्टिः',
                image: Rain,
                isCorrect: true,
                meaning: 'Drink'
            },
            {
                name: 'वदति',
                image: Speaking,
                isCorrect: false,
                meaning: 'Door'
            },

        ]
    },
    // नृप: उद्यान विहार
    {
        id: '2',
        type: 2,
        // NewWord: true,
        shouldAlert: false,
        question: 'Translate Alex says',
        correct: 3,
        image: 'https://image.shutterstock.com/image-vector/cute-kid-teen-boy-show-600w-1509139679.jpg',
        correctSeq: [1, 5],
        options: [
            {
                name: 'द्वारम्',
                meaning: 'I Go'
            },

            {
                name: 'अलेक्षः',
                meaning: 'Television'
            },
            {
                name: 'उपविशसि',
                meaning: 'We Go'
            },
            {
                name: 'इभ',
                meaning: 'Door'
            },
            {
                name: 'सस्यानि',
                meaning: 'Door'
            },
            {
                name: 'वदति ',
                meaning: 'Door'
            },
            {
                name: 'अहं',
                meaning: 'PC'
            },
        ]
    },
    {
        id: '3',
        type: 2,
        // NewWord: true,
        shouldAlert: false,
        question: 'Translate You say',
        correct: 3,
        // Two Children Playing
        image: 'https://image.shutterstock.com/z/stock-vector-illustration-set-of-kids-mascot-learning-icon-for-writing-drawing-reading-speaking-and-listening-315583493.jpg',
        correctSeq: [4, 6],
        options: [
            {
                name: 'यन्त्रम्',
                meaning: 'I Go'
            },

            {
                name: 'दूरभाषणयन्त्रम्',
                meaning: 'Television'
            },
            {
                name: 'विषण्ण',
                meaning: 'We Go'
            },
            {
                name: 'तानि',
                meaning: 'Door'
            },
            {
                name: 'त्वं',
                meaning: 'Door'
            },
            {
                name: 'शुकी',
                meaning: 'Door'
            },
            {
                name: 'वदसि',
                meaning: 'PC'
            },
        ]
    },
    {
        id: '4',
        type: 2,
        // NewWord: true,
        shouldAlert: false,
        question: 'Translate I say',
        correct: 3,
        // Two Children Playing
        image: 'https://image.shutterstock.com/image-vector/business-woman-politician-speaking-audience-260nw-734882245.jpg',
        correctSeq: [6, 1],
        options: [
            {
                name: 'गर्हयते',
                meaning: 'I Go'
            },

            {
                name: 'वदामि',
                meaning: 'Television'
            },
            {
                name: 'निर्द्वन्द्व',
                meaning: 'We Go'
            },
            {
                name: 'वदति',
                meaning: 'Door'
            },
            {
                name: 'स्थण्डिल',
                meaning: 'Door'
            },
            {
                name: 'ओखति ',
                meaning: 'Door'
            },
            {
                name: 'अहं',
                meaning: 'PC'
            },
        ]
    },
]
const Refuse = 'https://image.shutterstock.com/image-vector/vector-hand-drawn-cartoon-character-600w-421983910.jpg'
const Fire = 'https://image.shutterstock.com/image-vector/fire-emoji-flames-icon-isolated-260nw-1384296500.jpg'
export const Topic5_3 = [
    {
        id: '1',
        question: 'Which Of These Mean "Refuse"',
        type: 1,
        correct: 0,
        options: [
            {
                name: 'ओखति',
                image: Refuse,
                isCorrect: false,
                meaning: 'I Go'
            },

            {
                name: 'अग्नि',
                image: Fire,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'बाल्यम्',
                image: Children_Playing,
                isCorrect: true,
                meaning: 'Drink'
            },
            {
                name: 'मृग',
                image: Deer,
                isCorrect: false,
                meaning: 'Door'
            },

        ]
    },
    // नृप: उद्यान विहार
    {
        id: '2',
        type: 2,
        // NewWord: true,
        shouldAlert: false,
        question: 'Translate This person sits',
        correct: 3,
        image: 'https://image.shutterstock.com/image-vector/bearded-smiling-man-dressed-casual-600w-1481610296.jpg',
        correctSeq: [4, 2],
        options: [
            {
                name: 'नृप',
                meaning: 'I Go'
            },

            {
                name: 'उद्यान',
                meaning: 'Television'
            },
            {
                name: 'उपविशति',
                meaning: 'We Go'
            },
            {
                name: 'बाल्यम्',
                meaning: 'Door'
            },
            {
                name: 'एषः',
                meaning: 'Door'
            },
            {
                name: 'सा ',
                meaning: 'Door'
            },
            {
                name: 'अहं',
                meaning: 'PC'
            },
        ]
    },
    {
        id: '3',
        type: 2,
        // NewWord: true,
        shouldAlert: false,
        question: 'Translate You Sit',
        correct: 3,
        // Two Children Playing
        image: 'https://image.shutterstock.com/image-vector/cute-bright-boy-sits-on-600w-637776514.jpg',
        correctSeq: [3, 0],
        options: [
            {
                name: 'उपविशसि',
                meaning: 'I Go'
            },

            {
                name: 'वदति',
                meaning: 'Television'
            },
            {
                name: 'विषण्ण',
                meaning: 'We Go'
            },
            {
                name: 'त्वं',
                meaning: 'Door'
            },
            {
                name: 'वयं',
                meaning: 'Door'
            },
            {
                name: 'तत्',
                meaning: 'Door'
            },
            {
                name: 'गच्छति',
                meaning: 'PC'
            },
        ]
    },
    {
        id: '4',
        type: 2,
        // NewWord: true,
        shouldAlert: false,
        question: 'Translate I sit',
        correct: 3,
        // Two Children Playing
        image: 'https://image.shutterstock.com/image-vector/girl-on-red-chair-having-600w-318765800.jpg',
        correctSeq: [4, 2],
        options: [
            {
                name: 'बहिर्दधाति',
                meaning: 'I Go'
            },

            {
                name: 'उपविशसि',
                meaning: 'Television'
            },
            {
                name: 'उपविशामि',
                meaning: 'We Go'
            },
            {
                name: 'उपविशति',
                meaning: 'Door'
            },
            {
                name: 'अहम्',
                meaning: 'Door'
            },
            {
                name: 'जल ',
                meaning: 'Door'
            },
            {
                name: 'अहं',
                meaning: 'PC'
            },
        ]
    },
]