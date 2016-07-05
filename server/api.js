Api.addCollection(Birds);

// Api.addRoute('/birds/:_id', {authRequired: false},{
//   get: {
//     action: function(){
//       var id = this.urlParams._id;
//       return Birds.findOne(id);
//     }
//   }
// });
//
// Api.addRoute('/birds', {authRequired: false}, {
//   get: {
//     action: function(){
//       var birds = Birds.find();
//       if(!birds)
//         return {status: "404 Not found"};
//
//       return birds;
//     }
//   },
//   post: {
//     action: function(){
//       return this.request;
//     }
//   }
// });
