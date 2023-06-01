function calculate(weight, height) {
  const imc = weight / (height ^ 2);
  let description = "Obesidade";
  if (imc < 18.5) description = "Magreza";
  else if (imc < 24.9) description = "Normal";
  else if (imc < 30) description = "Sobrepeso";

  return { description, imc };
}

module.exports = {
  calculate,
};
