// FormData send to Google sheet
$(function () {
  $('.submit-button').click(function () {
    let name = $('#name').val();
    let email = $('#email').val();
    let textarea = $('#textarea').val();

    let status = true;

    if (status) {
      console.log('true情況')
      let currentdate = new Date();
      let timeStamps = currentdate.getFullYear() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getDate() + "  " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

      // 打包 要的資料
      let data = {
        'time': timeStamps,
        'name': name,
        'email': email,
        'textarea': textarea,
      }
      // 呼叫 send ajax function
      send(data);
    } else {
      console.log('false情況')
      return status = false;
    }
  });
});

function send(data) {
  $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbycHKojxIU9ZkYiLgQz4PSLOY5p8iScNnuekuUC2Mjo26viFlIC/exec",
    data: data,
    dataType: "JSON",
    success: function (response) {
      $(".form-submit-success-content").removeClass('d-none');
    }
  });
}