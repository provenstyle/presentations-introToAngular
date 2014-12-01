angular
    .module('helloApp')
    .factory('messagesModel', function () {
        var messages = ['Hello', 'Hi', 'Howdy'];
        return {
            randomMessage: function() {
                return messages[_.random(2)];
            }
        }
    })