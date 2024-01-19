function convertDate() {
    var inputDate = document.getElementById('inputDate').value;
    var inputFormat = document.getElementById('inputFormat').value;
    var expectedFormat =document.getElementById('expectedFormat').value;  
  
    var parsedDate = window.moment(inputDate, inputFormat, true);
  
    if (parsedDate.isValid()) {
      var outputDate = parsedDate.format(expectedFormat);
      document.getElementById('expectedFormatDate').value = outputDate;
    } else {
      document.getElementById('expectedFormatDate').value = 'Invalid Date';
    }
  }
  