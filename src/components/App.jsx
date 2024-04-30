import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { useEffect, Suspence, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../redux/auth/selectors";
import Loader from "../components/Loader/Loader";
import Layout from "./Layout/Layout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  const {isRefreshing} = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <>
        <Layout>
          <Suspence fallback={<Loader />}>
            <Routes>
              <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegistrationPage />
                </RestrictedRoute>
              }
              />
              <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
              />
              <Route
              path="/contacts"
              element={
                <RestrictedRoute>
                  <ContactsPage />
                </RestrictedRoute>
              }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>            
          </Suspence>          
        </Layout>
      </>
  );
}

export default App;