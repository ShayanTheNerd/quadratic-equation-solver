export default function generateResultBoxMarkup(equationResult) {
	if (equationResult === 'no real value') {
		return `
         <math>
            <mrow>
               <mi>x</mi>
               <mo>=</mo>
               <mtext class="relative -top-0.5">${equationResult}</mtext>
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
         <math class="flex justify-evenly w-full">
            <mrow >
               <msub>
                  <mi>x</mi>
                  <mn>1</mn>
               </msub>
               <mo class="inline-block px-1 sm:px-1.5">=</mo>
               <mn>${equationResult[0]}</mn>
            </mrow>

            <mrow> 
               <msub>
                  <mi>x</mi>
                  <mn>2</mn>
               </msub>
               <mo class="inline-block px-1 sm:px-1.5">=</mo>
               <mn>${equationResult[1]}</mn>
            </mrow>
         </math>
      `;
	}
}
