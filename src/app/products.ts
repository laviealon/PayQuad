export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 8',
    price: 699,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'iPhone X',
    price: 799,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'iPhone 11',
    price: 1299,
    description: ''
  },
  {
    id: 4,
    name: 'iPhone 13',
    price: 1499,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/