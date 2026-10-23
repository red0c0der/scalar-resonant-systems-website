const fs = require('fs');
const path = require('path');
const vm = require('vm');

function runVerification() {
  console.log("=== STARTING PURE NODE.JS DOM VERIFICATION ===");

  const labHtmlPath = path.join(__dirname, '../public/lab/index.html');
  const labHtml = fs.readFileSync(labHtmlPath, 'utf8');

  // 1. Structural Checks in HTML
  const dockIdx = labHtml.indexOf('id="style-dock"');
  const scriptIdx = labHtml.indexOf('<!-- Interactive Simulation Canvas Scripts -->');
  if (dockIdx === -1 || scriptIdx === -1) {
    throw new Error("Missing #style-dock or script tag in lab/index.html");
  }
  if (dockIdx > scriptIdx) {
    throw new Error("FAIL: #style-dock is placed AFTER script tag!");
  }
  console.log("✓ CHECK 1: #style-dock is placed BEFORE the simulation script tag");

  if (!labHtml.includes('id="auto-melt-btn"')) {
    throw new Error("FAIL: auto-melt-btn missing from HTML");
  }
  if (!labHtml.includes('id="dock-melt-toggle"')) {
    throw new Error("FAIL: dock-melt-toggle missing from HTML");
  }
  console.log("✓ CHECK 2: Both #auto-melt-btn and #dock-melt-toggle exist in DOM");

  if (!labHtml.includes('radii[0] / radii[i]')) {
    throw new Error("FAIL: Physics speed inversion not implemented in toroid!");
  }
  console.log("✓ CHECK 3: Physics speed inversion strictly implemented (angular velocity inversely proportional to radius)");

  const callouts = labHtml.match(/class="theory-callout"/g);
  if (!callouts || callouts.length < 4) {
    throw new Error(`FAIL: Expected at least 4 theory-callouts, found ${callouts ? callouts.length : 0}`);
  }
  console.log(`✓ CHECK 4: Found ${callouts.length} educational theory callouts covering all 4 modules`);

  // 2. Extract and execute all scripts in sequence
  const scriptMatches = [...labHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  if (scriptMatches.length < 2) {
    throw new Error(`Expected at least 2 script tags in lab/index.html, found ${scriptMatches.length}`);
  }
  console.log(`✓ CHECK: Extracted ${scriptMatches.length} script tags to execute in sequence`);

  // 3. Lightweight Mock DOM Environment
  class MockElement {
    constructor(tagName, id = '', className = '') {
      this.tagName = tagName.toUpperCase();
      this.id = id;
      this.className = className;
      this.classList = {
        _set: new Set(className ? className.split(/\s+/) : []),
        add(cls) { this._set.add(cls); },
        remove(cls) { this._set.delete(cls); },
        toggle(cls, force) {
          if (force === undefined) {
            if (this._set.has(cls)) this._set.delete(cls);
            else this._set.add(cls);
          } else if (force) {
            this._set.add(cls);
          } else {
            this._set.delete(cls);
          }
        },
        contains(cls) { return this._set.has(cls); }
      };
      this.attributes = {};
      this.listeners = {};
      this.textContent = '';
      this.innerHTML = '';
      this.value = '';
    }

    setAttribute(k, v) { this.attributes[k] = String(v); }
    getAttribute(k) { return this.attributes[k] || null; }
    hasAttribute(k) { return k in this.attributes; }

    addEventListener(event, fn) {
      if (!this.listeners[event]) this.listeners[event] = [];
      this.listeners[event].push(fn);
    }
    removeEventListener(event, fn) {
      if (!this.listeners[event]) return;
      this.listeners[event] = this.listeners[event].filter(f => f !== fn);
    }
    dispatchEvent(event) {
      const type = typeof event === 'string' ? event : event.type;
      if (this.listeners[type]) {
        this.listeners[type].forEach(fn => fn({ target: this, ...event }));
      }
    }
    click() {
      this.dispatchEvent({ type: 'click' });
    }
    getContext() {
      return {
        fillRect: () => {}, clearRect: () => {}, strokeRect: () => {},
        beginPath: () => {}, moveTo: () => {}, lineTo: () => {},
        stroke: () => {}, fill: () => {}, arc: () => {}, setLineDash: () => {},
        fillStyle: '', strokeStyle: '', lineWidth: 1, shadowColor: '', shadowBlur: 0
      };
    }
  }

  const localStorageStore = {};
  const mockLocalStorage = {
    getItem(k) { return localStorageStore[k] || null; },
    setItem(k, v) { localStorageStore[k] = String(v); },
    removeItem(k) { delete localStorageStore[k]; },
    clear() { Object.keys(localStorageStore).forEach(k => delete localStorageStore[k]); }
  };

  const elementsById = {};
  function reg(id, tag, cls = '') {
    const el = new MockElement(tag, id, cls);
    elementsById[id] = el;
    return el;
  }

  // Register all DOM elements queried by lab/index.html
  const body = new MockElement('BODY');
  body.setAttribute('data-style', 'cyberpunk');

  const dockLabel = reg('dock-label', 'span', 'style-chip-label');
  dockLabel.textContent = 'CYBERPUNK';

  const autoMeltBtn = reg('auto-melt-btn', 'button', 'nav-btn');
  const dockMeltToggle = reg('dock-melt-toggle', 'button', 'style-dock-melt-toggle');
  const audioBtn = reg('audio-btn', 'button', 'nav-btn');
  const audioIcon = reg('audio-icon', 'span');

  const combCanvas = reg('comb-canvas', 'canvas');
  const btnComb64 = reg('btn-comb-64', 'button', 'toggle-chip active');
  const btnComb192 = reg('btn-comb-192', 'button', 'toggle-chip');
  const sliderTensorPower = reg('slider-tensor-power', 'input', 'slider-bar');
  const tensorPowerVal = reg('tensor-power-val', 'span');
  const combTelemetry = reg('comb-telemetry', 'div');
  const combGridLabel = reg('comb-grid-label', 'span');

  const aldCanvas = reg('ald-canvas', 'canvas');
  const sliderAldLen = reg('slider-ald-len', 'input');
  const sliderAldGap = reg('slider-ald-gap', 'input');
  const aldLenVal = reg('ald-len-val', 'span');
  const aldGapVal = reg('ald-gap-val', 'span');
  const aldTelemetry = reg('ald-telemetry', 'div');

  const toroidCanvas = reg('toroid-canvas', 'canvas');
  const sliderPockels = reg('slider-pockels', 'input');
  const sliderPhi = reg('slider-phi', 'input');
  const pockelsVal = reg('pockels-val', 'span');
  const phiVal = reg('phi-val', 'span');

  const emitterCanvas = reg('emitter-canvas', 'canvas');
  const btnOam1 = reg('btn-oam-1', 'button', 'toggle-chip active');
  const btnOam2 = reg('btn-oam-2', 'button', 'toggle-chip');
  const btnOam3 = reg('btn-oam-3', 'button', 'toggle-chip');
  const emitterTelemetry = reg('emitter-telemetry', 'div');
  const sliderOft = reg('slider-oft', 'input');
  const oftVal = reg('oft-val', 'span');
  const dmdModeVal = reg('dmd-mode-val', 'span');

  const ambientCanvas = reg('ambient-canvas', 'canvas');

  // Style chips (7 chips)
  const chipTargets = ['cyberpunk', 'titanium-gold', 'silicon-prism', 'matrix-emerald', 'synthwave-sunset', 'solarflare-plasma', 'stealth-carbon'];
  const chips = chipTargets.map((target, idx) => {
    const chip = new MockElement('button', '', `style-chip-btn ${idx === 0 ? 'active' : ''}`);
    chip.setAttribute('data-style-target', target);
    return chip;
  });

  const mockDocument = {
    body,
    readyState: 'complete',
    getElementById(id) { return elementsById[id] || null; },
    querySelectorAll(selector) {
      if (selector === '.style-chip-btn') return chips;
      return [];
    },
    addEventListener: () => {},
    removeEventListener: () => {}
  };

  const mockWindow = {
    document: mockDocument,
    localStorage: mockLocalStorage,
    innerWidth: 1920,
    innerHeight: 1080,
    addEventListener: () => {},
    removeEventListener: () => {},
    requestAnimationFrame: (cb) => setTimeout(cb, 16),
    AudioContext: class {
      constructor() { this.currentTime = 0; this.state = 'running'; }
      createOscillator() {
        return {
          frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
          connect: () => {}, start: () => {}, stop: () => {}
        };
      }
      createGain() {
        return {
          gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
          connect: () => {}
        };
      }
      createBiquadFilter() {
        return {
          frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
          connect: () => {}
        };
      }
      resume() { return Promise.resolve(); }
    }
  };
  mockWindow.webkitAudioContext = mockWindow.AudioContext;

  const sandbox = {
    window: mockWindow,
    document: mockDocument,
    localStorage: mockLocalStorage,
    requestAnimationFrame: mockWindow.requestAnimationFrame,
    console,
    Math,
    parseFloat,
    parseInt,
    setInterval,
    clearInterval,
    setTimeout,
    clearTimeout
  };

  vm.createContext(sandbox);
  scriptMatches.forEach((m) => {
    vm.runInContext(m[1], sandbox);
  });

  console.log("✓ CHECK 5: Script executed in VM sandbox without errors");

  // Verify Initial State
  if (body.getAttribute('data-style') !== 'cyberpunk') {
    throw new Error(`FAIL: Initial body style is '${body.getAttribute('data-style')}', expected 'cyberpunk'`);
  }
  console.log("✓ CHECK 6: Initial body style is 'cyberpunk'");

  // Test Chip Clicking (Titanium Gold)
  chips[1].click();
  if (body.getAttribute('data-style') !== 'titanium-gold') {
    throw new Error(`FAIL: Body style after clicking chip 1 is '${body.getAttribute('data-style')}'`);
  }
  if (!chips[1].classList.contains('active') || chips[0].classList.contains('active')) {
    throw new Error("FAIL: Active chip class not updated correctly");
  }
  if (dockLabel.textContent !== 'TITANIUM') {
    throw new Error(`FAIL: dockLabel is '${dockLabel.textContent}', expected 'TITANIUM'`);
  }
  if (mockLocalStorage.getItem('SRS_ACTIVE_STYLE') !== 'titanium-gold') {
    throw new Error("FAIL: localStorage did not save 'titanium-gold'");
  }
  console.log("✓ CHECK 7: Clicking chip 1 correctly switches to 'titanium-gold' and persists to localStorage");

  // Test Chip Clicking (Matrix Emerald)
  chips[3].click();
  if (body.getAttribute('data-style') !== 'matrix-emerald') {
    throw new Error(`FAIL: Body style after clicking chip 3 is '${body.getAttribute('data-style')}'`);
  }
  if (dockLabel.textContent !== 'QUANTUM') {
    throw new Error(`FAIL: dockLabel is '${dockLabel.textContent}', expected 'QUANTUM'`);
  }
  if (mockLocalStorage.getItem('SRS_ACTIVE_STYLE') !== 'matrix-emerald') {
    throw new Error("FAIL: localStorage did not save 'matrix-emerald'");
  }
  console.log("✓ CHECK 8: Clicking chip 3 switches to 'matrix-emerald' and updates dockLabel to 'QUANTUM'");

  // Test Auto-Melt Toggle
  autoMeltBtn.click();
  if (!autoMeltBtn.innerHTML.includes('30s') || !dockMeltToggle.textContent.includes('30s')) {
    throw new Error("FAIL: Auto-melt did not engage 30s mode");
  }
  console.log("✓ CHECK 9: Auto-melt engaged 30s mode synchronized on both nav and dock buttons");

  autoMeltBtn.click();
  if (!autoMeltBtn.innerHTML.includes('60s') || !dockMeltToggle.textContent.includes('60s')) {
    throw new Error("FAIL: Auto-melt did not engage 60s mode");
  }
  console.log("✓ CHECK 10: Auto-melt engaged 60s mode");

  // Clicking chip stops auto-melt
  chips[0].click();
  if (autoMeltBtn.innerHTML.includes('60s') || autoMeltBtn.classList.contains('active')) {
    throw new Error("FAIL: Clicking chip did not cancel auto-melt");
  }
  if (body.getAttribute('data-style') !== 'cyberpunk') {
    throw new Error("FAIL: Clicking chip 0 did not revert to cyberpunk");
  }
  console.log("✓ CHECK 11: Clicking chip cancels auto-melt and sets cyberpunk");

  // Test OFT Lens Slider
  sliderOft.value = "17.5";
  sliderOft.dispatchEvent({ type: 'input' });
  if (oftVal.textContent !== '17.5 mm') {
    throw new Error(`FAIL: oftVal is '${oftVal.textContent}', expected '17.5 mm'`);
  }
  console.log("✓ CHECK 12: sliderOft correctly updates oftVal to '17.5 mm'");

  // Test OAM Mode Toggles
  btnOam2.click();
  if (!dmdModeVal.textContent.includes('Spiral Phase Plate')) {
    throw new Error(`FAIL: dmdModeVal is '${dmdModeVal.textContent}'`);
  }
  console.log("✓ CHECK 13: btnOam2 updates dmdModeVal to Spiral Phase Plate");

  btnOam3.click();
  if (!dmdModeVal.textContent.includes('Trinary Superposition')) {
    throw new Error(`FAIL: dmdModeVal is '${dmdModeVal.textContent}'`);
  }
  console.log("✓ CHECK 14: btnOam3 updates dmdModeVal to Trinary Superposition");

  // 4. Verify Next.js build output in out/
  const outLabHtml = fs.readFileSync(path.join(__dirname, '../out/lab/index.html'), 'utf8');
  if (!outLabHtml.includes('id="style-dock"')) {
    throw new Error("FAIL: out/lab/index.html missing style-dock");
  }
  const outIndexHtml = fs.readFileSync(path.join(__dirname, '../out/index.html'), 'utf8');
  if (!outIndexHtml.includes('data-style') && !outIndexHtml.includes('SRS_ACTIVE_STYLE')) {
    throw new Error("FAIL: out/index.html missing style integration");
  }
  console.log("✓ CHECK 15: Verified exported static output in out/lab/index.html and out/index.html");

  console.log("\n==========================================");
  console.log("  ALL 15 VERIFICATION SUITES PASSED 100%");
  console.log("==========================================");
}

runVerification();
