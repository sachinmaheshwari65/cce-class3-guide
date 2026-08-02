import json
import os

topics = [
  {
    "topic": "ભૌતિકશાસ્ત્ર - ગતિ અને બળ (Physics - Motion & Force)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ગતિ અને બળ ભૌતિકશાસ્ત્રનો પાયો છે. ન્યૂટનના ગતિના નિયમો બળ અને ગતિ વચ્ચેનો સંબંધ સમજાવે છે. જ્યારે કોઈ પદાર્થ સમયની સાથે પોતાનું સ્થાન બદલે છે, ત્યારે તે ગતિમાં છે તેમ કહેવાય.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ન્યૂટનના ગતિના નિયમો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">નિયમ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સમજૂતી</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પ્રથમ (જડત્વનો નિયમ)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સ્થિર પદાર્થ સ્થિર રહે છે અને ગતિમાન પદાર્થ પોતાની ગતિ જાળવી રાખે છે જ્યાં સુધી બાહ્ય બળ ન લાગે.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બસ અચાનક ઉપડતાં મુસાફર પાછળ ધકેલાય છે.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">દ્વિતીય (F = ma)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વેગમાનના ફેરફારનો દર તેના પર લાગતાં બળના સમપ્રમાણમાં હોય છે.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ક્રિકેટર કેચ પકડતી વખતે હાથ પાછળ ખેંચે છે.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">તૃતીય (આઘાત-પ્રત્યાઘાત)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">દરેક ક્રિયાબળને સમાન અને વિરુદ્ધ દિશામાં પ્રતિક્રિયાબળ હોય છે.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">રોકેટનું ઉડવું, બંદૂકમાંથી ગોળી છૂટવી.</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પૃથ્વી પર ગુરુત્વ પ્રવેગ (g) નું મૂલ્ય 9.8 m/s² છે. વિષુવવૃત્ત પર તે સૌથી ઓછું અને ધ્રુવો પર સૌથી વધુ હોય છે.
      </div>
    </div>""",
    "keyPoints": [
      "વેગ (Velocity): સ્થાનાંતર / સમય",
      "પ્રવેગ (Acceleration): વેગમાં થતો ફેરફાર / સમય",
      "વેગમાન (Momentum) = દળ (m) × વેગ (v)",
      "ઘર્ષણ (Friction) ના પ્રકાર: સ્થિત, સરકતું, અને લોટણ ઘર્ષણ.",
      "લોટણ ઘર્ષણ સૌથી ઓછું હોય છે, તેથી પૈડાંનો ઉપયોગ થાય છે.",
      "વજન (Weight) = દળ (m) × ગુરુત્વ પ્રવેગ (g).",
      "મુક્ત પતન (Free fall) કરતા પદાર્થનો પ્રારંભિક વેગ શૂન્ય હોય છે.",
      "બળનો SI એકમ ન્યૂટન (N) છે.",
      "કેન્દ્રગામી બળ: વર્તુળાકાર ગતિ માટે જરૂરી બળ.",
      "કેન્દ્રત્યાગી બળ: કેન્દ્રગામી બળની વિરુદ્ધ દિશામાં લાગતું આભાસી બળ (ઉદા. વોશિંગ મશીન)."
    ],
    "mnemonics": "ન્યૂટનના નિયમો યાદ રાખવા: જડ-વેગ-આઘાત (પ્રથમ: જડત્વ, બીજો: વેગમાન, ત્રીજો: આઘાત)"
  },
  {
    "topic": "ઊર્જા (Energy)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>કાર્ય કરવાની ક્ષમતાને ઊર્જા કહેવાય છે. ઊર્જા સંરક્ષણના નિયમ મુજબ, ઊર્જા ઉત્પન્ન કરી શકાતી નથી કે નષ્ટ કરી શકાતી નથી, માત્ર તેનું એક સ્વરૂપમાંથી બીજા સ્વરૂપમાં રૂપાંતરણ થાય છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ઊર્જાના સ્વરૂપો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">ઊર્જાનો પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સમજૂતી</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગતિ ઊર્જા (Kinetic)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પદાર્થની ગતિને કારણે રહેલી ઊર્જા (1/2 mv²)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">દોડતો માણસ, વહેતું પાણી</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સ્થિતિ ઊર્જા (Potential)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પદાર્થની સ્થિતિ કે આકારને કારણે રહેલી ઊર્જા (mgh)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બંધમાં ભરેલું પાણી, ખેંચેલી સ્પ્રિંગ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">રાસાયણિક ઊર્જા (Chemical)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">રાસાયણિક પ્રક્રિયાઓ દ્વારા મુક્ત થતી ઊર્જા</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બેટરી, ખોરાક, ઇંધણ</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પાવર (Power) = કાર્ય / સમય. તેનો SI એકમ વૉટ (Watt) છે. 1 હોર્સ પાવર (HP) = 746 Watts.
      </div>
    </div>""",
    "keyPoints": [
      "કાર્ય (Work) = બળ (F) × સ્થાનાંતર (d).",
      "કાર્ય અને ઊર્જાનો SI એકમ જૂલ (Joule) છે.",
      "સૌર ઊર્જા: સૂર્યમાંથી મળતી ઊર્જા, જે ન્યુક્લિયર ફ્યુઝન (સંલયન) પ્રક્રિયાનું પરિણામ છે.",
      "માઈક્રોફોન: ધ્વનિ ઊર્જાનું વિદ્યુત ઊર્જામાં રૂપાંતર.",
      "લાઉડસ્પીકર: વિદ્યુત ઊર્જાનું ધ્વનિ ઊર્જામાં રૂપાંતર.",
      "ડાયનેમો (જનરેટર): યાંત્રિક ઊર્જાનું વિદ્યુત ઊર્જામાં રૂપાંતર.",
      "મોટર: વિદ્યુત ઊર્જાનું યાંત્રિક ઊર્જામાં રૂપાંતર.",
      "બલ્બ: વિદ્યુત ઊર્જાનું પ્રકાશ અને ઉષ્મા ઊર્જામાં રૂપાંતર.",
      "1 યુનિટ વિદ્યુત ઊર્જા = 1 કિલોવોટ-કલાક (kWh) = 3.6 × 10^6 જૂલ.",
      "સ્થિતિ ઊર્જા વત્તા ગતિ ઊર્જા = યાંત્રિક ઊર્જા."
    ],
    "mnemonics": "પાવરનું સૂત્ર: P = W/t (Power is Work on time)"
  },
  {
    "topic": "તરંગ અને ધ્વનિ (Waves & Sound)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ધ્વનિ એ યાંત્રિક તરંગ છે, જેને પ્રસરણ માટે માધ્યમની જરૂર પડે છે (ઘન, પ્રવાહી કે વાયુ). તે શૂન્યાવકાશમાં પ્રસરી શકતો નથી.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ધ્વનિની આવૃત્તિ અને પ્રકારો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">આવૃત્તિ (Frequency)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉપયોગ / સાંભળી શકનાર</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઇન્ફ્રાસોનિક (અશ્રાવ્ય)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">20 Hz થી ઓછી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">હાથી, વ્હેલ, ભૂકંપના તરંગો</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સોનિક (શ્રાવ્ય)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">20 Hz થી 20,000 Hz</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સામાન્ય મનુષ્ય</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">અલ્ટ્રાસોનિક (પરાશ્રાવ્ય)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">20,000 Hz થી વધુ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ચામાચીડિયું, કૂતરા, સોનોગ્રાફી (SONAR)</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પડઘો (Echo) સાંભળવા માટે ધ્વનિ સ્ત્રોત અને અવરોધ વચ્ચે ઓછામાં ઓછું 17.2 મીટર અંતર હોવું જરૂરી છે.
      </div>
    </div>""",
    "keyPoints": [
      "ધ્વનિનો વેગ ઘન માધ્યમમાં સૌથી વધુ, પ્રવાહીમાં મધ્યમ અને વાયુમાં સૌથી ઓછો હોય છે.",
      "આવૃત્તિ (Frequency) નો એકમ હર્ટ્ઝ (Hz) છે.",
      "તરંગલંબાઇ (Wavelength) નો એકમ મીટર (m) છે.",
      "હવામાં ધ્વનિનો વેગ આશરે 343 m/s (20°C તાપમાને) હોય છે.",
      "ધ્વનિની તીવ્રતા માપવાનો એકમ ડેસિબલ (dB) છે.",
      "80 dB થી વધુ તીવ્રતા વાળો ધ્વનિ ઘોંઘાટ કહેવાય છે.",
      "ડોપ્લર ઇફેક્ટ: સ્ત્રોત અને શ્રોતા વચ્ચેની સાપેક્ષ ગતિને કારણે ધ્વનિની આવૃત્તિમાં થતો ફેરફાર.",
      "મધ્ય કાનમાં ત્રણ હાડકાં હોય છે: હથોડી (Malleus), એરણ (Incus), અને પેંગડું (Stapes).",
      "પેંગડું (Stapes) માનવ શરીરનું સૌથી નાનું હાડકું છે.",
      "ધ્વનિની પિચ (Pitch) તેની આવૃત્તિ પર આધાર રાખે છે (સ્ત્રીઓનો અવાજ તીણો હોય છે કારણ કે આવૃત્તિ વધુ હોય છે)."
    ],
    "mnemonics": "વેગનો ક્રમ: ઘન > પ્રવાહી > વાયુ (ઘ-પ્ર-વા)"
  },
  {
    "topic": "પ્રકાશ (Light)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>પ્રકાશ એ વિદ્યુતચુંબકીય તરંગ છે જે શૂન્યાવકાશમાં પણ પ્રસરી શકે છે. પ્રકાશનો વેગ શૂન્યાવકાશમાં સૌથી વધુ 3 × 10⁸ m/s હોય છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 અરીસા અને લેન્સના ઉપયોગો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ગુણધર્મ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉપયોગ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">અંતર્ગોળ અરીસો (Concave)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પ્રકાશને કેન્દ્રિત કરે છે.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">દાઢી કરવા, ડોક્ટરનું હેડ મિરર, વાહનોની હેડલાઇટ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">બહિર્ગોળ અરીસો (Convex)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વિશાળ દૃષ્ટિ ક્ષેત્ર આપે છે.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વાહનોના સાઇડ મિરર (Rear-view)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">બહિર્ગોળ લેન્સ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વચ્ચેથી જાડો, પ્રકાશ કેન્દ્રિત કરે.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">માઇક્રોસ્કોપ, દુરદ્રષ્ટિની ખામી નિવારવા</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પૂર્ણ આંતરિક પરાવર્તન (Total Internal Reflection): મૃગજળ (Mirage), હીરાનો ચળકાટ અને ઓપ્ટિકલ ફાઇબરમાં જોવા મળે છે.
      </div>
    </div>""",
    "keyPoints": [
      "પ્રકાશનું વક્રીભવન (Refraction): પ્રકાશનું એક માધ્યમમાંથી બીજા માધ્યમમાં જતાં વાંકા વળવાની ઘટના (સ્નેલનો નિયમ).",
      "તારાઓનું ટમટમવું એ વાતાવરણીય વક્રીભવનનું ઉદાહરણ છે.",
      "પ્રકાશનું વિભાજન: શ્વેત પ્રકાશનું સાત રંગોમાં વિભાજન (VIBGYOR).",
      "મેઘધનુષ્ય: વક્રીભવન, વિભાજન અને પૂર્ણ આંતરિક પરાવર્તનની સંયુક્ત ઘટના.",
      "પ્રકાશનું પ્રકીર્ણન (Scattering): આકાશ ભૂરું દેખાવું અને સૂર્યોદય/સૂર્યાસ્ત સમયે સૂર્ય લાલ દેખાવું.",
      "લઘુદ્રષ્ટિની ખામી (Myopia): દૂરનું ન દેખાય, નિવારણ માટે અંતર્ગોળ લેન્સ (Concave lens) વપરાય.",
      "ગુરુદ્રષ્ટિની ખામી (Hypermetropia): નજીકનું ન દેખાય, નિવારણ માટે બહિર્ગોળ લેન્સ (Convex lens) વપરાય.",
      "લેન્સનો પાવર માપવાનો એકમ ડાયોપ્ટર (Diopter) છે.",
      "આંખમાં પ્રતિમા (Image) નેત્રપટલ (Retina) પર રચાય છે, જે વાસ્તવિક અને ઊલટી હોય છે.",
      "આંખના રંગ માટે આઇરિસ (Iris) જવાબદાર છે."
    ],
    "mnemonics": "દ્રષ્ટિની ખામી: લઘુ માટે અંતર્ગોળ, ગુરુ માટે બહિર્ગોળ (લ-અ, ગુ-બ)"
  },
  {
    "topic": "વિદ્યુત (Electricity)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ઇલેક્ટ્રોનના વહનને વિદ્યુત પ્રવાહ કહે છે. તે ઘરગથ્થુ અને ઔદ્યોગિક ઉપયોગો માટે અત્યંત મહત્વપૂર્ણ છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 વિદ્યુત રાશિઓ અને એકમો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">રાશિ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સિમ્બોલ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">SI એકમ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">માપવા માટેનું સાધન</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border);">વિદ્યુત પ્રવાહ (Current)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">I</td>
            <td style="padding: 10px; border: 1px solid var(--border);">એમ્પીયર (Ampere)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">એમિટર</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border);">વિદ્યુત સ્થિતિમાન (Voltage)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">V</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વોલ્ટ (Volt)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વોલ્ટમીટર</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border);">અવરોધ (Resistance)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">R</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઓહ્મ (Ohm) Ω</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઓહ્મમીટર / મલ્ટીમીટર</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        ઓહ્મનો નિયમ: V = I × R. ઘરમાં વાયરિંગ સમાંતર (Parallel) જોડાણમાં હોય છે, જેથી એક ઉપકરણ બંધ થાય તો બીજા ચાલુ રહે.
      </div>
    </div>""",
    "keyPoints": [
      "ઇલેક્ટ્રિક બલ્બનો ફિલામેન્ટ ટંગસ્ટન (Tungsten) નો બનેલો હોય છે, કારણ કે તેનું ગલનબિંદુ ઊંચું હોય છે.",
      "ઇલેક્ટ્રિક હીટરમાં નાઇક્રોમ (Nichrome) વાયર વપરાય છે.",
      "ફ્યુઝ (Fuse) નો વાયર નીચા ગલનબિંદુવાળી મિશ્રધાતુ (ટીન અને લેડ) નો બનેલો હોય છે.",
      "MCB (Miniature Circuit Breaker) હવે ફ્યુઝની જગ્યાએ વધુ વપરાય છે.",
      "અર્થિંગ (Earthing) ના વાયરનો રંગ સામાન્ય રીતે લીલો (Green) હોય છે.",
      "લાઇવ (Live) વાયર લાલ અને ન્યૂટ્રલ વાયર કાળા રંગનો હોય છે.",
      "શ્રેણી જોડાણ (Series Circuit) માં પ્રવાહ સરખો રહે છે, વોલ્ટેજ વહેંચાય છે.",
      "સમાંતર જોડાણ (Parallel Circuit) માં વોલ્ટેજ સરખો રહે છે, પ્રવાહ વહેંચાય છે.",
      "વિદ્યુત પાવર P = V × I.",
      "ગેલવેનોમીટર વિદ્યુત પ્રવાહની હાજરી અને દિશા દર્શાવે છે."
    ],
    "mnemonics": "ઓહ્મનો નિયમ VIR (વીર): V = I × R"
  },
  {
    "topic": "ચુંબકત્વ (Magnetism)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>જે પદાર્થ લોખંડ, નિકલ કે કોબાલ્ટને આકર્ષે છે તેને ચુંબક કહે છે. પૃથ્વી પોતે એક વિશાળ ચુંબક તરીકે વર્તે છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ચુંબકીય પદાર્થો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ગુણધર્મ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ફેરોમેગ્નેટિક</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ચુંબક પ્રત્યે પ્રબળ આકર્ષણ.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">લોખંડ (Fe), કોબાલ્ટ (Co), નિકલ (Ni)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પેરામેગ્નેટિક</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ચુંબક પ્રત્યે નિર્બળ આકર્ષણ.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">એલ્યુમિનિયમ, ઓક્સિજન, સોડિયમ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ડાયામેગ્નેટિક</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ચુંબકથી અપાકર્ષણ પામે.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">તાંબુ, સોનું, ચાંદી, પાણી</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        ચુંબકીય ક્ષેત્ર રેખાઓ ચુંબકની બહાર ઉત્તર ધ્રુવ (N) થી દક્ષિણ ધ્રુવ (S) તરફ અને અંદર S થી N તરફ હોય છે. તે ક્યારેય એકબીજાને છેદતી નથી.
      </div>
    </div>""",
    "keyPoints": [
      "સમાન ધ્રુવો (N-N, S-S) વચ્ચે અપાકર્ષણ અને અસમાન ધ્રુવો (N-S) વચ્ચે આકર્ષણ થાય છે.",
      "ચુંબકને મુક્ત રીતે લટકાવતાં તે હંમેશા ઉત્તર-દક્ષિણ દિશામાં સ્થિર થાય છે.",
      "હોકાયંત્ર (Compass) માં ચુંબકીય સોયનો ઉપયોગ થાય છે.",
      "વિદ્યુત ચુંબક (Electromagnet): નરમ લોખંડના ગર્ભ પર વાહક તાર વીંટાળીને વિદ્યુત પસાર કરવાથી બને છે.",
      "ફ્લેમિંગનો ડાબા હાથનો નિયમ: મોટરના સિદ્ધાંત માટે (બળની દિશા જાણવા).",
      "ફ્લેમિંગનો જમણા હાથનો નિયમ: જનરેટરના સિદ્ધાંત માટે (પ્રેરિત પ્રવાહની દિશા જાણવા).",
      "MRI (Magnetic Resonance Imaging) માં પ્રબળ ચુંબકીય ક્ષેત્રનો ઉપયોગ થાય છે.",
      "ચુંબકને ગરમ કરવાથી કે પછાડવાથી તેનું ચુંબકત્વ નાશ પામે છે.",
      "ચુંબકીય ક્ષેત્રનો SI એકમ ટેસ્લા (Tesla) છે.",
      "સ્પીકર અને ઇલેક્ટ્રિક ઘંટડીમાં વિદ્યુત ચુંબકનો ઉપયોગ થાય છે."
    ],
    "mnemonics": "FBI ડાબો હાથ: F(Force-અંગૂઠો), B(Magnetic field-પહેલી આંગળી), I(Current-વચ્ચેની આંગળી)"
  },
  {
    "topic": "રાસાયણશાસ્ત્ર - તત્વો અને સંયોજનો (Chemistry - Elements & Compounds)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આધુનિક આવર્ત કોષ્ટક તત્વોના પરમાણુ ક્રમાંકના આધારે ગોઠવાયેલું છે. તેમાં 118 તત્વો, 18 સમૂહ (Groups) અને 7 આવર્ત (Periods) છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ધાતુ, અધાતુ અને અર્ધધાતુ:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">ગુણધર્મ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ધાતુઓ (Metals)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">અધાતુઓ (Non-metals)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સ્વરૂપ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સામાન્ય રીતે ઘન (પારો પ્રવાહી છે).</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઘન, પ્રવાહી (બ્રોમિન) અથવા વાયુ.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વાહકતા</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઉષ્મા અને વિદ્યુતના સુવાહક.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">અવાહક (ગ્રેફાઇટ અપવાદ છે).</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ભૌતિક ગુણ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ટીપાવપણું, તણાવપણું, રણકાર.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બરડ હોય છે, રણકાર ન હોય.</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        સમસ્થાનિકો (Isotopes): પરમાણુ ક્રમાંક સમાન પણ દળાંક જુદો (ઉદા. C-12, C-14). સમભારીકો (Isobars): દળાંક સમાન પણ પરમાણુ ક્રમાંક જુદો.
      </div>
    </div>""",
    "keyPoints": [
      "પરમાણુના કેન્દ્રમાં પ્રોટોન (ધન) અને ન્યુટ્રોન (તટસ્થ) હોય છે.",
      "ઇલેક્ટ્રોન (ઋણ) કેન્દ્રની આસપાસ કક્ષામાં ફરે છે.",
      "પરમાણુ ક્રમાંક (Z) = પ્રોટોનની સંખ્યા = ઇલેક્ટ્રોનની સંખ્યા (તટસ્થ પરમાણુમાં).",
      "પરમાણુ દળાંક (A) = પ્રોટોન + ન્યુટ્રોનની સંખ્યા.",
      "સૌથી હલકું તત્વ: હાઇડ્રોજન (H).",
      "સૌથી ભારે ધાતુ: ઓસ્મિયમ (Os), સૌથી હલકી ધાતુ: લિથિયમ (Li).",
      "પ્રવાહી સ્વરૂપની ધાતુ: પારો (Mercury - Hg) અને ગેલિયમ.",
      "પ્રવાહી સ્વરૂપની અધાતુ: બ્રોમિન (Br).",
      "અર્ધધાતુઓ (Metalloids): સિલિકોન, જર્મેનિયમ (સેમિકન્ડક્ટર તરીકે વપરાય છે).",
      "નોબલ ગેસ (નિષ્ક્રિય વાયુઓ): સમૂહ 18 ના તત્વો (He, Ne, Ar, Kr, Xe, Rn)."
    ],
    "mnemonics": "પ્રથમ 10 તત્વો: હા-હી-લી-બે-બો-કા-ના-ઓ-ફ્લો-ની (H, He, Li, Be, B, C, N, O, F, Ne)"
  },
  {
    "topic": "એસિડ, બેઝ અને ક્ષાર (Acids, Bases & Salts)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>એસિડ સ્વાદે ખાટા હોય છે અને ભૂરા લિટમસ પત્રને લાલ બનાવે છે. બેઝ સ્વાદે તૂરા હોય છે અને લાલ લિટમસને ભૂરું બનાવે છે. એસિડ અને બેઝ વચ્ચે પ્રક્રિયા થઈ ક્ષાર અને પાણી બને છે (તટસ્થીકરણ).</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 pH સ્કેલ અને પદાર્થો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">pH મૂલ્ય</th>
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રકૃતિ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">&lt; 7 (0 થી 6.9)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">એસિડિક</td>
            <td style="padding: 10px; border: 1px solid var(--border);">લીંબુનો રસ (2.2), જઠરરસ (1.2), કોફી (5.0)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">= 7</td>
            <td style="padding: 10px; border: 1px solid var(--border);">તટસ્થ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">શુદ્ધ પાણી, મીઠું (NaCl) નો દ્રાવણ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">&gt; 7 (7.1 થી 14)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બેઝિક</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બ્લડ (7.4), મિલ્ક ઓફ મેગ્નેશિયા (10)</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        કીડીના ડંખમાં ફોર્મિક એસિડ (મિથેનોઇક એસિડ) હોય છે. તેને મટાડવા બેકિંગ સોડા (બેઝ) ઘસવામાં આવે છે.
      </div>
    </div>""",
    "keyPoints": [
      "લીંબુ/નારંગી: સાઇટ્રિક એસિડ.",
      "આંબલી/દ્રાક્ષ: ટાર્ટરિક એસિડ.",
      "ટમેટા: ઓક્ઝેલિક એસિડ.",
      "દહીં/છાશ: લેક્ટિક એસિડ.",
      "સફરજન: મેલિક એસિડ.",
      "કિંગ ઓફ કેમિકલ્સ: સલ્ફ્યુરિક એસિડ (H2SO4).",
      "ધોવાનો સોડા: Sodium Carbonate (Na2CO3).",
      "ખાવાનો સોડા: Sodium Bicarbonate (NaHCO3).",
      "બ્લીચિંગ પાવડર: Calcium Oxychloride (CaOCl2).",
      "પ્લાસ્ટર ઓફ પેરિસ (PoP): CaSO4 · 1/2 H2O. હાડકાં સાંધવા અને મૂર્તિઓ બનાવવા."
    ],
    "mnemonics": "એસિડ ભૂલા (ભૂરા ને લાલ કરે), બેઝ લાભુ (લાલ ને ભૂરું કરે)"
  },
  {
    "topic": "રાસાયણિક પ્રક્રિયાઓ (Chemical Reactions)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>જ્યારે બે કે તેથી વધુ પદાર્થો જોડાઈને નવો પદાર્થ બનાવે અથવા એક પદાર્થ તૂટીને નવા પદાર્થો બને, ત્યારે રાસાયણિક પ્રક્રિયા થઈ કહેવાય. દળ સંરક્ષણના નિયમ મુજબ પ્રક્રિયાને સંતુલિત કરવી પડે છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 પ્રક્રિયાના પ્રકારો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સમજૂતી</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સંયોગીકરણ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બે કે તેથી વધુ પ્રક્રિયકો જોડાઈને એક નીપજ બને (A+B &rarr; AB)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">કોલસાનું દહન (C + O2 &rarr; CO2)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિઘટન</td>
            <td style="padding: 10px; border: 1px solid var(--border);">એક પ્રક્રિયક તૂટીને બે કે વધુ નીપજ બને (AB &rarr; A+B)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ચૂનાના પથ્થરને ગરમ કરવો</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિસ્થાપન</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વધુ સક્રિય તત્વ ઓછા સક્રિય તત્વને દૂર કરે</td>
            <td style="padding: 10px; border: 1px solid var(--border);">Fe + CuSO4 &rarr; FeSO4 + Cu</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        ઓક્સિડેશન એટલે ઓક્સિજન ઉમેરાવો અથવા હાઇડ્રોજન દૂર થવો. રિડક્શન એટલે હાઇડ્રોજન ઉમેરાવો અથવા ઓક્સિજન દૂર થવો. જે પ્રક્રિયામાં બંને થાય તેને રેડોક્ષ (Redox) કહે છે.
      </div>
    </div>""",
    "keyPoints": [
      "ઉષ્માક્ષેપક પ્રક્રિયા: પ્રક્રિયા દરમિયાન ઉષ્મા મુક્ત થાય છે (ઉદા. શ્વસન).",
      "ઉષ્માશોષક પ્રક્રિયા: પ્રક્રિયા થવા માટે ઉષ્મા આપવી પડે છે (ઉદા. પ્રકાશસંશ્લેષણ).",
      "કાટ લાગવો (Corrosion) એ ઓક્સિડેશન પ્રક્રિયાનું ઉદાહરણ છે.",
      "લોખંડ પર કાટ લાગતો અટકાવવા ઝીંક (Zn) નું પડ ચઢાવાય છે, જેને ગેલ્વેનાઇઝેશન કહે છે.",
      "ખોરાક બગડવો (ખોરાપણું - Rancidity): ચરબી કે તેલનું ઓક્સિડેશન થવાથી સ્વાદ/ગંધ બદલાય છે.",
      "ચિપ્સના પેકેટમાં ખોરાપણું અટકાવવા નાઇટ્રોજન (N2) ગેસ ભરવામાં આવે છે.",
      "ઉદ્દીપક (Catalyst): એવો પદાર્થ જે પ્રક્રિયાનો વેગ વધારે છે પણ પોતે વપરાતો નથી.",
      "એન્ટાસિડ (Antacid): એસિડિટી મટાડવા વપરાતો હળવો બેઝ (ઉદા. મિલ્ક ઓફ મેગ્નેશિયા).",
      "ચાંદી પર કાળું પડ (Silver Sulfide) અને તાંબા પર લીલો ક્ષાર (Copper Carbonate) કાટના પ્રકાર છે.",
      "દહન પ્રક્રિયા માટે ઓક્સિજન (O2) જરૂરી છે."
    ],
    "mnemonics": "O-I-L R-I-G: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons)"
  },
  {
    "topic": "કાર્બન અને તેના સંયોજનો (Carbon Chemistry)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>કાર્બન એક અનોખું તત્વ છે જે કેટેનેશન (catenation - એકબીજા સાથે જોડાઈ લાંબી સાંકળ બનાવવાનો) નો ગુણધર્મ ધરાવે છે. કાર્બનિક રસાયણશાસ્ત્ર એ કાર્બનના સંયોજનોનો અભ્યાસ છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 કાર્બનના બહુરૂપો (Allotropes):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">બહુરૂપ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ગુણધર્મ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉપયોગ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">હીરો (Diamond)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૌથી સખત કુદરતી પદાર્થ, વિદ્યુતનો અવાહક.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">આભૂષણો, કાચ કાપવા.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગ્રેફાઇટ (Graphite)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">નરમ, ચીકણું, વિદ્યુતનો સુવાહક.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પેન્સિલની અણી, ઊંજણ (Lubricant) તરીકે.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ફૂલરીન (Fullerene)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ફૂટબોલ જેવો આકાર (બકમિન્સ્ટર ફૂલરીન C-60).</td>
            <td style="padding: 10px; border: 1px solid var(--border);">નેનોટેકનોલોજીમાં.</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        હાઇડ્રોકાર્બન સંયોજનો માત્ર કાર્બન અને હાઇડ્રોજન ધરાવે છે. સંતૃપ્ત (Alkanes - સિંગલ બોન્ડ) અને અસંતૃપ્ત (Alkenes - ડબલ બોન્ડ, Alkynes - ટ્રિપલ બોન્ડ).
      </div>
    </div>""",
    "keyPoints": [
      "કાર્બનનો પરમાણુ ક્રમાંક 6 અને સંયોજકતા 4 છે.",
      "મિથેન (CH4): માર્શ ગેસ, બાયોગેસ અને CNG નો મુખ્ય ઘટક છે.",
      "આલ્કેનનું સામાન્ય સૂત્ર: CnH2n+2.",
      "આલ્કીનનું સામાન્ય સૂત્ર: CnH2n.",
      "આલ્કાઇનનું સામાન્ય સૂત્ર: CnH2n-2.",
      "LPG (Liquefied Petroleum Gas) માં મુખ્યત્વે બ્યુટેન અને પ્રોપેન હોય છે.",
      "સાબુ (Soaps): ફેટી એસિડના સોડિયમ કે પોટેશિયમ ક્ષાર છે.",
      "ડિટર્જન્ટ (Detergents): કઠિન પાણીમાં પણ ફીણ આપે છે, જ્યારે સાબુ કઠિન પાણીમાં અસરકારક નથી.",
      "ઇથેનોલ (C2H5OH): આલ્કોહોલ પીણાં અને સેનિટાઈઝરમાં વપરાય છે.",
      "ઇથેનોઇક એસિડ (એસેટિક એસિડ): તેના 5-8% દ્રાવણને વિનેગર (સરકો) કહે છે."
    ],
    "mnemonics": "આલ્કેન: વત્તા બે (+2), આલ્કીન: ઝીરો (0), આલ્કાઇન: ઓછા બે (-2)"
  },
  {
    "topic": "જીવવિજ્ઞાન - કોષ (Biology - Cell)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>કોષ સજીવનો રચનાત્મક અને ક્રિયાત્મક એકમ છે. રોબર્ટ હૂકે 1665માં કોષની શોધ કરી હતી.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 વનસ્પતિ કોષ અને પ્રાણી કોષનો તફાવત:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">અંગિકા</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વનસ્પતિ કોષ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રાણી કોષ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કોષદીવાલ (Cell Wall)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">હાજર (સેલ્યુલોઝની બનેલી)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ગેરહાજર</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">હરિતકણ (Chloroplast)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">હાજર (પ્રકાશસંશ્લેષણ માટે)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ગેરહાજર</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">રસધાની (Vacuole)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ખૂબ મોટી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">નાની અથવા ગેરહાજર</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        કણાભસૂત્ર (Mitochondria) ને કોષનું <b>પાવરહાઉસ (શક્તિઘર)</b> કહે છે. તે ATP સ્વરૂપે ઊર્જા ઉત્પન્ન કરે છે.
      </div>
    </div>""",
    "keyPoints": [
      "કોષકેન્દ્ર (Nucleus): કોષનું નિયામક કેન્દ્ર. તેમાં રંગસૂત્રો (DNA) હોય છે.",
      "લાયસોઝોમ (Lysosome): કોષની <b>આત્મઘાતી કોથળી (Suicidal bag)</b> કહેવાય છે.",
      "રિબોઝોમ (Ribosome): પ્રોટીન સંશ્લેષણનું કામ કરે છે (પ્રોટીન ફેક્ટરી).",
      "ગોલ્ગી પ્રસાધન (Golgi body): દ્રવ્યોના પેકેજિંગ અને વહન માટે.",
      "અંત:કોષરસજાળ (ER): ખરબચડી (રિબોઝોમ સાથે) અને લીસી (લિપિડ નિર્માણ).",
      "માનવ શરીરમાં 23 જોડ (કુલ 46) રંગસૂત્રો હોય છે.",
      "માઈટોસિસ (સમભાજન): શારીરિક વૃદ્ધિ માટે, 2 સમાન બાળકોષો બને છે.",
      "મિઓસિસ (અર્ધીકરણ): પ્રજનન કોષોના નિર્માણ માટે, 4 બાળકોષો બને છે (રંગસૂત્ર અડધા થઈ જાય).",
      "DNA નું પૂરું નામ: Deoxyribonucleic Acid.",
      "RNA નું પૂરું નામ: Ribonucleic Acid."
    ],
    "mnemonics": "પાવર = કણાભસૂત્ર, પ્રોટીન = રિબોઝોમ, સુસાઇડ = લાયસોઝોમ"
  },
  {
    "topic": "માનવ શરીર (Human Body Systems)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>માનવ શરીર વિવિધ તંત્રોનું બનેલું જટિલ મશીન છે. દરેક તંત્ર ચોક્કસ કાર્ય કરે છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 રક્ત જૂથ (Blood Groups) અને રક્તદાન:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">રક્ત જૂથ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">કોને આપી શકે?</th>
            <th style="padding: 10px; border: 1px solid var(--border);">કોની પાસેથી લઈ શકે?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">O (સર્વદાતા - Universal Donor)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બધાને (A, B, AB, O)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">માત્ર O</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">AB (સર્વગ્રાહી - Universal Recipient)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">માત્ર AB</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બધા પાસેથી (A, B, AB, O)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">A</td>
            <td style="padding: 10px; border: 1px solid var(--border);">A, AB</td>
            <td style="padding: 10px; border: 1px solid var(--border);">A, O</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">B</td>
            <td style="padding: 10px; border: 1px solid var(--border);">B, AB</td>
            <td style="padding: 10px; border: 1px solid var(--border);">B, O</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        સામાન્ય મનુષ્યનું બ્લડ પ્રેશર 120/80 mmHg હોય છે. તેને માપવા માટે સ્ફિગ્મોમેનોમીટર વપરાય છે.
      </div>
    </div>""",
    "keyPoints": [
      "પુખ્ત મનુષ્યમાં 206 હાડકાં હોય છે (નવજાત શિશુમાં 300 આસપાસ).",
      "સૌથી મોટું હાડકું: થાપાનું/સાથળનું હાડકું (Femur).",
      "પાચનતંત્ર: જઠરમાં હાઈડ્રોક્લોરિક એસિડ (HCl) હોય છે.",
      "નાના આંતરડામાં ખોરાકનું સંપૂર્ણ પાચન થાય છે (તેની લંબાઈ આશરે 6.5 મીટર છે).",
      "હૃદય 4 ખંડોનું બનેલું છે (2 કર્ણક, 2 ક્ષેપક).",
      "ધમની (Artery) શુદ્ધ લોહી (ઓક્સિજન યુક્ત) લઈ જાય છે (અપવાદ: પલ્મોનરી ધમની).",
      "શિરા (Vein) અશુદ્ધ લોહી (કાર્બન ડાયોક્સાઇડ યુક્ત) લઈ જાય છે (અપવાદ: પલ્મોનરી શિરા).",
      "મગજના 3 ભાગ છે: અગ્ર મગજ (વિચારવા માટે), મધ્ય મગજ, અને પશ્ચ મગજ (શરીરનું સંતુલન - સેરેબેલમ).",
      "મૂત્રપિંડ (Kidney): લોહી ગાળવાનું કામ કરે છે (એકમ: નેફ્રોન).",
      "પીટ્યુટરી ગ્રંથિ (Pituitary gland) ને માસ્ટર ગ્રંથિ કહે છે (મગજમાં આવેલી છે)."
    ],
    "mnemonics": "ધમની = ધન (શુદ્ધ), શિરા = ખરાબ (અશુદ્ધ)"
  },
  {
    "topic": "રોગ અને પોષણ (Diseases & Nutrition)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>સ્વસ્થ શરીર માટે સંતુલિત આહાર જરૂરી છે. વિટામિન્સ, મિનરલ્સ, પ્રોટીન વગેરેની ઉણપથી ત્રુટિજન્ય રોગો થાય છે. સૂક્ષ્મજીવોથી ચેપી રોગો ફેલાય છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 વિટામિન્સ અને તેની ઉણપથી થતા રોગો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">વિટામિન (રાસાયણિક નામ)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉણપથી થતો રોગ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સ્ત્રોત</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border);">A (રેટિનોલ)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">રતાંધળાપણું (Night blindness)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ગાજર, પપૈયું, દૂધ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border);">B1 (થાયમીન)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બેરી-બેરી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">અનાજ, કઠોળ, ઈંડા</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border);">C (એસ્કોર્બિક એસિડ)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સ્કર્વી (પેઢામાંથી લોહી આવવું)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">લીંબુ, આમળા, ખાટા ફળો</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border);">D (કેલ્સિફેરોલ)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સુખતાન (Rickets) - હાડકાં પોચા થવા</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૂર્યપ્રકાશ, માછલીનું તેલ</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પાણીમાં દ્રાવ્ય વિટામિન્સ: B અને C. ચરબીમાં દ્રાવ્ય વિટામિન્સ: A, D, E, K.
      </div>
    </div>""",
    "keyPoints": [
      "આયોડીનની ઉણપથી ગોઇટર (ગળામાં સોજો) થાય છે.",
      "આયર્ન (Fe) ની ઉણપથી એનિમિયા (પાંડુરોગ) થાય છે.",
      "પ્રોટીનની ઉણપથી બાળકોમાં ક્વોશિયોરકોર અને મરાસ્મસ રોગ થાય છે.",
      "બેક્ટેરિયાથી થતા રોગો: ટાઇફોઈડ, ક્ષય (TB), કોલેરા, ન્યુમોનિયા.",
      "વાયરસથી થતા રોગો: કોવિડ-19, એઇડ્સ, હડકવા, ઓરી, પોલિયો.",
      "પ્રજીવ (Protozoa) થી થતા રોગો: મેલેરિયા (માદા એનોફિલીસ મચ્છર દ્વારા).",
      "ફૂગ (Fungi) થી થતા રોગો: દાદર, ખસ.",
      "રસી (Vaccine) શોધક: એડવર્ડ જેનર (શીતળાની રસી - પ્રથમ રસી).",
      "પોલિયોની રસી જોનાસ સાલ્ક દ્વારા શોધાઈ.",
      "પેનિસિલિન (એન્ટિબાયોટિક) ની શોધ એલેક્ઝાન્ડર ફ્લેમિંગે કરી."
    ],
    "mnemonics": "ચરબીમાં દ્રાવ્ય: KEDA (કીડા - કે, ઈ, ડી, એ)"
  },
  {
    "topic": "વનસ્પતિ વિજ્ઞાન (Botany)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>વનસ્પતિ સૃષ્ટિ પૃથ્વી પર જીવનનો આધાર છે. તેઓ પ્રકાશસંશ્લેષણ દ્વારા પોતાનો ખોરાક જાતે બનાવે છે (સ્વયંપોષી).</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 વનસ્પતિના મુખ્ય ભાગો અને કાર્યો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">ભાગ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">મુખ્ય કાર્ય</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">મૂળ (Roots)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">જમીનમાંથી પાણી અને ખનિજ ક્ષારોનું શોષણ.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પ્રકાંડ (Stem)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">આધાર આપવો અને પાણી/ખોરાકનું વહન કરવું.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પર્ણ (Leaves)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પ્રકાશસંશ્લેષણ દ્વારા ખોરાક બનાવવો (વનસ્પતિનું રસોડું).</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પુષ્પ (Flower)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પ્રજનન અંગ (બીજ અને ફળનું નિર્માણ).</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        જલવાહક પેશી (Xylem) પાણી અને ખનિજોનું વહન (નીચેથી ઉપર) કરે છે. અન્નવાહક પેશી (Phloem) ખોરાકનું વહન (પર્ણથી અન્ય ભાગોમાં) કરે છે.
      </div>
    </div>""",
    "keyPoints": [
      "પ્રકાશસંશ્લેષણનું સમીકરણ: 6CO2 + 6H2O + પ્રકાશ &rarr; C6H12O6 (ગ્લુકોઝ) + 6O2.",
      "પર્ણમાં રહેલું હરિતદ્રવ્ય (Chlorophyll) સૂર્યપ્રકાશનું શોષણ કરે છે.",
      "બાષ્પોત્સર્જન (Transpiration): પર્ણરંધ્રો દ્વારા વધારાના પાણીને વરાળ સ્વરૂપે ગુમાવવાની ક્રિયા.",
      "સોટી મૂળ (Tap root): દ્વિદળ વનસ્પતિમાં (મગ, ચણા).",
      "તંતુ મૂળ (Fibrous root): એકદળ વનસ્પતિમાં (ઘઉં, બાજરી).",
      "પુષ્પના નર પ્રજનન અંગને પુંકેસર (Stamen) કહે છે.",
      "પુષ્પના માદા પ્રજનન અંગને સ્ત્રીકેસર (Pistil) કહે છે.",
      "પરાગનયન (Pollination): પરાગરજનું પુંકેસરમાંથી સ્ત્રીકેસરના પરાગાસન પર સ્થાનાંતર.",
      "બીજમાંથી અંકુરણ પામી નવો છોડ બનવાની શરૂઆત થાય છે.",
      "અમરવેલ (Cuscuta) પરોપજીવી વનસ્પતિ છે, કળશપર્ણ કીટાહારી વનસ્પતિ છે."
    ],
    "mnemonics": "જલવાહક = જળ (પાણી), અન્નવાહક = અન્ન (ખોરાક)"
  },
  {
    "topic": "પર્યાવરણ અને ઈકોલોજી (Environment & Ecology)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>સજીવો અને તેમના ભૌતિક પર્યાવરણ વચ્ચેની આંતરક્રિયાઓને ઇકોસિસ્ટમ (નિવસનતંત્ર) કહે છે. તેમાં જૈવિક (સજીવ) અને અજૈવિક (નિર્જીવ) ઘટકો હોય છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 પોષક સ્તરો અને આહાર શૃંખલા:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">સ્તર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ભૂમિકા</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઉત્પાદકો (Producers)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પોતાનો ખોરાક જાતે બનાવે.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">લીલી વનસ્પતિ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પ્રાથમિક ઉપભોગી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">શાકાહારી (વનસ્પતિ ખાય).</td>
            <td style="padding: 10px; border: 1px solid var(--border);">તીડ, ગાય, હરણ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">દ્વિતીય/તૃતીય ઉપભોગી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">માંસાહારી (પ્રાણીઓને ખાય).</td>
            <td style="padding: 10px; border: 1px solid var(--border);">દેડકો, સાપ, સિંહ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિઘટકો (Decomposers)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">મૃત જૈવિક દ્રવ્યોનું વિઘટન કરે.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બેક્ટેરિયા, ફૂગ</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        10% નો નિયમ (Lindeman): આહાર શૃંખલામાં એક પોષક સ્તરમાંથી બીજા સ્તરમાં માત્ર 10% ઊર્જાનું જ વહન થાય છે.
      </div>
    </div>""",
    "keyPoints": [
      "ગ્રીનહાઉસ અસર: CO2, મિથેન, નાઇટ્રસ ઓક્સાઇડ વગેરે વાયુઓ ગરમીને રોકી પૃથ્વીનું તાપમાન વધારે છે.",
      "ગ્લોબલ વોર્મિંગ (Global Warming): ગ્રીનહાઉસ અસરને કારણે પૃથ્વીના સરેરાશ તાપમાનમાં થતો વધારો.",
      "ઓઝોન સ્તર (O3): સ્ટ્રેટોસ્ફિયરમાં આવેલું છે, સૂર્યના પારજાંબલી (UV) કિરણોથી રક્ષણ આપે છે.",
      "CFC (ક્લોરોફ્લોરોકાર્બન) ઓઝોન સ્તરને નુકસાન પહોંચાડે છે.",
      "જૈવિક વિશાલન (Biomagnification): આહાર શૃંખલામાં ઉપલા સ્તરે જતાં હાનિકારક રસાયણો (DDT) ની સાંદ્રતા વધે છે.",
      "ગુજરાતના નેશનલ પાર્ક: ગીર (સિંહ), વેળાવદર (કાળિયાર), વાંસદા (દીપડા), મરીન (દરિયાઈ જીવો - જામનગર).",
      "પ્રોજેક્ટ ટાઇગર 1973માં શરૂ કરવામાં આવ્યો હતો.",
      "વન્યજીવ સંરક્ષણ અધિનિયમ 1972 માં ઘડવામાં આવ્યો.",
      "ચિપકો આંદોલન સુંદરલાલ બહુગુણાના નેતૃત્વમાં વૃક્ષો બચાવવા શરૂ થયું હતું.",
      "5 જૂન - વિશ્વ પર્યાવરણ દિવસ તરીકે ઉજવાય છે."
    ],
    "mnemonics": "ગુજરાતના 4 નેશનલ પાર્ક: ગી-વે-વાં-મ (ગીર, વેળાવદર, વાંસદા, મરીન)"
  },
  {
    "topic": "અવકાશ વિજ્ઞાન (Space Science)",
    "content": """<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>સૂર્યમંડળમાં સૂર્ય અને તેની આસપાસ ફરતા 8 ગ્રહો, ઉપગ્રહો, લઘુગ્રહો અને ધૂમકેતુઓનો સમાવેશ થાય છે.</p>
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ગ્રહોની વિશેષતાઓ:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">ગ્રહ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">બુધ (Mercury)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૂર્યની સૌથી નજીક અને સૌથી નાનો ગ્રહ.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">શુક્ર (Venus)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૌથી ગરમ અને તેજસ્વી ગ્રહ (સવાર/સાંજનો તારો).</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">મંગળ (Mars)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">લાલ ગ્રહ (આયર્ન ઓક્સાઇડને કારણે).</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગુરુ (Jupiter)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૌથી મોટો ગ્રહ.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">શનિ (Saturn)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વલયો ધરાવતો ગ્રહ, ઘનતા પાણી કરતા પણ ઓછી.</td>
          </tr>
        </tbody>
      </table>
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        સૂર્યગ્રહણ અમાસના દિવસે (સૂર્ય-ચંદ્ર-પૃથ્વી) અને ચંદ્રગ્રહણ પૂનમના દિવસે (સૂર્ય-પૃથ્વી-ચંદ્ર) થાય છે.
      </div>
    </div>""",
    "keyPoints": [
      "આંતરિક ગ્રહો (ખડકાળ): બુધ, શુક્ર, પૃથ્વી, મંગળ.",
      "બાહ્ય ગ્રહો (વાયુના ગોળા): ગુરુ, શનિ, યુરેનસ, નેપ્ચ્યુન.",
      "મંગળ અને ગુરુ ગ્રહની ભ્રમણકક્ષા વચ્ચે લઘુગ્રહો (Asteroids) નો પટ્ટો આવેલો છે.",
      "હેલીનો ધૂમકેતુ દર 76 વર્ષે દેખાય છે (છેલ્લે 1986 માં દેખાયો હતો).",
      "ISRO (Indian Space Research Organisation) ની સ્થાપના 15 ઓગસ્ટ 1969 ના રોજ થઈ.",
      "ISRO નું વડું મથક બેંગલુરુમાં છે.",
      "ભારતનો પ્રથમ કૃત્રિમ ઉપગ્રહ આર્યભટ્ટ (1975) હતો.",
      "ચંદ્રયાન-3 (2023): ભારત ચંદ્રના દક્ષિણ ધ્રુવ પર ઉતરનાર પ્રથમ દેશ બન્યો.",
      "મંગળયાન (MOM - Mars Orbiter Mission): ભારત પ્રથમ પ્રયાસમાં જ મંગળ પર પહોંચનાર દેશ બન્યો.",
      "ગગનયાન: ભારતનું પ્રથમ માનવયુક્ત અંતરિક્ષ મિશન છે."
    ],
    "mnemonics": "ગ્રહોનો ક્રમ: My Very Educated Mother Just Served Us Noodles (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)"
  }
]

js_content = "const scienceData = " + json.dumps(topics, ensure_ascii=False, indent=2) + ";\\n\\nif (typeof module !== 'undefined') {\\n  module.exports = { scienceData };\\n}"

file_path = r"C:\\Users\\mahes\\.gemini\\antigravity\\scratch\\cce-class3-guide\\data-science.js"
os.makedirs(os.path.dirname(file_path), exist_ok=True)
with open(file_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("File created successfully.")
