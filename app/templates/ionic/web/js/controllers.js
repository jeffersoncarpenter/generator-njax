angular.module('<%= config.app_name %>.controllers', [
])

<%
    for(var name in config.models){
        var _model = config.models[name];
%>

// A simple controller that fetches a list of data from a service
.controller('<%= _.capitalize(_model.name) %>ListCtrl',  function($scope, <%= _.capitalize(_model.name) %>Service) {
  // "Pets" is a service returning mock data (services.js)
  $scope.<%= _model.name %> = <%= _.capitalize(_model.name) %>Service.query();
})


// A simple controller that shows a tapped item's data
.controller('<%= _.capitalize(_model.name) %>DetailCtrl', function($scope, $stateParams, <%= _.capitalize(_model.name) %>Service) {
  // "<%= _.capitalize(_model.name) %>" is a service returning mock data (services.js)
  $scope.<%= _model.name %> = <%= _.capitalize(_model.name) %>Service.get({ <%= _model.name %>_id:$stateParams.<%= _model.name %>_id });
})

<% } %>