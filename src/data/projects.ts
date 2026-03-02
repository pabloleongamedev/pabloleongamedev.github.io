export const TAGS = {

    ASTRO: {
        name:"Astro",
        class:"bg-[#7836cf]/20 text-[#bc95ff]",
        icon:"lucide:rocket"
    },

    CSharp:{
        name:"",
        class:"bg-[#23272f] text-[#58c4dc]",
        icon:"local:csharp"
    },

    CPP:{
        name:"C++",
        class:"bg-[#23272f] text-[#58c4dc]",
        icon:"local:cpp"
    },

    UNITY:{
        name:"Unity 6.3",
        class:"bg-black/20 text-white",
        icon:"local:unity"
    },

    UNREAL:{
        name:"UE 5.6",
        class:"bg-[#0e1128]/20 text-white",
        icon:"local:unreal"
    },

    GIT:{
        name:"Git",
        class:"bg-[#f05032]/20 text-[#f05032]",
        icon:"local:git"
    },

    GITHUB:{
        name:"GitHub",
        class:"bg-[#333333]/20 text-white",
        icon:"local:github"
    },

    REACT:{
        name:"React",
        class:"bg-[#23272f] text-[#58c4dc]",
        icon:"lucide:atom"
    },

    TAILWIND:{
        name:"Tailwind CSS",
        class:"bg-[#003159] text-white",
        icon:"lucide:wind"
    },

    NODE:{
        name:"Node.js",
        class:"bg-[#339933]/20 text-[#6cc24a]",
        icon:"lucide:server"
    }

    };

export const PROJECTS = [
    {
        title: "SumoBall Soccer",
        description:
            "Juego del genero Tower Defense, desarrollado en unity con C#. El objetivo del juego es defender tu portería de los ataques enemigos, utilizando la mecanica de movimiento basada en el punto de vista del jugador y utilizando los potenciadores disponibles.",
        link: "https://pleond.itch.io/sumoball-soccer",
        github: "https://github.com/Phleond/SumoBall-Soccer",
        image: "/projects/sumoBallS.png",
        tags: [TAGS.UNITY, TAGS.CSharp, TAGS.GIT, TAGS.GITHUB],
    },
    /*
    {
        title: "EcoEarth - Sustainable E-commerce Platform",
        description:
            "A modern eco-friendly marketplace focused on sustainable living. Highly optimized for performance and accessibility, featuring a custom CMS for organic product curation.",
        link: "https://ecoearth-shop.dev",
        github: "https://github.com/jhondoe/ecoearth",
        image: "/projects/ecoearth.webp",
        tags: [TAGS.UNREAL, TAGS.CPP, TAGS.GIT],
    },
    */
];
