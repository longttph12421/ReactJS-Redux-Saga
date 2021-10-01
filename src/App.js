//------------------------------------------------------
//  REACT
//------------------------------------------------------
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
//------------------------------------------------------
//  COMPONENT
//------------------------------------------------------
import configureStore from './store/configureStore';
import DefaultLayout from './components/dashboad/defaultLayouts/DefaultLayout';
import ProductBox from './containers/product/ProductBox';
import CategoryBox from './containers/category/CategoryBox';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/loading/index';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
//------------------------------------------------------

class App extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="App">
            <Router>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <Loading />
              <CategoryBox />
              <DefaultLayout />
            </Router>
          </div>
        </MuiPickersUtilsProvider>
      </Provider>
    );
  }
}

export default App;
