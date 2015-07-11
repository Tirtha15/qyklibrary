/**
 * BooksController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  //in use
  create: function(request, response) { //method to insert new book details
    sails.log("## BooksController ## create ## Entry point");
    var bname = request.body.book;
    var aname = request.body.author;
    var sec = request.body.bSection;
    // sails.log(sec);
    Books.create({
      name: bname,
      author: aname,
      type: sec
    }).exec(function(error, book) {
      if (error) {
        return response.serverError();
      } else {
        response.redirect('/admin/login');
      }
    });
  },
  //in use
  find: function(request, response) { //method to see all books
   // sails.log("## BooksController ## find ## Entry point");
    Books.find(function(error, books) {
      if (error) {
        return response.serverError(error);
      } else {
        // sails.log(books);
        response.view("books/viewAll", {
          name: "Showing All Results",
          inserted: books
        });
      }
    });
  },
  //in use
  findOne: function(request, response) {
    sails.log("## BooksController ## findOne ## Entry point");
    var bid = request.params.id;
    Books.findOne({
      id: bid
    }).exec(function(error, bookv) {
      if (error) {
        return response.serverError(error);
      } else {
        //sails.log(bookv);
        Section.find(function(error, sections) {
          if (error) {
            return response.serverError();
          } else {
            //sails.log(books);
            response.view("books/viewOne", {
              sections: sections,
              sbook: bookv
            });
          }
        });
        //response.view("books/viewOne",{sbook: bookv })
      }
    });
  },
  //in use
  update: function(request, response) { //method to redirect to a new view containg a form to edit details
    var bid = request.params.id;
    var bookName = request.body.bookName;
    var authorName = request.body.authorName;
    var secName = request.body.section;
    // sails.log(bookName);
    Books.update({
      id: bid
    }, {
      name: bookName,
      author: authorName,
      type: secName
    }).exec(function(err, book) { //updating with new values for the selected id
      if (err) {
        return response.serverError();
      } else {
        return response.ok(book);
      }
    });
  },
  //in use
  delete: function(request, response) { //method to delete book details
    var id = request.params.id;
    // sails.log("deleting book:", id);
    Books.destroy({
      id: id
    }).exec(function(error, book) {
      if (error) {
        return response.serverError();
      } else {
        //  response.redirect('/admin/login');
        response.ok(book);
      }
    });
  },
  // find:function(request,response){//method to get the details of each book
  //        //name="Tirtha";
  //   //var name=request.query.name;
  //   //var name2=request.body.name2;
  //    var bname=request.query.book;
  //  //return response.view("myhome",{name:name});
  //  sails.log("here");
  //  Books.find({name: bname}).exec(function(error,books){
  //      if(error){
  //                   return response.serverError();
  //      }
  //               else{
  //      response.view("myhome",{name:books[0].author, inserted: undefined})
  //    }
  //    });
  // },
  /*
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
  */
  // update1:function(request,response){//method to redirect to a new view containg a form to edit details
  //     var bid=request.query.id;
  //     sails.log(bid);
  //     Books.findOne({id: bid}).exec(function(error,bookv){
  //       if(error){
  //                  return response.serverError();
  //       }
  //              else{
  //               sails.log(bookv);
  //       response.view("edit",{name: "Book Details", sbook: bookv })
  //     }
  //     });
  //    // response.ok("bid");
  // },
  // editdetls:function(request,response){//method to edit the details of a particular book
  //      var bid=request.body.id;//getting id sent as hidden field
  //      var bname=request.body.bname;//getting book name sent thorough post method in the form
  //      var aname=request.body.aname;//getting author name sent thorough post method in the form
  //      sails.log(bid);
  //      Books.update({ id: bid }, { name: bname,author:aname }).exec(function(err, users) {//updating with new values for the selected id
  //        if(err){
  //                   return response.serverError();
  //        }
  //               else{
  //                 Books.findOne({id: bid}).exec(function(error,bookv){//finding the updated details
  //        if(error){
  //                   return response.serverError();
  //        }
  //               else{
  //                sails.log(bookv);
  //        response.view("details",{name: "Book Details", sbook: bookv })//returning to view with new values
  //      }
  //      });
  //          //      sails.log(bookv);
  //      }
  //      });
  //  },
  //  insertBook:function(request,response){//method to see all sections
  //     Section.find(function(error,sections){
  //      if(error)
  //      {
  //        return response.serverError();
  //      }
  //      else{
  //        //sails.log(books);
  //        response.view("newbook",{name: "Insert New Book", sections: sections });
  //      }
  //     });
  // },
};