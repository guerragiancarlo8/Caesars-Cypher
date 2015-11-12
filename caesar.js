var MODULE = function(shift){


	return {

		cipher: function(message) {

			if(shift > 0 || shift < 0){
				shift = shift*-1;
			}
			if(shift == null){

				shift = 3
			}


			splitted = message.split('');
			var step1;
			var step2;

			var charcode;

			for(var i = 0; i<splitted.length; i++){

				if(splitted[i] >= "A" && splitted[i] <= "Z"){

					charcode = splitted[i].charCodeAt(0)

					if((charcode - shift) > 122){

						console.log((charcode - shift))
						charcode = (charcode - shift) - 26
					}
					else if((charcode - shift) < 97){

						charcode = (charcode - shift) + 26
					}
					
					else{

						charcode = charcode - shift
					}
					step1 = charcode
					step2 = String.fromCharCode(step1);

					splitted[i] = step2;
				}

				if(splitted[i] >= "a" && splitted[i] <= "z"){


					charcode = splitted[i].charCodeAt(0)


					if((charcode - shift) > 122){

						
						charcode = (charcode - shift) - 26
					}
					else if((charcode - shift) < 97){

						charcode = (charcode - shift) + 26
					}

					else{

						charcode = charcode - shift
					}
					step1 = charcode
					step2 = String.fromCharCode(step1);

					splitted[i] = step2;
				}	
			}
			return splitted.join('')
		},

		decypher: function(message){

			if(shift > 0 || shift < 0){
				shift = shift*-1;
			}
			if(shift == null){

				shift = 3
			}


			splitted = message.split('');
			var step1;
			var step2;

			var charcode;

			for(var i = 0; i<splitted.length; i++){

				if(splitted[i] >= "A" && splitted[i] <= "Z"){

					charcode = splitted[i].charCodeAt(0)

					if((charcode - shift) > 122){

						charcode = (charcode + shift) - 26
					}
					else if((charcode + shift) < 97){

						charcode = (charcode + shift) + 26
					}
					
					else{

						charcode = charcode + shift
					}
					step1 = charcode
					step2 = String.fromCharCode(step1);

					splitted[i] = step2;
				}

				if(splitted[i] >= "a" && splitted[i] <= "z"){


					charcode = splitted[i].charCodeAt(0)


					if((charcode + shift) > 122){

						
						charcode = (charcode - shift) - 26
					}
					else if((charcode + shift) < 97){

						charcode = (charcode + shift) + 26
					}

					else{

						charcode = charcode + shift
					}
					step1 = charcode
					step2 = String.fromCharCode(step1);

					splitted[i] = step2;
				}	
			}
			return splitted.join('')

		}}

}(6);

console.log(MODULE.cipher("Et tu, brute?"));
//console.log(MODULE.decypher("kz za, hxazk?"));
