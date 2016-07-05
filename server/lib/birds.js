Birds = new Mongo.Collection('birds');

Birds.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 256
  },
  family: {
    type: String,
    max: 256
  },
  continents: {
    type: [String],
    minCount: 1
  },
  added: {
    type: String,
    autoValue: function(){
      return moment(new Date()).format('YYYY-MM-DD');
    }
  },
  visible: {
    type: Boolean,
    optional: true,
    defaultValue: false
  }
}));
