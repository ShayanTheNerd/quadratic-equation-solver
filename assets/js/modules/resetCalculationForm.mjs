const emptyResultBoxMarkup = `
   <math>
      <mrow>
         <mi>x</mi>
         <mo>=</mo>
         <mtext>{</mtext>
         <mspace class="w-1.5" />
         <mn>?</mn>
         <mspace class="w-1.5" />
         <mtext>}</mtext>
      </mrow>
   </math>
`;

export default function resetCalculationForm(variableInputs, resultBox) {
	variableInputs[0].focus();
	resultBox.innerHTML = emptyResultBoxMarkup;
}
