
$('#button').click(function (e) {
  e.preventDefault();

  var target = $("#fileInput").get(0);

  if (!target.files.length) {
    return;
  }
  file = target.files[0];
  
  if (file.type !== "application/pdf") {
    alert("Allow pdf files only");
    return;
  }

  var reader = new FileReader();
  var results;
  reader.readAsDataURL(file);
  reader.onload = function () {
    results = reader.result;
    $("#pdfRender").html(`<iframe id="myFrame" src="${results}" frameBorder="0"  title="Iframe Example"></iframe>`);
  }
});


$('#fileInput').on('change', function () {

  var savingValue = $(this).val().split('\\').pop().split('/').pop();
  $('#list').append('<li>' + savingValue + '</li>');
});

function buttonClicked() {

  $(".fileList").show();

}

$('#fileInput').change(function (e) {
  var filename = this.files[0].name;
  $('.fileNameSpan').text(filename);
});

