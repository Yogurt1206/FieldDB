define("app/AppRouter", [ 
    "use!backbone",
    "user/User",
    "user/UserProfileView",
    "datum/Datum",
    "datum/DatumView",
    "session/Session",
    "session/SessionView",
    "corpus/Corpus",
    "libs/Utils"
    
],
 function(Backbone, User, UserProfileView, Datum, DatumView,Session,SessionView, Corpus) {

    var AppRouter = Backbone.Router.extend(
    /** @lends AppRouter.prototype */
    {
       /**
        * @class Routes URLs to different dashboard layouts and data.
        *
        * @extends Backbone.Router
        * @constructs
        */
       initialize: function() {
       },
       
       routes: {
          "corpus/:corpusName/datum/:id": "showExtendedDatum",
          "corpus/:corpusName/session/:id": "showNewSession",
          "corpus/:corpusName/datalist/:id": "showExtendedDataList",
          "corpus/:corpusName/search": "showExtendedSearch",
          "corpus/:corpusName": "showDashboard",
          "user/:userName": "showUserProfile",
          "user/:userName/prefs": "showUserPreferences",
          "": "showDashboard",
       },
      
       /**
        * Displays the extended view of the session specified by the given 
        * corpusName and the given datumId.
        * 
        * @param {String} corpusName The name of the corpus this datum is from.
        * @param {Number} sessionId The ID of the session within the corpus.
        */
       showNewSession: function(corpusName, sessionId) {
        	  Utils.debug("In showExtendedSession: " + corpusName + " *** " + sessionId);
        	  
        	  $("#dashboard-view").hide();
        	  $("#extended-datum-view").hide();
        	  $("#extended-datalist-view").hide();
        	  $("#extended-search-view").hide();
        	  $("#user-profile-view").hide();
        	  $("#new-session-view").show();

        	  var sessionView = new SessionView({model: new Session()});
        	  $("#new-session-view").append(sessionView.render().el);

        },
       
       
       
       /**
        * Displays the extended view of the datum specified by the given 
        * corpusName and the given datumId.
        * 
        * @param {String} corpusName The name of the corpus this datum is from.
        * @param {Number} datumId The ID of the datum within the corpus.
        */
       showExtendedDatum: function(corpusName, datumId) {
       	  Utils.debug("In showExtendedDatum: " + corpusName + " *** " + datumId);
       	  
       	  $("#dashboard-view").hide();
       	  $("#extended-datum-view").show();
       	  $("#extended-datalist-view").hide();
       	  $("#extended-search-view").hide();
       	  $("#user-profile-view").hide();
    	  $("#new-session-view").hide();

       	  
       	  
       	  var datumView = new DatumView({model: new Datum()});
       	  var sID = datumView.model.get("sessionID");
       	  //console.log(sID);
       	  if(sID === 0){
       		  var yale = new Corpus();
       		  this.showNewSession(yale, 12);
       	  }else{
           	  $("#extended-datum-view").append(datumView.render().el);

       	  }
       	  
       	  
       
       },
       
       
      
        
       
       
       
       
          
       /**
        * Displays the extended view of the datalist specified by the given
        * corpusName and the given dataListId
        *  
        * @param {String} corpusName The name of the corpus this datalist is from.
        * @param {Number} dataListId The ID of the datalist within the corpus.
        */
       showExtendedDataList: function(corpusName, dataListId) {
          Utils.debug("In showExtendedDataList: " + corpusName + " *** " + dataListId);
          
     	  $("#dashboard-view").hide();
       	  $("#extended-datum-view").hide();
       	  $("#extended-datalist-view").show();
       	  $("#extended-search-view").hide();
       	  $("#user-profile-view").hide();
    	  $("#new-session-view").hide();
    	  
    	  
    	  

       },
       
       /**
        * Display the extended view of search within the corpus specified by the 
        * given corpusName.
        * 
        * @param {String} corpusName The name of the corpus to search in.
        */
       showExtendedSearch: function(corpusName) {
          Utils.debug("In showExtendedSearch: " + corpusName);
          
     	  $("#dashboard-view").hide();
       	  $("#extended-datum-view").hide();
       	  $("#extended-datalist-view").hide();
       	  $("#extended-search-view").show();
       	  $("#user-profile-view").hide();
    	  $("#new-session-view").hide();

       },
          
       /**
        * Displays the dashboard view of the given corpusName, if one was given. 
        * Or the blank dashboard view, otherwise.
        * 
        * @param {String} corpusName (Optional) The name of the corpus to display.
        */
       showDashboard: function(corpusName) {  
          Utils.debug("In showDashboard: " + corpusName);
          
       	  $("#dashboard-view").show();
       	  $("#extended-datum-view").hide();
       	  $("#extended-datalist-view").hide();
       	  $("#extended-search-view").hide();
       	  $("#user-profile-view").hide();
    	  $("#new-session-view").hide();

       },
       
       /**
        * Displays the profile of the user specified by the given userName.
        *  
        * @param {String} userName The username of the user whose profile to display.
        */
       showUserProfile: function(userName) {
       	  Utils.debug("In showUserProfile: " + userName);
       	  
       	  $("#dashboard-view").hide();
       	  $("#extended-datum-view").hide();
       	  $("#extended-datalist-view").hide();
       	  $("#extended-search-view").hide();
       	  $("#user-profile-view").show();
       	  $("#new-session-view").hide();
;

       	  

       	  // Create 
       	  var userProfileView = new UserProfileView({
       		  model : new User(), 

       		  el : $('#user-profile-view'),
       	  });

       	  userProfileView.render();

       // Render a user profile into the div
			var view = new UserProfileView({
				model : User,  
			});
			$("#user-profile-view").append(view.render().el);

       },
       
       
       /**
        * Displays the profile of the user specified by the given userName.
        *  
        * @param {String} userName The username of the user whose profile to display.
        */
       showUserPreferences: function(userName) {
       	  Utils.debug("In showUserProfile: " + userName);
       	  
       	  $("#dashboard-view").hide();
       	  $("#extended-datum-view").hide();
       	  $("#extended-datalist-view").hide();
       	  $("#extended-search-view").hide();
       	  $("#user-profile-view").show();
       	  $("#new-session-view").hide();
;

       	  

       	  // Create 
       	  var userProfileView = new UserProfileView({
       		  model : new User(), 

       		  el : $('#user-profile-view'),
       	  });

       	  userProfileView.render();

       // Render a user profile into the div
			var view = new UserProfileView({
				model : User,  
			});
			$("#user-profile-view").append(view.render().el);

       }
    });
    
    return AppRouter; 
});