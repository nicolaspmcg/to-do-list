var id = 0;

function generarID () {
	return id++;
};

function autoFocus () {
	var x = document.getElementsByTagName("UL");
	x.autofocus();
	x.scrollIntoView();
};

function Task (input) {
	this.input = input;
	/*this.eliminateTask = function () {
		var li = document.
	};*/
};

function List (id, title, description) {
	this.id = id;
	this.title = title;
	this.description = description;
	this.addTask = function(list) {
		
		//list es el objeto list
		// lista es el elemento de html con toda la lista impresa
		var lista = document.getElementById(list.id);

		var input = lista.querySelector(".inputTask").value;

		var task = new Task(input);

		var ul = lista.querySelector("ul");

		var li = document.createElement("LI");
		li.innerText = task.input;
		ul.appendChild(li);
		
		var buttonEdit = document.createElement("button");
		buttonEdit.innerText = "Edit"
		li.appendChild(buttonEdit);
		buttonEdit.classList.add("buttonEdit");

		var buttonDelete = document.createElement("button");
		buttonDelete.innerText = "Delete"
		li.appendChild(buttonDelete);
		buttonDelete.classList.add("buttonDelete");

		input="";
	};
	this.eliminateAllTasks = function (list) {
		var lista = document.getElementById(list.id);
		var elementosLI = lista.querySelectorAll("li");
		var ul = lista.querySelector("ul");
		for (var i = 0; i < elementosLI.length; i++) {
			ul.removeChild(elemntosLI[i]);
		};
	};
};

function addList () {

	// seleccionar cada input
	var inputTitulo = document.getElementById("title");
	var inputDesc = document.getElementById("description");

	var list = new List(generarID(), inputTitulo.value, inputDesc.value);

	var div = document.createElement("div");
	var container = document.querySelector(".container");
	container.appendChild(div);
	div.setAttribute("id",list.id);
	div.classList.add("lista");

	var h2 = document.createElement("H2");
	h2.innerText = list.title;
	div.appendChild(h2);

	var p = document.createElement("P");
	p.innerText = list.description;
	div.appendChild(p);

	var ul = document.createElement("UL");
	div.appendChild(ul);

	var form = document.createElement("form");
	div.appendChild(form);

	var input = document.createElement("input");
	input.placeholder = "Enter task here...";
	form.appendChild(input);
	input.classList.add("inputTask");
	//input.autofocus = true;

	var botonAdd = document.createElement("button");
	botonAdd.innerText = "Add";
	div.appendChild(botonAdd);
	botonAdd.classList.add("botonList");
	botonAdd.addEventListener("click", function() {
		list.addTask(list);
	});

	var botonEliminateTasks = document.createElement("button");
	botonEliminateTasks.innerText = "Erase Tasks";
	div.appendChild(botonEliminateTasks);
	botonEliminateTasks.classList.add("botonErase");
	botonEliminateTasks.addEventListener("click", function() {
		list.eliminateAllTasks(list);
	});

	var modal = document.getElementById('myModal');
    modal.style.display = "none";

    inputTitulo.value="";
    inputDesc.value="";

    /*autoFocus ();*/
};

function editList () {
	//editar el titulo y descripcion
};

function showAll () {

};

function searchList () {

};

function eliminateList () {
	var container = document.querySelector(".container");
	container.innerHTML = "";
};

function orderList () {

};

function addTask () {

};

function eliminateTask () {

};

function orderTask () {

};

function init() {
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	};

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    };
	};

	//boton agregar lista
	var botonModal = document.getElementById("btnModal");
	botonModal.onclick = addList;

	//boton eliminar todas las listas
	var eliminateButton = document.querySelector(".eliminateButton");
	eliminateButton.onclick = eliminateList;
};

init();