const keyboardMap = {
  backquote: {
    symbol: '`',
    shiftSymbol: '~',
    ru: 'ё',
  },
  Digit1: {
    digit: '1',
    shiftEn: '!',
    shiftRu: '!',
  },
  Digit2: {
    digit: '2',
    shiftEn: '@',
    shiftRu: '"',
  },
  Digit3: {
    digit: '3',
    shiftEn: '#',
    shiftRu: '№',
  },
  Digit4: {
    digit: '4',
    shiftEn: '$',
    shiftRu: ';',
  },
  Digit5: {
    digit: '5',
    shiftEn: '@',
    shiftRu: '"',
  },
  Digit6: {
    digit: '6',
    shiftEn: '@',
    shiftRu: '"',
  },
  Digit7: {
    digit: '7',
    shiftEn: '@',
    shiftRu: '"',
  },
  Digit8: {
    digit: '8',
    shiftEn: '@',
    shiftRu: '"',
  },
  Digit9: {
    digit: '9',
    shiftEn: '@',
    shiftRu: '"',
  },
  Digit0: {
    digit: '0',
    shiftEn: '@',
    shiftRu: '"',
  },
  Minus: {
    symbol: '-',
    shiftSymbol: '_',
  },
  Equal: {
    symbol: '=',
    shiftSymbol: '+',
  },
  Backspace: {
    text: 'Backspace',
  },
  Tab: {
    text: 'Tab',
  },
  q: {
    en: 'q',
    ru: 'й',
  },
  w: {
    en: 'w',
    ru: 'ц',
  },
  e: {
    en: 'e',
    ru: 'к',
  },
  r: {
    en: 'r',
    ru: 'к',
  },
  t: {
    en: 't',
    ru: 'е',
  },
  y: {
    en: 'y',
    ru: 'н',
  },
  u: {
    en: 'u',
    ru: 'г',
  },
  i: {
    en: 'i',
    ru: 'ш',
  },
  o: {
    en: 'o',
    ru: 'щ',
  },
  p: {
    en: 'p',
    ru: 'з',
  },
  BracketLeft: {
    symbol: '[',
    shiftSymbol: '{',
    ru: 'х',
  },
  BracketRight: {
    symbol: ']',
    shiftSymbol: '}',
    ru: 'ъ',
  },
  Backslash: {
    symbol: '\\',
    shiftSymbol: '|',
  },
  Slash: {
    symbol: '/',
    shiftSymbol: '?',
  },
  a: {
    en: 'a',
    ru: 'ф',
  },
  s: {
    en: 's',
    ru: 'ы',
  },
  d: {
    en: 'd',
    ru: 'в',
  },
  f: {
    en: 'f',
    ru: 'а',
  },
  g: {
    en: 'g',
    ru: 'п',
  },
  h: {
    en: 'h',
    ru: 'р',
  },
  j: {
    en: 'j',
    ru: 'о',
  },
  k: {
    en: 'k',
    ru: 'л',
  },
  l: {
    en: 'l',
    ru: 'д',
  },
  Semicolon: {
    symbol: ';',
    shiftSymbol: ':',
    ru: 'ж',
  },
  Quote: {
    symbol: '\'',
    shiftSymbol: '"',
    ru: 'э',
  },
  Enter: {
    text: 'Enter',
  },
  Shift: {
    text: 'Shift',
  },
  z: {
    en: 'z',
    ru: 'я',
  },
  x: {
    en: 'x',
    ru: 'ч',
  },
  c: {
    en: 'c',
    ru: 'с',
  },
  v: {
    en: 'v',
    ru: 'м',
  },
  b: {
    en: 'b',
    ru: 'и',
  },
  n: {
    en: 'n',
    ru: 'т',
  },
  m: {
    en: 'm',
    ru: 'ь',
  },
  Comma: {
    symbol: ',',
    shiftSymbol: '<',
    ru: 'б',
  },
  Period: {
    symbol: '.',
    shiftSymbol: '>',
    ru: 'ю',
  },
  Control: {
    text: 'Control',
  },
  Meta: {
    text: 'Win',
  },
  Alt: {
    text: 'Alt',
  },
};




