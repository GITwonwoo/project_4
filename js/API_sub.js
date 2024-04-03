// ----------메인 책정보
let book = ["아침30분 독서"];

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
            $('.RedSale').append(msg.documents[0].price);

        });
}

// -----------------함께 구매한 상품-------------------
let together = ["이류", "리더의조건", "이재용", "성공", "경영", "파리", "여행", "음식", "자동차", "스포츠"];

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

//메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
$(function () {
    $.get("./sub_text/product.txt", function (data) {
        console.log(data)
        $(".productText").html(data);
    })
    $.get("./sub_text/review.txt", function (data) {
        console.log(data)
        $(".reviewText").html(data);
    })
    $.get("./sub_text/publisher.txt", function (data) {
        console.log(data)
        $(".publisherText").html(data);
    })

    $.get("./sub_text/authors.txt", function (data) {
        console.log(data)
        $(".authorsText").html(data);
    })


});

// ---------------사이드 메뉴------------------
let side = ["카네기", "대화의 정석", "역행자", "책읽기", "마케팅", "파리", "여행", "음식", "자동차", "스포츠"];

for (let i = 0; i < side.length; i++) {

    $.ajax({
        method: "GET",
        url: "https:dapi.kakao.com/v3/search/book?target=title",
        data: { query: side[i] },
        headers: { Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332" }
    })
        .done(function (msg) {
            const divs = $(".popmenuIMG");
        
            divs.eq(i).prepend("<img src='" + msg.documents[0].thumbnail + "'/>");

            divs.eq(i).find(".h5h6flex").append("<h5>" + msg.documents[0].title + "</h5>");
            divs.eq(i).find(".h5h6flex").append("<h6>" + msg.documents[0].authors + "</h6>");
            divs.eq(i).find(".h5h6flex").append("<h6>" + msg.documents[0].price+ "원"+"</h6>");


        });
}



