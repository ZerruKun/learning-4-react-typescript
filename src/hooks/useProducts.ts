import { AxiosError } from 'axios';
import React, {useState, useEffect} from 'react';
import { IProduct } from '../models';
import axios from 'axios';

const useProducts = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const fetchProducts = async () => {
      try {
        setError("");
        setLoading(true);
        const response = await axios.get<IProduct[]>(
          "https://fakestoreapi.com/products?limit=5"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);

    return {products, error, loading}
}

export default useProducts;

