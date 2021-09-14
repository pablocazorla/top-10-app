const storageNameDefault = "top10app";

export const storage = (() => {
  return {
    get: (stname) => {
      if (typeof window !== "undefined") {
        const storageName = stname || storageNameDefault;
        const v = localStorage.getItem(storageName);
        if (v) {
          return JSON.parse(v);
        }
        return "none";
      }
    },
    set: (value, stname) => {
      if (typeof window !== "undefined") {
        const storageName = stname || storageNameDefault;
        localStorage.setItem(storageName, JSON.stringify(value));
      }
    },
    update: (newValues, stname) => {
      if (typeof window !== "undefined") {
        const storageName = stname || storageNameDefault;
        const v = localStorage.getItem(storageName);
        const currentJSON = v ? JSON.parse(v) : {};
        const o = {
          ...currentJSON,
          ...newValues,
        };
        localStorage.setItem(storageName, JSON.stringify(o));
      }
    },
    delete: (stname) => {
      if (typeof window !== "undefined") {
        const storageName = stname || storageNameDefault;
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

export const downloadFile = (content, filename) => {
  var data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(content));
  const a = document.createElement("a");
  a.setAttribute("href", "data:" + data);
  a.setAttribute("download", filename);
  a.click();
};

export default {};
