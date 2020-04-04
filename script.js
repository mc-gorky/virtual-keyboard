

// TODO: move to separate file

const buttonTypes =  {
  printSymbol: 'printSymbol',
  capsLock: 'capsLock',
  backspace: 'backspace',
  tab: 'tab',
  enter: 'enter',
  shift: 'shift',
  control: 'control',
  meta: 'meta',
  alt: 'alt',
  spacebar: 'spacebar',
}

const buttonsConfig = {
  backquote: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '`',
        shift: '~',
      },
      ru: {
        default: 'ё',
        shift: 'Ё',
      },
    },
    id: 'Backquote',
  },
  digit1: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '1',
        shift: '!',
      },
      ru: {
        default: '1',
        shift: '!',
      },
    },
    id: 'Digit1',
  },
  digit2: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
      default: '2',
      shift: '@',
    },
    ru: {
      default: '2',
      shift: '"',
    },
  },
    id: 'Digit2',
  },
  digit3: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '3',
        shift: '#',
      },
      ru: {
        default: '3',
        shift: '№',
      },
    },
    id: 'Digit3',
  },
  digit4: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '4',
        shift: '$',
      },
      ru: {
        default: '4',
        shift: ';',
      },
    },
    id: 'Digit4',
  },
  digit5: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '5',
        shift: '%',
      },
      ru: {
        default: '5',
        shift: '%',
      },
    },
    id: 'Digit5',
  },
  digit6: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '6',
        shift: '^',
      },
      ru: {
        default: '6',
        shift: ':',
      },
    },
    id: 'Digit6',
  },
  digit7: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '7',
        shift: '&',
      },
      ru: {
        default: '7',
        shift: '?',
      },
    },
    id: 'Digit7',
  },
  digit8: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '8',
        shift: '*',
      },
      ru: {
        default: '8',
        shift: '*',
      },
    },
    id: 'Digit8',
  },
  digit9: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '9',
        shift: '(',
      },
      ru: {
        default: '9',
        shift: '(',
      },
    },
    id: 'Digit9',
  },
  digit0: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '0',
        shift: ')',
      },
      ru: {
        default: '0',
        shift: ')',
      },
    },
    id: 'Digit0',
  },
  minus: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '-',
        shift: '_',
      },
      ru: {
        default: '-',
        shift: '_',
      },
    },
    id: 'Minus',
  },
  equal: {
      type: buttonTypes.printSymbol,
      text: {
        en: {
          default: '=',
          shift: '+',
        },
        ru: {
          default: '=',
          shift: '+',
        },
      },
      id: 'Equal',
  },
  backspace: {
    type: buttonTypes.backspace,
    text: 'Backspace',
    id: 'Backspace',
  },
  tab: {
    type: buttonTypes.tab,
    text: 'Tab',
    id: 'Tab',
  },
  keyq: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'q',
        shift: 'Q',
      },
      ru: {
        default: 'й',
        shift: 'Й',
      },
    },
    id: 'KeyQ',
  },
  keyw: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'w',
        shift: 'W',
      },
      ru: {
        default: 'ц',
        shift: 'Ц',
      },
    },
    id: 'KeyW',
  },
  keye: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'e',
        shift: 'E',
      },
      ru: {
        default: 'у',
        shift: 'У',
      },
    },
    id: 'KeyE',
  },
  keyr: {
      type: buttonTypes.printSymbol,
      text: {
        en: {
          default: 'r',
          shift: 'R',
        },
        ru: {
          default: 'к',
          shift: 'К',
        },
      },
      id: 'KeyR',
    },
  keyt: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 't',
        shift: 'T',
      },
      ru: {
        default: 'е',
        shift: 'Е',
      },
    },
    id: 'KeyT',
  },
  keyy: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'y',
        shift: 'Y',
      },
      ru: {
        default: 'н',
        shift: 'Н',
      },
    },
    id: 'KeyY',
  },
  keyu: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'u',
        shift: 'U',
      },
      ru: {
        default: 'г',
        shift: 'Г',
      },
    },
    id: 'KeyU',
  },
  keyi: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'i',
        shift: 'I',
      },
      ru: {
        default: 'ш',
        shift: 'Ш',
      },
    },
    id: 'KeyI',
  },
  keyo: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'o',
        shift: 'O',
      },
      ru: {
        default: 'щ',
        shift: 'Щ',
      },
    },
    id: 'KeyO',
  },
  keyp: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'p',
        shift: 'P',
      },
      ru: {
        default: 'з',
        shift: 'З',
      },
    },
    id: 'KeyP',
  },
  bracketleft: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '[',
        shift: '{',
      },
      ru: {
        default: 'х',
        shift: 'Х',
      },
    },
    id: 'BracketLeft',
  },
  bracketright: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: ']',
        shift: '}',
      },
      ru: {
        default: 'ъ',
        shift: 'Ъ',
      },
    },
    id: 'BracketRight',
  },
  backslash: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '\\',
        shift: '|',
      },
      ru: {
        default: '\\',
        shift: '|',
      },
    },
    id: 'Backslash',
  },
  slash: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '/',
        shift: '?',
      },
      ru: {
        default: '/',
        shift: '?',
      },
    },
    id: 'Slash',
  },
  capslock: {
    type: buttonTypes.capsLock,
    text: 'Caps Lock',
    id: 'CapsLock',
  },
  keya: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'a',
        shift: 'A',
      },
      ru: {
        default: 'ф',
        shift: 'Ф',
      },
    },
    id: 'KeyA',
  },
  keys: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 's',
        shift: 'S',
      },
      ru: {
        default: 'ы',
        shift: 'Ы',
      },
    },
    id: 'KeyS',
  },
  keyd:{
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'd',
        shift: 'D',
      },
      ru: {
        default: 'в',
        shift: 'В',
      },
    },
    id: 'KeyD',
  },
  keyf: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'f',
        shift: 'F',
      },
      ru: {
        default: 'а',
        shift: 'А',
      },
    },
    id: 'KeyF',
  },
  keyg: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'g',
        shift: 'G',
      },
      ru: {
        default: 'п',
        shift: 'П',
      },
    },
    id: 'KeyG',
  },
  keyh: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'h',
        shift: 'H',
      },
      ru: {
        default: 'р',
        shift: 'Р',
      },
    },
    id: 'KeyH',
  },
  keyj: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'j',
        shift: 'J',
      },
      ru: {
        default: 'о',
        shift: 'О',
      },
    },
    id: 'KeyJ',
  },
  keyk: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'k',
        shift: 'K',
      },
      ru: {
        default: 'л',
        shift: 'Л',
      },
    },
    id: 'KeyK',
  },
  keyl: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'l',
        shift: 'L',
      },
      ru: {
        default: 'д',
        shift: 'Д',
      },
    },
    id: 'KeyL',
  },
  semicolon: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: ';',
        shift: ':',
      },
      ru: {
        default: 'ж',
        shift: 'Ж',
      },
    },
    id: 'Semicolon',
  },
  quote: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '\'',
        shift: '"',
      },
      ru: {
        default: 'э',
        shift: 'Э',
      },
    },
    id: 'Quote',
  },
  enter: {
    type: buttonTypes.enter,
    text: 'Enter',
    id: 'Enter',
  },
  shift: {
    type: buttonTypes.shift,
    text: 'Shift',
    id: 'Shift',
  },
  keyz: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'z',
        shift: 'Z',
      },
      ru: {
        default: 'я',
        shift: 'Я',
      },
    },
    id: 'KeyZ',
  },
  keyx: {
    type: buttonTypes.printSymbol,
    text:  {
      en: {
        default: 'x',
        shift: 'X',
      },
      ru: {
        default: 'ч',
        shift: 'Ч',
      },
    },
    id: 'KeyX',
  },
  keyc: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'c',
        shift: 'C',
      },
      ru: {
        default: 'с',
        shift: 'С',
      },
    },
    id: 'KeyC',
  },
  keyv: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'v',
        shift: 'V',
      },
      ru: {
        default: 'м',
        shift: 'М',
      },
    },
    id: 'KeyV',
  },
  keyb: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'b',
        shift: 'B',
      },
      ru: {
        default: 'и',
        shift: 'И',
      },
    },
    id: 'KeyB',
  },
  keyn: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'n',
        shift: 'N',
      },
      ru: {
        default: 'т',
        shift: 'Т',
      },
    },
    id: 'KeyN',
  },
  keym: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'm',
        shift: 'M',
      },
      ru: {
        default: 'ь',
        shift: 'Ь',
      },
    },
    id: 'KeyM',
  },
  comma: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: ',',
        shift: '<',
      },
      ru: {
        default: 'б',
        shift: 'Б',
      },
    },
    id: 'Comma',
  },
  period: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '.',
        shift: '>',
      },
      ru: {
        default: 'ю',
        shift: 'Ю',
      },
    },
    id: 'Period',
  },
  control: {
    type: buttonTypes.control,
    text: 'Control',
    id: 'Control', 
  },
  meta: {
    type: buttonTypes.meta,
    text: 'Win',
    id: 'Meta', 
  },
  alt: {
    type: buttonTypes.alt,
    text: 'Alt',
    id: 'Alt', 
  },
  space: {
    type: buttonTypes.spacebar,
    text: '',
    id: 'Space', 
  },
};

