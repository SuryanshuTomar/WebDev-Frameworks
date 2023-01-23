// 1. IMPORT REDUXTOOLKIT PACKAGE AND GET AN INSTANCE OF CONFIGURESTORE FROM IT
const configureStore = require("@reduxjs/toolkit").configureStore;

// 2. IMPORT FEATURE'S/SLICE'S REDUCERS
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");

// 2. CREATE THE STORE
// - To create a store we need to invoke configureStore() method from the redux-toolkit package.
// - This configureStore() method takes an object with key reducer that also takes and object
// - The reducer object combines all the slice/feature reducers we have created.
// - Then we export the store so that it can be used in our application.

const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
	},
});

// 3. EXPORT THE STORE
module.exports = store;
