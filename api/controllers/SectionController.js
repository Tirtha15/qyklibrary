/**
 * SectionController
 *
 * @description :: Server-side logic for managing sections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
 
 	insert:function(request,response){//method to get the details of each section

      response.view("secInsert");
	},

	newinsert:function(request,response){//method to get the details of each section

       var secname=request.body.secname;
       Section.create({name:secname}).exec(function(error,sec){
				if(error){
                   return response.serverError();
				}
               else{
               	//sails.log(book);
				response.ok("Added successfully");

			}
			});
	},

	 viewAll:function(request,response){//method to see all sections
      Section.find(function(error,sections){
       if(error)
       {
         return response.serverError();
       }
       else{
         //sails.log(books);
         response.view("secView",{name: "Showing All Results", inserted: sections });
       }

      });
        
	},


};

