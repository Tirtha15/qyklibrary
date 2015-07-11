/**
 * SectionController
 *
 * @description :: Server-side logic for managing sections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

// in use
  create:function(request,response){//method to get the details of each section

       var secname=request.body.secName;
     //  var secName=request.body.secname;
      // sails.log(secname);
      // sails.log(secName);
       Section.create({name:secname}).exec(function(error,sec){
        if(error){
                   return response.serverError();
        }
               else{
                //sails.log(book);
        response.redirect('/admin/login');

      }
      });
  },
// in use
   find:function(request,response){//method to see all sections
sails.log("Reaching find");
     if(request.params.showBooks!=undefined)
       var sect=request.params.showBooks;
     else
      var sect="";

    sails.log("section:"+sect);

      Section.find(function(error,sections){
       if(error)
       {
         return response.serverError();
       }
       else{
        //sails.log(books);
       Books.find(function(error, books) {
      if (error) {
        return response.serverError(error);
      } else {
        // sails.log(books);
        response.view("sections/viewAll", {
          books: books,
          inserted: sections,
          mySection: sect
        });
      }
    });


         //response.view("sections/viewAll",{name: "Showing All Results", inserted: sections });
       }

      });
        
  },

  // in use
     findSectionBooks:function(request,response){//method to see all sections
sails.log("Reaching this find");
     if(request.params.showBooks!=undefined)
       var sect=request.params.showBooks;
     else
      var sect="";

    sails.log("section:"+sect);

      Books.find({
      type: sect
    }).exec(function(error, books) {
      if (error) {
        return response.serverError(error);
      } else {
        sails.log(books);
        return response.send(books);
        //response.view("books/viewOne",{sbook: bookv })
      }
    });       
  },

 /*
 	insert1:function(request,response){//method to get the details of each section
      response.ok("Inserted");
      //response.redirect('/admin/login');
	},

  insert:function(request,response){//method to get the details of each section
    var secname=request.body.secName;
    //sails.log(secname);
           Section.create({name:secname}).exec(function(error,sec){
            if(error){
                       return response.serverError();
            }
                   else{
                    
            response.redirect('/admin/login');

          }
          });
  },*/





};

