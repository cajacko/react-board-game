import socket from '~/helpers/socket'

socket.emit('getState')

socket.on('getState', function (state) {
  console.log('getState', state)
})