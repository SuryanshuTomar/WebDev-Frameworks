// 1. IMPORT REDUXTOOLKIT PACKAGE AND GET AN INSTANCE OF CONFIGURESTORE FROM IT
const configureStore = require("@reduxjs/toolkit").configureStore;

const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// 2. IMPORT FEATURE'S/SLICE'S REDUCERS
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");

// IMPORT LOGGER AND GET A CREATELOGGER INSTANCE
const createLogger = require("redux-logger").createLogger;

// CREATE A LOGGER
const logger = createLogger();

// 2. CREATE THE STORE
// - To create a store we need to invoke configureStore() method from the redux-toolkit package.
// - This configureStore() method takes an object with key reducer that also takes and object
// - The reducer object combines all the slice/feature reducers we have created.
// - Then we export the store so that it can be used in our application.

// 3. APPLY MIDDLEWARE
// - The second key that configureStore() method take is the middleware key whose value is a function.
// - In middleware function, has getDefaultMiddleware function passed down as parameter.
// - And we have to return this getDefaultMiddleware function after concatinating our middleware function to it.

const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// 3. EXPORT THE STORE
module.exports = store;
