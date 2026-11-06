/* =========================================
   FAKIR — A JOURNEY OF QUESTIONS
   THE WEBSITE ENGINE
========================================= */


/* =========================================
   1. DATA — CATEGORIES & QUESTIONS
========================================= */

const categories = [
    {
        id: "life",
        title: "Life & Existence",
        icon: "✧",
        description: "Questions about being alive, finding meaning, and the mystery of existence.",
        color: "#a78bfa",
        questions: [
            "Why does anything exist rather than nothing?",
            "Does life have a predetermined purpose?",
            "What makes an existence meaningful?",
            "Are we truly living or merely surviving?",
            "Why do humans search for meaning?"
        ]
    },
    {
        id: "love",
        title: "Love & Relationships",
        icon: "♡",
        description: "Exploring affection, attachment, intimacy, and the strange ways humans connect.",
        color: "#d58cb5",
        questions: [
            "Is love a choice or a feeling?",
            "Can we truly know another person?",
            "Do we love people or the way they make us feel?",
            "Can love exist without attachment?"
        ]
    },
    {
        id: "god",
        title: "God & Religion",
        icon: "☼",
        description: "Faith, the divine, belief, doubt, and humanity's oldest questions.",
        color: "#d9b978",
        questions: [
            "Does God exist?",
            "Can faith exist without proof?",
            "Is religion discovered or created?",
            "If God exists, why is suffering inevitable?"
        ]
    },
    {
        id: "consciousness",
        title: "Consciousness",
        icon: "◉",
        description: "The mystery of awareness, identity, perception, and the observing mind.",
        color: "#79b9d8",
        questions: [
            "What makes us conscious?",
            "Are we more than our brains?",
            "Can consciousness exist without a body?",
            "Who is the observer of our thoughts?"
        ]
    },
    {
        id: "freewill",
        title: "Free Will",
        icon: "∞",
        description: "Choice, responsibility, destiny, and the boundaries of freedom.",
        color: "#8bc5a5",
        questions: [
            "Are our choices truly our own?",
            "Are we responsible for everything we do?",
            "Can freedom exist without limits?",
            "Are our decisions predetermined?"
        ]
    },
    {
        id: "human",
        title: "Human Nature",
        icon: "◇",
        description: "The contradictions, desires, fears, and possibilities that make us human.",
        color: "#d49b7b",
        questions: [
            "Are humans naturally good or evil?",
            "Why do people seek approval?",
            "Can a person ever truly change?",
            "Are we shaped more by nature or experience?"
        ]
    }
];


/* =========================================
   2. ARTICLE LIBRARY
========================================= */

