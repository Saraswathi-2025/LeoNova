import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminLogin() {
  const provider = new GoogleAuthProvider();

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // 🚨 ALLOW ONLY YOUR ADMIN EMAIL
      const allowedAdminEmail = "poorvi162025@gmail.com"; // ← CHANGE THIS

      if (user.email !== allowedAdminEmail) {
        alert("Access denied. You are not an admin.");
        auth.signOut();
        return;
      }

      // Redirect to admin page
      window.location.href = "/admin";
    } catch (error) {
      console.error(error);
      alert("Login failed.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#e0f2fe,#fde7d9)",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "28px" }}>Admin Login</h1>

      <button
        onClick={login}
        style={{
          padding: "14px 28px",
          borderRadius: "12px",
          fontSize: "18px",
          border: "none",
          background: "#fb923c",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
        }}
      >
        Login with Google
      </button>
    </div>
  );
}