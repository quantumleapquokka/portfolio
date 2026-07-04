export const projects = [
    {
        title: 'AI Trivia Game',
        type: 'Game Design / UI Design',
        year: '2025',
        icon: '𖡎',
        colorClass: 'purple-card',
        image: '/images/triviagame/Questions Page.png',
        previewShape: 'mobile',
        description:
        'AI-powered trivia game that generates new daily questions based on different topics.',
        overview:
        'A playful game project centered around replayability, daily content, and AI-generated trivia questions.',
        role:
        'Contributed to the UI/UX, drafting the screens in Figma and later implementing them using React. Designed game flow and user experience.',
        process:
        'The focus was on making the trivia loop feel engaging while supporting new generated questions each day. The app was made to be accessible to all, with obvious buttons and visible text. Custom buttons were designed for this, so less text could be used, making the app more accessible to the elderly.',
        outcome:
        'The project became a useful example of combining game design, software development, and AI-generated content.',
        tags: ['Game Design', 'AI', 'UI/UX', 'React', 'Figma'],
        media: [
            {
            type: 'image',
            src: '/images/triviagame/pages.png',
            alt: 'AI trivia game screen flow',
            caption: 'Game flow mockup',
            },
            {
                type: 'video',
                src: '/images/triviagame/game.mp4',
                caption: 'Interaction clip',
            },
        ],
        figma: 'https://www.figma.com/design/MTby50ahseyL7l1I3yE37v/RC_Project3_UI_Design?m=auto&t=J2bYCWmfJPVm2J6a-6',
        github: 'https://github.com/W5-a11y/RC_Project3',
        demo: '',
    },
    {
        title: 'Harmonic Composer',
        type: 'Software / UI Tool',
        year: '2025',
        icon: 'ᯓ 𝄞',
        colorClass: 'pink-card',
        image: '/images/harmonic/screen1.png',
        previewShape: 'wide',
        description:
        'AI composer that generates sheet music based on genre, era, and instrument of the user\'s choice.',
        overview:
        'This was a group project for a class that required using AI in an inventive way, so we decided to make an AI that would be able to produce sheet music.',
        role:
        'I was design lead, prototyping and implementing the UI, while helping out with the AI training and in-browser sheet music integration.',
        process:
        'First, the UI and interactions was prototyped on Figma, then after team discussion, implemented into our project. After the backend team members were near complete, the two sides were connected and tested to see what worked, resulting in modifications to make the website run as smooth as possible.',
        outcome:
        'While we were limited by time and computer constraints, the AI was able to produce sheet music based on input. The quality of the music is debatable, but with more time and resources, it has potential. The frontend functioned perfectly, and had changes made from the initial Figma prototype after testing.',
        tags: ['Python', 'AI', 'UI/UX', 'Design Lead', 'React', 'Figma'],
        media: [
            {
            type: 'image',
            src: '/images/harmonic/screenfinal.png',
            caption: 'Final UI',
            },
            {
                type: 'image',
                src: '/images/harmonic/sheetmusic.png',
                caption: 'Sample sheet music generated',
            },
            {
                type: 'video',
                src: '/images/harmonic/harmonic composer.mp4',
                alt: 'video of figma interactions for ui prototype',
                caption: 'Initial UI prototype'
            },
        ],
        figma: 'https://www.figma.com/design/bHEFBoEnD9h0AwzEavimEH/harmonic-composer?node-id=2001-478&t=J5UZIm6j7DT5A1Ge-1',
        github: 'https://github.com/quantumleapquokka/Harmonic-Composer',
        demo: 'https://docs.google.com/presentation/d/1IxObjhcXjPE1TwNYS0B7rtVqyj6z9ml5VaJDNIf2Wt4/edit?usp=sharing',
    },
    {
        title: 'sWift safe',
        type: 'Mobile UI Design',
        year: '2026',
        icon: '⚷ꗃ',
        colorClass: 'mint-card',
        image: '/images/swiftsafe/HomeScreen.png',
        previewShape: 'mobile',
        description:
        'Mobile app that helps women in risk situations. Users have access to fast, discreet ways to get help.',
        overview:
        'Finding ways to help women in risk situations have fast access to help with stress-free navigation and discreet safety and reporting tools.',
        role:
        'I made the home screen(w/ interactions) and one of the four features the mobile app supports: Fake Call/Alarm, acting as an alarm to scare away potential attackers and excuse oneself from a potentially dangerous situation.',
        process:
        'The product centered on giving women a way to escape from or prevent harm, covering multiple possibilities of risk situations. The process: Paper prototypes -> Low-fidelity Prototypes -> User testing/feedback + Changes -> High Fidelity Prototype -> User testing/feedback + Changes -> Final App',
        outcome:
        'The project helped me practice thinking about apps with a need for discreet features that hide the true function to anyone besides the user. The app is a fully functioning Figma prototype',
        tags: ['Figma', 'Product Design', 'Usability Testing', 'Accessibility'],
        media: [
            {
                type: 'image',
                src: '/images/swiftsafe/allscreens.png',
                caption: 'All screens w/ reusable components, color scheme, and typography'
            },
            {
                type: 'image',
                src: '/images/swiftsafe/lowfi.png',
                caption: 'Initial Low Fidelity Prototype'
            },
            {
                type: 'image',
                src: '/images/swiftsafe/myfeature.png',
                caption: 'Feature I worked on: made to mimic a real phone call screen. A timer can be set to predetermine when the user\'s phone will be rang, allowing the user to excuse themself from a risky situation.'
            },
            
        ],
        figma: 'https://www.figma.com/design/bnrtoHdHEBAV3gMqMXw2yo/sWift-safe----HiFI?node-id=0-1&p=f&t=GCk5xelS3JCM6PYp-0',
        github: '',
        demo: 'https://www.figma.com/slides/1LFKYNl8NTBKhqoma1YxT9/Final-Presentation?t=6TQmJbG7ymSE8Yb8-6',
    },
    {
        title: 'Wildfire Detection Tool',
        type: 'Software / API',
        year: '2025',
        icon: '݁𖠰 ݁↟',
        colorClass: 'yellow-card',
        image: '',
        previewShape: 'wide',
        description:
        'Python desktop tool for FTP image retrieval, wildfire detection, configurable UI, and error logging.',
        overview:
        'This project focused on helping users retrieve images, run wildfire detection through API integration, and manage tool settings through a clearer desktop interface.',
        role:
        'I acted as team lead for the first project, coordinated meetings, assigned tasks, contributed to implementation, and presented the final product to management.',
        process:
        'I wrote the Powershell script that automated processing images through the AI and sorted the images according to results.',
        outcome:
        'The final tool gave the team a functional desktop workflow with FTP-based image retrieval, API integration, secure credential handling, and robust error logging.',
        tags: ['Python', 'Powershell', 'API', 'Team Lead'],
        media: [],
        figma: '',
        github: 'https://github.com/quantumleapquokka/Project-1',
        demo: '',
    },
    {
        title: 'Myth Bounded',
        type: 'UI / UX Design',
        year: '2024',
        icon: '𓍢ִ໋🀦',
        colorClass: 'purple-card',
        image: '/images/mythbounded/Card Back.png',
        previewShape: 'mobile',
        description:
        'Card Game designed on Figma. Players draw from the same card pool, with a limited amount of each attack, calling for strategic gameplay.',
        overview:
        'Mythical-themed resource card game where players battle against each other until they are the last one standing. Players must strategize which attacks to use, as there are limited amounts of each card rarity.',
        role:
        'I designed the base of the cards and created all the character cards.',
        process:
        'My process included ideation, prototyping, playtesting, feedback collection, and iteration.(Further design choices linked in the Figma pages)',
        outcome:
        'This project taught me more about implementing player feedback and reusable components in game design. This was also the first project where accessibility was at the forefront, since it was meant to be a physical card game.',
        tags: ['Game Design', 'Prototyping', 'Playtesting', 'Figma'],
        media: [],
        figma: 'https://www.figma.com/design/KY5hEMVxvoBgil2M20hXoa/Card-Set?node-id=121-1163&t=nQuwvINDPeZQOSue-1',
        github: '',
        demo: '',
    },
    {
        title: 'Cupidity',
        type: 'Game / UX Design',
        year: '2026',
        icon: '➸-`♡´-',
        colorClass: 'pink-card',
        image: '/images/cupidity/title.png',
        previewShape: 'wide',
        description:
        'Game design projects exploring interaction, player feedback, mechanics, and experience design.',
        overview:
        'A collection of game design work focused on creating clear player goals, meaningful choices, and enjoyable interaction loops.',
        role:
        'I designed, built, tested, and reflected on game experiences through my Computer Science: Game Design coursework.',
        process:
        'My process included ideation, prototyping, playtesting, feedback collection, and iteration.',
        outcome:
        'These projects strengthened my ability to think about users as players and design around motivation, clarity, and feedback.',
        tags: ['Game Design', 'Prototyping', 'Playtesting', 'Unity'],
        media: [
            {
                type: 'image',
                src: '/images/cupidity/card_back.png',
                caption: 'Card Back I designed for the game'
            }
        ],
        figma: 'https://www.figma.com/design/pP6s1T6mpCifBMN3Q6uZjz/Game-Board?node-id=0-1&t=E1GcPzmLf8gDSLwV-1',
        github: 'https://github.com/rrikngu/Cupidity',
        demo: 'https://youtu.be/iYh4G5hPP_0?si=oCh2qT6yH7VyZBMF',
    },
    {
        title: 'Game Design Coursework',
        type: 'Game / UX Design',
        year: '2024-2026',
        icon: '[+..••]',
        colorClass: 'mint-card',
        image: '',
        previewShape: 'wide',
        description:
        'Game design projects exploring interaction, player feedback, mechanics, and experience design.',
        overview:
        'A collection of game design work focused on creating clear player goals, meaningful choices, and enjoyable interaction loops.',
        role:
        'I designed, built, tested, and reflected on game experiences through my Computer Science: Game Design coursework.',
        process:
        'My process included ideation, prototyping, playtesting, feedback collection, and iteration.',
        outcome:
        'These projects strengthened my ability to think about users as players and design around motivation, clarity, and feedback.',
        tags: ['Game Design', 'Prototyping', 'Playtesting'],
        media: [],
        figma: '',
        github: 'https://github.com/quantumleapquokka/Golf-Quest-Mini',
        demo: '',
    },
    
]