const config = [
  [
    {
      type: 'printSymbolLetter',
      text: keyboardMap.backquote,
      id: 'Backquote',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit1,
      id: 'Digit1',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit2,
      id: 'Digit2',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit3,
      id: 'Digit3',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit4,
      id: 'Digit4',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit5,
      id: 'Digit5',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit6,
      id: 'Digit6',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit7,
      id: 'Digit7',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit8,
      id: 'Digit8',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit9,
      id: 'Digit9',
    },
    {
      type: 'printDigit',
      text: keyboardMap.Digit0,
      id: 'Digit0',
    },
    {
      type: 'printSymbol',
      text: keyboardMap.Minus,
      id: 'Minus',
    },
    {
      type: 'printSymbol',
      text: keyboardMap.Equal,
      id: 'Equal',
    },
    {
      type: 'Backspace',
      text: 'Backspace',
      id: 'Backspace',
    },
  ],
  [
    {
      type: 'Tab',
      text: 'Tab',
      id: 'Tab',
    },
    {
      type: 'printLetter',
      text: keyboardMap.q,
      id: 'KeyQ',
    },
    {
      type: 'printLetter',
      text: keyboardMap.w,
      id: 'KeyW',
    },
    {
      type: 'printLetter',
      text: keyboardMap.e,
      id: 'KeyE',
    },
    {
      type: 'printLetter',
      text: keyboardMap.r,
      id: 'KeyR',
    },
    {
      type: 'printLetter',
      text: keyboardMap.t,
      id: 'KeyT',
    },
    {
      type: 'printLetter',
      text: keyboardMap.y,
      id: 'KeyY',
    },
    {
      type: 'printLetter',
      text: keyboardMap.u,
      id: 'KeyU',
    },
    {
      type: 'printLetter',
      text: keyboardMap.i,
      id: 'KeyI',
    },
    {
      type: 'printLetter',
      text: keyboardMap.o,
      id: 'KeyO',
    },
    {
      type: 'printLetter',
      text: keyboardMap.p,
      id: 'KeyP',
    },
    {
      type: 'printSymbolLetter',
      text: keyboardMap.BracketLeft,
      id: 'BracketLeft',
    },
    {
      type: 'printSymbolLetter',
      text: keyboardMap.BracketRight,
      id: 'BracketRight',
    },
    {
      type: 'printSymbol',
      text: keyboardMap.Backslash,
      id: 'Backslash',
    },
    {
      type: 'printSymbol',
      text: keyboardMap.Slash,
      id: 'Slash',
    },
  ],
  [
    {
      type: 'capsLock',
      text: 'Caps Lock',
      id: 'CapsLock',
    },
    {
      type: 'printLetter',
      text: keyboardMap.a,
      id: 'KeyA',
    },
    {
      type: 'printLetter',
      text: keyboardMap.s,
      id: 'KeyS',
    },
    {
      type: 'printLetter',
      text: keyboardMap.s,
      id: 'KeyS',
    },
    {
      type: 'printLetter',
      text: keyboardMap.d,
      id: 'KeyD',
    },
    {
      type: 'printLetter',
      text: keyboardMap.f,
      id: 'KeyF',
    },
    {
      type: 'printLetter',
      text: keyboardMap.g,
      id: 'KeyG',
    },
    {
      type: 'printLetter',
      text: keyboardMap.h,
      id: 'KeyH',
    },
    {
      type: 'printLetter',
      text: keyboardMap.j,
      id: 'KeyJ',
    },
    {
      type: 'printLetter',
      text: keyboardMap.k,
      id: 'KeyK',
    },
    {
      type: 'printLetter',
      text: keyboardMap.l,
      id: 'KeyL',
    },
    {
      type: 'printLetter',
      text: keyboardMap.l,
      id: 'KeyL',
    },
    {
      type: 'printSymbolLetter',
      text: keyboardMap.Semicolon,
      id: 'Semicolon',
    },
    {
      type: 'printSymbolLetter',
      text: keyboardMap.Quote,
      id: 'Quote',
    },
    {
      type: 'Enter',
      text: 'Enter',
      id: 'Enter',
    },
  ],
  [
    {
      type: 'Shift',
      text: 'Shift',
      id: 'Shift',
    },
    {
      type: 'printLetter',
      text: keyboardMap.z,
      id: 'KeyZ',
    },
    {
      type: 'printLetter',
      text: keyboardMap.x,
      id: 'KeyX',
    },
    {
      type: 'printLetter',
      text: keyboardMap.c,
      id: 'KeyC',
    },
    {
      type: 'printLetter',
      text: keyboardMap.v,
      id: 'KeyV',
    },
    {
      type: 'printLetter',
      text: keyboardMap.b,
      id: 'KeyB',
    },
    {
      type: 'printLetter',
      text: keyboardMap.n,
      id: 'KeyN',
    },
    {
      type: 'printLetter',
      text: keyboardMap.m,
      id: 'KeyM',
    },
    {
      type: 'printSymbolLetter',
      text: keyboardMap.Comma,
      id: 'Comma',
    },
    {
      type: 'printSymbolLetter',
      text: keyboardMap.Period,
      id: 'Period',
    },
    {
      type: 'Shift',
      text: 'Shift',
      id: 'Shift',
    },
  ],
  [
    {
      type: 'Control',
      text: 'Control',
      id: 'Control', 
    },
    {
      type: 'Win',
      text: 'Win',
      id: 'Meta', 
    },
    {
      type: 'Alt',
      text: 'Alt',
      id: 'Alt', 
    },
    {
      type: 'Spacebar',
      text: '',
      id: 'Space', 
    },
    {
      type: 'Alt',
      text: 'Alt',
      id: 'Alt', 
    },
    {
      type: 'Win',
      text: 'Win',
      id: 'Meta', 
    },
    {
      type: 'Control',
      text: 'Control',
      id: 'Control', 
    },

  ],
  
];






window.onload = () => {
  const app = new App();
}

class App {
    constructor() {
      const language = localStorage.getItem('language') || 'EN';

      const textarea = new Textarea();
      const keyboard = new Keyboard(language, config);
    }
}

