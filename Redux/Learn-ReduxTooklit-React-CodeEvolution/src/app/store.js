// 1. IMPORT REDUXTOOLKIT PACKAGE AND GET AN INSTANCE OF CONFIGURESTORE FROM IT
import { configureStore } from "@reduxjs/toolkit";

// 2. IMPORT FEATURE'S/SLICE'S REDUCERS
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";

// 3. IMPORT LOGGER AND GET A CREATELOGGER INSTANCE
import { createLogger } from "redux-logger";

// 4. CREATE A LOGGER
const logger = createLogger();

// 5. IMPORT THE USER REDUCER FOR THE ASYNC ACTION
import userReducer from "../features/user/userSlice";

// 2. CREATE THE STORE
// - To create a store we need to invoke configureStore() method from the redux-toolkit package.
// - This configureStore() method takes an object with key reducer that also takes and object
// - The reducer object combines all the slice/feature reducers we have created.
// - Then we export the store so that it can be used in our application.

// 4. APPLY MIDDLEWARE
// - The second key that configureStore() method take is the middleware key whose value is a function.
// - In middleware function, has getDefaultMiddleware function passed down as parameter.
// - And we have to return this getDefaultMiddleware function after concatinating our middleware function to it.

// 6. COMBINE ALL THE REDUCER WHILE CONFIGURING THE STORE
const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
		user: userReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// 7. EXPORT THE STORE
export default store; // default store
