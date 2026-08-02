const englishData = [
  {
    topic: "Parts of Speech (શબ્દ ભેદ)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>અંગ્રેજી ભાષામાં શબ્દોના કાર્ય અને ઉપયોગના આધારે તેમને 8 ભાગમાં વહેંચવામાં આવે છે, જેને Parts of Speech કહે છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 8 Parts of Speech:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Part of Speech</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Gujarati Meaning</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Function</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Noun</td><td style="padding: 10px; border: 1px solid var(--border);">નામ (સંજ્ઞા)</td><td style="padding: 10px; border: 1px solid var(--border);">વ્યક્તિ, વસ્તુ, સ્થળ કે ભાવનું નામ</td><td style="padding: 10px; border: 1px solid var(--border);">Ram, boy, gold, honesty</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Pronoun</td><td style="padding: 10px; border: 1px solid var(--border);">સર્વનામ</td><td style="padding: 10px; border: 1px solid var(--border);">નામના બદલે વપરાતો શબ્દ</td><td style="padding: 10px; border: 1px solid var(--border);">He, she, it, they</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Verb</td><td style="padding: 10px; border: 1px solid var(--border);">ક્રિયાપદ</td><td style="padding: 10px; border: 1px solid var(--border);">ક્રિયા દર્શાવે છે</td><td style="padding: 10px; border: 1px solid var(--border);">Play, write, is, am</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Adjective</td><td style="padding: 10px; border: 1px solid var(--border);">વિશેષણ</td><td style="padding: 10px; border: 1px solid var(--border);">નામના અર્થમાં વધારો કરે</td><td style="padding: 10px; border: 1px solid var(--border);">Good, big, red</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Adverb</td><td style="padding: 10px; border: 1px solid var(--border);">ક્રિયા વિશેષણ</td><td style="padding: 10px; border: 1px solid var(--border);">ક્રિયાપદ, વિશેષણના અર્થમાં વધારો</td><td style="padding: 10px; border: 1px solid var(--border);">Fast, very, quickly</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Preposition</td><td style="padding: 10px; border: 1px solid var(--border);">નામયોગી અવ્યય</td><td style="padding: 10px; border: 1px solid var(--border);">નામ/સર્વનામનો સંબંધ દર્શાવે</td><td style="padding: 10px; border: 1px solid var(--border);">In, on, at, by</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Conjunction</td><td style="padding: 10px; border: 1px solid var(--border);">સંયોજક</td><td style="padding: 10px; border: 1px solid var(--border);">બે શબ્દો કે વાક્યોને જોડે</td><td style="padding: 10px; border: 1px solid var(--border);">And, but, or, because</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Interjection</td><td style="padding: 10px; border: 1px solid var(--border);">કેવળપ્રયોગી અવ્યય</td><td style="padding: 10px; border: 1px solid var(--border);">આશ્ચર્ય કે અચાનક ભાવના દર્શાવે</td><td style="padding: 10px; border: 1px solid var(--border);">Oh!, Alas!, Hurrah!</td></tr>
        </tbody>
      </table>
      
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Tip:</strong><br>
        પરીક્ષામાં એક જ શબ્દ વાક્યના આધારે અલગ-અલગ Part of Speech તરીકે કામ કરી શકે છે. દા.ત. Water (નામ) - I drink water. Water (ક્રિયાપદ) - I water the plants.
      </div>
    </div>`,
    keyPoints: [
      "Noun ના 5 પ્રકાર: Proper, Common, Collective, Material, Abstract",
      "Pronoun ના 8 પ્રકાર: Personal, Possessive, Reflexive, Relative, Demonstrative, Indefinite, Interrogative, Distributive",
      "Verb ના પ્રકાર: Transitive (સકર્મક), Intransitive (અકર્મક), Auxiliary (સહાયક)",
      "Adjective માં Degrees of Comparison (Positive, Comparative, Superlative) ખૂબ અગત્યના છે.",
      "Adverb of Time સામાન્ય રીતે વાક્યના અંતે આવે છે.",
      "Adverb ઓળખવા માટે મોટાભાગે શબ્દની પાછળ '-ly' લાગેલું હોય છે (fast અપવાદ છે).",
      "Preposition હંમેશા Noun કે Pronoun ની આગળ મુકાય છે.",
      "Conjunctions માત્ર જોડવાનું કામ કરે છે, અર્થ બદલતા નથી.",
      "Interjection વાક્યના વ્યાકરણ સાથે સીધો સંબંધ ધરાવતું નથી.",
      "Abstract Noun (ભાવવાચક નામ) ને જોઈ કે સ્પર્શી શકાતા નથી, માત્ર અનુભવી શકાય છે (e.g. honesty, joy)."
    ],
    mnemonics: "V-I-P N-A-C-P-A (Verb, Interjection, Pronoun, Noun, Adverb, Conjunction, Preposition, Adjective)"
  },
  {
    topic: "Tenses (કાળ)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>અંગ્રેજીમાં મુખ્ય 3 કાળ છે: Present, Past અને Future. દરેકના 4 પેટા પ્રકાર છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 Tense Structures & Signal Words:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Tense</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Formula (Positive)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Signal Words (Keywords)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Simple Present</td><td style="padding: 10px; border: 1px solid var(--border);">V1 / V1(s/es)</td><td style="padding: 10px; border: 1px solid var(--border);">always, daily, usually, often</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Present Continuous</td><td style="padding: 10px; border: 1px solid var(--border);">is/am/are + V1-ing</td><td style="padding: 10px; border: 1px solid var(--border);">now, at present, look!, currently</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Present Perfect</td><td style="padding: 10px; border: 1px solid var(--border);">has/have + V3</td><td style="padding: 10px; border: 1px solid var(--border);">just, already, yet, recently</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Present Perf. Cont.</td><td style="padding: 10px; border: 1px solid var(--border);">has/have been + V1-ing</td><td style="padding: 10px; border: 1px solid var(--border);">since, for + time (વર્તમાન અસર)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Simple Past</td><td style="padding: 10px; border: 1px solid var(--border);">V2</td><td style="padding: 10px; border: 1px solid var(--border);">yesterday, last year, ago, in 2010</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Past Continuous</td><td style="padding: 10px; border: 1px solid var(--border);">was/were + V1-ing</td><td style="padding: 10px; border: 1px solid var(--border);">while, when, at that time</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Past Perfect</td><td style="padding: 10px; border: 1px solid var(--border);">had + V3</td><td style="padding: 10px; border: 1px solid var(--border);">before, after (ભૂતકાળની બે ક્રિયાઓ)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">Simple Future</td><td style="padding: 10px; border: 1px solid var(--border);">shall/will + V1</td><td style="padding: 10px; border: 1px solid var(--border);">tomorrow, next week, shortly</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">⚠️ Since vs For:</strong><br>
        - <b>Since</b>: Point of time (ચોક્કસ સમય બિંદુ) - since 1998, since morning, since Monday.<br>
        - <b>For</b>: Period of time (સમયગાળો) - for 2 hours, for 5 years, for a long time.
      </div>
    </div>`,
    keyPoints: [
      "સનાતન સત્ય, કહેવતો, અને વૈજ્ઞાનિક સિદ્ધાંતો હંમેશા Simple Present Tense માં જ આવે છે.",
      "જ્યારે બે ભવિષ્યની ક્રિયાઓ શરતી વાક્યમાં હોય (If/Unless), ત્યારે શરત દર્શાવતું વાક્ય Simple Present અને બીજું વાક્ય Simple Future માં આવે છે.",
      "Past Perfect Tense નો ઉપયોગ ભૂતકાળમાં બનેલી બે ક્રિયાઓમાં પ્રથમ ક્રિયા દર્શાવવા થાય છે (અને બીજી ક્રિયા Simple Past માં).",
      "Yet સામાન્ય રીતે નકારાત્મક (Negative) અને પ્રશ્નાર્થ વાક્યના અંતે વપરાય છે (Present Perfect).",
      "Just અને Already નું સ્થાન has/have અને V3 ની વચ્ચે હોય છે.",
      "Did પછી હંમેશા V1 (મૂળ રૂપ) આવે છે. (Did went ખોટું, Did go સાચું).",
      "Do/Does/Did સાથે હંમેશા ક્રિયાપદનું મૂળરૂપ (V1) જ વપરાય.",
      "Universal truth માટે કાળ બદલાતો નથી.",
      "Tomorrow, next day જેવા શબ્દો ભવિષ્યકાળ સૂચવે છે.",
      "While પછી સામાન્ય રીતે ચાલુ કાળ (Continuous tense) આવે છે."
    ],
    mnemonics: "સાદો વર્તમાન = રોજિંદી ટેવ (Always, Daily). સાદો ભૂતકાળ = ગઈકાલની વાત (Yesterday). સાદો ભવિષ્યકાળ = આવતીકાલનું સપનું (Tomorrow)."
  },
  {
    topic: "Active & Passive Voice (કર્તરી-કર્મણી)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>Active Voice માં કર્તા (Subject) મુખ્ય હોય છે. Passive Voice માં કર્મ (Object) મુખ્ય હોય છે. Passive Voice નું મુખ્ય લક્ષણ: <b>To Be નું રૂપ + V3 (Past Participle)</b>.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 Tense Conversion Rules:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Tense</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Active Voice</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Passive Voice</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Simple Present</td><td style="padding: 10px; border: 1px solid var(--border);">V1 / V1(s/es)</td><td style="padding: 10px; border: 1px solid var(--border);">is/am/are + V3</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Present Continuous</td><td style="padding: 10px; border: 1px solid var(--border);">is/am/are + V1-ing</td><td style="padding: 10px; border: 1px solid var(--border);">is/am/are + <b>being</b> + V3</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Present Perfect</td><td style="padding: 10px; border: 1px solid var(--border);">has/have + V3</td><td style="padding: 10px; border: 1px solid var(--border);">has/have + <b>been</b> + V3</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Simple Past</td><td style="padding: 10px; border: 1px solid var(--border);">V2</td><td style="padding: 10px; border: 1px solid var(--border);">was/were + V3</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Past Continuous</td><td style="padding: 10px; border: 1px solid var(--border);">was/were + V1-ing</td><td style="padding: 10px; border: 1px solid var(--border);">was/were + <b>being</b> + V3</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Past Perfect</td><td style="padding: 10px; border: 1px solid var(--border);">had + V3</td><td style="padding: 10px; border: 1px solid var(--border);">had + <b>been</b> + V3</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Modals (Can, Should etc)</td><td style="padding: 10px; border: 1px solid var(--border);">Modal + V1</td><td style="padding: 10px; border: 1px solid var(--border);">Modal + <b>be</b> + V3</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #f59e0b;">🔥 Imperative Sentences (આજ્ઞાર્થ વાક્ય):</strong><br>
        Open the door. (Active)<br>
        Let the door be opened. (Passive - <i>Let + Object + be + V3</i>)
      </div>
    </div>`,
    keyPoints: [
      "હંમેશા યાદ રાખો: Passive Voice = કોઈ પણ કાળનું 'To Be' રૂપ + હંમેશા 'V3' જ આવે.",
      "Perfect Continuous Tenses (ત્રણેય) અને Future Continuous Tense નું Passive થતું નથી.",
      "Subject (I, we, he, she, they) નું Object માં રૂપાંતર (by me, by us, by him, by her, by them) થાય છે.",
      "Intransitive Verbs (અકર્મક ક્રિયાપદો) નું Passive બનતું નથી (દા.ત. go, sleep, die, laugh).",
      "આજ્ઞાર્થ વાક્યોમાં 'You are requested to / ordered to' નો ઉપયોગ પણ થાય છે.",
      "Modals (can/may/should) સાથે Passive માં 'be + V3' વપરાય છે.",
      "પ્રશ્નાર્થ વાક્યનું Passive પ્રશ્નાર્થ જ રહે છે (હુ થી શરૂ થતા વાક્યો By whom થી બને છે).",
      "કર્મ શોધવા ક્રિયાપદને What (શું) અથવા Whom (કોને) થી પ્રશ્ન પૂછો.",
      "Know, Surprise, Satisfy જેવા શબ્દો સાથે 'by' ના બદલે અનુક્રમે 'to', 'at', 'with' વપરાય છે. (I am known to him).",
      "દરેક વાક્યમાં 'by' હોવું જરૂરી નથી (જ્યારે કર્તા અજાણ્યો હોય - e.g., The thief was caught)."
    ],
    mnemonics: "અંગ્રેજીમાં Passive નું સૂત્ર: કર્મ આગળ, કર્તા પાછળ (by સાથે), અને વચ્ચે To-Be + V3."
  },
  {
    topic: "Direct & Indirect Speech (Narration)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>જ્યારે કોઈના બોલેલા શબ્દો એમ જ રજૂ કરીએ તેને Direct Speech કહે છે. જ્યારે તેના અર્થને આપણા શબ્દોમાં કહીએ તેને Indirect Speech કહે છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 Tense Change Rules (જ્યારે Reporting verb ભૂતકાળમાં હોય):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Direct Speech</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Indirect Speech</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Simple Present (V1)</td><td style="padding: 10px; border: 1px solid var(--border);">Simple Past (V2)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Present Cont. (is/am/are)</td><td style="padding: 10px; border: 1px solid var(--border);">Past Cont. (was/were)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Present Perfect (has/have)</td><td style="padding: 10px; border: 1px solid var(--border);">Past Perfect (had)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Simple Past (V2)</td><td style="padding: 10px; border: 1px solid var(--border);">Past Perfect (had + V3)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Past Cont. (was/were)</td><td style="padding: 10px; border: 1px solid var(--border);">Past Perfect Cont. (had been)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">will / shall / can / may</td><td style="padding: 10px; border: 1px solid var(--border);">would / should / could / might</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Pronoun Change Rule (SON):</strong><br>
        <b>1</b>st Person (I, We) &rarr; Changes according to <b>S</b>ubject<br>
        <b>2</b>nd Person (You) &rarr; Changes according to <b>O</b>bject<br>
        <b>3</b>rd Person (He, She, It, They) &rarr; <b>N</b>o Change
      </div>
    </div>`,
    keyPoints: [
      "જો Reporting Verb વર્તમાન (says) અથવા ભવિષ્યકાળ (will say) માં હોય, તો Inverted Commas માં રહેલા વાક્યનો કાળ બદલાતો નથી.",
      "સનાતન સત્ય (Universal Truth) કે કહેવત (Proverb) માં કાળ ક્યારેય બદલાતો નથી.",
      "વિધાન વાક્યમાં સંયોજક 'that' વપરાય છે.",
      "પ્રશ્નાર્થ વાક્યમાં 'said to' નું 'asked' થાય છે.",
      "Yes/No પ્રશ્નાર્થમાં સંયોજક 'if' કે 'whether' વપરાય છે.",
      "Wh- પ્રશ્નાર્થમાં સંયોજક તરીકે Wh- શબ્દ જ રહે છે (that નહિ).",
      "આજ્ઞાર્થ વાક્ય (Imperative) માં સંયોજક હકારમાં 'to' અને નકારમાં 'not to' વપરાય છે.",
      "This -> That, These -> Those, Here -> There, Now -> Then.",
      "Today -> That day, Tomorrow -> The next day, Yesterday -> The previous day.",
      "Indirect Speech માં વાક્ય હંમેશા વિધાન બની જાય છે (પ્રશ્નાર્થ ચિહ્ન દૂર થાય છે)."
    ],
    mnemonics: "SON rule: 123 (1st->Sub, 2nd->Obj, 3rd->No change)"
  },
  {
    topic: "Articles (a, an, the)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>Articles ના બે પ્રકાર છે: Indefinite (a, an) અને Definite (the).</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 A vs An (ઉચ્ચારનો નિયમ):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Article</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Rule (Gujarati Sound)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Exceptions/Exam Traps</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>An</b></td><td style="padding: 10px; border: 1px solid var(--border);">જો શબ્દનો ઉચ્ચાર <b>સ્વર (અ,આ,ઇ,ઈ,ઉ,ઊ,એ,ઐ,ઓ,ઔ)</b> થી શરૂ થતો હોય</td><td style="padding: 10px; border: 1px solid var(--border);"><b>an</b> hour, <b>an</b> honest man, <b>an</b> MLA (એમ.એલ.એ - 'એ' થી શરૂ)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>A</b></td><td style="padding: 10px; border: 1px solid var(--border);">જો શબ્દનો ઉચ્ચાર <b>વ્યંજન (ક થી જ્ઞ)</b> થી શરૂ થતો હોય</td><td style="padding: 10px; border: 1px solid var(--border);"><b>a</b> European (યુરોપિયન - 'ય' થી શરૂ), <b>a</b> university, <b>a</b> one-rupee note ('વ')</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">💡 Article 'The' ના નિયમો:</strong><br>
        - દુનિયાની એકમાત્ર વસ્તુઓ (The Sun, The Moon).<br>
        - સુપરલેટીવ ડિગ્રી (The best, The tallest).<br>
        - નદી, મહાસાગર, પર્વતમાળાઓ (The Ganga, The Himalayas).<br>
        - સમાચારપત્રો, પવિત્ર ગ્રંથો (The Times of India, The Gita).
      </div>
    </div>`,
    keyPoints: [
      "અંગ્રેજી અક્ષરો (A, E, I, O, U) નહિ, પરંતુ ગુજરાતી ઉચ્ચાર (સ્વર) ધ્યાનમાં લેવા.",
      "બહુવચન નામ આગળ 'a' કે 'an' ક્યારેય ન આવે (A boys ખોટું છે).",
      "ભાષા, રમતગમત કે બીમારીના નામ આગળ કોઈ Article લાગતો નથી (I speak the English - ખોટું).",
      "જ્યારે કોઈ વસ્તુની પહેલી વાર વાત થાય ત્યારે a/an, અને ફરી એ જ વસ્તુની વાત થાય ત્યારે The વપરાય.",
      "દેશોના નામ આગળ The નથી લાગતું (The India - ખોટું), પણ જે દેશમાં રિપબ્લિક/સ્ટેટ્સ આવે ત્યાં લાગે છે (The USA).",
      "ભોજન (Lunch, Dinner) આગળ Article નથી આવતો, સિવાય કે ચોક્કસ ભોજનની વાત હોય (The dinner we had yesterday...).",
      "કોઈ વિશેષણ આખા વર્ગનું પ્રતિનિધિત્વ કરે ત્યારે 'The' લાગે (The rich should help the poor).",
      "Uncountable nouns (water, milk, gold) આગળ સામાન્ય રીતે article ન આવે.",
      "The Mount Everest ખોટું છે, એકલ પર્વત આગળ the ન આવે, પર્વતમાળા (Himalayas) આગળ જ આવે.",
      "દિશાઓના નામ આગળ The વપરાય (The East, The North)."
    ],
    mnemonics: "A/An માટે સ્પેલિંગ નહીં, ગુજરાતી કક્કો-બારાક્ષરી જુઓ."
  },
  {
    topic: "Prepositions (નામયોગી)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>Prepositions સમય, સ્થળ, દિશા કે સંબંધ દર્શાવે છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 In, On, At નો તફાવત:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Preposition</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Time (સમય)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Place (સ્થળ)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>At</b></td><td style="padding: 10px; border: 1px solid var(--border);">ચોક્કસ સમય (at 5 PM, at noon)</td><td style="padding: 10px; border: 1px solid var(--border);">ચોક્કસ બિંદુ/નાનું સ્થળ (at the bus stop, at village)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>On</b></td><td style="padding: 10px; border: 1px solid var(--border);">દિવસ અને તારીખ (on Monday, on 15th August)</td><td style="padding: 10px; border: 1px solid var(--border);">સપાટી પર અડીને (on the table)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>In</b></td><td style="padding: 10px; border: 1px solid var(--border);">મહિનો, વર્ષ, ઋતુ (in 2020, in July, in winter)</td><td style="padding: 10px; border: 1px solid var(--border);">મોટા શહેરો, દેશો, ઘેરાયેલી જગ્યા (in Mumbai, in the room)</td></tr>
        </tbody>
      </table>

      <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #f59e0b;">🔥 Fixed Prepositions (વારંવાર પૂછાતા):</strong><br>
        Afraid <b>of</b>, Believe <b>in</b>, Belong <b>to</b>, Famous <b>for</b>, Good <b>at</b>, Interested <b>in</b>, Senior <b>to</b>, Depend <b>on</b>, Congratulate <b>on</b>.
      </div>
    </div>`,
    keyPoints: [
      "By (દ્વારા) - વ્યક્તિ દ્વારા ક્રિયા થાય ત્યારે (Killed by Ram). With (વડે) - સાધન વડે ક્રિયા થાય ત્યારે (Killed with a knife).",
      "Between - બે વ્યક્તિ/વસ્તુ વચ્ચે. Among - બે થી વધુ વચ્ચે.",
      "Beside - બાજુમાં. Besides - તદુપરાંત/આ સિવાય.",
      "Since - ચોક્કસ સમયથી શરૂઆત (since Monday). For - સમયગાળો (for 3 days).",
      "Into - બહારથી અંદર ગતિ કરતા જવું (The dog jumped into the river).",
      "Onto - નીચેથી ઉપર ગતિ કરીને જવું (The cat jumped onto the table).",
      "Senior, Junior, Superior, Inferior, Prior સાથે હંમેશા 'to' આવે (than નહિ).",
      "Enter સાથે કોઈ preposition આવતો નથી (Enter into the room ખોટું).",
      "Discuss અને Describe પછી 'about' આવતો નથી.",
      "Prefer સાથે હંમેશા 'to' આવે છે (I prefer tea to coffee)."
    ],
    mnemonics: "સમયનો ત્રિકોણ: મોટો સમય In (વર્ષ), મધ્યમ On (દિવસ), ચોક્કસ At (કલાક)."
  },
  {
    topic: "Subject-Verb Agreement (કર્તા-ક્રિયાપદ સંબંધ)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>અંગ્રેજી વ્યાકરણનો સૌથી મહત્વનો નિયમ: જો કર્તા એકવચન હોય તો ક્રિયાપદ એકવચન, અને કર્તા બહુવચન હોય તો ક્રિયાપદ બહુવચન આવે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 Golden Rules Table:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Keywords</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Verb Form</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Each, Every, Either, Neither, None, One of</td><td style="padding: 10px; border: 1px solid var(--border);">Singular (એકવચન)</td><td style="padding: 10px; border: 1px solid var(--border);">One of my friends <b>is</b> a doctor.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Either...or, Neither...nor, Not only...but also</td><td style="padding: 10px; border: 1px solid var(--border);">બીજા કર્તા (નજીકના કર્તા) મુજબ</td><td style="padding: 10px; border: 1px solid var(--border);">Neither he nor his friends <b>are</b> playing.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">As well as, Along with, Together with, Besides</td><td style="padding: 10px; border: 1px solid var(--border);">પ્રથમ કર્તા મુજબ</td><td style="padding: 10px; border: 1px solid var(--border);">The captain, along with the players, <b>was</b> present.</td></tr>
        </tbody>
      </table>
      
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Exam Trap (A number vs The number):</strong><br>
        - <b>A number of</b> students <b>are</b> present. (A = Plural Verb)<br>
        - <b>The number of</b> students <b>is</b> 50. (The = Singular Verb)
      </div>
    </div>`,
    keyPoints: [
      "જ્યારે બે નામ 'and' થી જોડાય પણ એક જ વ્યક્તિ/વસ્તુ સૂચવે (દા.ત. Bread and butter, Time and tide), તો ક્રિયાપદ એકવચન આવે.",
      "જો બંને નામ આગળ 'The' હોય (The Principal and the teacher), તો બે અલગ વ્યક્તિ છે = બહુવચન ક્રિયાપદ.",
      "માત્ર એક જ 'The' હોય (The Principal and teacher), તો એક જ વ્યક્તિ છે = એકવચન ક્રિયાપદ.",
      "'Many a' પછી હંમેશા એકવચન નામ અને એકવચન ક્રિયાપદ આવે છે (Many a man is...).",
      "Collective Nouns (Committee, Jury, Team) જો એકમત હોય તો એકવચન, અને મતભેદ હોય તો બહુવચન ગણાય.",
      "News, Physics, Mathematics, Innings દેખાવમાં બહુવચન લાગે પણ છે એકવચન.",
      "People, Cattle, Police, Children દેખાવમાં એકવચન લાગે પણ છે બહુવચન.",
      "Scisssors, Trousers, Spectacles હંમેશા બહુવચનમાં જ વપરાય છે.",
      "Uncountable Nouns (Furniture, Luggage, Advice, Information) હંમેશા એકવચન લે છે.",
      "Distance, Weight, Time ની ચોક્કસ રકમ/માપ હોય (દા.ત. 10 kilometers) તો એકવચન ક્રિયાપદ આવે."
    ],
    mnemonics: "As well as = First subject. Or/Nor = Second subject."
  },
  {
    topic: "Modals (સહાયક ક્રિયાપદ)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>Modals નો ઉપયોગ ક્ષમતા, પરવાનગી, સંભાવના, સલાહ કે ફરજ દર્શાવવા થાય છે. Modals પછી હંમેશા <b>V1 (મૂળ રૂપ)</b> જ આવે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 Modal Usage:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Modal</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Usage (ઉપયોગ)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Can</b></td><td style="padding: 10px; border: 1px solid var(--border);">ક્ષમતા (Ability) વર્તમાનમાં</td><td style="padding: 10px; border: 1px solid var(--border);">I can speak English.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Could</b></td><td style="padding: 10px; border: 1px solid var(--border);">ક્ષમતા ભૂતકાળમાં / નમ્ર વિનંતી</td><td style="padding: 10px; border: 1px solid var(--border);">Could you please help me?</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>May</b></td><td style="padding: 10px; border: 1px solid var(--border);">પરવાનગી / મજબૂત સંભાવના</td><td style="padding: 10px; border: 1px solid var(--border);">May I come in? / It may rain today.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Might</b></td><td style="padding: 10px; border: 1px solid var(--border);">ક્ષીણ સંભાવના (વધારે શંકા)</td><td style="padding: 10px; border: 1px solid var(--border);">He might pass the exam.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Should / Ought to</b></td><td style="padding: 10px; border: 1px solid var(--border);">સલાહ / નૈતિક ફરજ</td><td style="padding: 10px; border: 1px solid var(--border);">You should respect elders.</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Must</b></td><td style="padding: 10px; border: 1px solid var(--border);">ફરજિયાતપણું / દબાણ</td><td style="padding: 10px; border: 1px solid var(--border);">We must follow traffic rules.</td></tr>
        </tbody>
      </table>
    </div>`,
    keyPoints: [
      "Modals સાથે ક્યારેય 's' કે 'es' લાગતો નથી. (He cans ખોટું છે).",
      "Ought અને Used પછી હંમેશા 'to' આવે છે (Ought to, Used to).",
      "વધુ નમ્ર વિનંતી માટે Can કરતાં Could વધારે યોગ્ય છે.",
      "કોઈ હેતુ (purpose) દર્શાવવા 'so that' પછી સામાન્ય રીતે 'may' કે 'might' નો ઉપયોગ થાય છે.",
      "Lest સાથે હંમેશા Should વપરાય છે (Run fast lest you should miss the train).",
      "Need અને Dare નો ઉપયોગ મોટેભાગે નકારાત્મક અને પ્રશ્નાર્થ વાક્યોમાં Modal તરીકે થાય છે (He need not go).",
      "ભૂતકાળનો પસ્તાવો દર્શાવવા Modal + have + V3 વપરાય છે (You should have studied hard).",
      "Must નો ઉપયોગ કાયદાકીય ફરજિયાતપણું દર્શાવે છે.",
      "Used to ભૂતકાળની ટેવ દર્શાવે છે (I used to play cricket).",
      "Would નો ઉપયોગ પણ ભૂતકાળની ટેવ કે પસંદગી (would like) દર્શાવવા થાય છે."
    ],
    mnemonics: "Modals પછી મૂળરૂપ (V1) નો જ મોહ."
  },
  {
    topic: "Conjunctions (સંયોજક)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>બે શબ્દો, શબ્દસમૂહો કે વાક્યોને જોડતા શબ્દોને Conjunction કહે છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 Correlative Conjunctions (જોડીમાં આવતા):</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Conjunction Pair</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Gujarati Meaning</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Rule Highlight</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Both ... and</td><td style="padding: 10px; border: 1px solid var(--border);">બંને ... અને</td><td style="padding: 10px; border: 1px solid var(--border);">બહુવચન ક્રિયાપદ લે છે</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Either ... or</td><td style="padding: 10px; border: 1px solid var(--border);">બેમાંથી એક</td><td style="padding: 10px; border: 1px solid var(--border);">નજીકના કર્તા મુજબ ક્રિયાપદ</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Neither ... nor</td><td style="padding: 10px; border: 1px solid var(--border);">બેમાંથી એક પણ નહિ</td><td style="padding: 10px; border: 1px solid var(--border);">નજીકના કર્તા મુજબ ક્રિયાપદ</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Not only ... but also</td><td style="padding: 10px; border: 1px solid var(--border);">માત્ર આ જ નહિ, પણ તે પણ</td><td style="padding: 10px; border: 1px solid var(--border);">નજીકના કર્તા મુજબ ક્રિયાપદ</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Although / Though ... yet</td><td style="padding: 10px; border: 1px solid var(--border);">જોકે ... તોપણ</td><td style="padding: 10px; border: 1px solid var(--border);">વિરોધાભાસ દર્શાવે</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">Hardly/Scarcely ... when</td><td style="padding: 10px; border: 1px solid var(--border);">ભાગ્યેજ/જેવું ... કે તરત</td><td style="padding: 10px; border: 1px solid var(--border);">વાક્યની શરૂઆતમાં હોય તો Inversion (had આગળ)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">No sooner ... than</td><td style="padding: 10px; border: 1px solid var(--border);">જેવું ... કે તરત</td><td style="padding: 10px; border: 1px solid var(--border);">Than આવે, when નહિ</td></tr>
        </tbody>
      </table>
    </div>`,
    keyPoints: [
      "Coordinating Conjunctions યાદ રાખવા: FANBOYS (For, And, Nor, But, Or, Yet, So).",
      "Unless અને Until પોતે જ નકારાત્મક શબ્દો છે, તેથી તેમની સાથેના વાક્યમાં Not વપરાતો નથી.",
      "Unless શરત (Condition) દર્શાવે છે, જ્યારે Until સમય (Time) દર્શાવે છે.",
      "No sooner સાથે હંમેશા 'than' (t-h-a-n) આવે છે (then નહિ).",
      "Hardly અને Scarcely સાથે હંમેશા 'when' આવે છે.",
      "As, Since, Because - આ ત્રણેય કારણ દર્શાવે છે.",
      "So...that નો ઉપયોગ પરિણામ દર્શાવવા થાય છે (He is so weak that he cannot walk).",
      "If શરતી વાક્યોમાં વપરાય છે.",
      "While ક્રિયા ચાલુ હોય તેવો સમય દર્શાવે છે.",
      "Lest સાથે Should ની જોડી પાક્કી છે."
    ],
    mnemonics: "FANBOYS. No sooner=than, Hardly=when, Lest=should."
  },
  {
    topic: "One Word Substitution (શબ્દસમૂહ માટે એક શબ્દ)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>સ્પર્ધાત્મક પરીક્ષાઓમાં વારંવાર પૂછાતા મહત્વના One Word Substitutions.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">One Word</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Meaning (English)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Meaning (Gujarati)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Optimist</b></td><td style="padding: 10px; border: 1px solid var(--border);">One who looks at the bright side</td><td style="padding: 10px; border: 1px solid var(--border);">આશાવાદી</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Pessimist</b></td><td style="padding: 10px; border: 1px solid var(--border);">One who looks at the dark side</td><td style="padding: 10px; border: 1px solid var(--border);">નિરાશાવાદી</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Atheist</b></td><td style="padding: 10px; border: 1px solid var(--border);">One who doesn't believe in God</td><td style="padding: 10px; border: 1px solid var(--border);">નાસ્તિક</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Orphan</b></td><td style="padding: 10px; border: 1px solid var(--border);">A child whose parents are dead</td><td style="padding: 10px; border: 1px solid var(--border);">અનાથ</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Omnipresent</b></td><td style="padding: 10px; border: 1px solid var(--border);">One who is present everywhere</td><td style="padding: 10px; border: 1px solid var(--border);">સર્વવ્યાપી</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Omniscient</b></td><td style="padding: 10px; border: 1px solid var(--border);">One who knows everything</td><td style="padding: 10px; border: 1px solid var(--border);">સર્વજ્ઞાની</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Philanthropist</b></td><td style="padding: 10px; border: 1px solid var(--border);">Lover of mankind</td><td style="padding: 10px; border: 1px solid var(--border);">માનવતાવાદી / પરોપકારી</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Misanthrope</b></td><td style="padding: 10px; border: 1px solid var(--border);">Hater of mankind</td><td style="padding: 10px; border: 1px solid var(--border);">માનવદ્રોહી</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Fatalist</b></td><td style="padding: 10px; border: 1px solid var(--border);">One who believes in fate</td><td style="padding: 10px; border: 1px solid var(--border);">ભાગ્યવાદી</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Infallible</b></td><td style="padding: 10px; border: 1px solid var(--border);">One who never makes mistakes</td><td style="padding: 10px; border: 1px solid var(--border);">ભૂલ ન કરનાર</td></tr>
        </tbody>
      </table>
    </div>`,
    keyPoints: [
      "Root words પર ધ્યાન આપો. '-cide' એટલે હત્યા (Suicide - ખુદની, Patricide - પિતાની, Matricide - માતાની).",
      "'-logy' એટલે અભ્યાસ/વિજ્ઞાન (Biology - જીવવિજ્ઞાન, Zoology - પ્રાણીશાસ્ત્ર).",
      "'-phobia' એટલે ડર (Hydrophobia - પાણીનો ડર, Claustrophobia - બંધ જગ્યાનો ડર).",
      "'-cracy' એટલે શાસન (Democracy - લોકોનું, Autocracy - એકહથ્થુ, Bureaucracy - અધિકારીઓનું).",
      "Omni- એટલે 'બધુ' (Omnipresent, Omniscient, Omnipotent).",
      "Phil- એટલે પ્રેમ, અને Mis- એટલે નફરત.",
      "Contemporary એટલે સમકાલીન (જીવનકાળ દરમિયાન સાથે રહેનાર).",
      "Ambidextrous એટલે બંને હાથે સમાન કુશળતાથી કામ કરનાર.",
      "Extempore એટલે તૈયારી વિના આપેલું ભાષણ.",
      "Notorious એટલે ખરાબ કામો માટે પ્રખ્યાત (કુખ્યાત)."
    ],
    mnemonics: "Root Words સમજો, આખો શબ્દ ગોખવો નહીં પડે."
  },
  {
    topic: "Synonyms & Antonyms (સમાનાર્થી અને વિરુદ્ધાર્થી)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>શબ્દભંડોળ (Vocabulary) મજબૂત કરવા માટે રોજિંદા અભ્યાસની જરૂર છે.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Word</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Gujarati Meaning</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Synonym (સમાનાર્થી)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Antonym (વિરુદ્ધાર્થી)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Abundant</b></td><td style="padding: 10px; border: 1px solid var(--border);">પુષ્કળ</td><td style="padding: 10px; border: 1px solid var(--border);">Plentiful, Ample</td><td style="padding: 10px; border: 1px solid var(--border);">Scarce, Rare</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Brave</b></td><td style="padding: 10px; border: 1px solid var(--border);">બહાદુર</td><td style="padding: 10px; border: 1px solid var(--border);">Courageous, Bold</td><td style="padding: 10px; border: 1px solid var(--border);">Coward, Timid</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Diligent</b></td><td style="padding: 10px; border: 1px solid var(--border);">મહેનતુ</td><td style="padding: 10px; border: 1px solid var(--border);">Hardworking, Industrious</td><td style="padding: 10px; border: 1px solid var(--border);">Lazy, Idle</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Candid</b></td><td style="padding: 10px; border: 1px solid var(--border);">નિખાલસ</td><td style="padding: 10px; border: 1px solid var(--border);">Frank, Honest</td><td style="padding: 10px; border: 1px solid var(--border);">Deceitful, Cunning</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Barren</b></td><td style="padding: 10px; border: 1px solid var(--border);">બંજર</td><td style="padding: 10px; border: 1px solid var(--border);">Infertile, Desert</td><td style="padding: 10px; border: 1px solid var(--border);">Fertile, Productive</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Obstinate</b></td><td style="padding: 10px; border: 1px solid var(--border);">જિદ્દી</td><td style="padding: 10px; border: 1px solid var(--border);">Stubborn, Rigid</td><td style="padding: 10px; border: 1px solid var(--border);">Flexible, Yielding</td></tr>
        </tbody>
      </table>
    </div>`,
    keyPoints: [
      "જો મૂળ શબ્દ Noun હોય, તો જવાબ પણ Noun જ હોવો જોઈએ.",
      "જો શબ્દ Adjective હોય, તો જવાબ Adjective જ હોવો જોઈએ.",
      "Prefixes (અગ્રેસર પ્રત્યયો) જેવા કે un-, in-, im-, dis-, ir- વિરુદ્ધાર્થી બનાવે છે.",
      "દા.ત. Regular -> Irregular, Honest -> Dishonest.",
      "Suffixes પણ અર્થ બદલે છે: -ful (ભરેલું) vs -less (વગરનું) (Hopeful vs Hopeless).",
      "આસપાસના શબ્દો (Context) પરથી પણ અર્થ પકડી શકાય છે.",
      "ઘણા શબ્દોના એક કરતાં વધુ અર્થ હોય છે, વિકલ્પો ધ્યાનથી જુઓ.",
      "Mitigate એટલે ઓછું કરવું, તેનું સમાનાર્થી Reduce/Lessen.",
      "Lethargic એટલે આળસુ, સમાનાર્થી Sluggish/Lazy.",
      "Enormous એટલે વિશાળ, સમાનાર્થી Huge/Massive."
    ],
    mnemonics: "શબ્દો ગોખવા કરતાં તેને વાક્યમાં પ્રયોગ કરીને યાદ રાખો."
  },
  {
    topic: "Idioms & Phrases (રૂઢિપ્રયોગો)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>Idioms નો સીધો શાબ્દિક અર્થ કાઢવો નહીં, તેમનો છૂપો અર્થ હોય છે.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Idiom</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Meaning (English)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Meaning (Gujarati)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>A piece of cake</b></td><td style="padding: 10px; border: 1px solid var(--border);">Very easy task</td><td style="padding: 10px; border: 1px solid var(--border);">ખૂબ જ સરળ કામ</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Once in a blue moon</b></td><td style="padding: 10px; border: 1px solid var(--border);">Very rarely</td><td style="padding: 10px; border: 1px solid var(--border);">ભાગ્યે જ બનતી ઘટના</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>To spill the beans</b></td><td style="padding: 10px; border: 1px solid var(--border);">To reveal a secret</td><td style="padding: 10px; border: 1px solid var(--border);">રહસ્ય ખોલી દેવું</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Under the weather</b></td><td style="padding: 10px; border: 1px solid var(--border);">Feeling ill</td><td style="padding: 10px; border: 1px solid var(--border);">બીમાર હોવું</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Burn the midnight oil</b></td><td style="padding: 10px; border: 1px solid var(--border);">Work late into the night</td><td style="padding: 10px; border: 1px solid var(--border);">મોડી રાત સુધી સખત મહેનત કરવી</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Apple of one's eye</b></td><td style="padding: 10px; border: 1px solid var(--border);">Very dear</td><td style="padding: 10px; border: 1px solid var(--border);">આંખનો તારો (ખૂબ વહાલુ)</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);"><b>Break the ice</b></td><td style="padding: 10px; border: 1px solid var(--border);">To start a conversation</td><td style="padding: 10px; border: 1px solid var(--border);">મૌન તોડીને વાતચીત શરૂ કરવી</td></tr>
        </tbody>
      </table>
    </div>`,
    keyPoints: [
      "પરીક્ષામાં Idioms નો સીધો અર્થ ક્યારેય સાચો જવાબ હોતો નથી.",
      "Beat around the bush = આડાઅવળી વાતો કરવી (મુદ્દા પર ન આવવું).",
      "Bite the bullet = કોઈ અપ્રિય કે મુશ્કેલ કામ સ્વીકારી લેવું.",
      "Call it a day = આજનું કામ અહીં પૂરું કરવું.",
      "Hit the nail on the head = બિલકુલ સાચી વાત કરવી.",
      "Let the cat out of the bag = અજાણતા રહસ્ય ખોલી દેવું.",
      "A blessing in disguise = ખરાબ લાગતી વસ્તુમાંથી સારું પરિણામ મળવું.",
      "Cost an arm and a leg = ખૂબ જ મોંઘુ હોવું.",
      "Add insult to injury = બળતામાં ઘી હોમવું.",
      "Through thick and thin = દરેક પરિસ્થિતિમાં (સુખ-દુઃખમાં) સાથ આપવો."
    ],
    mnemonics: "વાર્તા કે ચિત્રની કલ્પના કરીને રૂઢિપ્રયોગો યાદ રાખો."
  },
  {
    topic: "Spotting Errors (ભૂલ શોધવી)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આ પ્રશ્નમાં વાક્યને 3-4 ભાગમાં વહેંચેલું હોય છે. તમારે વ્યાકરણની દૃષ્ટિએ ખોટો ભાગ શોધવાનો હોય છે.</p>
      
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: #10b981;">💡 Common Traps (વારંવાર પૂછાતી ભૂલો):</strong><br>
        1. <b>SVA Error:</b> One of the boy <i>(boys આવે)</i> is missing.<br>
        2. <b>Double Negative:</b> He forbade me not to go. <i>(forbade પોતે નકાર છે, not ન આવે)</i><br>
        3. <b>Redundancy:</b> Return back <i>(back ન આવે)</i>, Final conclusion <i>(final ન આવે)</i>.
      </div>
    </div>`,
    keyPoints: [
      "પહેલા Subject-Verb Agreement ચેક કરો (સૌથી વધુ ભૂલો આમાં જ હોય છે).",
      "પછી Tense ની સુસંગતતા જુઓ (જો વાક્યની શરૂઆત ભૂતકાળથી થાય તો આગળ પણ ભૂતકાળ હોવો જોઈએ).",
      "Prepositions ની ભૂલ શોધો (discuss about, enter into ખોટા છે).",
      "Article ની ભૂલ (a hour ના બદલે an hour).",
      "Double comparatives ક્યારેય ન વાપરવા (more better ખોટું છે).",
      "Scenery, Information, Furniture, Poetry નું બહુવચન થતું નથી.",
      "Cousin brother કે Cousin sister બોલવું ખોટું છે, માત્ર Cousin આવે.",
      "Although સાથે but નહિ, yet આવે છે.",
      "Do/Does/Did સાથે હંમેશા V1 જ આવે (Did went ખોટું).",
      "It is I who am responsible. (હુ પછીનું ક્રિયાપદ I મુજબ am આવે, is નહિ)."
    ],
    mnemonics: "ભૂલ શોધવાનો ક્રમ: Subject/Verb -> Tense -> Preposition -> Article."
  },
  {
    topic: "Sentence Improvement (વાક્ય સુધારણા)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આમાં વાક્યના એક ભાગને અન્ડરલાઇન કરેલો હોય છે, તમારે વિકલ્પોમાંથી સાચો વિકલ્પ પસંદ કરી સુધારવાનો હોય છે.</p>
      
      <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 Wrong vs Right Expressions:</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
        <thead>
          <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border);">Incorrect (ખોટું)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Correct (સાચું)</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Reason</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">He prefers tea <b>than</b> coffee.</td><td style="padding: 10px; border: 1px solid var(--border);">He prefers tea <b>to</b> coffee.</td><td style="padding: 10px; border: 1px solid var(--border);">Prefer સાથે હંમેશા to આવે</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">She is <b>more smarter</b> than him.</td><td style="padding: 10px; border: 1px solid var(--border);">She is <b>smarter</b> than him.</td><td style="padding: 10px; border: 1px solid var(--border);">Double comparative ન આવે</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">I am looking forward to <b>meet</b> you.</td><td style="padding: 10px; border: 1px solid var(--border);">I am looking forward to <b>meeting</b> you.</td><td style="padding: 10px; border: 1px solid var(--border);">Looking forward to પછી V-ing આવે</td></tr>
          <tr><td style="padding: 10px; border: 1px solid var(--border);">If I <b>was</b> a bird...</td><td style="padding: 10px; border: 1px solid var(--border);">If I <b>were</b> a bird...</td><td style="padding: 10px; border: 1px solid var(--border);">કલ્પનામાં બધા સાથે were આવે</td></tr>
        </tbody>
      </table>
    </div>`,
    keyPoints: [
      "જો 'No Improvement' ની જરૂર હોય તો જબરદસ્તી ભૂલ કાઢવી નહિ.",
      "Question Tags ના નિયમો યાદ રાખો (હકાર વાક્ય = નકાર Tag, નકાર વાક્ય = હકાર Tag).",
      "I am નું Question tag 'aren't I' થાય છે (am I not પણ સાચું છે પણ aren't I વધુ વપરાય છે).",
      "Since/For + Time આવે તો આગળ Perfect કે Perfect Continuous Tense જ આવે.",
      "Hardly/Scarcely થી વાક્ય શરૂ થાય તો વાક્યરચના પ્રશ્નાર્થ જેવી (Inversion) બને: Hardly had he gone...",
      "Avail, Enjoy, Absent જેવા શબ્દો પછી Reflexive Pronoun (myself, himself) આવે છે જો કર્મ ન હોય.",
      "Order, Request, Advise પછી 'to' આવતું નથી. (He ordered to me - ખોટું).",
      "Discuss અને Describe પછી about ન આવે.",
      "Between...and વપરાય છે (Between...to ખોટું).",
      "Prevent ફોર્મ પછી હંમેશા 'from + V-ing' આવે છે."
    ],
    mnemonics: "નિયમોનું રિવિઝન જ સુધારણાની ચાવી છે."
  },
  {
    topic: "Fill in the Blanks (Cloze Test & ખાલી જગ્યા)",
    content: `<div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      <p>આમાં વ્યાકરણ અથવા શબ્દભંડોળના આધારે ખાલી જગ્યા પૂરવાની હોય છે.</p>
      
      <div style="background: rgba(99, 102, 241, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-top: 1rem; border-radius: 8px;">
        <strong style="color: var(--accent);">💡 Confusing Words (ભ્રામક શબ્દો):</strong><br>
        - <b>Affect (ક્રિયાપદ)</b>: અસર કરવી / <b>Effect (નામ)</b>: પરિણામ કે અસર.<br>
        - <b>Principal (નામ)</b>: આચાર્ય, મુખ્ય / <b>Principle (નામ)</b>: સિદ્ધાંત.<br>
        - <b>Lose (ક્રિયાપદ)</b>: ગુમાવવું / <b>Loose (વિશેષણ)</b>: ઢીલું.<br>
        - <b>Stationary (વિશેષણ)</b>: સ્થિર / <b>Stationery (નામ)</b>: પેન-પેપરની દુકાન.
      </div>
    </div>`,
    keyPoints: [
      "Cloze Test માં આખો ફકરો એકવાર વાંચી જવો જેથી Context (સંદર્ભ) ખબર પડે.",
      "ખાલી જગ્યાની આગળ અને પાછળના શબ્દો (Prepositions, Articles) જવાબ નક્કી કરવામાં મદદ કરે છે.",
      "જો ખાલી જગ્યાની આગળ 'an' હોય, તો સ્વરથી શરૂ થતો શબ્દ જ આવે.",
      "જો 'to' હોય તો V1 આવે (સિવાય કે looking forward to, used to - જેમાં V-ing આવે).",
      "વાક્યનો Tense (કાળ) પકડો. જો ભૂતકાળની વાત હોય તો ભૂતકાળના રૂપો જ વિકલ્પમાંથી પસંદ કરો.",
      "Elimination method (ખોટા વિકલ્પો કાઢી નાખવા) નો મહત્તમ ઉપયોગ કરો.",
      "Collocations (સાથે વપરાતા શબ્દો) યાદ રાખો (દા.ત. make a mistake, do homework).",
      "Then અને Than વચ્ચેનો ભેદ: Then (સમય દર્શાવે - પછી), Than (સરખામણી દર્શાવે).",
      "Practice makes perfect: વધુમાં વધુ MCQ સોલ્વ કરવા.",
      "વિકલ્પોમાં આપેલા શબ્દોના અર્થ અને Part of speech ચેક કરો."
    ],
    mnemonics: "A (Affect) is Action. E (Effect) is End result."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { englishData };
}