class Keyboard {
  constructor(language, config) {
      this.language = language;
      this.isCapsLockOn = false;

      this._createKeyboardContainer();

      config.forEach(rowConfig => this._createRow(rowConfig));
      
      this._addKeyboardListener();
  }

  _createKeyboardContainer() {
    const keyboardContainer = document.createElement('div');

    keyboardContainer.className = 'keyboard-container';

    document.body.appendChild(keyboardContainer);
  }

  _createRow(config) {
    const row = document.createElement('div');
    
    row.className = 'keyboard-row';
   
    config.forEach(btnConfig => {
      const btn = this._createButton(btnConfig);

      if (btn) {
        row.append(btn);
        btn.classList.add('button');
      }
    });

    document.querySelector('.keyboard-container').append(row);
  }

  _createButton(btnConfig) {
    let btn;

    switch(btnConfig.type) {
      case 'printLetter':
        btn = this._createLetterButton(btnConfig);
        break;
      case 'capsLock':
        btn = this._createCapsLockButton(btnConfig);
        break;
      case 'printDigit':
        btn = this._createDigitButton(btnConfig);
        break;
      case 'printSymbol':
        btn = this._createSymbolButton(btnConfig);
        break;
      case 'printSymbolLetter':
        btn = this._createSymbolLetterButton(btnConfig);
        break;
      case 'Backspace':
        btn = this._createBackspaceButton(btnConfig);
        break;
      case 'Tab':
        btn = this._creatTabButton(btnConfig);
        break;
      case 'Enter':
        btn = this._creatEnterButton(btnConfig);
        break;
      case 'Shift':
        btn = this._creatShiftButton(btnConfig);
        break;
      case 'Control':
          btn = this._creatControlButton(btnConfig);
          break;
      case 'Meta':
          btn = this._creatMetaButton(btnConfig);
          break;
      case 'Alt':
        btn = this._creatAltButton(btnConfig);
        break;
      case 'Spacebar':
        btn = this._creatSpacebarButton(btnConfig);
        break;
    }

    return btn;
  }

  _createLetterButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText =  this.language === 'EN' ? btnConfig.text.en : btnConfig.text.ru;
    btn.id = btnConfig.id;

    btn.onclick = () => {
      this._printLetter(btnConfig.text);
    };

    return btn;
  }

  _createDigitButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText =  btnConfig.text.digit;
    btn.id = btnConfig.id;

    btn.onclick = () => {
      this._printLetter(btnConfig.text);
    };

    return btn;
  }

  _createSymbolButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText =  btnConfig.text.symbol;
    btn.id = btnConfig.id;

    btn.onclick = () => {
      this._printLetter(btnConfig.text);
    };

    return btn;
  }

  _createSymbolLetterButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText =  btnConfig.text.symbol;
    btn.id = btnConfig.id;

    btn.onclick = () => {
      this._printLetter(btnConfig.text);
    };

    return btn;
  }

  _printLetter(text) {
    const letter = this.language === 'EN' ? text.en : text.ru;
    const output = this.isCapsLockOn ? letter.toUpperCase() : letter;

    document.querySelector('.textarea').value += output;

    //return output;
  }

  _createCapsLockButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    btn.onclick = this._onCapsLockClick.bind(this);

    return btn;
  }

  _createBackspaceButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    return btn;
  }

  _creatEnterButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    return btn;
  }

  _creatShiftButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    return btn;
  }

  _creatControlButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    return btn;
  }

  _creatAltButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    return btn;
  }

  _creatSpacebarButton() {
    const btn = document.createElement('button');

    btn.id = 'spacebar';

    return btn;
  }

  _creatMetaButton() {
    const btn = document.createElement('button');

    btn.innerText = 'Win';
    btn.id = 'meta';

    return btn;
  }

  _creatTabButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    return btn;
  }

  _onCapsLockClick(event) {
    this.isCapsLockOn = !this.isCapsLockOn;

    event.target.classList.toggle('btn-selected');
  }

  _addKeyboardListener() {
    document.onkeydown = (event) => {
     
      let button = event.key;

      this._printLetter(keyboardMap[button]);
      this._selectButton(event.code);
      
      alert(event.key);
    }

    document.onkeyup = (event) => {
      
      const button = event.key;

      this._printLetter(keyboardMap[button]);
      this._deselectButton(event.code);
      
    }
  }

  _selectButton(id) {
    const btn = document.getElementById(id);

    btn.classList.add('btn-selected');
  }

  _deselectButton(id) {
    const btn = document.getElementById(id);

    btn.classList.remove('btn-selected');
  }

  // _createButton() {
  //   const btn = document.createElement('button');

  //   btn.textContent = this.language;
  //   btn.onclick = this._changeLanguage.bind(this);

  //   document.body.appendChild(btn);
  // }

//   _changeLanguage(event) {

//     if (event.key === 'Shift' && event.key === 'Control'){
//       this.language = this.language === 'EN' ? 'RU' : 'EN';
//     localStorage.setItem('language', this.language);
//     }
    
//   }
}


class Textarea {
  constructor() {
    this.value = '';
    
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');  
    document.body.appendChild(textarea);
  }

}