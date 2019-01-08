$(document).ready(function () {

    $('#burgerName').focus();


    $(document).on('click', '#create-burger', createBurger);
    $(document).on('click', '.devour', devourBurger);


    // Create Burger
    function createBurger(e) {
        e.preventDefault();
        var newBurger = {
            burger_name: $('#burgerName').val().trim(),
            devoured: false
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            location.reload();

        });

    }

    // Devour burger
    function devourBurger(e) {
        e.preventDefault();
        var updateBurger = {
            id: $(this).attr('data')
        };

        $.ajax('/api/burgers/:id', {
            type: 'PUT',
            data: updateBurger
        }).then(function () {
      
                location.reload();
         
        });
    };

    




});