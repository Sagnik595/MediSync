import React, {useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const TIME_SLOTS = [
  "8:00 am",
  "8:30 am",
  "9:00 am",
  "9:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
];

function getNextDays(count = 7) {
  const today = new Date();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return { day: DAYS[d.getDay()], date: d.getDate() };
  });
}

const Appointments = () => {
  const navigate = useNavigate();
  const { docID } = useParams();
  const doctor = doctors.find((d) => d._id === docID);
  console.log(doctor);

  const days = getNextDays();
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  if (!doctor)
    return (
      <>
        <Nav />
        <p className="text-center py-32 text-gray-400">Doctor not found.</p>
        <Footer />
      </>
    );

  const relatedDoctors = doctors
    .filter((d) => d.speciality === doctor.speciality && d._id !== doctor._id)
    .slice(0, 5);

  return (
    <>
      <Nav />

      <div className="mt-25 max-w-4xl mx-auto px-6 py-10">
        {/* Doctor Info Card */}
        <div className="flex flex-col sm:flex-row gap-6 border border-gray-200 rounded-2xl overflow-hidden mb-10">
          <div className="bg-blue-100 sm:w-56 shrink-0 flex items-end justify-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-52 object-cover object-top"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-semibold text-gray-900">
                {doctor.name}
              </h1>
              <span className="text-blue-500 text-lg">✔</span>
            </div>
            <p className="text-gray-500 text-sm mb-3">
              {doctor.degree} · {doctor.speciality}
              <span className="ml-2 border border-gray-300 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                {doctor.experience}
              </span>
            </p>
            <div className="mb-3">
              <p className="text-sm font-medium text-gray-700 mb-1">About</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {doctor.about}
              </p>
            </div>
            <p className="text-sm text-gray-700">
              Appointment fee:{" "}
              <span className="text-gray-900 font-semibold">
                ${doctor.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-gray-800 mb-4">
            Booking slots
          </h2>

          {/* Day Pills */}
          <div className="flex gap-3 mb-5 flex-wrap">
            {days.map((d, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedDay(i);
                  setSelectedTime(null);
                }}
                className={`flex flex-col items-center justify-center w-14 h-16 rounded-full border text-xs font-medium transition-all
                  ${
                    selectedDay === i
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-600 hover:border-blue-400"
                  }`}
              >
                <span>{d.day}</span>
                <span className="text-base font-semibold">{d.date}</span>
              </button>
            ))}
          </div>

          {/* Time Slots */}
          <div className="flex flex-wrap gap-3 mb-7">
            {TIME_SLOTS.map((t, i) => (
              <button
                key={i}
                onClick={() => setSelectedTime(t)}
                className={`px-4 py-1.5 rounded-full border text-sm transition-all
                  ${
                    selectedTime === t
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-600 hover:border-blue-400"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            disabled={!selectedTime}
            className={` cursor-pointer w-full sm:w-64 py-3 rounded-full text-white text-sm font-medium transition-all
              ${selectedTime ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}`}
          >
            Book an appointment
          </button>
        </div>

        {/* Related Doctors */}
        {relatedDoctors.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-1">
              Related Doctors
            </h2>
            <p className="text-gray-400 text-sm text-center mb-6">
              Simply browse through our extensive list of trusted doctors.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {relatedDoctors.map((d) => (
                <div
                  key={d._id}
                  className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-50 h-36">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                      <span className="text-green-600 text-xs">Available</span>
                    </div>
                    <p className="text-gray-800 text-sm font-medium truncate">
                      {d.name}
                    </p>
                    <p className="text-gray-400 text-xs truncate">
                      {d.speciality}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Appointments;
