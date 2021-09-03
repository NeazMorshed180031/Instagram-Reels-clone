
import './App.css';
import VideoCard  from './VideoCard';

function App({ url, likes, shares, channel, avatarSrc, song }) {
  return (
    <div className="app">
     <h1>Neaz</h1>
     <div className="app_top">
       <img 
       className="app__logo"
       src="https://www.theindianwire.com/wp-content/uploads/2020/10/76008bb9685d410d47fe1fa01dc54f15.jpg"
       alt='Logo'
       />
       <h1>Reels</h1>
        {/*image at top */}
        {/*Reels text */}
     </div>
     <div className="app__videos">
       {/*container of the app */}
       <VideoCard
        channel={'Fun'}
        song={'Lagdi Lahore Di '}
        avatarSrc={avatarSrc}
        url='https://r4---sn-npoeenez.googlevideo.com/videoplayback?expire=1630643096&ei=OE8xYZKMMvKIvdIP47iDgA8&ip=58.97.205.232&id=o-AB1DX65fEuTA5561fMTIjRBsf6CCmEc97pOOPqJ6ki9c&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=ry0_5bzhIYnQU2e472MxLuIG&gir=yes&clen=803182&ratebypass=yes&dur=15.061&lmt=1623687558943966&fexp=24001373,24007246&c=WEB&txp=6310224&n=aMw7UAIaYRekHSZ2&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOa-YQbeJkhlQm3O0estQTSQBUL-widco6l18HmrVhbdAiEAkqyX2fBaMIeHF9T_CoBA-u6NYAfyD2nFZ6DWdVLa3Us%3D&rm=sn-3pobuxjiovavbpxn-2oik7l,sn-v2xooxuj5hcvqp5-2ois7z,sn-npoly7z&req_id=438838900487a3ee&ipbypass=yes&redirect_counter=4&cm2rm=sn-qxay7z&cms_redirect=yes&mh=_C&mip=14.139.236.66&mm=34&mn=sn-npoeenez&ms=ltu&mt=1630621310&mv=u&mvi=4&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhANr3QFr2Qt2Io3YcFx97d92Qc4uy_I0dXQTxzNEIM1EBAiEAiuGVN0KKCxNqcs4zZWBJE766rO_jXayLPG5W4rtkBNY%3D'
        likes={50}
        shares={30}
       />
       <VideoCard
        channel={'Fun'}
        song={'Boker Vitor Ase Pran '}
        avatarSrc={avatarSrc}
        url='https://r2---sn-qxa7sn7z.googlevideo.com/videoplayback?expire=1630650180&ei=5GoxYbSMG8bC7gP1tZLICw&ip=212.102.53.71&id=o-AA78OLes2wnRYjqJDabONLk1fwLEjdePAyggOGfv4Huj&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=QAHIViAaiuzbBSTBKpeZ08gG&gir=yes&clen=930588&ratebypass=yes&dur=19.114&lmt=1625252966675627&fexp=24001373,24007246&c=WEB&txp=6310224&n=JqpVCvQ7e2ndTJAW&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALbG9yiVeTsCtDFFKAd3ReTA-qoevyJjspPT7sBZbW5-AiA1sYZZvRtHFLR7jqgHTN1T-ID8TBSm420zIyaUk0RLUw%3D%3D&rm=sn-aigesk7l&req_id=b06ff6d74925a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-o3o-qxal7l&cms_redirect=yes&mh=ax&mip=14.139.236.66&mm=29&mn=sn-qxa7sn7z&ms=rdu&mt=1630628448&mv=m&mvi=2&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgEQ1hQ0PVhi_eg04WP42ng2RVl5I1WZfDa1TlciS9QxMCIFTfzjev1nm2qQDgUSxVL4xJVbUfIkALdKmqMy_vpvTb'
        likes={55}
        shares={30}
       />
       <VideoCard
        channel={'Fun'}
        song={'Mawla Ya salli '}
        avatarSrc={avatarSrc}
        url='https://r1---sn-npoe7nl6.googlevideo.com/videoplayback?expire=1630650290&ei=UmsxYbvQKoOCvdIP7Iy9sA4&ip=103.119.144.108&id=o-AGRq4rLBkIj_lrbBwvyBuUKYpwZHSACS5qBr11EulqVC&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=ztrIW7JIQuc26jeSf0xBnesG&gir=yes&clen=512294&ratebypass=yes&dur=14.698&lmt=1541323527762701&fexp=24001373,24007246&c=WEB&txp=2201222&n=Z2a3H6l5D5ywf1Gk&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKIXvnc52GBSwQg-mPaZ4Xo4pkAw-jOJ7Cjm42gVMd-mAiEA5qJ_rABYfSHn9YlepAUly0b_kThWofbgmjgUn_q8ZIM%3D&rm=sn-c5apuvfxgpq-jb3l7e,sn-npoz67e&req_id=15c6ba386929a3ee&ipbypass=yes&redirect_counter=3&cm2rm=sn-qxaes7z&cms_redirect=yes&mh=ZO&mip=14.139.236.66&mm=34&mn=sn-npoe7nl6&ms=ltu&mt=1630628680&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgM94A2BemAcMGMiyRqwPECRTSpoACIy3tnnLex6BQ4p8CIAzjz3JPlTJ4zc7_qqxahb6uEGL1BxzfDmVBR8P1K9NN'
        likes={55}
        shares={30}
       />
     
       
     </div>
    </div>
  );
}

export default App;
