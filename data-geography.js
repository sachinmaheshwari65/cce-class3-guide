const geographyData = [
  {
    topic: "પૃથ્વીની સંરચના (Earth Structure)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>પૃથ્વીની આંતરિક સંરચના મુખ્યત્વે ત્રણ ભાગોમાં વહેંચાયેલી છે: પોપડો (Crust), આવરણ (Mantle) અને ગર્ભ (Core). પૃથ્વીના ખડકોને મુખ્યત્વે ત્રણ પ્રકારમાં વહેંચવામાં આવે છે: અગ્નિકૃત (Igneous), જળકૃત (Sedimentary) અને વિકૃત (Metamorphic). ભૂકંપ અને જ્વાળામુખી પૃથ્વીની આંતરિક હિલચાલના પરિણામ છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 પૃથ્વીના સ્તરો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">સ્તર (Layer)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">અન્ય નામ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">મુખ્ય તત્વો</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પોપડો (Crust)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">SIAL / SIMA</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સિલિકા + એલ્યુમિનિયમ / મેગ્નેશિયમ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૌથી બહારનું અને પાતળું સ્તર</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">આવરણ (Mantle)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">મેગ્મા ચેમ્બર</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સિલિકેટ ખડકો</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પૃથ્વીના કદનો 84% ભાગ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગર્ભ (Core)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">NIFE</td>
            <td style="padding: 10px; border: 1px solid var(--border);">નિકલ (Ni) + લોખંડ (Fe)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૌથી આંતરિક, અતિશય ગરમી</td>
          </tr>
        </tbody>
      </table>

      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ખડકોના પ્રકાર:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">ખડકનો પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણો</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">અગ્નિકૃત (Igneous)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ગ્રેનાઈટ, બેસાલ્ટ, પ્યુમાઈસ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પ્રસ્તર/જળકૃત (Sedimentary)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ચૂનાનો પથ્થર, કોલસો, સેન્ડસ્ટોન</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">રૂપાંતરિત/વિકૃત (Metamorphic)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">આરસપહાણ (Marble), ક્વાર્ટઝાઈટ, સ્લેટ</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        ભૂકંપની તીવ્રતા માપવા માટે રિક્ટર સ્કેલ (Richter Scale) વપરાય છે, જ્યારે ભૂકંપની અસર/નુકસાન માપવા મર્કાલી સ્કેલ (Mercalli Scale) વપરાય છે. સિસ્મોગ્રાફ એ ભૂકંપ માપક યંત્ર છે.
      </div>
    </div>`,
    keyPoints: [
      "પૃથ્વીના પોપડા (Crust) માં સૌથી વધુ પ્રમાણમાં જોવા મળતું તત્વ ઓક્સિજન (46.6%) છે, ત્યારબાદ સિલિકોન (27.7%) આવે છે.",
      "ખંડિય પોપડો મુખ્યત્વે SIAL (Silica + Aluminium) નો બનેલો છે, જ્યારે મહાસાગરીય પોપડો SIMA (Silica + Magnesium) નો બનેલો છે.",
      "કોર (Core) માં નિકલ અને આયર્ન હોવાથી તેને NIFE કહેવાય છે.",
      "અગ્નિકૃત ખડકો પ્રાથમિક ખડકો કહેવાય છે કારણ કે તે મેગ્મા/લાવા ઠરવાથી બને છે.",
      "જીવાશ્મ (Fossils) માત્ર પ્રસ્તર (Sedimentary) ખડકોમાં જ જોવા મળે છે.",
      "ભૂકંપનું ઉદ્ભવસ્થાન 'હાઇપોસેન્ટર' (Focus) કહેવાય છે, અને પૃથ્વીની સપાટી પરનું તેના બરાબર ઉપરનું બિંદુ 'એપિસેન્ટર' (Epicenter) કહેવાય છે.",
      "ભૂકંપના મોજા ત્રણ પ્રકારના હોય છે: P-waves (પ્રાથમિક), S-waves (દ્વિતીયક) અને L-waves (સપાટીના મોજા - સૌથી વિનાશક).",
      "જ્વાળામુખીમાંથી બહાર આવતો પ્રવાહી પદાર્થ સપાટી પર આવે ત્યારે 'લાવા' કહેવાય છે, અંદર હોય ત્યારે 'મેગ્મા' કહેવાય છે.",
      "પ્રશાંત મહાસાગરનો કિનારો 'રિંગ ઓફ ફાયર' (Ring of Fire) તરીકે ઓળખાય છે, જ્યાં સૌથી વધુ ભૂકંપ અને જ્વાળામુખી આવે છે.",
      "પ્લેટ ટેક્ટોનિક્સ થિયરી આલ્ફ્રેડ વેગનરના ખંડ પ્રવહન સિદ્ધાંત પર આધારિત છે."
    ],
    mnemonics: "પૃથ્વીના સ્તરો: CSM (Crust, Mantle, Core) | ખડકો: ISM (Igneous, Sedimentary, Metamorphic)"
  },
  {
    topic: "વાતાવરણ (Atmosphere)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>પૃથ્વીની ચારે બાજુ વીંટળાયેલા હવાના આવરણને વાતાવરણ કહે છે. તેમાં વિવિધ વાયુઓનું મિશ્રણ છે, જેમાં નાઇટ્રોજન (78%) અને ઓક્સિજન (21%) મુખ્ય છે. વાતાવરણને તાપમાન અને ઊંચાઈના આધારે 5 આવરણોમાં વહેંચવામાં આવ્યું છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 વાતાવરણના સ્તરો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">સ્તર (Layer)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઊંચાઈ (આશરે)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">મુખ્ય વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ક્ષોભ આવરણ (Troposphere)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">0 થી 18 km</td>
            <td style="padding: 10px; border: 1px solid var(--border);">હવામાનની તમામ ઘટનાઓ (વરસાદ, વાદળો) અહીં થાય છે. ઊંચાઈ સાથે તાપમાન ઘટે છે.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સમતાપ આવરણ (Stratosphere)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">18 થી 50 km</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઓઝોન સ્તર અહીં આવેલું છે. વિમાનો ઉડાવવા માટે શ્રેષ્ઠ.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">મધ્યાવરણ (Mesosphere)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">50 થી 80 km</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઉલ્કાઓ આ સ્તરમાં બળીને નાશ પામે છે. સૌથી ઠંડુ સ્તર.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઉષ્માવરણ (Thermosphere/Ionosphere)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">80 થી 400 km</td>
            <td style="padding: 10px; border: 1px solid var(--border);">રેડિયો તરંગો પરાવર્તિત થાય છે. તાપમાન ખૂબ ઊંચું.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">બાહ્યાવરણ (Exosphere)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">> 400 km</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૌથી બહારનું સ્તર, હલકા વાયુઓ (હાઇડ્રોજન, હિલિયમ). કૃત્રિમ ઉપગ્રહો અહીં હોય છે.</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        ઓઝોન (O3) સ્તર પારજાંબલી (Ultraviolet - UV) કિરણોને પૃથ્વી પર આવતા રોકે છે. ઓઝોન સ્તરની જાડાઈ 'Dobson' યુનિટમાં મપાય છે. CFCs (ક્લોરોફ્લોરોકાર્બન) ઓઝોનને સૌથી વધુ નુકસાન પહોંચાડે છે.
      </div>
    </div>`,
    keyPoints: [
      "વાતાવરણમાં વાયુઓનું પ્રમાણ: N2 (78%), O2 (21%), આર્ગોન (0.93%), CO2 (0.03%).",
      "ગ્રીનહાઉસ અસર માટે મુખ્યત્વે CO2, મિથેન (CH4), વોટર વેપર અને નાઈટ્રસ ઓક્સાઇડ જવાબદાર છે.",
      "ક્ષોભ આવરણમાં દર 165 મીટરની ઊંચાઈએ 1°C તાપમાન ઘટે છે, જેને નોર્મલ લેપ્સ રેટ (Normal Lapse Rate) કહે છે.",
      "હવામાન (Weather) એ ટૂંકા ગાળાની પરિસ્થિતિ છે, જ્યારે આબોહવા (Climate) એ 30-35 વર્ષની સરેરાશ પરિસ્થિતિ છે.",
      "પૃથ્વીની સપાટી પર આવતા સૂર્યના કિરણોને ઇન્સોલેશન (Insolation) કહેવાય છે.",
      "ઓરોરા બોરિયાલિસ (ઉત્તર ધ્રુવ) અને ઓરોરા ઓસ્ટ્રેલિસ (દક્ષિણ ધ્રુવ) ઉષ્માવરણ (આયનોસ્ફિયર) માં જોવા મળતી પ્રકાશમય ઘટનાઓ છે.",
      "સમતાપ આવરણમાં વાદળો કે તોફાનો ન હોવાથી જેટ વિમાનો ઉડાડવા માટે તે સૌથી અનુકૂળ છે.",
      "બેરોમીટરથી હવાનું દબાણ મપાય છે. હવાનું દબાણ અચાનક ઘટી જવું એ વાવાઝોડાની આગાહી છે.",
      "પૃથ્વીનું સરેરાશ તાપમાન 15°C છે.",
      "મોન્ટ્રીયલ પ્રોટોકોલ (1987) એ ઓઝોન સ્તરના રક્ષણ માટેની આંતરરાષ્ટ્રીય સંધિ છે."
    ],
    mnemonics: "TSMTE - Trust (Troposphere) Smart (Stratosphere) Men (Mesosphere) Taking (Thermosphere) Exams (Exosphere)"
  },
  {
    topic: "આબોહવા અને ઋતુઓ (Climate & Seasons)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ભારતની આબોહવા 'ઉષ્ણકટિબંધીય મોસમી' (Tropical Monsoon) પ્રકારની છે. 'Monsoon' શબ્દ અરબી શબ્દ 'મૌસિમ' પરથી ઉતરી આવ્યો છે. ભારતની આબોહવા પર હિમાલય અને હિંદ મહાસાગરનો મોટો પ્રભાવ છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ભારતમાં ઋતુચક્ર (IMD મુજબ):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">ઋતુ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સમયગાળો</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">શિયાળો (Winter)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ડિસેમ્બર - ફેબ્રુઆરી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઉત્તર-પૂર્વના પવનો, તમિલનાડુમાં વરસાદ (કોરોમંડલ તટ)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઉનાળો (Summer)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">માર્ચ - મે</td>
            <td style="padding: 10px; border: 1px solid var(--border);">લૂ (Loo), કાળવૈશાખી, મેંગો શાવર</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ચોમાસું (SW Monsoon)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">જૂન - સપ્ટેમ્બર</td>
            <td style="padding: 10px; border: 1px solid var(--border);">દક્ષિણ-પશ્ચિમ મોસમી પવનો, ભારતમાં 75% થી વધુ વરસાદ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પાછા ફરતા મોસમી પવનોની ઋતુ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઓક્ટોબર - નવેમ્બર</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઓક્ટોબર હીટ, ચક્રવાતોની શરૂઆત</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        એલ નિનો (El Nino) ભારતીય ચોમાસા માટે નકારાત્મક છે (દુષ્કાળ લાવે છે), જ્યારે લા નીના (La Nina) ભારતીય ચોમાસા માટે હકારાત્મક છે (સારો વરસાદ લાવે છે).
      </div>
    </div>`,
    keyPoints: [
      "ભારતમાં સૌથી પહેલો વરસાદ કેરળના મલબાર તટે જૂનના પ્રથમ સપ્તાહમાં આવે છે.",
      "ભારતમાં સૌથી વધુ વરસાદ મેઘાલયના 'મોસીનરમ' અને 'ચેરાપુંજી'માં પડે છે.",
      "ભારતમાં સૌથી ઓછો વરસાદ લેહ (લદ્દાખ) અને જેસલમેર (રાજસ્થાન)માં પડે છે.",
      "દક્ષિણ-પશ્ચિમ મોસમી પવનોની બે શાખાઓ છે: 1. અરબ સાગરની શાખા 2. બંગાળની ખાડીની શાખા.",
      "તમિલનાડુનો કોરોમંડલ કિનારો શિયાળામાં (નવેમ્બર-ડિસેમ્બર) ઉત્તર-પૂર્વના પાછા ફરતા મોસમી પવનોથી વરસાદ મેળવે છે.",
      "ઉત્તર ભારતમાં શિયાળામાં પડતો કમોસમી વરસાદ 'વેસ્ટર્ન ડિસ્ટર્બન્સ' (ભૂમધ્ય સમુદ્ર પરથી આવતા વાવાઝોડા) ને આભારી છે, જેને રાજસ્થાનમાં 'માવઠું' કહે છે.",
      "ઉનાળામાં ઉત્તર અને ઉત્તર-પશ્ચિમ ભારતમાં ફૂંકાતા ગરમ અને સૂકા પવનોને 'લૂ' (Loo) કહે છે.",
      "કર્ણાટક અને કેરળમાં ચોમાસા પૂર્વે થતા વરસાદને 'મેંગો શાવર' (Mango Shower) કહે છે જે કેરીના પાક માટે લાભદાયક છે.",
      "પશ્ચિમ બંગાળમાં ઉનાળાના તોફાનોને 'કાળવૈશાખી' (Kal Baisakhi) કહેવાય છે.",
      "જેટ સ્ટ્રીમ એ વાતાવરણના ઉપરના સ્તરમાં અત્યંત ઝડપે ફૂંકાતા પવનો છે જે ભારતના ચોમાસાને પ્રભાવિત કરે છે."
    ],
    mnemonics: "ભારતનો વરસાદ: SW થી આવે, NE થી પાછો જાય (South-West Monsoon brings rain, North-East Monsoon retreats)"
  },
  {
    topic: "ભારતનો ભૂગોળ (Indian Geography Overview)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ભારત ઉત્તર-પૂર્વ ગોળાર્ધમાં આવેલો દેશ છે. ક્ષેત્રફળની દ્રષ્ટિએ વિશ્વમાં 7મો અને વસ્તીની દ્રષ્ટિએ પ્રથમ/બીજો ક્રમ ધરાવે છે. ભારતનો ભૌગોલિક વિસ્તાર વૈવિધ્યસભર છે, જેમાં પર્વતો, મેદાનો, રણ અને દરિયાકિનારો સામેલ છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ભારતની ભૌગોલિક માહિતી:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">વિગત</th>
            <th style="padding: 10px; border: 1px solid var(--border);">માહિતી</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">અક્ષાંશીય સ્થાન</td><td style="padding: 10px; border: 1px solid var(--border);">8°4' N થી 37°6' N (ઉત્તર અક્ષાંશ)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">રેખાંશીય સ્થાન</td><td style="padding: 10px; border: 1px solid var(--border);">68°7' E થી 97°25' E (પૂર્વ રેખાંશ)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ક્ષેત્રફળ</td><td style="padding: 10px; border: 1px solid var(--border);">32,87,263 ચો. કિ.મી (વિશ્વના 2.4%)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઉત્તર-દક્ષિણ લંબાઈ</td><td style="padding: 10px; border: 1px solid var(--border);">3,214 કિ.મી (કાશ્મીરથી કન્યાકુમારી)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પૂર્વ-પશ્ચિમ પહોળાઈ</td><td style="padding: 10px; border: 1px solid var(--border);">2,933 કિ.મી (અરુણાચલ પ્રદેશથી ગુજરાત)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">જમીન સરહદ</td><td style="padding: 10px; border: 1px solid var(--border);">15,200 કિ.મી (7 દેશો સાથે)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">દરિયાકિનારો</td><td style="padding: 10px; border: 1px solid var(--border);">7,516.6 કિ.મી (ટાપુઓ સહિત)</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        કર્કવૃત્ત (Tropic of Cancer - 23.5° N) ભારતના 8 રાજ્યોમાંથી પસાર થાય છે. ભારતનું પ્રમાણ સમય રેખા (IST - 82.5° E) યુપીના મિર્ઝાપુર (પ્રયાગરાજ) પાસેથી પસાર થાય છે અને તે 5 રાજ્યો (UP, MP, છત્તીસગઢ, ઓડિશા, આંધ્રપ્રદેશ) માંથી પસાર થાય છે.
      </div>
    </div>`,
    keyPoints: [
      "ભારતની સૌથી લાંબી આંતરરાષ્ટ્રીય સરહદ બાંગ્લાદેશ (4096 કિમી) સાથે અને સૌથી ટૂંકી અફઘાનિસ્તાન (106 કિમી - POK માં) સાથે જોડાયેલી છે.",
      "ભારત 7 દેશો સાથે જમીન સરહદ ધરાવે છે: પાકિસ્તાન, અફઘાનિસ્તાન, ચીન, નેપાળ, ભૂટાન, મ્યાનમાર, બાંગ્લાદેશ.",
      "ભારત અને ચીન વચ્ચેની સરહદ રેખા 'મેકમોહન રેખા' (McMahon Line) કહેવાય છે.",
      "ભારત અને પાકિસ્તાન વચ્ચેની સરહદ રેખા 'રેડક્લિફ રેખા' (Radcliffe Line) કહેવાય છે.",
      "ભારત અને અફઘાનિસ્તાન વચ્ચેની રેખા 'ડ્યુરંડ રેખા' (Durand Line) છે.",
      "ભારતના 9 રાજ્યો અને 4 કેન્દ્રશાસિત પ્રદેશો દરિયાકિનારો ધરાવે છે.",
      "સૌથી લાંબો દરિયાકિનારો ગુજરાત (આશરે 1600 કિમી) ધરાવે છે, ત્યારબાદ આંધ્રપ્રદેશ આવે છે.",
      "ભારતનું સૌથી દક્ષિણ બિંદુ 'ઇન્દિરા પોઇન્ટ' (પિગ્મેલિયન પોઇન્ટ) ગ્રેટ નિકોબાર ટાપુમાં છે.",
      "ભારતનું સૌથી ઉત્તર બિંદુ 'ઇન્દિરા કોલ' (લદ્દાખ), પૂર્વ બિંદુ 'કિબિથુ' (અરુણાચલ પ્રદેશ) અને પશ્ચિમ બિંદુ 'ગુહર મોતી/સિરી ક્રીક' (ગુજરાત) છે.",
      "શ્રીલંકા ભારતથી પાક સ્ટ્રેટ (Palk Strait) અને મન્નારની ખાડી દ્વારા અલગ પડે છે."
    ],
    mnemonics: "કર્કવૃત્ત પસાર થતા 8 રાજ્યો: મમરા ગુજરાતી છે (મ-મધ્યપ્રદેશ, મ-મિઝોરમ, રા-રાજસ્થાન, ગુ-ગુજરાત, જ-ઝારખંડ, રા-ત્રિપુરા (રા/ત્રિ), તી-છત્તીસગઢ, પશ્ચિમ બંગાળ) અર્થાત (GMMCJTMM - Gujarat, MP, Mizoram, Chhattisgarh, Jharkhand, Tripura, Maharashtra(No - it's West Bengal! Correct mnemonic: ગુરામછ ઝાપત્રિમ - ગુજરાત, રાજસ્થાન, મધ્યપ્રદેશ, છત્તીસગઢ, ઝારખંડ, પશ્ચિમ બંગાળ, ત્રિપુરા, મિઝોરમ)"
  },
  {
    topic: "ભારતના ભૌગોલિક વિભાગો (Physical Divisions of India)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ભારતને મુખ્યત્વે 5 થી 6 ભૌગોલિક વિભાગોમાં વહેંચવામાં આવે છે. હિમાલયની પર્વતમાળાઓ નવીન ગેડ પર્વતો છે, જ્યારે દક્ષિણનો ઉચ્ચપ્રદેશ એ સૌથી જૂનો ભૂ-ભાગ (ગોંડવાના લેન્ડ) છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 હિમાલય પર્વતમાળાના ભાગો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">હિમાલયની શ્રેણી</th>
            <th style="padding: 10px; border: 1px solid var(--border);">અન્ય નામ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગ્રેટર હિમાલય</td>
            <td style="padding: 10px; border: 1px solid var(--border);">હિમાદ્રી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૌથી ઊંચી શ્રેણી, માઉન્ટ એવરેસ્ટ અહીં છે. હંમેશા બરફથી આચ્છાદિત.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">મિડલ હિમાલય</td>
            <td style="padding: 10px; border: 1px solid var(--border);">હિમાચલ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પીર પંજાલ, ધૌલાધર શ્રેણી. હિલ સ્ટેશનો (શિમલા, દાર્જિલિંગ) અહીં છે.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">આઉટર હિમાલય</td>
            <td style="padding: 10px; border: 1px solid var(--border);">શિવાલિક</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૌથી નવી અને દક્ષિણની શ્રેણી. 'દૂન' (જેમ કે દેહરાદૂન) અહીં આવેલા છે.</td>
          </tr>
        </tbody>
      </table>

      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ઉત્તરના મેદાનોની જમીન:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ભાબર (Bhabar)</td><td style="padding: 10px; border: 1px solid var(--border);">શિવાલિકની તળેટીમાં કાંકરાવાળો પટ્ટો, નદીઓ અહીં અદ્રશ્ય થાય છે.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">તરાઈ (Terai)</td><td style="padding: 10px; border: 1px solid var(--border);">ભેજવાળો અને દલદલવાળો વિસ્તાર, ગાઢ જંગલો.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">બાંગર (Bhangar)</td><td style="padding: 10px; border: 1px solid var(--border);">જૂનો કાંપ, ઓછી ફળદ્રુપતા, 'કંકર' જોવા મળે છે.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ખાદર (Khadar)</td><td style="padding: 10px; border: 1px solid var(--border);">નવો કાંપ, પૂરના મેદાનો, ખૂબ જ ફળદ્રુપ.</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પશ્ચિમ ઘાટને મહારાષ્ટ્રમાં 'સહ્યાદ્રી' કહેવાય છે. પશ્ચિમ ઘાટ અને પૂર્વ ઘાટ દક્ષિણમાં જ્યાં મળે છે તેને નીલગીરીની પહાડીઓ કહે છે. નીલગીરીનું સૌથી ઊંચું શિખર 'દોડ્ડાબેટ્ટા' છે. દક્ષિણ ભારતનું સૌથી ઊંચું શિખર 'અનાઈમુડી' (અન્નામલય શ્રેણી) છે.
      </div>
    </div>`,
    keyPoints: [
      "ભારતનું સૌથી જૂનું ભૂમિસ્વરૂપ દ્વીપકલ્પીય ઉચ્ચપ્રદેશ (Peninsular Plateau) છે.",
      "અરવલ્લી પર્વતમાળા વિશ્વની સૌથી જૂની ગેડ પર્વતમાળા છે, જેનું સૌથી ઊંચું શિખર 'ગુરુ શિખર' (માઉન્ટ આબુ) છે.",
      "માઉન્ટ એવરેસ્ટને નેપાળમાં 'સાગરમાથા' કહેવાય છે (8848.86 મીટર).",
      "ભારતનું સૌથી ઊંચું શિખર K2 (ગોડવિન ઓસ્ટિન) છે, પરંતુ તે POK માં છે. સંપૂર્ણપણે ભારતમાં આવેલું સૌથી ઊંચું શિખર કાંચનજંઘા (સિક્કિમ) છે.",
      "માલવા ઉચ્ચપ્રદેશ અને દખ્ખણના ઉચ્ચપ્રદેશને નર્મદા નદી અને વિંધ્યાચલ શ્રેણી અલગ પાડે છે.",
      "પશ્ચિમ તટીય મેદાનોને મહારાષ્ટ્ર/ગોવામાં કોંકણ તટ અને કેરળમાં મલબાર તટ કહે છે.",
      "પૂર્વ તટીય મેદાનોને આંધ્રમાં ઉત્તરી સિરકાર અને તમિલનાડુમાં કોરોમંડલ તટ કહે છે.",
      "લક્ષદ્વીપ ટાપુઓ પરવાળા (Coral/Atoll) ના બનેલા છે, જ્યારે આંદામાન-નિકોબાર જવાળામુખી અને ડૂબેલા પર્વતોના શિખરો છે.",
      "10 ડિગ્રી ચેનલ આંદામાન અને નિકોબારને અલગ પાડે છે.",
      "પૂર્વાંચલ હિમાલયમાં પટકાઈ બુમ, નાગા હિલ્સ, મિઝો હિલ્સ અને ગારો-ખાસી-જયંતિયા (મેઘાલય) નો સમાવેશ થાય છે."
    ],
    mnemonics: "પર્વતમાળાઓ ઉત્તરથી દક્ષિણ: કાળા ઝાંઝર પીરને (Karakoram, Ladakh, Zaskar, Pir Panjal)"
  },
  {
    topic: "ભારતની નદીઓ (Rivers of India)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ભારતની નદીઓને મુખ્ય બે ભાગમાં વહેંચવામાં આવે છે: હિમાલયની નદીઓ (બારમાસી) અને દ્વીપકલ્પીય નદીઓ (મોસમી). ગંગા ભારતની સૌથી લાંબી નદી છે. દક્ષિણની નદીઓ મુખ્યત્વે પશ્ચિમ ઘાટમાંથી નીકળીને બંગાળની ખાડીમાં મળે છે, સિવાય કે નર્મદા અને તાપી જે પશ્ચિમ તરફ વહે છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 મુખ્ય નદીઓ અને તેમની માહિતી:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">નદી</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદગમ સ્થાન</th>
            <th style="padding: 10px; border: 1px solid var(--border);">લંબાઈ (ભારતમાં)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા / સહાયક નદીઓ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગંગા</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ગંગોત્રી ગ્લેશિયર (ઉત્તરાખંડ)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">2525 કિ.મી.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">યમુના સૌથી મોટી સહાયક. બાંગ્લાદેશમાં 'પદ્મા' કહેવાય છે.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સિંધુ (Indus)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">માનસરોવર પાસે (તિબેટ)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">~1114 કિ.મી (ભારતમાં)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">જેલમ, ચિનાબ, રાવી, બિયાસ, સતલજ. અરબ સાગરમાં મળે.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">બ્રહ્મપુત્ર</td>
            <td style="padding: 10px; border: 1px solid var(--border);">માનસરોવર (ચેમાયુંગડુંગ)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">~916 કિ.મી (ભારતમાં)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">તિબેટમાં 'સાંગપો', બાંગ્લાદેશમાં 'જમુના'. સૌથી મોટી નદી (કદમાં).</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગોદાવરી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ત્ર્યંબકેશ્વર (નાસિક, મહારાષ્ટ્ર)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">1465 કિ.મી.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">'દક્ષિણની ગંગા' અથવા 'વૃદ્ધ ગંગા'. દક્ષિણ ભારતની સૌથી લાંબી.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">નર્મદા</td>
            <td style="padding: 10px; border: 1px solid var(--border);">અમરકંટક (MP)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">1312 કિ.મી.</td>
            <td style="padding: 10px; border: 1px solid var(--border);">પશ્ચિમ તરફ વહેતી સૌથી લાંબી નદી, ખીણપ્રદેશ(Rift Valley)માંથી વહે છે.</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પંચ પ્રયાગ (ઉત્તરાખંડ): <br>
        અલકનંદા + ધૌલીગંગા = વિષ્ણુપ્રયાગ<br>
        અલકનંદા + નંદાકિની = નંદપ્રયાગ<br>
        અલકનંદા + પિંડાર = કર્ણપ્રયાગ<br>
        અલકનંદા + મંદાકિની = રૂદ્રપ્રયાગ<br>
        અલકનંદા + ભાગીરથી = દેવપ્રયાગ (અહીંથી તે ગંગા કહેવાય છે)
      </div>
    </div>`,
    keyPoints: [
      "વિશ્વનો સૌથી મોટો નદી ટાપુ 'માજુલી' (Majuli) બ્રહ્મપુત્ર નદી પર આસામમાં આવેલો છે.",
      "લૂણી નદી (રાજસ્થાન) એ અંતઃસ્થ નદી છે જે કચ્છના રણમાં સમાઈ જાય છે.",
      "નર્મદા અને તાપી નદીઓ ડેલ્ટા (મુખત્રિકોણ પ્રદેશ) બનાવતી નથી, પરંતુ એસ્ચ્યુરી (Estuary - ખાડી) બનાવે છે.",
      "દામોદર નદીને 'બંગાળનો શોક' (Sorrow of Bengal) અને કોસી નદીને 'બિહારનો શોક' કહેવાતી.",
      "કાવેરી નદીને દક્ષિણ ભારતની પવિત્રતાને કારણે દક્ષિણની ગંગા પણ કહે છે (ગોદાવરી લંબાઈના કારણે).",
      "શિવસમુદ્રમ ધોધ કાવેરી નદી પર અને જોગનો ધોધ (શરાવતી નદી) કર્ણાટકમાં છે.",
      "ભાખરા-નાંગલ ડેમ સતલજ નદી પર, હીરાકુંડ ડેમ મહાનદી (ઓડિશા - સૌથી લાંબો) પર અને સરદાર સરોવર ડેમ નર્મદા પર છે.",
      "તેહરી ડેમ (ભાગીરથી નદી, ઉત્તરાખંડ) ભારતનો સૌથી ઊંચો ડેમ છે.",
      "ગંગા અને બ્રહ્મપુત્ર મળીને વિશ્વનો સૌથી મોટો ડેલ્ટા 'સુંદરવન' (Sundarbans) બનાવે છે.",
      "મહી નદી કર્કવૃત્તને બે વાર ઓળંગે છે."
    ],
    mnemonics: "પશ્ચિમ તરફ વહેતી નદીઓ: સમાનતા (સાબરમતી, મહી, નર્મદા, તાપી)"
  },
  {
    topic: "ભારતની જમીન અને ખેતી (Soils & Agriculture)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ICAR (Indian Council of Agricultural Research) દ્વારા ભારતની જમીનને 8 મુખ્ય પ્રકારોમાં વહેંચવામાં આવી છે. ભારતમાં સૌથી વધુ કાંપના મેદાનોની જમીન (Alluvial Soil) જોવા મળે છે. ભારતની 50% થી વધુ વસ્તી ખેતી પર નિર્ભર છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 જમીનના પ્રકારો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">જમીનનો પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિસ્તાર (%)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા અને પાક</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કાંપની જમીન (Alluvial)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">~43%</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સૌથી ફળદ્રુપ. પોટાશ વધુ. ઘઉં, ડાંગર, શેરડી માટે ઉત્તમ.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કાળી જમીન (Black/Regur)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">~15%</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બેસાલ્ટના ખડકોથી બનેલી. ભેજ જાળવવાની ક્ષમતા વધુ. કપાસ માટે ઉત્તમ.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">રાતી/લાલ જમીન (Red)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">~18%</td>
            <td style="padding: 10px; border: 1px solid var(--border);">આયર્ન ઓક્સાઈડના કારણે લાલ રંગ. બાજરી, કઠોળ, મગફળી.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પડખાઉ/લેટેરાઈટ જમીન</td>
            <td style="padding: 10px; border: 1px solid var(--border);">~4%</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વધુ વરસાદવાળા વિસ્તારમાં (ધોવાણથી બને). ચા, કોફી, કાજુ, રબર માટે.</td>
          </tr>
        </tbody>
      </table>

      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 પાકની ઋતુઓ:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">ઋતુ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સમયગાળો</th>
            <th style="padding: 10px; border: 1px solid var(--border);">મુખ્ય પાકો</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ખરીફ પાક (ચોમાસુ)</td><td style="padding: 10px; border: 1px solid var(--border);">જૂન-જુલાઈ થી ઓક્ટોબર</td><td style="padding: 10px; border: 1px solid var(--border);">ડાંગર, કપાસ, મગફળી, બાજરી, મકાઈ, સોયાબીન</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">રવિ પાક (શિયાળુ)</td><td style="padding: 10px; border: 1px solid var(--border);">નવેમ્બર થી માર્ચ-એપ્રિલ</td><td style="padding: 10px; border: 1px solid var(--border);">ઘઉં, ચણા, સરસવ, જવ, જીરું</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">જાયદ પાક (ઉનાળુ)</td><td style="padding: 10px; border: 1px solid var(--border);">માર્ચ થી જૂન</td><td style="padding: 10px; border: 1px solid var(--border);">તરબૂચ, ટેટી, શાકભાજી, કાકડી</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        હરિયાળી ક્રાંતિ (Green Revolution - 1960s) ના ભારતીય પિતા એમ. એસ. સ્વામીનાથન છે (વિશ્વમાં નોર્મન બોરલોગ). શ્વેત ક્રાંતિ (White Revolution/Operation Flood) ના પિતા ડો. વર્ગીસ કુરિયન છે (દૂધ ઉત્પાદન).
      </div>
    </div>`,
    keyPoints: [
      "કાળી જમીન પોતાની જાતે ખેડાતી જમીન (Self-ploughing soil) કહેવાય છે કારણ કે સુકાય ત્યારે તેમાં તિરાડો પડે છે.",
      "ભારત ડાંગર, ઘઉં અને શેરડીના ઉત્પાદનમાં ચીન પછી વિશ્વમાં બીજા ક્રમે છે.",
      "ચા ના ઉત્પાદનમાં આસામ, કોફીમાં કર્ણાટક, રબરમાં કેરળ અને શણ (Jute) ના ઉત્પાદનમાં પશ્ચિમ બંગાળ પ્રથમ ક્રમે છે.",
      "શેરડી અને ઘઉંમાં ઉત્તર પ્રદેશ, મગફળી અને કપાસમાં ગુજરાત પ્રથમ ક્રમે છે.",
      "પીળી ક્રાંતિ (Yellow) - તેલીબિયાં, ભૂરી ક્રાંતિ (Blue) - મત્સ્ય ઉદ્યોગ, ગુલાબી ક્રાંતિ (Pink) - ઝીંગા/ડુંગળી.",
      "ગોળ ક્રાંતિ (Round) - બટાકા, લાલ ક્રાંતિ (Red) - ટામેટા/માંસ, સિલ્વર ક્રાંતિ (Silver) - ઈંડા.",
      "ઝૂમ ખેતી (Shifting Cultivation) ઉત્તર-પૂર્વ ભારતમાં જોવા મળે છે, જેમાં જંગલ બાળીને ખેતી થાય છે.",
      "રેગુર (Regur) એ કાળી જમીનનું બીજું નામ છે.",
      "ભારત મસાલા, કઠોળ અને દૂધના ઉત્પાદનમાં વિશ્વમાં પ્રથમ ક્રમે છે.",
      "ચા ના પાક માટે ઢોળાવવાળી જમીન જરૂરી છે જેથી મૂળમાં પાણી ભરાઈ ન રહે."
    ],
    mnemonics: "ખરીફ પાકો: ખરાબ કમ (ખરીફ: ડાંગર, બાજરી, કપાસ, મગફળી)"
  },
  {
    topic: "ખનીજ સંપત્તિ (Minerals & Resources)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ભારત ખનીજ સંપત્તિથી સમૃદ્ધ દેશ છે. છોટા નાગપુરનો ઉચ્ચપ્રદેશ (ઝારખંડ, ઓડિશા) 'ભારતનો રૂર' (Ruhr of India) કહેવાય છે, કારણ કે અહીં સૌથી વધુ ખનીજો મળે છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 મુખ્ય ખનીજો અને ઉત્પાદક રાજ્યો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">ખનીજ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">મુખ્ય ખાણો/વિસ્તાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રથમ ક્રમનું રાજ્ય</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">લોખંડ (Iron Ore)</td><td style="padding: 10px; border: 1px solid var(--border);">મયુરભંજ, ક્યોંઝર, બૈલાદિલા</td><td style="padding: 10px; border: 1px solid var(--border);">ઓડિશા</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કોલસો (Coal)</td><td style="padding: 10px; border: 1px solid var(--border);">ઝરિયા, રાણીગંજ, બોકારો</td><td style="padding: 10px; border: 1px solid var(--border);">છત્તીસગઢ (ઉત્પાદન) / ઝારખંડ (અનામત)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">તાંબુ (Copper)</td><td style="padding: 10px; border: 1px solid var(--border);">ખેતડી (રાજસ્થાન), બાલાઘાટ</td><td style="padding: 10px; border: 1px solid var(--border);">મધ્યપ્રદેશ</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">બોક્સાઈટ (Bauxite)</td><td style="padding: 10px; border: 1px solid var(--border);">કોરાપુટ, કાલાહાંડી</td><td style="padding: 10px; border: 1px solid var(--border);">ઓડિશા</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સોનું (Gold)</td><td style="padding: 10px; border: 1px solid var(--border);">કોલાર (KGF), હુટ્ટી</td><td style="padding: 10px; border: 1px solid var(--border);">કર્ણાટક</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">હીરા (Diamond)</td><td style="padding: 10px; border: 1px solid var(--border);">પન્ના</td><td style="padding: 10px; border: 1px solid var(--border);">મધ્યપ્રદેશ</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">યુરેનિયમ (Uranium)</td><td style="padding: 10px; border: 1px solid var(--border);">જાદુગોડા, તુમાલપલ્લી</td><td style="padding: 10px; border: 1px solid var(--border);">આંધ્રપ્રદેશ (ઉત્પાદન) / ઝારખંડ (ખાણ)</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        કોલસાના 4 પ્રકાર છે: એન્થ્રેસાઈટ (સૌથી શ્રેષ્ઠ, 80-95% કાર્બન), બિટ્યુમિનસ (ભારતમાં સૌથી વધુ મળે), લિગ્નાઈટ (બ્રાઉન કોલસો - તમિલનાડુ અને ગુજરાતના પાનધ્રોમાં) અને પીટ (સૌથી હલકી કક્ષાનો).
      </div>
    </div>`,
    keyPoints: [
      "બોક્સાઈટમાંથી એલ્યુમિનિયમ મેળવવામાં આવે છે.",
      "અબરખ (Mica) ના ઉત્પાદનમાં આંધ્રપ્રદેશ પ્રથમ ક્રમે છે. ભારત વિશ્વમાં અબરખનું મોટું ઉત્પાદક છે. તે વિદ્યુત અવાહક છે.",
      "મોનોઝાઈટ રેતી (કેરળના કિનારે) માંથી થોરિયમ (Thorium) મળે છે, જે પરમાણુ ઊર્જા માટે અગત્યનું છે.",
      "બોમ્બે હાઈ (અરબ સાગર) એ ભારતનું સૌથી મોટું ખનીજ તેલ (Petroleum) ઉત્પાદક ક્ષેત્ર છે.",
      "અંકલેશ્વર ગુજરાતનું સૌથી જૂનું અને મોટું ખનીજ તેલ ક્ષેત્ર છે. ભારતમાં સૌથી જૂનો તેલ કૂવો 'ડિગ્બોઈ' (આસામ) માં ખોદાયો હતો.",
      "મેંગેનીઝના ઉત્પાદનમાં મધ્યપ્રદેશ અને ઓડિશા અગ્રેસર છે. મેંગેનીઝ લોખંડમાંથી સ્ટીલ બનાવવા વપરાય છે.",
      "રાજસ્થાનનું મકરાણા આરસપહાણ (Marble) માટે પ્રખ્યાત છે, જેમાંથી તાજમહેલ બન્યો છે.",
      "સીસું અને જસત (Lead and Zinc) જોડિયા ખનીજ કહેવાય છે. રાજસ્થાનની ઝાવરની ખાણ તેમાં પ્રખ્યાત છે.",
      "જિપ્સમ સિમેન્ટ ઉદ્યોગમાં વપરાય છે, રાજસ્થાન તેના ઉત્પાદનમાં પ્રથમ છે.",
      "સૌર ઉર્જા અને પવન ઉર્જા ઉત્પાદનમાં ગુજરાત અને રાજસ્થાન ટોચના રાજ્યો છે."
    ],
    mnemonics: "કોલસાના પ્રકાર ઉતરતા ક્રમમાં: A-B-L-P (Anthracite, Bituminous, Lignite, Peat)"
  },
  {
    topic: "વસ્તી (Population)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ભારતમાં દર 10 વર્ષે વસ્તી ગણતરી (Census) થાય છે. છેલ્લી સત્તાવાર વસ્તી ગણતરી 2011 માં થઈ હતી. ભારત હવે વસ્તીમાં વિશ્વમાં પ્રથમ ક્રમે છે (UN ના અંદાજ મુજબ).</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 વસ્તી ગણતરી 2011 ના મહત્વના આંકડા:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">વિગત</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ભારત સ્તરે</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ટોચનું રાજ્ય (સૌથી વધુ/સારી)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">તળિયાનું રાજ્ય (સૌથી ઓછી/ખરાબ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કુલ વસ્તી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">121 કરોડ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઉત્તર પ્રદેશ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સિક્કિમ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વસ્તી ગીચતા</td>
            <td style="padding: 10px; border: 1px solid var(--border);">382 વ્યક્તિ/ચો.કિમી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બિહાર (1106)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">અરુણાચલ પ્રદેશ (17)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સાક્ષરતા દર</td>
            <td style="padding: 10px; border: 1px solid var(--border);">74.04%</td>
            <td style="padding: 10px; border: 1px solid var(--border);">કેરળ (94%)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બિહાર (61.8%)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">જાતિ પ્રમાણ (Sex Ratio)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">943 (1000 પુરુષોએ સ્ત્રી)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">કેરળ (1084)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">હરિયાણા (879)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">શહેરીકરણ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">31.16%</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ગોવા (ટકાવારીમાં), મહારાષ્ટ્ર (સંખ્યા)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">હિમાચલ પ્રદેશ</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        1921 ના વર્ષને ભારતીય વસ્તી ગણતરીના ઇતિહાસમાં 'મહાન વિભાજક વર્ષ' (Year of Great Divide) કહેવાય છે, કારણ કે માત્ર આ દાયકામાં જ વસ્તીનો વૃદ્ધિ દર નકારાત્મક રહ્યો હતો.
      </div>
    </div>`,
    keyPoints: [
      "પ્રથમ વસ્તી ગણતરી 1872 માં લોર્ડ મેયોના સમયમાં થઈ હતી. નિયમિત દસ-વર્ષીય ગણતરી 1881 થી લોર્ડ રિપનના સમયમાં શરૂ થઈ.",
      "2011 ની વસ્તી ગણતરી સ્વતંત્ર ભારતની 7મી અને કુલ 15મી વસ્તી ગણતરી હતી.",
      "સૌથી વધુ SC (અનુસૂચિત જાતિ) વસ્તી ધરાવતું રાજ્ય ઉત્તર પ્રદેશ છે, અને ટકાવારીની દ્રષ્ટિએ પંજાબ છે.",
      "સૌથી વધુ ST (અનુસૂચિત જનજાતિ) વસ્તી ધરાવતું રાજ્ય મધ્યપ્રદેશ છે, અને ટકાવારીની દ્રષ્ટિએ મિઝોરમ છે.",
      "કેન્દ્રશાસિત પ્રદેશોમાં દિલ્હીની વસ્તી અને વસ્તી ગીચતા સૌથી વધુ છે.",
      "લક્ષદ્વીપમાં સાક્ષરતા દર કેન્દ્રશાસિત પ્રદેશોમાં સૌથી વધુ છે.",
      "ભારતમાં પુરુષ સાક્ષરતા 82.14% અને સ્ત્રી સાક્ષરતા 65.46% છે.",
      "વસ્તી ગીચતા એટલે 1 ચોરસ કિમી વિસ્તારમાં વસતા લોકોની સરેરાશ સંખ્યા.",
      "ડેમોગ્રાફિક ડિવિડન્ડ (Demographic Dividend) એટલે કામ કરતી ઉંમરના (15-59 વર્ષ) લોકોનું પ્રમાણ વધુ હોવું, જે ભારત માટે મોટો ફાયદો છે.",
      "મેઘાલયનો દશકીય વસ્તી વૃદ્ધિ દર (2001-2011) સૌથી વધુ હતો, જ્યારે નાગાલેન્ડનો નકારાત્મક હતો."
    ],
    mnemonics: "સાક્ષરતામાં ટોચના રાજ્યો: કેમ ગોવા (Kerala, Mizoram, Goa)"
  },
  {
    topic: "પરિવહન (Transport)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ભારતમાં પરિવહનના 4 મુખ્ય માધ્યમો છે: માર્ગ, રેલવે, જળ અને હવાઈ. ભારતનું સડક નેટવર્ક વિશ્વમાં બીજા ક્રમે છે. ભારતીય રેલવે વિશ્વનું ચોથું સૌથી મોટું નેટવર્ક છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 મુખ્ય રાષ્ટ્રીય જળમાર્ગો (National Waterways):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">જળમાર્ગ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">નદી / રૂટ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">લંબાઈ</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">NW - 1</td><td style="padding: 10px; border: 1px solid var(--border);">ગંગા (અલ્હાબાદ/પ્રયાગરાજ થી હલ્દિયા)</td><td style="padding: 10px; border: 1px solid var(--border);">1620 કિ.મી. (સૌથી લાંબો)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">NW - 2</td><td style="padding: 10px; border: 1px solid var(--border);">બ્રહ્મપુત્ર (સાદિયા થી ધુબરી)</td><td style="padding: 10px; border: 1px solid var(--border);">891 કિ.મી.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">NW - 3</td><td style="padding: 10px; border: 1px solid var(--border);">વેસ્ટ કોસ્ટ કેનાલ (કોલ્લમ થી કોટ્ટાપુરમ, કેરળ)</td><td style="padding: 10px; border: 1px solid var(--border);">205 કિ.મી.</td></tr>
        </tbody>
      </table>

      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 મહત્વના બંદરો (Ports):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">બંદર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">રાજ્ય</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કંડલા (દીનદયાળ)</td><td style="padding: 10px; border: 1px solid var(--border);">ગુજરાત</td><td style="padding: 10px; border: 1px solid var(--border);">ભરતી બંદર (Tidal port), કરમુક્ત વિસ્તાર (SEZ)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">મુંબઈ / JNPT</td><td style="padding: 10px; border: 1px solid var(--border);">મહારાષ્ટ્ર</td><td style="padding: 10px; border: 1px solid var(--border);">ભારતનું સૌથી મોટું કુદરતી / સૌથી મોટું કૃત્રિમ કન્ટેનર બંદર</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કોચી</td><td style="padding: 10px; border: 1px solid var(--border);">કેરળ</td><td style="padding: 10px; border: 1px solid var(--border);">અરબ સાગરની રાણી, મસાલાની નિકાસ</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિશાખાપટ્ટનમ</td><td style="padding: 10px; border: 1px solid var(--border);">આંધ્રપ્રદેશ</td><td style="padding: 10px; border: 1px solid var(--border);">ભારતનું સૌથી ઊંડું અને સુરક્ષિત બંદર (ડોલ્ફિન નોઝ પહાડી)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ચેન્નાઈ</td><td style="padding: 10px; border: 1px solid var(--border);">તમિલનાડુ</td><td style="padding: 10px; border: 1px solid var(--border);">સૌથી જૂનું કૃત્રિમ બંદર</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        સુવર્ણ ચતુર્ભુજ યોજના (Golden Quadrilateral) ભારતના 4 મહાનગરોને (દિલ્હી, મુંબઈ, ચેન્નાઈ, કોલકાતા) જોડે છે (5846 km). ઉત્તર-દક્ષિણ કોરિડોર શ્રીનગરને કન્યાકુમારીથી અને પૂર્વ-પશ્ચિમ કોરિડોર પોરબંદરને સિલચર (આસામ) થી જોડે છે. આ બંને કોરિડોર ઉત્તર પ્રદેશના 'ઝાંસી'માં એકબીજાને કાપે છે.
      </div>
    </div>`,
    keyPoints: [
      "ભારતમાં પહેલી ટ્રેન 16 એપ્રિલ 1853 ના રોજ મુંબઈ (બોરીબંદર) થી થાણે વચ્ચે (34 કિમી) ચાલી હતી (ડેલહાઉસીના સમયમાં).",
      "ભારતીય રેલવેને 18 ઝોનમાં વહેંચવામાં આવી છે. 18મો ઝોન 'સાઉથ કોસ્ટ રેલવે' (વિશાખાપટ્ટનમ) છે.",
      "NH-44 (જૂનો NH-7) ભારતનો સૌથી લાંબો નેશનલ હાઈવે છે (શ્રીનગર થી કન્યાકુમારી).",
      "NH-47A (વિલિંગ્ટન આઇલેન્ડ, કોચી) ભારતનો સૌથી ટૂંકો નેશનલ હાઈવે છે.",
      "માર્ગ પરિવહનમાં મહારાષ્ટ્ર સૌથી વધુ રસ્તાઓની લંબાઈ ધરાવે છે.",
      "સૌથી મોટો રેલવે પ્લેટફોર્મ હુબલી (કર્ણાટક) છે (પહેલા ગોરખપુર હતો).",
      "કોંકણ રેલવે મહારાષ્ટ્ર (રોહા) થી કર્ણાટક (મેંગલોર) સુધી જાય છે, જે એન્જિનિયરિંગનો અદભુત નમૂનો છે.",
      "ભારતમાં 13 મોટા બંદરો (Major Ports) છે, જેમાં તમિલનાડુ સૌથી વધુ (3) ધરાવે છે (ચેન્નાઈ, તુતીકોરીન, એન્નોર).",
      "ભારતમાં પ્રથમ એરલાઇન્સ 1911 માં અલ્હાબાદથી નૈની વચ્ચે ટપાલ સેવા માટે શરૂ થઈ હતી.",
      "પવનહંસ હેલિકોપ્ટર સેવા ઓઇલ કંપનીઓ (ONGC) અને પહાડી વિસ્તારોને સેવા આપે છે."
    ],
    mnemonics: "Golden Quadrilateral Cities: DMCC (Delhi, Mumbai, Chennai, Calcutta/Kolkata)"
  },
  {
    topic: "ગુજરાતનો ભૂગોળ (Gujarat Geography)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ગુજરાત પશ્ચિમ ભારતમાં આવેલું છે અને ભારતનો સૌથી લાંબો દરિયાકિનારો (1600 કિમી) ધરાવે છે. ગુજરાતના 33 જિલ્લાઓ છે. વિસ્તારની દ્રષ્ટિએ ગુજરાત ભારતમાં 5મો (5.96%) અને વસ્તીમાં 9મો ક્રમ ધરાવે છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ગુજરાતના મુખ્ય પ્રદેશો અને વિશેષતા:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રદેશ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સ્થાન / નદીઓ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા / પાક</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ચરોતર</td><td style="padding: 10px; border: 1px solid var(--border);">મહી અને વાત્રક વચ્ચે (ખેડા-આણંદ)</td><td style="padding: 10px; border: 1px solid var(--border);">સોનેરી પાનનો મુલક (તમાકુ માટે પ્રખ્યાત)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કાનમ</td><td style="padding: 10px; border: 1px solid var(--border);">નર્મદા અને ઢાઢર વચ્ચે (ભરૂચ)</td><td style="padding: 10px; border: 1px solid var(--border);">ઉત્તમ પ્રકારના કપાસ માટે જાણીતો</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ભાલ પ્રદેશ</td><td style="padding: 10px; border: 1px solid var(--border);">અમદાવાદ અને ભાવનગર વચ્ચે</td><td style="padding: 10px; border: 1px solid var(--border);">ભાલિયા ઘઉં (વરસાદ આધારિત)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વાગડ</td><td style="padding: 10px; border: 1px solid var(--border);">કચ્છના બે રણ વચ્ચેનો ભાગ</td><td style="padding: 10px; border: 1px solid var(--border);">ખેતી અને રબારી કોમ માટે જાણીતો</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઝાલાવાડ</td><td style="padding: 10px; border: 1px solid var(--border);">સુરેન્દ્રનગર જિલ્લો</td><td style="padding: 10px; border: 1px solid var(--border);">કપાસ અને કાળા પથ્થરો માટે</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        ગુજરાતમાંથી કર્કવૃત્ત ઉત્તર ભાગમાંથી 6 જિલ્લામાંથી પસાર થાય છે: કચ્છ, પાટણ, મહેસાણા, ગાંધીનગર, સાબરકાંઠા, અરવલ્લી. મહી નદી તેને બે વાર કાપે છે.
      </div>
    </div>`,
    keyPoints: [
      "ગુજરાતનું સૌથી ઊંચું શિખર ગોરખનાથ (1117 મીટર) ગિરનાર પર્વત પર જૂનાગઢમાં આવેલું છે.",
      "ગુજરાતની સૌથી મોટી નદી નર્મદા છે (ગુજરાતમાં લંબાઈ 160 કિમી), અને સૌથી લાંબી નદી સાબરમતી છે (ગુજરાતમાં 321 કિમી).",
      "તાપી એકમાત્ર એવી નદી છે જેનો જન્મદિવસ ઊજવાય છે.",
      "ગીર રાષ્ટ્રીય ઉદ્યાન એશિયાટિક સિંહો માટે વિશ્વમાં એકમાત્ર આશ્રયસ્થાન છે.",
      "ગુજરાત 3 રાજ્યો સાથે સરહદ ધરાવે છે: રાજસ્થાન (ઉત્તર-પૂર્વ), મધ્યપ્રદેશ (પૂર્વ), અને મહારાષ્ટ્ર (દક્ષિણ).",
      "ગુજરાત એક દેશ (પાકિસ્તાન) સાથે 512 કિમીની આંતરરાષ્ટ્રીય સરહદ ધરાવે છે.",
      "નળ સરોવર (અમદાવાદ-સુરેન્દ્રનગર) પક્ષી અભયારણ્ય અને ગુજરાતની પ્રથમ રામસર સાઇટ છે.",
      "ગુજરાતમાં કાળિયાર (Blackbuck) માટેનું રાષ્ટ્રીય ઉદ્યાન 'વેળાવદર' (ભાવનગર) માં છે.",
      "દરિયાઈ રાષ્ટ્રીય ઉદ્યાન (Marine NP) જામનગરના પીરોટન ટાપુઓ પાસે છે, જ્યાં પરવાળા (કોરલ) જોવા મળે છે.",
      "કચ્છનો અખાત અને ખંભાતનો અખાત - એમ બે અખાત ગુજરાત પાસે છે."
    ],
    mnemonics: "કર્કવૃત્ત પસાર થતા ગુજરાતના જિલ્લા: ક-પા-મ-ગાં-સા-અ (કચ્છ, પાટણ, મહેસાણા, ગાંધીનગર, સાબરકાંઠા, અરવલ્લી)"
  },
  {
    topic: "વિશ્વ ભૂગોળ (World Geography)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>પૃથ્વી પર 7 ખંડો અને 5 મહાસાગરો આવેલા છે. એશિયા સૌથી મોટો ખંડ છે અને પ્રશાંત મહાસાગર સૌથી મોટો મહાસાગર છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ખંડો અને તેમની વિશેષતા (વિસ્તાર મુજબ ઉતરતા ક્રમમાં):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">ખંડ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સૌથી લાંબી નદી</th>
            <th style="padding: 10px; border: 1px solid var(--border);">સૌથી ઊંચું શિખર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">એશિયા</td><td style="padding: 10px; border: 1px solid var(--border);">યાંગ્ત્ઝે (ચીન)</td><td style="padding: 10px; border: 1px solid var(--border);">માઉન્ટ એવરેસ્ટ</td><td style="padding: 10px; border: 1px solid var(--border);">વિશ્વની 60% વસ્તી અહીં છે.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">આફ્રિકા</td><td style="padding: 10px; border: 1px solid var(--border);">નાઇલ (વિશ્વની સૌથી લાંબી)</td><td style="padding: 10px; border: 1px solid var(--border);">માઉન્ટ કિલિમાંજારો</td><td style="padding: 10px; border: 1px solid var(--border);">અંધારિયો ખંડ. ત્રણેય વૃત્તો પસાર થાય છે.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઉત્તર અમેરિકા</td><td style="padding: 10px; border: 1px solid var(--border);">મિસિસિપી-મિસૌરી</td><td style="padding: 10px; border: 1px solid var(--border);">માઉન્ટ મેકકિન્લી (ડેનાલી)</td><td style="padding: 10px; border: 1px solid var(--border);">નવી દુનિયા. ગ્રાન્ડ કેન્યન અહીં છે.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">દક્ષિણ અમેરિકા</td><td style="padding: 10px; border: 1px solid var(--border);">એમેઝોન (સૌથી મોટી)</td><td style="padding: 10px; border: 1px solid var(--border);">એકોન્કાગુઆ</td><td style="padding: 10px; border: 1px solid var(--border);">એન્ડીઝ પર્વતમાળા (સૌથી લાંબી).</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">એન્ટાર્કટિકા</td><td style="padding: 10px; border: 1px solid var(--border);">ઓનિક્સ</td><td style="padding: 10px; border: 1px solid var(--border);">વિન્સન મેસિફ</td><td style="padding: 10px; border: 1px solid var(--border);">શ્વેત ખંડ, વિજ્ઞાન માટે સમર્પિત.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">યુરોપ</td><td style="padding: 10px; border: 1px solid var(--border);">વોલ્ગા</td><td style="padding: 10px; border: 1px solid var(--border);">માઉન્ટ એલ્બ્રુસ</td><td style="padding: 10px; border: 1px solid var(--border);">રણવિહોણો ખંડ.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઓસ્ટ્રેલિયા</td><td style="padding: 10px; border: 1px solid var(--border);">મરે-ડાર્લિંગ</td><td style="padding: 10px; border: 1px solid var(--border);">માઉન્ટ કોસિસ્કો</td><td style="padding: 10px; border: 1px solid var(--border);">દ્વીપીય ખંડ. ગ્રેટ બેરિયર રીફ અહીં છે.</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        મહાસાગરો (Oceans) નો ઉતરતો ક્રમ: Pacific (પ્રશાંત) > Atlantic (એટલાન્ટિક) > Indian (હિંદ) > Southern (દક્ષિણ/એન્ટાર્કટિક) > Arctic (આર્કટિક). ટૂંકમાં: PAISA
      </div>
    </div>`,
    keyPoints: [
      "પ્રશાંત મહાસાગરનો 'મરિયાના ટ્રેન્ચ' (Mariana Trench - 11022 મીટર) વિશ્વનો સૌથી ઊંડો ભાગ છે.",
      "એટલાન્ટિક મહાસાગરનો આકાર અંગ્રેજી અક્ષર 'S' જેવો છે, અને તે સૌથી વ્યસ્ત સમુદ્રી માર્ગ છે.",
      "વિશ્વનું સૌથી મોટું રણ 'સહારા' (આફ્રિકા) છે. એશિયાનું સૌથી મોટું રણ 'ગોબી' (ચીન-મંગોલિયા) છે.",
      "વિશ્વનું સૌથી મોટું મીઠા પાણીનું સરોવર 'સુપિરિયર' (North America) અને ખારા પાણીનું સરોવર 'કેસ્પિયન સમુદ્ર' છે.",
      "વિશ્વનું સૌથી ઊંડું સરોવર 'બૈકલ' (રશિયા) છે.",
      "જીબ્રાલ્ટરની સામુદ્રધુની (Strait of Gibraltar) એટલાન્ટિક મહાસાગર અને ભૂમધ્ય સમુદ્રને જોડે છે (યુરોપને આફ્રિકાથી અલગ કરે છે).",
      "સુએઝ નહેર ભૂમધ્ય સમુદ્ર અને રાતા સમુદ્રને (Red Sea) જોડે છે.",
      "પનામા નહેર પ્રશાંત મહાસાગર અને એટલાન્ટિક મહાસાગરને જોડે છે.",
      "ગ્રીનલેન્ડ વિશ્વનો સૌથી મોટો ટાપુ છે, જે ભૌગોલિક રીતે ઉત્તર અમેરિકામાં પણ રાજકીય રીતે ડેનમાર્ક હસ્તક છે.",
      "વિશ્વનો સૌથી ઊંચો જળધોધ 'એન્જલ ફોલ' (વેનેઝુએલા) છે."
    ],
    mnemonics: "મહાસાગરો: PAISA (Pacific, Atlantic, Indian, Southern, Arctic)"
  },
  {
    topic: "અક્ષાંશ-રેખાંશ (Latitude & Longitude)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>પૃથ્વીના ગોળા પર દોરેલી કાલ્પનિક આડી રેખાઓને અક્ષાંશ (Latitude) અને ઊભી રેખાઓને રેખાંશ (Longitude) કહે છે. અક્ષાંશ તાપમાન/આબોહવા નક્કી કરવામાં અને રેખાંશ સમય અને તારીખ નક્કી કરવામાં ઉપયોગી છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 મહત્વના અક્ષાંશ અને વૃત્તો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">વૃત્તનું નામ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ડિગ્રી (અક્ષાંશ)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વિષુવવૃત્ત (Equator)</td><td style="padding: 10px; border: 1px solid var(--border);">0°</td><td style="padding: 10px; border: 1px solid var(--border);">સૌથી મોટો અક્ષાંશ, પૃથ્વીના 2 સરખા ભાગ કરે.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કર્કવૃત્ત (Tropic of Cancer)</td><td style="padding: 10px; border: 1px solid var(--border);">23.5° ઉત્તર</td><td style="padding: 10px; border: 1px solid var(--border);">ભારતની મધ્યમાંથી પસાર થાય.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">મકરવૃત્ત (Tropic of Capricorn)</td><td style="padding: 10px; border: 1px solid var(--border);">23.5° દક્ષિણ</td><td style="padding: 10px; border: 1px solid var(--border);">ઓસ્ટ્રેલિયાની મધ્યમાંથી પસાર થાય.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">આર્કટિક વૃત્ત</td><td style="padding: 10px; border: 1px solid var(--border);">66.5° ઉત્તર</td><td style="padding: 10px; border: 1px solid var(--border);">ઉત્તર ધ્રુવ પ્રદેશની શરૂઆત.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">એન્ટાર્કટિક વૃત્ત</td><td style="padding: 10px; border: 1px solid var(--border);">66.5° દક્ષિણ</td><td style="padding: 10px; border: 1px solid var(--border);">દક્ષિણ ધ્રુવ પ્રદેશની શરૂઆત.</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        2 રેખાંશ વચ્ચે 4 મિનિટનો સમય તફાવત હોય છે (360 રેખાંશ * 4 મિનિટ = 1440 મિનિટ = 24 કલાક). ભારતનો પ્રમાણ સમય (82.5° E) ગ્રીનવિચ સમય (0°) કરતાં 5 કલાક 30 મિનિટ આગળ છે.
      </div>
    </div>`,
    keyPoints: [
      "કુલ અક્ષાંશની સંખ્યા 181 (90+90+1 વિષુવવૃત્ત) છે, પરંતુ રેખાઓ 179 છે (ધ્રુવો બિંદુ છે).",
      "કુલ રેખાંશની સંખ્યા 360 છે.",
      "બે અક્ષાંશ વચ્ચેનું સરેરાશ અંતર 111 કિ.મી. હોય છે.",
      "0° રેખાંશ ગ્રીનવિચ (લંડન) માંથી પસાર થાય છે, જેને પ્રાઇમ મેરિડીયન (GMT) કહે છે.",
      "180° રેખાંશને 'આંતરરાષ્ટ્રીય દિનાંતર રેખા' (International Date Line - IDL) કહે છે. આ રેખા વાંકીચૂંકી છે જેથી એક જ દેશમાં બે તારીખ ન થાય.",
      "પૃથ્વી પશ્ચિમથી પૂર્વ તરફ ફરે છે, તેથી પૂર્વ તરફ જતા સમય આગળ રહે છે અને પશ્ચિમમાં પાછળ રહે છે.",
      "IDL ઓળંગીને પૂર્વથી પશ્ચિમ જઈએ તો એક દિવસ ઉમેરવો પડે (લાભ થાય).",
      "ભારત ઉત્તર અક્ષાંશ અને પૂર્વ રેખાંશમાં આવેલો દેશ છે.",
      "21 જૂન ઉત્તર ગોળાર્ધમાં સૌથી લાંબો દિવસ (ઉનાળુ અયન) છે. 22 ડિસેમ્બર સૌથી ટૂંકો દિવસ (શિયાળુ અયન) છે.",
      "21 માર્ચ અને 23 સપ્ટેમ્બરના રોજ પૃથ્વી પર દિવસ અને રાત સરખા (12-12 કલાક) હોય છે, તેને 'વિષુવદિન' (Equinox) કહે છે."
    ],
    mnemonics: "અક્ષાંશ (Latitude) એટલે 'આડી' (Lati/Le-ti) રેખા, રેખાંશ (Longitude) એટલે 'લંબી/ઊભી' (Long) રેખા."
  },
  {
    topic: "ભારતના રાષ્ટ્રીય ઉદ્યાનો (National Parks & Wildlife)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>ભારતમાં જૈવવિવિધતાના રક્ષણ માટે નેશનલ પાર્ક, વાઇલ્ડલાઇફ સેન્ચ્યુરી અને બાયોસ્ફિયર રિઝર્વ આવેલા છે. વન્યજીવ સંરક્ષણ અધિનિયમ 1972 માં પસાર કરવામાં આવ્યો હતો.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 મહત્વના રાષ્ટ્રીય ઉદ્યાનો (National Parks):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">રાષ્ટ્રીય ઉદ્યાન</th>
            <th style="padding: 10px; border: 1px solid var(--border);">રાજ્ય</th>
            <th style="padding: 10px; border: 1px solid var(--border);">મુખ્ય પ્રાણી / વિશેષતા</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">જિમ કોર્બેટ (હેલી)</td><td style="padding: 10px; border: 1px solid var(--border);">ઉત્તરાખંડ</td><td style="padding: 10px; border: 1px solid var(--border);">ભારતનો પ્રથમ નેશનલ પાર્ક (1936), વાઘ માટે.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કાઝીરંગા</td><td style="padding: 10px; border: 1px solid var(--border);">આસામ</td><td style="padding: 10px; border: 1px solid var(--border);">એક શિંગી ગેંડા (One-horned Rhino).</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગીર નેશનલ પાર્ક</td><td style="padding: 10px; border: 1px solid var(--border);">ગુજરાત</td><td style="padding: 10px; border: 1px solid var(--border);">એશિયાટિક સિંહ (સમગ્ર એશિયામાં એકમાત્ર).</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સુંદરવન</td><td style="padding: 10px; border: 1px solid var(--border);">પશ્ચિમ બંગાળ</td><td style="padding: 10px; border: 1px solid var(--border);">રોયલ બંગાળ ટાઇગર અને મેન્ગ્રોવ જંગલો.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કેવલાદેવ (ઘાના)</td><td style="padding: 10px; border: 1px solid var(--border);">રાજસ્થાન</td><td style="padding: 10px; border: 1px solid var(--border);">યાયાવર પક્ષીઓ (સાયબેરિયન ક્રેન) માટે.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">હેમિસ (Hemis)</td><td style="padding: 10px; border: 1px solid var(--border);">લદ્દાખ</td><td style="padding: 10px; border: 1px solid var(--border);">ભારતનો સૌથી મોટો નેશનલ પાર્ક, સ્નો લેપર્ડ.</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પ્રોજેક્ટ ટાઇગર (1973) માં શરૂ કરાયો હતો. ભારતમાં સૌથી વધુ વાઘ મધ્યપ્રદેશ (Tiger State) માં છે. પ્રોજેક્ટ એલિફન્ટ 1992 માં શરૂ થયો હતો. 
      </div>
    </div>`,
    keyPoints: [
      "સૌથી વધુ નેશનલ પાર્ક મધ્યપ્રદેશ અને આંદામાન-નિકોબારમાં આવેલા છે.",
      "ભારતનો પ્રથમ દરિયાઈ રાષ્ટ્રીય ઉદ્યાન (Marine NP) ગુજરાતના જામનગરમાં (કચ્છના અખાતમાં) આવેલો છે.",
      "રામસર સંધિ (1971) વેટલેન્ડ્સ (આર્દ્રભૂમિ/દલદલીય જમીન) ના સંરક્ષણ માટે છે. ભારતમાં કુલ 75 થી વધુ રામસર સાઇટ્સ છે.",
      "ગુજરાતમાં 4 રામસર સાઇટ્સ છે: નળ સરોવર, થોળ, વાધવાણા અને ખીજડીયા.",
      "પેરિયાર નેશનલ પાર્ક (કેરળ) હાથીઓ માટે જાણીતો છે.",
      "કાન્હા, બાંધવગઢ અને પન્ના નેશનલ પાર્ક મધ્યપ્રદેશમાં આવેલા છે.",
      "રણથંભોર અને સરિસ્કા ટાઇગર રિઝર્વ રાજસ્થાનમાં છે.",
      "ભારતનું પ્રથમ બાયોસ્ફિયર રિઝર્વ 'નીલગીરી' (1986) છે.",
      "કંચનજંઘા (સિક્કિમ) ભારતનું એકમાત્ર 'મિશ્ર' વર્લ્ડ હેરિટેજ સાઇટ છે.",
      "સાઉથ બટન આઇલેન્ડ (આંદામાન) ભારતનો સૌથી નાનો નેશનલ પાર્ક છે."
    ],
    mnemonics: "પ્રોજેક્ટ વર્ષ: વાઘ (73), મગર (74), ગેંડો (87), હાથી (92)"
  },
  {
    topic: "આપત્તિ વ્યવસ્થાપન (Disaster Management)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આપત્તિ વ્યવસ્થાપન ધારો 2005 (Disaster Management Act 2005) હેઠળ રાષ્ટ્રીય સ્તરે NDMA, રાજ્ય સ્તરે SDMA અને જિલ્લા સ્તરે DDMA ની રચના કરવામાં આવી છે. આપત્તિના મુખ્ય બે પ્રકાર છે: કુદરતી (ભૂકંપ, વાવાઝોડું, પૂર) અને માનવસર્જિત (ઔદ્યોગિક અકસ્માત, આગ, આતંકવાદ).</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 મુખ્ય આપત્તિઓ અને તેમનો પ્રભાવિત વિસ્તાર:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">આપત્તિ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ભારતના સૌથી પ્રભાવિત વિસ્તારો</th>
            <th style="padding: 10px; border: 1px solid var(--border);">માપદંડ / સંસ્થા</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ભૂકંપ (Earthquake)</td><td style="padding: 10px; border: 1px solid var(--border);">હિમાલયનો પટ્ટો, ગુજરાત (કચ્છ), ઉત્તર-પૂર્વ</td><td style="padding: 10px; border: 1px solid var(--border);">Zone 2 થી 5 (Zone 5 સૌથી જોખમી)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પૂર (Flood)</td><td style="padding: 10px; border: 1px solid var(--border);">બિહાર (કોસી), આસામ (બ્રહ્મપુત્ર), યુપી</td><td style="padding: 10px; border: 1px solid var(--border);">CWC (Central Water Commission)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ચક્રવાત (Cyclone)</td><td style="padding: 10px; border: 1px solid var(--border);">ઓડિશા, આંધ્ર, બંગાળ, ગુજરાતનો કાંઠો</td><td style="padding: 10px; border: 1px solid var(--border);">IMD (Indian Meteorological Dept)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સુનામી (Tsunami)</td><td style="padding: 10px; border: 1px solid var(--border);">પૂર્વ કાંઠો (તમિલનાડુ), આંદામાન</td><td style="padding: 10px; border: 1px solid var(--border);">INCOIS (હૈદરાબાદ) ચેતવણી આપે છે.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ભૂસ્ખલન (Landslide)</td><td style="padding: 10px; border: 1px solid var(--border);">ઉત્તરાખંડ, હિમાચલ પ્રદેશ, પશ્ચિમ ઘાટ</td><td style="padding: 10px; border: 1px solid var(--border);">GSI (Geological Survey of India)</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        NDMA ના વડા (ચેરમેન) હંમેશા 'વડાપ્રધાન' હોય છે. SDMA ના વડા 'મુખ્યમંત્રી' અને DDMA ના વડા 'જિલ્લા કલેક્ટર' હોય છે. NDRF (National Disaster Response Force) ની રચના 2006 માં થઈ હતી.
      </div>
    </div>`,
    keyPoints: [
      "ગુજરાતમાં GSDMA (Gujarat State Disaster Management Authority) ની સ્થાપના 2001 ના કચ્છ ભૂકંપ પછી કરવામાં આવી હતી.",
      "ભારતનો 59% ભાગ ભૂકંપના જોખમ હેઠળ છે, ગુજરાતનો કચ્છ વિસ્તાર ઝોન-5 (સૌથી વધુ જોખમી) માં આવે છે.",
      "સુનામી (Tsunami) એ જાપાનીઝ શબ્દ છે, જેનો અર્થ 'બંદર પર આવતા મોટા મોજા' થાય છે. તે દરિયાની અંદર આવતા ભૂકંપના કારણે ઉદ્ભવે છે.",
      "ભોપાલ ગેસ કાંડ (1984) એ ભારતની સૌથી મોટી માનવસર્જિત ઔદ્યોગિક આપત્તિ હતી (મિથાઈલ આઇસોસાયનેટ ગેસ ગળતર).",
      "2004 માં હિંદ મહાસાગરમાં આવેલી સુનામીએ ભારત સહિત ઘણા દેશોમાં વિનાશ સર્જ્યો હતો.",
      "વાવાઝોડાને એટલાન્ટિકમાં હરિકેન (Hurricane), પ્રશાંતમાં ટાયફૂન (Typhoon) અને હિંદ મહાસાગરમાં ચક્રવાત (Cyclone) કહે છે.",
      "આપત્તિ વ્યવસ્થાપન ચક્રના 3 તબક્કા છે: આપત્તિ પૂર્વે (તૈયારી), આપત્તિ સમયે (રાહત/બચાવ), અને આપત્તિ બાદ (પુનર્વસન).",
      "ભારતમાં દુષ્કાળની ચેતવણી કૃષિ મંત્રાલય આપે છે.",
      "જંગલમાં લાગતી આગને 'દાવાનળ' (Wildfire) કહેવાય છે.",
      "આંતરરાષ્ટ્રીય સુનામી ચેતવણી કેન્દ્ર હવાઈ (USA) માં આવેલું છે."
    ],
    mnemonics: "NDMA = PM, SDMA = CM, DDMA = DM (District Magistrate/Collector)"
  }
];

if (typeof module !== 'undefined') {
  module.exports = { geographyData };
}
