const Mutation = {
    createCard: async (parent, { input }, { cardModel, pubSub }) => {
      var id = input.studentID
      const card = await cardModel.findOne({studentID:id})
      if(card===null){
        const newCard = new cardModel(input,);
        await newCard.save();
        pubSub.publish("CARD_CREATED", {
          cardCreated: newCard,
        });
        return newCard;
      }
      else if(card.return===true){
        await card.delete()
        const newCard = new cardModel(input,);
        await newCard.save();
        pubSub.publish("CARD_CREATED", {
            cardCreated: newCard,
          });
        return newCard;
      }
      else{
        return null
      }
    },
    updateCard: async (parent, {studentID,code}, {cardModel, pubSub}) => {
        const findcard = await cardModel.findOne({studentID})
        if(findcard.code===code){
            const card = await cardModel.findOneAndUpdate(
                { studentID },
                {
                  $set: {
                    return:true,
                  },
                },
                { returnDocument: "after" }
              )
        
            pubSub.publish("CARD_UPDATED", {
                cardUpdated: card,
            });
        }
        const card = await cardModel.findOne({studentID})
      return card;
    },
    searchCard: async (parent, { studentID }, { cardModel, pubSub }) => {
        const card = await cardModel.findOne({studentID})
        pubSub.publish("CARD_SEARCHED", {
            cardSearched: card,
        });
        return card;
    },
    sendCard: async (parent, {studentID}, {cardModel, pubSub}) => {
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'ntu.student.id.card@gmail.com',
                pass: 'ntustudent',
            },
        });
        
        var num = parseInt(Math.random() * 9000 + 1000)
       
        const card = await cardModel.findOneAndUpdate(
            { studentID },
            {
              $set: {
                code:num,
              },
            },
            { returnDocument: "after" }
          )
        if(card!==null){
            var options = {
                //寄件者
                from: 'ntu.student.id.card@gmail.com',
                //收件者
                to: studentID+'@ntu.edu.tw', 
                //主旨
                subject: '台大學生證報失系統', // Subject line
                //嵌入 html 的內文
                html: '<p>驗證碼為</p>'+num+"<p>拾獲地點為</p>"+card.pickupLocation, 
            };
            transporter.sendMail(options, function(error, info){
                if(error){
                    console.log(error);
                }else{
                    console.log('訊息發送: ' + info.response);
                }
            });
        }
        pubSub.publish("CARD_SENDED", {
            cardSend: card,
        });
        return card;
    },
    departments: async (parent, {department}, { cardModel }) => {
        const cards = await cardModel.find({department});
        return cards;
    },
    colleges: async (parent, {college}, { cardModel }) => {
      const cards = await cardModel.find({college});
      return cards;
    },
    grades: async (parent, {studentID}, { cardModel }) => {
        var length = studentID.length
        var key = studentID.substring(0,length)
        var searchKey = new RegExp(key, 'i')
        const cards = await cardModel.find({studentID:searchKey});
        return cards;
    },
    name: async (parent, {name}, { cardModel }) => {
      const cards = await cardModel.find({name});
      return cards;
    },
  };
  
  export default Mutation;
  