const articles = {

    "Why does anything exist rather than nothing?": {
        subtitle: "Perhaps the strangest fact about the universe is not what exists within it, but that there is something here at all.",
        sections: [
            {
                heading: "The question beneath every question",
                paragraphs: [
                    "Look around. There is a world beneath your feet, a sky above your head, and an almost unimaginable universe stretching beyond what your eyes can see. Stars are burning, galaxies are moving, matter is taking shape, and somewhere within all this vastness, a human being is asking why any of it exists.",
                    "Most questions begin by assuming something. We ask why the sky is blue, why stars shine, or why life evolved. These questions investigate things that already exist. But this question goes further. It asks why there is anything to investigate in the first place.",
                    "Why is there a universe instead of absolute nothingness? Not an empty room, not a dark space, not a silent void. Even those are something. Absolute nothing would contain no matter, no energy, no space, no time, and perhaps not even the laws that allow possibilities to exist."
                ]
            },
            {
                heading: "What science can tell us",
                paragraphs: [
                    "Modern cosmology describes an observable universe that evolved from an extremely hot, dense early state around 13.8 billion years ago. The Big Bang model is supported by several lines of evidence, including the expansion of the universe, the cosmic microwave background, and the abundance of light elements.",
                    "But describing the early evolution of the universe is not necessarily the same as explaining why existence itself is possible. The Big Bang model does not automatically answer what, if anything, came before it, or why there are physical laws at all.",
                    "Some scientific ideas investigate quantum cosmology, inflation, or models in which our observable universe is part of a larger reality. These are serious areas of theoretical investigation, but they are not settled answers to the ultimate question. A mathematical description of how something might emerge is not yet a final explanation of why there is something rather than nothing."
                ]
            },
            {
                heading: "The philosophical possibilities",
                paragraphs: [
                    "One possibility is that existence is a brute fact. In this view, reality simply exists. There may be no deeper explanation waiting behind it. This answer can feel unsatisfying because human reasoning naturally searches for causes, but perhaps the demand for a reason does not guarantee that every fact has one.",
                    "Another possibility is that existence is necessary. Perhaps absolute nothingness is not a genuine possibility, and reality must exist in some form. Philosophers have debated whether a necessary being, a necessary structure, or some fundamental reality could explain why anything exists.",
                    "A third possibility appeals to a creator or ultimate source. Religious and philosophical traditions have developed different arguments for such a source, including arguments from contingency and the existence of the universe. Critics question whether these arguments establish a personal creator, whether the source itself needs explanation, and whether the concept is coherent.",
                    "None of these positions should be mistaken for a universally accepted conclusion. They are attempts to reason about a question that sits at the edge of what human understanding can currently establish."
                ]
            },
            {
                heading: "Can nothingness even be imagined?",
                paragraphs: [
                    "Try to imagine nothing. Most people picture darkness, an endless black space, or an empty room. But darkness is something. Space is something. An empty room contains dimensions, air, and the possibility of being occupied.",
                    "The mind struggles because imagination works with experiences and concepts. Even when we imagine the absence of objects, we retain a background in which their absence appears. Absolute nothingness removes the background too.",
                    "Perhaps this reveals a limitation in our imagination rather than a flaw in the question. We can think about concepts that we cannot picture. Mathematics gives us examples of ideas that are meaningful without being directly visible."
                ]
            },
            {
                heading: "The human place in an immense reality",
                paragraphs: [
                    "There is something quietly extraordinary about the fact that a small part of the universe has become capable of questioning the universe. The atoms in our bodies were formed through cosmic history. Matter has arranged itself into living systems, and some of those systems have developed minds that can wonder about their own origin.",
                    "This does not prove that the universe was designed for us. It does not prove that it was not. But it places human existence within a much larger story, one in which we are neither separate from nature nor capable of seeing all of it.",
                    "We may never reach a final explanation. Yet the question remains valuable because it reminds us how much we usually take for granted. Existence is familiar only because we have never experienced its alternative."
                ]
            }
        ],
        ending: "Perhaps the universe does not owe us an explanation. And perhaps the fact that we can ask for one is already among the strangest things about it."
    },

    "Does life have a predetermined purpose?": {
        subtitle: "Are we following a path that was already written, or are we the ones giving direction to an otherwise open existence?",
        sections: [
            {
                heading: "The desire for a destination",
                paragraphs: [
                    "Human beings rarely feel comfortable with the idea of existing without a purpose. We want our lives to mean something. We want our struggles to lead somewhere, our decisions to matter, and our time to add up to more than a collection of ordinary days.",
                    "The idea of a predetermined purpose offers comfort. It suggests that our existence is not accidental, that events may be connected by a larger intention, and that even suffering might belong to a meaningful design.",
                    "But there is another possibility: perhaps life arrives without a fixed purpose. Perhaps meaning is not something waiting to be discovered, but something created through the way we live."
                ]
            },
            {
                heading: "The religious understanding",
                paragraphs: [
                    "Many religious traditions understand human existence as part of a divine plan. Life may be seen as a test, a responsibility, a journey of spiritual development, or an opportunity to know and serve the divine.",
                    "Within these traditions, purpose is not invented entirely by the individual. It is connected to something greater than personal desire. Believers may find direction in this relationship, even when they do not understand every event that occurs.",
                    "However, different traditions disagree about what this purpose is, and people within the same tradition may interpret it differently. Faith can offer a framework, but it does not remove every question."
                ]
            },
            {
                heading: "The existentialist response",
                paragraphs: [
                    "Existentialist thinkers challenged the assumption that human beings arrive with an assigned meaning. In different ways, philosophers such as Jean-Paul Sartre and Albert Camus explored what it means to live in a world where certainty about ultimate purpose may be unavailable.",
                    "For Sartre, human beings are not born with a completed essence that determines everything they must become. We shape ourselves through choices and actions. Freedom brings responsibility because we cannot simply blame a predetermined identity for everything we do.",
                    "Camus explored the tension between our desire for meaning and a universe that may not provide the answers we seek. His response was not simply despair. It was to recognise the tension and continue living with awareness, honesty, and defiance."
                ]
            },
            {
                heading: "Does creating purpose make it less real?",
                paragraphs: [
                    "Some people argue that if meaning is created by humans, it must be artificial. But this assumes that something must exist independently of us to matter.",
                    "A friendship is not meaningless because people build it. A promise is not worthless because people choose to make it. Music does not lose its beauty because humans created the instruments and compositions through which it is expressed.",
                    "A purpose can be chosen and still be genuine. Its origin does not necessarily determine its value. What matters may be the depth of commitment, the consequences of our actions, and the experience of living according to what we consider worthwhile."
                ]
            },
            {
                heading: "A purpose can change",
                paragraphs: [
                    "The purpose that matters to a person at eighteen may not be the same one that matters at forty. Experiences alter priorities. Relationships change us. Loss can rearrange what we consider important.",
                    "If purpose were fixed in every detail, personal growth might become difficult to understand. Yet even people who believe in a larger divine purpose often accept that their understanding of it develops over time.",
                    "Perhaps purpose is not always a single destination. It may be a changing direction, shaped by what we learn and what we choose to care about."
                ]
            }
        ],
        ending: "Maybe life does not hand us a finished purpose. Maybe we participate in creating one, and that responsibility is both frightening and beautiful."
    },

    "What makes an existence meaningful?": {
        subtitle: "If meaning cannot be measured like time or distance, how do we recognise a life that feels worth living?",
        sections: [
            {
                heading: "The difference between existing and living",
                paragraphs: [
                    "A person can wake up, work, eat, sleep, and repeat the same routine for years. Their days are full, their calendar is occupied, and their responsibilities are being fulfilled. Yet they may still wonder whether they are actually living.",
                    "Meaning is not identical to activity. Being busy does not automatically make life meaningful, just as being successful does not guarantee that a person feels fulfilled.",
                    "The question is not simply how much we do, but why certain things matter to us. Meaning appears connected to the relationship between our actions, our values, our experiences, and the world around us."
                ]
            },
            {
                heading: "Relationships and belonging",
                paragraphs: [
                    "For many people, meaning grows through relationships. Loving someone, caring for family, building friendships, or helping another person can make ordinary moments feel significant.",
                    "Human beings are social creatures. Our experiences of belonging and connection influence how we understand ourselves. Being seen, heard, and accepted can give a person a sense that their existence matters beyond their private thoughts.",
                    "But relationships are not the only possible source of meaning. Some people find deep purpose in solitude, creativity, discovery, or service. Meaning does not have to look identical in every life."
                ]
            },
            {
                heading: "Creating rather than discovering",
                paragraphs: [
                    "One view holds that meaning is discovered: it exists independently, and our task is to recognise it. Another holds that meaning is created through decisions, commitments, and interpretations.",
                    "The difference matters. If meaning is discovered, we may search for the correct path. If it is created, we must accept responsibility for the paths we choose.",
                    "There may be room for both. A person can discover values that feel deeply true while also choosing how to express them. We do not choose every condition of our existence, but we often have some influence over what we make of those conditions."
                ]
            },
            {
                heading: "Meaning through difficulty",
                paragraphs: [
                    "Meaning is not limited to happiness. People sometimes find purpose in difficult responsibilities, in surviving hardship, in protecting others, or in continuing a task that matters despite uncertainty.",
                    "This should not be confused with romanticising suffering. Pain is not automatically meaningful, and nobody needs to suffer to prove that their life has value. But people can sometimes create meaning in the way they respond to experiences they never wanted.",
                    "The distinction is important: suffering itself may be senseless, while the response to it can still express courage, care, or commitment."
                ]
            },
            {
                heading: "A life cannot be reduced to one achievement",
                paragraphs: [
                    "We often measure lives through visible milestones: careers, wealth, recognition, relationships, and accomplishments. These things can matter, but they do not tell the entire story.",
                    "A quiet act of kindness may never be recognised. A conversation may change someone's direction. A piece of art may express something its creator could not explain in ordinary language.",
                    "Perhaps meaning is not a trophy waiting at the end of life. It may be present in the attention we give to the things we choose to value."
                ]
            }
        ],
        ending: "A meaningful life may not be the one that impresses the world. It may be the one in which a person can recognise their own reasons for having lived."
    },

    "Are we truly living or merely surviving?": {
        subtitle: "There is a difference between getting through the days and feeling that the days belong to you.",
        sections: [
            {
                heading: "The routine of survival",
                paragraphs: [
                    "Survival is fundamental. We need food, shelter, safety, and stability. When these are threatened, attention naturally narrows toward meeting immediate needs.",
                    "But survival can become a routine even when danger is not obvious. A person may spend years completing obligations, meeting expectations, avoiding mistakes, and preparing for a future that never seems to arrive.",
                    "The days pass, yet the feeling of being present in them becomes weaker. Life begins to look like a waiting room for some imagined moment when everything will finally begin."
                ]
            },
            {
                heading: "The weight of expectation",
                paragraphs: [
                    "Society often gives people a sequence of milestones. Study, work, earn, marry, settle, achieve. These milestones can provide structure, but they can also become borrowed definitions of a successful life.",
                    "When we follow a path only because others expect it, we may slowly lose contact with our own preferences. We become skilled at fulfilling roles without asking whether those roles reflect the lives we actually want.",
                    "The problem is not that responsibility is meaningless. Responsibility can be deeply meaningful. The problem begins when expectation replaces reflection."
                ]
            },
            {
                heading: "What does living feel like?",
                paragraphs: [
                    "Living fully does not mean travelling constantly, taking risks every day, or abandoning ordinary responsibilities. It may mean paying attention to an experience instead of treating it as something to get through.",
                    "It can be found in learning something difficult, spending time with someone without distraction, exploring a place, creating something, or simply allowing a quiet moment to exist without immediately filling it.",
                    "The difference often involves presence. Survival asks what must be done next. Living also asks what is happening now."
                ]
            },
            {
                heading: "Can survival itself become meaningful?",
                paragraphs: [
                    "It would be unfair to treat survival as an inferior form of existence. For someone facing poverty, illness, danger, or instability, getting through the day may require extraordinary strength.",
                    "There are periods when survival is the most honest and necessary goal. A person should not feel guilty for being unable to pursue some idealised version of fulfilment while struggling to meet basic needs.",
                    "The distinction is not a judgement of people. It is an invitation to notice when life has become so dominated by routine that there is no room left for curiosity, connection, or choice."
                ]
            },
            {
                heading: "Returning to your own life",
                paragraphs: [
                    "Perhaps the first step is not to change everything. It is to notice what has been postponed indefinitely. Which experiences keep being delayed? Which choices are made from fear rather than conviction? Which parts of the day feel genuinely yours?",
                    "Some answers may be practical. Others may require difficult decisions. But the process begins with honest attention rather than comparison with someone else's life.",
                    "We cannot control every condition, and not everyone has the same freedom. Still, wherever choice exists, even in small forms, it can become a way of returning to ourselves."
                ]
            }
        ],
        ending: "Perhaps living begins when we stop treating the present as an obstacle between us and the future."
    },

    "Why do humans search for meaning?": {
        subtitle: "Why does the human mind refuse to accept existence as a simple fact?",
        sections: [
            {
                heading: "The mind that asks why",
                paragraphs: [
                    "A stone exists without asking why. A tree grows without writing a theory of its purpose. Human beings, however, can step outside an experience and examine it. We can question our origins, imagine our future, and wonder whether our actions matter.",
                    "This ability creates possibilities, but it also creates discomfort. We are aware that we exist, that our lives are limited, and that the world does not always provide explanations.",
                    "Meaning-seeking may be connected to our capacity for memory, imagination, language, and self-awareness. We can compare what is happening with what might have happened, and we can imagine futures that have not yet arrived."
                ]
            },
            {
                heading: "Meaning creates direction",
                paragraphs: [
                    "A sense of meaning helps organise decisions. It allows people to connect individual actions with larger goals. Education becomes more than attending classes when it is connected to a future someone values. Work becomes more than effort when it supports a responsibility or ambition.",
                    "Psychologists often study meaning through ideas such as coherence, purpose, and significance. These are related but not identical. Coherence concerns whether life makes sense. Purpose concerns direction. Significance concerns whether a person feels that their existence matters.",
                    "These dimensions can help explain why someone may have a comfortable life and still feel lost, or experience hardship while retaining a strong sense of direction."
                ]
            },
            {
                heading: "The role of uncertainty",
                paragraphs: [
                    "Uncertainty can be difficult to tolerate. We want to know what will happen, why something happened, and whether our decisions are correct. Meaning can provide a framework that makes uncertainty more manageable.",
                    "Religious belief, philosophical systems, personal values, and cultural narratives can all help people interpret experiences. They do not always agree, and none should be accepted without reflection simply because it offers comfort.",
                    "Sometimes the desire for meaning can also make us force patterns onto events. A coincidence becomes a sign. An unfortunate event becomes a punishment. A random encounter becomes destiny. Human beings are capable of finding meaning, but they are also capable of inventing explanations that evidence does not support."
                ]
            },
            {
                heading: "Meaning and mortality",
                paragraphs: [
                    "Awareness of death may intensify the search for meaning. Time is limited, and we know that many possibilities will remain unrealised.",
                    "Some people respond by seeking legacy. Others focus on relationships, experiences, contribution, or spiritual continuity. Some reject the idea that a life needs to leave a permanent mark.",
                    "A finite life does not automatically become meaningless. A song ends, but its ending does not erase the experience of hearing it. The value of something may not depend on its lasting forever."
                ]
            },
            {
                heading: "Can we live without a final answer?",
                paragraphs: [
                    "Perhaps the search for meaning is not a problem that must eventually be solved. It may be a continuing feature of reflective human life.",
                    "We can build commitments without knowing the ultimate nature of reality. We can care for people without proving that the universe has a purpose. We can explore without knowing whether the destination exists.",
                    "There is a difference between giving up on questions and accepting that some questions remain open. The latter can be an act of intellectual honesty."
                ]
            }
        ],
        ending: "Maybe we search for meaning because we are creatures who can imagine more than we know, and who keep trying to connect the two."
    }
};


