import {Text, View, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../context';
import colors from '../../components/common/colors';
import Ordertotal from './Components/Ordertotal';
import Commonbutton from '../../components/Commonbutton';
import {useFocusEffect, useIsFocused, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useCallback, useEffect, useState} from 'react';
import Commonheaderleft from '../../components/Commonheaderleft';
import {useDispatch, useSelector} from 'react-redux';
import Snackbar from 'react-native-snackbar';
import { updateCartCount } from '../../storage/action';



const Cart = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const userId = useSelector(state =>state.userId);
  const cartCount = useSelector(state =>state.cartCount);
  const email = useSelector(state =>state.email);
  const mobilenumber = useSelector(state =>state.mobilenumber);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [charges, setCharges] = useState(0);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (cartProducts.length > 0) {
      setCharges(50);
    } else {
      setCharges(0);
    }
  }, [cartProducts]);

  useEffect(()=>{
    if(isFocused){
      getCartProducts();
    }
  },[isFocused]);
  const getCartProducts = async () => {
      await firestore()
      .collection('cart')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          let totalAmount = 0;
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const amount =
                parseFloat(doc?.data().price) * parseInt(doc?.data().quantity);
              totalAmount = totalAmount + amount;
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setTotal(totalAmount);
          setCartProducts(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Commonheaderleft />,
    });
  }, []);

  const updateArray = productInfo => {
    const result = cartProducts.filter(x => {
      return x.id !== productInfo.id;
    });
    setTotal(total - parseFloat(productInfo.price));

    setCartProducts(result);
    dispatch(updateCartCount(cartCount - 1));
  };

  const handleTotal = (type, productInfo) => {
    if (type === 'add') {
      setTotal(total + parseFloat(productInfo.price));
    } else {
      setTotal(total - parseFloat(productInfo.price));
    }
  };

  const onButtonPress = () => {
    if (cartProducts.length > 0) {
      if (email === '' || mobilenumber === '') {
        Snackbar.show({
          text: 'You have to complete your profile to continue.',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
        navigation.navigate('Account');
      } else {
        navigation.navigate('Addaddress', {
          cartProducts: cartProducts,
          total: parseFloat(total + charges).toFixed(2),
        });
      }
    } else {
      Snackbar.show({
        text: 'Your cart is empty',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.red,
        textColor: colors.white,
      });
    }
  };

  return (
    <ScrollView style={responsiveStyle.container}>
      <FlatList
        data={cartProducts}
        extraData={cartProducts}
        renderItem={({item, index}) => (
          <RenderItem
            item={item}
            index={index}
            updateArray={updateArray}
            handleTotal={handleTotal}
          />
        )}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
         return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                padding: 30,
              }}>
              <Text
                style={{
                  fontFamily: 'Lato-Black',
                  color: colors.black,
                  fontSize: 25,
                }}>
                Cart is empty
              </Text>
              <TouchableOpacity>
                <Text>Go to shop</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        ListFooterComponent={() => (
          <>
            <View style={responsiveStyle.renderview}>
              {/* start design */}
              <View style={responsiveStyle.offcircleview}>
                <View style={responsiveStyle.circleright} />
                <View style={responsiveStyle.circleright} />
                <View style={responsiveStyle.circleright} />
                <View style={responsiveStyle.circleright} />
              </View>

              <View
                style={{
                  width: '64%',
                  height: 100,
                  backgroundColor: colors.secondaryGreen,
                  padding: 20,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Black',
                      color: colors.primaryGreen,
                      fontSize: 50,
                    }}>
                    50
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        color: colors.primaryGreen,
                        fontSize: 14,
                      }}>
                      %
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        color: colors.primaryGreen,
                        fontSize: 14,
                      }}>
                      OFF
                    </Text>
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        color: colors.black,
                        fontSize: 16,
                      }}>
                      On your first Order
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        color: colors.black_level_3,
                        fontSize: 12,
                      }}>
                      Order above 2500 rupees.
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  height: 100,
                  backgroundColor: colors.secondaryGreen,
                }}>
                <View style={responsiveStyle.circleCenter} />
                <View
                  style={[
                    responsiveStyle.circleCenter,
                    {
                      marginBottom: -25 / 2,
                    },
                  ]}
                />
              </View>
              <View
                style={{
                  width: '25%',
                  height: 100,
                  backgroundColor: colors.secondaryGreen,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingRight: 15,
                  paddingVertical: 15,
                }}>
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    color: colors.black_level_3,
                    fontSize: 14,
                  }}>
                  Use Code
                </Text>
                <View
                  style={{
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    justifyContent: 'center',
                    borderRadius: 15,
                    backgroundColor: colors.primaryGreen,
                    overflow: 'hidden',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      color: colors.white,
                      textAlign: 'center',
                    }}>
                    SDC43
                  </Text>
                </View>
              </View>

              {/* end design */}
              <View style={{marginLeft: -25 / 2}}>
                <View style={responsiveStyle.circleright} />
                <View style={responsiveStyle.circleright} />
                <View style={responsiveStyle.circleright} />
                <View style={responsiveStyle.circleright} />
              </View>
            </View>

            <Ordertotal total={total} charges={charges} />
            <View>
            <Commonbutton
              buttontext={'proceed to checkout'}
                onButtonPress={onButtonPress}
            />
         
            </View>
          </>
        )}
      />
    </ScrollView>
  );
};

const RenderItem = ({item, index, updateArray, handleTotal}) => {
  console.log(item);
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const {userId} = useSelector(state => state);
  const navigation = useNavigation();
  const [qun, setQun] = useState(item.quantity);

  useEffect(() => {
    setQun(item.quantity);
  }, [item]);

  const addToCart = async () => {
    await firestore()
      .collection('cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.productId)
      .get()
      .then(snapshot => {
        firestore()
          .collection('cart')
          .doc(snapshot?.docs[0].id)
          .update({
            quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
          });
        handleTotal('add', item);
      });
  };

  const removeItem = async () => {
    if (qun <= 1) {
      //remove from cart
      await firestore()
        .collection('cart')
        .doc(item.id)
        .delete()
        .then(() => {
          updateArray(item);

        });
    } else {
      //update qun
      setQun(qun - 1);
      firestore()
        .collection('cart')
        .doc(item.id)
        .update({
          quantity: parseInt(item.quantity, 10) - 1,
        });
      handleTotal('minus', item);
    }
  };

  const redirectToProductDetails = () => {
    navigation.navigate('Productdetails', {products: item});
  };

  return (
    <TouchableOpacity
      onPress={redirectToProductDetails}
      style={responsiveStyle.productview}>
      <Image source={{uri: item.image}} style={responsiveStyle.productimage} />
      <View style={responsiveStyle.nameview}>
        <Text style={responsiveStyle.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={responsiveStyle.des} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={responsiveStyle.priceview}>
          <View style={responsiveStyle.priceview2}>
            <Text style={responsiveStyle.price}>₹{item.price}</Text>
            <View style={responsiveStyle.offview}>
              <Text style={responsiveStyle.offtext}>50%</Text>
            </View>
          </View>
          <View style={responsiveStyle.qunview}>
            <TouchableOpacity onPress={removeItem}>
              <Text style={responsiveStyle.quntext1}>-</Text>
            </TouchableOpacity>
            <Text style={responsiveStyle.quntext2}>{qun}</Text>
            <TouchableOpacity
              onPress={() => {
                setQun(qun + 1);
                addToCart();
              }}>
              <Text style={responsiveStyle.quntext1}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cart;
