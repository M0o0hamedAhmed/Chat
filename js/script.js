//  togleChatBar

let togleChatBar = document.getElementById('togleChatBar')
let chatBar = document.getElementById("chatBarId")

togleChatBar.addEventListener("click", () => {
    console.log("hi")
    chatBar.classList.toggle("hiddenChatBar"), console.log('hi')
})
//console.log(togleChatBar,chatBar);







// Display  Menu 

let menu = document.getElementById('menu')
let nav = document.getElementById("nav")
menu.addEventListener("click", () => {
    nav.classList.toggle("navHeight")
})

// import data from './data.json';
// console.log(data);

// import data from './data.json' assert { type: 'JSON' };
// console.log(data);



//loops in containerChatBar img 




let obj = [{
        "id": "1",
        "userName": "علي ابراهيم",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل! 1",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": " 1 مساء الخير   علي ابراهيم",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد   1",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "1 1مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "1مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "1مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "1مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "1مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "1مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "1مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "1مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "1مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "1مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "2",
        "userName": "حسام مصطفي",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": " مرحبا عزيزي العميل 2",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": " مرحبا عزيزي العميل حسام مصطفي!  2",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "2مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "2مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "2مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "2مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "3",
        "userName": "امير مجدي",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "3مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "3مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "3مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "3مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "3مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "3مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "3مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "4",
        "userName": "عبدالرحمن احمد",
        "imageUrl": "img/images.jpg",

        "message": [{
                "message": "4مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "4مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "4مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "4مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "4مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "5",
        "userName": "علاء هاني",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "6",
        "userName": "message7",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "7",
        "userName": "محمد احمد",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "8",
        "userName": "message8",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "9",
        "userName": "message9",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "10",
        "userName": "message10",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "11",
        "userName": "message11",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "12",
        "userName": "message12",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "13",
        "userName": "message13",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            }
        ],
        "time": "منذ دقيقه"
    },
    {
        "id": "14",
        "userName": "message14",
        "imageUrl": "img/images.jpg",
        "message": [{
                "message": "مرحبا عزيزي العميل!",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مرحبا عزيزي العميل",
                "color": "CCD1E7",
                "time": "4:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "5:00PM"
            },
            {
                "message": "مساء الخير احمد علي ",
                "color": "EEF0F8",
                "time": "6:00PM"
            }
        ],
        "time": "منذ دقيقه"
    }
]






// loops in messages

// #CCD1E7  ==>  right
//#EEF0F8   ==>  left 
// let messages = [
//     {message:'مرحبا عزيزي العميل!' ,color:'CCD1E7',time:'4:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مرحبا عزيزي العميل' ,color:'CCD1E7',time:'4:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مرحبا عزيزي العميل' ,color:'CCD1E7',time:'4:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مرحبا عزيزي العميل' ,color:'CCD1E7',time:'4:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
// ]


//console.log(obj[0].message);

let messageList = ''
let iterationMessageList = document.getElementById("iterationMessageList")
let clientChat = document.getElementById('clientChat')
let clientNameInChat = document.getElementById("clientNameInChat")
let Clients = document.getElementById("iterationChatList")
let chatScreen = document.getElementById("chatScreen")
let containerChatBarImg = document.getElementById('containerChatBarImg')
clientNameInChat.innerHTML = obj[0].userName
// //console.log(clientChat)








window.onload = (event) => {
    console.log("load");
    clientChat.scrollTop = clientChat.scrollHeight
}



// document.addEventListener('DOMContentLoaded', function(e) {
//     console.log("h");
//     clientChat.addEventListener('scroll', function(e) {
//         let documentHeight = clientChat.scrollHeight;
//         let currentScroll = clientChat.scrollY + window.innerHeight;
//         // When the user is [modifier]px from the bottom, fire the event.
//         let modifier = 200; 
//         console.log("documentHeight",documentHeight);
//         console.log("currentScroll=>",currentScroll);
//         console.log("scrollTop=>",clientChat.scrollTop);
//         if(currentScroll + modifier > documentHeight) {
//             console.log('You are at the bottom!')
//         }
//    // })
// })









