const reasoningData = [
{
  "topic": "📘 Coding-Decoding (કોડિંગ-ડીકોડિંગ) - Complete Logic & Rules",
  "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <h3 style=\"color: var(--accent-light);\">🧩 CCE Exam High Weightage Topic: Coding-Decoding (કોડિંગ-ડીકોડિંગ)</h3>\n      <p>કોડિંગ-ડીકોડિંગ પ્રશ્નો પરીક્ષામાં સૌથી વધુ પૂછાતા પ્રશ્નો છે. તેમાં અક્ષરો, સંખ્યાઓ અને પ્રતીકો વચ્ચેનો ચોક્કસ તાર્કિક સંબંધ ઓળખવાનો હોય છે.</p>\n\n      <h4 style=\"color: #6366f1; margin-top: 1.25rem;\">📌 મુખ્યા 5 નિયમો અને કોડિંગના પ્રકારો:</h4>\n      \n      <div style=\"background: var(--bg-card); border: 1px solid var(--border); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;\">\n        <h5 style=\"color: #84cc16; margin-top:0;\">1️⃣ Letter Shifting (અક્ષર શિફ્ટિંગ):</h5>\n        <p>દરેક અક્ષરમાં સમાન વધારો કે ઘટાડો (+1, -2, +3 વગેરે) થાય છે.</p>\n        <strong>ઉદાહરણ:</strong> જો APPLE = BQQMF હોય, તો BANANA = ?<br>\n        <em>તર્ક:</em> A (+1) ➔ B, P (+1) ➔ Q, P (+1) ➔ Q, L (+1) ➔ M, E (+1) ➔ F.<br>\n        માટે BANANA (+1) ➔ <strong>CBOBOB</strong>\n      </div>\n\n      <div style=\"background: var(--bg-card); border: 1px solid var(--border); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;\">\n        <h5 style=\"color: #f43f5e; margin-top:0;\">2️⃣ Opposite Letter Coding (વિરોધી અક્ષરો):</h5>\n        <p>આપેલા શબ્દના અક્ષરોને તેના વિરોધી અક્ષર (જેનો સ્થાન ક્રમ સરવાળો 27 થાય) થી બદલવામાં આવે છે.</p>\n        <strong>વિરોધી અક્ષરો કોષ્ટક (Sum = 27):</strong><br>\n        A ➔ Z (AZ), B ➔ Y (BY), C ➔ X (CX), D ➔ W (DW), E ➔ V (EV), F ➔ U (FU), G ➔ T (GT), H ➔ S (HS), I ➔ R (IR), J ➔ Q (JQ), K ➔ P (KP), L ➔ O (LO), M ➔ N (MN).<br>\n        <strong>ઉદાહરણ:</strong> જો CAT = XZG હોય, તો DOG = ?<br>\n        <em>તર્ક:</em> D ➔ W, O ➔ L, G ➔ T ➔ <strong>WLT</strong>\n      </div>\n\n      <div style=\"background: var(--bg-card); border: 1px solid var(--border); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;\">\n        <h5 style=\"color: #eab308; margin-top:0;\">3️⃣ Number Coding (અંક કોડિંગ):</h5>\n        <p>અક્ષરોના ક્રમનો સરવાળો કે ગુણાકાર કરીને કોડ બનાવાય છે.</p>\n        <strong>ઉદાહરણ:</strong> જો BOY = 42 હોય, તો GIRL = ?<br>\n        <em>તર્ક:</em> B(2) + O(15) + Y(25) = 42.<br>\n        GIRL ➔ G(7) + I(9) + R(18) + L(12) = <strong>46</strong>\n      </div>\n\n      <div style=\"background: var(--bg-card); border: 1px solid var(--border); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;\">\n        <h5 style=\"color: #06b6d4; margin-top:0;\">4️⃣ Symbol Coding (પ્રતીક કોડિંગ):</h5>\n        <p>અક્ષરોને #, $, @, % જેવા પ્રતીકો સાથે દર્શાવાય છે. કોમન અક્ષરોના પ્રતીકો મેચ કરવા.</p>\n        <strong>ઉદાહરણ:</strong> જો NIGHT = %@#$! અને RAIN = &*@% હોય, તો TRAIN = ? ➔ <strong>!*@%</strong>\n      </div>\n\n      <div style=\"background: var(--bg-card); border: 1px solid var(--border); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;\">\n        <h5 style=\"color: #ec4899; margin-top:0;\">5️⃣ Condition Based Coding (શરત આધારિત કોડિંગ):</h5>\n        <p>શરત: જો પ્રથમ અને અંતિમ અક્ષર સ્વર (Vowel: A,E,I,O,U) હોય તો બંનેને @ થી દર્શાવવા.</p>\n      </div>\n    </div>",
  "keyPoints": [
    "EJOTY ટ્રીક યાદ રાખો: E(5), J(10), O(15), T(20), Y(25).",
    "અક્ષર અને તેના વિરોધી અક્ષરના ક્રમનો સરવાળો 27 થાય (A=1 + Z=26 = 27).",
    "Number coding માં અક્ષરોના ક્રમ સરવાળો (BOY = 2+15+25 = 42) ચેક કરવો.",
    "Symbol coding માં ડાયરેક્ટ મેપિંગ હોય છે.",
    "Letter shifting માં +1, -1, +2, -2 ની પેટર્ન ડ્રો કરો."
  ],
  "questions": [
    {
      "question": "જો BOY = 42 હોય, તો GIRL = ?",
      "options": [
        "44",
        "46",
        "48",
        "50"
      ],
      "correct": 1,
      "explanation": "B(2) + O(15) + Y(25) = 42. તેવી જ રીતે G(7) + I(9) + R(18) + L(12) = 46."
    },
    {
      "question": "જો CAT = XZG હોય, તો DOG = ?",
      "options": [
        "WLT",
        "WLS",
        "VLT",
        "XMT"
      ],
      "correct": 0,
      "explanation": "વિરોધી અક્ષર કોડિંગ (Opposite letter code: Sum=27): D ➔ W, O ➔ L, G ➔ T. માટે સાચો જવાબ WLT."
    },
    {
      "question": "જો DELHI = 73541 અને CALCUTTA = 82586992 હોય, તો CALICUT = ?",
      "options": [
        "8251896",
        "8251806",
        "8521896",
        "8251895"
      ],
      "correct": 0,
      "explanation": "ડાયરેક્ટ ડિજિટ કોડિંગ: C=8, A=2, L=5, I=1, C=8, U=9, T=6 ➔ CALICUT = 8251896."
    }
  ]
},
  // 1. ANALOGY
  {
    "topic": "📘 Reasoning Module 1 – શબ્દ સામ્યતા (Word Analogy): સંકલ્પના",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>સામ્યતા એટલે બે શબ્દો વચ્ચેના સમાન સંબંધને ઓળખવો.</p>\n    </div>",
    "keyPoints": ["શબ્દ કરતા સંબંધ મહત્વનો."],
    "questions": [
      {
        "question": "કનક : સોનું :: અંબર : ?",
        "options": ["આકાશ", "ધરતી", "પાણી", "પહાડ"],
        "correct": 0,
        "explanation": "પર્યાયવાચી સંબંધ."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 2 – શબ્દ સામ્યતા: સંબંધો અને વર્ગીકરણ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>અંગ-પૂર્ણ, જાત-ઉપજાત, પ્રાણી-નિવાસ.</p>\n    </div>",
    "keyPoints": ["GK અહીં કામ લાગે."],
    "questions": [
      {
        "question": "ચણો : કઠોળ :: જુવાર : ?",
        "options": ["ફળ", "શાકભાજી", "અનાજ", "તેલીબિયાં"],
        "correct": 2,
        "explanation": "જુવાર એ અનાજ છે."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 3 – શબ્દ સામ્યતા: વ્યવસાય અને સાધન",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>શિક્ષક : શાળા :: ખેડૂત : ખેતર.</p>\n    </div>",
    "keyPoints": ["કાર્યસ્થળ અને સાધન."],
    "questions": [
      {
        "question": "સોય : દરજી :: કરવત : ?",
        "options": ["ખેડૂત", "મોચી", "સુથાર", "લુહાર"],
        "correct": 2,
        "explanation": "કરવત એ સુથારનું સાધન છે."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 4 – આંકડાકીય સામ્યતા: ગાણિતિક ક્રિયાઓ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>8 : 13 :: 12 : 17 (+5). 6 : 18 :: 8 : 24 (×3).</p>\n    </div>",
    "keyPoints": ["પહેલા તફાવત તપાસવો."],
    "questions": [
      {
        "question": "15 : 22 :: 31 : ?",
        "options": ["37", "38", "39", "40"],
        "correct": 1,
        "explanation": "+7 નો વધારો."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 5 – આંકડાકીય સામ્યતા: વર્ગ, ઘન અને અંકો",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>5 : 25 :: 8 : 64. 23 : 5 :: 41 : 5 (સરવાળો).</p>\n    </div>",
    "keyPoints": ["વર્ગ/ઘન મોઢે રાખો."],
    "questions": [
      {
        "question": "34 : 12 :: 52 : ?",
        "options": ["7", "10", "20", "25"],
        "correct": 1,
        "explanation": "3 * 4 = 12, 5 * 2 = 10."
      }
    ]
  },

  // 2. CODING & DIRECTIONS
  {
    "topic": "📘 Reasoning Module 6 – કોડિંગ-ડીકોડિંગ (Alphabet Positions)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>EJOTY: 5, 10, 15, 20, 25.</p>\n    </div>",
    "keyPoints": ["વિરોધી અક્ષરોનો સરવાળો 27."],
    "questions": [
      {
        "question": "જો CAT = 3120 હોય તો DOG = ?",
        "options": ["4157", "4147", "5157", "4158"],
        "correct": 0,
        "explanation": "C=3, A=1, T=20."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 7 – દિશા અને વળાંક (Directions)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>N, S, E, W. સૂર્યોદય = પૂર્વ.</p>\n    </div>",
    "keyPoints": ["જમણો વળાંક = 90° clockwise."],
    "questions": [
      {
        "question": "ઉત્તર તરફ મુખ રાખી ઉભેલ વ્યક્તિ બે વાર જમણે વળે તો મુખ કઈ દિશામાં હશે?",
        "options": ["ઉત્તર", "દક્ષિણ", "પૂર્વ", "પશ્ચિમ"],
        "correct": 1,
        "explanation": "બે જમણા વળાંક એટલે 180°."
      }
    ]
  },

  // 3. LOGICAL RULES
  {
    "topic": "📘 Reasoning Module 8 – લોહીના સંબંધ (Blood Relations)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>પિતાનો ભાઈ ➔ કાકા. સ્ત્રી (-), પુરુષ (+).</p>\n    </div>",
    "keyPoints": ["એક જ પેઢીના લોકો એક લાઈનમાં."],
    "questions": [
      {
        "question": "મારા પિતાની એકમાત્ર પુત્રીના પતિ મારા કોણ થાય?",
        "options": ["બનેવી", "કાકા", "મામા", "ભાઈ"],
        "correct": 0,
        "explanation": "બહેનના પતિ."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 9 – ઘડિયાળ (Clock): ખૂણો શોધવો",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>ખૂણો = | 30H - 5.5M |</p>\n    </div>",
    "keyPoints": ["મિનિટ કાંટો 6°/min."],
    "questions": [
      {
        "question": "3:30 વાગ્યે કેટલો ખૂણો હશે?",
        "options": ["75°", "90°", "105°", "60°"],
        "correct": 0,
        "explanation": "|30(3) - 5.5(30)| = |90 - 165| = 75°."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 10 – કેલેન્ડર: લીપ વર્ષ અને વધારાના દિવસો",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>લીપ વર્ષ ➔ ૨ વધારાના દિવસો.</p>\n    </div>",
    "keyPoints": ["૭ દિવસ પછી એ જ વાર."],
    "questions": [
      {
        "question": "જો ૧ જાન્યુઆરીએ સોમવાર હોય તો તે જ વર્ષની ૮ જાન્યુઆરીએ કયો વાર હશે?",
        "options": ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર"],
        "correct": 1,
        "explanation": "Same day."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 11 – ક્રમ અને સ્થાન (Rank & Order)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>કુલ સંખ્યા = L + R - 1.</p>\n    </div>",
    "keyPoints": ["બંને બાજુનો સરવાળો - 1."],
    "questions": [
      {
        "question": "એક હરોળમાં રવિનો ક્રમ બંને બાજુથી ૧૧મો છે. કુલ કેટલા?",
        "options": ["20", "21", "22", "11"],
        "correct": 1,
        "explanation": "11 + 11 - 1 = 21."
      }
    ]
  },

  // 4. LOGICAL ABILITY
  {
    "topic": "📘 Reasoning Module 12 – ગાણિતિક ક્રિયાઓ: BODMAS",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>ક્રમ: કૌંસ ➔ ભાગાકાર/ગુણાકાર ➔ સરવાળો/બાદબાકી.</p>\n    </div>",
    "keyPoints": ["નિયમ જાળવવો."],
    "questions": [
      {
        "question": "10 + 5 * 2 - 4 = ?",
        "options": ["16", "26", "20", "10"],
        "correct": 0,
        "explanation": "10 + 10 - 4 = 16."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 13 – નવેદન અને અનુમાન (Statement & Assumption)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>અનુમાન એટલે વાત પાછળનો છુપાયેલો વિચાર.</p>\n    </div>",
    "keyPoints": ["નવેદનમાંથી જ નીકળવું જોઈએ."],
    "questions": [
      {
        "question": "નવેદન: 'ધીમે બોલો.' - યોગ્ય અનુમાન?",
        "options": ["શાંતિની જરૂર છે.", "બધા બહેરા છે.", "કોઈને સાંભળવું નથી.", "નિશ્ચિત નથી"],
        "correct": 0,
        "explanation": "વનંતી પાછળનો હેતુ."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 14 – નવેદન અને નિષ્કર્ષ (Logical Conclusion)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>માત્ર આપેલી માહિતી પરથી જ તારણ કાઢવું.</p>\n    </div>",
    "keyPoints": ["પોતાનો મત ન ઉમેરવો."],
    "questions": [
      {
        "question": "બધી પેન પેન્સિલ છે. આ એક પેન છે. નિષ્કર્ષ?",
        "options": ["આ પેન્સિલ છે.", "આ પેન્સિલ નથી.", "આ રબર છે.", "નિશ્ચિત નથી"],
        "correct": 0,
        "explanation": "તાર્કિક સંબંધ."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 15 – નવેદન અને કાર્યવાહી (Course of Action)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>સમસ્યાનું વ્યાજબી અને શક્ય ઉકેલ શોધવો.</p>\n    </div>",
    "keyPoints": ["રચનાત્મક ઉકેલ."],
    "questions": [
      {
        "question": "સમસ્યા: પાણીમાં દુર્ગંધ આવે છે. કાર્યવાહી?",
        "options": ["નમૂના તપાસવા.", "પાણી પીવાનું બંધ કરવું.", "બધા નળ તોડી નાખવા.", "નિશ્ચિત નથી"],
        "correct": 0,
        "explanation": "પ્રાયોગિક ઉકેલ."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 16 – તાર્કિક અસમાનતા (Inequalities)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>A > B, B = C, C > D ➔ A > D.</p>\n    </div>",
    "keyPoints": ["સાંકળ બનાવો."],
    "questions": [
      {
        "question": "જો M = N, N > O, O ≥ P હોય તો?",
        "options": ["M > P", "M < P", "M = P", "નિશ્ચિત નથી"],
        "correct": 0,
        "explanation": "M = N > O ≥ P."
      }
    ]
  },

  // 5. ADVANCED PUZZLES & VISUALS
  {
    "topic": "📘 Reasoning Module 17 – વેન આકૃતિ (Venn Diagrams): Most Imp",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">1. વેન આકૃતિ એટલે શું?</h4>\n      <p>વસ્તુઓ વચ્ચેનો તાર્કિક સંબંધ ચિત્ર દ્વારા દર્શાવવાની રીત.</p>\n      <p><b>ટ્રીક:</b> જો ત્રણેય શબ્દો અલગ વર્ગના હોય, તો ત્રણ અલગ વર્તુળો આવશે.</p>\n    </div>",
    "keyPoints": ["Category ઓળખો."],
    "questions": [
      {
        "question": "નીચેનામાંથી કઈ વેન આકૃતિ 'પક્ષીઓ', 'કીટ' અને 'પેન' વચ્ચેનો શ્રેષ્ઠ સંબંધ દર્શાવે છે?",
        "options": ["એકની અંદર એક", "ત્રણ અલગ વર્તુળ", "બે જોડાયેલા", "એકમાં બે નાના"],
        "correct": 1,
        "explanation": "પક્ષી, કીટ અને પેન ત્રણેય અલગ વર્ગ છે."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 18 – નોન-વર્બલ: જળ પ્રતિબિંબ (Water Images)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">1. જળ પ્રતિબિંબનો નિયમ</h4>\n      <p>પાણીમાં છબી <b>ઉભી ઉલટાઈ (Vertically Inverted)</b> જાય છે.</p>\n      <p><b>ટ્રીક:</b> Top ➔ Bottom, પણ Side (ડાબું-જમણું) બદલાતું નથી.</p>\n    </div>",
    "keyPoints": ["Vertical inversion."],
    "questions": [
      {
        "question": "આકૃતિ (X) નું જળ પ્રતિબિંબ કયું હશે?",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "correct": 3,
        "explanation": "આકૃતિને ઉભી ઉલટાવતા વિકલ્પ 4 સાચો ઠરે છે."
      }
    ]
  },
  {
    "topic": "📘 Reasoning Module 19 – સત્ય અને અસત્યના કોયડા (Liar Puzzles)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>એક પછી એક વ્યક્તિને સાચી માની સંભાવનાઓ તપાસવી.</p>\n    </div>",
    "keyPoints": ["વિરોધી વાક્યો શોધો."],
    "questions": [
      {
        "question": "અમિત: હું જીત્યો નથી. બપિન: ચિરાગ જીત્યો છે. ચિરાગ: બપિન ખોટું બોલે છે. માત્ર એક જ સાચો હોય તો કોણ જીત્યું?",
        "options": ["અમિત", "બિપિન", "ચિરાગ", "નિશ્ચિત નથી"],
        "correct": 0,
        "explanation": "જો અમિત જીત્યો હોય તો બપિન અને ચિરાગ વિરોધાભાસમાં છે."
      }
    ]
  },
  {
    "topic": "⚡ Reasoning Module 20 – મિશ્ર એનાલિટિકલ પઝલ્સ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>ગ્રીડ પદ્ધતિથી ઉકેલ લાવો.</p>\n    </div>",
    "keyPoints": ["સમય અને ધીરજ."],
    "questions": [
      {
        "question": "ત્રણ શહેરો A,B,C. અંજલી A ગઈ નથી. દિનેશ C ગયો નથી. ફરહાન B ગયો છે. અંજલી ક્યાં ગઈ?",
        "options": ["A", "B", "C", "નિશ્ચિત નથી"],
        "correct": 2,
        "explanation": "ફરહાન B માં છે, તો અંજલી માટે A, C બાકી. A ન ગઈ હોવાથી તે C ગઈ હશે."
      }
    ]
  }
];

if (typeof module !== 'undefined') { module.exports = { reasoningData }; }