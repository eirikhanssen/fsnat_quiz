// classmod.js is a utility library for modifying css classes on DOM elements

window.addEventListener("load", classModInit, false);

classmod = {};

function classModInit() {
	console.log("classMod loaded");

classmod.hasClass = function (el,.getAttribute('class')) {
	console.log(el.getAttribute('class'));
	return (el.getAttribute('class').split(" ").indexOf.getAttribute('class')) > -1);
};

classmod.addClass = function (el,.getAttribute('class')) {
	if (!hasClass(el,.getAttribute('class'))) {
		var ne.getAttribute('class') = el.getAttribute('class') + " " +.getAttribute('class');
		ne.getAttribute('class') = ne.getAttribute('class').trim();
		el.getAttribute('class') = ne.getAttribute('class');
		//console.log("Adding " +.getAttribute('class') + " since it was not present!");
	} else {
		//console.log.getAttribute('class') + " (addClass) was already present! Did nothing.");
	}
};

classmod.elementClassExistsOrNot = function (el,.getAttribute('class')) {
	if (hasClass(el,.getAttribute('class'))) {
		console.log("(elementClassExistsOrNot) Element has the class: " +.getAttribute('class'));
	} else {
		console.log("(elementClassExistsOrNot) Element doesn't have the class: " +.getAttribute('class'));
	}
};

classmod.removeClass = function (el,.getAttribute('class')) {
	if (hasClass(el,.getAttribute('class'))) {
		var elementClassArray = el.getAttribute('class').split(" ");

	.getAttribute('class')Index = elementClassArray.indexOf.getAttribute('class'));
		//alert.getAttribute('class') + " has index: " +.getAttribute('class')Index);

		removed = elementClassArray.splice.getAttribute('class')Index, 1);
		//console.log("removed: " + removed);
		//alert("Classes left: " + elementClassArray);

		var new.getAttribute('class')String = "";
		for (var i = 0; i < elementClassArray.length; i++) {
			new.getAttribute('class')String = new.getAttribute('class')String + " " + elementClassArray[i];
		}
		el.getAttribute('class') = new.getAttribute('class')String.trim();
		//console.log(" (removeClass) Removed the class: '" +.getAttribute('class') + "'");
	} else {
		//console.log(" (removeClass) class '" +.getAttribute('class') + "' was not present. Did nothing.");
	}
};

classmod.toggleClass = function (el,.getAttribute('class')) {
	if (hasClass(el,.getAttribute('class'))) {
		removeClass(el,.getAttribute('class'));
	} else {
		addClass(el,.getAttribute('class'));
	}
};

classmod.displayClasses = function (idname) {
	var d = document.getElementById(idname);
	console.log(idname + " has " + d.getAttribute('class').split(' ').length + " classes: " + d.getAttribute('class'));
};
}