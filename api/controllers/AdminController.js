/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login:function(request,response){//method to get the details of each book
		Books.find(function(error,books){
				if(error){
                   return response.serverError();
				}
               else{

               	Section.find(function(error,sections){
			       if(error)
			       {
			         return response.serverError();
			       }
			       else{
			         //sails.log(books);
			         response.view("common/admin",{bookList: books, sections: sections });
			       }

			      });//second find
				
			   }
			});//first find
	},//function ends here
};

