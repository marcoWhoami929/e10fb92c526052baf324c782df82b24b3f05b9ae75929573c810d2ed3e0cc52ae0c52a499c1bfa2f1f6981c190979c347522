import { Text } from "react-native";
import React, { Component } from "react";
import { products, brands, categories, buys, orders } from "./dataArrays";

export function getBrandById(brandId) {
  let brand;
  brands.map((data) => {
    if (data.id == brandId) {
      brand = data;
    }
  });
  return brand;
}

export function getRankingName(rankingID) {
  let name;
  rankings.map((data) => {
    if (data.rankingId == rankingID) {
      name = data.name;
    }
  });
  return name;
}
export function getCategoryName(categoryID) {
  let name;
  categories.map((data) => {
    if (data.categoryId == categoryID) {
      name = data.name;
    }
  });
  return name;
}

export function getRankingUrl(rankingID) {
  let url;
  rankings.map((data) => {
    if (data.rankingId == rankingID) {
      url = data.photo_url;
    }
  });
  return url;
}
export function getCategoryUrl(categoryID) {
  let url;
  categories.map((data) => {
    if (data.categoryId == categoryID) {
      url = data.photo_url;
    }
  });
  return url;
}
export function getBrandUrl(brandID) {
  let url;
  brands.map((data) => {
    if (data.id == brandID) {
      url = data.photo_url;
    }
  });
  return url;
}
export function getBrandName(brandId) {
  let name;
  brands.map((data) => {
    if (data.id == brandId) {
      name = data.name;
    }
  });
  return name;
}

export function getProducts(brandId) {
  const productsArray = [];
  products.map((data) => {
    if (data.brandId == brandId) {
      productsArray.push(data);
    }
  });
  return productsArray;
}

// modifica
export function getProductsByRanking(rankingId) {
  const productsArray = [];
  products.map((data) => {
    data.rankings.map((index) => {
      if (index[0] == rankingId) {
        productsArray.push(data);
      }
    });
  });
  return productsArray;
}
export function getProductsByCategory(categoryId) {
  const productsArray = [];
  products.map((data) => {
    data.categories.map((index) => {
      if (index[0] == categoryId) {
        productsArray.push(data);
      }
    });
  });
  return productsArray;
}
export function getNumberOfProducts(brandId) {
  let count = 0;
  products.map((data) => {
    if (data.brandId == brandId) {
      count++;
    }
  });
  return count;
}

export function getAllRankings(idArray) {
  const rankingsArray = [];
  idArray.map((index) => {
    rankings.map((data) => {
      if (data.rankingId == index[0]) {
        rankingsArray.push([data, index[1]]);
      }
    });
  });
  return rankingsArray;
}
export function getAllCategories(idArray) {
  const categoriesArray = [];
  idArray.map((index) => {
    categories.map((data) => {
      if (data.categoryId == index[0]) {
        categoriesArray.push([data, index[1]]);
      }
    });
  });
  return categoriesArray;
}
export function getAllProducts() {
  const productsArray = [];
  const unique = [...new Set(products)];
  unique.map((item) => {
    productsArray.push(item);
  });
  return productsArray;
}
// functions for search
export function getProductsByRankingName(rankingName) {
  const nameUpper = rankingName.toUpperCase();
  const productsArray = [];
  rankings.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const products = getProductsByRanking(data.rankingId);
      const unique = [...new Set(products)];
      unique.map((item) => {
        productsArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(productsArray)];
  return uniqueArray;
}
export function getProductsByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const productsArray = [];
  categories.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const products = getProductsByCategory(data.categoryId);
      const unique = [...new Set(products)];
      unique.map((item) => {
        productsArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(productsArray)];
  return uniqueArray;
}

export function getProductsByBrandName(brandName) {
  const nameUpper = brandName.toUpperCase();
  const productsArray = [];
  brands.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const products = getProducts(data.id); // return a vector of products
      products.map((item) => {
        productsArray.push(item);
      });
    }
  });
  return productsArray;
}

export function getProductsByProductName(productName) {
  const nameUpper = productName.toUpperCase();
  const productsArray = [];
  products.map((data) => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      productsArray.push(data);
    }
  });
  return productsArray;
}
export function getDetailShopping(shoppingId) {
  const detail = [];
  buys.map((data) => {
    if (data.id == shoppingId) {
      detail.push(data);
    }
  });
  return detail;
}
export function getDetailOrder(orderId) {
  const detail = [];
  orders.map((data) => {
    if (data.id == orderId) {
      detail.push(data);
    }
  });
  return detail;
}
export function getProductsByFilter(filter) {
  switch (filter) {
    case "price":
      products.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case "category":
      products.sort((a, b) => {
        return a.category - b.category;
      });
      break;
    case "stock":
      products.sort((a, b) => {
        return b.stock - a.stock;
      });
      break;
  }

  return products;
}
export function getFilterDiscountProducts() {
  const productsArray = [];
  products.map((data) => {
    if (data.discount > 0) {
      productsArray.push(data);
    }
  });
  return productsArray;
}
export function getFilterBrandProducts(id) {
  const productsArray = [];
  products.map((data) => {
    if (data.brandId == id) {
      productsArray.push(data);
    }
  });
  return productsArray;
}
