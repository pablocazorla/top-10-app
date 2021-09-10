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

export default {};
