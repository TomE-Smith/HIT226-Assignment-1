(function () {
alert ('About time I added at least SOME sort of JavaScript to my mini-site. I wish the toggle height script would actually work, so that the the style guide page in particular would look a lot cleaner than it is now. Also, I know pop-up boxes is obstructive JavaScript when used in this manner. I will make sure my group does not use alert boxes like this in our project. As for the lack of database javascript in this file, I wish I had attended the week 6 class to see how to implement it into my JavaScript.';
})();

(function () {
  if (Element.prototype.addEventListener) {
   var items = document.querySelectorAll('.hidden');
   addToggleFunctionality(hidden);}

	function addToggleFunctionality(hidden){
		for (var i = 0; i < hidden.length; i++) {
			var parent = hidden[i].parentElement;
			var container = document.createElement('div');
			container.classList.add('hidden__container');
			parent.insertBefore(container, hidden[i]);
			container.appendChild(hidden[i]);
			container.style.height = '0px';

			var button = createButton("Read more");
			button.addEventListener('click', clickListener);
			parent.insertBefore(button, container);
		}
	}

	function clickListener(event){

		event.preventDefault();
		button = event.target;
		container = button.nextSibling;
		paragraph = container.querySelectorAll('.hidden');

		if (container.style.height !== '0px') {
			container.style.height = '0px';}
    else {
			var height = paragraph.scrollHeight
			container.style.height = height + 'px';
		}

	}

	function createButton(label){
		var button = document.createElement('button');
		button.textContent = label;
		return button;
	}

})();
