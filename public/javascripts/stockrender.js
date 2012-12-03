var stockname = "";

$(function() {
  
  function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      return vars;
  }
 
  stock = getUrlVars()["stockname"];
  console.log(stock);
  $('#stockname').append(stock);
  ///
  $.ajax({
			url: "/twitterstock",
			type: "put",
			data: {
				stockname: stock 
			},
			success: function(data) {
			   var json = data;
  			 var json_parsed = $.parseJSON(json);
         for(var x = 0; x<5; x++){
  			  console.log(json_parsed.results[x].text);
  			  $('#rightpane').append("<p>"+ json_parsed.results[x].from_user+":"+json_parsed.results[x].text+"</p></br>");
			}
		  
		}
			
	});
  
  ///
  getStock();
  
  
  
 
  
  function getStock(){
  var query = stock;
  var Markit = {};



  Markit.QuoteService = function(sSymbol, fCallback) {
      this.symbol = sSymbol;
      this.fCallback = fCallback;
      this.DATA_SRC = "http://dev.markitondemand.com/Api/Quote/jsonp";
      this.makeRequest();
  };

  Markit.QuoteService.prototype.handleSuccess = function(jsonResult) {
      this.fCallback(jsonResult);
  };

  Markit.QuoteService.prototype.handleError = function(jsonResult) {
      console.error(jsonResult);
  };
  /** 
  * Starts a new ajax request to the Quote API
  */
  Markit.QuoteService.prototype.makeRequest = function() {
      //Abort any open requests
      if (this.xhr) { this.xhr.abort(); }
      //Start a new request
      this.xhr = $.ajax({
          data: { symbol: this.symbol },
          url: this.DATA_SRC,
          dataType: "jsonp",
          success: this.handleSuccess,
          error: this.handleError,
          context: this
      });
  };

  new Markit.QuoteService(query, function(jsonResult) {

      //Catch errors
      if (!jsonResult.Data || jsonResult.Message){
          console.error("Error: ", jsonResult.Message);
          return;
      }

      //If all goes well, your quote will be here.
      console.log(jsonResult);

      //Now proceed to do something with the data.
      //$("h1").first().text(jsonResult.Data.Name);
      $("#LastArea").html(jsonResult.Data.LastPrice);
      $("#ChangeArea").html(jsonResult.Data.ChangePercent);
      $("#VolumeArea").html(jsonResult.Data.Volume);
      $("#MarketCap").html(jsonResult.Data.MarketCap);
      $("#ChangeYTD").html(jsonResult.Data.ChangePercentYTD+"%");

      /**
      * Need help? Visit the API documentation at:
      * http://dev.markitondemand.com
      */
  });
  }
 
 
});