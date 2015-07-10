/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'common/myhome'
  },
  //for books controller

 'get /books/find':'BooksController.find',//in use  

 'get /book/:id':'BooksController.findOne',//in use

 'put /books/:id':'BooksController.update',//in use
 'delete /books/del/:id':'BooksController.delete',//in use 
 'post /books/insert':'BooksController.create',//in use
  
 'post /section/newinsert':'SectionController.create',//in use
 'get /section/find':'SectionController.find',// in use

 'get /admin/login':'AdminController.login',// in use


  // 'get /books/find':'BooksController.find',

  // 'get /books/view':'BooksController.view',
  // 'get /books/update':'BooksController.update',
  // 'post /books/editdetls':'BooksController.editdetls',

  // '/books/insertBook':'BooksController.insertBook',
 
  //for section controller
  //'post /section/insert':'SectionController.insert',
  
  

  //for admin controller
 
  

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
