import React,{useState,useEffect,useContext} from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import CollectionItem from '../Snippets/CollectionItem';
import moment from 'moment';
//import firebase from "../../firebase";
import { DataContext } from '../../Context/DataContext';

const TopCollectionsSelles = (props) => {

  const {getApiDataNftFull,setApiDataNftFull}=useContext(DataContext)
  console.log("getApiFullSellers",getApiDataNftFull)        
  const {getApiDataNftFull2,setApiDataNftFull2}=useContext(DataContext)
  console.log("getApiFullSellers2",getApiDataNftFull2)        
  const {getApiDataNftFull22,setApiDataNftFull22}=useContext(DataContext)
  console.log("getApiFullSellers3",getApiDataNftFull22)        
  
  
    // console.log("topsc",props.follow)
    const dateOptions = ["1", "7", "30"];
    const directionOptions = ["SELLERS", "BUYERS"];
    const [date, setDate] = useState(dateOptions[0]);
    const [direction, setDirection] = useState(directionOptions[0]);
    //console.log("ses",direction);
    //console.log("sesd",date);
    //const[getIb,setgetIb]=useState([]);
    //console.log("getImgalbuy",getIb)
    //const[getImb,setgetImb]=useState([]);
    //console.log("getImgalgosssbuy",getImb)
    //options={direction} onChange={(e) => setDirection(e.target.value)} value={direction}
    const handleSelect=(e)=>{
        //console.log(e);
        setDirection(e)
      }
    const handleSelect2=(e)=>{
        //console.log(e);
        setDate(e)
    }
    //buyers
  // const dbcallalgobuy=async()=>{    
  //   let req = [];
  //   firebase.database().ref("imagerefbuy").on("value", (data) => {      
  //     if (data) {
  //       data.forEach((d) => {          
  //         const a=d.val();
  //           Object.keys(a).map(async(b)=>{                  
  //                     req.push({
  //                       Assetid:a[b].Assetid,
  //                       Imageurl:a[b].Imageurl,
  //                       NFTPrice:a[b].NFTPrice,
  //                       EscrowAddress:a[b].EscrowAddress,
  //                       keyId:a[b].keyId,
  //                       NFTName:a[b].NFTName,
  //                       userSymbol:a[b].userSymbol,
  //                       Ipfsurl:a[b].Ipfsurl,
  //                       ownerAddress:a[b].ownerAddress,
  //                       previousoaddress:a[b].previousoaddress,
  //                       TimeStamp:a[b].TimeStamp,
  //                       NFTDescription:a[b].NFTDescription,
  //                       HistoryAddress:a[b].HistoryAddress,
  //                       Appid:a[b].Appid,
  //                       valid:a[b].valid,
  //                       CreatorAddress:a[b].CreatorAddress  
  //                   })                    
  //           })            
  //       });        
  //       setgetIb(req)              
  //     }    
  //     //setgetImb(req)
  //   });
  // }  
  // useEffect(()=>{dbcallalgobuy()},[])

  //seller  
  // const dbcallalgosale=async()=>{   
  //   let reqsale = [];
  //   firebase.database().ref("imagerefexploreoneAlgos").on("value", (data) => {      
  //     if (data) {
  //       data.forEach((d) => {          
  //         const a=d.val();
  //           Object.keys(a).map(async(b)=>{                    
  //                     reqsale.push({
  //                       Assetid:a[b].Assetid,
  //                       Imageurl:a[b].Imageurl,
  //                       NFTPrice:a[b].NFTPrice,
  //                       EscrowAddress:a[b].EscrowAddress,
  //                       keyId:a[b].keyId,
  //                       NFTName:a[b].NFTName,
  //                       userSymbol:a[b].userSymbol,
  //                       Ipfsurl:a[b].Ipfsurl,
  //                       ownerAddress:a[b].ownerAddress,
  //                       previousoaddress:a[b].previousoaddress,
  //                       TimeStamp:a[b].TimeStamp,
  //                       NFTDescription:a[b].NFTDescription,
  //                       HistoryAddress:a[b].HistoryAddress,
  //                       Appid:a[b].Appid,
  //                       valid:a[b].valid,
  //                       CreatorAddress:a[b].CreatorAddress   
  //                   })                    
  //           })            
  //       });        
  //       setgetImb(reqsale) 
  //     }          
  //   });
  // }
  // useEffect(()=>{dbcallalgosale()},[])
//   const filterdata=()=>{        
//         if(direction === 'Sellers') {            
//           if(date === '1' && (getApiDataNftFull2 !== null || getApiDataNftFull2 !== "" || getApiDataNftFull2 !== undefined))
//           {              
//               //console.log("one")              
//               let data = getApiDataNftFull2.filter((val)=>{                  
//                 if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
//                 }else {                    
//                     // console.log("datainside",val)
//                     let currentdate=moment().format('YYYY.MM.DD')
//                     //let currentdate = moment(val.url);
//                     //console.log("currentdate",currentdate)
//                     let createddate=val.creationTime.substr(0,10)
//                     //console.log("createddate",createddate)
//                     return currentdate === createddate                                         
//             }              
//             })
//               //console.log("R1",data)
//               return data;              
//           }    
//           else if((getApiDataNftFull2 !== null || getApiDataNftFull2 !== "" || getApiDataNftFull2 !== undefined)) {
//             let data = getApiDataNftFull2.filter((val)=>{
//                 if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
//                 }else{                    
//                 //console.log("sellers7get",val)
//                 //console.log("sellers7",val.TimeStamp)
//                 //console.log("sellers two",moment().subtract(parseInt(date),"days").format('ddd MMM DD YYYY'))
//                 let currentdate=moment().subtract(1,"days").format('YYYY.MM.DD')
//                 //console.log("curr7",currentdate)
//                 let weekdate=moment().subtract(parseInt(date),"days").format('YYYY.MM.DD')
//                 //console.log("curr8",weekdate)                              
//                 //return moment(val.TimeStamp).isBetween(weekdate,currentdate)
//                 let dateTimeFormat = val.creationTime.substr(0,10)
//                 return (dateTimeFormat >= weekdate && dateTimeFormat <= currentdate);
//                 //console.log("PP",moment(val.TimeStamp).isBetween(weekdate, currentdate))
//                 //return moment(val.TimeStamp).isBetween(weekdate, currentdate)                                    
//                 }
//               })
//               return data;    
//           }              
//             //console.log("R7",data)                       
//         }
//         else
//         {
//             if(date === '1' && (getApiDataNftFull22 !== null || getApiDataNftFull22 !== "" || getApiDataNftFull22 !== undefined))
//             {
//                   let data = getApiDataNftFull22.filter((val)=>{
//                     if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
//                     }else{                        
                        
//                   let currentdate=moment().format('YYYY.MM.DD')
//                   //let currentdate = moment(val.url);
//                   //console.log("currentdate",currentdate)
//                   let createddate=val.creationTime.substr(0,10)
//                   return currentdate===createddate                         
//                     }
//               })
//                   //console.log("B1",data)
//                   return data;
//             }
//             else if(getApiDataNftFull2 !== null || getApiDataNftFull2 !== "" || getApiDataNftFull2 !== undefined){
//                 let data = getApiDataNftFull22.filter((val)=>{
//                     if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
//                     }else{
                        
//                     //console.log("Buyers7get",val)
//                     //console.log("Buyers7",val.TimeStamp)
//                     let currentdates=moment().subtract(1,"days").format('YYYY.MM.DD')              
//                     let weekdates=moment().subtract(parseInt(date),"days").format('YYYY.MM.DD')
//                     let createddate=val.creationTime.substr(0,10);                    
//                     return (createddate >= weekdates && createddate <= currentdates);                                                        
//                     }
//                   })
//                     //console.log("B7",data)
//                     return data;            
//             }                    
//         }
        
//     }
//   useEffect(()=>{filterdata()},[])

const filterdata=()=>{        
            if(direction === 'Sellers') {            
              if(date === '1')
              {              
                  //console.log("one")              
                  let data = getApiDataNftFull2.filter((val)=>{                  
                    if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
                    }else {                    
                        // console.log("datainside",val)
                        let currentdate=moment().format('YYYY.MM.DD')
                        //let currentdate = moment(val.url);
                        //console.log("currentdate",currentdate)
                        let createddate=val.creationTime.substr(0,10)
                        //console.log("createddate",createddate)
                        return currentdate === createddate                                         
                }              
                })
                  //console.log("R1",data)
                  return data;              
              }    
              else {
                let data = getApiDataNftFull2.filter((val)=>{
                    if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
                    }else{                    
                    //console.log("sellers7get",val)
                    //console.log("sellers7",val.TimeStamp)
                    //console.log("sellers two",moment().subtract(parseInt(date),"days").format('ddd MMM DD YYYY'))
                    let currentdate=moment().subtract(1,"days").format('YYYY.MM.DD')
                    //console.log("curr7",currentdate)
                    let weekdate=moment().subtract(parseInt(date),"days").format('YYYY.MM.DD')
                    //console.log("curr8",weekdate)                              
                    //return moment(val.TimeStamp).isBetween(weekdate,currentdate)
                    let dateTimeFormat = val.creationTime.substr(0,10)
                    return (dateTimeFormat >= weekdate && dateTimeFormat <= currentdate);
                    //console.log("PP",moment(val.TimeStamp).isBetween(weekdate, currentdate))
                    //return moment(val.TimeStamp).isBetween(weekdate, currentdate)                                    
                    }
                  })
                  return data;    
              }              
                //console.log("R7",data)                       
            }
            else
            {
                if(date === '1')
                {
                      let data = getApiDataNftFull.filter((val)=>{
                        if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
                        }else{                        
                            
                      let currentdate=moment().format('YYYY.MM.DD')
                      //let currentdate = moment(val.url);
                      //console.log("currentdate",currentdate)
                      let createddate=val.creationTime.substr(0,10)
                      return currentdate===createddate                         
                        }
                  })
                      //console.log("B1",data)
                      return data;
                }
                else{
                    let data = getApiDataNftFull.filter((val)=>{
                        if(val.creationTime === "" || val.creationTime === undefined || val.creationTime === null){
                        }else{
                            
                        //console.log("Buyers7get",val)
                        //console.log("Buyers7",val.TimeStamp)
                        let currentdates=moment().subtract(1,"days").format('YYYY.MM.DD')              
                        let weekdates=moment().subtract(parseInt(date),"days").format('YYYY.MM.DD')
                        let createddate=val.creationTime.substr(0,10);                    
                        return (createddate >= weekdates && createddate <= currentdates);                                                        
                        }
                      })
                        //console.log("B7",data)
                        return data;            
                }                    
            }
            
        }
      useEffect(()=>{filterdata()},[])

    return (

        <div className='mb-36'>
            <div className="mb-32 d-flex align-items-center">
                <div className='h2 d-flex align-items-center'>
                    TOP
                    &nbsp;
                    {direction}
                    <DropdownButton onSelect={handleSelect}>                                                
                            <Dropdown.Item eventKey="Sellers" variant="reset" className='dropdown-btn-grad'>SELLERS                         
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Buyers" variant="reset" className='dropdown-btn-grad'>BUYERS
                            </Dropdown.Item>                        
                    </DropdownButton>
                     IN
                     &nbsp;
                     {date} DAY
                    <DropdownButton onSelect={handleSelect2}>                        
                            <Dropdown.Item eventKey="1" variant="reset" className='dropdown-btn-grad'>1 day                                 
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="7" variant="reset" className='dropdown-btn-grad'>7 days</Dropdown.Item>
                            <Dropdown.Item eventKey="30" variant="reset" className='dropdown-btn-grad'>30 days</Dropdown.Item>                        
                    </DropdownButton>
                </div>
            </div>

            <div className="">
              <ul className='collection-list list-unstyled flex-wrap m-0 d-flex align-items-start'>
            {filterdata().map((x, index) => (                      
                <li className='mb-3'>
                {/* <Card verify={true} img={x.Imageurl} title={x.NFTName} count="401" subTitle={`<span>Highest bid</span> <span>${x.NFTPrice/1000000}</span>`} linkText="0.221 WETH" dataall={x}/> */}
                        <CollectionItem Imageurl={x.nftImageAsString} verify={true} count={index + 1} title={x.nftName} amount={x.nftPrice} appid={x.appId} assetid={x.assetId} escrowaddress={x.esrowAddress} historyaddress={x.nftHistoryAddresses} imageurl={x.nftImageAsString} ipfsurl={x.ipfsHexUrl} nftdescription={x.nftDescription} TimeStamp={x.creationTime} keyId={""} ownerAddress={x.ownerAddress} previousaddress={x.previousOwner} userSymbol={x.nftSymbol} dataall={x} Assetid={x.assetId}/>   
                {/* follow={props.follow} */}
                </li>
            ))}
            </ul>                
                {/* <ul className='collection-list list-unstyled m-0 d-flex align-items-start'>
                    <li>
                        <CollectionItem verify={true} count={1} title="adidas Originals: Into the Metaverse" amount="$34,845,758" />
                        <CollectionItem verify={true} count={2} title="CloneX" amount="$7,418,707" />
                        <CollectionItem verify={true} count={3} title="My Pet Hooligan" amount="$3,333,156" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={4} title="Terraforms" amount="$2,846,949" />
                        <CollectionItem verify={true} count={5} title="BoredApeYachtClub" amount="$2,225,029" />
                        <CollectionItem verify={true} count={6} title="Nanopass" amount="$2,097,475" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={7} title="Town Star" amount="$1,972,028" />
                        <CollectionItem verify={true} count={8} title="MutantApeYachtClub" amount="$1,951,451" />
                        <CollectionItem verify={true} count={9} title="Party Bears" amount="$1,890,233" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={10} title="Sandbox's LANDs" amount="$1,777,924" />
                        <CollectionItem verify={true} count={11} title="RTFKT - CloneX Mintvial" amount="$1,321,900" />
                        <CollectionItem verify={true} count={12} title="Shiba Social Club" amount="$1,281,425" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={13} title="Art Blocks Factory" amount="$1,105,860" />
                        <CollectionItem verify={true} count={14} title="Doodles" amount="$1,024,316" />
                        <CollectionItem verify={true} count={15} title="DEGENERATE/REGENERATE" amount="$945,556" />
                    </li>
                </ul> */}
            </div>

            <Link to="/" className='btn d-block mt-4 d-sm-none ms-auto btn-white'>Sign in</Link>
        </div>
    );
};

export default TopCollectionsSelles;