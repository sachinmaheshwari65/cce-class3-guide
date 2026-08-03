const mathDataFull = [
  // 1. BASICS
  {
    "topic": "📘 Maths Module 1 – Number System: સંકલ્પના",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">1. Concept (સંકલ્પના)</h4>\n      <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;\">\n        <div style=\"background: var(--bg-surface); padding: 1rem; border-radius: 8px; border: 1px solid var(--border);\">\n          <strong style=\"color: var(--accent-light);\">Natural Numbers (N)</strong>: 1, 2, 3...\n        </div>\n        <div style=\"background: var(--bg-surface); padding: 1rem; border-radius: 8px; border: 1px solid var(--border);\">\n          <strong style=\"color: var(--accent-light);\">Whole Numbers (W)</strong>: 0, 1, 2...\n        </div>\n      </div>\n    </div>",
    "keyPoints": ["1 એ વિશિષ્ટ સંખ્યા છે.", "2 એ સૌથી નાનો Prime છે."],
    "questions": [
      {
        "question": "સૌથી નાની પ્રાકૃતિક સંખ્યા કઈ છે?",
        "options": ["0", "1", "2", "-1"],
        "correct": 1,
        "explanation": "પ્રાકૃતિક સંખ્યાઓ 1 થી શરૂ થાય છે."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 2 – ટકાવારી: પાયાની સમજ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">1. ટકાવારીની સમજ</h4>\n      <p>ટકા એટલે દર 100 માં (Per-Cent). 25% એટલે 100 માંથી 25.</p>\n    </div>",
    "keyPoints": ["અપૂર્ણાંકને ટકામાં ફેરવવા 100 થી ગુણો."],
    "questions": [
      {
        "question": "840 ના 37.5% કેટલા થાય?",
        "options": ["300", "315", "325", "330"],
        "correct": 1,
        "explanation": "37.5% = 3/8. તેથી 840 × 3/8 = 105 × 3 = 315."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 3 – મધ્યક (Mean / Average)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">1. મધ્યકની સમજ</h4>\n      <div style=\"background: var(--bg-surface); padding: 1rem; border-radius: 8px;\">\n        મધ્યક = અવલોકનોનો કુલ સરવાળો / કુલ સંખ્યા\n      </div>\n    </div>",
    "keyPoints": ["કુલ સરવાળો = મધ્યક × સંખ્યા."],
    "questions": [
      {
        "question": "પ્રથમ 100 ધન પૂર્ણાંકોની સરેરાશ કેટલી છે? (Golden MCQ)",
        "options": ["100", "51", "50.5", "49.5"],
        "correct": 2,
        "explanation": "સૂત્ર: (n + 1) / 2 = (100 + 1) / 2 = 50.5."
      },
      {
        "question": "100 સુધીની એકી (odd) સંખ્યાઓની સરેરાશ કેટલી છે? (Golden MCQ)",
        "options": ["50.5", "50", "49.5", "49"],
        "correct": 1,
        "explanation": "પ્રથમ n એકી સંખ્યાની સરેરાશ n જ હોય. 100 સુધીમાં 50 એકી સંખ્યા હોય, તેથી સરેરાશ 50."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 4 – સરેરાશ (Average): પરિવારો અને ભૂલ સુધારણા",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">1. પરિવારની સરેરાશ ઉંમર</h4>\n      <p>જ્યારે નવો સભ્ય ઉમેરાય ત્યારે નવી કુલ ઉંમર - જૂની કુલ ઉંમર = નવા સભ્યની ઉંમર.</p>\n\n      <h4 style=\"color: var(--accent-light); margin-top: 1.5rem;\">2. સરેરાશમાં સુધારો (Error Correction) ⭐</h4>\n      <div style=\"background: var(--bg-surface); padding: 1rem; border-radius: 8px; border: 1px solid var(--border);\">\n        <b>રીત:</b> તફાવત = (સાચો સરવાળો) - (ખોટો સરવાળો)<br>\n        નવી સરેરાશ = જૂની સરેરાશ + (તફાવત / કુલ સંખ્યા)\n      </div>\n    </div>",
    "keyPoints": [
      "સરેરાશમાં સુધારો કરવા માટે તફાવતને કુલ અવલોકનો વડે ભાગવો.",
      "જો તફાવત ઋણ હોય તો સરેરાશ ઘટશે."
    ],
    "questions": [
      {
        "question": "એક પરિવારમાં માતા-પિતાની સરેરાશ ઉંમર 35 વર્ષ છે. પુત્ર સાથે ત્રણેયની સરેરાશ 27 વર્ષ છે. પુત્રની ઉંમર કેટલી? (Golden MCQ)",
        "options": ["12 વર્ષ", "11 વર્ષ", "10.5 વર્ષ", "10 વર્ષ"],
        "correct": 1,
        "explanation": "માતા-પિતા કુલ = 70. ત્રણેય કુલ = 81. પુત્ર = 81 - 70 = 11 વર્ષ."
      },
      {
        "question": "50 સંખ્યાની સરેરાશ 30 છે. 28 અને 31 ને બદલે ભૂલથી 82 અને 13 લેવાયા હતા. સાચી સરેરાશ શોધો. (Golden MCQ)",
        "options": ["36.12", "30.66", "29.28", "38.21"],
        "correct": 2,
        "explanation": "તફાવત = (28+31) - (82+13) = 59 - 95 = -36. સરેરાશમાં ઘટાડો = 36/50 = 0.72. સાચી સરેરાશ = 30 - 0.72 = 29.28."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 4 – સાદુ વ્યાજ (Simple Interest)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>વ્યાજ (I) = PRT / 100</p>\n    </div>",
    "keyPoints": ["T હંમેશા વર્ષમાં લેવો."],
    "questions": [
      {
        "question": "₹5000 પર 10% લેખે 2 વર્ષનું વ્યાજ કેટલું?",
        "options": ["500", "1000", "1200", "1500"],
        "correct": 1,
        "explanation": "5000 * 10 * 2 / 100 = 1000."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 5 – ગુણોત્તર અને પ્રમાણ: પાયો",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>અંદરના પદોનો ગુણાકાર = બહારના પદોનો ગુણાકાર (b × c = a × d).</p>\n    </div>",
    "keyPoints": ["ગુણોત્તર સમાન એકમો વચ્ચે જ લેવો."],
    "questions": [
      {
        "question": "12:18 નું અતિસંક્ષિપ્ત રૂપ શું થાય?",
        "options": ["2:3", "3:2", "4:6", "6:9"],
        "correct": 0,
        "explanation": "12/18 = 2/3."
      }
    ]
  },

  // 2. ALGEBRA FUNDAMENTALS
  {
    "topic": "📘 Maths Module 6 – કૌંસના પ્રકારો અને ચિહ્નોના નિયમો",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>ઋણ ચિહ્ન કૌંસની બહાર હોય તો અંદરના દરેક પદનું ચિહ્ન બદલાય.</p>\n      <p>-(a - b) = -a + b</p>\n    </div>",
    "keyPoints": ["સૌથી અંદરનો કૌંસ પહેલા ખોલવો."],
    "questions": [
      {
        "question": "-(x + y - z) = ?",
        "options": ["-x-y-z", "-x-y+z", "-x+y+z", "x+y-z"],
        "correct": 1,
        "explanation": "ઋણ ચિહ્નથી બધા ચિહ્નો ઉલટાય."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 7 – પદાવલિ અને સમાન પદોનું જોડાણ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>3x, -7x સમાન પદ છે. 2a, 4b અસમાન પદ છે.</p>\n    </div>",
    "keyPoints": ["ફક્ત સમાન પદો વચ્ચે જ સરવાળો થાય."],
    "questions": [
      {
        "question": "3x + 2x - 5 = ?",
        "options": ["5x-5", "x-5", "5x+5", "0"],
        "correct": 0,
        "explanation": "3x+2x = 5x."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 8 – નિત્યસમ Mastery: (a ± b)²",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>(a + b)² = a² + 2ab + b²</p>\n      <p>(a - b)² = a² - 2ab + b²</p>\n    </div>",
    "keyPoints": ["2ab ભૂલવું નહીં."],
    "questions": [
      {
        "question": "(x + 3)² = ?",
        "options": ["x²+9", "x²+6x+9", "x²+3x+9", "x²+6x+6"],
        "correct": 1,
        "explanation": "x² + 2(x)(3) + 3² = x² + 6x + 9."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 9 – નિત્યસમ Mastery: a² - b² અને ગુણાકાર ટ્રીક્સ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>a² - b² = (a - b)(a + b)</p>\n      <p>Example: 49 × 51 = (50-1)(50+1) = 50² - 1² = 2499.</p>\n    </div>",
    "keyPoints": ["વર્ગોનો તફાવત."],
    "questions": [
      {
        "question": "99² = ?",
        "options": ["9801", "9901", "9899", "9701"],
        "correct": 0,
        "explanation": "(100-1)² = 10000 - 200 + 1 = 9801."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 10 – ઉચ્ચ નિત્યસમ: (a + b + c)² અને ઘન",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>(a+b+c)² = a² + b² + c² + 2ab + 2bc + 2ca</p>\n    </div>",
    "keyPoints": ["કુલ 6 પદ મળે."],
    "questions": [
      {
        "question": "(a - 3)³ નું વિસ્તરણ શું?",
        "options": ["a³ - 9a² + 27a - 27", "a³ - 27", "a³ - 9a² + 9a - 27", "a³ + 27"],
        "correct": 0,
        "explanation": "a³ - 3(a²)(3) + 3(a)(9) - 27."
      }
    ]
  },

  // 3. EQUATIONS & MODELING
  {
    "topic": "📘 Maths Module 11 – સાદા રેખીય સમીકરણો",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>x + 7 = 15 ➔ x = 8. 3x = 15 ➔ x = 5.</p>\n    </div>",
    "keyPoints": ["ચિહ્ન બદલી સામે લઈ જવું."],
    "questions": [
      {
        "question": "જો 4x - 7 = 21 હોય તો x?",
        "options": ["5", "6", "7", "8"],
        "correct": 2,
        "explanation": "4x = 28 ➔ x = 7."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 12 – જટિલ સમીકરણો: કૌંસ અને અપૂર્ણાંક",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>3(x + 4) = 21 ➔ 3x + 12 = 21 ➔ x = 3.</p>\n    </div>",
    "keyPoints": ["લ.સા.અ. મહત્વનો છે."],
    "questions": [
      {
        "question": "x/2 + x/3 = 10 હોય તો x?",
        "options": ["6", "10", "12", "15"],
        "correct": 2,
        "explanation": "5x/6 = 10 ➔ 5x = 60 ➔ x = 12."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 13 – ગાણિતિક મોડેલિંગ: ભાષામાંથી ગણિત",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>'સંખ્યાના બમણામાં 7 ઉમેરી 3 થી ભાગો' ➔ (2x + 7) / 3</p>\n    </div>",
    "keyPoints": ["અજ્ઞાત માટે x ધારો."],
    "questions": [
      {
        "question": "ભાઈ અને બહેનની ઉંમરનો સરવાળો 38 છે. ભાઈ 6 વર્ષ મોટો હોય તો બહેન x માટે શું સાચું?",
        "options": ["2x + 6 = 38", "x + 6 = 38", "2x = 38", "x - 6 = 38"],
        "correct": 0,
        "explanation": "x + (x+6) = 38."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 14 – બે ચલવાળા સમીકરણો: લોપ પદ્ધતિ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>x + y = 11, x - y = 3 ➔ 2x = 14 ➔ x = 7, y = 4.</p>\n    </div>",
    "keyPoints": ["બે ચલ માટે બે સમીકરણ."],
    "questions": [
      {
        "question": "બે સંખ્યાનો સરવાળો 15 અને તફાવત 5 છે. સંખ્યાઓ કઈ?",
        "options": ["10, 5", "8, 7", "9, 6", "11, 4"],
        "correct": 0,
        "explanation": "x+y=15, x-y=5 ➔ 2x=20 ➔ x=10."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 15 – બે ચલવાળા કૂટપ્રશ્નો: પ્રાણીઓ અને સિક્કા",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>મરઘાં અને બકરી: x+y=12, 2x+4y=32.</p>\n    </div>",
    "keyPoints": ["બકરીને 4 પગ હોય."],
    "questions": [
      {
        "question": "₹5 અને ₹10 ની કુલ 7 નોટો છે. કુલ ₹50 હોય તો ₹5 ની કેટલી?",
        "options": ["3", "4", "5", "2"],
        "correct": 1,
        "explanation": "x+y=7, 5x+10y=50 ➔ x+2y=10 ➔ y=3, x=4."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 16 – બે અંકની સંખ્યા (10x + y) મોડેલિંગ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>સંખ્યા = 10 * દશક + એકમ.</p>\n    </div>",
    "keyPoints": ["અંકો ઉલટાવતા 10y + x."],
    "questions": [
      {
        "question": "અંકો ઉલટાવતા સંખ્યા 27 ઓછી થાય છે. મોડેલ?",
        "options": ["(10x+y)-(10y+x)=27", "x-y=27", "10x=27", "10y-x=27"],
        "correct": 0,
        "explanation": "મૂળ - નવી = 27."
      }
    ]
  },

  // 4. ARITHMETIC
  {
    "topic": "📘 Maths Module 17 – સમય અને કાર્ય (Time & Work): LCM Method",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>A=10, B=15 ➔ LCM=30. A=3 unit, B=2 unit. Total=5 unit. Time=30/5=6 days.</p>\n    </div>",
    "keyPoints": ["કાર્યક્ષમતા શોધો."],
    "questions": [
      {
        "question": "A કામ 20 દિવસમાં અને B 30 દિવસમાં કરે. સાથે કેટલા દિવસ?",
        "options": ["10", "12", "15", "25"],
        "correct": 1,
        "explanation": "60 / (3+2) = 12."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 18 – સાંકળનો નિયમ (MDH Rule)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>M1D1H1 / W1 = M2D2H2 / W2</p>\n    </div>",
    "keyPoints": ["Work (W) હંમેશા છેદમાં."],
    "questions": [
      {
        "question": "12 માણસો 8 દિવસમાં કામ કરે, તો 16 માણસો કેટલા દિવસ?",
        "options": ["4", "6", "8", "10"],
        "correct": 1,
        "explanation": "12*8 / 16 = 6."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 19 – સમય, ઝડપ અને અંતર: એકમ રૂપાંતર",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">1. મુખ્ય સૂત્રો અને એકમો</h4>\n      <p>અંતર = ઝડપ × સમય. km/h ➔ m/s (5/18 થી ગુણો).</p>\n\n      <div style=\"background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 1rem; border-radius: 8px; margin: 1rem 0;\">\n        <b>⚠️ સાવધાન (Common Mistakes):</b>\n        <br>• <b>Mistake 1:</b> એકમ (Units) બદલવાનું ભૂલી જવું. (60 km/hr = 60 m/s લખવું ખોટું છે).\n        <br>• <b>Mistake 5/6:</b> સમયનું Conversion ભૂલવું. 30 મિનિટ એટલે 30 કલાક નહિ પણ <b>0.5 કલાક</b> ગણાય.\n      </div>\n\n      <h4 style=\"color: var(--accent-light);\">2. Quick Conversion Table</h4>\n      <ul style=\"list-style: none; padding-left: 0;\">\n        <li>• 15 મિનિટ = 0.25 કલાક</li>\n        <li>• 30 મિનિટ = 0.5 કલાક</li>\n        <li>• 45 મિનિટ = 0.75 કલાક</li>\n      </ul>\n    </div>",
    "keyPoints": [
      "પહેલા બધા યુનિટ સરખા કરો, પછી જ ફોર્મ્યુલા લગાવો.",
      "સરેરાશ ઝડપ (સમાન અંતર માટે) = 2xy / (x+y)."
    ],
    "questions": [
      {
        "question": "એક કાર 60 km/hr ની ઝડપે 30 મિનિટમાં કેટલું અંતર કાપશે?",
        "options": ["1800 km", "30 km", "120 km", "90 km"],
        "correct": 1,
        "explanation": "સમય = 30/60 = 0.5 કલાક. અંતર = 60 * 0.5 = 30 km."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 20 – ટ્રેન (Trains) અને સાપેક્ષ ઝડપ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <h4 style=\"color: var(--accent-light); border-bottom: 2px solid var(--accent); padding-bottom: 5px;\">1. ટ્રેન અને સાપેક્ષ ઝડપ (Relative Speed)</h4>\n      \n      <div style=\"background: var(--bg-surface); padding: 1rem; border-radius: 8px; border: 1px solid var(--border); margin: 1rem 0;\">\n        <b>🚀 Exam Trick:</b>\n        <br>• <b>સામે આવે (Opposite):</b> ઝડપનો સરવાળો (+) કરો.\n        <br>• <b>એક જ દિશા (Same):</b> ઝડપની બાદબાકી (-) કરો.\n      </div>\n\n      <div style=\"background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 1rem; border-radius: 8px; margin: 1rem 0;\">\n        <b>⚠️ સાવધાન (Mistake 4):</b> પ્લેટફોર્મને પસાર કરતી વખતે ટ્રેનની પોતાની લંબાઈ (Length) ઉમેરવાનું ભૂલશો નહિ. <b>કુલ અંતર = ટ્રેન + પ્લેટફોર્મ.</b>\n      </div>\n    </div>",
    "keyPoints": [
      "થાંભલાને પસાર કરવામાં અંતર = માત્ર ટ્રેનની લંબાઈ.",
      "દિશા ખોટી ➔ જવાબ ખોટો!"
    ],
    "questions": [
      {
        "question": "200m લાંબી ટ્રેન 400m લાંબા પ્લેટફોર્મને 60 km/hr ની ઝડપે કેટલા સમયમાં પસાર કરે?",
        "options": ["24 sec", "36 sec", "10 sec", "40 sec"],
        "correct": 1,
        "explanation": "કુલ અંતર = 200+400 = 600m. ઝડપ = 60 * 5/18 = 16.67 m/s. સમય = 600 / 16.67 = 36 sec."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 21 – હોડી અને પ્રવાહ (Boats & Stream)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>Downstream = B + S. Upstream = B - S.</p>\n    </div>",
    "keyPoints": ["હોડી = (D+U)/2."],
    "questions": [
      {
        "question": "હોડીની શાંત પાણીમાં ઝડપ 10 અને પ્રવાહ 2 હોય તો Upstream ઝડપ?",
        "options": ["8", "12", "10", "5"],
        "correct": 0,
        "explanation": "10 - 2 = 8."
      }
    ]
  },

  // 5. ADVANCED ALGEBRA
  {
    "topic": "📘 Maths Module 22 – બહુપદીની ઓળખ અને ઘાત (Degree)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>સૌથી મોટો ઘાત એટલે બહુપદીનો ઘાત.</p>\n    </div>",
    "keyPoints": ["ચલ છેદમાં ન હોય."],
    "questions": [
      {
        "question": "8x⁴ - 3x² + 9 માં ઘાત શું?",
        "options": ["1", "2", "3", "4"],
        "correct": 3,
        "explanation": "Max power is 4."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 23 – બહુપદીનું મૂલ્ય શોધવું",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>p(x) માં કિંમત મૂકો.</p>\n    </div>",
    "keyPoints": ["(-2)² = 4."],
    "questions": [
      {
        "question": "f(x) = x² - 3x - 7 માટે f(-2)?",
        "options": ["3", "-3", "7", "0"],
        "correct": 0,
        "explanation": "4 + 6 - 7 = 3."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 24 – અવયવીકરણ: GCF અને સમૂહીકરણ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>12x³ - 18x² = 6x²(2x - 3).</p>\n    </div>",
    "keyPoints": ["સામાન્ય કાઢો."],
    "questions": [
      {
        "question": "3x² + 6x + 2x + 4 ના અવયવ?",
        "options": ["(3x+2)(x+2)", "(x+6)(3x+2)", "(3x+4)(x+1)", "0"],
        "correct": 0,
        "explanation": "3x(x+2)+2(x+2)."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 25 – અવયવીકરણ: મધ્ય પદ વિભાજન Mastery",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>x² + 7x + 12 = (x+3)(x+4).</p>\n    </div>",
    "keyPoints": ["સરવાળો b, ગુણાકાર c."],
    "questions": [
      {
        "question": "x² - 9x + 20 ના અવયવ?",
        "options": ["(x-4)(x-5)", "(x+4)(x+5)", "(x-2)(x-10)", "0"],
        "correct": 0,
        "explanation": "-4, -5."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 26 – અવશેષ અને ગુણક પ્રમેય",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>p(a) = 0 ➔ (x-a) ગુણક છે.</p>\n    </div>",
    "keyPoints": ["ખૂટતો k શોધવો."],
    "questions": [
      {
        "question": "x³ + kx² - 4x + 1 ને (x-1) થી ભાગતા શેષ 0, તો k?",
        "options": ["1", "2", "3", "4"],
        "correct": 1,
        "explanation": "1+k-4+1=0 ➔ k=2."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 27 – શૂન્યકો અને ગુણાંકનો સંબંધ",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>α+β = -b/a. αβ = c/a.</p>\n    </div>",
    "keyPoints": ["સરવાળો અને ગુણાકાર."],
    "questions": [
      {
        "question": "x² - 7x + 10 ના શૂન્યકોનો સરવાળો?",
        "options": ["7", "-7", "10", "-10"],
        "correct": 0,
        "explanation": "-(-7)/1 = 7."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 28 – દ્વઘાતીય સમીકરણ અને સૂત્ર (Formula)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>x = [-b ± √D] / 2a. D = b² - 4ac.</p>\n    </div>",
    "keyPoints": ["વિવેચક D."],
    "questions": [
      {
        "question": "x² - 5x + 6 = 0 ના ઉકેલ?",
        "options": ["2, 3", "-2, -3", "1, 6", "0"],
        "correct": 0,
        "explanation": "(x-2)(x-3)."
      }
    ]
  },

  // 6. ARITHMETIC PROGRESSION
  {
    "topic": "📘 Maths Module 29 – સમાંતર શ્રેણી: સંકલ્પના (AP Basics)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>d = a₂ - a₁.</p>\n    </div>",
    "keyPoints": ["તફાવત સ્થિર હોય."],
    "questions": [
      {
        "question": "3, 6, 9, 12... માટે d શું?",
        "options": ["2", "3", "4", "5"],
        "correct": 1,
        "explanation": "6 - 3 = 3."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 30 – સમાંતર શ્રેણી: n-મું પદ (Tₙ)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>Tₙ = a + (n - 1)d.</p>\n    </div>",
    "keyPoints": ["પદનો ક્રમ n."],
    "questions": [
      {
        "question": "3, 6, 9... નું 10મું પદ?",
        "options": ["27", "30", "33", "36"],
        "correct": 1,
        "explanation": "3 + 9*3 = 30."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 31 – સમાંતર શ્રેણી: પદનો ક્રમ (n) શોધવો",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>124 = 4 + (n-1)5 ➔ n = 25.</p>\n    </div>",
    "keyPoints": ["n must be positive integer."],
    "questions": [
      {
        "question": "4, 9, 14... માં 124 કયું પદ છે?",
        "options": ["24", "25", "26", "27"],
        "correct": 1,
        "explanation": "120/5 = 24 ➔ n=25."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 32 – સમાંતર મધ્યકો (Arithmetic Mean)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>A.M. = (a + b) / 2.</p>\n    </div>",
    "keyPoints": ["સરેરાશ."],
    "questions": [
      {
        "question": "12 અને 36 વચ્ચેનો મધ્યક?",
        "options": ["20", "24", "25", "30"],
        "correct": 1,
        "explanation": "48 / 2 = 24."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 33 – સમાંતર શ્રેણી: પ્રથમ n પદોનો સરવાળો (Sₙ)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>Sₙ = n/2 (a + l).</p>\n    </div>",
    "keyPoints": ["કુલ સરવાળો."],
    "questions": [
      {
        "question": "2, 5, 8... ના પ્રથમ 10 પદોનો સરવાળો?",
        "options": ["150", "155", "160", "165"],
        "correct": 1,
        "explanation": "5 * (4 + 9*3) = 155."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 34 – વ્યવહારુ દાખલા: બેઠક વ્યવસ્થા અને બચત",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>18 બેઠકો + 3 વધારો ➔ 20 હરોળમાં કુલ કેટલી?</p>\n    </div>",
    "keyPoints": ["Sum formula used."],
    "questions": [
      {
        "question": "18 બેઠક, 3 વધારો, 20 હરોળ ➔ કુલ?",
        "options": ["900", "930", "950", "1000"],
        "correct": 1,
        "explanation": "10 * (36 + 57) = 930."
      }
    ]
  },
  {
    "topic": "📘 Maths Module 35 – ગાણિતિક સાબતીઓ: AP & Even-Odd Rules",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>Even = 2n. Odd = 2n + 1.</p>\n    </div>",
    "keyPoints": ["Prove logic."],
    "questions": [
      {
        "question": "બે વિષમ સંખ્યાનો સરવાળો?",
        "options": ["સમ", "વિષમ", "શૂન્ય", "અનિશ્ચિત"],
        "correct": 0,
        "explanation": "2m+1 + 2n+1 = 2(m+n+1) ➔ Even."
      }
    ]
  },
  {
    "topic": "⚡ Maths Module 36 – સમાંતર શ્રેણી: પરીક્ષાના છટકા",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>ઋણ પદોની શરૂઆત ક્યારથી થાય?</p>\n    </div>",
    "keyPoints": ["Check for first negative."],
    "questions": [
      {
        "question": "100, 94, 88... માં કયું પદ પ્રથમ ઋણ હશે?",
        "options": ["16", "17", "18", "20"],
        "correct": 2,
        "explanation": "n > 17.6 ➔ 18th."
      }
    ]
  }
];

if (typeof module !== 'undefined') { module.exports = { mathDataFull }; }