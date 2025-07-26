
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import LessonVariables from "./pages/LessonVariables";
import LessonFunctions from "./pages/LessonFunctions";
import LessonTables from "./pages/LessonTables";
import LessonControlFlow from "./pages/LessonControlFlow";
import Resources from "./pages/Resources";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering');
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Introduction />} />
            <Route path="/lesson-variables" element={<LessonVariables />} />
            <Route path="/lesson-functions" element={<LessonFunctions />} />
            <Route path="/lesson-tables" element={<LessonTables />} />
            <Route path="/lesson-control-flow" element={<LessonControlFlow />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
