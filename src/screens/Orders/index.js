// import React, { useEffect, useState } from "react";
// import { Text, View,Image, TouchableOpacity } from "react-native";
// import style from "./style";
// import CustomSearch from "../../components/Customsearch";
// import { useDimensionContext } from "../../context";
// import { FlatList } from "react-native-gesture-handler";
// import { useIsFocused, useNavigation } from "@react-navigation/native";
// import Commonheaderleft from "../../components/Commonheaderleft";
// import firestore from "@react-native-firebase/firestore";
// import { useSelector } from "react-redux";
// import Commonheaderright from "../../components/Commonheaderright";
// const Orders=() =>{
//     const dimension=useDimensionContext();
//     const navigation=useNavigation();
//     const userId = useSelector((state) => state.userId);
//     const [orderarray,setOrderarray] = useState([]);
//     const responsivestyle=style(
//         dimension.windowWidth,
//         dimension.windowHeight,
//         );
//     const isfocussed = useIsFocused();
//     useEffect(()=>{
//         if(isfocussed){
//             getorders();
//         }
//     },[isfocussed]);
// useEffect(() => {
    
//     navigation.setOptions({
//     headerLeft: () => <Commonheaderleft />,  
//    // headerRight : () => <Commonheaderright cart={true} />      
//               });
//        },[] );
// const getorders = async() => {
//     await firestore()
//     .collection('orders')
//     .where ('userId', '==' , userId)
//     .get()
//     .then(snapshot => {
//         if(snapshot.empty) {
//         setOrderarray([]);
//         }
//         else{
//         const objarray =[];
//         snapshot?.docs.forEach(document => {
//         if(document.exists){
//         const result = {id: document.id, ...document?.data()};
//        // console.warn('Firestore Data:', result);
//         objarray.push(result);
//             }
//          });
//         setOrderarray(objarray);
//         }
//          });
//             };  
//  const handlesearch = async text => {
//     await firestore()
//     .collection('orders')
//     .where("userId", "==", userId)
//     .orderBy("orderId")
//     .startAt(String(text))
//     .endAt(String(text) + "\uf8ff")
//     .get()
//     .then((snapshot) => {
//       if (snapshot.empty) {
//         setOrderarray([]);
//       } else {
//         const objArray = [];
//         snapshot?.docs.forEach((document) => {
//           if (document.exists) {
//             const result = { id: document.id, ...document?.data() };
//             objArray.push(result);
//           }
//         });
//         setOrderarray(objArray);
//       }
//     });
// };

// const navigateToDetails = (item) => {
//   navigation.navigate("Orderdetails", { item: item });
// };
 

// /*const orderarray = [
//     {
//         id:'0',
//         orderid: '#fsd123',
//         orderdate:'11/2/2023,4:00 pm',
//         address1:'1888 Elis st, san fransisco, CA',
//         address2:'94115,USA',
//         price:'879',
//         quantity:'3'},
//     {
//         id:'1',
//         orderid: '#fsd123',
//         orderdate:'5/2/2023,4:00 pm',
//         address1:'1888 Elis st, san fransisco, CA',
//         address2:'94115,USA',
//         price:'909',
//         quantity:'5'},
//     {
//         id:'2',
//         orderid: '#kli123',
//         orderdate:'08/2/2023,4:00 pm',
//         address1:'1888 Elis st, san fransisco, CA',
//         address2:'94115,USA',
//         price:'789',
//         quantity:'2'},
//     {
//         id:'3',
//         orderid: '#fsd123',
//         orderdate:'11/2/2023,4:00 pm',
//         address1:'1888 Elis st, san fransisco, CA',
//         address2:'94115,USA',
//         price:'879',
//         quantity:'2'},
//     {
//         id:'4',
//         orderid: '#fsd123',
//         orderdate:'11/2/2023,4:00 pm',
//         address1:'1888 Elis st, san fransisco, CA',
//         address2:'94115,USA',
//         price:'879',
//         quantity:'3'},
//      ]; */