for (const [i, iterator] of obj.entries()) {

    // let result =  Object.entries(iterator)[0].find(x =>x=='1')
    console.log()
    //console.log(result);
    //console.log(obj[0].message);
    for (const [i, iteratorMessage] of obj[0].message.entries()) {
        //console.log(iteratorMessage);
        messageList += `
      <div class="message mainUser ${iteratorMessage.color}">
      <span class="messageTime ">${iteratorMessage.time}</span>
      <p>${iteratorMessage.message} ${obj[0].userName}</p>
      </div>`
        iterationMessageList.innerHTML += messageList
        console.log()
        iterationMessageList.innerHTML = messageList
        //  console.log(obj[even.path[1].id-1].message[i].color)
    }
}



Clients.addEventListener("click", (even) => {
    console.log(iterationChatList.querySelectorAll('.Clients'));
    iterationChatList.querySelectorAll('.Clients').forEach(element => {
        element.firstElementChild.classList.remove("activeChat")
    });
    //  console.log(even.path);
    messageList = ''
    clientNameInChat.innerHTML = obj[even.path[1].id - 1].userName

    for (const [i, iterator] of obj[even.path[1].id - 1].message.entries()) {


        messageList += `
         <div class="message mainUser ${iterator.color}">
         <span class="messageTime ">${iterator.time}</span>
         <p>${iterator.message} ${obj[even.path[1].id - 1].userName}</p>
         </div>`

        iterationMessageList.innerHTML = messageList

    }
    even.path[0].classList.toggle("activeChat")




    // console.log(obj[even.path[1].id - 1].userName)
    //  console.log(obj[even.path[1].id - 1].id)


})





containerChatBarImg.addEventListener("click", (even) => {



    messageList = ''
    clientNameInChat.innerHTML = obj[even.target.attributes[1].value - 1].userName

    for (const [i, iterator] of obj[even.target.attributes[1].value].message.entries()) {


        messageList += `
     <div class="message mainUser ${iterator.color}">
     <span class="messageTime ">${iterator.time}</span>
     <p>${iterator.message} ${obj[even.target.attributes[1].value].userName}</p>
    
     </div>`

        iterationMessageList.innerHTML = messageList

    }
    even.path[0].classList.toggle("activeChat")




    // console.log(obj[even.path[1].id - 1].userName)
    //  console.log(obj[even.path[1].id - 1].id)


})








// let obj1 = [
//     {id:'1',userName:'علي ابراهيم',imageUrl:'../img/images.jpg',message:[
//     {message:'مرحبا عزيزي العميل!' ,color:'CCD1E7',time:'4:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مرحبا عزيزي العميل' ,color:'CCD1E7',time:'4:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مرحبا عزيزي العميل' ,color:'CCD1E7',time:'4:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مرحبا عزيزي العميل' ,color:'CCD1E7',time:'4:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     {message:'مساء الخير احمد علي ',color:'EEF0F8',time:'5:00PM'},
//     ], time:'منذ دقيقه'},]


// loops in users 



// let obj = [
//     {id:'1',userName:'علي ابراهيم',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'2',userName:'حسام مصطفي',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'3',userName:'امير مجدي',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'4',userName:'عبدالرحمن احمد',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'5',userName:'علاء هاني',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'6',userName:'message7',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'7',userName:'محمد احمد',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'8',userName:'message8',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'9',userName:'message9',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'10',userName:'message10',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'11',userName:'message11',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'12',userName:'message12',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'13',userName:'message13',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'},
//     {id:'14',userName:'message14',imageUrl:'../img/images.jpg',message:'مرحبا عزيزي العميل' , time:'منذ دقيقه'}
// ]




let userList = ''
let imgList = ''

for (const iterator of obj) {
    userList +=
        `<div id=${iterator.id} class="Clients">
        <div id="chatScreen"></div>
<div class="topClient">
    <div class="img"></div>
    <span class="clientName"> ${iterator.userName}</span>
</div>
<div class="bottomUser">
    <span class="clientMessage">مرحبا عزيزي العميل </span>
    <div class="timeLastMessage">
        <i class="fa-regular fa-clock"></i>
        <span>منذ دقيقه</span>
    </div>
</div>
</div>`
    // console.log(iterator.userName);

    imgList += `
<div class="img" data-id=${iterator.id} style="background-image: url('${iterator.imageUrl}');">
<span>${iterator.userName}</span>
</div>`
}

Clients.innerHTML = userList
containerChatBarImg.innerHTML = imgList




// containerChatBarImg.addEventListener('click',(event)=>{
//     console.log(event);
//     console.log(event.target.attributes[1].value);


// })

// Date  in Copyright

let date = new Date()
document.getElementById('date').innerHTML = date.getFullYear()