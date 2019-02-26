
var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected form server');
});


socket.on('newMessage', function(message){
    console.log('New Message', message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
    var li = $('<li></li>');
    var a = $(`<a target="_blank">My current location</a>`);

    li.text(`${message.from}: `);
    a.attr('href', message.url);

    li.append(a);
    $('#messages').append(li);

});



$('#message-form').on('submit', function(e){
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, function() {
        $('[name=message]').val('')
    })
});

var locationButton = document.getElementById('send-location');
locationButton.addEventListener('click', function() {
    if(!navigator.geolocation){
        return alert('Geolacation not supported by your browser');
    }

    locationButton.setAttribute('disabled', 'disabled' );
    locationButton.innerHTML = 'Sending locations....';

    navigator.geolocation.getCurrentPosition(function(position){
        locationButton.removeAttribute('disabled');
        locationButton.innerHTML = 'Send Location'
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }, function(){
        locationButton.removeAttribute('disabled');
        alert('Unable to fetch location');
    })
});