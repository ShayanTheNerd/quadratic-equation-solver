export default function getVariables(variableInputs) {
	const variableValuePairs = variableInputs.reduce((previous, current) => {
		const variableName = current.dataset.variableName;
		const variableValue = +current.value;

		return [...previous, [variableName, variableValue]];
	}, []); // “[[variable, value], ...]”
	const variables = Object.fromEntries(variableValuePairs); // “{ variable: value, ... }”

	return variables;
}