/* =========================================
   3. ARTICLE CONTENT FOR OTHER QUESTIONS
========================================= */

const generalPerspectives = {
    love: [
        {
            heading: "What makes this question difficult?",
            paragraphs: [
                "Love is one of the most familiar human experiences, yet it becomes difficult to define the moment we examine it closely. We use one word for affection, desire, friendship, devotion, care, and longing. These experiences overlap, but they are not necessarily identical.",
                "A useful starting point is to separate what we feel from what we do. Feelings can arise without permission. Actions involve attention, decisions, and responsibility. A relationship may contain affection without care, or commitment without romantic excitement.",
                "The question becomes more interesting when we recognise that our understanding of love is shaped by memory, culture, expectations, and personal experience."
            ]
        },
        {
            heading: "The emotional and psychological side",
            paragraphs: [
                "Human attachment is influenced by psychological needs, personal history, and the ways people learn to relate to others. Feeling safe, understood, respected, and accepted can strengthen a bond.",
                "But our experiences are not identical. One person may experience closeness as comforting while another finds it difficult. Past relationships can influence what we expect from new ones, sometimes in ways we do not immediately recognise.",
                "Psychology can help describe patterns in relationships, but it cannot reduce every individual experience to a single formula. People remain more complicated than categories."
            ]
        },
        {
            heading: "The philosophical perspective",
            paragraphs: [
                "Philosophers have approached love as desire, recognition, friendship, virtue, commitment, and a concern for another person's good. These perspectives reveal different dimensions of the same experience.",
                "One important distinction is between loving someone as a person and loving only what they provide. If affection depends entirely on usefulness, appearance, status, or emotional comfort, it may be more fragile than it first appears.",
                "Yet love does not require the disappearance of personal needs. A healthy relationship involves two people whose individuality matters. Care for another person should not automatically demand the destruction of oneself."
            ]
        },
        {
            heading: "The contradictions we must face",
            paragraphs: [
                "Love can create freedom and dependence, comfort and vulnerability, confidence and fear. To care deeply is to accept that another person can affect us.",
                "This does not mean every form of attachment is healthy. Possessiveness, control, manipulation, and fear can disguise themselves as love. Intensity alone is not proof of depth.",
                "A useful question is whether a relationship allows both people to remain honest, respected, and capable of growing."
            ]
        },
        {
            heading: "What remains uncertain?",
            paragraphs: [
                "There is no single test that can measure the authenticity of every relationship. Human motives are mixed, and even sincere people can misunderstand one another.",
                "We can examine actions, patterns, honesty, and the way people respond to boundaries. But complete certainty about another person's inner world may always remain beyond our reach.",
                "Perhaps love becomes clearer not through a perfect definition, but through the quality of attention and responsibility people bring to one another."
            ]
        }
    ],

    god: [
        {
            heading: "The oldest question",
            paragraphs: [
                "Across cultures and centuries, human beings have wondered whether reality has an ultimate source, whether consciousness continues beyond death, and whether the universe is connected to something divine.",
                "The word God does not mean exactly the same thing in every tradition. Some understand God as a personal creator who knows and acts. Others describe an ultimate reality, a ground of being, or a principle beyond ordinary human categories.",
                "Before answering whether God exists, it is worth asking what kind of existence the question is proposing."
            ]
        },
        {
            heading: "Arguments and reasons for belief",
            paragraphs: [
                "Some arguments begin with the existence of the universe. They ask why contingent things exist and whether there must be a necessary foundation for reality.",
                "Other arguments focus on the apparent order of nature, the emergence of life, moral experience, or the existence of consciousness. For some people, these features make a divine explanation seem plausible.",
                "Religious experience also matters to many believers. A sense of presence, transformation, or connection can be deeply significant to the person experiencing it, even when it is difficult to communicate or independently verify."
            ]
        },
        {
            heading: "Doubt and criticism",
            paragraphs: [
                "Critics question whether the universe requires a personal creator, whether apparent design can be explained through natural processes, and whether religious experiences establish claims about reality beyond the individual.",
                "The problem of suffering is another major challenge. If an all-powerful and perfectly good God exists, why is there so much apparently unnecessary pain? Different theological responses exist, but none is accepted by everyone.",
                "It is important to distinguish criticism of a particular religious claim from proof that every possible concept of the divine is false. The debate involves many different definitions and arguments."
            ]
        },
        {
            heading: "Faith, evidence, and uncertainty",
            paragraphs: [
                "Faith can mean trust, commitment, or belief that extends beyond what can be conclusively demonstrated. For some, it is supported by experience and tradition. For others, a belief without sufficient evidence is difficult to justify.",
                "Scientific methods are powerful for investigating observable and testable claims. But philosophical questions about ultimate explanation can involve assumptions that are not resolved by experiments alone.",
                "This does not mean every answer is equally credible. Arguments can still be examined for consistency, evidence, explanatory power, and hidden assumptions."
            ]
        },
        {
            heading: "What can an honest search look like?",
            paragraphs: [
                "An honest search does not require a person to pretend certainty. It can involve reading different traditions, understanding opposing arguments, examining personal experiences, and being willing to revise a conclusion.",
                "Belief and disbelief are both positions that can be held thoughtfully or carelessly. The label alone tells us little about the quality of someone's reasoning.",
                "Perhaps intellectual humility matters most when the question concerns something as large as the nature of reality itself."
            ]
        }
    ],

    consciousness: [
        {
            heading: "The strange fact of awareness",
            paragraphs: [
                "You can observe a room, remember yesterday, imagine tomorrow, and notice that you are thinking. But what is the experience of being aware? Why is there something it feels like to be you?",
                "Consciousness is studied by neuroscience, psychology, cognitive science, and philosophy. Researchers investigate attention, perception, memory, sleep, brain activity, and the conditions under which people report conscious experiences.",
                "Yet explaining the mechanisms associated with awareness is not obviously identical to explaining why those mechanisms are accompanied by subjective experience."
            ]
        },
        {
            heading: "The brain and experience",
            paragraphs: [
                "A large body of evidence connects conscious experience to brain activity. Changes in the brain can alter perception, personality, memory, attention, and the sense of self.",
                "Injuries, anaesthesia, sleep, medication, and neurological conditions can change what a person experiences. These findings strongly suggest that ordinary human consciousness depends on the functioning of the brain.",
                "However, the philosophical question remains: does describing the physical processes fully explain subjective experience, or is there something about experience that our current descriptions leave out?"
            ]
        },
        {
            heading: "Different theories",
            paragraphs: [
                "Some approaches understand consciousness as emerging from complex information processing. Others emphasise the integration of information, global availability of information in the brain, or the biological organisation of living systems.",
                "Philosophical positions also differ. Physicalists argue that consciousness is ultimately physical. Dualists propose that mind and matter are fundamentally different in some respect. Panpsychist views explore whether experience, in some basic form, is a fundamental feature of reality.",
                "These positions are not equally established scientific theories. They are different attempts to interpret the relationship between physical processes and experience."
            ]
        },
        {
            heading: "The problem of subjective experience",
            paragraphs: [
                "Imagine describing every physical process involved when someone sees the colour red. We could discuss light wavelengths, retinal cells, neural pathways, and brain activity.",
                "But would that description tell us what seeing red feels like to the person? This is the kind of puzzle often called the hard problem of consciousness.",
                "Some philosophers argue that the puzzle reveals a genuine explanatory gap. Others believe it results from confusion about how we describe experience and expect explanations to work."
            ]
        },
        {
            heading: "The limits of what we know",
            paragraphs: [
                "Consciousness research is advancing, but no single theory has achieved universal acceptance. Scientists can investigate measurable correlates of experience while philosophers debate what a complete explanation would require.",
                "It is tempting to turn uncertainty into dramatic conclusions. But the fact that consciousness is not fully understood does not prove that it is supernatural, independent of the brain, or impossible to explain scientifically.",
                "The most honest position may be to recognise both what evidence has established and what remains unresolved."
            ]
        }
    ],

    freewill: [
        {
            heading: "The feeling of choosing",
            paragraphs: [
                "You decide to read a sentence, turn your head, or close a door. These actions usually feel like yours. You experience yourself as someone who considers possibilities and chooses between them.",
                "But where do choices come from? They are influenced by memories, desires, biology, upbringing, surroundings, and circumstances. Some of these influences are outside conscious control.",
                "The question is whether being influenced means being unfree, or whether freedom can exist within a world of causes."
            ]
        },
        {
            heading: "The scientific challenge",
            paragraphs: [
                "Neuroscience has investigated the timing of brain activity associated with simple decisions. Some experiments have found measurable brain signals before participants report becoming aware of an intention to act.",
                "These findings are interesting, but their interpretation is debated. Simple laboratory movements are not the same as complex decisions involving long-term values, reflection, and competing reasons.",
                "Science can investigate the processes involved in decision-making. Whether those processes eliminate free will depends partly on what we mean by freedom."
            ]
        },
        {
            heading: "Three philosophical positions",
            paragraphs: [
                "Libertarian theories of free will hold that at least some human choices are not fully determined by prior events. They attempt to preserve a strong sense of genuine alternative possibilities.",
                "Determinism holds that events follow from prior conditions and laws. If every decision is fully determined by what came before it, the question arises whether anyone could genuinely have chosen otherwise.",
                "Compatibilism argues that freedom and causal determination can coexist. On this view, an action may be free when it expresses a person's reasons and values without coercion, even if those reasons have causes."
            ]
        },
        {
            heading: "Responsibility and fairness",
            paragraphs: [
                "Our ideas about responsibility are connected to how we understand choice. We praise people for generosity and criticise them for harm. But if behaviour is shaped by factors outside a person's control, how should responsibility work?",
                "Recognising influences does not require ignoring harm or abandoning accountability. It may instead encourage us to consider prevention, rehabilitation, social conditions, and the difference between deliberate actions and circumstances that severely limit control.",
                "A thoughtful account of responsibility must consider both individual agency and the conditions in which people make decisions."
            ]
        },
        {
            heading: "Freedom within limits",
            paragraphs: [
                "No person chooses their birthplace, genetic inheritance, early childhood, or every opportunity available to them. Freedom is never exercised from an entirely empty starting point.",
                "Yet people can still reflect, learn, resist certain influences, and make decisions within the possibilities available to them. The extent of that freedom varies across circumstances.",
                "Perhaps the most useful question is not whether we are absolutely free, but what forms of meaningful agency are possible, and how they can be protected."
            ]
        }
    ],

    human: [
        {
            heading: "The contradiction of being human",
            paragraphs: [
                "Human beings are capable of extraordinary kindness and extraordinary cruelty. We build communities, create art, protect strangers, wage wars, cooperate, compete, forgive, and betray.",
                "It is tempting to search for one essential human nature that explains everything. But people behave differently across situations, cultures, relationships, and stages of life.",
                "Perhaps human nature is not a single moral direction. It is a collection of capacities and tendencies that interact with circumstances."
            ]
        },
        {
            heading: "Biology and environment",
            paragraphs: [
                "Evolutionary processes have shaped human bodies, brains, and social tendencies. Cooperation, attachment, competition, threat detection, and care can all be studied in relation to survival and social life.",
                "But biology does not determine every action in a simple way. Development, family relationships, culture, education, institutions, and individual experiences influence how tendencies are expressed.",
                "Nature and experience are not separate forces taking turns. They interact throughout life."
            ]
        },
        {
            heading: "The desire to be accepted",
            paragraphs: [
                "Humans often care deeply about how others see them. Approval can strengthen belonging, while rejection can feel threatening. This is understandable in a species whose survival and development have long depended on social relationships.",
                "The desire for approval can support cooperation and empathy. It can also create pressure to hide disagreement, imitate others, or build an identity around external judgement.",
                "The challenge is not to stop caring about people. It is to distinguish genuine connection from the constant pursuit of validation."
            ]
        },
        {
            heading: "Can people change?",
            paragraphs: [
                "People can change their habits, beliefs, skills, and patterns of behaviour. Psychological research describes development across the lifespan, learning, adaptation, and the possibility of change through deliberate effort and changing circumstances.",
                "But change is not always easy or complete. Deep habits can return under stress. A person may understand a problem intellectually while still struggling to behave differently.",
                "It is also worth distinguishing a change in appearance from a change in character. Lasting change is usually visible in repeated actions, not just declarations."
            ]
        },
        {
            heading: "Understanding without excusing",
            paragraphs: [
                "Trying to understand why someone behaves a certain way does not mean approving of their behaviour. Explanation and justification are different things.",
                "A person's history may help explain their fears, aggression, or patterns of avoidance. That knowledge can guide compassion and prevention, but it does not erase the impact of their actions on others.",
                "Human nature becomes easier to understand when we resist simple labels and examine both the person and the circumstances around them."
            ]
        }
    ]
};


