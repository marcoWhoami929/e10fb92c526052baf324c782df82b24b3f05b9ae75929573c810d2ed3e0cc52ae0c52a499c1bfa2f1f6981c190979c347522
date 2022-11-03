import React, { createContext, useState } from "react";

import { getProduct } from "../data/dataArrays";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [itemsFavorites, setItemsFavorites] = useState([]);
  const [login, setLogin] = useState(false);

  function addItemToCart(id, quantity) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: quantity,
            product,
            totalPrice: product.priceDiscount * quantity,
            price: product.price,
            total: product.price * quantity,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.priceDiscount;
            item.total += product.price;
          }
          return item;
        });
      }
    });
  }

  function addItemToFavorites(id) {
    const product = getProduct(id);
    setItemsFavorites((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.priceDiscount,
            price: product.price,
            total: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.priceDiscount;
            item.total += product.price;
          }
          return item;
        });
      }
    });
  }

  function deleteItemToCart(id) {
    setItems((items) => {
      return items.filter(function (el) {
        return el.id !== id;
      });
    });
  }
  function clearCart() {
    setItems([]);
  }
  function deleteItemToFavorites(id) {
    setItemsFavorites((itemsFavorites) => {
      return itemsFavorites.filter(function (el) {
        return el.id !== id;
      });
    });
  }
  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }
  function getItemsFavoritesCount() {
    return itemsFavorites.reduce((sum, item) => sum + item.qyt, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }
  function getTotal() {
    return items.reduce((sum, item) => sum + item.total, 0);
  }

  function getTotalFavoritesPrice() {
    return itemsFavorites.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        login,
        setLogin,
        setItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
        getTotal,
        itemsFavorites,
        setItemsFavorites,
        getItemsFavoritesCount,
        addItemToFavorites,
        getTotalFavoritesPrice,
        deleteItemToFavorites,
        deleteItemToCart,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
