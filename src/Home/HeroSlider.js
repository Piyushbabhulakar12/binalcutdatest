import React from 'react';
import video1 from "../Assets/Video/bg_video.mp4";
import video2 from "../Assets/Video/Motohom  TEASER 1.mp4";


function HeroSlider() {
    return (
      <div>
         
         <div className="container-fluid mt-1">
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" data-bs-interval="300">
   
    <div className="carousel-inner">
      <div className="carousel-item active">
        <video src={video1} width="100%" height="1000" autoPlay={"autoplay"} muted loop className="video_fit" />
      </div>
      <div className="carousel-item">
        <video src={video2} width="100%" height="1000" autoPlay={"autoplay"} muted loop className="video_fit" />
      </div>
      <div className="carousel-item">
        <video src="https://rr2---sn-cvhelnls.c.drive.google.com/videoplayback?expire=1699177530&ei=CjpHZb3WNrvLp84Pn_iE0AI&ip=103.120.248.192&id=771337e00a0eb3ac&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=v_&mm=32&mn=sn-cvhelnls&ms=su&mv=m&mvi=2&pl=24&ttl=transient&susc=dr&driveid=1MFGxjS0y4rpbr5GlcKhBnSHWZtdOCZVT&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=226.208&lmt=1642460701451020&mt=1699166199&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRQIgHKcLnhtRwFF_N5RMi6wvEZqmbmeE0r6rfnUgVn598kQCIQCOTGK68uSRLvzp_A07ejoqdckzDkBwXeIzFojYZYDtgA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRAIgKZbOy5OI6Dh9YjbGB01C3VFWboiW5o97jpxLPynePFsCID3ClfhEy6ArTBei7FFVxdwiVxARgp2jewZRHy3iXZ3m&cpn=eE3P0J6NefBcMAps&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="1000" autoPlay={"autoplay"} muted loop className="video_fit" />
      </div>
      <div className="carousel-item">
        <video src="https://rr2---sn-cvh76nld.c.drive.google.com/videoplayback?expire=1699177673&ei=mTpHZcjII9XFp84P1Oqc4AE&ip=103.120.248.192&id=f8f115ca1373e502&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=4m&mm=32&mn=sn-cvh76nld&ms=su&mv=m&mvi=2&pl=24&ttl=transient&susc=dr&driveid=1lvfF5Fo5h4bKhNoCftmuR8TIXUhEoo_D&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=279.545&lmt=1697970317093355&mt=1699166199&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRQIgFmYXUeuRxxDYJG5PN856kqaJJa1u0CgRSzLZz4DK0pYCIQDAIcFXFuwb4dPWVPQwRZ3zkjG9yt4dKNo937XCpcSL7g==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRgIhAKO4_zvhoV5f-qOCxVrZ5Xo4EQuUjjSzMIj92QuijUgfAiEAqXWdbnrYiaUY7HPp-H447cQMeFcrwlAEJvA6PAABr4A=&cpn=NFfymE5KuvnEUG0U&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="1000" autoPlay={"autoplay"} muted loop className="video_fit" />
      </div>
      <div className="carousel-item">
        <video src="https://rr5---sn-cvh76nlz.c.drive.google.com/videoplayback?expire=1699177100&ei=XDhHZY-pCMnLp84PhKWfkAs&ip=103.120.248.192&id=99a17811e49b8d1b&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=Xx&mm=32&mn=sn-cvh76nlz&ms=su&mv=m&mvi=5&pl=24&ttl=transient&susc=dr&driveid=1GM7pk1HLqPcf46VSsMRzkAo2QJmohPQM&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=61.277&lmt=1691477333436787&mt=1699165963&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRgIhAJezkG4C03Rva9fpDfUgmVOszJ4tLpDSY1Ri9XYVDiaOAiEAyqy0DqRIGknGFJwYPPpxdZuUBId3tFYyl9xDciGTtl0=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRgIhAN7-Gym9cQaA4FIY5e_rYFnJwdaH16E0B7xyUEvBbAFIAiEAxJFtfSpOj_Zb4-vN0nGAhuCT2cFEW4MiVUSGoSkvuqQ=&cpn=K3pxS6cFo_q3U82h&c=WEB_EMBEDDED_PLAYER&cver=1.20231031.01.00" width="100%" height="1000" autoPlay={"autoplay"} muted loop className="video_fit" />
      </div>
    </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>  
</div>


       
      </div>
    );
  }
  
  export default HeroSlider;
