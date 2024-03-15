// ---------------------- MD추천도서------------------------
let choice = ["박경리", "기욤뮈소", "박완서", "경제", "한국사", "파리", "여행", "음식"];

for (let i = 0; i < choice.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: choice[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })
        .done(function (msg) {
            const divs = $(".tab_list").eq(0).children('.box');
            divs.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            divs.eq(i).append("<h4>" + msg.documents[0].title + "</h4>");
            divs.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");

            let str = msg.documents[0].contents;
            let str2 = str.substring(0, 60);

            divs.eq(i).append("<p>" + str2 + "..." + "</p>");
            divs.eq(i).append("<button>" + "click" + "</button>");
        });
}
// ---------------------- 화제의신간------------------------
let newbook = ["박경리", "기욤뮈소", "박완서", "경제", "한국사", "파리", "여행", "음식"];

for (let i = 0; i < newbook.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: newbook[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })

        .done(function (msg) {
            const divs = $(".tab_list").eq(1).children('.box');
            divs.eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            divs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            divs.eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

            let str = msg.documents[i].contents;
            let str2 = str.substring(0, 60);

            divs.eq(i).append("<p>" + str2 + "..." + "</p>");
            divs.eq(i).append("<button>" + "click" + "</button>");
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

    const divs = $(".tab_list").eq(2).children('.box');

        divs.eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
        divs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        divs.eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

        let str = msg.documents[i].contents;
        let str2 = str.substring(0, 60);

        divs.eq(i).append("<p>" + str2 + "..."+"</p>");
        divs.eq(i).append("<button>" + "click" + "</button>");
    });
}

$.ajax({
    method:"GET" , 
    url: "https:dapi.kakao.com/v3/search/book?target=title",
    data:{query: "만화"},
    headers:{Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332"}
   })
   
   .done(function (msg) {
    const divs = $(".tab_list").eq(3).children('.box');
    for (let i = 0; i < divs.length; i++) {
        divs.eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
        divs.eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
        divs.eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

        let str = msg.documents[i].contents;
        let str2 = str.substring(0, 60);

        divs.eq(i).append("<p>" + str2 +"..."+ "</p>");
        divs.eq(i).append("<button>" + "click" + "</button>");
    }
});