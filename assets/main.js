'use strict';

// required DOM nodes
const variableInputs = [...document.querySelectorAll('.js-variable-input')];
const clearInputsBtn = document.querySelector('#clearInputsBtn');
const calculationForm = document.querySelector('#calculationForm');
const resultBox = document.querySelector('#resultBox');

// event listeners
clearInputsBtn.addEventListener('click', clearInputs);
calculationForm.addEventListener('submit', solveEquation);

// function declarations
function clearInputs() {
	const emptyResultboxMarkup = /* xml */ `
      <math>
         <mrow>
            <mi>x</mi>
            <mo>=</mo>
            <mtext>{</mtext>
            <mspace width="5px" />
            <mn>?</mn>
            <mspace width="5px" />
            <mtext>}</mtext>
         </mrow>
      </math>
   `;

	resultBox.innerHTML = emptyResultboxMarkup;

	variableInputs.forEach(input => (input.value = ''));

	variableInputs[0].focus();
}

function solveEquation(event) {
	event.preventDefault();

	// create an array of [variable, value] arrays
	const variableValues = variableInputs.reduce((acc, cur) => [...acc, [cur.dataset.variableName, cur.value]], []);

	const variablesObject = Object.fromEntries(variableValues);

	calculateDelta(variablesObject);
}

function calculateDelta(variables) {
	const { a, b, c } = variables;

	/* prettier-ignore */
	const delta = (b * b) - (4 * a * c);

	solveForX(delta, variables);
}

function solveForX(delta, variables) {
	const { a, b } = variables;

	switch (true) {
		case delta > 0: {
			const valueOfX1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
			const valueOfX2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
			const resultMarkup = /* xml */ `
            <math style="display: flex; justify-content: space-around; width: 100%">
               <mrow style="margin-left: 25px; margin-right: 35px" class="sm:!m-0">
                  <msub>
                     <mi>x</mi>
                     <mn>1</mn>
                  </msub>
                  <mo style="margin-inline: -3px" class="sm:!m-0">=</mo>
                  <mn>${valueOfX1}</mn>
               </mrow>

               <mrow>
                  <msub>
                     <mi>x</mi>
                     <mn>2</mn>
                  </msub>
                  <mo style="margin-inline: -3px" class="sm:!m-0">=</mo>
                  <mn>${valueOfX2}</mn>
               </mrow>
            </math>
         `;

			resultBox.innerHTML = resultMarkup;
			break;
		}
		case delta === 0: {
			const valueOfX = -b / (2 * a);
			const resultMarkup = /* xml */ `
            <math>
               <mrow>
                  <mi>x</mi>
                  <mo>=</mo>
                  <mn>${valueOfX}</mn>
               </mrow>
            </math>
         `;

			resultBox.innerHTML = resultMarkup;
			break;
		}
		default: {
			const resultMarkup = /* xml */ `
            <math>
               <mrow>
                  <mi>x</mi>
                  <mo>=</mo>
                  <mtext>no real value!</mtext>
               </mrow>
            </math>
         `;

			resultBox.innerHTML = resultMarkup;
			break;
		}
	}
}
