// FormData send to Google sheet
// 檢查欄位是否填寫
function checkName(name) {
  if (name != "") {
    $("#name").css("border-bottom", "2px #0b0b0b solid");
    $(".name-message").removeClass("d-inline-block");
    $(".name-message").addClass("d-none");
    return (status = true);
  } else {
    $("#name").css("border-bottom", "1px solid #d0021b");
    $(".name-message").addClass("d-inline-block");
    return (status = false);
  }
}

// 檢查email欄位是否填寫
function checkEmail(email) {
  if (email != "") {
    $("#email").css("border-bottom", "2px #0b0b0b solid");
    $(".email-message").removeClass("d-inline-block");
    $(".email-message").addClass("d-none");
    return (status = true);
  } else {
    $("#email").css("border-bottom", "1px solid #d0021b");
    $(".email-message").addClass("d-inline-block");
    return (status = false);
  }
}

// 檢查textarea欄位是否填寫
function checkTextarea(textarea) {
  if (textarea != "") {
    $("#textarea").css("border-bottom", "2px #0b0b0b solid");
    $(".textarea-message").removeClass("d-inline-block");
    $(".textarea-message").addClass("d-none");
    return (status = true);
  } else {
    $("#textarea").css("border-bottom", "1px solid #d0021b");
    $(".textarea-message").addClass("d-inline-block");
    return (status = false);
  }
}


$(function () {
  $('.submit-button').click(function () {
    let name = $('#name').val();
    let email = $('#email').val();
    let textarea = $('#textarea').val();

    checkName(name);
    checkEmail(email);
    checkTextarea(textarea);

    if (!name || !email || !textarea) {
      alert("記得填上表單所需的相關欄位呦！");
      return;
    }

    if (status) {
      let currentdate = new Date();
      let timeStamps = currentdate.getFullYear() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getDate() + "  " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

      let data = {
        'time': timeStamps,
        'name': name,
        'email': email,
        'textarea': textarea,
      }

      send(data);
    } else {
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
      $("#name").css("border-bottom", "2px solid #61aa10");
      $("#email").css("border-bottom", "2px solid #61aa10");
      $("#textarea").css("border-bottom", "2px solid #61aa10");
      $(".submit-button").css("background-color", "#094b83")
    }
  });
}