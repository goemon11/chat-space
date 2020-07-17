$(function(){
  function buildHTML(post){
    if (post.image){
      let html = `<div class="ChatMain__message">
                  <div class="MessageBox">
                  <div class="MessageBoxUser">
                  <div class="MessageBoxUser__Username">
                  ${post.user_name}
                  </div>
                  <div class="MessageBoxUser__Date">
                  ${post.created_at}
                  <div class="MessageText">
                  <p class="MessageLine">
                  ${post.content}
                  </p>
                  <img class="Message__image" src="${post.image}">
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>`
      return html;  
    } else {
      let html = `<div class="ChatMain__message">
                  <div class="MessageBox">
                  <div class="MessageBoxUser">
                  <div class="MessageBoxUser__Username">
                  ${post.user_name}
                  </div>
                  <div class="MessageBoxUser__Date">
                  ${post.created_at}
                  <div class="MessageText">
                  <p class="MessageLine">
                  ${post.content}
                  </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>`
      return html;
    };
  
  }
  $('.Formbox').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(post){
      let html = buildHTML(post)
      $('.MessageField').append(html);
      $('.MessageField').animate({scrollTop: $('.MessageField')[0].scrollHeight});
      $('.Formbox')[0].reset();
      $('.Send-Btn').prop('disabled', false);
    })
    .fail(function(){
        alert("メッセージ送信に失敗しました");
    });
  });
});