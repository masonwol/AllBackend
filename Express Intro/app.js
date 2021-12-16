const express = require("express");

const app = express();

let users = [{"id":1,"first_name":"Connor","last_name":"Tinton","email":"ctinton0@mysql.com","gender":"Non-binary"},
{"id":2,"first_name":"Jacobo","last_name":"Herity","email":"jherity1@state.tx.us","gender":"Bigender"},
{"id":3,"first_name":"Tann","last_name":"Varley","email":"tvarley2@acquirethisname.com","gender":"Female"},
{"id":4,"first_name":"Lilli","last_name":"Seeds","email":"lseeds3@deviantart.com","gender":"Male"},
{"id":5,"first_name":"Christos","last_name":"Matt","email":"cmatt4@friendfeed.com","gender":"Bigender"},
{"id":6,"first_name":"Hercule","last_name":"Guerry","email":"hguerry5@geocities.com","gender":"Genderfluid"},
{"id":7,"first_name":"Gusti","last_name":"O'Hagerty","email":"gohagerty6@telegraph.co.uk","gender":"Agender"},
{"id":8,"first_name":"Gavan","last_name":"Fried","email":"gfried7@taobao.com","gender":"Non-binary"},
{"id":9,"first_name":"Drugi","last_name":"Tschursch","email":"dtschursch8@moonfruit.com","gender":"Agender"},
{"id":10,"first_name":"Alyosha","last_name":"Willavize","email":"awillavize9@exblog.jp","gender":"Female"},
{"id":11,"first_name":"Colene","last_name":"Paskell","email":"cpaskella@ibm.com","gender":"Agender"},
{"id":12,"first_name":"Alix","last_name":"Jope","email":"ajopeb@mozilla.org","gender":"Genderqueer"},
{"id":13,"first_name":"Giorgi","last_name":"Goldsby","email":"ggoldsbyc@nsw.gov.au","gender":"Male"},
{"id":14,"first_name":"Carrie","last_name":"Esland","email":"ceslandd@constantcontact.com","gender":"Non-binary"},
{"id":15,"first_name":"Yelena","last_name":"Mair","email":"ymaire@vinaora.com","gender":"Genderqueer"},
{"id":16,"first_name":"Chico","last_name":"Mutlow","email":"cmutlowf@mysql.com","gender":"Bigender"},
{"id":17,"first_name":"Herrick","last_name":"Danels","email":"hdanelsg@cnbc.com","gender":"Genderqueer"},
{"id":18,"first_name":"Luce","last_name":"Lethcoe","email":"llethcoeh@dot.gov","gender":"Agender"},
{"id":19,"first_name":"Dido","last_name":"Bratch","email":"dbratchi@bloglines.com","gender":"Genderqueer"},
{"id":20,"first_name":"Bartram","last_name":"Scotchmor","email":"bscotchmorj@columbia.edu","gender":"Male"},
{"id":21,"first_name":"Sascha","last_name":"Barbie","email":"sbarbiek@baidu.com","gender":"Non-binary"},
{"id":22,"first_name":"Cal","last_name":"Schinetti","email":"cschinettil@psu.edu","gender":"Genderqueer"},
{"id":23,"first_name":"Padget","last_name":"Sorrill","email":"psorrillm@geocities.com","gender":"Polygender"},
{"id":24,"first_name":"Caprice","last_name":"Chaise","email":"cchaisen@oaic.gov.au","gender":"Agender"},
{"id":25,"first_name":"Durand","last_name":"Sivills","email":"dsivillso@independent.co.uk","gender":"Female"},
{"id":26,"first_name":"Tadd","last_name":"Mc Elory","email":"tmceloryp@shareasale.com","gender":"Male"},
{"id":27,"first_name":"Fraser","last_name":"Atkins","email":"fatkinsq@economist.com","gender":"Bigender"},
{"id":28,"first_name":"Maximilian","last_name":"Merigot","email":"mmerigotr@mozilla.org","gender":"Non-binary"},
{"id":29,"first_name":"Elane","last_name":"Legging","email":"eleggings@bravesites.com","gender":"Agender"},
{"id":30,"first_name":"Christin","last_name":"Immins","email":"cimminst@ox.ac.uk","gender":"Male"},
{"id":31,"first_name":"Stanfield","last_name":"Raeburn","email":"sraeburnu@sohu.com","gender":"Genderfluid"},
{"id":32,"first_name":"Jillian","last_name":"Guthrie","email":"jguthriev@smh.com.au","gender":"Polygender"},
{"id":33,"first_name":"Donovan","last_name":"Conduit","email":"dconduitw@bbb.org","gender":"Male"},
{"id":34,"first_name":"Shaughn","last_name":"Milborn","email":"smilbornx@netvibes.com","gender":"Polygender"},
{"id":35,"first_name":"Osborn","last_name":"Iglesia","email":"oiglesiay@hatena.ne.jp","gender":"Genderfluid"},
{"id":36,"first_name":"Jorey","last_name":"Matthews","email":"jmatthewsz@utexas.edu","gender":"Bigender"},
{"id":37,"first_name":"Rosemonde","last_name":"McGreil","email":"rmcgreil10@mysql.com","gender":"Male"},
{"id":38,"first_name":"Larisa","last_name":"Whotton","email":"lwhotton11@msu.edu","gender":"Genderfluid"},
{"id":39,"first_name":"Mycah","last_name":"Temple","email":"mtemple12@wp.com","gender":"Polygender"},
{"id":40,"first_name":"Clyde","last_name":"Cuttell","email":"ccuttell13@about.com","gender":"Non-binary"},
{"id":41,"first_name":"Codee","last_name":"Ivkovic","email":"civkovic14@gov.uk","gender":"Genderfluid"},
{"id":42,"first_name":"Velma","last_name":"Bench","email":"vbench15@wiley.com","gender":"Genderfluid"},
{"id":43,"first_name":"Rafi","last_name":"Kramer","email":"rkramer16@comsenz.com","gender":"Agender"},
{"id":44,"first_name":"Kathie","last_name":"Speedin","email":"kspeedin17@cnbc.com","gender":"Polygender"},
{"id":45,"first_name":"Regine","last_name":"Canet","email":"rcanet18@topsy.com","gender":"Genderfluid"},
{"id":46,"first_name":"Hendrik","last_name":"Kemshell","email":"hkemshell19@bandcamp.com","gender":"Male"},
{"id":47,"first_name":"Lilas","last_name":"Shoobridge","email":"lshoobridge1a@artisteer.com","gender":"Genderfluid"},
{"id":48,"first_name":"Rea","last_name":"O'Currane","email":"rocurrane1b@noaa.gov","gender":"Female"},
{"id":49,"first_name":"Maribeth","last_name":"Costelloe","email":"mcostelloe1c@google.es","gender":"Bigender"},
{"id":50,"first_name":"Arv","last_name":"De Cleen","email":"adecleen1d@bravesites.com","gender":"Non-binary"},
{"id":51,"first_name":"Mattheus","last_name":"Essex","email":"messex1e@cnet.com","gender":"Genderqueer"},
{"id":52,"first_name":"Rickie","last_name":"Sprigings","email":"rsprigings1f@liveinternet.ru","gender":"Bigender"},
{"id":53,"first_name":"Starr","last_name":"Wakes","email":"swakes1g@google.com.au","gender":"Genderfluid"},
{"id":54,"first_name":"Berkie","last_name":"Garwill","email":"bgarwill1h@go.com","gender":"Female"},
{"id":55,"first_name":"Magda","last_name":"Thirtle","email":"mthirtle1i@quantcast.com","gender":"Female"},
{"id":56,"first_name":"Elwira","last_name":"Southcombe","email":"esouthcombe1j@jigsy.com","gender":"Polygender"},
{"id":57,"first_name":"Cordy","last_name":"Daddow","email":"cdaddow1k@nhs.uk","gender":"Agender"},
{"id":58,"first_name":"Baillie","last_name":"Depke","email":"bdepke1l@unicef.org","gender":"Polygender"},
{"id":59,"first_name":"Giana","last_name":"Nassi","email":"gnassi1m@surveymonkey.com","gender":"Bigender"},
{"id":60,"first_name":"Stu","last_name":"Conneau","email":"sconneau1n@adobe.com","gender":"Polygender"},
{"id":61,"first_name":"Merlina","last_name":"Filipov","email":"mfilipov1o@craigslist.org","gender":"Genderfluid"},
{"id":62,"first_name":"Claudelle","last_name":"Kestian","email":"ckestian1p@barnesandnoble.com","gender":"Female"},
{"id":63,"first_name":"Clarie","last_name":"Milnthorpe","email":"cmilnthorpe1q@hibu.com","gender":"Bigender"},
{"id":64,"first_name":"Victoir","last_name":"Grosvenor","email":"vgrosvenor1r@dell.com","gender":"Genderfluid"},
{"id":65,"first_name":"Maxy","last_name":"Vasyunin","email":"mvasyunin1s@businesswire.com","gender":"Genderfluid"},
{"id":66,"first_name":"Jacki","last_name":"Hamberstone","email":"jhamberstone1t@huffingtonpost.com","gender":"Polygender"},
{"id":67,"first_name":"Gabrielle","last_name":"Zanicchi","email":"gzanicchi1u@booking.com","gender":"Female"},
{"id":68,"first_name":"Corry","last_name":"Cherry","email":"ccherry1v@pen.io","gender":"Male"},
{"id":69,"first_name":"Berri","last_name":"Filipovic","email":"bfilipovic1w@cmu.edu","gender":"Bigender"},
{"id":70,"first_name":"Johnath","last_name":"Gye","email":"jgye1x@prlog.org","gender":"Non-binary"},
{"id":71,"first_name":"Ange","last_name":"Sturney","email":"asturney1y@yahoo.co.jp","gender":"Agender"},
{"id":72,"first_name":"Giselbert","last_name":"Reinbeck","email":"greinbeck1z@about.com","gender":"Non-binary"},
{"id":73,"first_name":"Carleton","last_name":"Schole","email":"cschole20@upenn.edu","gender":"Agender"},
{"id":74,"first_name":"Yvonne","last_name":"Lawrenz","email":"ylawrenz21@vk.com","gender":"Agender"},
{"id":75,"first_name":"Daile","last_name":"Medler","email":"dmedler22@bing.com","gender":"Agender"},
{"id":76,"first_name":"Averell","last_name":"Patis","email":"apatis23@bandcamp.com","gender":"Genderfluid"},
{"id":77,"first_name":"Kathrine","last_name":"Gostage","email":"kgostage24@cnn.com","gender":"Polygender"},
{"id":78,"first_name":"Penny","last_name":"Melanaphy","email":"pmelanaphy25@shop-pro.jp","gender":"Bigender"},
{"id":79,"first_name":"Zachariah","last_name":"De Hooch","email":"zdehooch26@qq.com","gender":"Non-binary"},
{"id":80,"first_name":"Adrian","last_name":"Poon","email":"apoon27@google.ca","gender":"Male"},
{"id":81,"first_name":"Rosetta","last_name":"Lantry","email":"rlantry28@dropbox.com","gender":"Female"},
{"id":82,"first_name":"Jerry","last_name":"Salzburger","email":"jsalzburger29@mayoclinic.com","gender":"Female"},
{"id":83,"first_name":"Oneida","last_name":"O'Cullinane","email":"oocullinane2a@bandcamp.com","gender":"Genderqueer"},
{"id":84,"first_name":"Roberto","last_name":"Crutch","email":"rcrutch2b@chron.com","gender":"Agender"},
{"id":85,"first_name":"Haroun","last_name":"Mitchinson","email":"hmitchinson2c@un.org","gender":"Polygender"},
{"id":86,"first_name":"Bette-ann","last_name":"Mattessen","email":"bmattessen2d@myspace.com","gender":"Female"},
{"id":87,"first_name":"Patrica","last_name":"Quinet","email":"pquinet2e@japanpost.jp","gender":"Bigender"},
{"id":88,"first_name":"Ronna","last_name":"Kirvin","email":"rkirvin2f@posterous.com","gender":"Agender"},
{"id":89,"first_name":"Adriaens","last_name":"Want","email":"awant2g@zimbio.com","gender":"Genderqueer"},
{"id":90,"first_name":"Laverne","last_name":"Joseph","email":"ljoseph2h@huffingtonpost.com","gender":"Bigender"},
{"id":91,"first_name":"Kennith","last_name":"Bison","email":"kbison2i@simplemachines.org","gender":"Bigender"},
{"id":92,"first_name":"Roland","last_name":"Lacy","email":"rlacy2j@scribd.com","gender":"Polygender"},
{"id":93,"first_name":"Georgina","last_name":"Atte-Stone","email":"gattestone2k@smh.com.au","gender":"Male"},
{"id":94,"first_name":"Bertina","last_name":"Fullerd","email":"bfullerd2l@fastcompany.com","gender":"Male"},
{"id":95,"first_name":"Melita","last_name":"Poag","email":"mpoag2m@blogs.com","gender":"Polygender"},
{"id":96,"first_name":"Deny","last_name":"Chapleo","email":"dchapleo2n@ucoz.com","gender":"Non-binary"},
{"id":97,"first_name":"Amelina","last_name":"Hanham","email":"ahanham2o@trellian.com","gender":"Bigender"},
{"id":98,"first_name":"Yanaton","last_name":"Tunsley","email":"ytunsley2p@earthlink.net","gender":"Genderfluid"},
{"id":99,"first_name":"Jameson","last_name":"Angrave","email":"jangrave2q@godaddy.com","gender":"Non-binary"},
{"id":100,"first_name":"Court","last_name":"Slite","email":"cslite2r@cpanel.net","gender":"Genderfluid"}]

app.get("/", (req, res) => {
    return res.send("Welcome to Home page");
});

app.get("/users", (req, res) => {
    console.log();
    return res.send({users});
});

app.listen(2500, () => {
    console.log("Listening on port 2500");
});