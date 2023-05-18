// Import the dependency.
const { MongoClient } = require('mongodb');

let mongoClient;
let db;

const connectDB = async () => {

  if (!mongoClient) {
    mongoClient = await MongoClient.connect(process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true });
    db = mongoClient.db('quotes');
    var myobj = [{ category: "stoic", quote: "Beraber çalışıp başkalarına karşı dürüst ve adil olmalıyız.." }, { category: "stoic", quote: "Etrafımızdaki dünyayı anlamak için aklımızı kullanmalı, tabiatın planında kendimize düşen görevi yapmalıyız." },{ category: "stoic", quote: "Zevk arzusu veya acı korkusu tarafından kontrol edilmeye izin verilmemelidir." }, { category: "stoic", quote: "Doğadan gelen her şeye boyun eğmeli, insandan gelen her şeye karşı konmalıdır." },{ category: "stoic", quote: "Bir erdem/ideal için yaşamak en büyük mutluluktur." }, { category: "stoic", quote: "Mutsuzluğun ana nedeni, mantık yerine hislerimize ve iç güdülerimize anlık yenilgilerdir." },{ category: "stoic", quote: "Güçlü, kontrol sahibi ve sebatlı olmak önemlidir." }, { category: "stoic", quote: "İnsan olarak hayatımız, bu kaotik dünyada aslında kısacık bir andır." },{ category: "stoic", quote: "Dünya son derece öngörülemez olaylarla doludur." }, { category: "stoic", quote: "Dışarıdaki olayları kontrol edemeyiz ve mutluluğumuzu bu olaylara endekslememeliyiz." },];
    db.collection("quote").insertMany(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 record inserted");

    });

  }
  return mongoClient;
};

const getQuoteCollection = async () => {
  if (!mongoClient) {
    await connectDB();
  }
  if (db) return db.collection('quote');
  throw new Error('No Quote Collection found');
};

module.exports = {
  connectDB,
  getQuoteCollection,
};