//  Ferreyra Gustavo David <brakdag@gmail.com>
//  Random Application Logistic 
//  Stored random

const MEM_SIZE = 0xFFFF
var m = []
var x = 0.8
var i = 0


/** function random 
 *  @return {float}: between 0 and 1.
 */
function random(){
	if (m.length==0){
		for(let n=0;n<MEM_SIZE;n++){
			m.push(x = 3.9999999999999999*x*(1-x))	
		}
		return m[i++]
	}
	else {
  	 i=i==m.length ? 0 : i 
		return m[i++]
	}
}

module.exports = {random}

//  Spanish Description: Esta función trata de usar el fenómeno de la
//                       aplicación logistica para obtener números seudoaleatorios,
//                       además son almacenados en una matríz de tamaño MEM_SIZE para
//					     su rápido acceso y movimiento cíclico. En la primer llamada
//						 se genera la matriz de números aletorios. 
