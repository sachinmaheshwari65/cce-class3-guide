const mockTestData2 = [
  {
    "question": "જે સંખ્યાના માત્ર બે જ અવયવો હોય તેવી સંખ્યાને શું કહેવાય?",
    "options": ["વિભાજ્ય સંખ્યા", "અવિભાજ્ય સંખ્યા", "તટસ્થ સંખ્યા", "સંયુક્ત સંખ્યા"],
    "correct": 1,
    "explanation": "જે સંખ્યાને માત્ર ૧ અને તે સંખ્યા પોતે એમ બે જ અવયવો હોય તેને અવિભાજ્ય સંખ્યા (Prime Number) કહે છે."
  },
  {
    "question": "Fill in the blank: She _______ her homework before going to play.",
    "options": ["finish", "finishes", "had finished", "has finish"],
    "correct": 2,
    "explanation": "Past Perfect Tense (had + V3) is used for an action completed before another past action."
  },
  {
    "question": "સંધિ છૂટી પાડો: 'ગણેશ'",
    "options": ["ગણ + ઇશ", "ગણે + શ", "ગણ + ઈશ", "ગણ + એશ"],
    "correct": 2,
    "explanation": "ગણ + ઈશ = ગણેશ (અ + ઈ = એ)."
  },
  {
    "question": "રાજ્યપાલની નિમણૂક કોણ કરે છે?",
    "options": ["વડાપ્રધાન", "મુખ્યમંત્રી", "રાષ્ટ્રપતિ", "સુપ્રીમ કોર્ટના મુખ્ય ન્યાયાધીશ"],
    "correct": 2,
    "explanation": "ભારતના બંધારણ મુજબ રાજ્યપાલની નિમણૂક રાષ્ટ્રપતિ દ્વારા કરવામાં આવે છે."
  },
  {
    "question": "If 1st January 2023 was Sunday, what was the day on 1st January 2024?",
    "options": ["Monday", "Tuesday", "Wednesday", "Sunday"],
    "correct": 0,
    "explanation": "Ordinary year has 1 odd day. So, the day moves forward by 1. Sunday + 1 = Monday."
  }
];

if (typeof module !== 'undefined') { module.exports = { mockTestData2 }; }