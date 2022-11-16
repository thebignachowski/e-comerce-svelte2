import HomeScreen from '../layouts/HomeScreen.svelte';
import ErrorScreen from '../layouts/ErrorScreen.svelte';
import LoginScreen from '../layouts/LoginScreen.svelte';
import RegisterScreen from '../layouts/RegisterScreen.svelte';
import ProductsScreen from '../layouts/ProductsScreen.svelte';
import CartScreen from '../layouts/CartScreen.svelte';
import PaidScreen from '../layouts/PaidScreen.svelte';

export const routes = {
    '/': HomeScreen,
    '/login': LoginScreen,
    '/register': RegisterScreen,
    '/products': ProductsScreen,
    '/cart': CartScreen,
    "/paid": PaidScreen,
    '*': ErrorScreen,
};