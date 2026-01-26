"use client";
import React, { useEffect } from "react";

type SEOProps = {
    pageTitle: string;
};

const SEO: React.FC<SEOProps> = ({ pageTitle }) => {
    useEffect(() => {
        document.title = pageTitle + ' - Hotelku - Hotel Next js Template';
    }, [pageTitle]);

    return null;
};

export default SEO;

