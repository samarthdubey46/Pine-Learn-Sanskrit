import { Topic2, Topic3 } from "./Level1_T"

const We_Go = 'https://image.shutterstock.com/image-vector/group-smiling-diverse-pupils-hugging-260nw-1779454379.jpg'
const I_Go = 'https://cdn5.vectorstock.com/i/1000x1000/28/59/man-come-back-home-after-hard-work-day-vector-27672859.jpg'
const Door = 'https://image.shutterstock.com/image-vector/open-doors-summer-landscape-flat-260nw-1723189792.jpg'
const Water = 'https://image.shutterstock.com/image-vector/minearl-water-plastic-bottle-glass-600w-1359107135.jpg'
const They_Go = 'https://image.shutterstock.com/image-vector/kids-girls-boys-traveling-by-600w-1044333961.jpg'
const She_Goes = 'https://image.shutterstock.com/image-vector/illustration-girl-going-home-school-260nw-149527100.jpg'
const TV = 'https://image.shutterstock.com/image-vector/vector-green-retro-tv-set-260nw-59895262.jpg'
const Robot = 'https://image.shutterstock.com/z/stock-vector-vector-robot-100987498.jpg'

const TopicOne = [
    {
        id: '1',
        question: 'Which Of These Mean "I go"',
        correct: 1,
        type:1,
        options: [
            {
                name: 'वयं गच्छामः',
                image: We_Go,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'अहं गच्छामि',
                image: I_Go,
                isCorrect: true,
                meaning: 'I Go'
            },
            {
                name: 'द्वारम्',
                image: Door,
                isCorrect: false,
                meaning: 'Door'
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
        question: 'Which Of These Mean "We go"',
        correct: 2,
        type:1,
        options: [
            {
                name: 'अहं गच्छामि',
                image: I_Go,
                isCorrect: false,
                meaning: 'I Go'
            },
            {
                name: 'द्वारम्',
                image: Door,
                isCorrect: false,
                meaning: 'Door'
            },
            {
                name: 'वयं गच्छामः',
                image: We_Go,
                isCorrect: true,
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
        question: 'Which Of These Mean "She go"',
        correct: 0,
        type:1,
        options: [
            {
                name: 'सा गच्छति',
                image: She_Goes,
                isCorrect: true,
                meaning: 'I Go'
            },

            {
                name: 'वयं गच्छामः',
                image: We_Go,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'तानि गच्छन्ति',
                image: They_Go,
                isCorrect: false,
                meaning: 'They Go'
            },
            {
                name: 'दूरदर्शनम्',
                image: TV,
                isCorrect: false,
                meaning: 'Television'
            },
        ]
    },
    {
        id: '4',
        question: 'Which Of These Mean "It go"',
        correct: 3,
        type:1,
        options: [
            {
                name: 'सा गच्छति',
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
                name: 'वयं गच्छामः',
                image: We_Go,
                isCorrect: false,
                meaning: 'We Go'
            },
            {
                name: 'तत् गच्छति',
                image: Robot,
                isCorrect: true,
                meaning: 'Door'
            },
        ]
    },
]

const Level1 = [
    {
        name: 'Topic One',
        Level: 'Beginner',
        Question: TopicOne,
        level:1
    },
    {
        name: 'Topic Two',
        Level: 'Intermidate',
        Question: Topic2,
        level:2
    },
    {
        name: 'Topic Three',
        Level: 'Beginner',
        Question: Topic3,
        level:3

    },
    {
        name: 'Topic Four',
        Level: 'Advance',
        Question: TopicOne,
        level:4
    },
    {
        name: 'Topic Six',
        Level: 'Hard',
        Question: TopicOne,
        level:5
    },
    {
        name: 'Topic Sevene',
        Level: 'Very Hard',
        Question: TopicOne,
        level:6
    },

]
export default Level1