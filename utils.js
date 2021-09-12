const storageName = "top10app";

export const storage = (() => {
  return {
    get: () => {
      if (typeof window !== "undefined") {
        const v = localStorage.getItem(storageName);
        if (v) {
          return JSON.parse(v);
        }
        return "none";
      }
    },
    set: (value) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageName, JSON.stringify(value));
      }
    },
    update: (newValues) => {
      if (typeof window !== "undefined") {
        const v = localStorage.getItem(storageName);
        const currentJSON = v ? JSON.parse(v) : {};
        const o = {
          ...currentJSON,
          ...newValues,
        };
        localStorage.setItem(storageName, JSON.stringify(o));
      }
    },
    delete: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem(storageName);
      }
    },
  };
})();

export const camelize = (str) => {
  return str
    .toLowerCase()
    .replace(/á+/g, "a")
    .replace(/é+/g, "e")
    .replace(/í+/g, "i")
    .replace(/ó+/g, "o")
    .replace(/ú+/g, "u")
    .replace(/ñ+/g, "n")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export default {};
