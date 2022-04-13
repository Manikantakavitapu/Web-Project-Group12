module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      pet: String,
      breed: String,
      price : Number,
      description : String,
        image1 : {data : Buffer, ContentType: String}
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("marketplace", schema);
  return Tutorial;
};
