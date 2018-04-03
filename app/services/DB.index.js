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
  this.sendEmail = function(emailData) {
    return this.xhr('POST', emailData, 'backend/email.php');
  },
  this.getContactInfo = function() {
    return this.xhr('POST', null, 'backend/getContactInfo.php');
  },
  this.getMenuElms = function() {
    return this.xhr('POST', null, 'backend/getMenuElms.php');
  },
  this.setNumOfViews = function(incrementPregled) {
    return this.xhr('POST', incrementPregled, 'backend/setNumOfViews.php');
  },
  this.getArticles = function(menuName) {
    return this.xhr('POST', {menuName: menuName}, 'backend/getMenuElArticles.php');
  },
  this.getArticle = function(id) {
    return this.xhr('POST', {id: id}, 'backend/getArticle.php');
  },
  this.artiklRating = function(artikl) {
    return this.xhr('POST', artikl, 'backend/artiklRating.php');
  },
  this.getIzdvojeno = function() {
    return this.xhr('POST', null, 'backend/getIzdvojeno.php');
  }
}])