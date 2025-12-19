import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Main Site
import Home from "@/pages/Home";
import PortfolioIndex from "@/pages/portfolio/PortfolioIndex";
import CaseDetail from "@/pages/portfolio/CaseDetail";

// Design System
import DesignHub from "@/pages/design-style/DesignHub";
import HistoryPage from "@/pages/design-style/History";
import PrinciplesPage from "@/pages/design-style/Principles";
import ReferencesPage from "@/pages/design-style/References";

// Client Site (NordFrame)
import ClientHome from "@/pages/client-site/ClientHome";
import ClientServices from "@/pages/client-site/ClientServices";
import ClientGallery from "@/pages/client-site/ClientGallery";
import ClientBook from "@/pages/client-site/ClientBook";
import ClientContact from "@/pages/client-site/ClientContact";

function Router() {
  return (
    <Switch>
      {/* Main Routes */}
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={PortfolioIndex} />
      <Route path="/portfolio/:slug" component={CaseDetail} />
      
      {/* Design System Routes */}
      <Route path="/design_style" component={DesignHub} />
      <Route path="/design_style/history" component={HistoryPage} />
      <Route path="/design_style/principles" component={PrinciplesPage} />
      <Route path="/design_style/references" component={ReferencesPage} />

      {/* Client Site Routes */}
      <Route path="/client_site" component={ClientHome} />
      <Route path="/client_site/services" component={ClientServices} />
      <Route path="/client_site/gallery" component={ClientGallery} />
      <Route path="/client_site/book" component={ClientBook} />
      <Route path="/client_site/contact" component={ClientContact} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