/* =========================================
   4. BUILD THE REMAINING ARTICLES
========================================= */

const categoryEndings = {
    love: "Perhaps love is not something we can completely define. Perhaps it is something we understand through the way we choose to care.",
    god: "The question may remain open, but an honest search is still more meaningful than pretending to possess certainty.",
    consciousness: "We are the beings trying to understand awareness, using awareness itself. Perhaps that is why the question remains so difficult.",
    freewill: "Maybe freedom is not the absence of every influence, but the ability to recognise them and respond with awareness.",
    human: "To understand humanity is to accept its contradictions without pretending they make us simple."
};

const questionSpecific = {
    "Is love a choice or a feeling?": [
        "A feeling can arrive without invitation. A choice appears in what we do with it. The two are connected, but they are not identical.",
        "Romantic attraction may begin spontaneously, while trust, honesty, patience, and care often require repeated decisions.",
        "Perhaps love begins as an experience but becomes meaningful through conduct. A feeling alone cannot guarantee a respectful relationship."
    ],
    "Can we truly know another person?": [
        "We experience other people through words, actions, expressions, and the stories they share. But we never occupy their perspective directly.",
        "Even people who have lived together for decades can surprise one another. Human beings change, hide things, misunderstand themselves, and sometimes discover feelings they did not previously recognise.",
        "Knowing someone may therefore be less like possessing complete information and more like remaining attentive to a person who is always capable of becoming different."
    ],
    "Do we love people or the way they make us feel?": [
        "Our feelings are part of every relationship. We naturally notice the comfort, excitement, security, and recognition another person brings.",
        "But a deeper question appears when the other person cannot meet every expectation. Can we still recognise their individuality, needs, and freedom?",
        "Love may include what someone brings into our life, but it becomes limited when their entire value is reduced to that contribution."
    ],
    "Can love exist without attachment?": [
        "Attachment can mean emotional connection, but it can also mean possessiveness or an inability to tolerate separation. These meanings should not be confused.",
        "A relationship without any emotional bond might not resemble what most people call love. Yet care does not have to become control.",
        "Perhaps the goal is not to eliminate attachment, but to develop a connection that respects the independence of both people."
    ],
    "Does God exist?": [
        "The question depends partly on what is meant by God. A personal creator, an impersonal ultimate reality, and a symbolic name for the foundations of existence are not identical concepts.",
        "Arguments from contingency, design, morality, and religious experience have been offered in support of belief. Critics have challenged their assumptions and conclusions.",
        "There is no universally accepted proof that settles the question for everyone. Careful thought requires examining the strongest versions of both belief and disbelief."
    ],
    "Can faith exist without proof?": [
        "Faith is not always used to mean certainty. It can describe trust, commitment, or a willingness to act despite incomplete knowledge.",
        "People place trust in relationships, future possibilities, and principles without possessing absolute proof of every outcome. Religious faith, however, often makes additional claims about reality that can be examined and questioned.",
        "The important distinction may be between reasonable trust under uncertainty and treating every unsupported belief as automatically true."
    ],
    "Is religion discovered or created?": [
        "Religions are human traditions with histories, languages, institutions, rituals, and interpretations. Their development can be studied historically and socially.",
        "Believers may understand their traditions as responses to a divine reality, revelations, or truths that humans did not invent. Critics may understand religious systems primarily through human culture and history.",
        "Describing how a religion developed does not by itself settle whether its central spiritual claims are true. Historical explanation and metaphysical evaluation are different tasks."
    ],
    "If God exists, why is suffering inevitable?": [
        "The existence of suffering creates a serious challenge for belief in an all-powerful, all-knowing, perfectly good God.",
        "Some responses appeal to free will, the possibility of moral growth, the limits of human understanding, or the structure of a world governed by stable natural laws.",
        "Critics ask why these explanations would require such extreme suffering, especially when pain affects beings who cannot be said to have chosen it. The debate remains one of the most difficult questions in philosophy of religion."
    ],
    "What makes us conscious?": [
        "Consciousness involves more than reacting to the environment. It includes subjective experience: there is something it feels like to see, hear, remember, or feel pain.",
        "Neuroscience investigates brain processes associated with awareness, while philosophy asks how physical processes relate to subjective experience.",
        "Several theories attempt to explain consciousness, but there is no single account accepted by all researchers. The question remains open in important respects."
    ],
    "Are we more than our brains?": [
        "Our mental lives are deeply connected to brain activity. Memory, emotion, perception, and personality can change when the brain changes.",
        "Some argue that this makes the mind entirely physical. Others believe that subjective experience, personal identity, or consciousness requires a broader explanation.",
        "The phrase 'more than the brain' can mean different things. It might refer to the body, relationships, culture, or a non-physical mind. Each claim needs to be considered separately."
    ],
    "Can consciousness exist without a body?": [
        "Everyday human consciousness is closely connected to bodily processes. Perception depends on sensory systems, and the brain integrates information from the body and environment.",
        "Some religious and philosophical traditions propose that consciousness or a soul can survive bodily death. These are significant beliefs, but they are not established scientific conclusions.",
        "The difficulty is that we do not have a universally accepted way to demonstrate subjective experience independently of a living body."
    ],
    "Who is the observer of our thoughts?": [
        "We often speak as though there is a separate observer inside the mind watching thoughts pass by. But this can lead to another question: who observes that observer?",
        "Psychology and neuroscience investigate metacognition, attention, and the ability to monitor mental activity. These processes can create a sense of distance from our thoughts.",
        "Perhaps the observer is not a separate entity hidden inside us. It may be a way of describing the mind's capacity to become aware of its own activity."
    ],
    "Are our choices truly our own?": [
        "Our choices are influenced by biology, upbringing, culture, memories, and the situations we face. Some influences are obvious, while others operate without conscious awareness.",
        "Yet being influenced is not necessarily the same as being forced. Reflection can allow us to notice habits and reconsider whether they express our values.",
        "The difficult question is how much control is enough to call a choice genuinely ours."
    ],
    "Are we responsible for everything we do?": [
        "Responsibility depends on factors such as intention, understanding, capacity, and the presence of coercion. A deliberate action is not the same as an involuntary reaction.",
        "People do not choose every condition that shapes them. But recognising those conditions does not mean that consequences should disappear.",
        "A fair approach considers both personal accountability and the circumstances that influence behaviour."
    ],
    "Can freedom exist without limits?": [
        "Freedom is often imagined as the ability to do anything. But unlimited freedom for one person could remove the freedom of everyone around them.",
        "Rules and boundaries can restrict behaviour, yet they can also protect people from violence, coercion, and exploitation.",
        "The question is not simply whether limits exist, but whether they are justified, fair, and open to examination."
    ],
    "Are our decisions predetermined?": [
        "Determinism suggests that events arise from prior conditions and laws. If human decisions are part of this causal order, they may be determined by factors extending far beyond conscious intention.",
        "But the universe's deepest physical description remains an active subject of scientific study, and quantum indeterminacy does not automatically establish human freedom.",
        "Even if decisions have causes, people can still deliberate, learn, and respond to reasons. Whether that is enough for freedom depends on the philosophical position we adopt."
    ],
    "Are humans naturally good or evil?": [
        "Human beings show capacities for empathy, cooperation, aggression, competition, and care. No single behaviour describes the whole species.",
        "Evolutionary and psychological explanations can help us understand why different tendencies developed, but they do not settle moral questions about what people ought to do.",
        "Perhaps humans possess capacities that can be shaped by circumstances, relationships, institutions, and deliberate choices."
    ],
    "Why do people seek approval?": [
        "Humans are social beings. Acceptance can signal safety and belonging, while rejection can threaten important relationships and a person's sense of identity.",
        "Approval can help us learn how our actions affect others. But when external judgement becomes the main measure of self-worth, people may begin hiding their real thoughts.",
        "The challenge is to remain open to feedback without making every opinion a verdict on our value."
    ],
    "Can a person ever truly change?": [
        "People can develop new habits, revise beliefs, learn skills, and change how they respond to situations. Personal change is possible, but it is rarely instant.",
        "A genuine change is better measured through consistent behaviour over time than through promises made during an emotional moment.",
        "The past can explain a person without permanently defining them. But change also requires honesty about the harm or patterns that need to be addressed."
    ],
    "Are we shaped more by nature or experience?": [
        "Biology influences temperament, development, and many aspects of human behaviour. Experience shapes learning, expectations, skills, and responses to the world.",
        "Modern research generally treats these influences as interacting rather than competing explanations. Genes can influence how people respond to environments, while environments can affect development and biological processes.",
        "There is no universal percentage that explains every trait. The balance differs depending on what is being studied and the individual circumstances involved."
    ]
};


