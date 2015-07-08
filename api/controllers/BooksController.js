/**
 * BooksController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	find:function(request,response){//method to get the details of each book

        //name="Tirtha";
   //var name=request.query.name;
   //var name2=request.body.name2;
    var bname=request.query.book;
		//return response.view("myhome",{name:name});
		sails.log("here");
		Books.find({name: bname}).exec(function(error,books){
				if(error){
                   return response.serverError();
				}
               else{
				response.view("myhome",{name:books[0].author, inserted: undefined})
			}
			});
	},

	insert:function(request,response){//method to insert new book details
      var bname=request.body.book;
      var aname=request.body.author;
      Books.create({name:bname,author:aname}).exec(function(error,book){
				if(error){
                   return response.serverError();
				}
               else{
               	sails.log(book);
				response.view("myhome",{name: "Inserted", inserted: book });
			}
			});

	},

	 viewAll:function(request,response){//method to see all books
      Books.find(function(error,books){
       if(error)
       {
         return response.serverError();
       }
       else{
         sails.log(books);
         response.view("myhome",{name: "Showing All Results", inserted: books });
       }

      });
        
	},

	view:function(request,response){//method to see details of the selected book
      var bid=request.query.id;
      sails.log(bid);
      Books.findOne({id: bid}).exec(function(error,bookv){
				if(error){
                   return response.serverError();
				}
               else{
               	sails.log(bookv);
				response.view("details",{name: "Book Details", sbook: bookv })
			}
			});
	},

  update:function(request,response){//method to redirect to a new view containg a form to edit details
      var bid=request.query.id;
      sails.log(bid);
      Books.findOne({id: bid}).exec(function(error,bookv){
        if(error){
                   return response.serverError();
        }
               else{
                sails.log(bookv);
        response.view("edit",{name: "Book Details", sbook: bookv })
      }
      });
     // response.ok("bid");
  },

 editdetls:function(request,response){//method to edit the details of a particular book
      var bid=request.body.id;//getting id sent as hidden field
      var bname=request.body.bname;//getting book name sent thorough post method in the form
      var aname=request.body.aname;//getting author name sent thorough post method in the form
      sails.log(bid);
      Books.update({ id: bid }, { name: bname,author:aname }).exec(function(err, users) {//updating with new values for the selected id
        if(err){
                   return response.serverError();
        }
               else{

                 Books.findOne({id: bid}).exec(function(error,bookv){//finding the updated details
        if(error){
                   return response.serverError();
        }
               else{
                sails.log(bookv);
        response.view("details",{name: "Book Details", sbook: bookv })//returning to view with new values
      }
      });

          //      sails.log(bookv);
        
      }

      });
     
  },


    del:function(request,response){//method to delete book details
      var id=request.query.id;
      sails.log(id);
      //response.ok(id);

      
      Books.destroy({id:id}).exec(function(error,book){
        if(error){
                   return response.serverError();
        }
               else{
                sails.log(book);
        response.view("myhome",{name: "Deleted", inserted: undefined });
      }
      });

  },
	
};

  