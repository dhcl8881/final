export const collegeName = [
    {
        name: "文學院",
        code: "1",
        department: [
            {
                name: "中文系",
                code: "101"
            },
            
            {
                name: "外文系",
                code: "102"
            },
            
            {
                name: "歷史系",
                code: "103"
            },
            
            {
                name: "哲學系",
                code: "104"
            },
            
            {
                name: "人類系",
                code: "105"
            },
            
            {
                name: "圖資系",
                code: "106"
            },
            
            {
                name: "日文系",
                code: "107"
            },
            
            {
                name: "戲劇系",
                code: "109"
            },
        ]
    },
    {
        name: "理學院",
        code: "2",
        department: [
            {
                name: "數學系",
                code: "201"
            },
            
            {
                name: "物理系",
                code: "202"
            },
            
            {
                name: "化學系",
                code: "203"
            },
            
            {
                name: "地質系",
                code: "204"
            },
            
            {
                name: "心理系",
                code: "207"
            },
            
            {
                name: "地理系",
                code: "208"
            },
            
            {
                name: "大氣系",
                code: "209"
            },
        ]
    },
    {
        name: "社科院",
        code: "3",
        department: [
            {
                name: "政治系",
                code: "302"
            },
            
            {
                name: "經濟系",
                code: "303"
            },
            
            {
                name: "社會系",
                code: "305"
            },
            
            {
                name: "社工系",
                code: "310"
            },
        ]
    },
    {
        name: "醫學院",
        code: "4",
        department: [
            {
                name: "牙醫系",
                code: "402"
            },
            
            {
                name: "藥學系",
                code: "403"
            },
            
            {
                name: "醫技系",
                code: "404"
            },
            
            {
                name: "護理系",
                code: "406"
            },
            
            {
                name: "物治系",
                code: "408"
            },
            
            {
                name: "職治系",
                code: "409"
            },
        ]
    },
    {
        name: "工學院",
        code: "5",
        department: [
            {
                name: "土木系",
                code: "501"
            },
            
            {
                name: "機械系",
                code: "502"
            },
            
            {
                name: "化工系",
                code: "504"
            },
            
            {
                name: "工海系",
                code: "505"
            },
            
            {
                name: "材料系",
                code: "507"
            },
        ]
    },
    {
        name: "生農院",
        code: "6",
        department: [
            {
                name: "農藝系",
                code: "601"
            },
            
            {
                name: "生工系",
                code: "602"
            },
            
            {
                name: "農化系",
                code: "603"
            },
            
            {
                name: "森林系",
                code: "605"
            },
            
            {
                name: "動科系",
                code: "606"
            },
            
            {
                name: "農經系",
                code: "607"
            },
            
            {
                name: "獸醫系",
                code: "609"
            },
            
            {
                name: "生傳系",
                code: "610"
            },
            
            {
                name: "生機系",
                code: "611"
            },
            
            {
                name: "昆蟲系",
                code: "612"
            },
            
            {
                name: "植微系",
                code: "613"
            },
        ]
    },
    {
        name: "管理學院",
        code: "7",
        department: [
            {
                name: "工管系",
                code: "701"
            },
            
            {
                name: "會計系",
                code: "702"
            },
            
            {
                name: "財金系",
                code: "703"
            },
            
            {
                name: "國企系",
                code: "704"
            },
            
            {
                name: "資管系",
                code: "705"
            },
        ]
    },
    {
        name: "公衛院",
        code: "8",
        department: [
            {
                name: "公衛系",
                code: "801"
            },
        ]
    },
    {
        name: "電資院",
        code: "9",
        department: [
            {
                name: "電機系",
                code: "901"
            },
            
            {
                name: "資工系",
                code: "902"
            },
        ]
    },
    {
        name: "法律學院",
        code: "A",
        department: [
            {
                name: "法律系",
                code: "A01"
            },
        ]
    },
    {
        name: "生命科學院",
        code: "B",
        department: [
            {
                name: "生科系",
                code: "B01"
            },
            
            {
                name: "生技系",
                code: "B02"
            },
        ]
    },
    {
        name: "其他",
        code: "?",
        department: [
       
        ]
    },
   
];

export const codeToString = (code) => {
    const collegeCode = code.slice(0,1)
    const departmentCode = code
    var collegeString = "?", departmentString="?"

    for( var college of collegeName){
        if(collegeCode === college.code){
            collegeString =  college.name
            for( var department of college.department){
                if(departmentCode === department.code){
                    departmentString = department.name
                    break
                }
            }
            break
        }
    }

    return {collegeString, departmentString}
}