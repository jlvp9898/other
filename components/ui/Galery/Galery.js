import React, { useEffect, useState, useMemo} from "react";
import Image from "next/image";
import { Local, Global } from "./style";
import api from ".../../../api/api";



const Galery = () => {

  
  const [insta, setInsta] = useState(api.jsonApiInstagram);
  useMemo(async () => {
  
    fetch("https://graph.instagram.com/me/media?fields=media_url,caption,media_type,thumbnail_url&access_token=IGQVJVZA2Ytbzh6VVdaQzVmUWU0M01PRDliUmxwVVhObXpOLWhLd3Bsb2l5NW9mbzVSTUlqME9GRVh2Y3FRcGtVODNKdUNxNHpzcnRsX09tY3lTV1BsVmV4ckdKY3NpTWVpV29EZAHhOVktwR1BHdTVjcwZDZD", { method: 'GET'})
    .then(response => response.json())
    .then(data => setInsta(data));


  }, []);


  if(!insta.data){
    return "";
  }
  
  return (
    <>
      <style jsx>{Local}</style>
      <style jsx>{Global}</style>
      <div className="galeria-ppal">
        <div className="items item-1">
          <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
          <Image
            src={insta.data[0].media_type == "VIDEO" ? insta.data[0].thumbnail_url : insta.data[0].media_url}
            alt="img1"
            width={1940}
            height={1940}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
        <div className="items arrow-right item-2">
        <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
        <Image
            src={insta.data[1].media_type == "VIDEO" ? insta.data[1].thumbnail_url : insta.data[1].media_url}
            alt="img5"
            width={970}
            height={970}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
        <div className="items item-3">
        <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
          <Image
            src={insta.data[2].media_type == "VIDEO" ? insta.data[2].thumbnail_url : insta.data[2].media_url}
            alt="img2"
            width={970}
            height={970}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
        <div className="items item-4">
        <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
          <Image
            src={insta.data[3].media_type == "VIDEO" ? insta.data[3].thumbnail_url : insta.data[3].media_url}
            alt="img3"
            width={970}
            height={970}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
        <div className="items arrow-left item-5">
        <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
         <Image
            src={insta.data[4].media_type == "VIDEO" ? insta.data[4].thumbnail_url : insta.data[4].media_url}
            alt="img5"
            width={970}
            height={970}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
        <div className="items item-6">
        <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
          <Image
            src={insta.data[5].media_type == "VIDEO" ? insta.data[5].thumbnail_url : insta.data[5].media_url}
            alt="img4"
            width={970}
            height={970}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
        <div className="items arrow-left item-7">
        <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
          <Image
            src={insta.data[6].media_type == "VIDEO" ? insta.data[6].thumbnail_url : insta.data[6].media_url}
            alt="img5"
            width={970}
            height={970}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
        <div className="items item-8">
        <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
          <Image
            src={insta.data[7].media_type == "VIDEO" ? insta.data[7].thumbnail_url : insta.data[7].media_url}
            alt="img5"
            width={970}
            height={970}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
        <div className="items arrow-right item-9">
        <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
          <Image
            src={insta.data[8].media_type == "VIDEO" ? insta.data[8].thumbnail_url : insta.data[8].media_url}
            alt="img5"
            width={970}
            height={970}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
        <div className="items item-10">
        <a href="https://www.instagram.com/200gramos/" className="margin-link" target="_blank">
          <Image
            src={insta.data[9].media_type == "VIDEO" ? insta.data[9].thumbnail_url : insta.data[9].media_url}
            alt="img5"
            width={1940}
            height={1940}
            className="img-galeria wow fadeIn"
          />
          </a>
        </div>
      </div>
    </>
  );
};

export default Galery;
