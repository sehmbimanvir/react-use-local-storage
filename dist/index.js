'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const Storage = {
    prefix: 'react_hook_',

    set (key, data) {
        localStorage.setItem(this.getKey(key), data);
    },

    get (key) {
        return localStorage.getItem(this.getKey(key))
    },

    setJSON (key, data) {
        let json = JSON.stringify(data);
        this.set(key, json);
    },

    getJSON (key, def = null) {
        let data = this.get(key);
        if (!data && def) return def
        return JSON.parse(data)
    },

    getKey (key) {
        return `${this.prefix}_${key}`
    },

    remove (key) {
        if (Array.isArray(key)) {
            key.forEach(value => {
                localStorage.removeItem(this.getKey(value));
            });
        } else {
            localStorage.removeItem(this.getKey(key));
        }
    }
};

const useLocalStorage = (key, def = null) => {
  const [state, setState] = react.useState(Storage.getJSON(key, def));
  
  react.useEffect(() => {
    Storage.setJSON(key, state);
  }, [state]);

  return [state, setState]
};

exports.useLocalStorage = useLocalStorage;
//# sourceMappingURL=index.js.map
