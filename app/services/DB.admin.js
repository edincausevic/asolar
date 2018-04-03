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
  this.getArticlesData = function() {
    return this.xhr('POST', null, 'backend/getArticles.php');
  },
  this.addArticleMenu = function(newArticleMenu) {
    return this.xhr('POST', newArticleMenu, 'backend/addArticleMenu.php');
  },
  this.removeArticleMenu = function(id) {
    return this.xhr('POST', {id: id}, 'backend/removeArticleMenu.php');
  },
  this.editArticleMenu = function(menuEL) {
    return this.xhr('POST', menuEL, 'backend/editArticleMenu.php');
  },
  this.removeArticle = function(id) {
    return this.xhr('POST', {id: id}, 'backend/removeArticle.php');
  },
  this.getArticle = function(id) {
    return this.xhr('POST', {id: id}, 'backend/getArticle.php');
  },
  this.addToIzdvojeno = function(artikl) {
    return this.xhr('POST', artikl, 'backend/addToIzdvojeno.php');
  },
  this.getData = function() {
    return this.xhr('POST', null, 'backend/getArticles.php');
  },
  this.resetStatistics = function() {
    return this.xhr('POST', null, 'backend/resetStatistics.php');
  },
  // PROFIL 
  this.changeUsername = function(newUsername) {
    return this.xhr('POST', {username: newUsername}, 'backend/changeUsername.php');
  },
  this.changePassword = function(newPassword) {
    return this.xhr('POST', {password: newPassword}, 'backend/changePassword.php');
  },
  this.changeEmail = function(newEmail) {
    return this.xhr('POST', {email: newEmail}, 'backend/changeEmail.php');
  },
  this.cahngePhoneNum = function(newPhoneNum) {
    return this.xhr('POST', {newPhoneNum: newPhoneNum}, 'backend/cahngePhoneNum.php');
  },
  this.logout = function() {
    return this.xhr('POST', null, 'backend/logout.php');
  }
}])