/* =========================================
   5. CREATE ARTICLES FOR ALL QUESTIONS
========================================= */

function createArticle(question, category) {
    const special = questionSpecific[question];

    const baseSections = generalPerspectives[category.id];

    const sections = baseSections.map((section, index) => ({
        heading: section.heading,
        paragraphs: [...section.paragraphs]
    }));

    if (special) {
        sections[0].paragraphs.push(special[0]);
        sections[2].paragraphs.push(special[1]);
        sections[4].paragraphs.push(special[2]);
    }

    return {
        subtitle: category.description,
        sections,
        ending: categoryEndings[category.id]
    };
}

categories.forEach(category => {
    category.questions.forEach(question => {
        if (!articles[question]) {
            articles[question] = createArticle(question, category);
        }
    });
});


/* =========================================
   6. DOM ELEMENTS
========================================= */

const pages = {
    home: document.getElementById("homePage"),
    explore: document.getElementById("explorePage"),
    questions: document.getElementById("questionsPage"),
    reading: document.getElementById("readingPage"),
    about: document.getElementById("aboutPage")
};

const navLinks = document.querySelectorAll(".nav-link");

const categoryGrid = document.getElementById("categoryGrid");
const questionList = document.getElementById("questionList");

const categoryTitle = document.getElementById("categoryTitle");
const categoryDescription = document.getElementById("categoryDescription");
const categoryEyebrow = document.getElementById("categoryEyebrow");

