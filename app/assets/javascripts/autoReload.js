$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="ChatMain__message" >
            <div class="MessageBox" data-message-id =${message.id}>
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
        <div class="MessageBox"data-message-id =${message.id}>
          <div class= "MessageBoxUser">
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
  let reloadMessages = function() {
    let last_message_id = $('.MessageBox:last').data("message-id") || 0;
    $.ajax({
        url: "api/messages",
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.MessageField').append(insertHTML);
        $('.MessageField').animate({scrollTop: $('.MessageField')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000); 
});