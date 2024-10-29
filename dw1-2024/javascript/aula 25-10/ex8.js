function trimSpaces(str) {
    return str
      .trim()
      .split(/\s+/)
      .join('      ');
}

console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"
  