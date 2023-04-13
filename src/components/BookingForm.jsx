import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookingForm.css";
import { submitAPI, getDateObject, getOccasion } from "../api";
import { useReservationState } from "../context/ReservationContext";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestNum, setGuestsNum] = useState(1);
  const [occasion, setOccasion] = useState(getOccasion);
  const availableTimes = getDateObject();

  const navigate = useNavigate();
  const { dispatch } = useReservationState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      toast.error("Please choose a date");
      return;
    }
    if (!time) {
      toast.error("Please choose a time");
      return;
    }
    if (guestNum < 1 || guestNum > 10) {
      toast.error("Please enter a number between 1 and 10");
      return;
    }
    if (!occasion) {
      toast.error("Please choose an occasion");
      return;
    }
    const formData = {
      date,
      time,
      guestNum,
      occasion,
    };
    const res = submitAPI(formData);

    if (res) {
      dispatch({ type: "SUBMIT_RESERVATION", payload: formData });
      navigate("/confirmed-booking");
    }
  };
  return (
    <form
      data-testid="booking-form"
      className="bookingForm"
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <fieldset>
        <legend>Reservation Details</legend>
        <label htmlFor="res-date">
          Choose date
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label htmlFor="res-time">
          Choose time
          <Select
            options={availableTimes}
            id="res-time"
            onChange={(e) => setTime(e.value)}
          ></Select>
        </label>
        <label htmlFor="guests">
          Number of guests
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guestNum}
            onChange={(e) => setGuestsNum(e.target.value)}
          />
        </label>

        <label htmlFor="occasion">
          Occasion
          <Select
            options={occasion}
            id="occasion"
            onChange={(e) => setOccasion(e.value)}
          ></Select>
        </label>
      </fieldset>
      <input
        type="submit"
        aria-label="Submit reservation form"
        value="Make Your reservation"
      />
    </form>
  );
};

export default BookingForm;
