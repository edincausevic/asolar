app.service('DB', ['$http', function($http) {
  
  this.xhr = function(method, data, url) {
    req = {
        method: method,
        data: data,
        url: url
    }

    return $http(req).then(function(result){
        return result.data;
    });
  },
  this.login = function(emailData) {
    return this.xhr('POST', emailData, 'backend/login.php');
  },
  this.forgetUserPass = function() {
    return this.xhr('POST', null, 'backend/forgetUserPass.php');
  }
}])