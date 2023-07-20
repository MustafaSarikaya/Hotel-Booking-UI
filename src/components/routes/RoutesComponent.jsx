import { Route, Routes } from "react-router-dom";

import { AuthRoute } from "../auth/AuthRoute.jsx";
import { RoomPage } from "../room-page/RoomPage.jsx";
import { HomePage } from "../home-page/HomePage.jsx";
import { ContactPage } from "../contact-page/ContactPage.jsx";
import { BookingPage } from "../booking-page/BookingPage.jsx";
import { CheckoutPage } from "../checkout-page/CheckoutPage.jsx";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/contact-us" element={<ContactPage />} />
        <Route exact path="/bookings" element={<BookingPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthRoute />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route element={<h1>Page not found</h1>} />
        <Route path="room" element={<RoomPage />} />
      </Routes>
    </>
  );
};
export { RoutesComponent };
