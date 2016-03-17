
var a = 0, b = 1,c = 2,d = 3;

          var display_notification = '{"notification":[' +
'{"compny":"Amazon","desc":"50% off on all electronics.","cat":"Electronics","code":"FLAT50","priority":"4","pic":"images/logo_notification/amazon.png" },' +
'{"compny":"Flipkart","desc":"10% off on all Clothes.","cat":"Clothing","code":"10FLAT","priority":"3","pic":"images/logo_notification/flipkart.png" },' +
'{"compny":"Foodpanda","desc":"5% Cashback on all Recharge upto Rs.50.","cat":"food","code":"RE5","priority":"4","pic":"images/logo_notification/foodpanda.png" },' +
          '{"compny":"Myntra","desc":"5% Cashback on all Recharge upto Rs.50.","cat":"Clothing","code":"RE5","priority":"4","pic":"images/logo_notification/myntra.png" },' +
'{"compny":"Levis","desc":"50% Discount.","cat":"Clothing","code":"RE5","priority":"4","pic":"images/logo_notification/levis.png" },' +
'{"compny":"Wrangler","desc":"25% Discount.","cat":"Clothing","code":"RE5","priority":"4" ,"pic":"images/logo_notification/wrangler.png"},' +
'{"compny":"Lotto","desc":"10% off on all type of shoes.","cat":"Clothing","code":"RE5","priority":"4","pic":"images/logo_notification/lotto.png" },' +
'{"compny":"puma","desc":"Mega loot sale.","cat":"Clothing","code":"RE5","priority":"4" ,"pic":"images/logo_notification/puma.png"}]}';

         function notif() {
                   obj1 = JSON.parse(display_notification);
              document.getElementById("comp_a").innerHTML =
              obj1.notification[a].compny;
              document.getElementById("desc_a").innerHTML =
obj1.notification[a].desc;
            var image1 = document.getElementById('Image1');
            image1.src = obj1.notification[a].pic;


              document.getElementById("comp_b").innerHTML =
              obj1.notification[b].compny;
              document.getElementById("desc_b").innerHTML =
obj1.notification[b].desc;

var image2 = document.getElementById('Image2');
    image2.src = obj1.notification[b].pic;

              document.getElementById("comp_c").innerHTML =
              obj1.notification[c].compny;
              document.getElementById("desc_c").innerHTML =
obj1.notification[c].desc;
var image3 = document.getElementById('Image3');
    image3.src = obj1.notification[c].pic;

              document.getElementById("comp_d").innerHTML =
              obj1.notification[d].compny;
              document.getElementById("desc_d").innerHTML =
obj1.notification[d].desc;
var image4 = document.getElementById('Image4');
    image4.src = obj1.notification[d].pic;
               }
          
function more_notification(){
a=a+4;
b=b+4;
c=c+4;
d=d+4;
notif();
}
function less_notification()
{
a=a-4;
b=b-4;
c=c-4;
d=d-4;
notif();
}