const articleCategory = document.getElementById("articleCategory");
const articleTitle = document.getElementById("articleTitle");
const articleSubtitle = document.getElementById("articleSubtitle");
const articleBody = document.getElementById("articleBody");
const articleEnding = document.getElementById("articleEnding");

const portalOverlay = document.getElementById("portalOverlay");
const portalMessage = document.getElementById("portalMessage");

const readingCounter = document.getElementById("readingCounter");

const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");


/* =========================================
   7. WEBSITE STATE
========================================= */

let currentCategory = null;
let currentQuestion = null;
let currentQuestionIndex = 0;

let portalTimer = null;
let portalBusy = false;


/* =========================================
   8. STARFIELD GENERATOR
========================================= */

function createStars() {
    const starfield = document.getElementById("starfield");

    if (!starfield) return;

    const starCount = window.innerWidth < 600 ? 65 : 130;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 2 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.setProperty(
            "--duration",
            (Math.random() * 4 + 2) + "s"
        );

        star.style.setProperty(
            "--delay",
            (Math.random() * 5) + "s"
        );

        starfield.appendChild(star);
    }
}

createStars();


/* =========================================
   9. PAGE NAVIGATION
========================================= */

function showPage(pageName) {
    Object.values(pages).forEach(page => {
        page.classList.remove("active");
    });

    if (pages[pageName]) {
        pages[pageName].classList.add("active");
    }

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.page === pageName
        );
    });

    navLinksContainer.classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function navigate(pageName) {
    if (portalBusy) return;

    showPage(pageName);
}


