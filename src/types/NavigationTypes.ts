export type AddressStackParamList = {
  Address: undefined;
  Home: undefined;
};

export type AppDrawerParamList = {
  Address: AddressStackParamList;
  Categories: MenuAndProductListStackParamList;
  HomePage: HomeStackParamList;
  Login: LoginStackParamList;
  ProductList: MenuAndProductListStackParamList;
};

export type HomeBottomtabParamList = {
  Account: undefined;
  Brand: undefined;
  category: undefined;
  Home: undefined;
  MyBag: undefined;
};

export type HomeStackParamList = {
  Cart: undefined;
  Category: undefined;
  Home: undefined;
  Product: undefined;
  ProductList: undefined;
  Splashscreen: undefined;
};

export type LoginStackParamList = {
  Login: undefined;
};

export type MenuAndProductListStackParamList = {
  Address: undefined;
  Cart: undefined;
  Category: undefined;
  Product: undefined;
  ProductList: undefined;
};
