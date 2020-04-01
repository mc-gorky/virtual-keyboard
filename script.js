

const keyboardMap = {
  a: {
    en: 'a',
    ru: 'ф',
  },
  s: {
    en: 's',
    ru: 'ы',
  },
  z: {
    en: 'z',
    ru: 'я',
  },
};

const config = [
  [
    {
      type: 'printLetter',
      text: keyboardMap.a,
      id: 'KeyA',
    },
    {
      type: 'printLetter',
      text: keyboardMap.s,
      id: 'KeyS',
    }
  ],
  [
    {
      type: 'capsLock',
      text: 'Caps Lock',
    },
    {
      type: 'printLetter',
      text: keyboardMap.z,
      id: 'KeyZ',
    },
    
  ]
  
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

  _printLetter(text) {
    const letter = this.language === 'EN' ? text.en : text.ru;
    const output = this.isCapsLockOn ? letter.toUpperCase() : letter;

    // alert(output);
  }

  _createCapsLockButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;

    btn.onclick = this._onCapsLockClick.bind(this);

    return btn;
  }

  _onCapsLockClick(event) {
    this.isCapsLockOn = !this.isCapsLockOn;

    event.target.classList.toggle('btn-selected');
  }

  _addKeyboardListener() {
    document.onkeydown = (event) => {
      if (event.code === 'KeyA') {
        this._printLetter(keyboardMap.a);
        this._selectButton('KeyA');
      } 
    }

    document.onkeyup = (event) => {
      if (event.code === 'KeyA') {
        this._printLetter(keyboardMap.a);
        this._deselectButton('KeyA');
      } 
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

  // _changeLanguage(event) {
  //   this.language = this.language === 'EN' ? 'RU' : 'EN';

  //   event.target.innerText = this.language;

  //   localStorage.setItem('language', this.language);
  // }
}


class Textarea {
  constructor() {
    this.value = '';
    
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');  
    document.body.appendChild(textarea);
  }

}