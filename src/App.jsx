import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home";
import Header from "./components/Header";
import Planner from "./components/Planner";
import "./App.css";
import UmrahGuide from "./components/UmrahGuide";

function AppContent() {
  const location = useLocation();

  // Only show Header on these routes:
  const showHeaderRoutes = ["/home", "/planner", "/umrah-guide"];
  const showHeader = showHeaderRoutes.includes(location.pathname);

  return (
    <div className="App">
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/planner"
          element={
            <ProtectedRoute>
              <Planner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/umrah-guide"
          element={
            <ProtectedRoute>
              <UmrahGuide />
            </ProtectedRoute>
          }
        />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
