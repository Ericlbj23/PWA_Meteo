function loadmeteo(ville) {
    var url2 = "https://www.prevision-meteo.ch/services/json/"+ville;

            $.ajax({
                url: url2,

                method: "GET",
                dataType: "json",

                success:function(monObjet2){


                    console.log(monObjet2);

                    $(".daycurrent img").attr("src", "img/"+monObjet2.current_condition.condition_key+".png");
                    $("h6").html(monObjet2.city_info.name+", "+monObjet2.city_info.country)
                    $(".info h5").html(monObjet2.current_condition.condition);
                    $(".info .date").html(monObjet2.current_condition.date);
                    $(".info .temperature").html(monObjet2.current_condition.tmp+"°C");

                    $(".day1 img").attr("src", "img/"+monObjet2.fcst_day_1.condition_key+".png");
                    $(".day1 h4").html(monObjet2.fcst_day_1.condition);
                    $(".day1 .date").html(monObjet2.fcst_day_1.day_long);
                    $(".day1 .temperature-max").html(monObjet2.fcst_day_1.tmax+"°C");
                    $(".day1 .temperature-min").html(monObjet2.fcst_day_1.tmin+"°C");

                    $(".day2 img").attr("src", "img/"+monObjet2.fcst_day_2.condition_key+".png");
                    $(".day2 h4").html(monObjet2.fcst_day_2.condition);
                    $(".day2 .date").html(monObjet2.fcst_day_2.day_long);
                    $(".day2 .temperature-max").html(monObjet2.fcst_day_2.tmax+"°C");
                    $(".day2 .temperature-min").html(monObjet2.fcst_day_2.tmin+"°C");

                    $(".day3 img").attr("src", "img/"+monObjet2.fcst_day_3.condition_key+".png");
                    $(".day3 h4").html(monObjet2.fcst_day_3.condition);
                    $(".day3 .date").html(monObjet2.fcst_day_3.day_long);
                    $(".day3 .temperature-max").html(monObjet2.fcst_day_3.tmax+"°C");
                    $(".day3 .temperature-min").html(monObjet2.fcst_day_3.tmin+"°C");

                    $(".day4 img").attr("src", "img/"+monObjet2.fcst_day_1.condition_key+".png");
                    $(".day4 h4").html(monObjet2.fcst_day_4.condition);
                    $(".day4 .date").html(monObjet2.fcst_day_4.day_long);
                    $(".day4 .temperature-max").html(monObjet2.fcst_day_4.tmax+"°C");
                    $(".day4 .temperature-min").html(monObjet2.fcst_day_4.tmin+"°C");

                } //success

            }); //ajax

} // function loadmeteo

navigator.geolocation.getCurrentPosition(function(position){




    // console.log(position);

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    // console.log("lat: "+lat+" Lng:"+lng);

    var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.aaaba1c9c4e8448c94c7938d170cab1c&format=json&lat="+lat+"&lon="+lng;

    $.ajax({
        url: url,

        method: "GET",
        dataType: "json",

        success:function(monObjet){

            var ville = monObjet.address.town

            console.log(ville);

            loadmeteo(ville);
        
        } //success
    }); //ajax

    $("#go").click(function(e){
        e.preventDefault();
        var ville = $("#ville").val();
        console.log(ville);
        loadmeteo(ville);
    
    
    }); //click


}); //geolocation



$("#refresh").click(function(e){
    e.preventDefault();

navigator.geolocation.getCurrentPosition(function(position){




    // console.log(position);

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    // console.log("lat: "+lat+" Lng:"+lng);

    var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.aaaba1c9c4e8448c94c7938d170cab1c&format=json&lat="+lat+"&lon="+lng;

    $.ajax({
        url: url,

        method: "GET",
        dataType: "json",

        success:function(monObjet){

            var ville = monObjet.address.town

            console.log(ville);

            loadmeteo(ville);
        
        } //success
    }); //ajax


}); //geolocation

	
$("#ville").val('');


}); //click