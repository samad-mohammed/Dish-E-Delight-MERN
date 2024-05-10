import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("+91");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://dish-e-delight-mern.onrender.com/api/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers:{
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setTime("");
      setDate("");
      navigate('/success');
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="reservation.png" alt="resv" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>Make a Reservation</h1>
            <p>For further queries, please reach our customer executive</p>
            <form >
              <div>
                <input
                  type="text"
                  placeholder="First  Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last  Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email_tag"
                />
                <input
                  type="number"
                  placeholder="+ 91 - Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
                <button type="submit" onClick={handleReservation}>
                  {" "}
                  RESERVE NOW{" "}
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
