export type AddressStackParamList = {
  Address: undefined;
  Home: undefined;
};

export type AppDrawerParamList = {
  Address: AddressStackParamList;
  Categories: MenuAndProductListStackParamList;
  HomePage: HomeStackParamList;
  Mypage: LoginStackParamList;
  ProductList: MenuAndProductListStackParamList;
};

export type HomeBottomtabParamList = {
  Account: undefined;
  Brand: undefined;
  category: undefined;
  Home: undefined;
  MyBag: undefined;
  Mypage: undefined;
};

export type HomeStackParamList = {
  Cart: undefined;
  Category: undefined;
  Home: undefined;
  Product: undefined;
  ProductList: undefined;
  Splashscreen: undefined;
  Detail: undefined;
  Join: undefined;
  Mypage: undefined;
};

export type LoginStackParamList = {
  Mypage: undefined;
};

export type MenuAndProductListStackParamList = {
  Address: undefined;
  Cart: undefined;
  Category: undefined;
  Product: undefined;
  ProductList: undefined;
  Detail: undefined;
};
