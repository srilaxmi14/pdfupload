
$('#button').click(function (e) {
  e.preventDefault();
  $(this).val("view another");
  var target = $("#fileInput").get(0);
  console.log(target);

  if (!target.files.length) {
    return;
  }
  file = target.files[0];
  console.log("main", file);

  if (file.type !== "application/pdf") {
    alert("Allow pdf files only");
    return;
  }

  var reader = new FileReader();
  var results;
  reader.readAsDataURL(file);
  console.log(reader);
  console.log(file);
  reader.onload = function () {
    results = reader.result;
    console.log("results", results);
    $("#pdfRender").html(`<iframe id="myFrame" src="${results}" frameBorder="0"  title="Iframe Example"></iframe>`);
  }
});


$('#fileInput').on('change', function(){
  
  var savingValue=$(this).val().split('\\').pop().split('/').pop();
  console.log("saved value"+savingValue);
  $('#list').append('<li>'+savingValue+'</li>');
});




