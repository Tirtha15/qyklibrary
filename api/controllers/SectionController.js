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
          mySection: "Detective"
        });
      }
    });


         //response.view("sections/viewAll",{name: "Showing All Results", inserted: sections });
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

