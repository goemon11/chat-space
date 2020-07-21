$(function(){
    function buildHTML(message){
    if (message.image) {
      let html = 
        `<div class="ChatMain__message">
          <div class="MessageBox" data-message-id = ${message.id}>
            <div class="MessageBoxUser">
              <div class="MessageBoxUser__Username">
                ${message.user_name}
              </div>
              <div class="MessageBoxUser__Date">
                ${message.created_at}
              </div>
              <div class="MessageText">
                <p class="MessageLine">
                  ${message.content}
                </p>
                <img class="Message__image" src="${message.image}">
              </div>
            </div>
          </div>
        </div>`
      return html;  
    } else {
      let html = 
        `<div class="ChatMain__message">
          <div class="MessageBox" data-message-id = ${message.id}>
            <div class="MessageBoxUser">
              <div class="MessageBoxUser__Username">
                  ${message.user_name}
              </div>
              <div class="MessageBoxUser__Date">
                  ${message.created_at}
              </div>
              <div class="MessageText">
                <p class="MessageLine">
                  ${message.content}
                </p>
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
    .done(function(message){
      let html = buildHTML(message)
      $('.MessageField').append(html);
      $('.MessageField').animate({scrollTop: $('.MessageField')[0].scrollHeight});
      $('.Formbox')[0].reset();
      $('.Send-Btn').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.Send-Btn').prop('disabled', false);
    });
  });
});