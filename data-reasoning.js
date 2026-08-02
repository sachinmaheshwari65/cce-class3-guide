const reasoningData = [
  {
    topic: "કોડિંગ-ડીકોડિંગ (Coding-Decoding)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>કોડિંગ-ડીકોડિંગ એ તાર્કિક ક્ષમતા (Reasoning) નો સૌથી મહત્વપૂર્ણ અને સ્કોરિંગ વિષય છે. આમાં શબ્દો, અક્ષરો કે સંખ્યાઓને કોઈ ચોક્કસ નિયમ મુજબ બદલવામાં આવે છે અને તમારે એ નિયમ શોધીને જવાબ આપવાનો હોય છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 અક્ષરોનો ક્રમ (Alphabet Positions):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: center;">
            <th style="padding: 5px; border: 1px solid var(--border);">A-E</th>
            <th style="padding: 5px; border: 1px solid var(--border);">F-J</th>
            <th style="padding: 5px; border: 1px solid var(--border);">K-O</th>
            <th style="padding: 5px; border: 1px solid var(--border);">P-T</th>
            <th style="padding: 5px; border: 1px solid var(--border);">U-Z</th>
          </tr>
        </thead>
        <tbody>
          <tr style="text-align: center; font-weight: bold;">
            <td style="padding: 5px; border: 1px solid var(--border);">1-5</td>
            <td style="padding: 5px; border: 1px solid var(--border);">6-10</td>
            <td style="padding: 5px; border: 1px solid var(--border);">11-15</td>
            <td style="padding: 5px; border: 1px solid var(--border);">16-20</td>
            <td style="padding: 5px; border: 1px solid var(--border);">21-26</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">🚀 શોર્ટકટ ટ્રીક્સ:</strong><br>
        EJOTY શોર્ટકટનો ઉપયોગ કરો: E=5, J=10, O=15, T=20, Y=25. વિરોધી અક્ષરોનો સરવાળો હંમેશા 27 થાય છે (દા.ત. A(1)+Z(26)=27).
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પરીક્ષામાં રફ પેપરમાં સૌથી પહેલા A થી M સળંગ અને તેની નીચે N થી Z ઊલટા ક્રમમાં લખી લો. આનાથી Opposite Letters શોધવામાં અને ક્રમ ગણવામાં ખૂબ સરળતા રહેશે.
      </div>
    </div>`,
    keyPoints: [
      "Letter Shifting: દરેક અક્ષરમાં સમાન વધારો કે ઘટાડો (+1, -2, +3 વગેરે)",
      "Opposite Letter Coding: આપેલા શબ્દના અક્ષરોને તેના વિરોધી અક્ષરથી બદલવા.",
      "Number Coding: અક્ષરોના ક્રમનો સરવાળો કે ગુણાકાર કરીને કોડ બનાવવો.",
      "Symbol Coding: અક્ષરોને #, $, @, % જેવા પ્રતીકોથી દર્શાવવા.",
      "Condition Based Coding: જો સ્વર હોય તો આવો કોડ, વ્યંજન હોય તો આવો કોડ - એવા નિયમો.",
      "Word Replacement: 'લાલ' ને 'લીલો' કહેવાય, 'લીલા' ને 'પીળો' કહેવાય - તેવા પ્રશ્નો.",
      "Cross Pattern: શબ્દના અક્ષરોને ક્રોસમાં ગોઠવીને કોડિંગ કરવું.",
      "EJOTY શોર્ટકટ: 5, 10, 15, 20, 25 ક્રમાંકો યાદ રાખવા.",
      "CFILORUX શોર્ટકટ: 3 ના ઘડિયાળ મુજબ અક્ષરો યાદ રાખવા.",
      "અક્ષરોના ક્રમનો સરવાળો: BOY = 2+15+25 = 42"
    ],
    mnemonics: "EJOTY (5-10-15-20-25), વિરોધી અક્ષરો: AZad, BoY, CraX, DeW, EVening, FUr, G.T.Road, HighSchool, IndianRailways, JungleQueen, KanPur, LOve, MaN"
  },
  {
    topic: "રક્ત સંબંધ (Blood Relations)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>રક્ત સંબંધના પ્રશ્નો કુટુંબના સભ્યો વચ્ચેના સંબંધો પર આધારિત હોય છે. આ પ્રકારના પ્રશ્નો ઉકેલવા માટે ફેમિલી ટ્રી (Family Tree) બનાવવું સૌથી શ્રેષ્ઠ પદ્ધતિ છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 સંબંધોના પ્રતીકો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">વ્યક્તિ / સંબંધ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રતીક (Symbol)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પુરુષ (Male)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ચોરસ [ ] અથવા (+)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સ્ત્રી (Female)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વર્તુળ ( ) અથવા (-)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પતિ-પત્ની (Couple)</td>
            <td style="padding: 10px; border: 1px solid var(--border);"><==> બે બાજુ તીર</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ભાઈ-બહેન (Siblings)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">--- સીધી લીટી</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        'તેના ભાઈના પિતા' જેવા વાક્યોમાં હંમેશા પાછળથી શરૂઆત કરવી. પોતાની જાતને પ્રશ્નમાં મૂકીને વિચારવાથી જવાબ જલ્દી મળે છે.
      </div>
    </div>`,
    keyPoints: [
      "માતા-પિતાના ભાઈ-બહેન સાથેના સંબંધો સ્પષ્ટ કરો.",
      "દાદા/દાદી (Paternal) અને નાના/નાની (Maternal) નો ભેદ સમજો.",
      "ભાણિયો/ભત્રીજો (Nephew) અને ભાણી/ભત્રીજી (Niece) નો ઉપયોગ.",
      "Family Tree દોરતી વખતે પેઢીઓ (Generations) ને ઉપર-નીચે દર્શાવો.",
      "Coded blood relations (A + B એટલે A એ B ની માતા છે) માં ડાયાગ્રામ દોરીને ગણતરી કરો.",
      "નામ પરથી જાતિ (Male/Female) નક્કી ન કરવી, જ્યાં સુધી પ્રશ્નમાં સ્પષ્ટ ન હોય.",
      "પતિ-પત્નીના સંબંધને અલગથી દર્શાવો જેથી ભાઈ-બહેનમાં કન્ફ્યુઝન ન થાય.",
      "વ્યક્તિનો પરિચય આપતા પ્રશ્નોમાં પોઇન્ટિંગ (Pointing) પર ધ્યાન આપો.",
      "Only son (એકમાત્ર પુત્ર) એટલે દીકરીઓ હોઈ શકે, પણ પુત્ર એક જ હોય.",
      "સ્વયંની પેઢી, એક પેઢી ઉપર અને એક પેઢી નીચેનું માળખું યાદ રાખો."
    ],
    mnemonics: "પિતાની બાજુ = Paternal, માતાની બાજુ = Maternal (M for Mata/Maternal)"
  },
  {
    topic: "દિશા અને અંતર (Direction & Distance)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આ પ્રશ્નો વ્યક્તિ કઈ દિશામાં ચાલે છે અને કેટલું અંતર કાપે છે તેના પર છે. મૂળભૂત દિશાઓનું જ્ઞાન હોવું ખૂબ જરૂરી છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 દિશાઓ (Directions):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">મુખ્ય દિશાઓ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">પેટા દિશાઓ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઉત્તર (North) - ઉપર</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઈશાન (North-East) - ઉ + પૂ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">દક્ષિણ (South) - નીચે</td>
            <td style="padding: 10px; border: 1px solid var(--border);">અગ્નિ (South-East) - દ + પૂ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પૂર્વ (East) - જમણે</td>
            <td style="padding: 10px; border: 1px solid var(--border);">નૈઋત્ય (South-West) - દ + પ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પશ્ચિમ (West) - ડાબે</td>
            <td style="padding: 10px; border: 1px solid var(--border);">વાયવ્ય (North-West) - ઉ + પ</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        સવારે પડછાયો પશ્ચિમ દિશામાં અને સાંજે પડછાયો પૂર્વ દિશામાં પડે છે. બપોરે 12 વાગ્યે કોઈ પડછાયો પડતો નથી.
      </div>
    </div>`,
    keyPoints: [
      "હંમેશા પેપર પર ઉપરની બાજુને ઉત્તર દિશા માનો.",
      "જમણી બાજુ વળવું એટલે ઘડિયાળની દિશામાં (Clockwise) 90 ડિગ્રી વળવું.",
      "ડાબી બાજુ વળવું એટલે ઘડિયાળની વિરુદ્ધ દિશામાં (Anti-clockwise) 90 ડિગ્રી વળવું.",
      "લઘુત્તમ અંતર શોધવા માટે પાયથાગોરસ પ્રમેયનો ઉપયોગ: કર્ણ^2 = આધાર^2 + વેધ^2",
      "પડછાયાના પ્રશ્નોમાં સૂર્યની સ્થિતિ (સવાર-પૂર્વ, સાંજ-પશ્ચિમ) ધ્યાનમાં લો.",
      "4 વખત જમણે કે ડાબે વળવાથી વ્યક્તિ તેની મૂળ દિશામાં પાછો આવે છે.",
      "2 વખત જમણે કે ડાબે વળવાથી વ્યક્તિ તેની વિરુદ્ધ દિશામાં આવે છે.",
      "ડિગ્રીવાળા પ્રશ્નોમાં Clockwise અને Anti-clockwise નો સરવાળો-બાદબાકી કરો.",
      "પેટા-દિશાઓ (ઈશાન, અગ્નિ, નૈઋત્ય, વાયવ્ય) બરાબર યાદ રાખો.",
      "નકશા આધારિત પ્રશ્નોમાં A થી B ની દિશા અને B થી A ની દિશા અલગ હોય છે."
    ],
    mnemonics: "પેટા દિશાઓ યાદ રાખવાની ટ્રીક: ઈ-અ-નૈ-વા (ઈશાન, અગ્નિ, નૈઋત્ય, વાયવ્ય - ઘડિયાળની દિશામાં પૂર્વ-ઉત્તર થી શરૂ કરીને)"
  },
  {
    topic: "ક્રમ-વ્યવસ્થા (Ranking & Arrangement)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આ પ્રશ્નોમાં વ્યક્તિઓની હરોળમાં સ્થાન કે ક્રમ નક્કી કરવાનો હોય છે. કુલ વ્યક્તિઓ અથવા કોઈ ચોક્કસ વ્યક્તિનો ક્રમ શોધવાનો હોય છે.</p>
      
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">🚀 મુખ્ય સૂત્રો:</strong><br>
        1. કુલ વ્યક્તિઓ (Total) = (ડાબી બાજુથી ક્રમ + જમણી બાજુથી ક્રમ) - 1<br>
        2. ડાબેથી ક્રમ = કુલ વ્યક્તિઓ - જમણેથી ક્રમ + 1
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        જ્યારે બે વ્યક્તિઓ પોતાનું સ્થાન અદલ-બદલ કરે, ત્યારે એકનું નવું સ્થાન અને બીજાનું જૂનું સ્થાન નો સરવાળો કરી 1 બાદ કરવાથી કુલ સંખ્યા મળે છે.
      </div>
    </div>`,
    keyPoints: [
      "એક જ વ્યક્તિનો બંને બાજુથી ક્રમ આપ્યો હોય ત્યારે Total = L + R - 1.",
      "વચ્ચે બેઠેલા વ્યક્તિઓની સંખ્યા = મોટા ક્રમ - નાના ક્રમ - 1.",
      "ઓવરલેપિંગ કેસ: જો (L + R) > Total, તો વચ્ચે બેઠેલા = (L + R) - Total - 2.",
      "સામાન્ય કેસ: જો (L + R) < Total, તો વચ્ચે બેઠેલા = Total - (L + R).",
      "Maximum વ્યક્તિઓ = L + R + વચ્ચે બેઠેલા.",
      "Minimum વ્યક્તિઓ = L + R - વચ્ચે બેઠેલા - 2.",
      "સ્થાન બદલવાના પ્રશ્નોમાં નવા સ્થાનના આધારે ગણતરી કરો.",
      "વર્ગમાં ઉપરથી અને નીચેથી (Top and Bottom) ક્રમની ગણતરી પણ ડાબા-જમણા જેવી જ છે.",
      "તુલનાત્મક પ્રશ્નો (A, B કરતાં મોટો છે) માટે > અને < ચિહ્નોનો ઉપયોગ કરો.",
      "વધારે-ઓછું, ભારે-હલકું, ઊંચું-નીચું જેવા પ્રશ્નોમાં ઊભી લાઇન દોરીને વ્યક્તિઓને ગોઠવો."
    ],
    mnemonics: "T = L+R-1 (Telor-1), Overlap = Extra - 2"
  },
  {
    topic: "સંખ્યા શ્રેણી (Number Series)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>સંખ્યા શ્રેણીમાં આપેલી સંખ્યાઓ ચોક્કસ પેટર્ન (નિયમ) ફોલો કરે છે. તમારે આ પેટર્ન ઓળખીને ખૂટતી સંખ્યા શોધવાની હોય છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 સામાન્ય પેટર્ન:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">પેટર્નનો પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">તફાવત (Difference)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">2, 5, 8, 11, 14 (+3 નો વધારો)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">વર્ગ / ઘન (Square / Cube)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">1, 4, 9, 16, 25 (1^2, 2^2, 3^2...)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ગુણાકાર (Multiplication)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">2, 6, 18, 54 (*3 નો ગુણાકાર)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">અવિભાજ્ય સંખ્યા (Prime No)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">2, 3, 5, 7, 11, 13</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        જો શ્રેણી ધીમે ધીમે વધતી હોય તો સરવાળો (Difference) ચેક કરો, જો એકદમ ઝડપથી વધતી હોય તો ગુણાકાર કે વર્ગ/ઘન ચેક કરો. જો વધ-ઘટ થતી હોય તો Alternate series (એક મૂકીને એક) ચેક કરો.
      </div>
    </div>`,
    keyPoints: [
      "Step method: સંખ્યાઓ વચ્ચેનો તફાવત શોધો, અને જો પેટર્ન ન મળે તો તફાવતનો પણ તફાવત શોધો.",
      "n^2 + 1, n^2 - 1, n^3 + 1 જેવી પેટર્ન સામાન્ય છે (દા.ત. 2, 5, 10, 17).",
      "Decimal series: x0.5, x1, x1.5, x2 જેવી પેટર્ન પર ધ્યાન આપો.",
      "Fibonacci series: આગળની બે સંખ્યાનો સરવાળો ત્રીજી સંખ્યા બને (1, 1, 2, 3, 5, 8).",
      "Alternate series: ખરેખર બે શ્રેણીઓ ભેગી આપેલી હોય.",
      "Wrong number series: કઈ સંખ્યા પેટર્ન તોડે છે તે શોધવું.",
      "1 થી 30 ના વર્ગ અને 1 થી 15 ના ઘન મોઢે યાદ હોવા જોઈએ.",
      "અવિભાજ્ય સંખ્યાઓ (Prime numbers) ની શ્રેણી સીધી કે તફાવત તરીકે આવી શકે.",
      "અડધી થતી શ્રેણી (Division): /2, /3 જેવી પેટર્ન.",
      "સંખ્યાઓના અંકોનો સરવાળો પણ એક પેટર્ન હોઈ શકે છે."
    ],
    mnemonics: "શ્રેણી ઉકેલવાનો ક્રમ: Prime -> Square/Cube -> Multiply/Divide -> Addition/Subtraction"
  },
  {
    topic: "અક્ષર શ્રેણી (Alphabet/Letter Series)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>અક્ષર શ્રેણીમાં અંગ્રેજી મૂળાક્ષરો ચોક્કસ ક્રમમાં આગળ વધે છે. તેમાં એક, બે કે ત્રણ અક્ષરોના સમૂહ હોઈ શકે છે.</p>
      
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">🚀 પેટર્ન ઓળખવી:</strong><br>
        સતત અક્ષર શ્રેણી (Continuous Letter Series) જેમ કે a_b_a_b માં અક્ષરો ગણીને ગ્રુપ બનાવો. (દા.ત. 12 અક્ષર = 3 ના 4 ગ્રુપ અથવા 4 ના 3 ગ્રુપ)
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        જ્યારે બહુ-અક્ષરીય શ્રેણી હોય (જેમ કે ABC, EFG, IJK), ત્યારે દરેક સમૂહના પહેલા અક્ષરને બીજા સમૂહના પહેલા અક્ષર સાથે, બીજાને બીજા સાથે એમ સરખાવવું.
      </div>
    </div>`,
    keyPoints: [
      "અક્ષરોના ક્રમાંક (1-26) યાદ રાખો, આનાથી અક્ષર શ્રેણી સંખ્યા શ્રેણી જેવી જ બની જશે.",
      "Cyclic order: Z પછી પાછો A આવે છે તે નિયમ યાદ રાખો.",
      "સ્વર-વ્યંજન (Vowels-Consonants) આધારિત શ્રેણી આવી શકે.",
      "+2, +3, +4 વગેરે ક્રમિક વધારો સામાન્ય છે.",
      "-1, -2, -3 વગેરે રિવર્સ ઓર્ડર પણ હોઈ શકે છે.",
      "બે અક્ષરો વચ્ચેનો તફાવત ધીમે ધીમે વધતો હોય (દા.ત. +1, +2, +3).",
      "Alternate series: એક અક્ષર મૂકીને પેટર્ન ચાલતી હોય.",
      "અક્ષર અને સંખ્યા મિક્સ હોય (દા.ત. A1, C3, E5) ત્યારે બંને અલગ અલગ સોલ્વ કરો.",
      "Opposite letters ની જોડી વાળી શ્રેણી (AZ, BY, CX).",
      "સતત શ્રેણી (a b _ b a _ b) માં ઓપ્શન મૂકીને ચેક કરવું સૌથી સરળ રહે છે."
    ],
    mnemonics: "Numberize Letters = અક્ષરોને નંબરમાં ફેરવો અને પછી સોલ્વ કરો."
  },
  {
    topic: "સાદ્રશ્ય (Analogy)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>સાદ્રશ્ય એટલે સમાનતા. આમાં બે વસ્તુઓ વચ્ચેનો સંબંધ આપેલો હોય છે, અને તે જ સંબંધનો ઉપયોગ કરીને ત્રીજી વસ્તુ માટે ચોથી વસ્તુ શોધવાની હોય છે (A : B :: C : ?).</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 સાદ્રશ્યના પ્રકારો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">શબ્દ સાદ્રશ્ય</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ગુજરાત : ગાંધીનગર :: મહારાષ્ટ્ર : ? (જવાબ: મુંબઈ)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સંખ્યા સાદ્રશ્ય</td>
            <td style="padding: 10px; border: 1px solid var(--border);">5 : 25 :: 7 : ? (જવાબ: 49)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">અક્ષર સાદ્રશ્ય</td>
            <td style="padding: 10px; border: 1px solid var(--border);">CAT : DDY :: DOG : ?</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        સામાન્ય જ્ઞાન (GK) આધારિત પ્રશ્નો સૌથી વધુ આવે છે (જેમ કે દેશ-રાજધાની, માપન-એકમ, પ્રાણી-બચ્ચું વગેરે).
      </div>
    </div>`,
    keyPoints: [
      "દેશ અને ચલણ (દા.ત. ભારત : રૂપિયો :: જાપાન : યેન).",
      "માપન અને સાધન (દા.ત. તાપમાન : થર્મોમીટર).",
      "કાર્યકર અને કાર્યસ્થળ (દા.ત. ડૉક્ટર : હોસ્પિટલ).",
      "સમાનાર્થી અને વિરુદ્ધાર્થી શબ્દો.",
      "સંખ્યા સાદ્રશ્યમાં વર્ગ અને ઘન નો સંબંધ શોધો (x : x^2 અથવા x : x^3).",
      "x : x^2 + 1 પ્રકારના સંબંધો પણ આવી શકે.",
      "પ્રાણીઓ અને તેમના રહેઠાણ/અવાજ.",
      "વસ્તુ અને તેનો વર્ગ (દા.ત. ખુરશી : ફર્નિચર :: શર્ટ : કપડાં).",
      "વ્યવસાય અને સાધન (દા.ત. સુથાર : કરવત).",
      "અક્ષર સાદ્રશ્યમાં Coding-Decoding ના નિયમો જ લાગુ પડે છે."
    ],
    mnemonics: "સંબંધ શોધો, પછી લાગુ કરો (Find Relation -> Apply Relation)"
  },
  {
    topic: "વર્ગીકરણ (Classification/Odd One Out)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આમાં ચાર કે પાંચ વિકલ્પો આપેલા હોય છે. તેમાંથી એક સિવાયના બાકીના બધામાં કોઈ સમાનતા હોય છે. આપણે તે અલગ પડતો વિકલ્પ (Odd One Out) શોધવાનો હોય છે.</p>
      
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">🚀 વર્ગીકરણના પ્રકાર:</strong><br>
        1. શબ્દ આધારિત: ત્રણ શબ્દો એક કેટેગરીના હોય.<br>
        2. સંખ્યા આધારિત: ત્રણ સંખ્યાઓ અવિભાજ્ય, કે કોઈનો વર્ગ હોય.<br>
        3. અક્ષર આધારિત: ત્રણમાં અક્ષરોનો તફાવત સમાન હોય.
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        Odd One Out શોધતી વખતે એ કારણ પર ફોકસ ન કરો કે એક વિકલ્પ કેમ અલગ છે, પરંતુ એ કારણ પર ફોકસ કરો કે બાકીના ત્રણ વિકલ્પો કઈ રીતે સમાન છે!
      </div>
    </div>`,
    keyPoints: [
      "સંખ્યાઓમાં: બેકી-એકી (Even-Odd) સંખ્યાઓ.",
      "અવિભાજ્ય (Prime) અને વિભાજ્ય સંખ્યાઓ.",
      "કોઈ એક સંખ્યા સિવાય બાકીની બધી કોઈ ચોક્કસ સંખ્યાના ગુણક હોય (દા.ત. 3 વડે વિભાજ્ય).",
      "વર્ગ અને ઘનની સંખ્યાઓ.",
      "શબ્દોમાં: મહિનાઓના દિવસો (30 કે 31) ના આધારે અલગ તારવવા.",
      "ધાતુ અને અધાતુ.",
      "શાકાહારી અને માંસાહારી પ્રાણીઓ.",
      "અક્ષરોમાં: સ્વર (Vowel) અને વ્યંજન (Consonant).",
      "અક્ષરોના ક્રમ વચ્ચેનો તફાવત (દા.ત. AB, DE, GH માં +1 છે, પણ JK ન આપતા JM આપે તો તે અલગ છે).",
      "જ્ઞાનેન્દ્રિયો (આંખ, કાન, નાક) અને અન્ય અંગો."
    ],
    mnemonics: "સમાનતા શોધો, અલગ આપમેળે દેખાશે (Group the three, out the one)"
  },
  {
    topic: "ગાણિતિક ક્રિયાઓ (Mathematical Operations)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આ પ્રશ્નોમાં ગાણિતિક ચિહ્નો (જેમ કે +, -, *, /) ને અન્ય ચિહ્નો કે અક્ષરોથી બદલીને સમીકરણ સોલ્વ કરવાનું હોય છે.</p>
      
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">🚀 BODMAS નો નિયમ:</strong><br>
        B - Bracket (કૌંસ)<br>
        O - Of (નો, ની, નું, ના)<br>
        D - Division (ભાગાકાર)<br>
        M - Multiplication (ગુણાકાર)<br>
        A - Addition (સરવાળો)<br>
        S - Subtraction (બાદબાકી)
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        ચિહ્નો બદલવાના પ્રશ્નોમાં, સૌથી પહેલા ભાગાકાર (/) ના ચિહ્ન પર ધ્યાન આપો. જો આપેલી સંખ્યાઓનો પૂરેપૂરો ભાગાકાર ન થતો હોય (અને જવાબ પૂર્ણાંક હોય), તો તે વિકલ્પ ખોટો હોવાની શક્યતા વધુ છે.
      </div>
    </div>`,
    keyPoints: [
      "આપેલા નિર્દેશ મુજબ બધા જ ચિહ્નો બદલો અને નવું સમીકરણ લખો.",
      "ચિહ્નો બદલ્યા પછી હંમેશા ભાગુસબા (BODMAS) ના નિયમ મુજબ જ ગણતરી કરો.",
      "જો સમીકરણ સંતુલિત (Balance) કરવાનું હોય, તો ઓપ્શનમાંથી ચિહ્નો મૂકીને ચેક કરો.",
      "Inequality (અસમાનતા) પ્રશ્નો: >, <, =, >=, <= ના સંબંધો.",
      "Inequality માં, જો A > B અને B < C હોય, તો A અને C વચ્ચે કોઈ સંબંધ સ્થાપિત કરી શકાતો નથી (No Relation).",
      "માત્ર ડાયરેક્ટ રસ્તો (>, >=, =) હોય તો જ સંબંધ બને.",
      "ચિહ્નોને બદલે અક્ષરો આપ્યા હોય (દા.ત. P એટલે +, Q એટલે -), તો સમીકરણમાં મૂલ્ય મૂકો.",
      "ગણતરી કરતી વખતે નિશાનીઓની ભૂલ (પક્ષ બદલતા નિશાની બદલાય) ન થાય તેનું ધ્યાન રાખો.",
      "સૌથી પહેલા કૌંસ છોડો, પછી ભાગાકાર, ગુણાકાર, સરવાળો અને છેલ્લે બાદબાકી.",
      "ઝડપી ગણતરી માટે આશરા-પડતી કિંમત (Approximation) નો ઉપયોગ કરી ખોટા વિકલ્પો દૂર કરો."
    ],
    mnemonics: "ભાગુસબા (ભા-ગુ-સ-બા) = ભાગાકાર -> ગુણાકાર -> સરવાળો -> બાદબાકી"
  },
  {
    topic: "બેઠક વ્યવસ્થા (Seating Arrangement)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આમાં વ્યક્તિઓને સીધી હરોળમાં, વર્તુળમાં, ચોરસમાં કે લંબચોરસમાં બેસાડવાની ગોઠવણી કરવાની હોય છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 ડાબું-જમણું સમજવું:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">મુખની દિશા</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ડાબું (Left)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">જમણું (Right)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">ઉત્તર તરફ / કેન્દ્ર તરફ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">તમારો ડાબો હાથ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">તમારો જમણો હાથ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">દક્ષિણ તરફ / કેન્દ્રની બહાર</td>
            <td style="padding: 10px; border: 1px solid var(--border);">તમારો જમણો હાથ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">તમારો ડાબો હાથ</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        "A એ B ની જમણે બીજો છે, જે C ની ડાબે છે." આ વાક્યમાં "જે" (Who) શબ્દ હંમેશા તેની તરત પહેલા આવતા વ્યક્તિ (અહીં B) માટે વપરાય છે. "અને/તથા" (And) શબ્દ પહેલા વ્યક્તિ (અહીં A) માટે વપરાય છે.
      </div>
    </div>`,
    keyPoints: [
      "ગોળ ટેબલમાં કેન્દ્ર તરફ મુખ હોય તો ડાબે = Clockwise અને જમણે = Anti-clockwise.",
      "હંમેશા ચોક્કસ (Definite) માહિતીથી શરૂઆત કરો.",
      "જો એક કરતાં વધુ શક્યતાઓ (Possibilities) હોય, તો 2 આકૃતિઓ સાથે લઈને ચાલો.",
      "બંધ (Closed) આકૃતિમાં સામસામે બેઠેલા વ્યક્તિઓની માહિતી ઉપયોગી થાય છે.",
      "આસપાસ (Adjacent/Immediate neighbor) એટલે તરત ડાબે અથવા તરત જમણે.",
      "વિકર્ણ (Diagonally opposite) ચોરસ/લંબચોરસ ગોઠવણીમાં આવે છે.",
      "રેખીય હરોળ (Linear row) માં છેડાના સ્થાનો (Extreme ends) ની માહિતી પહેલા મૂકો.",
      "બે સમાંતર હરોળ વાળા પ્રશ્નોમાં સામસામે મુખ વાળી માહિતી સાચવીને મૂકો.",
      "Floor based પઝલમાં હંમેશા નીચેનો ફ્લોર 1 ગણો.",
      "જો ગોઠવણી ન થતી હોય તો છેલ્લે નકારાત્મક (Negative) માહિતી (કોણ ક્યાં નથી બેઠું) ચેક કરો."
    ],
    mnemonics: "શબ્દની રમત: \"જે\" (Who) = સેકન્ડ પર્સન, \"અને\" (And) = ફર્સ્ટ પર્સન"
  },
  {
    topic: "ઘન અને પાસા (Cube & Dice)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>પાસા (Dice) એ 3D આકૃતિ છે જેને 6 બાજુઓ હોય છે. આ પ્રશ્નોમાં પાસાની અલગ અલગ સ્થિતિઓ આપેલી હોય છે અને કોઈ એક બાજુની વિરુદ્ધ કયો અંક/ચિહ્ન હશે તે શોધવાનું હોય છે.</p>
      
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">🚀 પાસાના પ્રકાર:</strong><br>
        1. સ્ટાન્ડર્ડ પાસો (Standard Dice): કોઈપણ બે પાસપાસેની બાજુઓનો સરવાળો 7 ન હોય. આમાં વિરુદ્ધ બાજુઓનો સરવાળો હંમેશા 7 થાય છે. (1 ની સામે 6, 2 ની સામે 5, 3 ની સામે 4)<br>
        2. નોન-સ્ટાન્ડર્ડ પાસો (Ordinary Dice): કોઈપણ બે પાસપાસેની બાજુઓનો સરવાળો 7 હોય.
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        <b>એક સપાટી સમાન નિયમ (One Common Rule):</b> જ્યારે બે પાસામાં એક અંક સમાન હોય, ત્યારે તે સમાન અંકથી શરૂ કરીને ઘડિયાળની દિશામાં (Clockwise) ફરતા જે અંકો મળે તે એકબીજાની વિરુદ્ધ હોય છે.
      </div>
    </div>`,
    keyPoints: [
      "Two Common Rule: બે પાસામાં બે અંકો સમાન હોય, તો બાકી વધેલા ત્રીજા અંકો એકબીજાની વિરુદ્ધ હોય છે.",
      "પાસાને ખોલવો (Unfolded Dice): ખુલ્લા પાસામાં દરેક એકાંતરે આવતી (Alternate) સપાટી એકબીજાની વિરુદ્ધ હોય છે.",
      "પાસપાસેની સપાટીઓ ક્યારેય એકબીજાની વિરુદ્ધ હોઈ શકે નહીં.",
      "જો પાસા પર ચિહ્નો કે રંગ હોય, તો તે Standard dice નથી, સામાન્ય નિયમો (Common rule) જ વાપરવા.",
      "ઘનને રંગવો અને કાપવો (Painted Cube): કુલ ઘન = n^3 (જ્યાં n = મોટી બાજુ/નાની બાજુ).",
      "3 બાજુ રંગેલા ઘન (ખૂણા પર) = હંમેશા 8.",
      "2 બાજુ રંગેલા ઘન (ધાર પર) = 12(n-2).",
      "1 બાજુ રંગેલા ઘન (સપાટી પર) = 6(n-2)^2.",
      "રંગ વગરના ઘન (અંદર) = (n-2)^3.",
      "ખુલ્લા પાસામાંથી બંધ પાસો કયો બનશે? - વિરુદ્ધ સપાટીઓ એકસાથે દેખાઈ શકે નહીં."
    ],
    mnemonics: "Clockwise Rule: સમાન અંક પકડો, ગોળ ફરો (Find Common, Move Clockwise)"
  },
  {
    topic: "અરીસા-પાણી પ્રતિબિંબ (Mirror & Water Image)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>કોઈપણ આકૃતિ, અક્ષરો કે સંખ્યાઓને અરીસામાં અથવા પાણીમાં જોતાં તે કેવા દેખાશે તે શોધવાના પ્રશ્નો આવે છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 મુખ્ય નિયમો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">પ્રતિબિંબનો પ્રકાર</th>
            <th style="padding: 10px; border: 1px solid var(--border);">શું બદલાય?</th>
            <th style="padding: 10px; border: 1px solid var(--border);">શું ન બદલાય?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">અરીસાનું પ્રતિબિંબ (Mirror)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ડાબું <-> જમણું (Left-Right)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઉપર-નીચે (Top-Bottom)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">પાણીનું પ્રતિબિંબ (Water)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ઉપર <-> નીચે (Top-Bottom)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">ડાબું-જમણું (Left-Right)</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        જો તમને અરીસા કે પાણીનું પ્રતિબિંબ મગજમાં ન આવતું હોય, તો રફ પેપર પર પેનથી થોડું ડાર્ક લખો, પછી પેપર પાછળ ફેરવીને જોશો તો અરીસાનું પ્રતિબિંબ દેખાશે, અને પેપર ઊલટું (Upside down) કરીને જોશો તો પાણીનું પ્રતિબિંબ દેખાશે!
      </div>
    </div>`,
    keyPoints: [
      "અરીસામાં જે વસ્તુ નજીક છે તે પ્રતિબિંબમાં પણ નજીક જ રહે છે.",
      "અમુક મૂળાક્ષરો અરીસામાં બદલાતા નથી: A, H, I, M, O, T, U, V, W, X, Y.",
      "અમુક મૂળાક્ષરો પાણીમાં બદલાતા નથી: C, D, E, H, I, K, O, X.",
      "ઘડિયાળનું અરીસાનું સમય શોધવા: આપેલા સમયને 11:60 માંથી બાદ કરો.",
      "(દા.ત. 3:15 નો મિરર ટાઈમ -> 11:60 - 3:15 = 8:45).",
      "જો સમય 11 થી 1 ની વચ્ચે હોય તો 23:60 માંથી બાદ કરો.",
      "ઘડિયાળનું પાણીનું સમય શોધવા: આપેલા સમયને 18:30 (કે 17:90) માંથી બાદ કરો.",
      "(દા.ત. 8:20 નો વોટર ટાઈમ -> 18:30 - 8:20 = 10:10).",
      "આકૃતિ વાળા પ્રશ્નોમાં વિકલ્પો દૂર (Eliminate) કરવાની પદ્ધતિ શ્રેષ્ઠ છે.",
      "તીર (Arrow) કે અન્ય નાની નિશાનીઓ પર ધ્યાન આપીને ખોટા વિકલ્પો દૂર કરો."
    ],
    mnemonics: "Mirror = Left/Right બદલો, Water = Top/Bottom બદલો"
  },
  {
    topic: "કાગળ ફોલ્ડિંગ-કટિંગ (Paper Folding & Cutting)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આ પ્રશ્નોમાં કાગળને કોઈ ચોક્કસ રીતે વાળીને (Fold) તેમાં કાપ (Cut) કે કાણું (Punch) પાડવામાં આવે છે. કાગળ ખોલ્યા પછી કેવો દેખાશે તે શોધવાનું હોય છે.</p>
      
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">🚀 સોલ્વ કરવાની રીત:</strong><br>
        કાગળ ખોલવાની ક્રિયા એ <b>અરીસાના પ્રતિબિંબ (Mirror Image)</b> જેવી જ છે. જે છેલ્લો ફોલ્ડ હોય તેને અરીસો માનીને પ્રતિબિંબ બનાવો. ડાબે-જમણે ખુલે તો અરીસાનો નિયમ, ઉપર-નીચે ખુલે તો પાણીનો નિયમ લાગુ પડે.
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        બધા જ ભાગ (Quarters) ખોલવાને બદલે માત્ર એક જ ભાગના કટ્સ (Cuts) ને ઓપ્શન સાથે સરખાવો. સાચા જવાબમાં તે ચોક્કસ કટ પોતાની મૂળ સ્થિતિમાં હોવો જ જોઈએ.
      </div>
    </div>`,
    keyPoints: [
      "કાગળ જે ક્રમમાં વાળ્યો હોય તેનાથી ઊલટા ક્રમમાં ખોલવો.",
      "પારદર્શક કાગળ (Transparent Paper) ને વાળવાના પ્રશ્નોમાં આકૃતિઓ ઓવરલેપ (એકબીજા પર) થાય છે.",
      "સિમેટ્રી (Symmetry) નો સિદ્ધાંત: કાપ્યા પછી કાગળ સંમિતિ ધરાવતો હોય છે.",
      "જો 2 વાર વાળ્યો હોય (4 પડ), તો 1 કાણું ખોલવા પર 4 કાણાં બનશે.",
      "જો ત્રિકોણાકારમાં કાગળ વાળ્યો હોય, તો કર્ણ (Diagonal) પર અરીસો મૂકીને પ્રતિબિંબ વિચારો.",
      "ખૂણા (Corner) પર મારેલો કાપ હંમેશા કાગળની ધાર (Edge) પર જ રહેશે.",
      "વચ્ચે (Center) મારેલો કાપ ખોલ્યા પછી પણ વચ્ચે જ રહેશે.",
      "આકૃતિની દિશા અને એન્ગલ (Orientation) પર ધ્યાન આપો.",
      "ગોળાકાર કાગળને વાળવાના પ્રશ્નોમાં સેક્ટર (Sector) મુજબ પ્રતિબિંબ પડે છે.",
      "વિકલ્પોને જલ્દી દૂર (Elimination method) કરવાથી સમય બચે છે."
    ],
    mnemonics: "Fold ની લાઈન = અરીસો (Fold line is the Mirror)"
  },
  {
    topic: "વેન ડાયાગ્રામ (Venn Diagram)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આપેલા શબ્દો કે વર્ગો વચ્ચેનો તાર્કિક સંબંધ ભૌમિતિક આકૃતિઓ (સામાન્ય રીતે વર્તુળો) દ્વારા દર્શાવવાની રીત છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 મુખ્ય 3 સંબંધો:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">સંબંધ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">ઉદાહરણ</th>
            <th style="padding: 10px; border: 1px solid var(--border);">આકૃતિનો પ્રકાર</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">બધા (All)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">સફરજન, ફળ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">એક વર્તુળની અંદર બીજું વર્તુળ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કેટલાક (Some)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">શિક્ષકો, લેખકો</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બે વર્તુળો એકબીજાને છેદતા હોય</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">કોઈ નહીં (No)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">કુતરો, બિલાડી</td>
            <td style="padding: 10px; border: 1px solid var(--border);">બે અલગ અલગ વર્તુળો</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        શબ્દો વચ્ચેનો સંબંધ વાસ્તવિક જીવન પર આધારિત હોય છે. (દા.ત. પિતા, પુરુષ, વકીલ -> બધા પિતા પુરુષ હોય છે (ALL), પણ કેટલાક પિતા વકીલ હોય છે (SOME)).
      </div>
    </div>`,
    keyPoints: [
      "આપેલા 3 શબ્દોમાંથી પહેલા બે શબ્દો વચ્ચે સંબંધ નક્કી કરો.",
      "પછી ત્રીજા શબ્દનો સંબંધ પહેલા બે સાથે ચકાસો.",
      "રાજ્ય, દેશ, ખંડ જેવા પ્રશ્નોમાં Concentric Circles (એકની અંદર એક) આવે છે.",
      "માતા, સ્ત્રી, ડૉક્ટર: બધી માતા સ્ત્રી છે (All), કેટલીક માતા ડૉક્ટર છે (Some), કેટલીક સ્ત્રી ડૉક્ટર છે (Some).",
      "જ્યારે ડાયાગ્રામ આપેલો હોય અને સંખ્યા શોધવાની હોય: ફક્ત એક આકૃતિમાં આવતો ભાગ એટલે \"Only\".",
      "બે આકૃતિઓનો છેદતો ભાગ (Intersection) એટલે \"Both\".",
      "ત્રણેય આકૃતિઓનો સામાન્ય ભાગ એટલે \"All three\".",
      "\"નથી\" (Not) શબ્દ આપ્યો હોય, ત્યારે તે આકૃતિના ભાગની સંખ્યા ગણતરીમાં લેવી નહીં.",
      "વ્યવસાયો સામાન્ય રીતે Some સંબંધ ધરાવે છે (દા.ત. ગાયક અને નર્તક).",
      "પ્રાણીઓની જાતિઓ સામાન્ય રીતે No સંબંધ ધરાવે છે (જો બંને અલગ હોય)."
    ],
    mnemonics: "All = અંદર, Some = છેદન, No = અલગ (All-In, Some-Cross, No-Out)"
  },
  {
    topic: "કથન-નિષ્કર્ષ (Statement & Conclusion / Syllogism)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આ પ્રશ્નોમાં અમુક કથનો (Statements) આપેલા હોય છે જે કદાચ વાસ્તવિકતાથી અલગ હોય (જેમ કે "બધા કુતરા બિલાડી છે"). તમારે તેને સત્ય માનીને નિષ્કર્ષ (Conclusion) કયા સાચા છે તે શોધવાનું છે. વેન ડાયાગ્રામ પદ્ધતિ સૌથી શ્રેષ્ઠ છે.</p>
      
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">🚀 4 મૂળભૂત કથનો:</strong><br>
        1. <b>બધા A, B છે (All A are B)</b> -> A નું વર્તુળ B ની અંદર.<br>
        2. <b>કેટલાક A, B છે (Some A are B)</b> -> A અને B ના વર્તુળો છેદતા હોય.<br>
        3. <b>કોઈ પણ A, B નથી (No A is B)</b> -> A અને B અલગ વર્તુળો, વચ્ચે ક્રોસ (X) ની નિશાની.<br>
        4. <b>કેટલાક A, B નથી (Some A are not B)</b> -> A નો થોડો ભાગ B નથી.
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        <b>Either-Or (અથવા) ની શરતો:</b><br>
        1. બંને નિષ્કર્ષ વ્યક્તિગત રીતે ખોટા હોવા જોઈએ.<br>
        2. બંને નિષ્કર્ષના શબ્દો સમાન હોવા જોઈએ (Subject & Predicate).<br>
        3. એક નિષ્કર્ષ હકારાત્મક (Some) અને બીજો નકારાત્મક (No/Some not) હોવો જોઈએ.
      </div>
    </div>`,
    keyPoints: [
      "વેન ડાયાગ્રામમાં જે સીધું દેખાતું હોય તે જ નિશ્ચિત (Definite) સાચું માનવું.",
      "જો બે વર્તુળો વચ્ચે કોઈ સીધો સંબંધ ન હોય, તો તેમના વિશેના બધા નિશ્ચિત નિષ્કર્ષ ખોટા પડે.",
      "Possibility (શક્યતા) વાળા નિષ્કર્ષ: જે વસ્તુ વિશે ખબર નથી, તેની શક્યતા સાચી પડે.",
      "જો કથન હકારાત્મક હોય, તો નિશ્ચિત નકારાત્મક નિષ્કર્ષ ખોટા પડે.",
      "બધા (All) સાચું હોય, ત્યાં કેટલાક (Some) હંમેશા સાચું જ પડે.",
      "બહારના વર્તુળથી અંદરના વર્તુળ તરફ જઈએ તો માત્ર Some સાચું પડે (Some B are A).",
      "અંદરના વર્તુળથી બહારના વર્તુળ તરફ જઈએ તો All અને Some બંને સાચા પડે.",
      "\"Only A is B\" એટલે \"All B is A\", અને B બીજા કોઈ સાથે સંબંધ રાખી શકે નહીં.",
      "\"Only a few A is B\" એટલે કેટલાક A, B છે અને કેટલાક A, B નથી (બંને સાથે).",
      "જો કથનમાં \"No A is B\" હોય, તો \"No B is A\" પણ સાચું પડે."
    ],
    mnemonics: "જો દેખાય તો જ સાચું (If you see it, it's true - for definite conclusions)"
  },
  {
    topic: "તારીખ-દિવસ-ઘડિયાળ (Date/Day/Clock Reasoning)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આમાં કેલેન્ડરના દિવસો શોધવા અને ઘડિયાળના કાંટા વચ્ચેનો ખૂણો શોધવાના પ્રશ્નો આવે છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 કેલેન્ડર - વધારાના દિવસો (Odd Days):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">સમયગાળો</th>
            <th style="padding: 10px; border: 1px solid var(--border);">વધારાના દિવસો (Odd Days)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">સામાન્ય વર્ષ (365 દિવસ)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">1 દિવસ (365 / 7 = 52 અઠવાડિયા + 1 દિવસ)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">લીપ વર્ષ (366 દિવસ)</td>
            <td style="padding: 10px; border: 1px solid var(--border);">2 દિવસ (366 / 7 = 52 અઠવાડિયા + 2 દિવસ)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">100 વર્ષ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">5 દિવસ</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">400 વર્ષ</td>
            <td style="padding: 10px; border: 1px solid var(--border);">0 દિવસ</td>
          </tr>
        </tbody>
      </table>

      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">🚀 ઘડિયાળનું સૂત્ર (Clock Angle Formula):</strong><br>
        મિનિટ અને કલાક કાંટા વચ્ચેનો ખૂણો: <b>θ = | 30H - 5.5M |</b><br>
        (જ્યાં H = કલાક, M = મિનિટ)
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        જો કોઈ તારીખ સામાન્ય વર્ષની હોય, તો આવતા વર્ષે તે જ તારીખે 1 દિવસ આગળ વધે. જો લીપ વર્ષ ક્રોસ થતું હોય (ફેબ્રુઆરી મહિનો), તો 2 દિવસ આગળ વધે.
      </div>
    </div>`,
    keyPoints: [
      "લીપ વર્ષ ચેક કરવા વર્ષને 4 વડે ભાગો. જો સદીનું વર્ષ હોય (દા.ત. 1900, 2000), તો 400 વડે ભાગો.",
      "મહિનાના વધારાના દિવસો: જાન્યુઆરી(3), ફેબ્રુઆરી(0/1), માર્ચ(3), એપ્રિલ(2), મે(3), જૂન(2)...",
      "0 = રવિ, 1 = સોમ, 2 = મંગળ, 3 = બુધ, 4 = ગુરુ, 5 = શુક્ર, 6 = શનિ (કોડ મુજબ).",
      "ઘડિયાળ: 1 મિનિટમાં મિનિટ કાંટો 6° ફરે છે.",
      "ઘડિયાળ: 1 મિનિટમાં કલાક કાંટો 0.5° ફરે છે.",
      "12 કલાકમાં કાંટા 11 વખત ભેગા (0°) થાય છે.",
      "12 કલાકમાં કાંટા 11 વખત સામસામે (180°) આવે છે.",
      "12 કલાકમાં કાંટા 22 વખત કાટખૂણે (90°) આવે છે.",
      "કોઈ પણ તારીખનો વાર શોધવા માટે Month code, Year code, Century code વાળી ટ્રીક વાપરી શકાય.",
      "રિપીટિંગ કેલેન્ડર: લીપ વર્ષ પછીનું પહેલું વર્ષ 6 વર્ષે રિપીટ થાય. બીજું/ત્રીજું વર્ષ 11 વર્ષે રિપીટ થાય. લીપ વર્ષ 28 વર્ષે રિપીટ થાય."
    ],
    mnemonics: "Leap + 28, Leap+1 + 6, Leap+2/+3 + 11 (Calendar repetition)"
  }
];

if (typeof module !== 'undefined') {
  module.exports = { reasoningData };
}
