const englishData = [
  // 1. BASIC GRAMMAR
  {
    "topic": "📘 English Module 1 – Noun: સંકલ્પના અને પ્રકારો",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">1. Noun એટલે શું?</h4> 
      <p>વ્યક્તિ, વસ્તુ કે સ્થળને ઓળખવા માટે વપરાતા શબ્દને Noun (નામ) કહેવાય.</p> 
      <ul style=\"list-style: none; padding-left: 0;\"> 
        <li>• <b>Proper Noun:</b> Sachin, Gujarat.</li> 
        <li>• <b>Common Noun:</b> player, city.</li> 
        <li>• <b>Collective Noun:</b> team, army.</li> 
      </ul> 
    </div>`,
    "keyPoints": ["Proper Noun નો પ્રથમ અક્ષર Capital હોય."],
    "questions": [
      {
        "question": "Identify the proper noun: 'Ahmedabad is a big city.'",
        "options": ["Ahmedabad", "big", "city", "is"],
        "correct": 0,
        "explanation": "Ahmedabad એ એક ચોક્કસ શહેરનું નામ છે, તેથી તે Proper Noun છે."
      }
    ]
  },
  {
    "topic": "📘 English Module 2 – Noun and Number (વચન)",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">બહુવચન બનાવવાના નિયમો</h4> 
      <p>Boy ➔ Boys. Box ➔ Boxes. Wife ➔ Wives. Child ➔ Children.</p> 
    </div>`,
    "keyPoints": ["Sheep, Deer સરખા રહે."],
    "questions": [
      {
        "question": "What is the plural of 'Foot'?",
        "options": ["Foots", "Feets", "Feet", "Footes"],
        "correct": 2,
        "explanation": "Foot એ અનિયમિત નામ છે, તેનું બહુવચન Feet થાય."
      }
    ]
  },
  {
    "topic": "📘 English Module 3 – Pronoun: સંકલ્પના અને કોષ્ટક",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>I, We, You, He, She, It, They.</p> 
    </div>`,
    "keyPoints": ["I ➔ me ➔ my ➔ mine."],
    "questions": [
      {
        "question": "Choose the correct pronoun: 'Ram is a boy. ___ is my friend.'",
        "options": ["She", "He", "It", "They"],
        "correct": 1,
        "explanation": "પુરુષ માટે 'He' વપરાય."
      }
    ]
  },
  {
    "topic": "📘 English Module 4 – Verb: ક્રિયાપદના પ્રકારો અને રૂપો",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>V1 - V2 - V3. Speak - Spoke - Spoken.</p> 
    </div>`,
    "keyPoints": ["V3 પેસિવમાં વપરાય."],
    "questions": [
      {
        "question": "What is the V3 of 'Go'?",
        "options": ["Went", "Going", "Gone", "Goes"],
        "correct": 2,
        "explanation": "Go (V1) - Went (V2) - Gone (V3)."
      }
    ]
  },
  {
    "topic": "📘 English Module 5 – Adjectives: વિશેષણના પ્રકારો",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>Good, Bad, Clever, Much, Many.</p> 
    </div>`,
    "keyPoints": ["નામના અર્થમાં વધારો કરે."],
    "questions": [
      {
        "question": "Identify the adjective: 'She is a clever girl.'",
        "options": ["She", "is", "clever", "girl"],
        "correct": 2,
        "explanation": "Clever એ છોકરીનો ગુણ બતાવે છે."
      }
    ]
  },
  {
    "topic": "📘 English Module 6 – Adverb: ક્રિયા વિશેષણ",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>Slowly, Carefully, Always.</p> 
    </div>`,
    "keyPoints": ["ક્રિયાના અર્થમાં વધારો કરે."],
    "questions": [
      {
        "question": "He walks ___.",
        "options": ["slow", "slowly", "slowness", "slown"],
        "correct": 1,
        "explanation": "ચાલવાની રીત બતાવવા Adverb 'slowly' વપરાય."
      }
    ]
  },

  // 2. SENTENCE STRUCTURE & CONNECTORS
  {
    "topic": "📘 English Module 7 – Jumbled Words: વાક્ય રચના (S-V-O)",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>Subject + Verb + Object.</p> 
    </div>`,
    "keyPoints": ["કર્તા પહેલા આવે."],
    "questions": [
      {
        "question": "Arrange: 'cricket / plays / Ram'",
        "options": ["Plays Ram cricket.", "Ram plays cricket.", "Cricket Ram plays.", "Ram cricket plays."],
        "correct": 1,
        "explanation": "Subject (Ram) + Verb (plays) + Object (cricket)."
      }
    ]
  },
  {
    "topic": "📘 English Module 8 – Prepositions of Time and Place",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>At, On, In, Between, Among.</p> 
    </div>`,
    "keyPoints": ["At ➔ ચોક્કસ સમય."],
    "questions": [
      {
        "question": "The book is ___ the table.",
        "options": ["in", "on", "at", "to"],
        "correct": 1,
        "explanation": "સપાટી પર હોવા માટે 'on' વપરાય."
      }
    ]
  },
  {
    "topic": "📘 English Module 9 – Conjunctions: સંયોજકો (FANBOYS)",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>And, But, Or, So, Because.</p> 
    </div>`,
    "keyPoints": ["બે વાક્યોને જોડે."],
    "questions": [
      {
        "question": "He is poor ___ honest.",
        "options": ["and", "but", "so", "or"],
        "correct": 1,
        "explanation": "વિરોધાભાસ માટે 'but' વપરાય."
      }
    ]
  },

  // 3. ADVANCED GRAMMAR
  {
    "topic": "📘 English Module 10 – Simple Present & Continuous Tenses",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>He goes. She is going.</p> 
    </div>`,
    "keyPoints": ["Is/Am/Are + V-ing."],
    "questions": [
      {
        "question": "It ___ raining now.",
        "options": ["is", "am", "are", "was"],
        "correct": 0,
        "explanation": "ચાલુ વર્તમાનકાળમાં 'is' વપરાય."
      }
    ]
  },
  {
    "topic": "📘 English Module 11 – Active & Passive Voice: Basics",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>Ram writes a letter. ➔ A letter is written by Ram.</p> 
    </div>`,
    "keyPoints": ["Object + Helping Verb + V3."],
    "questions": [
      {
        "question": "Passive of 'He plays cricket':",
        "options": ["Cricket is played by him.", "Cricket played by him.", "He is played cricket.", "Cricket is play by him."],
        "correct": 0,
        "explanation": "Present Passive ➔ is + V3."
      }
    ]
  },
  {
    "topic": "📘 English Module 12 – Direct & Indirect Speech: Basics",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>He said, \"I am ready.\" ➔ He said that he was ready.</p> 
    </div>`,
    "keyPoints": ["Tense backshifts."],
    "questions": [
      {
        "question": "Indirect of 'She says, \"I am ill.\"'",
        "options": ["She says that she is ill.", "She says that she was ill.", "She said that she is ill.", "She says she ill."],
        "correct": 1,
        "explanation": "જો બહાર Says હોય તો અંદરનો કાળ ન બદલાય."
      }
    ]
  },
  {
    "topic": "📘 English Module 13 – Transformation of Sentences",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>Affirmative to Negative using Antonyms.</p> 
    </div>`,
    "keyPoints": ["Maintain meaning."],
    "questions": [
      {
        "question": "Negative of 'He is wise':",
        "options": ["He is not wise.", "He is not foolish.", "He is foolish.", "He is not more wise."],
        "correct": 1,
        "explanation": "વિરોધી શબ્દ વાપરવાથી અર્થ જળવાઈ રહે છે."
      }
    ]
  },

  // 4. VOCABULARY & ONE WORDS
  {
    "topic": "📘 English Module 14 – Vocabulary: Synonyms & Antonyms",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>Abandon ➔ Leave. Ancient ➔ Modern.</p> 
    </div>`,
    "keyPoints": ["Tone elimination."],
    "questions": [
      {
        "question": "Synonym of 'Benevolent':",
        "options": ["Cruel", "Kind", "Angry", "Lazy"],
        "correct": 1,
        "explanation": "Benevolent એટલે દયાળુ (Kind)."
      }
    ]
  },
  {
    "topic": "📘 English Module 15 – Idioms and Common Phrases",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>Piece of cake. Once in a blue moon.</p> 
    </div>`,
    "keyPoints": ["Memory tricks included."],
    "questions": [
      {
        "question": "Meaning of 'Once in a blue moon':",
        "options": ["Every day", "Very rare", "At night", "Blue color"],
        "correct": 1,
        "explanation": "Blue moon ભાગ્યે જ જોવા મળે, તેથી અર્થ 'ખૂબ જ ઓછું' થાય."
      }
    ]
  },
  {
    "topic": "📘 English Module 16 – One Word Substitutions: Most Imp",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">પરીક્ષાલક્ષી અગત્યના શબ્દસમૂહ</h4> 
      <ul style=\"padding-left: 1.5rem;\"> 
        <li>• <b>Atheist:</b> જે ભગવાનમાં નથી માનતો.</li> 
        <li>• <b>Inaudible:</b> જે સાંભળી ન શકાય.</li> 
        <li>• <b>Eloquent:</b> અસરકારક રીતે બોલનાર.</li> 
        <li>• <b>Verbose:</b> જરૂર કરતા વધુ શબ્દો વાપરનાર.</li> 
        <li>• <b>Laconic:</b> બહુ ઓછા શબ્દોમાં વાત કરનાર.</li> 
      </ul> 
    </div>`,
    "keyPoints": ["Root words થી યાદ રાખો."],
    "questions": [
      {
        "question": "A sound that cannot be heard:",
        "options": ["Audible", "Inaudible", "Eloquent", "Rhetoric"],
        "correct": 1,
        "explanation": "In (નહી) + Audible (સાંભળી શકાય) = Inaudible."
      }
    ]
  },

  // 5. TRANSLATION
  {
    "topic": "⚡ English Module 17 – English to Gujarati Translation Strategy",
    "content": `<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\"> 
      <p>5-Step Method. Pick natural Gujarati sentences.</p> 
    </div>`,
    "keyPoints": ["Context is king."],
    "questions": [
      {
        "question": "Translate: 'He has been working in this office since 2018.'",
        "options": ["તે 2018 માં આ office માં કામ કરતો હતો.", "તે 2018 પછી આ office માં કામ કરશે.", "તે 2018 થી આ office માં કામ કરી રહ્યો છે.", "તેણે 2018 માં આ office માં કામ કર્યું."],
        "correct": 2,
        "explanation": "Present Perfect Continuous."
      }
    ]
  }
];

