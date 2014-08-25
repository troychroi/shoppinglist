$(document).ready(function() {
	
	$('header').animate({'top' : '0'});

	var enterItem = [];
	var itemNumber = 0; 

	$(function() {
    	$( "#itemsListed" ).sortable();
    	$( "#itemsListed" ).disableSelection();
  	});


	// mark item as checked and add delete functionality 
		$('#itemsListed').on('click', 'li', function() {	
			$(this).toggleClass('checked');
			$(this).append('<hr />');
			// visually smooth 
			$(this).find('hr').animate({'width': '516px'});
			$(this).append('<button class="trash">X</button>');
			// visually smooth 
			$(this).find('.trash').animate({'opacity': '1'});
			$(this).not('.checked').find('hr').remove();
			$(this).not('.checked').find('button').remove();
			// enable trash or delete functionality individual list items
			$('.trash').on('click', function() {
				$(this).closest('li').remove();
			});
		});

		// add first entered item into blank enterItem array
		function addFirstItem() {
			enterItem.push($('#itemInput').find('input').val());
			$('#itemsListed').append('<li>'+ enterItem[itemNumber] +'</li>');
			$('#itemInput').find('input').val('');
			itemNumber ++;
		}
		
		// add entered items into previously populated enterItem array
		function addMoreItems() {
			enterItem.push($('#itemInput').find('input').val());
			$('#itemsListed').prepend('<li>'+ enterItem[itemNumber] +'</li>');
			$('#itemInput').find('input').val('');
			itemNumber ++;
		}


	// enable add button
	$('.addButton').on('click', function() {
		// prevent emptiness being pushed into array
		if ($('#itemInput').find('input').val() !== '') {
			if (itemNumber === 0) {
				addFirstItem();				
				$('#itemInput').find('input').focus();
			} else if (itemNumber > 0) {
				addMoreItems();
				$('#itemInput').find('input').focus();
			}
		}
	});

	// adding items to the list on pressing enter
	$(document).keydown(function(event){
		// prevent emptiness being pushed into array
		if ($('#itemInput').find('input').val() !== '') {
			if (event.which == 13 && enterItem === []) {
				addFirstItem();
			} else if (event.which == 13) {
				addMoreItems();
			}
		}
	});
});
