var quiz_01_fortelling = [
	{
	"q":"Hva heter jenta i fortellinga?",
	correct:["Jenny"],
	wrong:["Sobia","Herr Høne"]
	},
	{
	"q":"Hva heter gutten i fortellinga?",
	correct:["Samir"],
	wrong:["Ivar","Kattepus"]
	},
	{
	"q":"Hva heter den med blått ansikt?",
	correct:["Hen"],
	wrong:["Afrika","Kim"]
	},
	{
	"q":"Hva heter den med katte-ører?",
	correct:["Katt"],
	wrong:["Tiger","Den farlige løven"]
	},
	{
	"q":"Hvor kommer romskipet fra?",
	correct:["En planet ved Proxima Centauri"],
	wrong:["Sverige","Oslo"]
	},
	{
	"q":"Hvorfor kom romskipet til Jorden?",
	correct:["Vi veit ikke "],
	wrong:["Katt og Hen vil spise fisk","De vil gå på kino"]
	},
	{
	"q":"Hva gjorde Jenny og Samir da romskipet kræsja i treet?",
	correct:["De spiste sukkererter"],
	wrong:["De spiste hamburger","De spiste is med sjokoladedryss"]
	},
	{
	"q":"Hvilken årstid er det hos Jenny og Samir?",
	correct:["Vinter"],
	wrong:["Vinter","Sommer"]
	},
	{
	"q":"Hvor mange språk kan Hen og Katt forstå?",
	correct:["Alle språk i hele verden"],
	wrong:["Bare engelsk og norsk","Bare arabisk og norsk"]
	},
	{
	"q":"Synes du det er gøy med kviss?",
	correct:["Ja, kjempegøy!", "Litt morsomt", "Jeg hater kviss."],
	wrong:[]
	}];
var quiz_01_natur = [
	{
	"q":"Se på bildet av krokus og humla. Hva er det gule støvet?",
	img:{src:"http://verdalsbilder.no/cpg1410/albums/userpics/10004/Innsekt_-_bie_paa_krokus_i_april.JPG"}, alt:"Ei hårete humle går rundt midt i en lilla blomst som har gule arr. Humla er dekket med gult støv.",
	correct:["Blomsterstøv (pollen)"],
	wrong:["Maling","Mel"]
	},
	{
	"q":"Hva er krokus?",
	correct:["Blomst"],
	wrong:["Lus","Krokete mann"]
	},
	{
	"q":"Hva er pollen?",
	correct:["Støv fra hannblomster"],
	wrong:["Politi","Noen som bor i Polen"]
	},
	{
	"q":"Hva er en gul hestehov?",
	correct:["En hest"],
	wrong:["Et hode","En gul blomst"]
	},
	{
	"q":"Selja har noe som humla liker. Hva er det?",
	correct:["Nektar og pollen"],
	wrong:["Pent hår","Den sier ja ja"]
	},
	{
	"q":"Hva er nektar?",
	correct:["Søt saft som humla spiser"],
	wrong:["En gutt som nekter å spise is","En avatar"]
	},
	{
	"q":"Hva er dette?",
	img:{src:"../../../media/images/NAT8667_to_gåsunger.jpg", alt:"en liten rund, myk, grå og veldig hårete utvekst fra en knopp på en gren"},
	correct:["En hannblomst fra selja"],
	wrong:["Godteri for Jenny og Samir","En kost til å feie med"]
	},
	{
	"q":"Hva er dette?",
	img: {src:"../../../media/images/NAT9099_pollenbærere.jpg", alt:"mange lange, tynne hvite stilker med gule knopper"},
	correct:["Pollen-bærere"],
	wrong:["Hockey-køller","Kjærlighet på pinne"]
	},
	{
	"q":"Hva er dette?",
	img:{src:"../../../media/images/selje_hann_saft.jpg",alt:"Små runde gjennomsiktige kuler med væske pipler ut fra poser i blomsten"},
	correct:["Små poser med nektar"],
	wrong:["Grønne bananer","Små, grønne dyr"]
	},
	{
	"q":"Hva er dette?",
	img:{src:"../../../media/images/NAT9114_selje_hunnblomst_kvist.jpg",alt:"en grønn blomst som vokser på en gren som har bananliknende deler som har små gule hjerteformede vekster på tuppene"},
	correct:["Hunnblomstene til selja"],
	wrong:["Små grønne bananer","En tannbørste"]
	}
];

function resetBody() {
	document.body.innerHTML="<h1>Kviss</h1>";
}

function getQuestion(current_question_set, sequence_number) {
	function hasImage() {
		return(current_question_set.img !== undefined);
	}
	function getQuestionImage() {
		var image = document.createElement('img');
		image.setAttribute('src',current_question_set.img.src);
		var alt = current_question_set.img.alt || "";
		image.setAttribute('alt', alt);
		return image;
	}

	var getOptions = (function(){
		// count each time the getOptions() func is run to make use in id
		var priv_option_set_counter = priv_option_set_counter || 0;

		function getOptions() {
			function compare_random_order(a,b) {
				if(a.order < b.order) {
					return -1;
				} else if (a.order > b.order) {
					return 1;
				} else {
					return 0;
				}
			}

			
			function getOption(current_option) {
				var optionLabel = document.createElement('label');
				optionLabel.innerHTML='<span class="alternative">'+current_option.option+'</span>';
				var current_question_name='q_' + priv_option_set_counter;
				optionLabel.setAttribute('for',current_question_name);
				var current_input = document.createElement('input');
				current_input.setAttribute('type','radio');
				current_input.setAttribute('name',current_question_name);
				if(current_option.isCorrect) {
					optionLabel.setAttribute('data-correct','correct');
				}

				optionLabel.appendChild(current_input);
				return optionLabel;
			}
				
			var options_wrapper = document.createElement('div');
			options_wrapper.setAttribute('class', 'options_wrapper');

			var current_options_set = [];

			var optionCount = current_question_set.correct.length+current_question_set.wrong.length;
			console.log('opcount: ' + optionCount);

			// noe feil her!

			for(var j=0; j<current_question_set.correct.length; j++) {
				current_options_set.push({option:current_question_set.correct[j], isCorrect:true, order:Math.random()});
			}
			for(var k=0; k<current_question_set.wrong.length; k++) {
				current_options_set.push({option:current_question_set.correct[k], isCorrect:false, order:Math.random()});
			}

			current_options_set.sort(compare_random_order)

			console.log('cur_opts: ');
			console.log(current_options_set);

			for(var l=0; l<current_options_set.length; l++) {
				options_wrapper.appendChild(getOption(current_options_set[l]));
			}

			return options_wrapper;
			
			// getOptions()
			priv_option_set_counter++;
			console.log("priv count: " + priv_option_set_counter);
		}
		return getOptions;
	})();
	

	//console.log('img:' + current_question_set.img);
	var fieldset = document.createElement('fieldset');
	fieldset.id="q" + sequence_number;
	fieldset.innerHTML = '<label class="question">' + current_question_set.q + '</label>';

	if(hasImage()) {
		fieldset.appendChild(getQuestionImage());
	}

	fieldset.appendChild(getOptions());
	return fieldset;
}

function quiz(question_sets) {
	resetBody();
	var len = question_sets.length;
	var quiz_container = document.querySelector('body'); //#kviss

	for (var i = 0; i<len; i++) {
		quiz_container.appendChild(getQuestion(question_sets[i], i));
	}

	console.log('qsets: ' + question_sets);
}

quiz(quiz_01_natur);

