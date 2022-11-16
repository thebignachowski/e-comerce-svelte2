import HomeScreen from '../layouts/HomeScreen.svelte';
import ErrorScreen from '../layouts/ErrorScreen.svelte';
import LoginScreen from '../layouts/LoginScreen.svelte';
import RegisterScreen from '../layouts/RegisterScreen.svelte';
import ProductsScreen from '../layouts/ProductsScreen.svelte';

export const routes = {
    '/': HomeScreen,
    '/login': LoginScreen,
    '/register': RegisterScreen,
    '/products': ProductsScreen,
    '*': ErrorScreen,
};