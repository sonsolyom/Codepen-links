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

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('#main').append('<div id="new-block"></div');
$('#new-block').append('<h3 id="new-heading"></h3>');
$('#new-block').append('<p id="new-paragraph"></p>');

$('#new-heading').text(additionalBlock.title);
$('#new-paragraph').text(additionalBlock.text);