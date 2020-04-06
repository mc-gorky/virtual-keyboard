

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
  del: 'del',
  spacebar: 'spacebar',
}

const buttonsConfig = {
  Backquote: {
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
  Digit1: {
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
  Digit2: {
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
  Digit3: {
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
  Digit4: {
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
  Digit5: {
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
  Digit6: {
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
  Digit7: {
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
  Digit8: {
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
  Digit9: {
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
  Digit0: {
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
  Minus: {
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
  Equal: {
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
  Backspace: {
    type: buttonTypes.backspace,
    text: 'Backspace',
    id: 'Backspace',
  },
  Tab: {
    type: buttonTypes.tab,
    text: 'Tab',
    id: 'Tab',
  },
  KeyQ: {
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
  KeyW: {
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
  KeyE: {
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
  KeyR: {
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
  KeyT: {
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
  KeyY: {
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
  KeyU: {
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
  KeyI: {
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
  KeyO: {
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
  KeyP: {
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
  BracketLeft: {
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
  BracketRight: {
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
  Backslash: {
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
  CapsLock: {
    type: buttonTypes.capsLock,
    text: 'Caps Lock',
    id: 'CapsLock',
  },
  KeyA: {
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
  KeyS: {
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
  KeyD:{
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
  KeyF: {
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
  KeyG: {
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
  KeyH: {
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
  KeyJ: {
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
  KeyK: {
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
  KeyL: {
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
  Semicolon: {
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
  Quote: {
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
  Enter: {
    type: buttonTypes.enter,
    text: 'Enter',
    id: 'Enter',
  },
  ShiftLeft: {
    type: buttonTypes.shift,
    text: 'Shift',
    id: 'ShiftLeft',
  },
  ShiftRight: {
    type: buttonTypes.shift,
    text: 'Shift',
    id: 'ShiftRight',
  },
  KeyZ: {
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
  KeyX: {
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
  KeyC: {
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
  KeyV: {
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
  KeyB: {
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
  KeyN: {
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
  KeyM: {
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
  Comma: {
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
  Period: {
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
  Slash: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '/',
        shift: '?',
      },
      ru: {
        default: '.',
        shift: ',',
      },
    },
    id: 'Slash',
  },
  ControlLeft: {
    type: buttonTypes.control,
    text: 'Ctrl',
    id: 'ControlLeft', 
  },
  ControlRight: {
    type: buttonTypes.control,
    text: 'Ctrl',
    id: 'ControlRight', 
  },
  MetaLeft: {
    type: buttonTypes.meta,
    text: 'Win',
    id: 'MetaLeft', 
  },
  MetaRight: {
    type: buttonTypes.meta,
    text: 'Win',
    id: 'MetaRight', 
  },
  AltLeft: {
    type: buttonTypes.alt,
    text: 'Alt',
    id: 'AltLeft', 
  },
  AltRight: {
    type: buttonTypes.alt,
    text: 'Alt',
    id: 'AltRight', 
  },
  Space: {
    type: buttonTypes.spacebar,
    text: '',
    id: 'Space', 
  },
  ArrowLeft: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '◄',
        shift: '◄',
      },
      ru: {
        default: '◄',
        shift: '◄',
      },
    },
    id: 'ArrowLeft',
  },
  ArrowRight: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '►',
        shift: '►',
      },
      ru: {
        default: '►',
        shift: '►',
      },
    },
    id: 'ArrowRight',
  },
  ArrowDown: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '▼',
        shift: '▼',
      },
      ru: {
        default: '▼',
        shift: '▼',
      },
    },
    id: 'ArrowDown',
  },
  ArrowUp: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '▲',
        shift: '▲',
      },
      ru: {
        default: '▲',
        shift: '▲',
      },
    },
    id: 'ArrowUp',
  },
  Delete: {
    type: buttonTypes.del,
    text: 'Del',
    id: 'Delete', 
  },
};

const config = [
  [
    buttonsConfig.Backquote,
    buttonsConfig.Digit1,
    buttonsConfig.Digit2,
    buttonsConfig.Digit3,
    buttonsConfig.Digit4,
    buttonsConfig.Digit5,
    buttonsConfig.Digit6,
    buttonsConfig.Digit7,
    buttonsConfig.Digit8,
    buttonsConfig.Digit9,
    buttonsConfig.Digit0,
    buttonsConfig.Minus,
    buttonsConfig.Equal,
    buttonsConfig.Backspace,
  ],
  [
    buttonsConfig.Tab,
    buttonsConfig.KeyQ,
    buttonsConfig.KeyW,
    buttonsConfig.KeyE,
    buttonsConfig.KeyR,
    buttonsConfig.KeyT,
    buttonsConfig.KeyY,
    buttonsConfig.KeyU,
    buttonsConfig.KeyI,
    buttonsConfig.KeyO,
    buttonsConfig.KeyP,
    buttonsConfig.BracketLeft,
    buttonsConfig.BracketRight,
    buttonsConfig.Backslash,
    buttonsConfig.Delete,
  ],
  [
    buttonsConfig.CapsLock,
    buttonsConfig.KeyA,
    buttonsConfig.KeyS,
    buttonsConfig.KeyD,
    buttonsConfig.KeyF,
    buttonsConfig.KeyG,
    buttonsConfig.KeyH,
    buttonsConfig.KeyJ,
    buttonsConfig.KeyK,
    buttonsConfig.KeyL,
    buttonsConfig.Semicolon,
    buttonsConfig.Quote,
    buttonsConfig.Enter,
  ],
  [
    buttonsConfig.ShiftLeft,
    buttonsConfig.KeyZ,
    buttonsConfig.KeyX,
    buttonsConfig.KeyC,
    buttonsConfig.KeyV,
    buttonsConfig.KeyB,
    buttonsConfig.KeyN,
    buttonsConfig.KeyM,
    buttonsConfig.Comma,
    buttonsConfig.Period,
    buttonsConfig.Slash,
    buttonsConfig.ArrowUp,
    buttonsConfig.ShiftRight,
  ],
  [
    buttonsConfig.ControlLeft,
    buttonsConfig.MetaLeft,
    buttonsConfig.AltLeft,
    buttonsConfig.Space,
    buttonsConfig.AltRight,
    buttonsConfig.ArrowLeft,
    buttonsConfig.ArrowDown,
    buttonsConfig.ArrowRight,
    buttonsConfig.MetaRight,
    buttonsConfig.ControlRight,
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
      const description = new Description();
    }
}

class Keyboard {
  constructor(language, config) {
      this.language = language;
      this.selectedButtons = [];

      this.keyboardContainer = this._createKeyboardContainer();

      config.forEach(rowConfig => this._createRow(rowConfig));
      
      this._addKeyboardListener();
  }

  _createKeyboardContainer() {
    const keyboardContainer = document.createElement('div');

    keyboardContainer.className = 'keyboard-container';
    keyboardContainer.onclick = (event) => {
      const keyCode = event.target.id;
    }

    document.body.appendChild(keyboardContainer);

    return keyboardContainer;
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

    this.keyboardContainer.append(row);
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
      case buttonTypes.del:
        btn = this._creatDelButton(btnConfig);
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
    btn.setAttribute('symbol-btn', '');

    btn.onclick = this._onSymbolButtonClick.bind(this);

    return btn;
  }

  _onSymbolButtonClick(event) {
    const button = event.target;

    this._printSymbol(button);
  }

  _printSymbol(button) {
    const output = button.innerText;
    const textArea = document.getElementById('textarea');
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;

    textArea.focus();
    textArea.setRangeText(output, selectionStart, selectionEnd, 'end');
  }

  _onEnterButtonClick() {
    this._printEnter();
  }

  _printEnter() {
    const output = "\n";

    const textArea = document.getElementById('textarea');
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    textArea.focus();
    textArea.setRangeText(output, selectionStart, selectionEnd, 'end');
  }

  _onSpaceButtonClick() {
    this._printSpace();
  }

  _printSpace() {
    const output = " ";

    const textArea = document.getElementById('textarea');
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    textArea.focus();
    textArea.setRangeText(output, selectionStart, selectionEnd, 'end');
  }

  _onTabClick() {
    this._printTab();
  }

  _printTab() {
    const output = "    ";
    const textArea = document.getElementById('textarea');

    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;

    textArea.focus();
    textArea.setRangeText(output, selectionStart, selectionEnd, 'end');

    //document.querySelector('.textarea').value += output;
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

    btn.onclick = this._onBackspaceClick;

    return btn;
  }

  _creatDelButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    btn.onclick = this._onDelClick;

    return btn;
  }

  _creatEnterButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    btn.onclick = this._onEnterButtonClick.bind(this);

    return btn;
  }

  _creatShiftButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    btn.onclick = this._onShiftClick.bind(this);

    return btn;
  }

  _creatControlButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    btn.onclick = this._onCtrlClick.bind(this);

    return btn;
  }

  _creatAltButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    return btn;
  }

  _creatSpacebarButton(btnConfig) {
    const btn = document.createElement('button');

    btn.id = btnConfig.id;

    btn.onclick = this._onSpaceButtonClick.bind(this);

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

    btn.onclick = this._onTabClick.bind(this);

    return btn;
  }

  _onCapsLockClick(event) {
    const button = event.target;

    this._toggleCapsLock(button);
  }

  _toggleCapsLock(button) {
    const index = this.selectedButtons.indexOf('CapsLock'); // move to separate const

    if (index === -1) { 
      this.selectedButtons.push('CapsLock');
    } else {
      this.selectedButtons.splice(index, 1);
    }

    button.classList.toggle('btn-selected');

    this._changeButtonText();
  }

  _onShiftClick() {
    const id = event.target.id;

    this._handleShiftClick(id);
  }

  _handleShiftClick(code) {
    const isShiftOn = this.selectedButtons.includes('ShiftLeft') || this.selectedButtons.includes('ShiftRight'); // move to separate const

    if (isShiftOn) { 
      this.selectedButtons = this.selectedButtons.filter(button => button !== 'ShiftLeft' && button !== 'ShiftRight');
    } else {
      this.selectedButtons.push(code);
    }

    this._checkShiftCtrlCombination();
    this._changeButtonText();
  }

  _onCtrlClick(event) {
    const id = event.target.id;

    this._handleCtrlClick(id);
  }

  _handleCtrlClick(code) {

    const isCtrlOn = this.selectedButtons.includes('ControlLeft') || this.selectedButtons.includes('ControlRight'); // move to separate const

    if (isCtrlOn) { 
      this.selectedButtons = this.selectedButtons.filter(button => button !== 'ControlLeft' && button !== 'ControlRight');
    } else {
      this.selectedButtons.push(code);
    }

    this._checkShiftCtrlCombination();
    this._changeButtonText();
  }

  _handleShiftCtrlCombination() {
    let isShiftOn = this.selectedButtons.includes('ShiftLeft') || this.selectedButtons.includes('ShiftRight'); // move to separate const
    let isCtrlOn = this.selectedButtons.includes('ControlLeft') || this.selectedButtons.includes('ControlRight'); // move to separate const

    if (isShiftOn && isCtrlOn) {
      this._changeLanguage();

      this.selectedButtons = this.selectedButtons.filter(
        button => button !== 'ShiftLeft' && button !== 'ShiftRight' && button !== 'ControlLeft' && button !== 'ControlRight'
      );
    }
  }

  _checkShiftCtrlCombination() {
    this._handleShiftCtrlCombination();

    this._toggleButton('ShiftLeft'); // move to separate const
    this._toggleButton('ShiftRight'); // move to separate const
    this._toggleButton('ControlLeft'); // move to separate const
    this._toggleButton('ControlRight'); // move to separate const
  }

  _toggleButton(buttonId) {
    const isButtonOn = this.selectedButtons.includes(buttonId);
    const buttonClassList = this.keyboardContainer.querySelector(`#${buttonId}`).classList;

    if (isButtonOn) {
      buttonClassList.add('btn-selected');
    } else {
      buttonClassList.remove('btn-selected');
    }
  }

  _changeLanguage() {
    this.language = this.language === 'EN' ? 'RU' : 'EN';
    localStorage.setItem('language', this.language);
  }

  _changeButtonText() {
    const isCapsLockOn = this.selectedButtons.includes('CapsLock'); // move to separate const
    const isShiftOn = this.selectedButtons.includes('ShiftLeft') || this.selectedButtons.includes('ShiftRight'); // move to separate const
    const languageKey = this.language === 'EN' ? 'en' : 'ru';

    const symbolBtns = this.keyboardContainer.querySelectorAll('button[symbol-btn]');

    symbolBtns.forEach(button => {
      const id = button.id;
      const config = buttonsConfig[id].text[languageKey];

      if (isShiftOn) {
        if (isCapsLockOn) {
          button.innerText = config.shift.toLowerCase();
        } else {
          button.innerText = config.shift;
        }
      } else {
        if (isCapsLockOn) {
          button.innerText = config.default.toUpperCase();
        } else {
          button.innerText = config.default;
        }
      }
    });
  }

  _onBackspaceClick() {
    const textArea = document.querySelector('.textarea');
    const textLength = textArea.textLength;
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    const selectedLength = selectionEnd - selectionStart;

    if (!textLength || !selectedLength && !selectionStart) {
      return;
    }

    textArea.focus();

    textArea.setRangeText('', selectionStart - 1, selectionStart, 'end');
  }

  _onDelClick() {
    const textArea = document.getElementById('textarea');
    const textLength = textArea.textLength;
    let selectionStart = textArea.selectionStart;
    
    textArea.focus();
    textArea.setRangeText('', selectionStart, selectionStart + 1, 'end');

  }

  _onKeyboardShiftOrCtrlDown(code) {
    const index = this.selectedButtons.indexOf(code);

    if (index === -1) { 
      this.selectedButtons.push(code);
    }

    this._changeButtonText();
  }

  _onKeyboardShiftUp() {
    this.selectedButtons = this.selectedButtons.filter(button => button !== 'ShiftLeft' && button !== 'ShiftRight');

    this._changeButtonText();
  }

  _onKeyboardCtrlUp() {
    this.selectedButtons = this.selectedButtons.filter(button => button !== 'ControlLeft' && button !== 'ControlRight');

    this._changeButtonText();
  }

  _addKeyboardListener() {

    document.onkeydown = (event) => {
      event.preventDefault();

      const { code } = event;
      const config = buttonsConfig[code];
      const button = this.keyboardContainer.querySelector(`#${code}`);

      switch(config.type) {
        case buttonTypes.printSymbol:
          this._printSymbol(button);
          this._selectButton(button);
          break;
        case buttonTypes.backspace:
          this._onBackspaceClick();
          this._selectButton(button);
          break;
        case buttonTypes.del:
          this._onDelClick();
          this._selectButton(button);
          break;

        case buttonTypes.enter:
          this._onEnterButtonClick();
          this._selectButton(button);
          break;
        case buttonTypes.tab:
          this._onTabClick();
          this._selectButton(button);
          break;
        case buttonTypes.shift:
          this._onKeyboardShiftOrCtrlDown(code);
          this._selectButton(button);
          this._handleShiftCtrlCombination();
          break;
        case buttonTypes.control:
          this._onKeyboardShiftOrCtrlDown(code);
          this._selectButton(button);
          this._handleShiftCtrlCombination();
          break;
        case buttonTypes.meta:
          this._selectButton(button);
            break;
        case buttonTypes.alt:
          this._selectButton(button);
          break;
        case buttonTypes.spacebar:
          this._onSpaceButtonClick();
          this._selectButton(button);
          break;
      }
    }

    document.onkeyup = (event) => {
      const { code } = event;
      const config = buttonsConfig[code];
      const button = this.keyboardContainer.querySelector(`#${code}`);

      switch(config.type) {
        case buttonTypes.printSymbol:
          this._deselectButton(button);
          break;
        case buttonTypes.backspace:
          this._deselectButton(button);
          break;
          case buttonTypes.del:
            this._deselectButton(button);
            break;
        case buttonTypes.capsLock:
          this._toggleCapsLock(button);
          break;
        case buttonTypes.tab:
          this._deselectButton(button);
          break;
        case buttonTypes.shift:
          this._onKeyboardShiftUp();
          this._deselectButton(button);
          break;
        case buttonTypes.control:
          this._onKeyboardCtrlUp();
          this._deselectButton(button);
          break;
        case buttonTypes.enter:
          this._deselectButton(button);
          break;
        case buttonTypes.meta:
          this._deselectButton(button);
          break;
        case buttonTypes.alt:
          this._deselectButton(button);
          break;
        case buttonTypes.spacebar:
          this._deselectButton(button);
          break;
      }
      
    }
  }

  _selectButton(button) {

    button.classList.add('btn-selected');
  }

  _deselectButton(button) {

    button.classList.remove('btn-selected');
  }
}


class Textarea {
  constructor() {
    this.value = '';
    
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');  
    textarea.id = 'textarea';
    document.body.appendChild(textarea);
  }
}

class Description {
  constructor() {  
    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = 'Клавиатура создана в операционной системе Windows. Для переключения клавиш нажмите ctrl + shift'
    document.body.appendChild(description);
  }
}