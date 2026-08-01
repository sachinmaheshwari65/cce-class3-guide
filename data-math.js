const mathData = [
  {
    topic: "સંખ્યા પદ્ધતિ અને વિભાજ્યતા (Number System & Divisibility Rules)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>સંખ્યા પદ્ધતિ એ ગણિતનો પાયો છે. ૧ થી ૧૦૦ સુધીમાં <strong>કુલ ૨૫ અવિભાજ્ય સંખ્યાઓ (Prime Numbers)</strong> છે. ૨ એ એકમાત્ર બેકી (Even) અવિભાજ્ય સંખ્યા છે.</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🔢 વિભાજ્યતાની ચાવીઓ (Divisibility Rules Table):</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 8px; border: 1px solid var(--border);">ચાવી (Divisibility by)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">નિયમ (Rule)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">ઉદાહરણ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૨ ની ચાવી</td>
              <td style="padding: 8px; border: 1px solid var(--border);">એકમનો અંક ૦, ૨, ૪, ૬, કે ૮ હોય.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૨૪૮, ૫૬૦</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૩ ની ચાવી</td>
              <td style="padding: 8px; border: 1px solid var(--border);">સંખ્યાના અંકોના સરવાળાને ૩ વડે નિઃશેષ ભાગી શકાય.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૫૪૩ (૫+૪+૩=૧૨ ÷ ૩ = ૪)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૪ ની ચાવી</td>
              <td style="padding: 8px; border: 1px solid var(--border);">છેલ્લા ૨ અંકોથી બનતી સંખ્યાને ૪ વડે ભાગી શકાય.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૫૧૨ (૧૨ ÷ ૪ = ૩)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૯ ની ચાવી</td>
              <td style="padding: 8px; border: 1px solid var(--border);">અંકોના સરવાળાને ૯ વડે ભાગી શકાય.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૭૨૯ (૭+૨+૯=૧૮ ÷ ૯ = ૨)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧૧ ની ચાવી</td>
              <td style="padding: 8px; border: 1px solid var(--border);">એકી સ્થાનો અને બેકી સ્થાનોના અંકોના સરવાળાનો તફાવત ૦ અથવા ૧૧ નો ગુણાંક હોય.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૩૩૧ [(૧+૩)-(૩+૧)=૦]</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    keyPoints: [
      "૧ થી ૧૦૦ માં કુલ ૨૫ અવિભાજ્ય સંખ્યાઓ આવે છે.",
      "૨ એ સૌથી નાની અને એકમાત્ર બેકી અવિભાજ્ય સંખ્યા છે.",
      "૧ એ અવિભાજ્ય કે વિભાજ્ય નથી (તટસ્થ સંખ્યા છે).",
      "એકમનો અંક શોધવા માટે ઘાતાંકને ૪ વડે ભાગી શેષ ચકાસવી."
    ],
    mnemonics: "0, 1, 5, 6 ની ગમે તેટલી ઘાત હોય, એકમનો અંક તે જ રહે!"
  },
  {
    topic: "ટકાવારી અને અપૂર્ણાંક (Percentage & Fractions Conversion)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>CCE ગણિતમાં ઝડપી ગણતરી (Speed Math) માટે ટકાવારી અને અપૂર્ણાંક કોષ્ટક યાદ રાખવું અતિ જરૂરી છે:</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 Percentage to Fraction Master Conversion Table:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.88rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 8px; border: 1px solid var(--border);">અપૂર્ણાંક (Fraction)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">ટકાવારી (Percentage)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">અપૂર્ણાંક (Fraction)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">ટકાવારી (Percentage)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૨</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૫૦%</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૭</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૪.૨૮% (૧૪ ૨/૭%)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૩</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૩૩.૩૩% (૩૩ ૧/૩%)</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૮</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૨.૫% (૧૨ ૧/૨%)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૪</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૨૫%</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૯</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૧.૧૧% (૧૧ ૧/૯%)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૫</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૨૦%</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૧૦</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૦%</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૬</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૬.૬૬% (૧૬ ૨/૩%)</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">૧/૧૨</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૮.૩૩% (૮ ૧/૩%)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    keyPoints: [
      "1/2 = 50% | 1/3 = 33.33% | 1/4 = 25% | 1/5 = 20%.",
      "1/8 = 12.5% | 1/6 = 16.66% | 1/7 = 14.28%.",
      "ટકાવારીમાંથી અપૂર્ણાંક બનાવવા 100 વડે ભાગવું, અપૂર્ણાંકમાંથી ટકા બનાવવા 100 વડે ગુણવું."
    ],
    mnemonics: "1/8 = 12.5% | 1/6 = 16.66%"
  },
  {
    topic: "બીજગણિત સૂત્રો અને શોર્ટ શોર્ટકટ (Algebra Formulas & Shortcuts)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>CCE પરીક્ષામાં $x + 1/x = k$ પ્રકારના બીજગણિતના પ્રશ્નો વારંવાર પૂછાય છે. તેના શોર્ટકટ સૂત્રો નીચે મુજબ છે:</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📐 બીજગણિત શોર્ટકટ સૂત્રો (Algebra Shortcuts Table):</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 8px; border: 1px solid var(--border);">જો આપેલ હોય (If Given)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">શોધવાનું સૂત્ર (Shortcut Formula)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">ઉદાહરણ (k = 4 હોય ત્યારે)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">x + 1/x = k</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold; color: var(--accent-light);">x² + 1/x² = k² - 2</td>
              <td style="padding: 8px; border: 1px solid var(--border);">4² - 2 = 16 - 2 = <strong>14</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">x - 1/x = k</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold; color: var(--accent-light);">x² + 1/x² = k² + 2</td>
              <td style="padding: 8px; border: 1px solid var(--border);">4² + 2 = 16 + 2 = <strong>18</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">x + 1/x = k</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold; color: var(--accent-light);">x³ + 1/x³ = k³ - 3k</td>
              <td style="padding: 8px; border: 1px solid var(--border);">4³ - 3(4) = 64 - 12 = <strong>52</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">x - 1/x = k</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold; color: var(--accent-light);">x³ - 1/x³ = k³ + 3k</td>
              <td style="padding: 8px; border: 1px solid var(--border);">4³ + 3(4) = 64 + 12 = <strong>76</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    keyPoints: [
      "જો x + 1/x = k, તો x² + 1/x² = k² - 2.",
      "જો x - 1/x = k, તો x² + 1/x² = k² + 2.",
      "જો x + 1/x = k, તો x³ + 1/x³ = k³ - 3k.",
      "સૂત્રો: (a+b)² = a² + 2ab + b² | a² - b² = (a-b)(a+b)."
    ],
    mnemonics: "પ્લસમાંથી વર્ગ કરો ત્યારે -2, માઇનસમાંથી વર્ગ કરો ત્યારે +2"
  }
];

if (typeof module !== 'undefined') {
  module.exports = { mathData };
}
