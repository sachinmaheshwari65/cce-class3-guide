const geographyData = [
  {
    topic: "૧. પૃથ્વીની સંરચના અને ખડકો (Earth Structure & Rocks)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>પૃથ્વીની આંતરિક રચના મુખ્યત્વે ૩ કેન્દ્રીય સ્તરોમાં વહેંચાયેલી છે: <strong>૧. ભૂપટ (Crust), ૨. મેન્ટલ (Mantle), અને ૩. કોર / ગર્ભ (Core)</strong>.</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🌍 પૃથ્વીના આંતરિક સ્તરોની વિગતવાર સરખામણી:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 10px; border: 1px solid var(--border);">સ્તરનું નામ</th>
              <th style="padding: 10px; border: 1px solid var(--border);">ઊંડાઈ / જાડાઈ</th>
              <th style="padding: 10px; border: 1px solid var(--border);">મુખ્ય રાસાયણિક તત્વો</th>
              <th style="padding: 10px; border: 1px solid var(--border);">ટૂંકું નામ & વિશેષતા</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૧. ભૂપટ (Crust)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">૫ થી ૭૦ કિમી</td>
              <td style="padding: 10px; border: 1px solid var(--border);">સિલિકા (Si) + એલ્યુમિનિયમ (Al)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>SIAL (સિયાલ)</strong> - પૃથ્વીનું સૌથી બહારનું અને પાતળું સ્તર.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૨. મેન્ટલ (Mantle)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">આશરે ૨૯૦૦ કિમી</td>
              <td style="padding: 10px; border: 1px solid var(--border);">સિલિકા (Si) + મેગ્નેશિયમ (Mg)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>SIMA (સીમા)</strong> - મેગ્મા ચેમ્બર (Asthenosphere) આ સ્તરમાં હોય છે.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૩. કોર / ગર્ભ (Core)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">૨૯૦૦ થી ૬૩૭૧ કિમી</td>
              <td style="padding: 10px; border: 1px solid var(--border);">નિકલ (Ni) + આયર્ન/લોખંડ (Fe)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>NIFE (નિફે)</strong> - બાહ્ય કોર (પ્રવાહી) અને આંતરિક કોર (અતિ ઘન). પૃથ્વીનું ચુંબકીય ક્ષેત્ર આનાથી ઉત્પન્ન થાય છે.</td>
            </tr>
          </tbody>
        </table>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">⛰️ ૩ પ્રકારના ખડકો (3 Types of Rocks Table):</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 10px; border: 1px solid var(--border);">ખડકનો પ્રકાર</th>
              <th style="padding: 10px; border: 1px solid var(--border);">નિર્માણ પ્રક્રિયા</th>
              <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણો & વિશેષતા</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૧. અગ્નિકૃત ખડકો (Igneous)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">લાવા/મેગ્મા ઠંડા પડવાથી. (પ્રાથમિક ખડકો)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>ગ્રેનાઈટ (Granite), બેસાલ્ટ (Basalt)</strong>. અશ્મિ (Fossils) હોતા નથી.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૨. જળકૃત / પ્રસ્તર (Sedimentary)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">પવન/પાણી દ્વારા ધોવાણ થઈ પડો જમા થવાથી.</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>રેતીનો પથ્થર (Sandstone), ચૂનાનો પથ્થર (Limestone), કોલસો</strong>. અશ્મિઓ (Fossils) અને ખનિજ તેલ આમાં મળે છે.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૩. રૂપાંતરિત ખડકો (Metamorphic)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">અતિશય તાપમાન અને દબાણને કારણે બંધારણ બદલાવાથી.</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>આરસપહાણ / માર્બલ (Marble - ચૂનામાંથી), સ્લેટ (Slate), ક્વાર્ટઝાઇટ, હીરો (Diamond)</strong>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    keyPoints: [
      "ભૂપટ: ૫-૭૦ કિમી (SIAL: સિલિકા + એલ્યુમિનિયમ).",
      "મેન્ટલ: ૨૯૦૦ કિમી (SIMA: સિલિકા + મેગ્નેશિયમ).",
      "કોર: ૨૯૦૦-૬૩૭૧ કિમી (NIFE: નિકલ + લોખંડ).",
      "અગ્નિકૃત ખડક: ગ્રેનાઈટ, બેસાલ્ટ (અશ્મિ ન હોય).",
      "જળકૃત ખડક: ચૂનાનો પથ્થર, કોલસો (અશ્મિઓ અને પેટ્રોલિયમ મળે).",
      "રૂપાંતરિત ખડક: આરસપહાણ/માર્બલ (ચૂનામાંથી), હીરો."
    ],
    mnemonics: "SIAL (Crust) → SIMA (Mantle) → NIFE (Core) | ચૂનાનો પથ્થર → માર્બલ બનવો તે રૂપાંતર"
  },
  {
    topic: "૨. ભારત અને ગુજરાતની નદીઓ (Rivers of India & Gujarat)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>ભારતની નદીઓને બે મુખ્ય વિભાગમાં વહેંચવામાં આવે છે: <strong>૧. હિમાલયની નદીઓ (બારમાસી)</strong> અને <strong>૨. દ્વીપકલ્પીય નદીઓ (મોસમ આધારિત)</strong>.</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🌊 ભારતની મુખ્ય નદીઓ (Major Rivers of India Table):</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 10px; border: 1px solid var(--border);">નદીનું નામ</th>
              <th style="padding: 10px; border: 1px solid var(--border);">ઉદ્ગમ સ્થાન</th>
              <th style="padding: 10px; border: 1px solid var(--border);">લંબાઈ & અંત</th>
              <th style="padding: 10px; border: 1px solid var(--border);">મહત્વની વિશેષતાઓ અને બંધ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગંગા (Ganga)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">ગંગોત્રી ગ્લેશિયર (ઉત્તરાખંડ - ભાગીરથી+અલકનંદા દેવપ્રયાગ ખાતે મળે)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">૨૫૨૫ કિમી (ભારતની સૌથી લાંબી નદી) → બંગાળની ખાડી</td>
              <td style="padding: 10px; border: 1px solid var(--border);">બાંગ્લાદેશમાં <strong>'પદ્મા' (Padma)</strong> કહેવાય છે. સુંદરબન ડેલ્ટા (વિશ્વનો સૌથી મોટો ડેલ્ટા). ફરેક્કા બેરેજ.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">બ્રહ્મપુત્ર (Brahmaputra)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">ચેમાયુગડુંગ ગ્લેશિયર (તિબેટ)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">૨૯૦૦ કિમી → બંગાળની ખાડી</td>
              <td style="padding: 10px; border: 1px solid var(--border);">તિબેટમાં <strong>'સાંગપો' (Tsangpo)</strong> અને બાંગ્લાદેશમાં <strong>'જમુના' (Jamuna)</strong> કહેવાય છે. માજુલી (અસમ) - વિશ્વનો સૌથી મોટો નદી ટાપુ.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગોદાવરી (Godavari)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">ત્ર્યંબકેશ્વર (નાસિક, મહારાષ્ટ્ર)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">૧૪૬૫ કિમી → બંગાળની ખાડી</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>'દક્ષિણ ગંગા' (South Ganga) અથવા 'વૃદ્ધ ગંગા'</strong>. દ્વીપકલ્પીય ભારતની સૌથી લાંબી નદી.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">નર્મદા (Narmada)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">અમરકંટક ટેકરીઓ (મધ્ય પ્રદેશ)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">૧૩૧૨ કિમી → અરબ સાગર (ખંભાતનો અખાત)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>પશ્ચિમ તરફ વહેતી સૌથી લાંબી નદી (રીફ્ટ વેલીમાં વહે છે)</strong>. ધુઆંધાર ધોધ (જબ્બલપુર), <strong>સરદાર સરોવર ડેમ (કેવડિયા/એકતા નગર, ગુજરાત)</strong>.</td>
            </tr>
          </tbody>
        </table>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🏔️ ગુજરાતની મુખ્ય નદીઓ અને ડેમ (Rivers of Gujarat):</h4>
        <ul style="padding-left: 1.25rem;">
          <li><strong>નર્મદા:</strong> ગુજરાતની જીવા દોરી. સરદાર સરોવર ડેમ (નર્મદા જિલ્લો). સાધુ બેટ પર <strong>'સ્ટેચ્યુ ઓફ યુનિટી' (૧૮૨ મીટર - સરદાર પટેલ)</strong> આવેલું છે.</li>
          <li><strong>તાપી:</strong> મધ્ય પ્રદેશના મુલતાઈમાંથી નીકળે છે. સુરત શહેરમાંથી પસાર થાય છે. <strong>ઉકાઈ ડેમ (Ukai Dam)</strong> અને કાકરાપાર પરમાણુ મથક આવેલું છે.</li>
          <li><strong>માહી:</strong> <strong>કર્કવૃત્ત (Tropic of Cancer) ને બે વાર કાપતી ભારતની એકમાત્ર નદી!</strong> કડાણા ડેમ (મહીસાગર) અને વણાકબોરી ડેમ.</li>
          <li><strong>સાબરમતી:</strong> ઢેબર સરોવર (રાજસ્થાન) માંથી નીકળે છે. અમદાવાદ અને ગાંધીનગર સાબરમતી કિનારે છે. સાબરમતી રિવરફ્રન્ટ અને ધરોઈ ડેમ.</li>
          <li><strong>ભાદર:</strong> સૌરાષ્ટ્રની સૌથી લાંબી નદી (૨૦૦ કિમી), જે સંપૂર્ણ રીતે ગુજરાતમાં જ વહે છે.</li>
          <li><strong>શેત્રુંજી:</strong> ગીરની ટેકરીઓમાંથી નીકળે છે. પશુપાલકો માટે મહત્વની, રાજસ્થળી ડેમ.</li>
        </ul>
      </div>
    `,
    keyPoints: [
      "ગંગા: ૨૫૨૫ કિમી (ભારતની સૌથી લાંબી). બાંગ્લાદેશમાં 'પદ્મા' કહેવાય.",
      "બ્રહ્મપુત્ર: તિબેટમાં 'સાંગપો', બાંગ્લાદેશમાં 'જમુના'. માજુલી (અસમ) નદી ટાપુ.",
      "ગોદાવરી: ૧૪૬૫ કિમી ('દક્ષિણ ગંગા' / 'વૃદ્ધ ગંગા').",
      "નર્મદા: ૧૩૧૨ કિમી (પશ્ચિમ તરફ વહેતી સૌથી મોટી નદી - સરદાર સરોવર ડેમ).",
      "કર્કવૃત્તને બે વાર કાપતી નદી: માહી નદી (મહીસાગર).",
      "સૌરાષ્ટ્રની સૌથી લાંબી નદી: ભાદર નદી.",
      "સ્ટેચ્યુ ઓફ યુનિટી: ૧૮૨ મીટર (નર્મદા નદી પર સાધુ બેટ ખાતે)."
    ],
    mnemonics: "માહી = કર્કવૃત્તને ૨ વાર કાપે | ગોદાવરી = દક્ષિણ ગંગા | બાંગ્લાદેશમાં ગંગા=પદ્મા, બ્રહ્મપુત્ર=જમુના"
  }
];

const scienceData = [
  {
    topic: "૧. પરમાણુ બંધારણ અને વિજ્ઞાનના નિયમો (Atom Structure & Physics)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>દ્રવ્યનો નાનામાં નાનો અવિભાજ્ય કણ એટલે પરમાણુ (Atom). પરમાણુમાં મુખ્યત્વે ૩ અણુઓ (Sub-atomic Particles) હોય છે: <strong>પ્રોટોન (Proton), ન્યુટ્રોન (Neutron), અને ઈલેક્ટ્રોન (Electron)</strong>.</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">⚛️ પરમાણુના કણો અને શોધો (Subatomic Particles Table):</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 10px; border: 1px solid var(--border);">કણનું નામ</th>
              <th style="padding: 10px; border: 1px solid var(--border);">વીજભાર (Charge)</th>
              <th style="padding: 10px; border: 1px solid var(--border);">શોધક (Discoverer) & વર્ષ</th>
              <th style="padding: 10px; border: 1px solid var(--border);">સ્થાન</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પ્રોટોન (Proton)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">ધન વીજભાર (+1.6 × 10⁻¹⁹ C)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">ગોલ્ડસ્ટીન (નામકરણ: રધરફોર્ડ)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">કેન્દ્રમાં (Nucleus)</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ન્યુટ્રોન (Neutron)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">તટસ્થ (Zero Charge)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">જેમ્સ ચૅડવિક (James Chadwick - 1932)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">કેન્દ્રમાં (Nucleus)</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઈલેક્ટ્રોન (Electron)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">ઋણ વીજભાર (-1.6 × 10⁻¹⁹ C)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">જે. જે. થૉમ્સન (J.J. Thomson - 1897)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">કેન્દ્રની બહાર કક્ષામાં ભ્રમણ કરે</td>
            </tr>
          </tbody>
        </table>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🍎 ન્યૂટનના ગતિના ૩ નિયમો (Newton's Laws of Motion):</h4>
        <ol style="padding-left: 1.25rem;">
          <li><strong>પ્રથમ નિયમ (જડત્વનો નિયમ - Law of Inertia):</strong> પદાર્થ પર બાહ્ય બળ ન લાગે ત્યાં સુધી તે પોતાની સ્થિર કે અચળ વેગી ગતિ ચાલુ રાખે છે. (ઉદા. ચાલુ બસે બ્રેક વાગતાં મુસાફર આગળ નમી પડે).</li>
          <li><strong>બીજો નિયમ (વેગમાન સંરક્ષણ - F = ma):</strong> બળ = દળ × પ્રવેગ. બળનો એકમ <strong>ન્યૂટન (Newton) અથવા kg·m/s²</strong> છે. (ઉદા. ક્રિકેટર કેચ પકડતી વખતે હાથ પાછળ ખેંચે છે).</li>
          <li><strong>ત્રીજો નિયમ (આઘાત અને પ્રત્યાઘાત - Action & Reaction):</strong> દરેક બળ સામે સમાન મૂલ્યનું અને વિરુદ્ધ દિશાનું પ્રત્યાઘાતી બળ હોય છે. (ઉદા. રોકેટનું ઉડ્ડયન, બંદૂકમાંથી ગોળી છૂટતાં પાછળ ધક્કો લાગવો).</li>
        </ol>
      </div>
    `,
    keyPoints: [
      "ઈલેક્ટ્રોન: જે.જે. થૉમ્સન (ઋણ વીજભાર).",
      "પ્રોટોન: રધરફોર્ડ/ગોલ્ડસ્ટીન (ધન વીજભાર).",
      "ન્યુટ્રોન: જેમ્સ ચૅડવિક ૧૯૩૨ (તટસ્થ વીજભાર).",
      "ન્યૂટનનો પ્રથમ નિયમ: જડત્વનો નિયમ (Inertia).",
      "ન્યૂટનનો બીજો નિયમ: F = ma (બળ = દળ × પ્રવેગ).",
      "ન્યૂટનનો ત્રીજો નિયમ: આઘાત અને પ્રત્યાઘાત સમાન ને વિરુદ્ધ (રોકેટ રોડ)."
    ],
    mnemonics: "PEN = RTC (Proton-Rutherford, Electron-Thomson, Neutron-Chadwick)"
  },
  {
    topic: "૨. માનવ શરીર વિજ્ઞાન અને રોગો (Human Physiology & Diseases)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>માનવ શરીરમાં <strong>૨૦૬ અસ્થિઓ (હાડકાં)</strong> હોય છે. જન્મ સમયે શિશુમાં આશરે ૩૦૦ હાડકાં હોય છે. માનવ હૃદય ૪ ખંડોનું (૨ કર્ણક અને ૨ ક્ષેપક) બનેલું હોય છે અને મિનિટમાં ૭૨ વાર ધડકે છે.</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🩸 માનવ રક્ત અને વિટામિન માર્ગદર્શિકા (Human Blood & Vitamins Table):</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 10px; border: 1px solid var(--border);">વિટામિન / ઘટક</th>
              <th style="padding: 10px; border: 1px solid var(--border);">રાસાયણિક નામ</th>
              <th style="padding: 10px; border: 1px solid var(--border);">ઉણપથી થતો રોગ</th>
              <th style="padding: 10px; border: 1px solid var(--border);">મુખ્ય સ્ત્રોત</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિટામિન A</td>
              <td style="padding: 10px; border: 1px solid var(--border);">રેટિનોલ (Retinol)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>રતાંધળાપણું (Night Blindness)</strong></td>
              <td style="padding: 10px; border: 1px solid var(--border);">ગાજર, દૂધ, લીલા શાકભાજી</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિટામિન B1</td>
              <td style="padding: 10px; border: 1px solid var(--border);">થાયામિન (Thiamine)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>બેરી-બેરી (Beri-Beri)</strong></td>
              <td style="padding: 10px; border: 1px solid var(--border);">અનાજની છાલ, ઈંડાં</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિટામિન C</td>
              <td style="padding: 10px; border: 1px solid var(--border);">એસ્કોર્બિક એસિડ (Ascorbic Acid)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>સ્કર્વી (Scurvy - પેઢામાંથી લોહી નીકળવું)</strong></td>
              <td style="padding: 10px; border: 1px solid var(--border);">ખાટા ફળો (આંબળા, લીંબુ, સંતરા)</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિટામિન D</td>
              <td style="padding: 10px; border: 1px solid var(--border);">કેલ્સિફેરોલ (Calciferol)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>સુકતાન (Rickets - હાડકાં નબળા પડવા)</strong></td>
              <td style="padding: 10px; border: 1px solid var(--border);">સૂર્યપ્રકાશ, માછલીનું તેલ</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિટામિન K</td>
              <td style="padding: 10px; border: 1px solid var(--border);">ફિલોક્વિનોન (Phylloquinone)</td>
              <td style="padding: 10px; border: 1px solid var(--border);"><strong>લોહી ગંઠાવાની ક્રિયા ન થવી</strong></td>
              <td style="padding: 10px; border: 1px solid var(--border);">લીલા પાંદડાવાળા શાકભાજી</td>
            </tr>
          </tbody>
        </table>

        <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
          <strong style="color: var(--accent-light);">🅰️🅱️🆎🅾️ માનવ રક્તજૂથ (Blood Groups - Karl Landsteiner):</strong><br>
          • શોધક: <strong>કાર્લ લેન્ડસ્ટેનર (Karl Landsteiner - 1900)</strong>.<br>
          • <strong>સર્વદાતા (Universal Donor):</strong> 'O Negative' રક્તજૂથ (તમામને રક્ત આપી શકે).<br>
          • <strong>સર્વગ્રાહી (Universal Acceptor):</strong> 'AB Positive' રક્તજૂથ (કોઈનું પણ રક્ત લઈ શકે).<br>
          • શરીરમાં સૌથી મોટું હાડકું: <strong>ફીમર (Femur - સાથળનું હાડકું)</strong>.<br>
          • શરીરમાં સૌથી નાનું હાડકું: <strong>સ્ટેપ્સ (Stapes - કાનનું હાડકું)</strong>.
        </div>
      </div>
    `,
    keyPoints: [
      "માનવ શરીરમાં ૨૦૬ હાડકાં હોય છે.",
      "સૌથી મોટું હાડકું: ફીમર (સાથળનું) | સૌથી નાનું હાડકું: સ્ટેપ્સ (કાનનું).",
      "સર્વદાતા બ્લડ ગ્રુપ: O Negative | સર્વગ્રાહી બ્લડ ગ્રુપ: AB Positive.",
      "વિટામિન A: રેટિનોલ (રતાંધળાપણું) | વિટામિન C: એસ્કોર્બિક એસિડ (સ્કર્વી).",
      "વિટામિન D: કેલ્સિફેરોલ (સૂર્યપ્રકાશમાંથી મળે - સુકતાન રોગ થાય).",
      "લોહી ગંઠાવામાં મદદરૂપ વિટામિન: વિટામિન K.",
      "ઈન્સ્યુલિન અંતઃસ્ત્રાવ: સ્વાદુપિંડમાંથી ઝરે (ઉણપથી ડાયાબિટીસ થાય)."
    ],
    mnemonics: "A=રતાંધળાપણું, B=બેરીબેરી, C=સ્કર્વી, D=સુકતાન | O=સર્વદાતા, AB=સર્વગ્રાહી"
  }
];

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { geographyData, scienceData };
} else {
  window.geographyData = geographyData;
  window.scienceData = scienceData;
}
