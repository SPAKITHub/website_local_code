import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./ScrollToHashElement";
import Index from "./pages/Index";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";
import Apply from "./pages/Apply";
import Academy from "./pages/academy";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/career" element={<Career />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToHashElement />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
