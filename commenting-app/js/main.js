//declare constants for textarea, button, and input
const addPostInput = document.querySelector('input.addPostInput');
const addTextArea = document.querySelector('textarea.addInput');
const addPostButton = document.querySelector('button.addPostButton');

//event listener for posting functionality
addPostButton.addEventListener('click', () => {
let body = document.getElementsByTagName('body')[0];

let postBody = document.createElement('div');
postBody.className = 'postBody';

if(addPostInput.value == '' || addTextArea.value == '') {
	alert('You are missing one or more fields!');
} else {
	let header = document.createElement('h1');
	header.className = 'postHeader';
	header.textContent = addPostInput.value;

	let p = document.createElement('p');
	p.className = 'bodyContent';
	p.textContent = addTextArea.value;

	//create div to append buttonDiv and postBody
	let newPost = document.createElement('div');
	newPost.className = 'newPost';

	//create div for buttons
	let buttonDiv = document.createElement('div');
	buttonDiv.className = 'buttonDiv'

	//create buttons for div
	let up = document.createElement('button');
	up.className = 'up';
	up.textContent = 'Up';

	let down = document.createElement('button');
	down.className = 'down';
	down.textContent = 'Down';

	let remove = document.createElement('button');
	remove.className = 'remove';
	remove.textContent = 'Remove';

	let showHide = document.createElement('button');
	showHide.className = 'showHide';
	showHide.textContent = 'Hide';

	//append the header and body of textarea to the body within a div
	postBody.appendChild(header);
	postBody.appendChild(p);

	//append all buttons to the buttonDiv
	// buttonDiv.appendChild(up);
	// buttonDiv.appendChild(down);
	buttonDiv.appendChild(remove);
	buttonDiv.appendChild(showHide);

	newPost.appendChild(postBody);
	newPost.appendChild(buttonDiv);

	body.appendChild(newPost);

	// body.appendChild(postBody);
	// body.appendChild(buttonDiv)

	addPostInput.value = '';
	addTextArea.value = '';


  //create event listener for up, down, remove buttons
  remove.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {
      if(event.target.className == 'remove') {
        body.removeChild(newPost);
      }
    }
  })

//create hide/show event listener for showHide button
showHide.addEventListener('click', function() {
	if(postBody.style.display == 'none') {
		showHide.textContent = 'Hide';
		postBody.style.display = 'block';
		// up.style.display = 'inline-block';
		// down.style.display = 'inline-block';
		remove.style.display = 'inline-block';
	} else {
		showHide.textContent = 'Show';
		showHide.style.margin = '0.5em 0.5em 0.5em 0';
		postBody.style.display = 'none';
		// up.style.display = 'none';
		// down.style.display = 'none';
		remove.style.display = 'none';
	}
})
}

});
