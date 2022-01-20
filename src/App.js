import React,{useEffect,useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/HomePage';
import Login from './components/Connect';
import ExplorePage from './components/ExplorePage';
import HowItWorks from './components/HowItWorks';
import Information from './components/Information';
import Profile from './components/Profile';
import FollowingPage from './components/FollowingPage';
import ActivityPage from './components/ActivityPage';
import SingleBid from './components/SingleBid';
import SingleBid2 from './components/SingleBid2';
import About from './components/About';
import Rari from './components/Rari';
import Start from './components/Create/Start';
import Type from './components/Create/Type';
import Single from './components/Create/Single';
import ProfileViewOther from "./components/ProfileViewOther";
import ProfileViewOtherCopy from "./components/ProfileViewOtherCopy";
import SingleLiveauction from "./components/SingleLiveauction";
import Edit from "./components/Create/edit";
import {Movie} from './Movie'
import Validornotcheck from "./Validornotcheck";
import {DataContext} from './Context/DataContext'
import firebase from './firebase';
const axios = require('axios');


function App() {

    const[getIPro2,setgetIPro2]=useState([""]);
    console.log("getIProprofile",getIPro2[0].valid)   
    const[getIProapp,setgetIProapp]=useState([""]);
    console.log("getIProapp",getIProapp) 
    const[getI,setgetI]=useState([""]); 
    const[getIexplore,setgetIexplore]=useState([]);  
    console.log("App1",getI)
    console.log("App2",getIexplore)
    const dbcallsaleal=async(index)=>{                
    axios({
        method: 'get',
        url: 'https://demonft-2e778-default-rtdb.firebaseio.com/imagerefAlgo.json',
        responseType: 'stream'
      })
        .then(function (response) {
        let req = [];        
        req.push(response.data)
        let req2 =[];
        req.forEach((l) => {              
          console.log("Dd",l)              
          Object.keys(l).map(async(k)=>{                                        
            const a=l[k];
            Object.keys(a).map(async(b)=>{                    
            req2.push({                      
              Assetid:a[b].Assetid,
              Imageurl:a[b].Imageurl,
              NFTPrice:a[b].NFTPrice,
              EscrowAddress:a[b].EscrowAddress,
              keyId:a[b].keyId,
              NFTName:a[b].NFTName,
              userSymbol:a[b].userSymbol,
              Ipfsurl:a[b].Ipfsurl,
              ownerAddress:a[b].ownerAddress,
              previousoaddress:a[b].previousoaddress,
              TimeStamp:a[b].TimeStamp,
              NFTDescription:a[b].NFTDescription,
              HistoryAddress:a[b].HistoryAddress,
              Appid:a[b].Appid  
              })   
            })                                                                                                                
          })                                                                     
        });                        
        setgetI(req2)  
        });            
}
useEffect(()=>{dbcallsaleal()},[])

const dbcallsalealexplore=async(index)=>{        
      axios({
        method: 'get',
        url: 'https://demonft-2e778-default-rtdb.firebaseio.com/imagerefexploreoneAlgos.json',
        responseType: 'stream'
      })
        .then(function (response) {
        let req = [];        
        req.push(response.data)
        let req2 =[];
        req.forEach((l) => {              
          console.log("D",l)              
          Object.keys(l).map(async(k)=>{                                        
            const a=l[k];
            Object.keys(a).map(async(b)=>{                    
            req2.push({                      
              Assetid:a[b].Assetid,
              Imageurl:a[b].Imageurl,
              NFTPrice:a[b].NFTPrice,
              EscrowAddress:a[b].EscrowAddress,
              keyId:a[b].keyId,
              NFTName:a[b].NFTName,
              userSymbol:a[b].userSymbol,
              Ipfsurl:a[b].Ipfsurl,
              ownerAddress:a[b].ownerAddress,
              previousoaddress:a[b].previousoaddress,
              TimeStamp:a[b].TimeStamp,
              NFTDescription:a[b].NFTDescription,
              HistoryAddress:a[b].HistoryAddress,
              Appid:a[b].Appid  
              })   
            })                                                                                                                
          })                                                                     
        });                        
        setgetIexplore(req2)  
        });                    
  } 
useEffect(()=>{dbcallsalealexplore()},[])

const dbcallPro=async()=>{            
  let r=[];
  try {         
  firebase.database().ref("userprofile").on("value", (data) => {          
    if (data) {             
      let a=data.val()                   
      Object.keys(a).map(async(k)=>{                                    
        console.log("proff",a[k])
        r.push({
          Bio:a[k].Bio,
          Customurl: a[k].Customurl,
          Email: a[k].Email,
          Imageurl:a[k].Imageurl,
          Personalsiteurl: a[k].Personalsiteurl,
          TimeStamp: a[k].TimeStamp,
          Twittername: a[k].Twittername,
          UserName: a[k].UserName,
          WalletAddress: a[k].WalletAddress,
          bgurl:a[k].bgurl,
          valid:a[k].valid
        })                
      })            
    }
    else{
      setgetIProapp([""]);  
    }
    setgetIProapp(r);
  });                  
} catch (error) {
  console.log('error occured during search', error);    
}                
}    
useEffect(()=>{dbcallPro()},[])


    
    const dbcallPro2=async()=>{            
        let r=[];
        try {         
        firebase.database().ref("userprofile").child(localStorage.getItem('wallet')).on("value", (data) => {          
          if (data) {                      
              r.push({
                Bio:data.val().Bio,
                Customurl: data.val().Customurl,
                Email: data.val().Email,
                Imageurl:data.val().Imageurl,
                Personalsiteurl: data.val().Personalsiteurl,
                TimeStamp: data.val().TimeStamp,
                Twittername: data.val().Twittername,
                UserName: data.val().UserName,
                WalletAddress: data.val().WalletAddress,
                bgurl:data.val().bgurl,
                valid:data.val().valid
              })                
          }
          else{
            setgetIPro2([""]);  
          }
          setgetIPro2(r);
        });                  
      } catch (error) {
        console.log('error occured during search', error);    
      }                
      }    
    useEffect(()=>{dbcallPro2()},[])

  return (
    
    <DataContext.Provider value={{getI,setgetI,getIexplore,setgetIexplore,getIProapp,setgetIProapp,getIPro2,setgetIPro2}}>      
    <Router>
      <Switch>          
        <Route path="/connect">
          <Login />
        </Route>
        <Route path="/explore">
          <ExplorePage />
        </Route>
        <Route path="/how-it-works">
          <HowItWorks />
        </Route>
        <Route path="/information">
          <Information />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/settings">
          <Edit />
        </Route>
        <Route path="/following">
          <FollowingPage />
        </Route>
        <Route path="/activity">
          <ActivityPage />
        </Route>
        <Route path="/liveauction">
          <SingleLiveauction />
        </Route>
        <Route path="/bid">
          <SingleBid />
        </Route>
        <Route path="/bid-2">
          <SingleBid2 />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/rari">
          <Rari />
        </Route>
        <Route path="/create/start">
          <Start />
        </Route>
        <Route path="/create/type">
          <Type />
        </Route>
        <Route path="/create/single">
          <Single />
        </Route>        
        <Route path="/profileviewother">
          <ProfileViewOther />
        </Route>
        <Route path="/profileviewothercopy">
          <ProfileViewOtherCopy />
        </Route>
        <Route path="/validornotvalid">
          <Validornotcheck />
        </Route>        
        <Route path="/">
          <Home />
        </Route>        
      </Switch>
    </Router>
    </DataContext.Provider>     

  );
}

export default App;
