import { useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = useRef("");
  const address = useRef("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const register = async () => {
    const url = "http://localhost:4000/auth/register";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.current.value,
          address: address.current.value,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage("Successfully registered!");
      } else {
        setIsSuccess(false);
        setMessage(data.msg || "Registration failed. Please try again.");
      }

    } catch (error) {
      console.error("Error registering:", error);
      setIsSuccess(false);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "50vw",
          padding: "2rem",
          border: "2px solid #007bff",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 className="text-center">Smokestree</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Username</label>
            <input ref={user} type='text' className='form-control' />

            <label className="mt-3">Address</label>
            <input ref={address} type='text' className='form-control' />

            <button className='btn btn-warning mt-4 w-100' onClick={register}>
              Register
            </button>
          </div>
        </form>


        {message && (
          <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} mt-3`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