// return (
// <View style={responsivestyle.container}> 
// <CustomSearch filter={true} 
//        placeholder={'search using order id'} 
//        mike = {false}
//        onChangeText ={handlesearch}
//        />
// <FlatList 
//     data={orderarray}
//     extraData={orderarray}
//     showsverticalScrollIndicator={false}
//     ListEmptyComponent={()=>{
//         return (
//     <View style={{
//         padding:15,
//         justifyContent:'center',
//         alignItems:'center'
//     }}>
//         <Text style={{
//             fontSize:18,
//             color:'green'
//         }}>No data</Text>
//     </View>
//         )
//     }}
//     contentContainerStyle={{paddingBottom:20}}
//     renderItem={({item}) => {
// return (
// <TouchableOpacity onPress={()=>navigateToDetails(item)}
//    style={responsivestyle.flatview}>
//    <View style={responsivestyle.innerview}>
//    <View>
//    <Text style={responsivestyle.orderid}>ID:{item.orderId}</Text>   
//    <Text style={responsivestyle.orderdate}>Ordered on:{item.created}</Text> 
//    <Text style={responsivestyle.address}>{item.address1}</Text>
//    <Text style={responsivestyle.address}>{item.address2}</Text>
//    <Text style={responsivestyle.paidtext}>paid:{''}
//    <Text style={responsivestyle.greentext}>{item.price} </Text>
//    ,Items:{''}
//    <Text style={responsivestyle.greentext}>{item.quantity}</Text>
//    </Text>
//    </View>
//    <Image source={require('../../assets/images/map.png')} style={responsivestyle.mapimage}/>
//    </View>
//    <View style={responsivestyle.bottomview}>
//    <Text style={responsivestyle.bottomtext}>Order shipped</Text>
//    <Text style={responsivestyle.bottomtext}>Rate and Review products</Text>
//    </View> 
//    </TouchableOpacity>
//     );
//       }}  
//     keyExtractor={(item,index) =>String(index)}/>
//     </View>   
//     );
//    };
//    export default Orders;

