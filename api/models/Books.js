/**
* Books.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },

    author : { type: 'string' },

    id : { type: 'integer',
           autoIncrement: true
         },

    type:{
            model: 'Section',
            type: 'string'
        }
  }
};

