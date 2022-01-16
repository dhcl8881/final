import cardModel from "./models/schema.js";

const example = [
  {
    caseID: "1",
    name: "沈韋辰",
    date: "2022/1/1",
    studentID: "b07902078",
    college: "電資院",
    department: "資工系",
    pickupLocation: "德田館",
    saveLocation: "活大",
    pickupContact: "0988777666",
    code: "1987"
  },
  {
    caseID: "2",
    name: "楊大帥",
    date: "2022/1/1",
    studentID: "b08705078",
    college: "管理學院",
    department: "資管系",
    pickupLocation: "椰林大道",
    saveLocation: "總圖",
    pickupContact: "brother@gmail.com",
    code: "5566"
  },
  {
    caseID: "3",
    name: "羅小丑",
    date: "2022/1/2",
    studentID: "b08702099",
    college: "管理學院",
    department: "會計系",
    pickupLocation: "小福",
    saveLocation: "小福",
    pickupContact: "dog-and-icecream@gmail.com",
    code: "9487"
  },
  {
    caseID: "4",
    name: "羅大丑",
    date: "2022/1/4",
    studentID: "b08702100",
    college: "管理學院",
    department: "會計系",
    pickupLocation: "男三舍",
    saveLocation: "男三舍",
    pickupContact: "dog-and-icecream@gmail.com",
    code: "9487"
  },
  {
    caseID: "5",
    name: "吳狗哥",
    date: "2022/1/6",
    studentID: "b07103050",
    college: "文學院",
    department: "歷史系",
    pickupLocation: "男七舍",
    saveLocation: "男七舍",
    pickupContact: "dog-bro@gmail.com",
    code: "9999"
  },
];

const dataInit = async () => {
  const checkData = await cardModel.find();
  if (checkData.length < 5) {
    await cardModel.deleteMany({});
    await cardModel.insertMany(example);
    console.log("Database initialized!");
  }
};

export { dataInit };
