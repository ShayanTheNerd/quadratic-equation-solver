const emptyResultBoxMarkup = `
   <math>
      <mrow>
         <mi>x</mi>
         <mo>=</mo>
         <mtext>{</mtext>
         <mspace />
         <mn class="px-1.5">?</mn>
         <mspace />
         <mtext>}</mtext>
      </mrow>
   </math>
`;

export default function resetCalculationForm(variableInputs, resultBox) {
	variableInputs[0].focus();
	resultBox.innerHTML = emptyResultBoxMarkup;
}
