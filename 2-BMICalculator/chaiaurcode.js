const form = document.querySelector('form');
const bmi = (weight / Math.pow(height, 2)) * 10000;

form.addEventListener('submit', (event) => {
  //blocks default form submission to server
  event.preventDefault();

  //we write these values here as if wrote outside then on loading the empty values might get stored inside variables height and weight
  //so to avoid this we store these values only when the user fills the form and submit it.
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  //by default the values are returned as string but to calculate bmi here we need integer values

  //div where bmi will be displayed
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height, ${height}`;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight, ${weight}`;
  } else {
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    const guide = document.querySelector('#weight-guide');
    if (bmi < 18.6) {
      guide.innerHTML = `<span style="font-weight:bold; color:white;">Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      guide.innerHTML = `<span style="font-weight:bold; color:white;">Normal Range</span>`;
    } else {
      guide.innerHTML = `<span style="font-weight:bold; color:white;">Over Weight</span>`;
    }
  }
});
