// ----------메인 책정보
let book = ["일류의 조건"];

for (let i = 0; i < book.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: book[0] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })
        .done(function (msg) {
            console.log(msg)
            // const divs = $(".book");
            $('.book').prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
              
            $('.title').append("<h3>" + msg.documents[0].title + "</h3>");
            $('.authors').append(msg.documents[0].authors + "");
            $('.publisher').append(msg.documents[0].publisher);
            $('.isbn').append(msg.documents[0].isbn);
            
 
        });
}

// -----------------함께 구매한 상품-------------------
let together = ["역사", "기욤뮈소", "박완서", "경제", "한국사", "파리", "여행", "음식","자동차","스포츠"];

for (let i = 0; i < together.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: together[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })
        .done(function (msg) {
            const divs = $(".sld .sldimg");
            divs.eq(i).prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
              
            divs.eq(i).append("<h5>" + msg.documents[0].title + "</h5>");
            divs.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");
 
        });
}


