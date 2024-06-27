export interface Product {
    _id: number;
    name: string;
    imgSrc: string;
    price: number;
    quantity:number;
    description?: string;  
    category: string;

}

interface MyProduct {
    _id: string;
    imgSrc: string;
     name: string;
    description:string;
    price: number;
    category: string;
  }

  
export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    // You can add more properties as needed
}

export interface LoadingState {
    isLoading: boolean;
  }
  
  