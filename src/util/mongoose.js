

module.exports={
    mutipleMongoosetoObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongoosetoObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};