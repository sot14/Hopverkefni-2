
export default class Lecture {
  constructor() {
    this.container = document.querySelector('.lecture');
    this.url = 'lectures.json';
  }
}

fetchLecture() {
    fetch(this.url)
        .then((res) => {
            if(!res.ok) {
                throw new Error('Villa við að sækja fyrirlestur');
            }
            return res.json();
        })
        .catch((error) => {
        console.error('Villa við að sækja gögn', error);
        });
}

loadLecture() {
    const lData = fetchLecture();

}

displayHeader() {

}

displayFooter() {

}

showYoutube() {

}

showQuote() {

}

showImage() {

}

showHeading() {

}

showList() {

}

showCode() {

}



displayLecture() {
    const header = document.querySelector('lecture-header');
    const main = document.querySelector('lecture-main');
    const footer = document.querySelector('lecture-footer');

    const types = [
        'youtube',
        'text',
        'quote',
        'image',
        'heading',
        'list',
        'code',
      ];


}

/*"lectures": [
    {
      "slug": "html-sagan",
      "title": "Sagan",
      "category": "html",
      "image": "img/code.jpg",
      "thumbnail": "img/thumb1.jpg",
      "content": [
        {
          "type": "youtube",
          "data": "https://www.youtube.com/embed/-dC37AYntUQ"
        },
        {
          "type": "text",
          "data": "Frá örófi alda höfum við sagt hvort öðru sögur. Í fyrstu geymdar í minni einstaklinga, seinna skrifaðar á skinn eða pappír, síðan prentaðar með prentvél Gutenbergs og núna fjölfaldaðar í prentsmiðjum.\nPrentaður texti er í eðli sínu fastur. Við höfum blaðsíður í ákveðinni stærð sem textinn er prentaður á og eftir það eru engar breytingar mögulegar. En hvað ef svo væri ekki?\nÁrið 1941 gaf Jorge Luis Borges út smásöguna „The Garden of Forking Paths” sem segir frá höfundi sem ætlar að skrifa stóra og flókna bók ásamt því að búa til stórt og flókið völundarhús. Síðar kemur í ljós að bókin og völundarhúsið er sami hluturinn en sagan lýsir heim þar sem allar mögulegar niðurstöður atburða eiga sér stað samtímis. Þessi smásaga er talin kynna fyrst hugmyndina um HyperText.\nVið lok seinna stríðs skrifaði Vennevar Bush greinina „As We May Think“ í Atlantic Monthly þar sem hann lýsir Memex. Memex er tæki sem leyfir einstakling að halda utan um sitt eigið safn af upplýsingum. Það leyfir flokkun, athugasemdir og tengingar við annað efni svo hægt sé að fletta upp og leita ásamt því að deila með öðrum á einfaldan hátt. Sannkallað töfratæki sem Bush gerði ráð fyrir að myndi gjörbreyta heiminum."
        },
        {
          "type": "quote",
          "data": "The future is already here — it's just not very evenly distributed.",
          "attribute": "William Gibson"
        },
        {
          "type": "text",
          "data": "Í kringum 1990 var Sir Tim Berners-Lee að vinna hjá CERN sem eðlisfræðingur. Hann skrifaði minnisblað um kerfi sem hann sá fyrir sér að myndi auka möguleika á samvinnu með því að deila skjölum á einfaldan hátt. Í framhaldinu skilgreindi hann HTML, t.d. í skjalinu „HTML Tags“ og skrifaði fyrsta vafrann og vefþjóninn sem túlkuðu og birtu HTML (skrifaður í Objective-C á NeXT tölvu). Fyrsta vefsíðan var síðan aðgengileg 23. ágúst 1991, og er enn aðgengileg á sömu slóð í dag."
        },
        {
          "type": "image",
          "data": "img/server.jpg",
          "caption": "NeXT tölvan sem Tim Berners-Lee notaði til að skrifa fyrsta vefþjóninn og vafrann. Á tölvu er skrifað „This machine is a server DO NOT POWER DOWN!!“"
        },
        {
          "type": "heading",
          "data": "Markup Language"
        },
        {
          "type": "list",
          "data": [
            "Lightweight – Einföld setningarfræði sem eykur læsileiki fyrir fólk",
            "Presentational – WYSIWYG ritlar, markup falið fyrir notanda, t.d. Word",
            "Procedural – markup innifalið í texta sem leiðbeiningar um aðgerðir á textann, t.d. LaTeX",
            "Descriptive – markup gefur texta merkingu sem er óháður birtingu þess, t.d. HTML"
          ]
        },
        {
          "type": "code",
          "data": "### Markdown fyrirsögn\n\nTexti sem inniheldur **feitletraðan** og\n_skáletraðan_ texta\nmeð [tengli](http://example.org).\n\n* Listi\n* af\n* orðum"
        },
        {
          "type": "heading",
          "data": "HTML5"
        },
        {
          "type": "text",
          "data": "Eftir áhugaleysi W3C á því að þróa HTML áfam og mikinn fókus á XHTML og XML tengda tækni tóku nokkrir aðilar sig saman og stofnuðu WHATWG (Web Hypertext Application Technology Working Group) árið 2004, með það að markmiði að vinna áfram að HTML og eðlilegri framþróun vefsins. Þessi vinna fór fram undir nafninu HTML5 þar sem hver sem er gat lagt til breytingar á HTML í gegnum póstlista en takmarkaður hópur ritstjóra stýrði því hvað fór inn í staðal.\nTveimur árum seinna, árið 2006, sá W3C að sér og hélt áfram þróun HTML sem HTML 5. En þar sem hver heilvita maður sér að þróun á tveim aðskildum stöðlum (HTML5 og HTML 5) á sama tíma virkar ekki, þá voru þeir blessunarlega sameinaðir í einn HTML5 staðal árið 2007. W3C hætti þróun á XHTML 2.0 árið 2009 og farið var að öllu að þróa HTML5 sem framtíð HTML.\nÁrið 2012 tók W3C „snapshot“ af staðlinum eins og hann leit út hjá WHATWG og fór í þá vinnu að gera staðalinn að W3C staðli. WHATWG hætti hinsvegar að tala sérstaklega um HTML5 og vinnur nú að framþróun HTML í lifandi staðli sem mun aldrei klárast og heldur áfram að þróast án þess að hlutir séu fjarlægðir\nHTML5 byggir hvorki á SGML né XML en er samhæft fyrri útgáfum (backwards compatible) af HTML. Stefnan er að auka samvirkni (interoperability) og aðgengi að vefnum. Til að vera að fullu samhæft fyrri útgáfum þarf HTML5 að skilgreina DocType:"
        },
        {
          "type": "code",
          "data": "<!doctype html>"
        },
        {
          "type": "heading",
          "data": "Minnsta HTML skjalið"
        },
        {
          "type": "code",
          "data": "<!doctype html>\n<html lang=\"is\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Halló heimur</title>\n  </head>\n  <body>\n    <p>Halló heimur</p>\n  </body>\n</html>"
        }
      ]
    }, */