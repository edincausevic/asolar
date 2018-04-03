app.controller('servisCtrl',  ['$scope', 'DB', function($scope, DB) {
  

  $scope.state = {
    menuElms: [],
    editing: false,
    editingArticleName: '',
    editingArticleID: null,
    articleMenuAdded: false,
    articleMenuLoaded: true,
    newMenuArticleValue: '',
    activeMenuID: null,
    editArticleID: '',

    filterActive: 'all'
  }

  // get menu from db and put it in $scope.state.menuElms
  $scope.getArticles = function() {
    DB.getArticlesData().then(function(response) {
      $scope.state.articleMenuLoaded = false; // loader
      $scope.state.menuElms = response.menu;
      $scope.state.artikli = response.artikli;
    })
  }
  $scope.getArticles();

  $scope.addArticleMenu = function() {
    
    var menu = {
      id: null,
      ime: $scope.state.newMenuArticleValue,
      route: $scope.state.newMenuArticleValue.replace(/\s/g, '-').toLowerCase(),
      pregledan: 0
    }

    DB.addArticleMenu(menu).then(function(response) {
  
      menu.id = response;
      $scope.state.menuElms.push(menu);
      $scope.state.newMenuArticleValue = ''; // izprazni input
      $scope.state.activeMenuID = '';
    });

  }

  $scope.removeArticleMenu = function(id, ime) {
    if(confirm('Jesi li siguran da zelis izbrisati ' + ime)) {
      DB.removeArticleMenu(id).then(function(response) {
        var menuID;
        //remove menu 
        if(response == 1) {
          $scope.state.menuElms.forEach(function(menuEl) {
            if(menuEl.id == id) {
              menuID = menuEl.id;
              $scope.state.menuElms.splice($scope.state.menuElms.indexOf(menuEl), 1)
            }
          })
          // remove articles
          $scope.state.artikli = $scope.state.artikli.filter(function(artikl) {
            return artikl.menu_id !== menuID;
          })
        }
      })
    }
  }

  $scope.showEditArticleMenuForm = function(articleMenu) {
    $scope.state.editing = true;
    $scope.state.editingArticleName = articleMenu.ime;
    $scope.state.editingArticleID = articleMenu.id;
  }

  $scope.changeArticleName = function() {
  
    var menu = {
      id: $scope.state.editingArticleID, 
      ime: $scope.state.editingArticleName,
      route: $scope.state.editingArticleName.replace(/\s/g, '-').toLowerCase()
    }

    DB.editArticleMenu(menu).then(function(response) {
      if(response == 1) {
        $scope.state.menuElms.forEach(function(menuEl) {
          if(menuEl.id == menu.id) {
            menuEl.ime = menu.ime;
            $scope.state.editingArticleName = '';
            $scope.state.editing = false;
          }
        })
      }
    })
  }

  // ARTIKLI

  $scope.changeFilter = function(menuName) {
    $scope.state.filterActive = menuName;
    $scope.state.activeMenuID = null;
  }

  $scope.activeMenu = function(id) {
    $scope.state.activeMenuID = id;
    $scope.state.filterActive = 'dodaj'; // pokazi formu
    $scope.menuID = $scope.state.activeMenuID;
  }

  $scope.removeArticle = function(id, ime) {
    if (confirm('Jesi li siguran da zelis izbrisati ' + ime + '?')) {
      DB.removeArticle(id).then(function(response){
        
        if(response == 1) {
          $scope.state.artikli.forEach(function(artikl) {
            if(artikl.id == id) {
              $scope.state.artikli.splice($scope.state.artikli.indexOf(artikl), 1);
            }
          })
        }
      });
    }
  }

  // EDIT ARTICLE - OPEN FORM
  $scope.getArticle = function(id) {
    DB.getArticle(id).then(function(article) {
      $scope.editingArticle = article[0];
      $scope.state.editArticleID = article[0].id;
      console.log($scope.editingArticle)
    })
    $scope.state.filterActive = 'edituj';
  }

  $scope.addToIzdvojeno = function(id, izdvojeno) {
    var artiklIzdvojeno = {
      id: id,
      izdvojeno: izdvojeno == 0 ? izdvojeno = 1 : izdvojeno = 0
    }
  
    DB.addToIzdvojeno(artiklIzdvojeno).then(function(response) {
      if(response == 1) {
        $scope.state.artikli.forEach(function(artikl) {
          if (artikl.id == id) {
            artikl.izdvojeno = artiklIzdvojeno.izdvojeno;
          }
        })
      }
    })
  }
}])