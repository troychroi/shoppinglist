$(document).ready(function() {
	
	enterItem = []
	itemNumber = 0

	function check_delete() {
		$('#itemsListed').find('li').on('click', function() {
			$(this).toggleClass('checked');
			$(this).append('<hr />');
			$(this).append('<button>X</button>');
			$(this).find('button').addClass('trash');
			$('li').not('.checked').find('hr').remove();
			$('li').not('.checked').find('button').remove();
			$('.trash').on('click', function() {
				$(this).closest('li').remove();
				console.log(itemNumber);
			});
		});
	}

	$(document).keydown(function(event){
		if (event.which == 13) {
			enterItem.push($('#itemInput').find('input').val());
			$('#itemsListed').append('<li>'+ enterItem[itemNumber] +'</li>');
			$('#itemInput').find('input').val('');
			check_delete();
			itemNumber ++;
			console.log(itemNumber);
		}
	});
});