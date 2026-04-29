export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Island Cuisine",
        "image": "https://islandcuisineclt.com/og-image",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2025 E Arbors Dr #210",
            "addressLocality": "Charlotte",
            "addressRegion": "NC",
            "postalCode": "28262",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 35.2967,
            "longitude": -80.7568
        },
        "url": "https://islandcuisineclt.com",
        "telephone": "+1-980-237-2677",
        "servesCuisine": "Caribbean, Jamaican",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
                "opens": "11:00",
                "closes": "21:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday", "Saturday"],
                "opens": "11:00",
                "closes": "22:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday"],
                "opens": "12:00",
                "closes": "20:00"
            }
        ],
        "menu": "https://islandcuisineclt.com#menu",
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 35.2967,
                "longitude": -80.7568
            },
            "geoRadius": "15 mi"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
