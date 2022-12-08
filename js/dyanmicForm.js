$(".add").click(function() {
    //$("form > p:last-child").clone(true).insertAfter("form > p:last-child");
    //return false;
    $('span#add').before(`Pertinent History #${element.length}: <input type="text" id="condition${element.length}" name="condition"><br>`)
    //$( "form" ).append( $( `<input type="text" id="condition${element.length}">` ) );
    runTie();
});

$(".remove").click(function() {
    $(this).parent().remove();
});