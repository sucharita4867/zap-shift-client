import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../Layout/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
        loader: () => fetch("/sceviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("/sceviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/sceviceCenter.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
    ],
  },
]);



// <div className="bg-white p-10 rounded-xl my-10">
//   <h1 className="text-3xl font-bold text-[#03373d] mb-6">Be a Rider</h1>
//   <p className="max-w-xl">
//     Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
//     From personal packages to business shipments — we deliver on time, every time.
//   </p>

//   <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10 items-start">

//     {/* LEFT FORM SECTION */}
//     <div className="md:col-span-7 space-y-8">

//       {/* Personal Info */}
//       <fieldset className="space-y-3">
//         <h2 className="text-xl font-semibold text-secondary">Tell us about yourself</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="label text-lg">Your Name</label>
//             <input
//               type="text"
//               {...register("senderName")}
//               defaultValue={user?.displayName}
//               className="input w-full"
//               placeholder="Your Name"
//             />
//           </div>

//           <div>
//             <label className="label text-lg">Your Age</label>
//             <input
//               type="number"
//               {...register("age")}
//               className="input w-full"
//               placeholder="Your Age"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="label text-lg">Your Email</label>
//             <input
//               type="email"
//               {...register("senderEmail")}
//               defaultValue={user?.email}
//               className="input w-full"
//               placeholder="Your Email"
//             />
//           </div>

//           <div>
//             <label className="label text-lg">Select your District</label>
//             <select {...register("Districts")} className="select w-full">
//               <option disabled>Pick a district</option>
//               {districtsByRegion(senderRegion).map((d, i) => (
//                 <option key={i} value={d}>{d}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="label text-lg">NID No</label>
//             <input
//               type="number"
//               {...register("nid")}
//               className="input w-full"
//               placeholder="NID Number"
//             />
//           </div>

//           <div>
//             <label className="label text-lg">Contact</label>
//             <input
//               type="number"
//               {...register("contact")}
//               className="input w-full"
//               placeholder="Phone Number"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="label text-lg">Which Zone want to work?</label>
//           <select {...register("zone")} className="select w-full">
//             <option disabled>Select your working zone</option>
//             {regions.map((r, i) => (
//               <option key={i} value={r}>{r}</option>
//             ))}
//           </select>
//         </div>
//       </fieldset>

//       {/* Submit */}
//       <button className="btn bg-lime-400 text-black w-full mt-4">Submit</button>

//     </div>

//     {/* RIGHT IMAGE SECTION */}
//     <div className="md:col-span-5 flex justify-center">
//       <img src={agentImg} className="w-full max-w-md" alt="Rider" />
//     </div>

//   </div>
// </div>
