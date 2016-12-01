var quiz_01_fortelling = [
	{
	"q":"Hva heter jenta i fortellinga?",
	right:["Jenny"],
	wrong:["Sobia","Herr Høne"]
	},
	{
	"q":"Hva heter gutten i fortellinga?",
	right:["Samir"],
	wrong:["Ivar","Kattepus"]
	},
	{
	"q":"Hva heter den med blått ansikt?",
	right:["Hen"],
	wrong:["Afrika","Kim"]
	},
	{
	"q":"Hva heter den med katte-ører?",
	right:["Katt"],
	wrong:["Tiger","Den farlige løven"]
	},
	{
	"q":"Hvor kommer romskipet fra?",
	right:["En planet ved Proxima Centauri"],
	wrong:["Sverige","Oslo"]
	},
	{
	"q":"Hvorfor kom romskipet til Jorden?",
	right:["Vi veit ikke "],
	wrong:["Katt og Hen vil spise fisk","De vil gå på kino"]
	},
	{
	"q":"Hva gjorde Jenny og Samir da romskipet kræsja i treet?",
	right:["De spiste sukkererter"],
	wrong:["De spiste hamburger","De spiste is med sjokoladedryss"]
	},
	{
	"q":"Hvilken årstid er det hos Jenny og Samir?",
	right:["Vinter"],
	wrong:["Vinter","Sommer"]
	},
	{
	"q":"Hvor mange språk kan Hen og Katt forstå?",
	right:["Alle språk i hele verden"],
	wrong:["Bare engelsk og norsk","Bare arabisk og norsk"]
	},
	{
	"q":"Synes du det er gøy med kviss?",
	right:["Ja, kjempegøy!", "Litt morsomt", "Jeg hater kviss."],
	wrong:[]
	}];
var quiz_01_natur = [
	{
	"q":"Se på bildet av krokus og humla. Hva er det gule støvet?",
	img:"http://verdalsbilder.no/cpg1410/albums/userpics/10004/Innsekt_-_bie_paa_krokus_i_april.JPG",
	right:["Blomsterstøv (pollen)"],
	wrong:["Maling","Mel"]
	},
	{
	"q":"Hva er krokus?",
	right:["Blomst"],
	wrong:["Lus","Krokete mann"]
	},
	{
	"q":"Hva er pollen?",
	right:["Støv fra hannblomster"],
	wrong:["Politi","Noen som bor i Polen"]
	},
	{
	"q":"Hva er en gul hestehov?",
	right:["En hest"],
	wrong:["Et hode","En gul blomst"]
	},
	{
	"q":"Selja har noe som humla liker. Hva er det?",
	right:["Nektar og pollen"],
	wrong:["Pent hår","Den sier ja ja"]
	},
	{
	"q":"Hva er nektar?",
	right:["Søt saft som humla spiser"],
	wrong:["En gutt som nekter å spise is","En avatar"]
	},
	{
	"q":"Hva er dette?",
	img:{src:"../../../media/images/NAT8667_to_gåsunger.jpg", alt:"en liten rund, myk, grå og veldig hårete utvekst fra en knopp på en gren"},
	right:["En hannblomst fra selja"],
	wrong:["Godteri for Jenny og Samir","En kost til å feie med"]
	},
	{
	"q":"Hva er dette?",
	img: {src:"../../../media/images/NAT9099_pollenbærere.jpg", alt:"mange lange, tynne hvite stilker med gule knopper"},
	right:["Pollen-bærere"],
	wrong:["Hockey-køller","Kjærlighet på pinne"]
	},
	{
	"q":"Hva er dette?",
	img:{src:"../../../media/images/selje_hann_saft.jpg",alt:"Små runde gjennomsiktige kuler med væske pipler ut fra poser i blomsten"},
	right:["Små poser med nektar"],
	wrong:["Grønne bananer","Små, grønne dyr"]
	},
	{
	"q":"Hva er dette?",
	img:{src:"../../../media/images/NAT9114_selje_hunnblomst_kvist.jpg",alt:"en grønn blomst som vokser på en gren som har bananliknende deler som har små gule hjerteformede vekster på tuppene"},
	right:["Hunnblomstene til selja"],
	wrong:["Små grønne bananer","En tannbørste"]
	}
];

function resetBody() {
	document.body.innerHTML="<h1>Kviss</h1>";
}

function getQuestion(current_question_set, sequence_number) {
	console.log(current_question_set.img);
	var fieldset = document.createElement('fieldset');
	fieldset.id="q" + sequence_number;
	fieldset.innerHTML = '<label>' + (sequence_number+1)+ '</label>';
	var question = document.createElement('p');
	question.setAttribute('class','question');
	question.innerHTML=current_question_set.q;

	fieldset.appendChild(question);
	return fieldset;
}

function quiz(question_sets) {
	resetBody();
	var len = question_sets.length;
	var quiz_container = document.querySelector('body'); //#kviss

	for (var i = 0; i<len; i++) {
		quiz_container.appendChild(getQuestion(question_sets[i], i));
	}

	console.log(question_sets);
}

quiz(quiz_01_natur);

