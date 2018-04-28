// 定义猫属性集合
initCats = [{
        catNO: 0,
        catname: "Tony",
        clickCount: 0,
        imgSrc: "img/22252709_010df3379e_z.jpg",
        nickNames: ['Bert', 'Charles', 'Denise'],
    },
    {
        catNO: 1,
        catname: "Jary",
        clickCount: 0,
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nickNames: ['mm', 'kk', 'jj'],
    },
];
// 定义猫属性类
var cat = function (data) {
    var self = this;
    self.catNO = ko.observable(data.catNO);
    self.catname = ko.observable(data.catname);
    self.clickCount = ko.observable(data.clickCount);
    self.imgSrc = ko.observable(data.imgSrc);
    self.nickNames = ko.observableArray(data.nickNames);
    self.catLevel = ko.computed(function () {
        let clicks = self.clickCount();
        if (clicks >= 0 && clicks < 10) {
            return "baby";
        } else {
            return "Teen";
        }
    }, self);
}

// 定义view module 
var viewModule = function () {
    var self = this;
    self.cats = ko.observableArray([]);
    initCats.forEach(catArg => {
        self.cats.push(new cat(catArg));
    });
    self.currentCat = ko.observable(self.cats()[0]);
    // 更改当前展示的cat
    self.changeCat = function (clickCat) {
        self.currentCat(clickCat);
    }
    // 点击事件
    self.clickCat = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }
}
// 绑定view module
ko.applyBindings(new viewModule());