import {useState} from "react";
import "../styles/Calculator.css";


function Calculator(){
	const[calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/', '*', '+', '-', '.'];
	const cientific = ['Math.sin', 'Math.cos', 'Math.tan', 'Math.log', 'Math.PI', 'Math.E', 'Math.sqrt','(', ')'];
	const updateCalc = value => {
		if (
		  ops.includes(value) && calc === '' ||
		  ops.includes(value) && ops.includes(calc.slice(-1))
		) {
		  return;
		}
	  
		if (
		  cientific.includes(value) && cientific.includes(calc.slice(-1)) && calc.slice(-1) !== ')' && calc.slice(-1) !== '('
		) {
		  return;
		}
	  
		if (
		  cientific.includes(value) && cientific.includes(calc.slice(-2, -1)) && calc.slice(-1) !== ')' && calc.slice(-1) !== '('
		) {
		  return;
		}
	  
		setCalc(calc + value);
	  };


	function replaceCientific(str) {
		const replacements = {
		  'Math.sin': 'Sin',
		  'Math.cos': 'Cos',
		  'Math.tan': 'Tan',
		  'Math.log': 'Ln',
		  'Math.PI': 'π',
		  'Math.E': 'e',
		  'Math.sqrt': '√'
		};
		
	
		
			for (const [key, value] of Object.entries(replacements)) {
		  		str = str.replace(new RegExp(key, 'g'), value);	  
		}
			return str;
		
	
	  }
		
		const createDigits = () => {
			const digits = [];
			for (let i = 1; i < 10; i++) {
				digits.push(
					<button  onClick={() => updateCalc(i.toString())} key={i}> {i} </button>
				)
			}
			return digits;
		}

		const calculate = () => {
			try{
				setCalc(eval(calc).toString());
		}	catch(error){
			setCalc("Error");
			

		}
		}
		const deleteLast = () => {
			if (calc === "") {
				return;
			}

			const value = calc.slice(0, -1);
			setCalc(value);
		}
		const clean = () => {
			setCalc("");
			setResult("");
		}
		return(
			<div className="calculator">

					<div className="display">
						 { replaceCientific(calc) || "0"}
					</div>
		

					<div className="operators">
						<button onClick={() => updateCalc('/')}> / </button>
						<button onClick={() => updateCalc('*')}> * </button>
						<button onClick={() => updateCalc('+')}>+</button>
						<button onClick={() => updateCalc('-')}>-</button>
						<button onClick={deleteLast} >DEL</button>
						<button onClick={clean} >AC</button>
					</div>

					<div className="operators">
						<button onClick={() => updateCalc('Math.sin')}> sin </button>
						<button onClick={() => updateCalc('Math.cos')}> cos </button>
						<button onClick={() => updateCalc('Math.tan')}> tan </button>
						<button onClick={() => updateCalc('Math.log')}> ln </button>
						<button onClick={() => updateCalc('Math.PI')}>π</button>
						<button onClick={() => updateCalc('Math.E')}>e</button>
						<button onClick={() => updateCalc('Math.sqrt')}>√</button>
						
						
					</div>

					<div className="digits">
						{ createDigits() }
						<button  onClick={() => updateCalc('0')}>0</button>
						<button onClick={() => updateCalc('.')}>.</button>
						<button></button>
						<button onClick={() => updateCalc('(')}>(</button>
						<button onClick={() => updateCalc(')')}>)</button>
						<button onClick={calculate}>=</button>
					</div>  

				</div>



		);	
	
}
export default Calculator;