const config = [
  [
    buttonsConfig.backquote,
    buttonsConfig.digit1,
    buttonsConfig.digit2,
    buttonsConfig.digit3,
    buttonsConfig.digit4,
    buttonsConfig.digit5,
    buttonsConfig.digit6,
    buttonsConfig.digit7,
    buttonsConfig.digit8,
    buttonsConfig.digit9,
    buttonsConfig.digit0,
    buttonsConfig.minus,
    buttonsConfig.equal,
    buttonsConfig.backspace,
  ],
  [
    buttonsConfig.tab,
    buttonsConfig.keyq,
    buttonsConfig.keyw,
    buttonsConfig.keye,
    buttonsConfig.keyr,
    buttonsConfig.keyt,
    buttonsConfig.keyy,
    buttonsConfig.keyu,
    buttonsConfig.keyi,
    buttonsConfig.keyo,
    buttonsConfig.keyp,
    buttonsConfig.bracketleft,
    buttonsConfig.bracketright,
    buttonsConfig.backslash,
    buttonsConfig.slash,
  ],
  [
    buttonsConfig.capslock,
    buttonsConfig.keya,
    buttonsConfig.keys,
    buttonsConfig.keyd,
    buttonsConfig.keyf,
    buttonsConfig.keyg,
    buttonsConfig.keyh,
    buttonsConfig.keyj,
    buttonsConfig.keyk,
    buttonsConfig.keyl,
    buttonsConfig.semicolon,
    buttonsConfig.quote,
    buttonsConfig.enter,
  ],
  [
    buttonsConfig.shift,
    buttonsConfig.keyz,
    buttonsConfig.keyx,
    buttonsConfig.keyc,
    buttonsConfig.keyv,
    buttonsConfig.keyb,
    buttonsConfig.keyn,
    buttonsConfig.keym,
    buttonsConfig.comma,
    buttonsConfig.period,
    buttonsConfig.shift,
  ],
  [
    buttonsConfig.control,
    buttonsConfig.meta,
    buttonsConfig.alt,
    buttonsConfig.space,
    buttonsConfig.alt,
    buttonsConfig.meta,
    buttonsConfig.control,
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
      this.isShiftOn = false;
      this.config = config;

      this._createKeyboardContainer();

      this.config.forEach(rowConfig => this._createRow(rowConfig));
      
      this._addKeyboardListener();
  }

  _createKeyboardContainer() {
    const keyboardContainer = document.createElement('div');

    keyboardContainer.className = 'keyboard-container';
    keyboardContainer.onclick = (event) => {
      const keyCode = event.target.id;
    }

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
      case buttonTypes.printSymbol:
        btn = this._createSymbolButton(btnConfig);
        break;
      case buttonTypes.capsLock:
        btn = this._createCapsLockButton(btnConfig);
        break;
      case buttonTypes.backspace:
        btn = this._createBackspaceButton(btnConfig);
        break;
      case buttonTypes.tab:
        btn = this._creatTabButton(btnConfig);
        break;
      case buttonTypes.enter:
        btn = this._creatEnterButton(btnConfig);
        break;
      case buttonTypes.shift:
        btn = this._creatShiftButton(btnConfig);
        break;
      case buttonTypes.control:
        btn = this._creatControlButton(btnConfig);
        break;
      case buttonTypes.meta:
          btn = this._creatMetaButton(btnConfig);
          break;
      case buttonTypes.alt:
        btn = this._creatAltButton(btnConfig);
        break;
      case buttonTypes.spacebar:
        btn = this._creatSpacebarButton(btnConfig);
        break;
    }

    return btn;
  }

  _createSymbolButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = this.language === 'EN'
      ? btnConfig.text.en.default
      : btnConfig.text.ru.default;
    btn.id = btnConfig.id;

    btn.onclick = () => {
      this._printSymbol(btnConfig.text);
    };

    return btn;
  }

  __printSymbol(btnConfig) {
    
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

    btn.onclick = () => {
      this.isShiftOn = true;
    };

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
      
     
      let button = event.code;

      this._printLetter(buttonConfig[button]);
      this._selectButton(button);
      
    }

    document.onkeyup = (event) => {
      
      let button = event.code;

      this._printLetter(buttonConfig[button]);
      this._deselectButton(button);
      
    }
  }

  _printLetter(text) { // TODO: check
    const letter = this.language === 'EN' ? text.en : text.ru;
    const output = this.isCapsLockOn ? letter.toUpperCase() : letter;

    document.querySelector('.textarea').value += output;

  }

  _selectButton(id) { // TODO check
    const btn = document.getElementById(id);

    btn.classList.add('btn-selected');
  }

  _deselectButton(id) { // TODO check
    const btn = document.getElementById(id);

    btn.classList.remove('btn-selected');
  }


//   _changeLanguage(event) {

//     this.language = this.language === 'EN' ? 'RU' : 'EN';
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