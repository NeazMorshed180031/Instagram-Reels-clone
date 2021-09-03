
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
        url='https://firebasestorage.googleapis.com/v0/b/tiktok-f2ade.appspot.com/o/Lagdi%20Lahore%20di%20Guru%20Randhawa%20%2C%20Tulsi%20Kumar%20Street%20Dancer%203D%20Tiktok%20New%20Viral%20Videos%202021%20Fyp.mp4?alt=media&token=fafc8af5-e545-46cb-9a48-4e016284e8ca'
        likes={50}
        shares={30}
       />
       <VideoCard
        channel={'Fun'}
        song={'Nadiyon Paar '}
        avatarSrc={avatarSrc}
        url='https://firebasestorage.googleapis.com/v0/b/tiktok-f2ade.appspot.com/o/Aashika%20bhatia%20Nadiyon%20Paar%20%E2%99%A5%EF%B8%8F%20Video%20%F0%9F%98%8D%40Tiktok%20insta%20reels%20star.webm?alt=media&token=0329fe55-8ccc-4fdc-a0ed-0d447881500a'
        likes={55}
        shares={30}
       />
       <VideoCard
        channel={'Fun'}
        song={'Kabhi Tumhe '}
        avatarSrc={avatarSrc}
        url='https://firebasestorage.googleapis.com/v0/b/tiktok-f2ade.appspot.com/o/kabhi%20tumhe%20yaad%20%23anjaliarora%20%23anjaliaroratiktokvideo%20%23anjaliaroratiktok%20%23youtubeshorts%20%23shortsvideo.webm?alt=media&token=f1f98154-1c21-4b0a-9357-2de6eca1a015'
        likes={55}
        shares={30}
       />
     
       
     </div>
    </div>
  );
}

export default App;
