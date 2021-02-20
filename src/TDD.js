// This file is just a TDD scratch pad
const data = {}

data.data = [
    {
        category: "mars",
        confidence: 0.556942776160523,
        finished: false,
        id: 0,
    }, {
        category: "ocean",
        confidence: 0.8246395085963659,
        finished: true,
        id: 1,
    }, {
        category: "bewick",
        confidence: 0.2346049285975661,
        finished: false,
        id: 2,
    }, {
        category: "eeboo",
        confidence: 0.8348192675394055,
        finished: true,
        id: 3,
    }, {
        category: "sakm",
        confidence: 0.5585836036507182,
        finished: true,
        id: 4,
    }, {
        category: "orange",
        confidence: 0.569025997768916,
        finished: false,
        id: 5,
    }, {
        category: "suzette",
        confidence: 0.4594777692656673,
        finished: true,
        id: 6,
    }, {
        category: "finch",
        confidence: 0.41673034332435654,
        finished: true,
        id: 7,
    }, {
        category: "finch",
        confidence: 0.16532405368911385,
        finished: true,
        id: 8,
    }, {
        category: "wren",
        confidence: 0.585245463970556,
        finished: true,
        id: 9,
    }, {
        category: "bewick",
        confidence: 0.16046619643479731,
        finished: true,
        id: 10,
    }, {
        category: "swift",
        confidence: 0.024637334307923475,
        finished: true,
        id: 11,
    }
]

data.data
    .filter((x) => {
        if (x.finished == false) {
            return x
        }
    })

    .map((x) => {
        console.log(x)
    })