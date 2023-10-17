export default function generateResultBoxMarkup(equationResult) {
	if (equationResult === 'no real value') {
		return `
         <math>
            <mrow>
               <mi>x</mi>
               <mo>=</mo>
               <mtext class="sm:relative sm:-top-0.5">${equationResult}</mtext>
            </mrow>
         </math>
      `;
	} else if (typeof equationResult === 'number') {
		return `
         <math>
            <mrow>
               <mi>x</mi>
               <mo class="inline-block px-1 sm:px-1.5">=</mo>
               <mn>${equationResult}</mn>
            </mrow>
         </math>
      `;
	} else if (Array.isArray(equationResult) && equationResult.length === 2) {
		return `
         <math class="space-x-6 sm:space-x-8">
            <mrow class="-ms-3 sm:ms-0">
               <msub>
                  <mi>x</mi>
                  <mn>1</mn>
               </msub>
               <mo class="sm:inline-block sm:px-1.5">=</mo>
               <mn class="text-1.5xl">${equationResult[0]}</mn>
            </mrow>

            <mrow>
               <msub>
                  <mi>x</mi>
                  <mn>2</mn>
               </msub>
               <mo class="sm:inline-block sm:px-1.5">=</mo>
               <mn class="text-1.5xl">${equationResult[1]}</mn>
            </mrow>
         </math>
      `;
	}
}
