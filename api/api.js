import React, {useState} from "react";
const head = () => {

    return (
        { 'Content-Type': 'application/json', 'X-MBX-APIKEY': '6ETIUIL29WAXXHYO'}
      );
 };


const urlApi = (data) => {
    return (
        "https://gorros.net/200gramos/api?"+data
      );
      
  };

  const urlBackPanel = () => {
    return (
        "https://gorros.net/200gramos/"
      );
      
  };

  const jsonApiHome = () => {
            return (
                {"title_page":"",
                "url_page":"",
                "time_update":"",
                "slider":{
                    "title":"",
                    "subtitle":"",
                    "btn1_title":"",
                    "btn1_url":"",
                    "btn2_title":"",
                    "btn2_url":"",
                    "img":"static/img/fondos/img2.png",
                    "video":"https://www.youtube.com/embed/Ho_HEXgHgtM"
                },
                "seccion_one":{
                    "title":"",
                    "description":""
                },
                "seccion_second":{
                    "title":"",
                    "url":"",
                    "description":""
                },
                "banners":{
                    "banner_one":
                    {"img":""},
                    "banner_second":{
                        "header":"",
                        "content":"",
                        "footer":"",
                        "img":""},
                        "banner_third":{
                            "header":"",
                            "content":"",
                            "footer":"",
                            "img":""
                        },
                    "banner_fourth":{
                        "header":"",
                        "content":"",
                        "footer":"",
                        "img":""
                    },
                    "banner_fifth":{
                        "header":"",
                        "content":"",
                        "footer":"",
                        "img":""
                    },
                    "banner_sixth":{"img":""}},
                    "seccion_third":{
                        "title":"",
                            "description":"",
                            "title_service":"",
                            "content":"",
                            "url":"",
                            "logo_1":"",
                            "logo_2":"","logo_3":""
                        },
                        "seccion_fourth":{
                            "title":"",
                            "email":"",
                            "title_btn":""
                        }
                    }
            );
   };

   const jsonApiLocale = () => {
    return (
        {
            "title_page": "",
            "url_page": "",
            "time_update": "",
            "slider": {
                "title": "",
                "subtitle": "",
                "img": ""
            },
            "seccion_one": {
                "banner_one": {
                    "header": "",
                    "content": "",
                    "url": "",
                    "img": ""
                },
                "banner_second": {
                    "header": "",
                    "content": "",
                    "url": "",
                    "img": ""
                },
                "banner_third": {
                    "header": "",
                    "content": "",
                    "url": "",
                    "img": ""
                },
                "banner_fourth": {
                    "header": "",
                    "content": "",
                    "url": "",
                    "img": ""
                }
            },
            "seccion_second": {
                "title": "",
                "url": "",
                "description": ""
            },
            "banners": {
                "banner_one": {
                    "img": ""
                },
                "banner_second": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_third": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fourth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fifth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_sixth": {
                    "img": ""
                }
            }
        }
    );
};

const jsonApiContact = () => {
    return (
        {
            "title_page": "",
            "url_page": "",
            "time_update": "",
            "slider": {
                "title": "",
                "subtitle": "",
                "img": ""
            },
            "seccion_one": {
                "banner_one": {
                    "header": "",
                    "content": "",
                    "url": "",
                    "img": ""
                },
                "banner_second": {
                    "header": "",
                    "content": "",
                    "url": "",
                    "img": ""
                },
                "banner_third": {
                    "header": "",
                    "content": "",
                    "url": "",
                    "img": ""
                },
                "banner_fourth": {
                    "header": "",
                    "content": "",
                    "url": "",
                    "img": ""
                }
            },
            "seccion_second": {
                "title": "",
                "url": "",
                "description": ""
            },
            "banners": {
                "banner_one": {
                    "img": ""
                },
                "banner_second": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_third": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fourth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fifth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_sixth": {
                    "img": ""
                }
            }
        }
    );
};

const jsonApiLegalWarning= () => {
    return (
        {
            "title_page": "",
            "url_page": "",
            "time_update": "",
            "slider": {
                "title": "",
                "subtitle": "",
                "img": ""
            },
            "seccion_one": "",
            "seccion_second": {
                "title": "",
                "url": "",
                "description": ""
            },
            "banners": {
                "banner_one": {
                    "img": ""
                },
                "banner_second": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_third": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fourth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fifth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_sixth": {
                    "img": ""
                }
            }
        }
    );
};

const jsonApiTerms= () => {
    return (
        {
            "title_page": "",
            "url_page": "",
            "time_update": "",
            "slider": {
                "title": "",
                "subtitle": "",
                "img": ""
            },
            "seccion_one": "",
            "seccion_second": {
                "title": "",
                "url": "",
                "description": ""
            },
            "banners": {
                "banner_one": {
                    "img": ""
                },
                "banner_second": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_third": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fourth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fifth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_sixth": {
                    "img": ""
                }
            }
        }
    );
};

const jsonApiCookies= () => {
    return (
        {
            "title_page": "",
            "url_page": "",
            "time_update": "",
            "slider": {
                "title": "",
                "subtitle": "",
                "img": ""
            },
            "seccion_one": "",
            "seccion_second": {
                "title": "",
                "url": "",
                "description": ""
            },
            "banners": {
                "banner_one": {
                    "img": ""
                },
                "banner_second": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_third": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fourth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_fifth": {
                    "header": "",
                    "content": "",
                    "footer": "",
                    "img": ""
                },
                "banner_sixth": {
                    "img": ""
                }
            }
        }
    );
};


const jsonMenus= () => {
    return (
        {
            "title_page": "",
            "url_page": "",
            "description": "",
            "time_update": "",
            "slider": {
                "title": "",
                "subtitle": "",
                "img": null
            },
            "seccion_one": {
                "title": []
            }
        }
    );
};

const jsonApiRedes= () => {
    return (
        {
            "facebook": "",
            "twitter": "",
            "instagram": "",
            "whatsapp": "",
            "reserva": "",
            "time_update": ""
        }
    );
};

const jsonApiInstagram= () => {
    return (
        {
            "data": [
               {
                  "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                  "caption": "",
                  "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               },
               {
                "media_url": "https://scontent-mia3-1.cdninstagram.com/",
                "caption": "",
                "id": ""
               }
            ],
            "paging": {
               "cursors": {
                  "before": "",
                  "after": ""
               },
               "next": ""
            }
         }
    );
};
export default {head , urlApi, jsonApiHome, jsonApiLocale, jsonApiContact, jsonApiLegalWarning, jsonApiTerms, jsonApiCookies, urlBackPanel, jsonApiRedes, jsonMenus, jsonApiInstagram};



 
