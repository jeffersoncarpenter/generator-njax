var <%= _model.name %>Services = angular.module('<%= config.app_name %>.<%= _model.name %>.service', ['ngResource']);
<%= _model.name %>Services.factory(
    '<%= _.capitalize(_model.name) %>Service',
    [
        '$resource',
        'NJaxBootstrap',
        function($resource, NJaxBootstrap){
            return $resource(NJaxBootstrap.api_url + '<%= _model.uri %>/:<%= _model.name %>_id',
            	{
            		'<%= _model.name %>_id':'@_id'<% if(_model.parent){ %>,
					 	<%= _model.parent %>:'@<%= _model.parent %>'
					<% } %>
            	},
            	{
					query: {
						method:'GET',
						params:{

						},
						isArray:true
					}
            	}
            );
        }
    ]
);

