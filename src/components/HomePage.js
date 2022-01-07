import React,{ useState,useEffect } from 'react';
import Layout from './Layout';
import {Container} from 'react-bootstrap';
import TopCollections from './Sections/TopCollections';
import TopCollectionsSellers from './Sections/TopCollectionsSellers';
import HotBids from './Sections/HotBids';
import LiveAuctions from './Sections/LiveAuctions';
import HotCollections from './Sections/HotCollections';
import Explore from './Sections/Explore';
import Banner from './Sections/Banner';
const axios = require('axios');


function HomePage() {
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    // const[getI,setgetI]=useState([""]); 
    // console.log("gethome",getI)        

    // const dbcallsaleal=async(index)=>{        
    //     if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === '' || localStorage.getItem("wallet") === "0x"){
    //     }
    //     else{                        
    //       axios({
    //         method: 'get',
    //         url: 'https://demonft-2e778-default-rtdb.firebaseio.com/followers.json',
    //         responseType: 'stream'
    //       })
    //         .then(function (response) {
    //         let req = [];        
    //         req.push(response.data)
    //         let req2 =[];
    //         req.forEach((a) => {              
    //           console.log("Ddhome",a) 
    //           Object.keys(a).map(async(b)=>{      
    //             const abc=a[b];
    //             console.log("Dadhome",abc) 
    //             req2.push({                      
    //                 TimeStamp:a[b].TimeStamp,
    //                 follower:a[b].follower,
    //                 following:a[b].following,
    //                 walletAddress:a[b].walletAddress,                  
    //               })   
    //           })                                                                     
    //         });                        
    //         setgetI(req2)  
    //         });                    
    //   } 
    // }
    // useEffect(()=>{dbcallsaleal()},[])

    return (
        <Layout>
            <Container fluid="lg">
                <Banner />
                <TopCollections />
                <HotBids />
                <TopCollectionsSellers />
                {/* follow={getI} */}
                <LiveAuctions />
                <HotCollections />
                <Explore />
            </Container>
        </Layout>
    );
}

export default HomePage;