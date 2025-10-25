import Header from "@/components/Header";
import React from "react";

const Layout = ({children}:{children: React.ReactNode}) => {
    return (
        <main className="min-h-screen text-gray-400">
            <Header />
            <div className="container py-10">
                {children}
            </div>
        </main>
    );
};

export default Layout;


<<<<<<< HEAD
=======

>>>>>>> 79faee37baa5d459c351cdb60fc2e40c329e24f0
