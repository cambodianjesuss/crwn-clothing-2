/**
 * This file is for understanding the application flow for myself
 */


/**
 * Entry index.js 
 * 
 * Wrapped entire App with BrowserRouter, for routes
 * App is wrapped with the UserProvider for user context
 * 
 * UserProvider -- /user.context.js
 * -- Creates UserContext that instantiate the initial value & setter function
 * -- Creates UserProvider that returns the UserContext with the hook to trigger state changes
 * 
 * Browser Router - index.js
 * --> App.js
 * ----> Route Navigation, then nest child routes
 * ----> navigation.component.js
 * ---------> Links
 * -------------> Outlet, renders child route
 */