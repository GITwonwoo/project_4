$.ajax({
    method:"GET" , 
    url: "https:dapi.kakao.com/v3/search/book?target=title",
    data:{query: "Harry Potter"},
    headers:{Authorization: "KakaoAK 7fd50bb6d443accb5e07119127aae332"}
   })
   
   .done(function (msg) {

    // for문 (8개)
                    const divs = $('.box');

                    for (let i = 0; i < divs.length; i++) {

                        $(".box").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                        $(".box").eq(i).append("<h3>" + msg.documents[i].title + "</h3>");
                        $(".box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


                        let str = msg.documents[i].contents;
                        let str2 = str.substring(0, 60);

                        $(".box").eq(i).append("<p>" + str2 + "</p>");
                        $(".box").eq(i).append("<button>" + "click" + "</button>");

                    }
                    
                });