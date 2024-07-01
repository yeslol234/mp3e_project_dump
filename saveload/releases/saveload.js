let saveload = {
    save: function(a, b) {
      localStorage.setItem(a, JSON.stringify(b));
    },
    load: function(a, b) {
      const c = localStorage.getItem(a);
      if (c === null) return b;
      try {
        const d = JSON.parse(c);
        if (typeof d === typeof b) return d;
        else {
          console.error("Type mismatch. Using default value.");
          return b;
        }
      } catch (e) {
        console.error("Error parsing JSON. Using default value.");
        return b;
      }
    },
  };
  