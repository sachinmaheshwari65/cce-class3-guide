const mathData = [
  {
    "topic": "સંખ્યા પદ્ધતિ અને વિભાજ્યતા (Number System & Divisibility Rules)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>સંખ્યા પદ્ધતિ એ ગણિતનો પાયો છે. કોઈપણ સ્પર્ધાત્મક પરીક્ષામાં સંખ્યાઓના પ્રકારો, વિભાજ્યતાની ચાવીઓ અને એકમનો અંક શોધવાના પ્રશ્નો વારંવાર પૂછાય છે. આ પ્રકરણમાં અવિભાજ્ય સંખ્યાઓ (Prime Numbers), સમ-વિષમ સંખ્યાઓ અને શેષ પ્રમેય (Remainder Theorem) મહત્વના છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 વિભાજ્યતાની ચાવીઓ (Divisibility Rules):</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">અંક</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">ચાવી (Rule)</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">ઉદાહરણ</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">2</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">એકમનો અંક 0, 2, 4, 6 કે 8 હોય.</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">456, 1028</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">3</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">અંકોના સરવાળાને 3 વડે ભાગી શકાય.</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">345 (3+4+5=12)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">4</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">છેલ્લા બે અંકોથી બનતી સંખ્યાને 4 વડે ભાગી શકાય.</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">1324 (24)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">5</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">એકમનો અંક 0 અથવા 5 હોય.</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">450, 675</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">11</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">એકી અને બેકી સ્થાનના અંકોના સરવાળાનો તફાવત 0 અથવા 11 નો ગુણક હોય.</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">1331 (1+3)-(3+1)=0</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (એકમનો અંક શોધવો):</strong><br>\n        જ્યારે સંખ્યાની ઘાત આપેલી હોય, ત્યારે ઘાતને 4 વડે ભાગો. જે શેષ વધે તેટલી જ ઘાત એકમના અંક પર લગાવો. જો શેષ 0 વધે, તો ઘાત 4 લગાવો. \n        (નોંધ: 0, 1, 5, અને 6 ની ગમે તેટલી ઘાત હોય, એકમનો અંક તે જ રહે છે.)\n      </div>\n\n      <div style=\"background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: var(--accent);\">💡 Exam Tip:</strong><br>\n        1 થી 100 સુધીમાં કુલ 25 અવિભાજ્ય સંખ્યાઓ (Prime numbers) આવે છે. સીધા જ યાદ રાખી લો: 2, 3, 5, 7, 11...\n      </div>\n    </div>",
    "keyPoints": [
      "1 થી 50 સુધીમાં કુલ 15 અવિભાજ્ય સંખ્યાઓ છે.",
      "51 થી 100 સુધીમાં કુલ 10 અવિભાજ્ય સંખ્યાઓ છે.",
      "1 થી 100 સુધીમાં કુલ 25 અવિભાજ્ય સંખ્યાઓ છે.",
      "સૌથી નાની અને એકમાત્ર બેકી અવિભાજ્ય સંખ્યા 2 છે.",
      "1 એ અવિભાજ્ય કે વિભાજ્ય સંખ્યા નથી (તે તટસ્થ છે).",
      "સહ-અવિભાજ્ય સંખ્યાઓ (Co-prime) નો ગુ.સા.અ (HCF) હંમેશા 1 હોય છે.",
      "જોડકા અવિભાજ્ય સંખ્યાઓ (Twin primes) વચ્ચેનો તફાવત 2 હોય છે (દા.ત. 3-5, 5-7).",
      "7 ની ચાવી: છેલ્લા અંકને બમણો કરી બાકીની સંખ્યામાંથી બાદ કરતા 7 વડે ભાગી શકાય તેવો અંક મળવો જોઈએ.",
      "8 ની ચાવી: છેલ્લા ત્રણ અંકોને 8 વડે ભાગી શકાય તો આખી સંખ્યાને 8 વડે ભગાય.",
      "9 ની ચાવી: અંકોના સરવાળાને 9 વડે નિશેષ ભાગી શકાય.",
      "6 ની ચાવી: જે સંખ્યાને 2 અને 3 બંને વડે ભાગી શકાય તેને 6 વડે પણ ભાગી શકાય.",
      "એકમનો અંક શોધતી વખતે ઘાતાંકના ચક્ર (Cyclicity) નો ઉપયોગ કરો."
    ],
    "mnemonics": "અવિભાજ્ય યાદ રાખવા: '44-22-32-23-21' (દરેક 10 ના ગાળામાં આવતી અવિભાજ્ય સંખ્યાઓની સંખ્યા)",
    "questions": [
      {
        "question": "નીચેનામાંથી કઈ સંખ્યા 11 વડે નિઃશેષ ભાગી શકાય છે?",
        "options": [
          "23541",
          "34562",
          "1331",
          "45612"
        ],
        "correct": 2,
        "explanation": "1331 માં એકી સ્થાનના અંકો (1+3=4) અને બેકી સ્થાનના અંકો (3+1=4) નો તફાવત 4 - 4 = 0 થાય છે. તેથી 1331 ને 11 વડે નિઃશેષ ભાગી શકાય."
      },
      {
        "question": "પ્રથમ 10 પ્રાકૃતિક સંખ્યાઓનો સરવાળો કેટલો થાય?",
        "options": [
          "45",
          "55",
          "60",
          "50"
        ],
        "correct": 1,
        "explanation": "સૂત્ર: n(n+1)/2 = 10 × 11 / 2 = 55."
      }
    ]
  },
  {
    "topic": "ટકાવારી (Percentage)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>ટકાવારી (Percentage) એટલે 100 ના આધારે ગણતરી. ટકાવારી એ ગણિતના અન્ય પ્રકરણો જેવા કે નફો-ખોટ, સાદું-ચક્રવૃદ્ધિ વ્યાજ અને માહિતી અર્થઘટન (Data Interpretation) નો આધારસ્તંભ છે. અપૂર્ણાંક ને ટકામાં અને ટકાને અપૂર્ણાંકમાં ફેરવતા આવડવું એ સૌથી મોટી શોર્ટકટ છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 અપૂર્ણાંક થી ટકાવારી કોષ્ટક (Fraction to %):</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">અપૂર્ણાંક (Fraction)</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">ટકાવારી (%)</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">અપૂર્ણાંક</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">ટકાવારી (%)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">1/2</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">50%</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">1/6</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">16.66% અથવા 16(2/3)%</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">1/3</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">33.33% અથવા 33(1/3)%</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">1/7</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">14.28% અથવા 14(2/7)%</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">1/4</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">25%</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">1/8</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">12.5% અથવા 12(1/2)%</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">1/5</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">20%</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">1/9</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">11.11% અથવા 11(1/9)%</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (Successive Percentage):</strong><br>\n        જો કોઈ રકમમાં પહેલા x% વધારો/ઘટાડો થાય અને પછી y% વધારો/ઘટાડો થાય, તો કુલ ફેરફાર = (x + y + xy/100)% \n        (વધારા માટે + અને ઘટાડા માટે - નિશાની વાપરવી)\n      </div>\n\n      <div style=\"background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #f59e0b;\">⚠️ Important Rule:</strong><br>\n        જો A નો પગાર B કરતા 25% વધુ છે, તો B નો પગાર A કરતા [25/(100+25)] × 100 = 20% ઓછો હશે.\n      </div>\n    </div>",
    "keyPoints": [
      "ટકા એટલે છેદમાં 100. (દા.ત. 20% = 20/100 = 1/5).",
      "કોઈ સંખ્યાના 10% શોધવા માટે છેલ્લેથી એક પોઈન્ટ કાપો.",
      "કોઈ સંખ્યાના 1% શોધવા માટે છેલ્લેથી બે પોઈન્ટ કાપો.",
      "% વધારો = (વધારો / મૂળ કિંમત) × 100.",
      "% ઘટાડો = (ઘટાડો / મૂળ કિંમત) × 100.",
      "ચૂંટણીના પ્રશ્નોમાં: કુલ મત = 100% ધારીને ગણતરી કરવી.",
      "જો જીતનાર ઉમેદવારને 60% મત મળે, તો હારનારને 40% મત મળ્યા હોય. (તફાવત 20%).",
      "વસ્તી વધારાનું સૂત્ર: P_after = P_now × (1 + R/100)^n.",
      "વસ્તી ઘટાડા માટે કૌંસમાં માઈનસ (-) નિશાની વાપરવી.",
      "મિશ્રણના દાખલાઓમાં જથ્થાને સમાન રાખીને ટકાવારી શોધી શકાય.",
      "ખર્ચ = કિંમત × વપરાશ. (જો ખર્ચ સમાન રાખવો હોય તો કિંમત અને વપરાશ વ્યસ્ત પ્રમાણમાં હોય)."
    ],
    "mnemonics": "A.B.R rule: A એટલે આંકડો, B એટલે બેઝ(આધાર), R એટલે રેટ(દર) -> A = B × R%",
    "questions": [
      {
        "question": "ટકાવારી (Percentage) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "લાભ અને ખોટ (Profit & Loss)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>લાભ અને ખોટની ગણતરી હંમેશા મૂળ કિંમત (Cost Price - CP) પર થાય છે, સિવાય કે પ્રશ્નમાં ચોખવટ કરી હોય કે ગણતરી વેચાણ કિંમત પર કરવાની છે. વળતર (Discount) ની ગણતરી હંમેશા છાપેલી કિંમત (Marked Price - MP) પર થાય છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 અગત્યના સૂત્રો:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">પરિસ્થિતિ</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">સૂત્ર (Formula)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">નફો (Profit)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">વેચાણ કિંમત (SP) - મૂળ કિંમત (CP)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">નફાની ટકાવારી (% Profit)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">(નફો / CP) × 100</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">ખોટની ટકાવારી (% Loss)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">(ખોટ / CP) × 100</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">વેચાણ કિંમત (નફો હોય ત્યારે)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">CP × (100 + %નફો) / 100</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">વળતર (Discount)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">છાપેલી કિંમત (MP) - વેચાણ કિંમત (SP)</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (પ્રામાણિક/અપ્રામાણિક વેપારી):</strong><br>\n        જો કોઈ વેપારી વસ્તુ મૂળ કિંમતે જ વેચવાનો દાવો કરે પણ વજન ઓછું આપે, તો તેનો નફો % = (ઓછું આપેલું વજન / સાચું આપેલું વજન) × 100.<br>\n        દા.ત: 1 કિલો (1000g) ની જગ્યાએ 900g આપે, તો નફો % = (100 / 900) × 100 = 11.11%\n      </div>\n    </div>",
    "keyPoints": [
      "જો બે વસ્તુઓની વેચાણ કિંમત સરખી હોય અને એક પર x% નફો અને બીજી પર x% ખોટ થતી હોય, તો હંમેશા ખોટ જ જાય.",
      "આ સંજોગોમાં ખોટની ટકાવારી = (x^2 / 100)% થાય.",
      "સળંગ વળતર (Successive Discounts): d1 અને d2 હોય તો એકંદર વળતર = d1 + d2 - (d1 × d2)/100.",
      "ખરાજાત (ઓવરહેડ ખર્ચ) હંમેશા મૂળ કિંમતમાં ઉમેરાય છે (CP = ખરીદ કિંમત + ખરાજાત).",
      "છાપેલી કિંમત (MP) હંમેશા વળતર આપ્યા પહેલાની કિંમત છે.",
      "MP અને CP વચ્ચેનો સંબંધ: MP/CP = (100 + નફો%) / (100 - વળતર%).",
      "ભાગીદારીમાં નફાની વહેંચણી: નફો = રોકાણ × સમય.",
      "જો રોકાણ સરખું હોય, તો નફો સમયના પ્રમાણમાં વહેંચાય છે.",
      "જો સમય સરખો હોય, તો નફો રોકાણના પ્રમાણમાં વહેંચાય છે.",
      "3 સળંગ વળતર a%, b%, c% માટે: 100 માંથી વારાફરતી બાદ કરતા જવું સહેલું રહે છે."
    ],
    "mnemonics": "CP નીચે આવે: નફો કે ખોટ ટકામાં શોધવા છેદમાં હંમેશા મૂળ કિંમત (CP) જ મૂકવી.",
    "questions": [
      {
        "question": "લાભ અને ખોટ (Profit & Loss) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "સાદું અને ચક્રવૃદ્ધિ વ્યાજ (Simple & Compound Interest)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>સાદું વ્યાજ (SI) દર વર્ષે સમાન રહે છે, કારણ કે તે ફક્ત મુદ્દલ (Principal) પર ગણાય છે. જ્યારે ચક્રવૃદ્ધિ વ્યાજ (CI) માં વ્યાજ પર પણ વ્યાજ ગણાય છે. સ્પર્ધાત્મક પરીક્ષાઓમાં SI અને CI ના તફાવતના દાખલાઓ સૌથી વધુ પૂછાય છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 વ્યાજ ગણતરીના સૂત્રો:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">વ્યાજનો પ્રકાર</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">સૂત્ર</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">સાદું વ્યાજ (SI)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">I = (P × R × N) / 100</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">ચક્રવૃદ્ધિ વ્યાજની વ્યાજમુદ્દલ (A)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">A = P(1 + R/100)^N</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">ચક્રવૃદ્ધિ વ્યાજ (CI)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">A - P</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (SI અને CI નો તફાવત):</strong><br>\n        2 વર્ષ માટે તફાવત (D) = P(R/100)²<br>\n        3 વર્ષ માટે તફાવત (D) = P(R/100)² × (3 + R/100)\n      </div>\n\n      <div style=\"background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: var(--accent);\">💡 Exam Tip:</strong><br>\n        અર્ધવાર્ષિક (Half-yearly) ગણતરી હોય ત્યારે: વ્યાજનો દર (R) અડધો કરવો અને સમય (N) બમણો કરવો.<br>\n        ત્રિમાસિક (Quarterly) ગણતરી હોય ત્યારે: વ્યાજનો દર ચોથા ભાગનો (R/4) અને સમય ચાર ગણો (4N) કરવો.\n      </div>\n    </div>",
    "keyPoints": [
      "પહેલા વર્ષ માટે સાદું વ્યાજ અને ચક્રવૃદ્ધિ વ્યાજ સમાન હોય છે.",
      "જો રકમ T વર્ષમાં સાદા વ્યાજે 'n' ગણી થાય, તો વ્યાજનો દર R = 100(n-1)/T.",
      "CI માં ટ્રી મેથડ (Tree Method): વ્યાજ પર વ્યાજની ગણતરી મોઢે કરવા માટે ઉપયોગી છે.",
      "ચક્રવૃદ્ધિ વ્યાજમાં જો રકમ T1 વર્ષમાં n ગણી થાય, તો તેને n^x ગણી થવા માટે T1 × x વર્ષ લાગે.",
      "સાદા વ્યાજના હપ્તા (Installment): x = [100A] / [100N + R(N(N-1)/2)].",
      "ચક્રવૃદ્ધિ વ્યાજના હપ્તા: P = x/(1+R/100) + x/(1+R/100)^2 + ... (જ્યાં x હપ્તાની રકમ છે).",
      "સળંગ વર્ષો માટે વ્યાજનો દર અલગ અલગ (R1, R2, R3) હોય તો: A = P(1+R1/100)(1+R2/100)...",
      "વર્ષ અપૂર્ણાંકમાં હોય (દા.ત. 2.5 વર્ષ) તો: A = P(1+R/100)^2 × (1+(R/2)/100).",
      "વાર્ષિક વ્યાજની વ્યાખ્યા: 100 રૂપિયાનું 1 વર્ષનું વ્યાજ.",
      "સાદા વ્યાજમાં વ્યાજમુદ્દલ A = P + SI = P + (PRN/100) = P[1 + RN/100]."
    ],
    "mnemonics": "સાદું વ્યાજ 'PRN' (Principal, Rate, Number of years).",
    "questions": [
      {
        "question": "સાદું અને ચક્રવૃદ્ધિ વ્યાજ (Simple & Compound Interest) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "ગુણોત્તર અને પ્રમાણ (Ratio & Proportion)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>ગુણોત્તર એ સમાન એકમ ધરાવતી બે રાશિઓની સરખામણી છે. પ્રમાણ એ બે ગુણોત્તરોની સમાનતા દર્શાવે છે (a:b = c:d). ઉંમર, મિશ્રણ, ભાગીદારી અને સિક્કાઓ (Coins) ના પ્રશ્નો ગુણોત્તરના આધારે જ ઉકેલાય છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 પ્રમાણના પ્રકારો (Types of Proportion):</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">નામ</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">સૂત્ર / નિયમ</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">મધ્ય પ્રમાણપદ (Mean Proportional)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">a અને b માટે: √(a × b)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">તૃતીય પ્રમાણપદ (Third Proportional)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">a અને b માટે: b² / a</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">ચતુર્થ પ્રમાણપદ (Fourth Proportional)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">a, b, c માટે: (b × c) / a</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (A:B:C શોધવા):</strong><br>\n        જો a:b = 2:3 અને b:c = 4:5 હોય તો a:b:c શોધવા ઉલટો 'N' ગુણાકાર કરો.<br>\n        a:b =  2 : 3<br>\n        b:c =     4 : 5<br>\n        a:b:c = (2×4) : (3×4) : (3×5) = 8:12:15\n      </div>\n    </div>",
    "keyPoints": [
      "ગુણોત્તરને કોઈ શૂન્ય સિવાયની સંખ્યા વડે ગુણવા કે ભાગવાથી ગુણોત્તર બદલાતો નથી.",
      "ગુણોત્તર હંમેશા તેના અતિસંક્ષિપ્ત રૂપમાં લખવામાં આવે છે.",
      "સમપ્રમાણ (Direct): x વધે તો y પણ વધે (x/y = k). દા.ત. વસ્તુની સંખ્યા અને કિંમત.",
      "વ્યસ્ત પ્રમાણ (Inverse): x વધે તો y ઘટે (x × y = k). દા.ત. કામદારોની સંખ્યા અને લાગતો સમય.",
      "મિશ્રણના દાખલામાં (Alligation Method): સસ્તી કિંમત (C), મોંઘી કિંમત (D), અને મિશ્રણની કિંમત (M). ગુણોત્તર = (D-M)/(M-C).",
      "સિક્કાવાળા પ્રશ્નો: સિક્કાની સંખ્યા × મૂલ્ય = કુલ રકમ. આ સમીકરણ વાપરવું.",
      "જો 2A = 3B = 4C હોય, તો A:B:C શોધવા માટે સહગુણકોનો લ.સા.અ. (અહીં 12) લો. પછી ભાગાકાર કરો: 6:4:3.",
      "a/b = c/d પરથી એકાંતર પ્રમાણ, વ્યસ્ત પ્રમાણ, યોગ-વિયોગ પ્રમાણ (Componendo & Dividendo) ના નિયમો લાગુ પડે છે.",
      "ભાગીદારીમાં જો A અને B સમાન રોકાણ કરે, તો સમયનો ગુણોત્તર જ નફાનો ગુણોત્તર બને છે.",
      "બે સંખ્યાઓનો સરવાળો અને તફાવત આપ્યો હોય, તો તેમનો ગુણોત્તર = (સરવાળો+તફાવત) : (સરવાળો-તફાવત)."
    ],
    "mnemonics": "A:B અને B:C પરથી A:B:C માટે 'ઊલટો N' યાદ રાખો.",
    "questions": [
      {
        "question": "ગુણોત્તર અને પ્રમાણ (Ratio & Proportion) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "સરેરાશ (Average)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>સરેરાશ એટલે આપેલી તમામ માહિતીનું સમાન વિતરણ. સરેરાશ = (અવલોકનોનો સરવાળો) / (અવલોકનોની કુલ સંખ્યા). બેટ્સમેન/બોલરની સરેરાશ અને વ્યક્તિના જૂથમાં જોડાવા કે છોડવાથી થતા ફેરફારના પ્રશ્નો અગત્યના છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 અગત્યના સૂત્રો:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">માહિતી</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">સરેરાશ (Average)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">પ્રથમ n પ્રાકૃતિક સંખ્યાઓ</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">(n + 1) / 2</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">પ્રથમ n એકી (Odd) સંખ્યાઓ</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">n</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">પ્રથમ n બેકી (Even) સંખ્યાઓ</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">n + 1</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">સમાંતર શ્રેણી (સમાન તફાવત વાળી)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">(પ્રથમ પદ + અંતિમ પદ) / 2</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (નવી વ્યક્તિ જોડાય ત્યારે):</strong><br>\n        નવી વ્યક્તિની ઉંમર/વજન = જૂની સરેરાશ + (કુલ નવી સંખ્યા × સરેરાશમાં થતો વધારો/ઘટાડો).<br>\n        ઉદા: 10 વિદ્યાર્થીની સરેરાશ 15 છે. શિક્ષક આવતા સરેરાશ 16 (1 નો વધારો) થાય છે.<br>\n        શિક્ષકની ઉંમર = 15 + (11 × 1) = 26 વર્ષ.\n      </div>\n    </div>",
    "keyPoints": [
      "જો દરેક અવલોકનમાં 'x' ઉમેરવામાં, બાદ કરવામાં, ગુણવામાં કે ભાગવામાં આવે, તો નવી સરેરાશમાં પણ તે જ ક્રિયા થશે.",
      "સરેરાશ ઝડપ (જ્યારે અંતર સમાન હોય): 2xy / (x + y). (જ્યાં x અને y બે ઝડપ છે).",
      "સરેરાશ ઝડપ (જ્યારે સમય સમાન હોય): (x + y) / 2.",
      "ક્રિકેટરની બેટિંગ સરેરાશ = કુલ રન / (કુલ ઇનિંગ્સ - અણનમ ઇનિંગ્સ).",
      "ક્રિકેટરની બોલિંગ સરેરાશ = કુલ આપેલા રન / લીધેલી કુલ વિકેટ.",
      "ભારિત સરેરાશ (Weighted Average): (n1w1 + n2w2) / (n1 + n2).",
      "જો કોઈ વ્યક્તિ જૂથ છોડી જાય અને સરેરાશ વધે, તો જનાર વ્યક્તિની કિંમત સરેરાશ કરતા ઓછી હશે.",
      "જો કોઈ વ્યક્તિ જૂથ છોડી જાય અને સરેરાશ ઘટે, તો જનાર વ્યક્તિની કિંમત સરેરાશ કરતા વધુ હશે.",
      "ભૂલથી ખોટો આંકડો લેવાયો હોય ત્યારે: સાચો સરવાળો = જૂનો સરવાળો - ખોટો આંકડો + સાચો આંકડો.",
      "પ્રથમ n સંખ્યાઓના વર્ગોની સરેરાશ: (n+1)(2n+1)/6.",
      "પ્રથમ n સંખ્યાઓના ઘનની સરેરાશ: n(n+1)²/4."
    ],
    "mnemonics": "સરેરાશ એટલે 'બધાને સરખે ભાગે વહેંચવું'.",
    "questions": [
      {
        "question": "5 ક્રમિક એકી સંખ્યાઓની સરેરાશ 25 છે, તો સૌથી મોટી સંખ્યા કઈ?",
        "options": [
          "27",
          "29",
          "31",
          "25"
        ],
        "correct": 1,
        "explanation": "સરેરાશ (25) એ વચલી સંખ્યા છે. 5 સંખ્યાઓ: 21, 23, 25, 27, 29. સૌથી મોટી = 29."
      }
    ]
  },
  {
    "topic": "સમય અને કાર્ય (Time & Work)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>સમય અને કાર્યના દાખલા ઉકેલવાની સૌથી શ્રેષ્ઠ પદ્ધતિ લ.સા.અ. (LCM) મેથડ છે. કુલ કામ બરાબર સમયનો લ.સા.અ. ધારી લેવો. કાર્યક્ષમતા (Efficiency) એ સમયના વ્યસ્ત પ્રમાણમાં હોય છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 મૂળભૂત નિયમો:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">પરિસ્થિતિ</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">સૂત્ર / રીત</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">A કામ 'x' દિવસમાં, B કામ 'y' દિવસમાં</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">બંને સાથે: (xy) / (x+y) દિવસમાં</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">A+B ભેગા 'x' દિવસમાં, A એકલો 'y' દિવસમાં</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">B એકલો: (xy) / (y-x) દિવસમાં</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">MDH સૂત્ર (Chain Rule)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">(M1×D1×H1)/W1 = (M2×D2×H2)/W2</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (નળ અને ટાંકી):</strong><br>\n        જો નળ A ટાંકી 'x' કલાકમાં ભરે અને નળ B ટાંકી 'y' કલાકમાં ખાલી કરે (અને x < y હોય):<br>\n        બંને સાથે ચાલુ કરતા ટાંકી ભરાતા લાગતો સમય = (xy) / (y-x)\n      </div>\n\n      <div style=\"background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #f59e0b;\">⚠️ Important Rule:</strong><br>\n        મહેનતાણું (વેતન) હંમેશા વ્યક્તિ દ્વારા કરવામાં આવેલા 'કુલ કામ' ના પ્રમાણમાં વહેંચાય છે, નહીં કે તેણે લીધેલા સમયના પ્રમાણમાં. જો તેઓ સાથે કામ શરૂ કરી સાથે જ પૂર્ણ કરે, તો વેતન કાર્યક્ષમતાના ગુણોત્તરમાં વહેંચાય.\n      </div>\n    </div>",
    "keyPoints": [
      "કુલ કાર્ય = કાર્યક્ષમતા (Efficiency) × સમય (Time).",
      "જો A ની કાર્યક્ષમતા B કરતા બમણી હોય, તો A ને કામ પૂરું કરતા B કરતા અડધો સમય લાગશે.",
      "વારાફરતી કામ (Alternate Days): 2 દિવસના કામની સાયકલ (ચક્ર) બનાવવી અને પછી લ.સા.અ. ની નજીક પહોંચવું.",
      "MDH ફોર્મ્યુલામાં: M = માણસો, D = દિવસો, H = કલાક, W = કામ. કામ હંમેશા છેદમાં લખવું.",
      "પુરુષ અને સ્ત્રી વાળા દાખલામાં 'અથવા (OR)' હોય તો: (કુલ કામ શોધવા કોઈપણ એકને બીજામાં રૂપાંતરિત કરો).",
      "નળ અને ટાંકીના પ્રશ્નોમાં ખાલી કરતા નળની કાર્યક્ષમતા ઋણ (-) લેવામાં આવે છે.",
      "કોઈ કામ છોડીને જાય ત્યારે: કુલ કામમાંથી તેણે કરેલું કામ બાદ કરવું અને બાકીનું કામ બાકીના લોકોની કાર્યક્ષમતા વડે ભાગવું.",
      "કોઈ કામ પૂરું થવાના થોડા દિવસ પહેલા છોડી જાય તો: તેનું તેટલા દિવસનું કામ 'કુલ કામ' માં ઉમેરી દેવું અને બધાની કાર્યક્ષમતા વડે ભાગવું.",
      "જે વ્યક્તિ વધુ કાર્યક્ષમ હોય તે સમય ઓછો લે છે (વ્યસ્ત પ્રમાણ).",
      "ત્રણ નળ A, B, C માટે લ.સા.અ. મેથડ સૌથી ઝડપી અને સરળ છે."
    ],
    "mnemonics": "MDH મસાલા યાદ રાખો: M1D1H1 = M2D2H2",
    "questions": [
      {
        "question": "સમય અને કાર્ય (Time & Work) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "સમય, અંતર અને ઝડપ (Time, Speed & Distance)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>આ પ્રકરણમાં સૌથી અગત્યની બાબત એકમો (Units) નું યોગ્ય રૂપાંતરણ છે. km/hr ને m/s માં અને ઉલટું ફેરવતા આવડવું જ જોઈએ. ટ્રેન અને હોડીના પ્રશ્નો સાપેક્ષ ઝડપ (Relative Speed) ના સિદ્ધાંત પર ચાલે છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 એકમ રૂપાંતરણ અને સાપેક્ષ ઝડપ:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">ક્રિયા</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">નિયમ / સૂત્ર</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">km/hr થી m/s</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">ઝડપને 5/18 વડે ગુણો</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">m/s થી km/hr</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">ઝડપને 18/5 વડે ગુણો</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">એક જ દિશામાં ગતિ (Same Direction)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">સાપેક્ષ ઝડપ = S1 - S2</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">વિરુદ્ધ દિશામાં ગતિ (Opposite)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">સાપેક્ષ ઝડપ = S1 + S2</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (ટ્રેનના પ્રશ્નો):</strong><br>\n        જ્યારે ટ્રેન કોઈ વ્યક્તિ, થાંભલો કે સિગ્નલ ને પસાર કરે ત્યારે કાપવાનું અંતર = ટ્રેનની પોતાની લંબાઈ.<br>\n        જ્યારે ટ્રેન પ્લેટફોર્મ, બ્રિજ કે બીજી ટ્રેન ને પસાર કરે ત્યારે અંતર = ટ્રેનની લંબાઈ + પ્લેટફોર્મ/બ્રિજની લંબાઈ.\n      </div>\n    </div>",
    "keyPoints": [
      "અંતર (D) = ઝડપ (S) × સમય (T).",
      "હોડી અને પ્રવાહ (Boat & Stream): શાંત જળમાં હોડીની ઝડપ 'x' અને પ્રવાહની ઝડપ 'y' હોય.",
      "પ્રવાહની દિશામાં (Downstream) ઝડપ U = x + y.",
      "પ્રવાહની વિરુદ્ધ દિશામાં (Upstream) ઝડપ V = x - y.",
      "શાંત જળમાં હોડીની ઝડપ x = (U + V) / 2.",
      "પ્રવાહનો વેગ y = (U - V) / 2.",
      "જો કોઈ વ્યક્તિ ઓફિસે જતાં 't1' મોડો પડે અને 't2' વહેલો પહોંચે, તો બે ઝડપો પરથી અંતર D = (S1×S2)/(S1-S2) × (કુલ સમયનો તફાવત).",
      "પોલીસ અને ચોર ના પ્રશ્નોમાં હંમેશા એક જ દિશાની સાપેક્ષ ઝડપ (S1-S2) લેવામાં આવે છે.",
      "ગોળાકાર ટ્રેક પર દોડતા બે વ્યક્તિઓ પ્રથમ વાર ક્યારે મળશે તે શોધવા તેમના સમયનો લ.સા.અ. (LCM) લેવો.",
      "ટ્રેનના ક્રોસિંગ પ્રશ્નોમાં અંતર (લંબાઈ) નો હંમેશા સરવાળો જ થાય છે, ક્યારેય બાદબાકી થતી નથી."
    ],
    "mnemonics": "નાના એકમમાં જવું (m/s) તો નાનો આંકડો (5) ઉપર (5/18). મોટા એકમમાં જવું (km/hr) તો મોટો આંકડો (18) ઉપર.",
    "questions": [
      {
        "question": "સમય, અંતર અને ઝડપ (Time, Speed & Distance) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "બીજગણિત (Algebra)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>સ્પર્ધાત્મક પરીક્ષાઓમાં બીજગણિતના પ્રશ્નો મોટાભાગે સીધા નિત્યસમ (Identities) પર આધારિત હોય છે. ખાસ કરીને x + 1/x પ્રકારના પ્રશ્નો દર વર્ષે પૂછાય છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 અગત્યના નિત્યસમ (Algebraic Identities):</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">સૂત્ર</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">વિસ્તરણ</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">(a + b)²</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">a² + b² + 2ab</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">(a - b)²</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">a² + b² - 2ab</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">a² - b²</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">(a - b)(a + b)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">a³ + b³</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">(a + b)(a² - ab + b²)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">a³ - b³</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">(a - b)(a² + ab + b²)</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (x + 1/x પ્રકાર):</strong><br>\n        જો x + 1/x = k હોય, તો:<br>\n        x² + 1/x² = k² - 2<br>\n        x³ + 1/x³ = k³ - 3k\n      </div>\n      \n      <div style=\"background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: var(--accent);\">💡 Exam Tip:</strong><br>\n        જો x - 1/x = k હોય, તો x² + 1/x² = k² + 2 થાય. નિશાનીમાં ખાસ ધ્યાન રાખવું.\n      </div>\n    </div>",
    "keyPoints": [
      "જો a + b + c = 0 હોય, તો હંમેશા a³ + b³ + c³ = 3abc થાય.",
      "(a+b)² + (a-b)² = 2(a² + b²).",
      "(a+b)² - (a-b)² = 4ab.",
      "સુરેખ સમીકરણ ઉકેલતી વખતે લોપની રીત (Elimination method) સૌથી ઝડપી છે.",
      "જો દ્વિઘાત સમીકરણ ax² + bx + c = 0 હોય, તો બીજનો સરવાળો = -b/a.",
      "બીજનો ગુણાકાર = c/a.",
      "x + 1/x = 2 આપેલું હોય તો હંમેશા x = 1 જ થાય.",
      "x + 1/x = -2 આપેલું હોય તો હંમેશા x = -1 થાય.",
      "શેષ પ્રમેય (Remainder Theorem): જો p(x) ને (x - a) વડે ભાગવામાં આવે તો શેષ p(a) વધે.",
      "અવયવ પ્રમેય: જો શેષ p(a) = 0 થાય તો જ (x - a) એ p(x) નો અવયવ છે તેમ કહેવાય."
    ],
    "mnemonics": "અલજબ્રા માં 'પ્લસ થી પ્લસ માં જાવ તો માઇનસ 2 કરો' (k² - 2).",
    "questions": [
      {
        "question": "બીજગણિત (Algebra) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "ક્ષેત્રફળ અને પરિમિતિ (Area & Perimeter)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>આ પ્રકરણ 2D (દ્વિ-પરિમાણીય) આકૃતિઓ સાથે સંકળાયેલું છે. જેમાં લંબાઈ અને પહોળાઈ હોય. પરિમિતિ એટલે બધી બાજુઓનો સરવાળો (બોર્ડર) અને ક્ષેત્રફળ એટલે આકૃતિ દ્વારા રોકાયેલી જગ્યા.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 અગત્યના ક્ષેત્રફળના સૂત્રો:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">આકૃતિ</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">ક્ષેત્રફળ (Area)</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">પરિમિતિ (Perimeter)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">ચોરસ (Square)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">l² (બાજુનો વર્ગ)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">4l</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">લંબચોરસ (Rectangle)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">l × b</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">2(l + b)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">વર્તુળ (Circle)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">πr²</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">2πr (પરિઘ)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">ત્રિકોણ (Triangle)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">1/2 × પાયો × વેધ</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">ત્રણેય બાજુનો સરવાળો</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (ટકાવારી ફેરફાર):</strong><br>\n        જો ચોરસ કે વર્તુળની બાજુ/ત્રિજ્યામાં x% વધારો થાય, તો ક્ષેત્રફળમાં (2x + x²/100)% નો વધારો થાય. પરિમિતિમાં સમાન x% નો જ વધારો થાય.\n      </div>\n    </div>",
    "keyPoints": [
      "વિષમબાજુ ત્રિકોણ માટે હેરોનનું સૂત્ર (Heron's Formula): Area = √(s(s-a)(s-b)(s-c)) જ્યાં s = અર્ધપરિમિતિ.",
      "સમબાજુ ત્રિકોણ (Equilateral) નું ક્ષેત્રફળ: (√3/4)a² અને તેની ઉંચાઈ = (√3/2)a.",
      "કાટકોણ ત્રિકોણમાં પાયથાગોરસના પ્રમેયનો ઉપયોગ થાય: કર્ણ² = પાયો² + વેધ².",
      "લંબચોરસના વિકર્ણની લંબાઈ = √(l² + b²).",
      "સમાંતર બાજુ ચતુષ્કોણ (Parallelogram) ક્ષેત્રફળ = પાયો × પાયા પરનો વેધ.",
      "સમબાજુ ચતુષ્કોણ (Rhombus) ક્ષેત્રફળ = 1/2 × (વિકર્ણ 1 × વિકર્ણ 2). આના વિકર્ણો કાટખૂણે દુભાગે છે.",
      "સમલંબ ચતુષ્કોણ (Trapezium) ક્ષેત્રફળ = 1/2 × (સમાંતર બાજુઓનો સરવાળો) × લંબઅંતર.",
      "અર્ધવર્તુળનું ક્ષેત્રફળ = (πr²)/2 પણ તેની પરિમિતિ = πr + 2r થાય છે (ખાસ નોંધવું).",
      "લંબચોરસ મેદાનની અંદર કે બહાર રસ્તો બનાવવાનો હોય તો રસ્તાનું ક્ષેત્રફળ શોધવાના દાખલા પૂછાય છે.",
      "પૈડાંના પરિભ્રમણ: 1 ચક્કરમાં કપાતું અંતર = પૈડાંનો પરિઘ (2πr).",
      "કુલ અંતર = પરિઘ × ચક્કરની સંખ્યા."
    ],
    "mnemonics": "પૈડાં વાળા દાખલામાં હંમેશા પરિઘ શોધવાનો.",
    "questions": [
      {
        "question": "ક્ષેત્રફળ અને પરિમિતિ (Area & Perimeter) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "ઘનફળ અને પૃષ્ઠફળ (Volume & Surface Area)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>આ પ્રકરણ 3D (ત્રિ-પરિમાણીય) આકૃતિઓ સાથે સંકળાયેલું છે. પૃષ્ઠફળ એટલે સપાટીનું ક્ષેત્રફળ (જેને રંગી શકાય) અને ઘનફળ એટલે અંદર સમાતી જગ્યા (જેટલું પાણી ભરી શકાય). પીગાળીને નવી આકૃતિ બનાવવાના પ્રશ્નોમાં ઘનફળ સમાન રહે છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 અગત્યના ઘનફળના સૂત્રો:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">આકૃતિ (3D Shape)</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">ઘનફળ (Volume)</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">કુલ પૃષ્ઠફળ (TSA)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">સમઘન (Cube)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">l³</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">6l²</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">લંબઘન (Cuboid)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">l × b × h</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">2(lb + bh + hl)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">નળાકાર (Cylinder)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">πr²h</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">2πr(h + r)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">શંકુ (Cone)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">1/3 πr²h</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">πr(l + r)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">ગોળો (Sphere)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">4/3 πr³</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">4πr²</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (રૂપાંતરણ / Melting):</strong><br>\n        જ્યારે એક મોટી આકૃતિને ઓગાળીને નાની આકૃતિઓ બનાવવાની હોય ત્યારે:<br>\n        નાની વસ્તુઓની સંખ્યા = (મોટી વસ્તુનું ઘનફળ) / (એક નાની વસ્તુનું ઘનફળ)\n      </div>\n    </div>",
    "keyPoints": [
      "નળાકારની વક્ર સપાટીનું ક્ષેત્રફળ (CSA) = 2πrh.",
      "શંકુની વક્ર સપાટીનું ક્ષેત્રફળ (CSA) = πrl, જ્યાં ત્રિર્યક ઉંચાઈ l = √(r² + h²).",
      "અર્ધગોળાનું ઘનફળ = 2/3 πr³, વક્ર સપાટી = 2πr², અને કુલ પૃષ્ઠફળ = 3πr² થાય.",
      "ઓરડામાં મૂકી શકાતા સૌથી લાંબા વાંસની લંબાઈ એટલે લંબઘનનો વિકર્ણ = √(l² + b² + h²).",
      "સમાન ત્રિજ્યા અને સમાન ઉંચાઈ ધરાવતા નળાકાર અને શંકુમાં: શંકુનું ઘનફળ નળાકાર કરતા ત્રીજા ભાગનું હોય છે.",
      "જો ગોળાની ત્રિજ્યા બમણી કરવામાં આવે, તો ઘનફળ 8 ગણું થાય (2³).",
      "પ્રવાહીની ક્ષમતા (Capacity) શોધવા માટે ઘનફળને લિટર માં ફેરવવું પડે (1 m³ = 1000 લિટર, 1000 cm³ = 1 લિટર).",
      "જ્યારે ઓરડાની ચાર દિવાલોને રંગવાનો પ્રશ્ન આવે ત્યારે ક્ષેત્રફળ = 2h(l + b) થાય.",
      "ખુલ્લી ટાંકી બનાવવા માટે વપરાતા પતરાનું ક્ષેત્રફળ = 2(bh + hl) + lb (કારણ કે છત હોતી નથી)."
    ],
    "mnemonics": "શંકુ એ નળાકાર નો ત્રીજો ભાગ છે (1/3 લગાવો).",
    "questions": [
      {
        "question": "ઘનફળ અને પૃષ્ઠફળ (Volume & Surface Area) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "સંખ્યા શ્રેણી (Number Series)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>શ્રેણી એ તર્ક (Reasoning) અને ગણિત બંનેનો ભાગ છે. શ્રેણીમાં આગળનું પદ શોધવા કે ખોટું પદ શોધવા માટે તફાવત, ગુણાકાર, વર્ગ, અને ઘન ના નિયમો તપાસવા પડે છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 સમાંતર અને સમગુણોત્તર શ્રેણી:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">શ્રેણી પ્રકાર</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">n-મું પદ શોધવાનું સૂત્ર</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">n પદોના સરવાળાનું સૂત્ર</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">સમાંતર શ્રેણી (AP)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">Tn = a + (n-1)d</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">Sn = n/2 [2a + (n-1)d]</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">સમગુણોત્તર શ્રેણી (GP)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">Tn = a × r^(n-1)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">Sn = a(r^n - 1) / (r-1)</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (શ્રેણી સોલ્વ કરવાની રીત):</strong><br>\n        1. ધીમો વધારો હોય તો તફાવત (Difference) કાઢો.<br>\n        2. ખૂબ ઝડપી વધારો હોય તો ગુણાકાર (Multiplication) ચેક કરો.<br>\n        3. વધ-ઘટ થતી હોય તો બે અલગ શ્રેણીઓ મિક્સ (Alternate) હોઈ શકે.\n      </div>\n    </div>",
    "keyPoints": [
      "સમાંતર શ્રેણી (AP) માં સમાન તફાવત (d) ઉમેરાતો કે બાદ થતો જાય છે.",
      "સમગુણોત્તર શ્રેણી (GP) માં સમાન ગુણોત્તર (r) નો ગુણાકાર કે ભાગાકાર થતો જાય છે.",
      "અવિભાજ્ય સંખ્યાની શ્રેણી (Prime Series): 2, 3, 5, 7, 11, 13... આમાં કોઈ ચોક્કસ તફાવત ન હોય, માત્ર ઓળખવાની હોય છે.",
      "ફિબોનાકી શ્રેણી (Fibonacci): આગળના બે પદોનો સરવાળો ત્રીજું પદ બને (0, 1, 1, 2, 3, 5, 8...).",
      "વર્ગ-ઘન શ્રેણી: પદો પૂર્ણ વર્ગ (1, 4, 9, 16...) કે પૂર્ણ ઘન (1, 8, 27, 64...) હોઈ શકે છે.",
      "ઘણીવાર તફાવતનો પણ તફાવત (Double Difference) લેવાથી પેટર્ન મળી જાય છે.",
      "ખોટી સંખ્યા શોધવાના (Wrong Number) દાખલામાં સૌથી પહેલા તફાવત લખી લેવો, પેટર્ન જ્યાં તૂટે ત્યાં ખોટો નંબર હોય.",
      "જો શ્રેણી અપૂર્ણાંકમાં હોય તો અંશ અને છેદ ની અલગ અલગ શ્રેણી વિચારી શકાય."
    ],
    "mnemonics": "પેટર્ન ચેક ક્રમ: વર્ગ/ઘન -> ગુણાકાર -> તફાવત.",
    "questions": [
      {
        "question": "સંખ્યા શ્રેણી (Number Series) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "સરળીકરણ (Simplification)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>ગણિતમાં સાદુંરૂપ આપવા માટે હંમેશા BODMAS ના નિયમનું પાલન થવું જોઈએ. આ ઉપરાંત ઘાતાંક અને કરણી (Surds & Indices) ના નિયમો તેમજ વર્ગમૂળ-ઘનમૂળ શોધવાની શોર્ટકટ પણ ઉપયોગી છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 BODMAS નો નિયમ:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">અક્ષર</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">અર્થ</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">પ્રતીક / ક્રિયા</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">B</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">Bracket (કૌંસ)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">(), {}, [] (અંદરથી બહાર ઉકેલવા)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">O</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">Of (ના/નો/ની/નું)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">ગુણાકાર સ્વરૂપે લેવું</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">D, M</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">Division, Multiplication</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">ભાગાકાર (÷), ગુણાકાર (×) (ડાબેથી જમણે)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">A, S</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">Addition, Subtraction</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">સરવાળો (+), બાદબાકી (-)</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (Infinite Surds):</strong><br>\n        જો √(x √(x √(x... અનંત સુધી))) હોય તો જવાબ સીધો 'x' જ આવે.<br>\n        જો √(12 + √(12 + √(12... અનંત))) હોય તો 12 ના બે સળંગ અવયવો પાડો (4×3). સરવાળાની નિશાની હોવાથી મોટો અવયવ '4' જવાબ. બાદબાકી હોત તો '3' જવાબ.\n      </div>\n    </div>",
    "keyPoints": [
      "V-BODMAS માં V એટલે Vinculum (રેખા કૌંસ). સૌથી પહેલા તે સોલ્વ થાય.",
      "ઘાતાંકના નિયમો: ગુણાકારમાં આધાર સરખો હોય તો ઘાતાંકનો સરવાળો થાય (a^m × a^n = a^(m+n)).",
      "ભાગાકારમાં આધાર સરખો હોય તો ઘાતાંકની બાદબાકી થાય (a^m ÷ a^n = a^(m-n)).",
      "ઘાતની ઘાત હોય તો તેમનો ગુણાકાર થાય: (a^m)^n = a^(mn).",
      "કોઈપણ સંખ્યાની 0 ઘાતનો જવાબ હંમેશા 1 જ આવે (a^0 = 1).",
      "જો ઘાતાંક ઋણ હોય તો તેને ધન બનાવવા સંખ્યાને છેદમાં લઈ જવી (a^-m = 1/a^m).",
      "1 થી 30 ના વર્ગ અને 1 થી 15 ના ઘન મોઢે હોવા જ જોઈએ.",
      "દશાંશના સરવાળા બાદબાકીમાં હંમેશા પોઈન્ટ ની નીચે જ પોઈન્ટ આવવો જોઈએ.",
      "છેદનું સંમેયીકરણ (Rationalization): છેદમાં વર્ગમૂળ હોય તો કરણી લેવી (વિરુદ્ધ નિશાની વડે ગુણવું-ભાગવું)."
    ],
    "mnemonics": "ભાગુસબા (ભાગાકાર, ગુણાકાર, સરવાળો, બાદબાકી).",
    "questions": [
      {
        "question": "સરળીકરણ (Simplification) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "ઉંમર સંબંધી પ્રશ્નો (Age Problems)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>ઉંમરના દાખલા મોટાભાગે સમીકરણ અથવા ગુણોત્તર (Ratio) ની રીતથી સોલ્વ થાય છે. આમાં સૌથી અગત્યનો નિયમ એ છે કે \"બે વ્યક્તિઓ વચ્ચેની ઉંમરનો તફાવત હંમેશા સમાન રહે છે\".</p>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (Cross Multiplication / રેશિયો મેથડ):</strong><br>\n        હાલની ઉંમરનો ગુણોત્તર 2:3 છે. 5 વર્ષ પછી ગુણોત્તર 3:4 થાય છે.<br>\n        અહીં બંને બાજુ ગુણોત્તરનો તફાવત 1 યુનિટ છે.<br>\n        તેથી 1 યુનિટ = 5 વર્ષ. તો હાલની ઉંમર = 2×5=10 વર્ષ અને 3×5=15 વર્ષ.\n      </div>\n    </div>",
    "keyPoints": [
      "જો 'x' વર્ષ પહેલાંની વાત હોય તો ઉંમરમાંથી 'x' બાદ કરો (-).",
      "જો 'x' વર્ષ પછીની વાત હોય તો ઉંમરમાં 'x' ઉમેરો (+).",
      "જો બે વ્યક્તિની ઉંમરનો સરવાળો 10 વર્ષ પહેલાં 40 વર્ષ હોય, તો હાલનો સરવાળો 40 + 10 + 10 = 60 વર્ષ થાય (બંનેની ઉંમર વધે).",
      "પિતા અને પુત્રના દાખલામાં મોટાભાગે પિતાની ઉંમર પુત્ર કરતા 'n' ગણી હોય છે (સમીકરણ: F = n × S).",
      "જો બંને ગુણોત્તરો વચ્ચેનો તફાવત સમાન ન હોય, તો ગુણોત્તરને સંતુલિત કરવા નીચેના ગુણોત્તરના તફાવત વડે ઉપર અને ઉપરના તફાવત વડે નીચે ગુણાકાર કરો.",
      "હાલની ઉંમરને સામાન્ય રીતે 'x' અને 'y' ધારવી.",
      "જો કોઈ ગુણોત્તર આપેલ ન હોય, તો વિકલ્પો (Options) પરથી દાખલો સોલ્વ કરવો સૌથી ઝડપી રીત છે.",
      "જન્મ સમયે ઉંમર શૂન્ય ગણવામાં આવે છે. એટલે કે પિતાની ઉંમર પુત્રના જન્મ સમયે (હાલની પિતાની ઉંમર - હાલની પુત્રની ઉંમર) જેટલી હોય."
    ],
    "mnemonics": "તફાવત કદી ન બદલાય (તમારો ભાઈ તમારાથી 2 વર્ષ મોટો છે તો 50 વર્ષ પછી પણ 2 વર્ષ જ મોટો રહેશે).",
    "questions": [
      {
        "question": "ઉંમર સંબંધી પ્રશ્નો (Age Problems) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "કેલેન્ડર અને ઘડિયાળ (Calendar & Clock)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>કેલેન્ડરમાં 'વધારાના દિવસો' (Odd days) નો કોન્સેપ્ટ મુખ્ય છે. ઘડિયાળમાં બે કાંટા વચ્ચેનો ખૂણો શોધવાનું સૂત્ર ખૂબ જાણીતું છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 કેલેન્ડરના અગત્યના નિયમો:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">વર્ષનો પ્રકાર</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">દિવસો</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">વધારાના દિવસો (Odd days)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">સામાન્ય વર્ષ (Normal Year)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">365</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">1 (365 ÷ 7 ની શેષ)</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">લીપ વર્ષ (Leap Year)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">366 (ફેબ્રુઆરી=29)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">2 (366 ÷ 7 ની શેષ)</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: #10b981;\">⚡ Shortcut Trick (ઘડિયાળનો ખૂણો):</strong><br>\n        બે કાંટા વચ્ચેનો ખૂણો શોધવાનું સૂત્ર:<br>\n        ખૂણો = |(11/2 × મિનિટ) - (30 × કલાક)|<br>\n        જો જવાબ 180° થી મોટો આવે, તો તેને 360° માંથી બાદ કરવો (Reflex Angle).\n      </div>\n    </div>",
    "keyPoints": [
      "જે વર્ષને 4 વડે નિશેષ ભાગી શકાય તે લીપ વર્ષ હોય (દા.ત. 2012, 2024).",
      "સદીના વર્ષ (છેલ્લે બે 00 હોય) માટે તેને 400 વડે ભાગી શકાય તો જ તે લીપ વર્ષ કહેવાય (દા.ત. 1600, 2000 લીપ છે, પણ 1900 નથી).",
      "સામાન્ય વર્ષ જે વારે શરૂ થાય, તે જ વારે પૂરું થાય. (1 જાન્યુઆરી સોમવાર, તો 31 ડિસેમ્બર પણ સોમવાર).",
      "લીપ વર્ષમાં છેલ્લો દિવસ એક દિવસ આગળ વધે. (1 જાન્યુઆરી સોમવાર, તો 31 ડિસેમ્બર મંગળવાર).",
      "100 વર્ષમાં 5 વધારાના દિવસો (Odd days) હોય છે. 200 માં 3, 300 માં 1, અને 400 વર્ષમાં 0.",
      "ઘડિયાળના બંને કાંટા 12 કલાકમાં 11 વખત અને 24 કલાકમાં 22 વખત એકબીજા પર (0°) આવે છે.",
      "ઘડિયાળના કાંટા 12 કલાકમાં 11 વખત સામસામે (180°) આવે છે.",
      "ઘડિયાળના કાંટા 12 કલાકમાં 22 વખત કાટખૂણે (90°) આવે છે.",
      "અરીસામાં પ્રતિબિંબ (Mirror Image) શોધવા માટે આપેલા સમયને 11:60 (અથવા 23:60) માંથી બાદ કરો.",
      "પાણીમાં પ્રતિબિંબ (Water Image) શોધવા માટે આપેલા સમયને 18:30 અથવા 17:90 માંથી બાદ કરો."
    ],
    "mnemonics": "ખૂણાનું સૂત્ર: '11 મિનિટ ના અડધા માથી 30 કલાક બાદ'.",
    "questions": [
      {
        "question": "કેલેન્ડર અને ઘડિયાળ (Calendar & Clock) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  },
  {
    "topic": "ક્રમચય અને સંચય (Permutation & Combination)",
    "content": "<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);\">\n      <p>જ્યારે વસ્તુઓની 'ગોઠવણી (Arrangement)' કરવાની હોય ત્યારે ક્રમચય (Permutation) વપરાય છે, અને જ્યારે વસ્તુઓની 'પસંદગી (Selection)' કરવાની હોય ત્યારે સંચય (Combination) વપરાય છે.</p>\n      \n      <h4 style=\"color: var(--accent-light); margin-top: 1.25rem;\">📊 અગત્યના સૂત્રો:</h4>\n      <table style=\"width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;\">\n        <thead>\n          <tr style=\"background: var(--accent-glow); color: var(--accent-light); text-align: left;\">\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">નામ</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">સૂત્ર</th>\n            <th style=\"padding: 10px; border: 1px solid var(--border);\">ઉપયોગ</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">ક્રમચય (nPr)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">n! / (n-r)!</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">શબ્દો ગોઠવવા, પાસવર્ડ બનાવવા</td>\n          </tr>\n          <tr>\n            <td style=\"padding: 10px; border: 1px solid var(--border); font-weight: bold;\">સંચય (nCr)</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">n! / [r!(n-r)!]</td>\n            <td style=\"padding: 10px; border: 1px solid var(--border);\">ટીમ બનાવવી, દડા પસંદ કરવા</td>\n          </tr>\n        </tbody>\n      </table>\n      \n      <div style=\"background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;\">\n        <strong style=\"color: var(--accent);\">💡 Exam Tip:</strong><br>\n        શબ્દના મૂળાક્ષરો ગોઠવવાના પ્રશ્નમાં જેટલા અક્ષરો રિપીટ થતા હોય, તેના ફેક્ટોરિયલ (!) વડે છેદમાં ભાગાકાર કરવો.<br>\n        ઉદાહરણ: 'APPLE' ગોઠવવાના રસ્તા = 5! / 2! (કારણ કે P બે વાર છે) = 120 / 2 = 60.\n      </div>\n    </div>",
    "keyPoints": [
      "ફેક્ટોરિયલ (!): n! = n × (n-1) × (n-2) × ... × 1. દા.ત. 5! = 5×4×3×2×1 = 120.",
      "0! = 1 થાય છે (હંમેશા યાદ રાખવું).",
      "nC0 = 1 અને nCn = 1.",
      "nCr = nC(n-r). (ગણતરી સરળ કરવા માટે, દા.ત. 10C8 = 10C2).",
      "જો પ્રશ્નમાં 'અને (AND)' શબ્દ આવે તો ગુણાકાર (×) કરવો.",
      "જો પ્રશ્નમાં 'અથવા (OR)' શબ્દ આવે તો સરવાળો (+) કરવો.",
      "ગોળ મેજી પર n વ્યક્તિઓને બેસાડવાના કુલ રસ્તા = (n-1)!",
      "પરંતુ માળા (ગળામાં પહેરવાની) બનાવવાની હોય તો રસ્તા = (n-1)! / 2.",
      "હાથ મિલાવવાના (Handshakes) કુલ રસ્તા: n(n-1) / 2.",
      "સંભાવના (Probability) = (સાનુકૂળ પરિણામો) / (કુલ પરિણામો). સંભાવના ક્યારેય 1 થી વધુ ન હોઈ શકે."
    ],
    "mnemonics": "Permutation એટલે Position (ગોઠવણી), Combination એટલે Choose (પસંદગી).",
    "questions": [
      {
        "question": "ક્રમચય અને સંચય (Permutation & Combination) આધારિત પરીક્ષા લક્ષી દાખલો સોલ્વ કરો.",
        "options": [
          "વિકલ્પ A",
          "વિકલ્પ B",
          "વિકલ્પ C",
          "વિકલ્પ D"
        ],
        "correct": 0,
        "explanation": "પાઠ્યપુસ્તકની રીત અને શોર્ટકટ સૂત્ર મુજબ."
      }
    ]
  }
];

if (typeof module !== "undefined") { module.exports = { mathData }; }
