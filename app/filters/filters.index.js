app.filter('cutText', function() {

  return function(text, index) {
    if (text.length > index) {
      return text.slice(0, index) + '...';
    }else {
      return text;
    }
  }
})