import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useDimensionContext } from "../../context";
import style from "./style";
import Customsearch from "../../components/Customsearch";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import colors from "../../components/common/colors";
import Commonheaderleft from "../../components/Commonheaderleft";
import { useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";

const Orders = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight
  );
  const navigation = useNavigation();
  const [ordersArray, setOrdersArray] = useState([]);
  const userId = useSelector((state) => state.userId);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getOrders();
    }
  }, [isFocused]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Commonheaderleft />,
    });
  }, []);

  const getOrders = async () => {
    try {
      await firestore()
        .collection("orders")
        .where("userId", "==", userId)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            setOrdersArray([]);
          } else {
            const objArray = [];
            snapshot?.docs.forEach((document) => {
              if (document.exists) {
                const result = { id: document.id, ...document?.data() };
                objArray.push(result);
              }
            });
            setOrdersArray(objArray);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async (text) => {
    await firestore()
      .collection("orders")
      .where("userId", "==", userId)
      .orderBy("orderId")
      .startAt(String(text))
      .endAt(String(text) + "\uf8ff")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setOrdersArray([]);
        } else {
          const objArray = [];
          snapshot?.docs.forEach((document) => {
            if (document.exists) {
              const result = { id: document.id, ...document?.data() };
              objArray.push(result);
            }
          });
          setOrdersArray(objArray);
        }
      });
  };

  const navigateToDetails = (item) => {
    navigation.navigate("Orderdetails", { item: item });
  };

  // const ordersArray = [
  //   {
  //     id: "0",
  //     orderId: "#ADSW2343",
  //     orderDate: "11/12/2022 , 4: 05 PM",
  //     address1: "1800 Elis St, San fransisco . CA",
  //     address2: "993321, USA",
  //     price: "894",
  //     quantity: "3",
  //   },
  //   {
  //     id: "1",
  //     orderId: "#ADSW2345",
  //     orderDate: "11/12/2022 , 4: 05 PM",
  //     address1: "1800 Elis St, San fransisco . CA",
  //     address2: "993321, USA",
  //     price: "894",
  //     quantity: "3",
  //   },
  //   {
  //     id: "2",
  //     orderId: "#ADSW2347",
  //     orderDate: "11/12/2022 , 4: 05 PM",
  //     address1: "1800 Elis St, San fransisco . CA",
  //     address2: "993321, USA",
  //     price: "894",
  //     quantity: "3",
  //   },
  //   {
  //     id: "3",
  //     orderId: "#ADSW2349",
  //     orderDate: "11/12/2022 , 4: 05 PM",
  //     address1: "1800 Elis St, San fransisco . CA",
  //     address2: "993321, USA",
  //     price: "894",
  //     quantity: "3",
  //   },
  //   {
  //     id: "4",
  //     orderId: "#ADSW2351",
  //     orderDate: "11/12/2022 , 4: 05 PM",
  //     address1: "1800 Elis St, San fransisco . CA",
  //     address2: "993321, USA",
  //     price: "894",
  //     quantity: "3",
  //   },
  //   {
  //     id: "5",
  //     orderId: "#ADSW2353",
  //     orderDate: "11/12/2022 , 4: 05 PM",
  //     address1: "1800 Elis St, San fransisco . CA",
  //     address2: "993321, USA",
  //     price: "894",
  //     quantity: "3",
  //   },
  //   {
  //     id: "6",
  //     orderId: "#ADSW2355",
  //     orderDate: "11/12/2022 , 4: 05 PM",
  //     address1: "1800 Elis St, San fransisco . CA",
  //     address2: "993321, USA",
  //     price: "894",
  //     quantity: "3",
  //   },
  // ];

  return (
    <View style={responsiveStyle.container}>
      <Customsearch
        filter={true}
        placeholder={"Search using order id"}
        mike={false}
        onChangeText={handleSearch}
      />

      <FlatList
        data={ordersArray}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScFrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.primaryGreen,
                }}
              >
                No data
              </Text>
            </View>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => navigateToDetails(item)}
              style={responsiveStyle.flatView}
            >
              <View style={responsiveStyle.innerView}>
                <View>
                  <Text style={responsiveStyle.orderId}>{item.orderId}</Text>
                  <Text style={responsiveStyle.orderDate}>
                    Ordered on: {item.created}
                  </Text>
                  <Text style={responsiveStyle.address}>{item.address1}</Text>
                  <Text style={responsiveStyle.address}>{item.address2}</Text>
                  <Text style={responsiveStyle.address}>
                    Paid:{" "}
                    <Text style={responsiveStyle.price}>{item.price}</Text>,
                    Item:{" "}
                    <Text style={responsiveStyle.price}>{item.quantity}</Text>
                  </Text>
                </View>
                <Image
                  source={require("../../assets/images/map.png")}
                  style={responsiveStyle.map}
                />
              </View>
              <View style={responsiveStyle.bottomView}>
                <Text style={responsiveStyle.bottomText}>Order Shipped</Text>
                <Text style={responsiveStyle.bottomText}>
                  Rate & Review Products
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* <Text
              style={{
                fontFamily: "Lato-Bold",
                fontSize: 16,
                color: colors.black,
              }}
            >
              ID: #AD234
            </Text>
            <Text
              style={{
                fontFamily: "Lato-Regular",
                fontSize: 14,
                color: colors.primaryGreen,
              }}
            >
              Ordered on: 11/12/2022
            </Text>
            <Text
              style={{
                fontFamily: "Lato-Regular",
                fontSize: 14,
                color: colors.black,
              }}
            >
              1800 Elis St, san Fransisco, CA
            </Text>
            <Text
              style={{
                fontFamily: "Lato-Regular",
                fontSize: 14,
                color: colors.black,
              }}
            >
              94115, USA
            </Text>
            <Text
              style={{
                fontFamily: "Lato-Regular",
                fontSize: 14,
                color: colors.black,
              }}
            >
              Paid:{" "}
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 14,
                  color: colors.primaryGreen,
                }}
              >
                893.33
              </Text>
              , Item:{" "}
              <Text
                style={{
                  fontFamily: "Lato-Regular",
                  fontSize: 14,
                  color: colors.primaryGreen,
                }}
              >
                3
              </Text>
            </Text> */}
    </View>
  );
};

export default Orders;




