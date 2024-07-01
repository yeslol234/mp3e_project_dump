/*function parseChemicalFormula(formula) {
    const elementCounts = {};
    const elementRegex = /([A-Z][a-z]*)(\d*)/g;
  
    let match;
    while ((match = elementRegex.exec(formula)) !== null) {
      const element = match[1];
      const count = parseInt(match[2]) || 1;
      
      if (elementCounts[element]) {
        elementCounts[element] += count;
      } else {
        elementCounts[element] = count;
      }
    }
    
    return elementCounts;
  }
console.log(parseChemicalFormula("CH4"))
*/
