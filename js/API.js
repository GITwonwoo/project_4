let banner = ["박경림","동물","차"];

for (let i = 0; i < banner.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: banner[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })
        .done(function (msg) {
            const divs = $(".sldimg");
            divs.eq(i).children('.imgbtn').prepend("<img src='" + msg.documents[0].thumbnail + "'/>");

            let str = msg.documents[0].contents;
            let str2 = str.substring(0, 150);

            divs.eq(i).children('.content').prepend("<p>" + str2 + "..." + "</p>");       
            divs.eq(i).children('.content').prepend("<h6>" + msg.documents[0].authors + "</h6>");
            divs.eq(i).children('.content').prepend("<h4>" + msg.documents[0].title + "</h4>");    
        });
}

// ---------------------- MD추천도서------------------------
let choice = ["박경림", "기욤뮈소", "박완서", "경제", "한국사", "파리", "여행", "음식"];

for (let i = 0; i < choice.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: choice[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })
        .done(function (msg) {
            const divs = $(".sectionthree .tab_list").eq(0).children(".sectionthree .box");
            divs.eq(i).children('.sectionthree .imgbtn').prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
            divs.eq(i).append("<h4>" + msg.documents[0].title + "</h4>");
            divs.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");

   
           
        });
}
// ---------------------- 화제의신간------------------------
let newbook = ["이중섭", "기욤뮈소", "김민수", "경제", "부동산", "도쿄", "여행", "음식"];

for (let i = 0; i < newbook.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: newbook[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })

    .done(function (msg) {
        const divs = $(".sectionthree .tab_list").eq(1).children(".sectionthree .box");
        divs.eq(i).children('.sectionthree .imgbtn').prepend("<img src='" + msg.documents[1].thumbnail + "'/>");
        divs.eq(i).append("<h4>" + msg.documents[1].title + "</h4>");
        divs.eq(i).append("<h6>" + msg.documents[1].authors + "</h6>");


       
    });
}

let steady = ["스테디", "경제", "자기개발","경제","한국사","수면","여행","음식"];

for (let i = 0; i < steady.length; i++) {

$.ajax({
    method:"GET" , 
    url: "https:dapi.kakao.com/v3/search/book?target=title",
    data: { query: steady[i] },
    headers:{Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332"}
   })
   
   .done(function (msg) {
    const divs = $(".sectionthree .tab_list").eq(2).children(".sectionthree .box");
    divs.eq(i).children('.sectionthree .imgbtn').prepend("<img src='" + msg.documents[2].thumbnail + "'/>");
    divs.eq(i).append("<h4>" + msg.documents[2].title + "</h4>");
    divs.eq(i).append("<h6>" + msg.documents[2].authors + "</h6>");

    // // let str = msg.documents[0].contents;
    // // let str2 = str.substring(0, 60);

    // divs.eq(i).append("<p>" + str2 + "..." + "</p>");
   
});
}

$.ajax({
    method:"GET" , 
    url: "https:dapi.kakao.com/v3/search/book?target=title",
    data:{query: "개그",},
    headers:{Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332"}
   })
   
   .done(function (msg) {
    console.log(msg)
    const divs = $(".sectionthree .tab_list").eq(3).children(".sectionthree .box");
    for (let i = 0; i < divs.length; i++) {
        divs.eq(i).children('.sectionthree .imgbtn').prepend("<img src='" + msg.documents[i].thumbnail + "'/>");
        divs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        divs.eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

       
    }
});

// ---------------------주간베스트------------------------
let best = ["역사", "기욤뮈소", "박완서", "경제", "한국사", "파리", "여행", "음식","자동차","스포츠"];

for (let i = 0; i < best.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: best[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })
        .done(function (msg) {
            const divs = $(".sectionfour .sld .sldimg");
            divs.eq(i).prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
                
        });
}

// section 5 정가 할인//
let count = ["자기계발"];

for (let i = 0; i < count.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: count[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })
        .done(function (msg) {
            const divs = $(".sectionfive .sldimg");
            divs.eq(i).children('.sectionfive .imgbtn').prepend("<img src='" + msg.documents[0].thumbnail + "'/>");

            let str = msg.documents[0].contents;
            let str2 = str.substring(0, 150);
            divs.eq(i).children('.sectionfive .content').prepend("<p>" + str2 + "..." + "</p>");       
            divs.eq(i).children('.sectionfive .content').prepend("<h6>" + msg.documents[0].authors + "</h6>");
            divs.eq(i).children('.sectionfive .content').prepend("<h4>" + msg.documents[0].title + "</h4>");    
        });
}

let count2 = ["역사", "기욤뮈소", "박완서", "경제", "한국사", "파리", "여행", "음식","자동차","스포츠"];

for (let i = 0; i < count2.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: count2[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })
        .done(function (msg) {
            const divs = $(".sldimg2");
            divs.eq(i).before("<img src='" + msg.documents[0].thumbnail + "'/>");
               
            let str = msg.documents[0].contents;
            let str2 = str.substring(0, 60);

            divs.eq(i).children('.content1').prepend("<p>" + str2 + "..." + "</p>");       
            divs.eq(i).children('.content1').prepend("<h6>" + msg.documents[0].authors + "</h6>");
            divs.eq(i).children('.content1').prepend("<h4>" + msg.documents[0].title + "</h4>");    
        });
}
 