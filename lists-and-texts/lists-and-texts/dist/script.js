let names = ['Andras', 'Klement', 'Armand', 'Simon', 'Solyom'];

$.each(names, function(index) {
    $('#query-list').append(
        $("<li>").text(
            names[index]
        )
    );
});

$('#query-list').css('list-style-type', 'square');
$("ul li:nth-child(10)").css('font-weight', 'bold');

