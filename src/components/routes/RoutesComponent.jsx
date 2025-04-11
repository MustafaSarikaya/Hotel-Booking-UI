import { Route, Routes } from "react-router-dom";

import { AuthRoute } from "../auth/AuthRoute.jsx";
import { RoomPage } from "../room-page/RoomPage.jsx";
import { HomePage } from "../home-page/HomePage.jsx";
import { ContactPage } from "../contact-page/ContactPage.jsx";
import { BookingPage } from "../booking-page/BookingPage.jsx";
import { CheckoutPage } from "../checkout-page/CheckoutPage.jsx";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/bookings" element={<BookingPage />} />
      <Route path="/auth" element={<AuthRoute />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/room" element={<RoomPage />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export { RoutesComponent };
