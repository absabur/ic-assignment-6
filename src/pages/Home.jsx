import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-800">Auth App</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome, {user?.displayName || user?.email}!
          </h2>
          <p className="text-gray-600 mb-4">
            You have successfully logged in. This is a protected home page.
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold text-gray-700 mb-2">User Info:</h3>
            <p>
              <strong>UID:</strong> {user?.uid}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Name:</strong> {user?.displayName || "Not set"}
            </p>
            <p>
              <strong>Email verified:</strong>{" "}
              {user?.emailVerified ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