/* =========================================
   10. CATEGORY DISPLAY
========================================= */

function renderCategories() {
    categoryGrid.innerHTML = "";

    categories.forEach((category, index) => {
        const card = document.createElement("div");

        card.className = "category-card";

        card.style.setProperty("--card-glow", category.color);

        card.style.animation = `pageAppear 0.6s ease ${index * 0.08}s both`;

        card.innerHTML = `
            <span class="category-count">
                ${String(category.questions.length).padStart(2, "0")} QUESTIONS
            </span>

            <span class="category-icon">${category.icon}</span>

            <h3>${category.title}</h3>

            <p>${category.description}</p>

            <span class="category-arrow">↗</span>
        `;

        card.addEventListener("click", () => {
            openCategory(category);
        });

        categoryGrid.appendChild(card);
    });
}

renderCategories();


/* =========================================
   11. OPEN CATEGORY
========================================= */

function openCategory(category) {
    currentCategory = category;

    categoryTitle.textContent = category.title;
    categoryDescription.textContent = category.description;
    categoryEyebrow.textContent = "EXPLORE THE UNKNOWN";

    renderQuestions(category);

    showPage("questions");
}


/* =========================================
   12. RENDER QUESTIONS
========================================= */

function renderQuestions(category) {
    questionList.innerHTML = "";

    category.questions.forEach((question, index) => {
        const button = document.createElement("button");

        button.className = "question-card";

        button.innerHTML = `
            <span class="question-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="question-text"></span>

            <span class="question-arrow">↗</span>
        `;

        button.querySelector(".question-text").textContent = question;

        button.addEventListener("click", () => {
            currentQuestionIndex = index;
            openArticle(question);
        });

        questionList.appendChild(button);
    });
}


/* =========================================
   13. PORTAL TRANSITION
========================================= */

function enterPortal(message, callback) {
    if (portalBusy) return;

    portalBusy = true;

    clearTimeout(portalTimer);

    portalMessage.textContent = message;

    portalOverlay.classList.add("active");

    portalTimer = setTimeout(() => {
        try {
            callback();
        } finally {
            setTimeout(() => {
                portalOverlay.classList.remove("active");

                setTimeout(() => {
                    portalBusy = false;
                }, 500);
            }, 250);
        }
    }, 950);
}


/* =========================================
   14. ARTICLE RENDERING
========================================= */

