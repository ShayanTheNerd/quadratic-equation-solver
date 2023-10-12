import getVariables from './modules/getVariables.mjs';
import getValuesOfEquation from './modules/solveEquation.mjs';
import resetCalculationForm from './modules/resetCalculationForm.mjs';
import generateResultMarkup from './modules/generateResultMarkup.mjs';

const resultBox = document.getElementById('result_box');
const clearInputsBtn = document.getElementById('clear_inputs_btn');
const calculationForm = document.getElementById('calculation_form');
const variableInputs = document.querySelectorAll('.js-variable-input');

clearInputsBtn.addEventListener('click', () => resetCalculationForm(variableInputs, resultBox));
calculationForm.addEventListener('submit', event => {
	event.preventDefault();

	const variables = getVariables([...variableInputs]);
	const equationResult = getValuesOfEquation(variables);
	const resultBoxMarkup = generateResultMarkup(equationResult);

	resultBox.innerHTML = resultBoxMarkup;
	variableInputs[0].focus();
});
