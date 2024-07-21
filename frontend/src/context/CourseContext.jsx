import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { fetchUser } = UserData();

  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const mockPaymentHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${server}/api/course/checkout/${params.id}`,
        {},
        {
          headers: {
            token,
          },
        }
      );

      await fetchUser();
      await fetchCourses();
      await fetchMyCourse();
      toast.success("Payment successful!");
      setLoading(false);
      navigate(`/payment-success/${Date.now()}`); // Using timestamp as mock payment ID
    } catch (error) {
      toast.error(error.response?.data?.message || "Payment failed");
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {course && (
            <div className="course-description">
              <div className="course-header">
                <img
                  src={`${server}/${course.image}`}
                  alt=""
                  className="course-image"
                />
                <div className="course-info">
                  <h2>{course.title}</h2>
                  <p>Instructor: {course.createdBy}</p>
                  <p>Duration: {course.duration} weeks</p>
                </div>
              </div>

              <p>{course.description}</p>

              <p>Let's get started with course At ₹{course.price}</p>

              {user && user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              ) : (
                <button onClick={mockPaymentHandler} className="common-btn">
                  Buy Now
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CourseDescription;

// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { server } from "../main";

// const CourseContext = createContext();

// export const CourseContextProvider = ({ children }) => {
//   const [courses, setCourses] = useState([]);
//   const [course, setCourse] = useState([]);
//   const [mycourse, setMyCourse] = useState([]);

//   async function fetchCourses() {
//     try {
//       const { data } = await axios.get(`${server}/api/course/all`);

//       setCourses(data.courses);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function fetchCourse(id) {
//     try {
//       const { data } = await axios.get(`${server}/api/course/${id}`);
//       setCourse(data.course);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function fetchMyCourse() {
//     try {
//       const { data } = await axios.get(`${server}/api/mycourse`, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       setMyCourse(data.courses);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchCourses();
//     fetchMyCourse();
//   }, []);
//   return (
//     <CourseContext.Provider
//       value={{
//         courses,
//         fetchCourses,
//         fetchCourse,
//         course,
//         mycourse,
//         fetchMyCourse,
//       }}
//     >
//       {children}
//     </CourseContext.Provider>
//   );
// };

// export const CourseData = () => useContext(CourseContext);