function openArticle(question) {
    if (!articles[question] || !currentCategory) {
        console.error("Article not found:", question);
        return;
    }

    currentQuestion = question;

    const article = articles[question];

    enterPortal("Entering the unknown...", () => {
        articleCategory.textContent = currentCategory.title;

        articleTitle.textContent = question;

        articleSubtitle.textContent = article.subtitle;

        articleEnding.textContent = article.ending;

        readingCounter.textContent =
            `QUESTION ${currentQuestionIndex + 1} / ${currentCategory.questions.length}`;

        articleBody.innerHTML = "";

        article.sections.forEach(section => {
            const heading = document.createElement("h2");
            heading.textContent = section.heading;

            articleBody.appendChild(heading);

            section.paragraphs.forEach(paragraph => {
                const p = document.createElement("p");
                p.textContent = paragraph;

                articleBody.appendChild(p);
            });
        });

        const reflection = document.createElement("h2");
        reflection.textContent = "A thought from Fakir";

        articleBody.appendChild(reflection);

        const reflectionText = document.createElement("blockquote");

        reflectionText.textContent =
            "Not every question needs to be answered immediately. Some deserve the patience of being explored.";

        articleBody.appendChild(reflectionText);

        const finalHeading = document.createElement("h2");
        finalHeading.textContent = "The question remains";

        articleBody.appendChild(finalHeading);

        const finalText = document.createElement("p");

        finalText.textContent =
            "You may leave this page with an answer, a disagreement, or a new question. All three are welcome. The purpose of thinking is not always to arrive at certainty, but to understand why we believe what we believe.";

        articleBody.appendChild(finalText);

        showPage("reading");
    });
}


/* =========================================
   15. NEXT AND PREVIOUS QUESTIONS
========================================= */

function moveQuestion(direction) {
    if (!currentCategory || portalBusy) return;

    const total = currentCategory.questions.length;

    currentQuestionIndex =
        (currentQuestionIndex + direction + total) % total;

    const nextQuestion =
        currentCategory.questions[currentQuestionIndex];

    openArticle(nextQuestion);
}

document.getElementById("nextQuestion").addEventListener("click", () => {
    moveQuestion(1);
});

document.getElementById("previousQuestion").addEventListener("click", () => {
    moveQuestion(-1);
});


/* =========================================
   16. BACK BUTTONS
========================================= */

document.getElementById("backToCategories").addEventListener("click", () => {
    navigate("explore");
});

document.getElementById("backToQuestions").addEventListener("click", () => {
    navigate("questions");
});

document.getElementById("readingHomeButton").addEventListener("click", () => {
    navigate("home");
});


/* =========================================
   17. NAVIGATION BUTTONS
========================================= */

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigate(link.dataset.page);
    });
});

document.getElementById("brand").addEventListener("click", event => {
    event.preventDefault();
    navigate("home");
});

document.getElementById("enterButton").addEventListener("click", () => {
    enterPortal("A new journey begins...", () => {
        showPage("explore");
    });
});

document.getElementById("homeExploreButton").addEventListener("click", () => {
    navigate("explore");
});


/* =========================================
   18. RANDOM THOUGHT GENERATOR
========================================= */

const thoughts = [
    "Perhaps the purpose of life is not to find an answer, but to become someone who can live with the questions.",

    "We spend so much time searching for ourselves that we sometimes forget to experience who we already are.",

    "The universe does not become smaller simply because we fail to understand it.",

    "Some silences are not empty. They are filled with everything we never learned how to say.",

    "Perhaps freedom begins when we stop asking for permission to become ourselves.",

    "A person can spend a lifetime surrounded by people and still remain a stranger to themselves.",

    "Not every road leads somewhere. Some exist simply to be travelled.",

    "The strangest thing about time is that we only ever experience it while it is disappearing.",

    "Maybe we are not lost. Maybe we are simply somewhere we have never been before.",

    "There are questions that open doors, and answers that quietly close them.",

    "We are temporary arrangements of matter, somehow capable of imagining eternity.",

    "Perhaps understanding someone begins when we stop trying to turn them into a version we can easily understand."
];

let lastThoughtIndex = -1;

function generateThought() {
    let index;

    do {
        index = Math.floor(Math.random() * thoughts.length);
    } while (index === lastThoughtIndex && thoughts.length > 1);

    lastThoughtIndex = index;

    const thoughtElement = document.getElementById("randomThought");

    thoughtElement.style.opacity = "0";

    setTimeout(() => {
        thoughtElement.textContent = thoughts[index];
        thoughtElement.style.opacity = "1";
    }, 250);
}

document.getElementById("newThoughtButton").addEventListener("click", generateThought);


/* =========================================
   19. MOBILE MENU
========================================= */

menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
});


/* =========================================
   20. HIDDEN EASTER EGGS
========================================= */

// Clicking the logo symbol reveals a hidden message.

document.querySelector(".brand-symbol").addEventListener("click", () => {
    enterPortal("A little secret...", () => {
        const secret = document.createElement("div");

        secret.className = "secret-message";

        secret.innerHTML = `
            <div class="secret-inner">
                <span class="secret-star">✧</span>
                <p>You were never looking for a destination.</p>
                <p>Perhaps you were looking for a reason to wander.</p>
                <button class="secret-close">Close this thought</button>
            </div>
        `;

        document.body.appendChild(secret);

        secret.querySelector(".secret-close").addEventListener("click", () => {
            secret.remove();
        });

        secret.addEventListener("click", event => {
            if (event.target === secret) {
                secret.remove();
            }
        });
    });
});


// Hidden keyboard interaction: press Escape twice.

let escapeCount = 0;
let escapeTimer = null;

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        escapeCount++;

        clearTimeout(escapeTimer);

        escapeTimer = setTimeout(() => {
            escapeCount = 0;
        }, 1200);

        if (escapeCount >= 2) {
            escapeCount = 0;

            generateThought();

            if (pages.home.classList.contains("active")) {
                document.getElementById("randomThought").scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }
    }
});


/* =========================================
   21. SECRET MESSAGE STYLING
========================================= */

const secretStyles = document.createElement("style");

secretStyles.textContent = `
    .secret-message {
        position: fixed;
        inset: 0;
        z-index: 1200;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px;
        background: rgba(5,4,12,0.96);
        backdrop-filter: blur(15px);
        animation: pageAppear 0.5s ease;
    }

    .secret-inner {
        max-width: 550px;
        text-align: center;
    }

    .secret-star {
        color: #c4b5fd;
        font-size: 40px;
    }

    .secret-inner p {
        margin-top: 25px;
        color: #e7def5;
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-size: clamp(28px, 5vw, 42px);
        line-height: 1.3;
    }

    .secret-inner p + p {
        color: #a99cbd;
        font-size: clamp(20px, 4vw, 28px);
    }

    .secret-close {
        margin-top: 40px;
        padding: 13px 20px;
        border: 1px solid rgba(196,181,253,0.4);
        background: transparent;
        color: white;
        font-size: 10px;
        letter-spacing: 2px;
    }

    .secret-close:hover {
        background: rgba(167,139,250,0.2);
    }
`;

document.head.appendChild(secretStyles);


/* =========================================
   22. INITIALIZE WEBSITE
========================================= */

showPage("home");

console.log("FAKIR WEBSITE READY.");
console.log("6 categories loaded.");
console.log("25 questions loaded.");
console.log("All article entries initialized.");
console.log("Welcome to the unknown.");